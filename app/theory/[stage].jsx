import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { getAllLanguageModules } from '../../src/data/modules';
import { LANGUAGES, getStageLabel } from '../../src/storage';
import { C } from '../../src/theme';
import TheoryRenderer from '../../src/components/TheoryRenderer';

// ── Conteúdo da teoria geral ──────────────────────────────────────
const GERAL_SECTIONS = [
  {
    id: 'pronomes', title: 'Pronomes',
    subtitle: 'Pessoais, OD, OI e reflexivos',
    body: `PRONOMES PESSOAIS (SUJEITO):
  yo           nosotros / nosotras
  tú           vosotros / vosotras
  él / ella    ellos / ellas
  usted        ustedes

OBJETO DIRETO (CD) — responde "quê?" / "quem?":
  me   te   lo / la   nos   os   los / las
  → "Lo veo." / "La llamo." / "Los compré."

OBJETO INDIRETO (CI) — responde "a quem?" / "para quem?":
  me   te   le   nos   os   les
  → "Le doy el libro." / "Nos envían cartas."
  → Quando OD + OI juntos: le/les vira "se"
    "¿Le doy el libro?" → "Se lo doy."

PRONOMES REFLEXIVOS:
  me   te   se   nos   os   se
  → "Me levanto." / "Se llaman." / "¿Os duchasteis?"

PRONOMES DE LUGAR (CI + OD): ordem sempre CI antes de OD
  me lo, te la, se los, nos las, os lo, se las...`,
  },
  {
    id: 'ser-estar', title: 'Ser e Estar',
    subtitle: 'A distinção mais importante do espanhol',
    body: `SER — características permanentes/intrínsecas:
  • Identidade / nome: "Soy Pedro. Es Carlos."
  • Origem: "Es francesa. Somos de Brasil."
  • Profissão: "Es médico. Son profesores."
  • Hora e data: "Son las tres. Es lunes."
  • Material / composição: "Es de madera. Es oro."
  • Evento (onde ocorre): "La fiesta es en mi casa."

ESTAR — estados transitórios e localização:
  • Localização física: "Está en Madrid. Estamos aquí."
  • Estado físico/emocional: "Estoy cansado. Está triste."
  • Resultado de ação: "La puerta está cerrada."
  • Contínuo (estar + gerúndio): "Estoy comiendo."
  • Aspecto visual: "¡Estás muy guapo hoy!"

PARES QUE MUDAM DE SIGNIFICADO:
  Es aburrido   = é entediante  |  Está aburrido  = está entediado
  Es listo      = é esperto     |  Está listo     = está pronto
  Es malo       = é ruim/mau    |  Está malo      = está doente
  Es bueno      = é bondoso     |  Está bueno     = está gostoso
  Es rico       = é rico/abastado | Está rico     = está delicioso`,
  },
  {
    id: 'gramatica', title: 'Gramática — Artigos, Por e Para',
    subtitle: 'Artigos definidos/indefinidos + por vs. para',
    body: `ARTIGOS DEFINIDOS:
  el (m. sing.)   la (f. sing.)   los (m. pl.)   las (f. pl.)

ARTIGOS INDEFINIDOS:
  un (m. sing.)   una (f. sing.)   unos (m. pl.)   unas (f. pl.)

CONTRAÇÕES OBRIGATÓRIAS:
  de + el = del   (do)   → "Vengo del trabajo."
  a  + el = al    (ao)   → "Voy al mercado."

────────────────────────────────────────
PARA — finalidade, destino, destinatário, prazo, opinião:
  • Finalidade:     "Estudio para aprender."
  • Destinatário:   "Este regalo es para ti."
  • Prazo:          "Lo necesito para el lunes."
  • Opinião:        "Para mí, es difícil."
  • Destino físico: "Salgo para Madrid."

POR — causa, agente passivo, troca, duração, meio, lugar percorrido:
  • Causa:     "Lo hice por amor."
  • Meio:      "Te llamo por teléfono."
  • Lugar:     "Caminé por el parque."
  • Troca:     "Lo compré por diez euros."
  • Duração:   "Estudié por dos horas."
  • Agente:    "El libro fue escrito por Cervantes."`,
  },
  {
    id: 'verbos', title: 'Verbos — todos os tempos',
    subtitle: 'Presente · Passado · Futuro · Subjuntivo · Imperativo · Condicional',
    body: `══════════════════════════════
PRESENTE DO INDICATIVO
══════════════════════════════
Uso: ações habituais, fatos gerais, presente contínuo informal.

-AR (hablar):  hablo  hablas  habla  hablamos  habláis  hablan
-ER (comer):   como   comes   come   comemos   coméis   comen
-IR (vivir):   vivo   vives   vive   vivimos   vivís    viven

Irregulares essenciais:
  ser:    soy  eres  es  somos  sois  son
  estar:  estoy  estás  está  estamos  estáis  están
  ir:     voy  vas  va  vamos  vais  van
  tener:  tengo  tienes  tiene  tenemos  tenéis  tienen
  hacer:  hago  haces  hace  hacemos  hacéis  hacen
  poder:  puedo  puedes  puede  podemos  podéis  pueden
  querer: quiero  quieres  quiere  queremos  queréis  quieren
  decir:  digo  dices  dice  decimos  decís  dicen
  venir:  vengo  vienes  viene  venimos  venís  vienen
  saber:  sé  sabes  sabe  sabemos  sabéis  saben

══════════════════════════════
PRETÉRITO INDEFINIDO (Indefinido)
══════════════════════════════
Uso: ações concluídas num ponto específico no passado.
Marcadores: ayer, la semana pasada, en 2020, hace dos días.

-AR: hablé  hablaste  habló  hablamos  hablasteis  hablaron
-ER/-IR: comí  comiste  comió  comimos  comisteis  comieron

Irregulares:
  ser/ir: fui  fuiste  fue  fuimos  fuisteis  fueron
  tener:  tuve  tuviste  tuvo  tuvimos  tuvisteis  tuvieron
  hacer:  hice  hiciste  hizo  hicimos  hicisteis  hicieron
  estar:  estuve  estuviste  estuvo  estuvimos  estuvisteis  estuvieron
  decir:  dije  dijiste  dijo  dijimos  dijisteis  dijeron
  poder:  pude  pudiste  pudo  pudimos  pudisteis  pudieron
  venir:  vine  viniste  vino  vinimos  vinisteis  vinieron
  ver:    vi  viste  vio  vimos  visteis  vieron

══════════════════════════════
PRETÉRITO IMPERFECTO (Imperfecto)
══════════════════════════════
Uso: hábitos passados, cenários, ação em curso interrompida.
Marcadores: siempre, normalmente, de niño, antes, cuando era pequeño.

-AR: hablaba  hablabas  hablaba  hablábamos  hablabais  hablaban
-ER/-IR: comía  comías  comía  comíamos  comíais  comían

Apenas 3 irregulares:
  ser: era  eras  era  éramos  erais  eran
  ir:  iba  ibas  iba  íbamos  ibais  iban
  ver: veía  veías  veía  veíamos  veíais  veían

══════════════════════════════
PRETÉRITO PERFECTO (Perfecto)
══════════════════════════════
Uso (Espanha): ação passada com relevância no presente / hoje.
Fórmula: haber + participio

  he / has / ha / hemos / habéis / han + participio

Participios regulares: hablado · comido · vivido
Participios irregulares: hecho · dicho · puesto · visto · vuelto
                         abierto · escrito · roto · muerto · sido · ido

Na prática (Espanha):
  "Hoy he comido bien." (hoje → perfecto)
  "Ayer comí bien."     (ontem → indefinido)

══════════════════════════════
FUTURO SIMPLES
══════════════════════════════
Uso: ações futuras, previsões, probabilidade no presente.
Fórmula: infinitivo + terminação

hablaré  hablarás  hablará  hablaremos  hablaréis  hablarán

Irregulares (raiz muda):
  tener → tendr-  |  hacer → har-  |  poder → podr-
  venir → vendr-  |  decir → dir-  |  saber → sabr-
  ir → ir-        |  haber → habr-

IR A + INFINITIVO (futuro próximo, coloquial):
  "Voy a hablar."  /  "¿Vas a salir hoy?"

══════════════════════════════
PRESENTE DO SUBJUNTIVO
══════════════════════════════
Regra geral: 1ª pes. sing. do presente → troca a vogal temática
  -AR → -e:    hable  hables  hable  hablemos  habléis  hablen
  -ER/-IR → -a: coma  comas  coma  comamos  comáis  coman
                viva   vivas   viva   vivamos   viváis   vivan

Irregulares:
  ser:   sea  seas  sea  seamos  seáis  sean
  estar: esté  estés  esté  estemos  estéis  estén
  ir:    vaya  vayas  vaya  vayamos  vayáis  vayan
  tener: tenga  tengas...
  hacer: haga  hagas...
  decir: diga  digas...

Usos principais (desejo, emoção, dúvida, impessoal, tempo futuro):
  "Quiero que vengas."             (desejo)
  "Me alegra que estés bien."      (emoção)
  "No creo que sea verdad."        (dúvida)
  "Es importante que estudies."    (impessoal)
  "Cuando tengas tiempo, llámame." (futuro com "cuando")

══════════════════════════════
IMPERATIVO
══════════════════════════════
AFIRMATIVO (tú): 3ª pessoa do presente
  habla  come  vive  escribe  lee...
  Irregulares (tú): ven · di · haz · ten · sé · sal · pon · ve

AFIRMATIVO (vosotros): infinitivo − r + d
  hablad  comed  vivid

NEGATIVO: usa subjuntivo (tú / vosotros):
  No hables.  No comas.  No vayas.  No salgas.
  No habléis.  No comáis.

FORMAL (usted / ustedes) = subjuntivo:
  Hable.  Hablen.  No salga.  Siéntese, por favor.

══════════════════════════════
CONDICIONAL
══════════════════════════════
Fórmula: infinitivo + (-ía, -ías, -ía, -íamos, -íais, -ían)
  hablaría  hablarías  hablaría  hablaríamos  hablaríais  hablarían

Irregulares (mesmas raízes do futuro):
  tener → tendría  |  hacer → haría  |  poder → podría
  venir → vendría  |  decir → diría  |  saber → sabría

Usos:
  • Hipótese: "Con más tiempo, viajaría más."
  • Cortesia:  "¿Podría ayudarme?"
  • Si + imperfecto subj. → condicional:
    "Si tuviera dinero, viajaría."

══════════════════════════════
GERÚNDIO / CONTÍNUO
══════════════════════════════
-AR → -ando: hablando, trabajando, estudiando
-ER/-IR → -iendo: comiendo, viviendo, leyendo

Irregulares: diciendo · durmiendo · pudiendo · viniendo

Estar + gerúndio = ação em progresso:
  "Estoy comiendo."  /  "¿Qué estás haciendo?"`,
  },
  {
    id: 'falsos-amigos', title: 'Vocabulário — Falsos amigos',
    subtitle: 'Palavras que parecem PT mas significam outra coisa em ES',
    body: `CUIDADO — parecem iguais mas não são!

embarazada → grávida     (envergonhada = avergonzada)
borracho   → bêbado      (borracha = goma de borrar)
polvo      → pó / poeira (polvo = pulpo)
exquisito  → delicioso   (esquisito = raro / extraño)
largo      → longo       (largo = ancho)
éxito      → sucesso     (saída = salida)
constipado → resfriado   (constipado = estreñido)
pretender  → tentar      (pretender ES = cortejar)
sensible   → sensível    (sensato = sensato)
borrar     → apagar      (rasgar = rasgar)
actualmente → atualmente (na verdade = en realidad)
simpático  → legal/gentil (simpático também = simpático em PT)
vaso       → copo        (vaso = florero em PT)
sopa       → sopa        (IGUAL — cuidado com outros)
policia    → polícia     (IGUAL — mas: policial = agente)`,
  },
];

function getGeralSections(lang) {
  if (!lang || lang === 'es') return GERAL_SECTIONS;
  try {
    const extra = require('../../src/data/theory_extra');
    const key = `GERAL_SECTIONS_${lang.toUpperCase()}`;
    if (extra[key]) return extra[key];
  } catch {}
  return null; // non-ES tracks: show module theories instead, no generic section
}

export default function StageTheoryScreen() {
  const { stage, lang } = useLocalSearchParams();
  const activeLang = lang ?? 'es';
  const router = useRouter();
  const [openMod, setOpenMod] = useState(null);

  const isGeral = stage === 'geral';
  const allMods = getAllLanguageModules();
  const stageMods = isGeral ? [] : allMods.filter(m => m.language === activeLang && m.stage === stage && m.theory);
  const geralSections = isGeral ? getGeralSections(activeLang) : null;
  const sections = isGeral
    ? (geralSections ?? [])
    : stageMods.map((m, i) => ({ id: m.id, title: m.title, subtitle: m.subtitle, body: m.theory, num: i + 1 }));
  const noGeralContent = isGeral && !geralSections;

  const uiGroup = LANGUAGES.find(l => l.id === activeLang)?.group ?? 'pt';
  const pageTitle = isGeral ? 'Teoria Geral' : `Teoria — ${getStageLabel(stage, uiGroup)}`;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}>
          <Text style={styles.backBtnText}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle} numberOfLines={1}>{pageTitle}</Text>
        <View style={{ width: 70 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {noGeralContent && (
          <View style={styles.noContentBox}>
            <Text style={styles.noContentText}>
              A teoria geral está integrada em cada módulo desta trilha.{'\n'}
              Abra um módulo e toque em "Ver teoria do módulo" para estudar.
            </Text>
          </View>
        )}
        {sections.map((sec, i) => {
          const isOpen = openMod === sec.id;
          return (
            <View key={sec.id} style={styles.modBlock}>
              <TouchableOpacity
                style={[styles.modBtn, isOpen && styles.modBtnOpen]}
                onPress={() => setOpenMod(isOpen ? null : sec.id)}
                activeOpacity={0.7}>
                {!isGeral && (
                  <View style={styles.modNum}>
                    <Text style={styles.modNumText}>{i + 1}</Text>
                  </View>
                )}
                <View style={{ flex: 1 }}>
                  <Text style={styles.modTitle}>{sec.title}</Text>
                  {sec.subtitle
                    ? <Text style={styles.modSub}>{sec.subtitle}</Text>
                    : null}
                </View>
                <Text style={styles.chevron}>{isOpen ? '−' : '+'}</Text>
              </TouchableOpacity>

              {isOpen && (
                <View style={styles.theoryBox}>
                  <TheoryRenderer text={sec.body} />
                </View>
              )}
            </View>
          );
        })}
        <View style={{ height: 48 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 16, paddingTop: 14, paddingBottom: 14,
    borderBottomWidth: 1, borderBottomColor: C.border,
  },
  backBtn: { minWidth: 70 },
  backBtnText: { fontFamily: 'serif', fontSize: 14, color: C.accent },
  headerTitle: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text, flex: 1, textAlign: 'center' },
  scroll: { padding: 18 },
  modBlock: { marginBottom: 10 },
  modBtn: {
    flexDirection: 'row', alignItems: 'center', gap: 12,
    backgroundColor: C.bgAlt, borderWidth: 1, borderColor: C.border,
    borderRadius: 10, paddingVertical: 14, paddingHorizontal: 14,
  },
  modBtnOpen: {
    backgroundColor: C.accentLight, borderColor: C.accent,
    borderBottomLeftRadius: 0, borderBottomRightRadius: 0,
  },
  modNum: {
    width: 28, height: 28, borderRadius: 14,
    backgroundColor: C.accentLight, alignItems: 'center', justifyContent: 'center',
  },
  modNumText: { fontFamily: 'serif', fontSize: 12, fontWeight: '700', color: C.accent },
  modTitle: { fontFamily: 'serif', fontSize: 15, fontWeight: '700', color: C.text },
  modSub: { fontFamily: 'serif', fontSize: 12, color: C.textMuted, fontStyle: 'italic', marginTop: 2 },
  chevron: { fontSize: 16, color: C.textMuted, fontWeight: '700' },
  theoryBox: {
    borderWidth: 1, borderTopWidth: 0, borderColor: C.accent,
    borderBottomLeftRadius: 10, borderBottomRightRadius: 10,
    backgroundColor: C.bg, paddingHorizontal: 18, paddingVertical: 16,
  },
  theoryText: { fontFamily: 'serif', fontSize: 14, color: C.text, lineHeight: 24 },
  noContentBox: {
    backgroundColor: C.bgAlt, borderRadius: 10, padding: 20,
    borderWidth: 1, borderColor: C.border, marginBottom: 8,
  },
  noContentText: { fontFamily: 'serif', fontSize: 14, color: C.textMuted, lineHeight: 22, fontStyle: 'italic' },
});
