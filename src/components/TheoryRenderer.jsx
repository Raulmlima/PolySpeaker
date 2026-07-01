import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { C } from '../theme';

function parseTableLine(line) {
  return line
    .replace(/^\|/, '')
    .replace(/\|$/, '')
    .split('|')
    .map(cell => cell.trim());
}

function isTableRow(line) {
  return line.trim().startsWith('|') && line.trim().endsWith('|');
}

function isSeparatorRow(line) {
  return isTableRow(line) && /^[\|\-\:\s]+$/.test(line);
}

function isHeading(line) {
  return /^#{1,3}\s+/.test(line.trim());
}

function isCallout(line) {
  return /^(💡|⚠️?|🔑|📌)\s*/.test(line.trim());
}

function isBullet(line) {
  return /^\s*[•\-]\s+/.test(line);
}

// Splits contiguous lines into smaller blocks: headings, callouts, bullet groups, plain paragraphs
function splitTextLines(textLines) {
  const blocks = [];
  let i = 0;
  while (i < textLines.length) {
    const line = textLines[i];
    if (!line.trim()) { i++; continue; }

    if (isHeading(line)) {
      const level = (line.match(/^#+/) ?? ['#'])[0].length;
      blocks.push({ type: 'heading', level, content: line.replace(/^#{1,3}\s+/, '').trim() });
      i++;
      continue;
    }

    if (isCallout(line)) {
      const calloutLines = [line];
      i++;
      while (i < textLines.length && textLines[i].trim() && !isHeading(textLines[i]) && !isCallout(textLines[i]) && !isBullet(textLines[i])) {
        calloutLines.push(textLines[i]);
        i++;
      }
      const kind = line.trim().startsWith('⚠') ? 'warn' : 'tip';
      blocks.push({ type: 'callout', kind, content: calloutLines.join(' ').replace(/^(💡|⚠️?|🔑|📌)\s*/, '').trim() });
      continue;
    }

    if (isBullet(line)) {
      const items = [];
      while (i < textLines.length && isBullet(textLines[i])) {
        items.push(textLines[i].replace(/^\s*[•\-]\s+/, '').trim());
        i++;
      }
      blocks.push({ type: 'bullets', items });
      continue;
    }

    const paraLines = [];
    while (i < textLines.length && textLines[i].trim() && !isHeading(textLines[i]) && !isCallout(textLines[i]) && !isBullet(textLines[i])) {
      paraLines.push(textLines[i]);
      i++;
    }
    blocks.push({ type: 'para', content: paraLines.join('\n') });
  }
  return blocks;
}

function parseBlocks(text) {
  const lines = text.split('\n');
  const blocks = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (isTableRow(line) && !isSeparatorRow(line)) {
      const tableLines = [];
      while (i < lines.length && isTableRow(lines[i])) {
        if (!isSeparatorRow(lines[i])) tableLines.push(lines[i]);
        i++;
      }
      blocks.push({ type: 'table', lines: tableLines });
    } else {
      const textLines = [];
      while (i < lines.length && !isTableRow(lines[i])) {
        textLines.push(lines[i]);
        i++;
      }
      blocks.push(...splitTextLines(textLines));
    }
  }

  return blocks;
}

// Renders **bold** spans inside a single line of text
function renderInline(content, baseStyle, keyPrefix) {
  const parts = content.split(/(\*\*[^*]+\*\*)/g).filter(p => p !== '');
  return parts.map((part, idx) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      return <Text key={`${keyPrefix}-${idx}`} style={[baseStyle, styles.bold]}>{m[1]}</Text>;
    }
    return <Text key={`${keyPrefix}-${idx}`} style={baseStyle}>{part}</Text>;
  });
}

export default function TheoryRenderer({ text, textStyle }) {
  if (!text) return null;
  const blocks = parseBlocks(text);

  return (
    <View>
      {blocks.map((block, bi) => {
        if (block.type === 'heading') {
          return (
            <Text key={bi} style={[styles.heading, block.level === 1 ? styles.h1 : block.level === 2 ? styles.h2 : styles.h3]}>
              {block.content}
            </Text>
          );
        }

        if (block.type === 'callout') {
          return (
            <View key={bi} style={[styles.callout, block.kind === 'warn' ? styles.calloutWarn : styles.calloutTip]}>
              <Text style={styles.calloutIcon}>{block.kind === 'warn' ? '⚠️' : '💡'}</Text>
              <Text style={[styles.calloutText, textStyle]}>
                {renderInline(block.content, [styles.calloutText, textStyle], `${bi}`)}
              </Text>
            </View>
          );
        }

        if (block.type === 'bullets') {
          return (
            <View key={bi} style={styles.bulletGroup}>
              {block.items.map((item, ii) => (
                <View key={ii} style={styles.bulletRow}>
                  <Text style={styles.bulletDot}>•</Text>
                  <Text style={[styles.bodyText, textStyle, styles.bulletText]}>
                    {renderInline(item, [styles.bodyText, textStyle], `${bi}-${ii}`)}
                  </Text>
                </View>
              ))}
            </View>
          );
        }

        if (block.type === 'para') {
          return (
            <Text key={bi} style={[styles.bodyText, textStyle]}>
              {renderInline(block.content, [styles.bodyText, textStyle], `${bi}`)}
            </Text>
          );
        }

        // Table block
        const rows = block.lines.map(parseTableLine);
        if (!rows.length) return null;
        const colCount = Math.max(...rows.map(r => r.length));

        return (
          <View key={bi} style={styles.table}>
            {rows.map((row, ri) => (
              <View key={ri} style={[styles.row, ri === 0 && styles.headerRow]}>
                {Array.from({ length: colCount }).map((_, ci) => (
                  <View key={ci} style={[
                    styles.cell,
                    ci === 0 && styles.firstCell,
                    ci === colCount - 1 && styles.lastCell,
                    ri === 0 && styles.headerCell,
                    ri % 2 === 1 && styles.altCell,
                  ]}>
                    <Text style={[styles.cellText, ri === 0 && styles.headerCellText]}>
                      {row[ci] ?? ''}
                    </Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bodyText: {
    fontFamily: 'serif',
    fontSize: 14,
    color: C.text,
    lineHeight: 22,
    marginBottom: 10,
  },
  bold: { fontWeight: '700', color: C.text },
  heading: {
    fontFamily: 'serif',
    fontWeight: '700',
    color: C.accent,
    marginTop: 6,
    marginBottom: 8,
  },
  h1: { fontSize: 19 },
  h2: { fontSize: 16, textTransform: 'uppercase', letterSpacing: 0.8 },
  h3: { fontSize: 14, fontStyle: 'italic' },
  bulletGroup: { marginBottom: 10 },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 5 },
  bulletDot: { fontFamily: 'serif', fontSize: 14, color: C.accent, marginRight: 8, lineHeight: 22 },
  bulletText: { flex: 1, marginBottom: 0 },
  callout: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 8,
    borderWidth: 1,
    padding: 12,
    marginBottom: 14,
    gap: 8,
  },
  calloutTip: { backgroundColor: C.accentLight, borderColor: C.accent },
  calloutWarn: { backgroundColor: '#FFF3E0', borderColor: '#E8A23D' },
  calloutIcon: { fontSize: 15, marginTop: 1 },
  calloutText: {
    fontFamily: 'serif',
    fontSize: 13.5,
    color: C.text,
    lineHeight: 20,
    flex: 1,
    marginBottom: 0,
  },
  table: {
    borderWidth: 1.5,
    borderColor: C.accent,
    borderRadius: 6,
    overflow: 'hidden',
    marginBottom: 16,
    marginTop: 4,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  headerRow: {
    backgroundColor: C.accent,
  },
  altCell: {
    backgroundColor: C.bgAlt,
  },
  cell: {
    flex: 1,
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderRightWidth: 1,
    borderRightColor: C.border,
    justifyContent: 'center',
  },
  firstCell: {},
  lastCell: {
    borderRightWidth: 0,
  },
  headerCell: {
    paddingVertical: 10,
    borderRightColor: 'rgba(255,255,255,0.25)',
  },
  cellText: {
    fontFamily: 'serif',
    fontSize: 13,
    color: C.text,
    lineHeight: 19,
  },
  headerCellText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
  },
});
