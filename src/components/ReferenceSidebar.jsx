import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  Animated, StyleSheet, Dimensions, Modal,
} from 'react-native';
import { verbTables, PRONOUNS } from '../data/verbTables';
import { C } from '../theme';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = Math.min(width * 0.92, 380);

const SECTIONS = [
  { key: 'pronouns', label: 'Pronomes' },
  { key: 'articles', label: 'Artigos' },
  { key: 'numbers', label: 'Números' },
  { key: 'days', label: 'Dias e meses' },
  { key: 'false', label: 'Falsos cognatos' },
  { key: 'verbs', label: 'Tabelas verbais' },
  { key: 'common', label: 'Vocabulário essencial' },
];

export default function ReferenceSidebar({ visible, onClose }) {
  const slideAnim = useRef(new Animated.Value(SIDEBAR_WIDTH)).current;
  const [section, setSection] = useState('pronouns');
  const [selectedTense, setSelectedTense] = useState(null);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : SIDEBAR_WIDTH,
      duration: 260,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
        <Animated.View style={[styles.sidebar, { transform: [{ translateX: slideAnim }] }]}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Referência</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeBtn}>
              <Text style={styles.closeBtnText}>✕</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sectionBar}>
            {SECTIONS.map(s => (
              <TouchableOpacity
                key={s.key}
                style={[styles.sectionTab, section === s.key && styles.sectionTabActive]}
                onPress={() => setSection(s.key)}>
                <Text style={[styles.sectionTabText, section === s.key && styles.sectionTabTextActive]}>
                  {s.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <ScrollView style={styles.content}>
            {section === 'pronouns' && <PronounsSection />}
            {section === 'articles' && <ArticlesSection />}
            {section === 'numbers' && <NumbersSection />}
            {section === 'days' && <DaysSection />}
            {section === 'false' && <FalseFriendsSection />}
            {section === 'verbs' && <VerbsSection selectedTense={selectedTense} setSelectedTense={setSelectedTense} />}
            {section === 'common' && <VocabSection />}
            <View style={{ height: 40 }} />
          </ScrollView>
        </Animated.View>
      </View>
    </Modal>
  );
}

function SectionTitle({ text }) {
  return <Text style={styles.sectionTitle}>{text}</Text>;
}

function Row({ left, right, header }) {
  return (
    <View style={[styles.tableRow, header && styles.tableRowHeader]}>
      <Text style={[styles.tableCell, styles.tableCellLeft, header && styles.tableCellHeader]}>{left}</Text>
      <Text style={[styles.tableCell, header && styles.tableCellHeader]}>{right}</Text>
    </View>
  );
}

function PronounsSection() {
  return (
    <View style={styles.section}>
      <SectionTitle text="Pronomes pessoais" />
      <View style={styles.table}>
        <Row header left="Português" right="Espanhol" />
        <Row left="eu" right="yo" />
        <Row left="tu / você" right="tú" />
        <Row left="ele / ela" right="él / ella" />
        <Row left="nós" right="nosotros / nosotras" />
        <Row left="vós / vocês" right="vosotros / vosotras" />
        <Row left="eles / elas" right="ellos / ellas" />
      </View>

      <SectionTitle text="Pronomes possessivos" />
      <View style={styles.table}>
        <Row header left="PT" right="ES (masc./fem.)" />
        <Row left="meu / minha" right="mi / mis" />
        <Row left="teu / tua" right="tu / tus" />
        <Row left="seu / sua" right="su / sus" />
        <Row left="nosso / nossa" right="nuestro / nuestra" />
        <Row left="vosso / vossa" right="vuestro / vuestra" />
        <Row left="deles / delas" right="su / sus" />
      </View>

      <SectionTitle text="Pronomes demonstrativos" />
      <View style={styles.table}>
        <Row header left="PT" right="ES" />
        <Row left="este / esta / isto" right="este / esta / esto" />
        <Row left="esse / essa / isso" right="ese / esa / eso" />
        <Row left="aquele / aquela / aquilo" right="aquel / aquella / aquello" />
      </View>
    </View>
  );
}

function ArticlesSection() {
  return (
    <View style={styles.section}>
      <SectionTitle text="Artigos definidos" />
      <View style={styles.table}>
        <Row header left="Género / Número" right="Artigo" />
        <Row left="Masc. singular" right="el" />
        <Row left="Fem. singular" right="la" />
        <Row left="Masc. plural" right="los" />
        <Row left="Fem. plural" right="las" />
      </View>

      <SectionTitle text="Artigos indefinidos" />
      <View style={styles.table}>
        <Row header left="Género / Número" right="Artigo" />
        <Row left="Masc. singular" right="un" />
        <Row left="Fem. singular" right="una" />
        <Row left="Masc. plural" right="unos" />
        <Row left="Fem. plural" right="unas" />
      </View>

      <View style={styles.noteBox}>
        <Text style={styles.noteText}>
          ⚠ Femininos que começam com "a" tônico usam "el" no singular:{'\n'}
          el agua, el águila, el hacha — mas: las aguas, las águilas
        </Text>
      </View>
    </View>
  );
}

function NumbersSection() {
  const nums = [
    ['0', 'cero'], ['1', 'uno'], ['2', 'dos'], ['3', 'tres'], ['4', 'cuatro'],
    ['5', 'cinco'], ['6', 'seis'], ['7', 'siete'], ['8', 'ocho'], ['9', 'nueve'],
    ['10', 'diez'], ['11', 'once'], ['12', 'doce'], ['13', 'trece'], ['14', 'catorce'],
    ['15', 'quince'], ['16', 'dieciséis'], ['17', 'diecisiete'], ['18', 'dieciocho'],
    ['19', 'diecinueve'], ['20', 'veinte'],
    ['21', 'veintiuno'], ['30', 'treinta'], ['40', 'cuarenta'], ['50', 'cincuenta'],
    ['60', 'sesenta'], ['70', 'setenta'], ['80', 'ochenta'], ['90', 'noventa'],
    ['100', 'cien / ciento'], ['200', 'doscientos'], ['500', 'quinientos'],
    ['1000', 'mil'], ['1.000.000', 'un millón'],
  ];
  return (
    <View style={styles.section}>
      <SectionTitle text="Números" />
      <View style={styles.table}>
        <Row header left="Número" right="Espanhol" />
        {nums.map(([n, es]) => <Row key={n} left={n} right={es} />)}
      </View>
    </View>
  );
}

function DaysSection() {
  const days = [
    ['segunda-feira', 'lunes'],['terça-feira', 'martes'],['quarta-feira', 'miércoles'],
    ['quinta-feira', 'jueves'],['sexta-feira', 'viernes'],['sábado', 'sábado'],['domingo', 'domingo'],
  ];
  const months = [
    ['janeiro', 'enero'],['fevereiro', 'febrero'],['março', 'marzo'],['abril', 'abril'],
    ['maio', 'mayo'],['junho', 'junio'],['julho', 'julio'],['agosto', 'agosto'],
    ['setembro', 'septiembre'],['outubro', 'octubre'],['novembro', 'noviembre'],['dezembro', 'diciembre'],
  ];
  return (
    <View style={styles.section}>
      <SectionTitle text="Dias da semana" />
      <View style={styles.table}>
        <Row header left="Português" right="Espanhol" />
        {days.map(([pt, es]) => <Row key={pt} left={pt} right={es} />)}
      </View>
      <SectionTitle text="Meses" />
      <View style={styles.table}>
        <Row header left="Português" right="Espanhol" />
        {months.map(([pt, es]) => <Row key={pt} left={pt} right={es} />)}
      </View>
      <View style={styles.noteBox}>
        <Text style={styles.noteText}>Em espanhol os dias e meses escrevem-se em minúsculas.</Text>
      </View>
    </View>
  );
}

function FalseFriendsSection() {
  const pairs = [
    ['grávida', 'embarazada', 'embarrassed = avergonzada'],
    ['bêbado', 'borracho', 'borracha (PT) = goma/caucho'],
    ['pó / poeira', 'polvo', 'polvo (PT) = pulpo'],
    ['delicioso', 'exquisito', 'esquisito (PT) = raro/extraño'],
    ['longo', 'largo', 'largo (PT) = ancho'],
    ['salgado', 'salado', 'salada (PT) = ensalada'],
    ['sucesso', 'éxito', 'exit = salida'],
    ['sensível', 'sensible', 'sensible (EN) = sensato'],
    ['policial', 'policía', '(igual, mas atenção ao género: la policía)'],
    ['borrachar', 'emborrachar', 'borrar = apagar/rasgar'],
    ['constipado', 'resfriado', 'constipado (ES) = estreñido'],
    ['embaraçoso', 'vergonzoso', ''],
    ['poltrona', 'butaca / sillón', ''],
    ['pretender', 'intentar / querer', 'pretender (ES) = cortejar'],
  ];
  return (
    <View style={styles.section}>
      <SectionTitle text="Falsos cognatos PT → ES" />
      {pairs.map(([pt, es, note], i) => (
        <View key={i} style={[styles.falsePair, i % 2 === 0 && styles.falsePairAlt]}>
          <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
            <Text style={styles.falsePT}>{pt}</Text>
            <Text style={styles.falseArrow}>→</Text>
            <Text style={styles.falseES}>{es}</Text>
          </View>
          {!!note && <Text style={styles.falseNote}>{note}</Text>}
        </View>
      ))}
    </View>
  );
}

function VerbsSection({ selectedTense, setSelectedTense }) {
  return (
    <View style={styles.section}>
      {verbTables.map((table, i) => (
        <View key={i}>
          <TouchableOpacity
            style={styles.tenseRow}
            onPress={() => setSelectedTense(selectedTense === i ? null : i)}>
            <View style={{ flex: 1 }}>
              <Text style={styles.tenseName}>{table.tense}</Text>
              <Text style={styles.tenseDesc}>{table.description}</Text>
            </View>
            <Text style={styles.chevron}>{selectedTense === i ? '▲' : '▼'}</Text>
          </TouchableOpacity>
          {selectedTense === i && (
            <View style={styles.verbTableContainer}>
              {table.verbs.map((verb, j) => (
                <View key={j} style={styles.verbBlock}>
                  <View style={styles.verbBlockHeader}>
                    <Text style={styles.verbInfinitive}>{verb.infinitive}</Text>
                    <Text style={styles.verbMeaning}>{verb.meaning}</Text>
                  </View>
                  {PRONOUNS.map((pronoun, k) => (
                    <View key={k} style={[styles.verbRow, k % 2 === 0 && styles.verbRowAlt]}>
                      <Text style={styles.verbPronoun}>{pronoun}</Text>
                      <Text style={styles.verbForm}>{verb.forms[k]}</Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}

function VocabSection() {
  const groups = [
    {
      title: 'Saudações e expressões básicas',
      items: [
        ['Olá / Oi', 'Hola'], ['Bom dia', 'Buenos días'], ['Boa tarde', 'Buenas tardes'],
        ['Boa noite', 'Buenas noches'], ['Até logo', 'Hasta luego'], ['Adeus', 'Adiós'],
        ['Por favor', 'Por favor'], ['Obrigado/a', 'Gracias'], ['De nada', 'De nada'],
        ['Com licença', 'Con permiso / Perdón'], ['Desculpe', 'Lo siento / Disculpe'],
        ['Não entendo', 'No entiendo'], ['Pode repetir?', '¿Puede repetir?'],
        ['Fala mais devagar', 'Hable más despacio'], ['Como se diz...?', '¿Cómo se dice...?'],
      ],
    },
    {
      title: 'Casa e objetos comuns',
      items: [
        ['casa', 'casa'], ['quarto', 'habitación / cuarto'], ['cozinha', 'cocina'],
        ['casa de banho', 'baño / aseo'], ['sala', 'salón / sala de estar'],
        ['porta', 'puerta'], ['janela', 'ventana'], ['cama', 'cama'],
        ['mesa', 'mesa'], ['cadeira', 'silla'], ['armário', 'armario'],
        ['frigorífico', 'nevera / frigorífico'], ['televisão', 'televisión'],
        ['telemóvel', 'móvil'], ['computador', 'ordenador'],
      ],
    },
    {
      title: 'Comida e bebida',
      items: [
        ['pão', 'pan'], ['água', 'agua'], ['leite', 'leche'], ['vinho', 'vino'],
        ['cerveja', 'cerveza'], ['café', 'café'], ['carne', 'carne'], ['peixe', 'pescado'],
        ['frango', 'pollo'], ['arroz', 'arroz'], ['batata', 'patata'], ['tomate', 'tomate'],
        ['almoço', 'almuerzo / comida'], ['jantar', 'cena'], ['pequeno-almoço', 'desayuno'],
        ['conta (restaurante)', 'la cuenta'], ['mesa para dois', 'una mesa para dos'],
      ],
    },
    {
      title: 'Tempo e clima',
      items: [
        ['hoje', 'hoy'], ['ontem', 'ayer'], ['amanhã', 'mañana'],
        ['agora', 'ahora'], ['já', 'ya'], ['sempre', 'siempre'], ['nunca', 'nunca'],
        ['às vezes', 'a veces'], ['cedo', 'temprano'], ['tarde', 'tarde'],
        ['faz calor', 'hace calor'], ['faz frio', 'hace frío'], ['chove', 'llueve'],
        ['sol', 'sol'], ['nublado', 'nublado'],
      ],
    },
  ];

  return (
    <View style={styles.section}>
      {groups.map((g, i) => (
        <View key={i}>
          <SectionTitle text={g.title} />
          <View style={styles.table}>
            <Row header left="Português" right="Espanhol" />
            {g.items.map(([pt, es]) => <Row key={pt} left={pt} right={es} />)}
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { flex: 1, flexDirection: 'row', justifyContent: 'flex-end' },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)' },
  sidebar: {
    width: SIDEBAR_WIDTH,
    backgroundColor: C.bg,
    borderLeftWidth: 1,
    borderLeftColor: C.border,
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    paddingTop: 52,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  headerTitle: { fontFamily: 'serif', fontSize: 18, color: C.text, fontWeight: '600', letterSpacing: 0.5 },
  closeBtn: { padding: 6 },
  closeBtnText: { fontSize: 18, color: C.textMuted },
  sectionBar: {
    borderBottomWidth: 1,
    borderBottomColor: C.border,
    flexGrow: 0,
  },
  sectionTab: {
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  sectionTabActive: { borderBottomColor: C.accent },
  sectionTabText: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, whiteSpace: 'nowrap' },
  sectionTabTextActive: { color: C.accent, fontWeight: '600' },
  content: { flex: 1 },
  section: { padding: 16 },
  sectionTitle: {
    fontFamily: 'serif',
    fontSize: 11,
    fontWeight: '700',
    color: C.textMuted,
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginTop: 16,
    marginBottom: 8,
  },
  table: { borderWidth: 1, borderColor: C.border, borderRadius: 4, overflow: 'hidden', marginBottom: 8 },
  tableRow: { flexDirection: 'row', paddingVertical: 7, paddingHorizontal: 10, borderBottomWidth: 1, borderBottomColor: C.border },
  tableRowHeader: { backgroundColor: C.bgAlt },
  tableCell: { fontFamily: 'serif', fontSize: 14, color: C.text, flex: 1 },
  tableCellLeft: { flex: 1 },
  tableCellHeader: { fontWeight: '700', color: C.accent, fontSize: 12, letterSpacing: 0.5 },
  noteBox: { backgroundColor: C.accentLight, borderRadius: 4, padding: 10, marginTop: 4, marginBottom: 8 },
  noteText: { fontFamily: 'serif', fontSize: 13, color: C.accent, lineHeight: 19 },
  falsePair: { paddingVertical: 8, paddingHorizontal: 4, borderBottomWidth: 1, borderBottomColor: C.border },
  falsePairAlt: { backgroundColor: C.bgAlt },
  falsePT: { fontFamily: 'serif', fontSize: 14, color: C.textMuted, fontStyle: 'italic' },
  falseArrow: { fontSize: 14, color: C.border },
  falseES: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.accent },
  falseNote: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, marginTop: 2, marginLeft: 2 },
  tenseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 4,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: C.border,
  },
  tenseName: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  tenseDesc: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, marginTop: 2 },
  chevron: { fontSize: 11, color: C.textMuted },
  verbTableContainer: { backgroundColor: C.bgAlt, paddingBottom: 8 },
  verbBlock: { marginHorizontal: 8, marginTop: 10, borderWidth: 1, borderColor: C.border, borderRadius: 4, overflow: 'hidden' },
  verbBlockHeader: { backgroundColor: C.accent, paddingHorizontal: 12, paddingVertical: 7, flexDirection: 'row', justifyContent: 'space-between' },
  verbInfinitive: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: '#fff' },
  verbMeaning: { fontFamily: 'serif', fontSize: 12, color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' },
  verbRow: { flexDirection: 'row', paddingHorizontal: 12, paddingVertical: 6, justifyContent: 'space-between' },
  verbRowAlt: { backgroundColor: 'rgba(0,0,0,0.03)' },
  verbPronoun: { fontFamily: 'serif', fontSize: 13, color: C.textMuted, width: 100 },
  verbForm: { fontFamily: 'serif', fontSize: 14, fontWeight: '600', color: C.text },
});
