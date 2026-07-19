import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AiConsentModal({ visible, onAccept, onDecline }) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>AI Feature — Data Notice</Text>
          <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
            <Text style={styles.body}>
              PolySpeaker uses an AI service (DeepSeek) to check your answers and look up
              words during exercises.{'\n\n'}
              When you use these features, the <Text style={styles.bold}>exercise text and
              your typed answer</Text> are sent to DeepSeek's servers for processing. No
              personal information (name, email, location) is included.{'\n\n'}
              Data sent to DeepSeek is governed by their privacy policy and is not stored by
              PolySpeaker.{'\n\n'}
              Do you agree to share this data with DeepSeek to enable AI features?
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.accept} onPress={onAccept}>
            <Text style={styles.acceptText}>I Agree — Enable AI Features</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.decline} onPress={onDecline}>
            <Text style={styles.declineText}>No Thanks</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    maxHeight: '80%',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1B8FE0',
    marginBottom: 12,
  },
  scroll: { maxHeight: 220 },
  body: { fontSize: 14, color: '#333', lineHeight: 21 },
  bold: { fontWeight: '600' },
  accept: {
    backgroundColor: '#1B8FE0',
    borderRadius: 10,
    paddingVertical: 13,
    alignItems: 'center',
    marginTop: 20,
  },
  acceptText: { color: '#fff', fontWeight: '700', fontSize: 15 },
  decline: { alignItems: 'center', paddingVertical: 12 },
  declineText: { color: '#888', fontSize: 14 },
});
