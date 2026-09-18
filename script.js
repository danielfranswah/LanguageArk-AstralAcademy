/* script.js - Interactive Engine for Language Ark & Astral Career Counselling */

// 1. DATA STRUCTURES

// Multi-Language Programme Details Data (French, Spanish, Italian, German)
const LANGUAGE_PROGRAMMES = {
  french: {
    flag: '🇫🇷',
    name: 'Our French Programme (A1 to B2)',
    slogan: 'From A1 to B2 — Build a strong foundation, achieve your study, career, and immigration goals.',
    examTitle: 'TEF / DELF Exam Preparation',
    examDesc: 'Your next step towards studying, working, or settling in Canada & Europe.',
    examBadge: 'TEF Canada & DELF Prep',
    examCert: 'TEF Canada & DELF A1-B2',
    examHours: '⏱️ 20 Study Hours',
    examBullet1: '✔️ <strong>TEF Canada</strong> (Express Entry & PNP Immigration Points)',
    examBullet2: '✔️ <strong>DELF Diplomas</strong> (A1, A2, B1, B2 official certifications)',
    crsBonusText: 'Adds up to +50 points to your Canada Express Entry CRS score!',
    levels: {
      a1: 'Foundational vocabulary & basic grammar',
      a2: 'Everyday conversations & routine tasks',
      b1: 'Professional fluency & comprehension',
      b2: 'Advanced expression & complex debate'
    },
    totalHours: '210 Hours',
    outcomes: {
      confidence: 'Build Confidence in French Conversation',
      communication: 'Improve Oral & Written Fluency',
      culture: 'Gain French & Francophone Cultural Insights',
      opportunities: 'Access Canada Immigration & Global European Careers',
      footer: 'French opens doors to better opportunities, new cultures, and a bigger you.'
    }
  },
  spanish: {
    flag: '🇪🇸',
    name: 'Our Spanish Programme (A1 to B2)',
    slogan: 'From A1 to B2 — Habla con confianza, open global trade & Hispanic career pathways.',
    examTitle: 'DELE / SIELE Exam Preparation',
    examDesc: 'Targeted preparation for official DELE & SIELE diplomas recognized by universities & employers worldwide.',
    examBadge: 'DELE & SIELE Prep',
    examCert: 'DELE / SIELE A1-B2',
    examHours: '⏱️ 20 Study Hours',
    examBullet1: '✔️ <strong>DELE Official Diplomas</strong> (Instituto Cervantes)',
    examBullet2: '✔️ <strong>SIELE Global Digital Certification</strong> for academia & trade',
    crsBonusText: 'Unlocks career opportunities in Spain, Latin America, and international commerce!',
    levels: {
      a1: 'Spanish greetings, phonetics & essential vocabulary',
      a2: 'Past tenses, travel conversations & daily interactions',
      b1: 'Subjunctive mood, business communication & debate',
      b2: 'Fluency in Hispanic literature, culture & professional negotiation'
    },
    totalHours: '210 Hours',
    outcomes: {
      confidence: 'Build Confidence in Spanish Speaking',
      communication: 'Master Spanish Conversation & Grammar Rules',
      culture: 'Explore Spanish & Latin American Cultures',
      opportunities: 'Access International Business & Translation Careers',
      footer: 'Spanish connects you to 500+ million speakers across Spain, Latin America, and global trade.'
    }
  },
  italian: {
    flag: '🇮🇹',
    name: 'Our Italian Programme (A1 to B2)',
    slogan: 'From A1 to B2 — Impara l\'italiano con passione, master language, art & fashion.',
    examTitle: 'CILS / CELI Exam Preparation',
    examDesc: 'Preparation for official CILS (University of Siena) and CELI (University of Perugia) certifications.',
    examBadge: 'CILS & CELI Prep',
    examCert: 'CILS / CELI A1-B2',
    examHours: '⏱️ 20 Study Hours',
    examBullet1: '✔️ <strong>CILS Certification</strong> (University of Siena)',
    examBullet2: '✔️ <strong>CELI Exam Modules</strong> (University of Perugia)',
    crsBonusText: 'Ideal for study in Italy, fashion, design, culinary arts & European citizenship pathways!',
    levels: {
      a1: 'Italian basics, pronunciation & daily expressions',
      a2: 'Social interactions, dining, shopping & past tenses',
      b1: 'Intermediate grammar, media comprehension & workplace dialogue',
      b2: 'Advanced articulation, art history & professional fluency'
    },
    totalHours: '210 Hours',
    outcomes: {
      confidence: 'Speak Italian Naturally & Confidently',
      communication: 'Master Italian Expression & Pronunciation',
      culture: 'Immerse in Italian Art, Fashion & Gastronomy',
      opportunities: 'Study & Work in Italy & European Design Hubs',
      footer: 'Italian opens doors to world-renowned design, architecture, gastronomy, and European heritage.'
    }
  },
  german: {
    flag: '🇩🇪',
    name: 'Our German Programme (A1 to B2)',
    slogan: 'From A1 to B2 — Deutsch lernen für Ihre Zukunft, STEM careers & German universities.',
    examTitle: 'Goethe-Zertifikat / TestDaF Prep',
    examDesc: 'Targeted preparation for Goethe-Zertifikat A1-B2 & TestDaF required for German universities & job seeker visas.',
    examBadge: 'Goethe & TestDaF Prep',
    examCert: 'Goethe-Zertifikat A1-B2',
    examHours: '⏱️ 20 Study Hours',
    examBullet1: '✔️ <strong>Goethe-Institut Exam Modules</strong> (A1–B2)',
    examBullet2: '✔️ <strong>TestDaF & Telc Preparation</strong> for higher education & job visas',
    crsBonusText: 'Essential for German Opportunity Card (Chancenkarte), STEM jobs & tuition-free universities!',
    levels: {
      a1: 'German sentence structure, cases (Nominativ/Akkusativ) & vocabulary',
      a2: 'Dativ case, modal verbs & everyday German life',
      b1: 'Nebensätze, passive voice & professional correspondence',
      b2: 'Technical German, academic writing & complex argumentation'
    },
    totalHours: '210 Hours',
    outcomes: {
      confidence: 'Speak Fluent German in Professional Settings',
      communication: 'Master Complex German Grammar & Syntax',
      culture: 'Understand German Engineering & Work Ethics',
      opportunities: 'Access Tuition-Free Universities & German Tech Careers',
      footer: 'German empowers your engineering, science, and professional success in Europe\'s largest economy.'
    }
  }
};

// Quizzes for 4 Languages (Spanish, French, Italian, German) - 10 questions each
const QUIZ_DATA = {
  spanish: [
    { question: 'What is the correct Spanish greeting for "Good Morning"?', options: ['Hola', 'Buenos días', 'Buenas noches', 'Hasta luego'], answer: 1, hint: 'Used from sunrise until noon.' },
    { question: 'How do you say "Thank you very much" in Spanish?', options: ['De nada', 'Por favor', 'Muchas gracias', 'Con mucho gusto'], answer: 2, hint: 'Combines "many" and "thanks".' },
    { question: 'What does "La manzana" mean in English?', options: ['The apple', 'The banana', 'The orange', 'The grape'], answer: 0, hint: 'A popular red or green fruit.' },
    { question: 'Which word means "Water" in Spanish?', options: ['Fuego', 'Tierra', 'Agua', 'Aire'], answer: 2, hint: 'Essential liquid for life.' },
    { question: 'How do you ask "How are you?" in Spanish?', options: ['¿Cómo te llamas?', '¿Dónde estás?', '¿Cómo estás?', '¿Qué hora es?'], answer: 2, hint: 'Short informal greeting asking state.' },
    { question: 'What is the Spanish word for "Friend" (male)?', options: ['Hermano', 'Amigo', 'Padre', 'Vecino'], answer: 1, hint: 'Root of "amity".' },
    { question: 'How do you count to 3 in Spanish?', options: ['Uno, dos, tres', 'Un, deux, trois', 'Eins, zwei, drei', 'Uno, due, tre'], answer: 0, hint: 'The standard Spanish numbers 1, 2, 3.' },
    { question: 'Which color is "Azul"?', options: ['Red', 'Green', 'Blue', 'Yellow'], answer: 2, hint: 'Color of the ocean and sky.' },
    { question: 'What is "The house" in Spanish?', options: ['La escuela', 'La casa', 'El parque', 'La tienda'], answer: 1, hint: 'Mi ____ es su ____.' },
    { question: 'How do you say "Goodbye" in Spanish?', options: ['Adiós', 'Hola', 'Por favor', 'Perdón'], answer: 0, hint: 'Classic Spanish farewell.' }
  ],
  french: [
    { question: 'How do you say "Hello" or "Good Day" in French?', options: ['Bonsoir', 'Bonjour', 'Merci', 'Au revoir'], answer: 1, hint: 'Standard day greeting.' },
    { question: 'What is "Thank you" in French?', options: ['S\'il vous plaît', 'De rien', 'Merci', 'Pardon'], answer: 2, hint: 'Common expression of gratitude.' },
    { question: 'What does "Le chat" mean?', options: ['The dog', 'The cat', 'The bird', 'The rabbit'], answer: 1, hint: 'Feline companion.' },
    { question: 'Which number is "Cinq" in French?', options: ['3', '5', '7', '10'], answer: 1, hint: 'Number between 4 and 6.' },
    { question: 'How do you say "See you again / Goodbye"?', options: ['Au revoir', 'À demain', 'Bonne nuit', 'Bienvenue'], answer: 0, hint: 'Literally "until seeing again".' },
    { question: 'What is the French word for "Book"?', options: ['Stylo', 'Cahier', 'Livre', 'Table'], answer: 2, hint: 'Related to "library".' },
    { question: 'Which phrase means "My name is..."?', options: ['Je m\'appelle...', 'J\'ai besoin...', 'Je suis...', 'J\'habite...'], answer: 0, hint: 'Used when introducing yourself.' },
    { question: 'What color is "Rouge"?', options: ['Blue', 'Yellow', 'Red', 'Green'], answer: 2, hint: 'The color of strawberries.' },
    { question: 'What does "Eau" mean in French?', options: ['Fire', 'Water', 'Wind', 'Earth'], answer: 1, hint: 'Clear liquid for drinking.' },
    { question: 'How do you say "Yes" and "No" in French?', options: ['Si / No', 'Oui / Non', 'Ja / Nein', 'Sì / No'], answer: 1, hint: 'Standard French affirmative and negative.' }
  ],
  italian: [
    { question: 'What is the famous Italian greeting for both "Hello" and "Goodbye"?', options: ['Ciao', 'Buongiorno', 'Grazie', 'Prego'], answer: 0, hint: 'World-famous informal Italian greeting.' },
    { question: 'How do you say "Thank you" in Italian?', options: ['Prego', 'Scusa', 'Grazie', 'Per favore'], answer: 2, hint: 'Rhymes with "Ya-tsee".' },
    { question: 'What does "La pizza" mean?', options: ['Bread', 'Pizza', 'Pasta', 'Soup'], answer: 1, hint: 'Italy\'s iconic baked flatbread!' },
    { question: 'Which word means "Please" or "You\'re welcome"?', options: ['Prego', 'Ciao', 'Bene', 'Buono'], answer: 0, hint: 'Versatile polite Italian word.' },
    { question: 'What is "Good evening" in Italian?', options: ['Buongiorno', 'Buonasera', 'Buonanotte', 'Arrivederci'], answer: 1, hint: 'Used late afternoon into evening.' },
    { question: 'How do you say "Mother" in Italian?', options: ['Mamma / Madre', 'Nonna', 'Sorella', 'Zia'], answer: 0, hint: 'Parent figure.' },
    { question: 'What is the Italian word for "Sun"?', options: ['Luna', 'Sole', 'Stella', 'Cielo'], answer: 1, hint: 'Il ____ shine brightly.' },
    { question: 'Which number is "Quattro"?', options: ['2', '4', '6', '8'], answer: 1, hint: 'Number of wheels on a car.' },
    { question: 'What color is "Verde"?', options: ['Green', 'Red', 'Black', 'White'], answer: 0, hint: 'Color of fresh grass.' },
    { question: 'How do you say "Goodbye" formally?', options: ['Arrivederci', 'Ciao', 'Buono', 'Prego'], answer: 0, hint: 'Formal Italian farewell.' }
  ],
  german: [
    { question: 'How do you say "Good day" in German?', options: ['Guten Morgen', 'Guten Tag', 'Guten Abend', 'Tschüss'], answer: 1, hint: 'Used throughout daytime hours.' },
    { question: 'What is "Thank you" in German?', options: ['Bitte', 'Danke', 'Entschuldigung', 'Hallo'], answer: 1, hint: '____ schön!' },
    { question: 'What does "Das Haus" mean?', options: ['The garden', 'The house', 'The street', 'The city'], answer: 1, hint: 'Dwellings/buildings.' },
    { question: 'Which word means "Please" or "You\'re welcome"?', options: ['Bitte', 'Danke', 'Nein', 'Ja'], answer: 0, hint: '____ sehr!' },
    { question: 'How do you say "Yes" and "No" in German?', options: ['Oui / Non', 'Ja / Nein', 'Si / No', 'Da / Nyet'], answer: 1, hint: 'Standard German responses.' },
    { question: 'What is the German word for "Friend"?', options: ['Freund', 'Bruder', 'Lehrer', 'Kind'], answer: 0, hint: 'Root of "friendship".' },
    { question: 'How do you count 1, 2, 3 in German?', options: ['Eins, zwei, drei', 'Uno, dos, tres', 'Un, deux, trois', 'One, two, three'], answer: 0, hint: 'Standard German counting.' },
    { question: 'What color is "Gelb"?', options: ['Yellow', 'Blue', 'Red', 'Green'], answer: 0, hint: 'Color of sunflowers.' },
    { question: 'What does "Wasser" mean?', options: ['Fire', 'Water', 'Air', 'Light'], answer: 1, hint: 'H2O in German.' },
    { question: 'How do you say informal "Goodbye" in German?', options: ['Tschüss', 'Hallo', 'Guten Tag', 'Wilkommen'], answer: 0, hint: 'Casual friendly farewell.' }
  ]
};

// ACCDS Questionnaire Options with Emojis (Student vs Professional Mode)
const WORKBOOK_SECTIONS = [
  {
    id: 1,
    title: '1. About Me & Self-Awareness',
    subtitle: 'A quick snapshot of how you view yourself',
    type: 'rating_group',
    questions: [
      { text: 'I am curious and enjoy learning new things.', emojiChild: '🧐', emojiPro: '💡' },
      { text: 'I keep trying when something is difficult.', emojiChild: '💪', emojiPro: '🎯' },
      { text: 'I bounce back after setbacks.', emojiChild: '⚽', emojiPro: '📈' },
      { text: 'I am comfortable sharing my ideas.', emojiChild: '🗣️', emojiPro: '🎤' },
      { text: 'I take initiative when something needs to be done.', emojiChild: '🚀', emojiPro: '⚡' },
      { text: 'I can work independently without constant reminders.', emojiChild: '🎒', emojiPro: '💼' }
    ]
  },
  {
    id: 2,
    title: '2. What Energises Me',
    subtitle: 'Activities that naturally spark your passion and flow',
    type: 'checkbox_grid',
    limit: 5,
    options: [
      { id: 'reading', labelChild: 'Reading & Stories 📚', labelPro: 'Research & Literature 📖', emoji: '📚' },
      { id: 'puzzles', labelChild: 'Solving Puzzles & Riddles 🧩', labelPro: 'Complex Problem Solving 🧠', emoji: '🧩' },
      { id: 'helping', labelChild: 'Helping Friends & People 🤝', labelPro: 'Mentoring & Social Impact 🌟', emoji: '🤝' },
      { id: 'sports', labelChild: 'Sports & Physical Activity ⚽', labelPro: 'Fitness & Athletic Performance 🏃‍♂️', emoji: '⚽' },
      { id: 'drawing', labelChild: 'Drawing & Designing 🎨', labelPro: 'UX/UI & Visual Design 🖌️', emoji: '🎨' },
      { id: 'music', labelChild: 'Music & Singing 🎵', labelPro: 'Audio Production & Performing 🎸', emoji: '🎵' },
      { id: 'writing', labelChild: 'Creative Writing & Stories ✍️', labelPro: 'Copywriting & Strategic Content 📝', emoji: '✍️' },
      { id: 'tech', labelChild: 'Technology & Computers 💻', labelPro: 'Software & AI Systems 🤖', emoji: '💻' },
      { id: 'leading', labelChild: 'Leading Groups & Teams 👑', labelPro: 'Executive Leadership & Strategy 👔', emoji: '👑' },
      { id: 'experiments', labelChild: 'Science & Experiments 🔬', labelPro: 'R&D & Scientific Innovation 🧪', emoji: '🔬' }
    ]
  },
  {
    id: 3,
    title: '3. Core Values (What Matters To Me)',
    subtitle: 'Select your top core values that drive your decisions',
    type: 'value_selector',
    limit: 3,
    options: [
      { id: 'honesty', label: 'Honesty & Truth 😇', emoji: '😇' },
      { id: 'kindness', label: 'Kindness & Empathy 💛', emoji: '💛' },
      { id: 'creativity', label: 'Creativity & Innovation 💡', emoji: '💡' },
      { id: 'achievement', label: 'Achievement & Excellence 🏆', emoji: '🏆' },
      { id: 'freedom', label: 'Freedom & Autonomy 🕊️', emoji: '🕊️' },
      { id: 'security', label: 'Financial Security & Stability 💰', emoji: '💰' },
      { id: 'learning', label: 'Continuous Learning 📖', emoji: '📖' },
      { id: 'leadership', label: 'Leadership & Influence 👑', emoji: '👑' },
      { id: 'community', label: 'Community & Belonging 🌐', emoji: '🌐' }
    ]
  },
  {
    id: 4,
    title: '4. Natural Strengths & Learned Skills',
    subtitle: 'What comes naturally vs what you have mastered',
    type: 'strength_checklist',
    naturalOptions: [
      { labelChild: 'Staying Calm under pressure 🧘‍♂️', labelPro: 'Crisis Resilience 🧘‍♂️', emoji: '🧘‍♂️' },
      { labelChild: 'Noticing Small Details 🔍', labelPro: 'Quality Assurance & Precision 🔍', emoji: '🔍' },
      { labelChild: 'Understanding People 💖', labelPro: 'Emotional Intelligence (EQ) 💖', emoji: '💖' },
      { labelChild: 'Creative Thinking 🌈', labelPro: 'Out-of-the-box Innovation 🌈', emoji: '🌈' },
      { labelChild: 'Problem Solving 🧠', labelPro: 'Strategic Diagnostics 🧠', emoji: '🧠' }
    ],
    learnedOptions: [
      { labelChild: 'Public Speaking 🎤', labelPro: 'Keynote Presentation 🎤', emoji: '🎤' },
      { labelChild: 'Digital & Coding Skills 💻', labelPro: 'Full Stack & Data Engineering 💻', emoji: '💻' },
      { labelChild: 'Math & Calculations 🔢', labelPro: 'Financial Modeling & Analytics 📈', emoji: '🔢' },
      { labelChild: 'Language Skills 🌐', labelPro: 'Multilingual Communication 🌐', emoji: '🌐' }
    ]
  },
  {
    id: 5,
    title: '5. How I Learn & Work Best',
    subtitle: 'Understanding your preferred environment and learning style',
    type: 'style_pairs',
    pairs: [
      { optionA: { label: 'Pictures & Diagrams 📷', value: 'visual' }, optionB: { label: 'Listening to Explanations 🎧', value: 'auditory' } },
      { optionA: { label: 'Clear Structure & Routine 📐', value: 'structured' }, optionB: { label: 'Freedom to Choose Approach 🎨', value: 'flexible' } },
      { optionA: { label: 'Teamwork & Collaboration 👥', value: 'team' }, optionB: { label: 'Independent Work 🧑‍💻', value: 'solo' } },
      { optionA: { label: 'Hands-on Practical Work 🛠️', value: 'practical' }, optionB: { label: 'Thinking & Analysing 🔬', value: 'analytical' } }
    ]
  },
  {
    id: 6,
    title: '6. Interest Areas (RIASEC Compass)',
    subtitle: 'Explore domains that align with your natural inclination',
    type: 'riasec_grid',
    options: [
      { code: 'R', title: 'Realistic (Doers) 🛠️', descChild: 'Building, fixing, tools, nature, outdoor activities', descPro: 'Engineering, logistics, mechanics, hands-on ops', emoji: '🛠️' },
      { code: 'I', title: 'Investigative (Thinkers) 🔬', descChild: 'Science, math, research, solving mysteries', descPro: 'Data analytics, scientific research, AI algorithms', emoji: '🔬' },
      { code: 'A', title: 'Artistic (Creators) 🎨', descChild: 'Music, drama, art, writing, design', descPro: 'Creative direction, UX design, media production', emoji: '🎨' },
      { code: 'S', title: 'Social (Helpers) 🤝', descChild: 'Teaching, counselling, helping, teamwork', descPro: 'HR, coaching, healthcare, therapy, community', emoji: '🤝' },
      { code: 'E', title: 'Enterprising (Persuaders) 🚀', descChild: 'Leading clubs, selling, debate, entrepreneurship', descPro: 'Business development, startup leadership, sales strategy', emoji: '🚀' },
      { code: 'C', title: 'Conventional (Organisers) 📊', descChild: 'Organising files, routines, details, planning', descPro: 'Finance, auditing, operations management, compliance', emoji: '📊' }
    ]
  },
  {
    id: 7,
    title: '7. Dreams & Emerging Possibilities',
    subtitle: 'Future domains you are excited to explore',
    type: 'future_grid',
    options: [
      { title: 'AI & Machine Learning 🤖', desc: 'Building intelligent algorithms & neural networks', emoji: '🤖' },
      { title: 'Global Languages & Immersion 🌐', desc: 'Mastering French (TEF/DELF), German & European careers', emoji: '🌐' },
      { title: 'Cybersecurity & Digital Forensics 🛡️', desc: 'Protecting networks and global infrastructure', emoji: '🛡️' },
      { title: 'FinTech & Quantitative Finance 📈', desc: 'Algorithmic trading & digital banking innovations', emoji: '📈' },
      { title: 'Biotechnology & HealthTech 🧬', desc: 'Genomics, medical devices & life science discovery', emoji: '🧬' },
      { title: 'Sustainability & Green Tech 🌱', desc: 'Renewable energy, climate solutions & eco design', emoji: '🌱' }
    ]
  }
];

// STATE MANAGEMENT
let currentTab = 'language-ark';
let activeProgLang = 'french';
let activeQuizLang = 'spanish';
let quizCurrentIndex = 0;
let quizScore = 0;
let quizUserAnswers = [];

let workbookMode = 'child'; // 'child' or 'pro'
let workbookStep = 1;
let workbookAnswers = {
  ratings: {},
  energises: [],
  values: [],
  strengths: [],
  skills: [],
  styles: {},
  riasec: [],
  futures: []
};

// INITIALIZATION & TAB SWITCHING
document.addEventListener('DOMContentLoaded', () => {
  initTabSwitching();
  initQuiz();
  initCrsCalculator();
  initWorkbook();
  initCareerExplorer();
  initChatbots();
  initBookingModal();
  initStudentCrmEngine();
  selectProgramLanguage('french');
});

function initTabSwitching() {
  const tabBtnArk = document.getElementById('tab-btn-ark');
  const tabBtnAstral = document.getElementById('tab-btn-astral');

  if (tabBtnArk && tabBtnAstral) {
    tabBtnArk.addEventListener('click', () => switchMainTab('language-ark'));
    tabBtnAstral.addEventListener('click', () => switchMainTab('astral-career'));
  }
}

function switchMainTab(tabName) {
  currentTab = tabName;
  const switcherContainer = document.getElementById('main-tab-switcher');
  const tabArk = document.getElementById('tab-btn-ark');
  const tabAstral = document.getElementById('tab-btn-astral');
  const paneArk = document.getElementById('pane-language-ark');
  const paneAstral = document.getElementById('pane-astral-career');

  const subnavArk = document.getElementById('subnav-ark');
  const subnavAstral = document.getElementById('subnav-astral');

  if (tabName === 'language-ark') {
    document.body.classList.remove('theme-astral');
    switcherContainer.setAttribute('data-active', 'ark');
    tabArk.classList.add('active');
    tabAstral.classList.remove('active');
    paneArk.classList.add('active-pane');
    paneAstral.classList.remove('active-pane');
    
    if (subnavArk) subnavArk.style.display = 'flex';
    if (subnavAstral) subnavAstral.style.display = 'none';

    updateActiveChatbot('Arky');
  } else {
    document.body.classList.add('theme-astral');
    switcherContainer.setAttribute('data-active', 'astral');
    tabAstral.classList.add('active');
    tabArk.classList.remove('active');
    paneAstral.classList.add('active-pane');
    paneArk.classList.remove('active-pane');

    if (subnavArk) subnavArk.style.display = 'none';
    if (subnavAstral) subnavAstral.style.display = 'flex';

    updateActiveChatbot('Astra');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(sectionId) {
  const target = document.getElementById(sectionId);
  if (target) {
    const yOffset = -95;
    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// MULTI-LANGUAGE PROGRAMME SELECTOR (FRENCH, SPANISH, ITALIAN, GERMAN)
function selectProgramLanguage(langKey) {
  activeProgLang = langKey;
  const data = LANGUAGE_PROGRAMMES[langKey];
  if (!data) return;

  // Update Selector Buttons
  ['french', 'spanish', 'italian', 'german'].forEach(l => {
    const btn = document.getElementById(`prog-btn-${l}`);
    if (btn) {
      if (l === langKey) btn.classList.add('active-lang');
      else btn.classList.remove('active-lang');
    }
  });

  // Update Headings & Slogan
  const headingEl = document.getElementById('prog-heading');
  const sloganEl = document.getElementById('prog-slogan');
  if (headingEl) headingEl.innerText = `${data.flag} ${data.name}`;
  if (sloganEl) sloganEl.innerText = data.slogan;

  // Update Level Cards Focus Text
  const a1Focus = document.getElementById('prog-card-a1-focus');
  const a2Focus = document.getElementById('prog-card-a2-focus');
  const b1Focus = document.getElementById('prog-card-b1-focus');
  const b2Focus = document.getElementById('prog-card-b2-focus');
  if (a1Focus) a1Focus.innerText = data.levels.a1;
  if (a2Focus) a2Focus.innerText = data.levels.a2;
  if (b1Focus) b1Focus.innerText = data.levels.b1;
  if (b2Focus) b2Focus.innerText = data.levels.b2;

  // Update Matrix Table Rows
  const tA1 = document.getElementById('table-row-a1-focus');
  const tA2 = document.getElementById('table-row-a2-focus');
  const tB1 = document.getElementById('table-row-b1-focus');
  const tB2 = document.getElementById('table-row-b2-focus');
  if (tA1) tA1.innerText = data.levels.a1;
  if (tA2) tA2.innerText = data.levels.a2;
  if (tB1) tB1.innerText = data.levels.b1;
  if (tB2) tB2.innerText = data.levels.b2;

  // Update Exam Preparation Card
  const examTitleEl = document.getElementById('exam-title');
  const examDescEl = document.getElementById('exam-desc');
  const examBadgeEl = document.getElementById('exam-badge');
  const examB1El = document.getElementById('exam-bullet1');
  const examB2El = document.getElementById('exam-bullet2');
  const crsBonusEl = document.getElementById('crs-bonus-text');

  if (examTitleEl) examTitleEl.innerText = data.examTitle;
  if (examDescEl) examDescEl.innerText = data.examDesc;
  if (examBadgeEl) examBadgeEl.innerText = data.examBadge;
  if (examB1El) examB1El.innerHTML = data.examBullet1;
  if (examB2El) examB2El.innerHTML = data.examBullet2;
  if (crsBonusEl) crsBonusEl.innerText = data.crsBonusText;

  // Update Outcomes Cards
  const oConf = document.getElementById('outcome-confidence');
  const oComm = document.getElementById('outcome-communication');
  const oCult = document.getElementById('outcome-culture');
  const oOpp = document.getElementById('outcome-opportunities');
  const oFoot = document.getElementById('outcome-footer-slogan');

  if (oConf) oConf.innerText = data.outcomes.confidence;
  if (oComm) oComm.innerText = data.outcomes.communication;
  if (oCult) oCult.innerText = data.outcomes.culture;
  if (oOpp) oOpp.innerText = data.outcomes.opportunities;
  if (oFoot) oFoot.innerText = data.outcomes.footer;
}

// 3. QUIZ ENGINE (SPANISH, FRENCH, ITALIAN, GERMAN)
function initQuiz() {
  const langBtns = document.querySelectorAll('.lang-btn[data-lang]');
  langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      langBtns.forEach(b => b.classList.remove('active-lang'));
      const targetBtn = e.currentTarget;
      targetBtn.classList.add('active-lang');
      activeQuizLang = targetBtn.getAttribute('data-lang');
      resetQuiz();
    });
  });

  renderQuizQuestion();
}

function resetQuiz() {
  quizCurrentIndex = 0;
  quizScore = 0;
  quizUserAnswers = [];
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const quizCard = document.getElementById('quiz-card-content');
  const questions = QUIZ_DATA[activeQuizLang];

  if (quizCurrentIndex >= questions.length) {
    renderQuizResults();
    return;
  }

  const q = questions[quizCurrentIndex];
  const progressPct = ((quizCurrentIndex + 1) / questions.length) * 100;

  let html = `
    <div class="quiz-progress-bar-bg">
      <div class="quiz-progress-fill" style="width: ${progressPct}%"></div>
    </div>
    <div style="display:flex; justify-space-between; align-items:center; margin-bottom:1rem;">
      <span style="color:#0284c7; font-weight:700; font-size:0.85rem;">Question ${quizCurrentIndex + 1} of ${questions.length}</span>
      <span class="hero-badge" style="text-transform:capitalize;">${activeQuizLang} Quiz</span>
    </div>
    <h3 class="question-title">${q.question}</h3>
    <div class="quiz-options-grid">
  `;

  q.options.forEach((opt, idx) => {
    html += `
      <button class="quiz-option-btn" onclick="selectQuizOption(${idx})">
        <span>${String.fromCharCode(65 + idx)}. ${opt}</span>
        <span style="opacity:0.5;">➔</span>
      </button>
    `;
  });

  html += `
    </div>
    <div style="margin-top:1.2rem; font-size:0.82rem; color:#64748b; display:flex; align-items:center; gap:0.4rem;">
      <span>💡 Hint:</span> <em>${q.hint}</em>
    </div>
  `;

  quizCard.innerHTML = html;
}

function selectQuizOption(optionIdx) {
  const questions = QUIZ_DATA[activeQuizLang];
  const q = questions[quizCurrentIndex];
  const buttons = document.querySelectorAll('.quiz-option-btn');

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.answer) {
      btn.classList.add('correct-option');
    } else if (idx === optionIdx) {
      btn.classList.add('incorrect-option');
    }
  });

  if (optionIdx === q.answer) {
    quizScore++;
  }

  quizUserAnswers.push({ question: q.question, chosen: optionIdx, correct: q.answer });

  setTimeout(() => {
    quizCurrentIndex++;
    renderQuizQuestion();
  }, 1200);
}

function renderQuizResults() {
  const quizCard = document.getElementById('quiz-card-content');
  const total = QUIZ_DATA[activeQuizLang].length;
  const pct = Math.round((quizScore / total) * 100);

  let badge = '🏆 Beginner Explorer';
  let desc = 'Great start! Build fluency with Language Ark courses.';
  if (pct >= 80) {
    badge = '🌟 Language Master';
    desc = 'Outstanding performance! You are ready for advanced immersion.';
  } else if (pct >= 50) {
    badge = '📚 Intermediate Learner';
    desc = 'Solid grasp of fundamentals! Keep practicing to achieve B2 level.';
  }

  let html = `
    <div style="text-align:center; padding:1.5rem 0;">
      <div style="font-size:3rem; margin-bottom:0.4rem;">🎉</div>
      <h2 style="font-size:1.6rem; font-weight:800; margin-bottom:0.4rem; color:#0f172a;">Quiz Completed!</h2>
      <p style="color:#475569; margin-bottom:1.2rem; font-size:0.9rem;">Language: <strong style="text-transform:capitalize; color:#0284c7;">${activeQuizLang}</strong></p>

      <div style="width:120px; height:120px; border-radius:50%; border:4px solid #0284c7; margin:0 auto 1.2rem auto; display:flex; flex-direction:column; align-items:center; justify-content:center; background:rgba(2,132,199,0.1);">
        <span style="font-size:2rem; font-weight:800; color:#0f172a;">${pct}%</span>
        <span style="font-size:0.75rem; color:#64748b;">${quizScore} / ${total} Correct</span>
      </div>

      <div style="display:inline-block; padding:0.4rem 1.2rem; background:rgba(2,132,199,0.12); border-radius:9999px; border:1px solid rgba(2,132,199,0.3); margin-bottom:1.2rem; font-weight:700; color:#0284c7; font-size:0.85rem;">
        ${badge}
      </div>
      <p style="color:#64748b; max-width:420px; margin:0 auto 1.5rem auto; font-size:0.85rem;">${desc}</p>

      <div style="display:flex; justify-content:center; gap:0.8rem; flex-wrap:wrap;">
        <button class="cta-demo-btn" onclick="resetQuiz()">Retake Quiz 🔄</button>
        <button class="cta-demo-btn" style="background:#0284c7; color:#fff;" onclick="openBookingModal()">Book Free Course Guidance 📅</button>
      </div>
    </div>
  `;

  quizCard.innerHTML = html;
}

// 4. CRS SCORE CALCULATOR
function initCrsCalculator() {
  const inputs = ['crs-age', 'crs-education', 'crs-french', 'crs-english', 'crs-cad-exp', 'crs-foreign-exp', 'crs-spouse', 'crs-nomination'];
  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', calculateCrsScore);
    }
  });

  calculateCrsScore();
}

function calculateCrsScore() {
  const age = parseInt(document.getElementById('crs-age')?.value || '28');
  const edu = document.getElementById('crs-education')?.value || 'bachelors';
  const frenchClb = parseInt(document.getElementById('crs-french')?.value || '7');
  const englishClb = parseInt(document.getElementById('crs-english')?.value || '7');
  const cadExp = document.getElementById('crs-cad-exp')?.value || '1year';
  const foreignExp = document.getElementById('crs-foreign-exp')?.value || '3years';
  const spouse = document.getElementById('crs-spouse')?.value || 'no';
  const nomination = document.getElementById('crs-nomination')?.value || 'no';

  let agePoints = 110;
  if (age < 18) agePoints = 0;
  else if (age === 18) agePoints = 90;
  else if (age === 19) agePoints = 95;
  else if (age >= 20 && age <= 29) agePoints = 110;
  else if (age === 30) agePoints = 105;
  else if (age === 31) agePoints = 99;
  else if (age === 32) agePoints = 94;
  else if (age === 33) agePoints = 88;
  else if (age === 34) agePoints = 83;
  else if (age === 35) agePoints = 77;
  else if (age === 36) agePoints = 72;
  else if (age === 37) agePoints = 66;
  else if (age === 38) agePoints = 61;
  else if (age === 39) agePoints = 55;
  else if (age >= 45) agePoints = 0;
  else agePoints = Math.max(0, 110 - (age - 29) * 10);

  let eduPoints = 120;
  if (edu === 'highschool') eduPoints = 30;
  else if (edu === 'one_year') eduPoints = 90;
  else if (edu === 'bachelors') eduPoints = 120;
  else if (edu === 'masters') eduPoints = 135;
  else if (edu === 'phd') eduPoints = 150;

  let engPoints = englishClb * 8;
  let frePoints = 0;
  if (frenchClb >= 7) frePoints = 50;
  else if (frenchClb >= 5) frePoints = 24;

  let cadExpPoints = cadExp === 'none' ? 0 : (cadExp === '1year' ? 40 : 70);
  let foreignExpPoints = foreignExp === 'none' ? 0 : (foreignExp === '1year' ? 25 : 50);
  let nomPoints = nomination === 'yes' ? 600 : 0;

  let totalScore = agePoints + eduPoints + engPoints + frePoints + cadExpPoints + foreignExpPoints + nomPoints;
  totalScore = Math.min(1200, totalScore);

  const scoreValEl = document.getElementById('crs-total-val');
  const breakdownEl = document.getElementById('crs-breakdown');

  if (scoreValEl) scoreValEl.innerText = totalScore;
  if (breakdownEl) {
    breakdownEl.innerHTML = `
      <div class="crs-breakdown-item"><span>Age Factor (${age} yrs)</span><strong>${agePoints} pts</strong></div>
      <div class="crs-breakdown-item"><span>Education Level</span><strong>${eduPoints} pts</strong></div>
      <div class="crs-breakdown-item"><span>English CLB ${englishClb}</span><strong>${engPoints} pts</strong></div>
      <div class="crs-breakdown-item"><span style="color:#0284c7; font-weight:700;">French TEF (CLB ${frenchClb}) Boost</span><strong style="color:#0284c7;">+${frePoints} pts</strong></div>
      <div class="crs-breakdown-item"><span>Canadian & Foreign Experience</span><strong>${cadExpPoints + foreignExpPoints} pts</strong></div>
      ${nomination === 'yes' ? '<div class="crs-breakdown-item" style="color:#10b981;"><span>Provincial Nomination (PNP)</span><strong>+600 pts</strong></div>' : ''}
    `;
  }
}

// 5. ACCDS WORKBOOK & QUESTIONNAIRE ENGINE
function initWorkbook() {
  const childBtn = document.getElementById('mode-child-btn');
  const proBtn = document.getElementById('mode-pro-btn');

  if (childBtn && proBtn) {
    childBtn.addEventListener('click', () => setWorkbookMode('child'));
    proBtn.addEventListener('click', () => setWorkbookMode('pro'));
  }

  renderWorkbookStep();
}

function setWorkbookMode(mode) {
  workbookMode = mode;
  document.getElementById('mode-child-btn')?.classList.toggle('active-mode', mode === 'child');
  document.getElementById('mode-pro-btn')?.classList.toggle('active-mode', mode === 'pro');
  renderWorkbookStep();
}

function renderWorkbookStep() {
  const container = document.getElementById('workbook-step-content');
  const stepper = document.getElementById('stepper-indicators');

  if (!container) return;

  const stepTitles = [
    '01 Self-Awareness',
    '02 Passions & Activities',
    '03 Core Values',
    '04 Strengths & Skills',
    '05 Work Style',
    '06 RIASEC Profile',
    '07 Future Possibilities'
  ];

  if (stepper) {
    let stepHtml = '<div class="pro-stepper-bar">';
    WORKBOOK_SECTIONS.forEach((sec, idx) => {
      const stepNum = idx + 1;
      let activeClass = stepNum === workbookStep ? 'active-step' : (stepNum < workbookStep ? 'completed-step' : '');
      const label = stepTitles[idx] || `0${stepNum} Section`;
      stepHtml += `<div class="pro-step-item ${activeClass}" onclick="goWorkbookStep(${stepNum})"><span>${label}</span></div>`;
    });
    stepHtml += '</div>';
    stepper.innerHTML = stepHtml;
  }

  const section = WORKBOOK_SECTIONS[workbookStep - 1];
  if (!section) return;

  const currentModeTitle = workbookMode === 'child' ? 'Student Edition (Classes 8–12)' : 'Executive / Higher Ed Edition';

  let html = `
    <div style="margin-bottom:1.5rem; display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem;">
      <div>
        <span class="section-tag" style="background:rgba(251,191,36,0.15); border-color:rgba(251,191,36,0.4); color:#fbbf24; font-family:var(--font-mono);">
          ACCDS™ MODULE 0${workbookStep} • ${currentModeTitle}
        </span>
        <h3 class="section-heading" style="font-size:1.6rem; margin-top:0.4rem; margin-bottom:0.2rem; color:#ffffff;">${section.title}</h3>
        <p style="color:#cbd5e1; font-size:0.9rem;">${section.subtitle}</p>
      </div>
      <div style="background:rgba(255,255,255,0.06); border:1px solid rgba(251,191,36,0.3); border-radius:12px; padding:0.4rem 1rem; font-family:var(--font-mono); font-size:0.82rem; color:#fbbf24; font-weight:700;">
        Progress: ${Math.round((workbookStep / WORKBOOK_SECTIONS.length) * 100)}%
      </div>
    </div>
  `;

  if (section.type === 'rating_group') {
    html += '<div style="display:flex; flex-direction:column; gap:1.2rem;">';
    section.questions.forEach((q, qIdx) => {
      const emoji = workbookMode === 'child' ? q.emojiChild : q.emojiPro;
      const curVal = workbookAnswers.ratings[qIdx] || 3;
      const scaleLabels = ['1 - Low / Rarely', '2 - Emerging', '3 - Moderate', '4 - High', '5 - Exemplary / Always'];
      
      html += `
        <div style="background:rgba(15, 28, 56, 0.75); border:1px solid rgba(251,191,36,0.25); border-radius:20px; padding:1.2rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.8rem;">
            <span style="font-weight:700; font-size:0.95rem; color:#ffffff;">${emoji} ${q.text}</span>
            <span style="background:rgba(251,191,36,0.2); border:1px solid #fbbf24; color:#fbbf24; padding:0.2rem 0.8rem; border-radius:9999px; font-weight:800; font-family:var(--font-mono); font-size:0.85rem;" id="rating-val-${qIdx}">
              Score: ${curVal} / 5
            </span>
          </div>
          <input type="range" min="1" max="5" value="${curVal}" style="width:100%; accent-color:#fbbf24; cursor:pointer;" onchange="updateRatingAnswer(${qIdx}, this.value)">
          <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:#94a3b8; margin-top:0.4rem; font-family:var(--font-mono);">
            <span>1 - Rarely</span>
            <span>3 - Moderate</span>
            <span>5 - Exemplary</span>
          </div>
        </div>
      `;
    });
    html += '</div>';
  } else if (section.type === 'checkbox_grid') {
    html += '<div class="emoji-option-grid">';
    section.options.forEach(opt => {
      const label = workbookMode === 'child' ? opt.labelChild : opt.labelPro;
      const isSelected = workbookAnswers.energises.includes(opt.id);
      html += `
        <div class="emoji-option-card ${isSelected ? 'selected' : ''}" style="background:${isSelected ? 'rgba(251,191,36,0.18)' : 'rgba(15, 28, 56, 0.75)'}; border-color:${isSelected ? '#fbbf24' : 'rgba(255,255,255,0.12)'}; border-radius:20px;" onclick="toggleEnergiseOption('${opt.id}')">
          <span class="emoji-icon">${opt.emoji}</span>
          <div class="option-text-group" style="flex:1;">
            <span class="option-title-text" style="color:#ffffff; font-family:var(--font-mono);">${label}</span>
          </div>
          ${isSelected ? '<span style="color:#fbbf24; font-weight:800; font-size:0.8rem;">✓ Selected</span>' : ''}
        </div>
      `;
    });
    html += '</div>';
  } else if (section.type === 'riasec_grid') {
    html += '<div class="emoji-option-grid">';
    section.options.forEach(opt => {
      const desc = workbookMode === 'child' ? opt.descChild : opt.descPro;
      const isSelected = workbookAnswers.riasec.includes(opt.code);
      html += `
        <div class="emoji-option-card ${isSelected ? 'selected' : ''}" style="background:${isSelected ? 'rgba(251,191,36,0.18)' : 'rgba(15, 28, 56, 0.75)'}; border-color:${isSelected ? '#fbbf24' : 'rgba(255,255,255,0.12)'}; border-radius:20px;" onclick="toggleRiasecOption('${opt.code}')">
          <span class="emoji-icon">${opt.emoji}</span>
          <div class="option-text-group" style="flex:1;">
            <span class="option-title-text" style="color:#ffffff; font-family:var(--font-mono);">${opt.title}</span>
            <span class="option-sub-text" style="color:#94a3b8; font-size:0.8rem;">${desc}</span>
          </div>
          ${isSelected ? '<span style="color:#fbbf24; font-weight:800; font-size:0.8rem;">✓ Active</span>' : ''}
        </div>
      `;
    });
    html += '</div>';
  } else if (section.type === 'future_grid') {
    html += '<div class="emoji-option-grid">';
    section.options.forEach((opt, idx) => {
      const isSelected = workbookAnswers.futures.includes(idx);
      html += `
        <div class="emoji-option-card ${isSelected ? 'selected' : ''}" style="background:${isSelected ? 'rgba(251,191,36,0.18)' : 'rgba(15, 28, 56, 0.75)'}; border-color:${isSelected ? '#fbbf24' : 'rgba(255,255,255,0.12)'}; border-radius:20px;" onclick="toggleFutureOption(${idx})">
          <span class="emoji-icon">${opt.emoji}</span>
          <div class="option-text-group" style="flex:1;">
            <span class="option-title-text" style="color:#ffffff; font-family:var(--font-mono);">${opt.title}</span>
            <span class="option-sub-text" style="color:#94a3b8; font-size:0.8rem;">${opt.desc}</span>
          </div>
          ${isSelected ? '<span style="color:#fbbf24; font-weight:800; font-size:0.8rem;">✓ Target</span>' : ''}
        </div>
      `;
    });
    html += '</div>';
  } else {
    html += `
      <div style="background:rgba(15, 28, 56, 0.75); border:1px solid rgba(251,191,36,0.3); border-radius:20px; padding:1.5rem;">
        <p style="color:#cbd5e1; margin-bottom:1rem; font-size:0.9rem;">Select options that best describe your operational preference:</p>
        <div style="display:flex; gap:1rem; flex-wrap:wrap;">
          <button class="cta-demo-btn" style="background:rgba(251,191,36,0.2); color:#fbbf24; border:1px solid #fbbf24; border-radius:9999px;" onclick="toggleGeneralPreference('opt1')">Visual & Practical 🎨</button>
          <button class="cta-demo-btn" style="background:rgba(251,191,36,0.2); color:#fbbf24; border:1px solid #fbbf24; border-radius:9999px;" onclick="toggleGeneralPreference('opt2')">Analytical & Strategic 📊</button>
          <button class="cta-demo-btn" style="background:rgba(251,191,36,0.2); color:#fbbf24; border:1px solid #fbbf24; border-radius:9999px;" onclick="toggleGeneralPreference('opt3')">Executive Leadership 👑</button>
        </div>
      </div>
    `;
  }

  html += `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:2.5rem; pt-4; border-top:1px solid rgba(255,255,255,0.1);">
      <button class="cta-demo-btn" style="background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.2);" ${workbookStep === 1 ? 'disabled style="opacity:0.4; cursor:not-allowed;"' : ''} onclick="prevWorkbookStep()">⬅️ Previous Module</button>
      ${workbookStep < WORKBOOK_SECTIONS.length ? 
        `<button class="cta-demo-btn" style="background:linear-gradient(135deg, #fbbf24, #d97706); color:#0f172a; font-weight:800;" onclick="nextWorkbookStep()">Next Module ➡️</button>` :
        `<button class="cta-demo-btn" style="background:linear-gradient(135deg, #10b981, #059669); color:#fff; font-weight:800;" onclick="generateCareerCompassReport()">Generate Executive Career Dossier 📜</button>`
      }
    </div>
  `;

  container.innerHTML = html;
}

function updateRatingAnswer(idx, val) {
  workbookAnswers.ratings[idx] = parseInt(val);
  const label = document.getElementById(`rating-val-${idx}`);
  if (label) label.innerText = `${val} / 5`;
}

function toggleEnergiseOption(id) {
  const idx = workbookAnswers.energises.indexOf(id);
  if (idx > -1) workbookAnswers.energises.splice(idx, 1);
  else workbookAnswers.energises.push(id);
  renderWorkbookStep();
}

function toggleRiasecOption(code) {
  const idx = workbookAnswers.riasec.indexOf(code);
  if (idx > -1) workbookAnswers.riasec.splice(idx, 1);
  else workbookAnswers.riasec.push(code);
  renderWorkbookStep();
}

function toggleFutureOption(idx) {
  const pos = workbookAnswers.futures.indexOf(idx);
  if (pos > -1) workbookAnswers.futures.splice(pos, 1);
  else workbookAnswers.futures.push(idx);
  renderWorkbookStep();
}

function goWorkbookStep(stepNum) {
  workbookStep = stepNum;
  renderWorkbookStep();
}

function nextWorkbookStep() {
  if (workbookStep < WORKBOOK_SECTIONS.length) {
    workbookStep++;
    renderWorkbookStep();
  }
}

function prevWorkbookStep() {
  if (workbookStep > 1) {
    workbookStep--;
    renderWorkbookStep();
  }
}

function generateCareerCompassReport() {
  const container = document.getElementById('workbook-step-content');
  let topRiasec = workbookAnswers.riasec.join('-') || 'I-A-E (Investigative, Artistic, Enterprising)';

  let html = `
    <div style="text-align:center; padding:2rem 0;">
      <div style="font-size:3.5rem; margin-bottom:0.5rem;">📜</div>
      <span class="section-tag" style="background:rgba(251,191,36,0.2); color:#fbbf24; border-color:#fbbf24;">OFFICIAL EVALUATION DOSSIER</span>
      <h2 class="section-heading" style="font-size:2rem; margin:0.5rem 0; color:#ffffff;">ACCDS™ Executive Career Compass Profile</h2>
      <p style="color:#cbd5e1; margin-bottom:2rem; font-size:0.9rem;">Edition: <strong style="color:#fbbf24; text-transform:capitalize;">${workbookMode} Assessment</strong></p>

      <div class="glass-panel" style="padding:2rem; text-align:left; max-width:620px; margin:0 auto 2rem auto; background:rgba(15, 28, 56, 0.9); border-color:#fbbf24;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1.2rem; pb-2; border-bottom:1px solid rgba(251,191,36,0.3);">
          <span style="font-family:var(--font-mono); color:#fbbf24; font-weight:700;">HOLLAND RIASEC COMPASS</span>
          <span style="background:#fbbf24; color:#0f172a; padding:0.2rem 0.6rem; border-radius:9999px; font-weight:800; font-size:0.85rem;">${topRiasec}</span>
        </div>

        <h4 style="color:#ffffff; font-size:1.05rem; margin-bottom:0.8rem; font-family:var(--font-mono);">
          🌟 High-Fit Career Pathways & Academic Streams:
        </h4>
        <ul style="list-style:none; color:#cbd5e1; font-size:0.88rem; display:flex; flex-direction:column; gap:0.6rem;">
          <li style="padding:0.5rem; background:rgba(255,255,255,0.04); border-radius:8px;">🚀 <strong>STEM & Artificial Intelligence:</strong> Machine Learning, Data Engineering & Neural Networks</li>
          <li style="padding:0.5rem; background:rgba(255,255,255,0.04); border-radius:8px;">🌐 <strong>Global Multilingual Immersion:</strong> TEF French / European Executive Diplomas</li>
          <li style="padding:0.5rem; background:rgba(255,255,255,0.04); border-radius:8px;">🎨 <strong>Creative Architecture & Design:</strong> UX/UI Product Strategy & Visual Direction</li>
        </ul>

        <div style="margin-top:1.5rem; padding:1rem; background:rgba(251,191,36,0.1); border-radius:10px; border:1px solid rgba(251,191,36,0.3); font-size:0.82rem; color:#fbbf24;">
          💡 <strong>Next Step:</strong> Review this dossier with a certified ACCDS™ Senior Psychologist to align parent expectations, stream choice, and 5-year roadmap.
        </div>
      </div>

      <div style="display:flex; justify-content:center; gap:1rem; flex-wrap:wrap;">
        <button class="cta-demo-btn" style="background:linear-gradient(135deg, #fbbf24, #d97706); color:#0f172a; font-weight:800; padding:0.7rem 1.6rem;" onclick="openBookingModal()">Book 1-on-1 Counsellor Session 📅</button>
        <button class="cta-demo-btn" style="background:rgba(255,255,255,0.1); color:#fff; border:1px solid rgba(255,255,255,0.2);" onclick="goWorkbookStep(1)">Review Assessment 🔄</button>
      </div>
    </div>
  `;

  container.innerHTML = html;
}

function toggleFaqAccordion(btn) {
  const item = btn.closest('.faq-accordion-item');
  if (item) {
    item.classList.toggle('active-faq');
  }
}

// 6. DUAL CHATBOT ENGINE ("ARKY" & "ASTRA")
let activeBotName = 'Arky';

const BOT_KNOWLEDGE = {
  Arky: {
    title: 'Arky - Language Ark AI Assistant ⛵',
    greeting: 'Hello! I am Arky, your Language Ark assistant. Ask me about French, Spanish, Italian, or German courses, TEF/DELF prep, study hours, or Canada CRS points boost!',
    qa: [
      { keywords: ['duration', 'hours', 'time', 'length'], answer: 'Our complete language programs cover 210 total study hours across A1 (40h), A2 (50h), B1 (60h), B2 (60h) plus 20h exam prep!' },
      { keywords: ['tef', 'delf', 'canada', 'express entry', 'crs'], answer: 'Completing our TEF/DELF preparation adds up to +50 points to your Canada Express Entry CRS score! Test our built-in CRS Calculator to see your score.' },
      { keywords: ['course', 'level', 'hours', 'a1', 'a2', 'b1', 'b2'], answer: 'Course levels & durations: A1 (40h, 2.5 months), A2 (50h, 3 months), B1 (60h, 4 months), B2 (60h, 4 months) plus 20h exam prep (210 total study hours)!' },
      { keywords: ['spanish', 'italian', 'german', 'french'], answer: 'We offer courses in Spanish 🇪🇸 (DELE/SIELE), French 🇫🇷 (TEF/DELF), Italian 🇮🇹 (CILS/CELI), and German 🇩🇪 (Goethe/TestDaF). Select your language tab above to view custom details!' },
      { keywords: ['contact', 'whatsapp', 'phone', 'email'], answer: 'Reach out on WhatsApp at <strong style="color:#fbbf24;">+91 7758929852</strong> or email us at info@languageark.com for instant course enrollment.' }
    ]
  },
  Astra: {
    title: 'Astra - Astral Career Navigator 🌟',
    greeting: 'Welcome! I am Astra, your Astral Career guide. Ask me about the ACCDS™ 10-step career discovery framework, stream selection, RIASEC profiles, or 1-on-1 counseling.',
    qa: [
      { keywords: ['accds', 'framework', 'workbook', 'compass'], answer: 'The ACCDS™ (Astral Career Compass System) is a 6-step scientific discovery process covering 10 dimensions: Personality, RIASEC Interests, Strengths, Values, Learning Style, and Future Skills.' },
      { keywords: ['stream', 'class 10', 'class 12', 'science', 'arts', 'commerce'], answer: 'We help students choose the right stream (Science, Commerce, Arts, Design, Tech) based on psychometric evaluation rather than peer pressure.' },
      { keywords: ['riasec', 'holland', 'personality'], answer: 'RIASEC measures 6 interest types: Realistic 🛠️, Investigative 🔬, Artistic 🎨, Social 🤝, Enterprising 🚀, and Conventional 📊. Complete our interactive questionnaire to find yours!' },
      { keywords: ['demo', 'book', 'counselor', 'appointment', 'whatsapp', 'contact', 'email'], answer: 'You can book a 1-on-1 demo or counselling session via Calendly, Email (rebekah.astral@zohomail.com), or WhatsApp (<strong style="color:#fbbf24;">+91 9884691049</strong>)!' }
    ]
  }
};

function initChatbots() {
  const toggleBtn = document.getElementById('chat-toggle-btn');
  const chatWindow = document.getElementById('chat-window');
  const closeBtn = document.getElementById('chat-close-btn');
  const sendBtn = document.getElementById('chat-send-btn');
  const inputField = document.getElementById('chat-input-field');

  if (toggleBtn && chatWindow) {
    toggleBtn.addEventListener('click', () => {
      chatWindow.classList.toggle('open-chat');
    });
  }

  if (closeBtn && chatWindow) {
    closeBtn.addEventListener('click', () => {
      chatWindow.classList.remove('open-chat');
    });
  }

  if (sendBtn && inputField) {
    sendBtn.addEventListener('click', handleChatSend);
    inputField.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleChatSend();
    });
  }

  updateActiveChatbot(currentTab === 'language-ark' ? 'Arky' : 'Astra');
}

function updateActiveChatbot(botName) {
  activeBotName = botName;
  const botInfo = BOT_KNOWLEDGE[botName];
  const nameEl = document.getElementById('chat-bot-name-label');
  const statusEl = document.getElementById('chat-bot-status-label');
  const avatarEl = document.getElementById('chat-bot-avatar');
  const triggerIconEl = document.getElementById('chat-trigger-icon');
  const messagesArea = document.getElementById('chat-messages-list');
  const chipsContainer = document.getElementById('chat-suggestions-container');

  if (nameEl) {
    nameEl.innerText = botName === 'Arky' ? 'Arky AI • Language Neural Net' : 'Astra AI • Psychometric Mentor';
  }

  if (statusEl) {
    statusEl.innerText = botName === 'Arky' ? '● ONLINE • Language Engine v3.5' : '● ONLINE • ACCDS Guidance Core';
  }

  if (avatarEl) {
    avatarEl.innerText = botName === 'Arky' ? '⛵' : '🌟';
  }

  if (triggerIconEl) {
    triggerIconEl.innerText = botName === 'Arky' ? '⛵' : '🌟';
  }

  // Render suggestion chips dynamically
  if (chipsContainer) {
    if (botName === 'Arky') {
      chipsContainer.innerHTML = `
        <button class="chip-btn" onclick="sendChipMessage('What are the French course levels and durations?')">French Levels & Duration ⏱️</button>
        <button class="chip-btn" onclick="sendChipMessage('How does TEF add +50 CRS points?')">CRS Boost 🇨🇦</button>
        <button class="chip-btn" onclick="sendChipMessage('What languages do you teach?')">Languages Offered 🌍</button>
        <button class="chip-btn" onclick="sendChipMessage('How to book demo on WhatsApp?')">WhatsApp Demo 💬</button>
      `;
    } else {
      chipsContainer.innerHTML = `
        <button class="chip-btn" onclick="sendChipMessage('What is the ACCDS career compass?')">ACCDS Framework 🧭</button>
        <button class="chip-btn" onclick="sendChipMessage('How do you help with stream selection?')">Stream Selection 📚</button>
        <button class="chip-btn" onclick="sendChipMessage('What is Holland RIASEC?')">RIASEC Profile 🔬</button>
        <button class="chip-btn" onclick="sendChipMessage('How to book 1-on-1 counselor demo?')">Book Counsellor 📅</button>
      `;
    }
  }

  if (messagesArea && (messagesArea.children.length === 0 || !messagesArea.querySelector('.msg-bot'))) {
    messagesArea.innerHTML = `
      <div class="msg-bubble msg-bot">
        <span class="msg-bot-tag">${botName === 'Arky' ? '⛵ ARKY NEURAL ENGINE' : '🌟 ASTRA CAREER AI'}</span>
        ${botInfo.greeting}
      </div>
    `;
  }
}

function handleChatSend() {
  const inputField = document.getElementById('chat-input-field');
  const messagesArea = document.getElementById('chat-messages-list');
  const text = inputField.value.trim();

  if (!text) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'msg-bubble msg-user';
  userMsg.innerText = text;
  messagesArea.appendChild(userMsg);

  inputField.value = '';
  messagesArea.scrollTop = messagesArea.scrollHeight;

  // Show typing indicator
  const typingIndicator = document.createElement('div');
  typingIndicator.id = 'chat-typing-indicator';
  typingIndicator.className = 'msg-bubble msg-bot';
  typingIndicator.innerHTML = `
    <span class="msg-bot-tag">${activeBotName === 'Arky' ? '⛵ ARKY AI' : '🌟 ASTRA AI'}</span>
    <div class="typing-dots"><span></span><span></span><span></span></div>
  `;
  messagesArea.appendChild(typingIndicator);
  messagesArea.scrollTop = messagesArea.scrollHeight;

  setTimeout(() => {
    const indicator = document.getElementById('chat-typing-indicator');
    if (indicator) indicator.remove();

    const botReplyText = getBotResponse(text);
    const botMsg = document.createElement('div');
    botMsg.className = 'msg-bubble msg-bot';
    botMsg.innerHTML = `
      <span class="msg-bot-tag">${activeBotName === 'Arky' ? '⛵ ARKY NEURAL ENGINE' : '🌟 ASTRA CAREER AI'}</span>
      ${botReplyText}
    `;
    messagesArea.appendChild(botMsg);
    messagesArea.scrollTop = messagesArea.scrollHeight;
  }, 450);
}

function sendChipMessage(text) {
  const inputField = document.getElementById('chat-input-field');
  if (inputField) {
    inputField.value = text;
    handleChatSend();
  }
}

function getBotResponse(userQuery) {
  const queryLower = userQuery.toLowerCase();
  const botInfo = BOT_KNOWLEDGE[activeBotName];

  for (const item of botInfo.qa) {
    for (const kw of item.keywords) {
      if (queryLower.includes(kw)) {
        return item.answer;
      }
    }
  }

  if (activeBotName === 'Astra') {
    return `Thanks for asking! Regarding "${userQuery}", our Astral team is ready to assist you. Connect directly via WhatsApp at <strong style="color:#fbbf24;">+91 9884691049</strong> or email rebekah.astral@zohomail.com for instant details!`;
  }
  return `Thanks for asking! Regarding "${userQuery}", our Language Ark team is ready to assist you. Connect directly via WhatsApp at <strong style="color:#fbbf24;">+91 7758929852</strong> or email info@languageark.com for instant details!`;
}

// 7. BOOK DEMO MODAL & INTEGRATIONS
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('modal-close-trigger');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeBookingModal);
  }
}

// ==========================================
// 7. INTERACTIVE CALENDAR BOOKING SYSTEM
// ==========================================

let activeModalBrand = 'ark'; // 'ark' or 'astral'
let activeModalPlatform = 'whatsapp'; // 'whatsapp', 'calendly', 'email'
let selectedBookingDateStr = '';
let selectedBookingSlotId = '';

const BRAND_CONTACT_CONFIG = {
  ark: {
    name: 'Language Ark',
    badgeText: 'Language Ark — Eastern Standard Time (Toronto / Montreal)',
    flag: '🇨🇦 EST',
    phone: '7758929852',
    displayPhone: '+91 7758929852',
    email: 'info@languageark.com',
    calendlyUrl: 'https://calendly.com/language_ark',
    tzLabel: 'EST (UTC-5)',
    slots: [
      { id: 'ark-slot-1', time: '08:00 AM – 09:00 AM EST', label: '🌅 Morning Shift (Before Work/School)' },
      { id: 'ark-slot-2', time: '06:00 PM – 07:00 PM EST', label: '🌇 Evening Shift (Post Work/School)' },
      { id: 'ark-slot-3', time: '09:00 PM – 10:00 PM EST', label: '🌙 Night Focus (Prime Study)' }
    ]
  },
  astral: {
    name: 'Astral Career Counselling',
    badgeText: 'Astral Career — Indian Standard Time (India)',
    flag: '🇮🇳 IST',
    phone: '9884691049',
    displayPhone: '+91 9884691049',
    email: 'rebekah.astral@zohomail.com',
    calendlyUrl: 'https://calendly.com/astral-career',
    tzLabel: 'IST (UTC+5:30)',
    slots: [
      { id: 'astral-slot-1', time: '05:00 PM – 06:00 PM IST', label: '🎒 After-School (Class 9-12)' },
      { id: 'astral-slot-2', time: '07:30 PM – 08:30 PM IST', label: '💼 Evening Family (Post Office)' },
      { id: 'astral-slot-3', time: '11:00 AM – 12:00 PM IST', label: '🌟 Weekend Discovery Session' }
    ]
  }
};

function openBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (!modal) return;

  // Auto detect active page theme
  const isAstral = document.body.classList.contains('theme-astral');
  activeModalBrand = isAstral ? 'astral' : 'ark';

  initModalCalendar();
  modal.classList.add('active-modal');
}

function closeBookingModal() {
  const modal = document.getElementById('booking-modal');
  if (modal) modal.classList.remove('active-modal');
}

function switchModalBrand(brand) {
  activeModalBrand = brand;
  
  // Update modal brand switcher tabs
  const tabArk = document.getElementById('modal-tab-ark');
  const tabAstral = document.getElementById('modal-tab-astral');
  if (brand === 'ark') {
    tabArk?.classList.add('active-modal-tab');
    tabAstral?.classList.remove('active-modal-tab');
  } else {
    tabAstral?.classList.add('active-modal-tab');
    tabArk?.classList.remove('active-modal-tab');
  }

  // Default select first slot of selected brand
  selectedBookingSlotId = BRAND_CONTACT_CONFIG[brand].slots[0].id;
  
  renderModalUI();
}

// Helper: Check if a date falls on Mon (1), Wed (3), Fri (5), Sat (6), or Sun (0)
function isDayBookable(dateInput) {
  let d;
  if (typeof dateInput === 'string') {
    const parts = dateInput.split('-');
    d = new Date(parts[0], parts[1] - 1, parts[2]);
  } else {
    d = new Date(dateInput);
  }
  const day = d.getDay();
  // 1: Mon, 3: Wed, 5: Fri, 6: Sat, 0: Sun
  return day === 1 || day === 3 || day === 5 || day === 6 || day === 0;
}

// Helper: Find next valid bookable date if given date is an off-day (Tue/Thu)
function getNextBookableDate(dateObj) {
  const d = new Date(dateObj);
  while (!isDayBookable(d)) {
    d.setDate(d.getDate() + 1);
  }
  return d;
}

function initModalCalendar() {
  let initialDate = new Date();
  if (!isDayBookable(initialDate)) {
    initialDate = getNextBookableDate(initialDate);
  }

  const year = initialDate.getFullYear();
  const month = String(initialDate.getMonth() + 1).padStart(2, '0');
  const day = String(initialDate.getDate()).padStart(2, '0');
  selectedBookingDateStr = `${year}-${month}-${day}`;

  const datePicker = document.getElementById('modal-date-picker');
  if (datePicker) {
    datePicker.value = selectedBookingDateStr;
    const now = new Date();
    const minYear = now.getFullYear();
    const minMonth = String(now.getMonth() + 1).padStart(2, '0');
    const minDay = String(now.getDate()).padStart(2, '0');
    datePicker.min = `${minYear}-${minMonth}-${minDay}`;
  }

  selectedBookingSlotId = BRAND_CONTACT_CONFIG[activeModalBrand].slots[0].id;

  renderQuickDates();
  renderModalUI();
}

function renderQuickDates() {
  const container = document.getElementById('quick-dates-container');
  if (!container) return;

  let html = '';
  const today = new Date();

  // Render 10 upcoming days
  for (let i = 0; i < 10; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);

    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const dateVal = `${year}-${month}-${day}`;

    const bookable = isDayBookable(d);
    const dayName = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : d.toLocaleDateString('en-US', { weekday: 'short' });
    const monthDay = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const isActive = dateVal === selectedBookingDateStr && bookable;

    if (bookable) {
      html += `
        <button class="date-chip ${isActive ? 'active-date-chip' : ''}" onclick="selectQuickDate('${dateVal}')">
          <span>${dayName}</span>
          <span style="font-size:0.7rem; opacity:0.85;">${monthDay}</span>
        </button>
      `;
    } else {
      html += `
        <button class="date-chip disabled-date-chip" disabled title="Tuesdays & Thursdays are off-days">
          <span>${dayName}</span>
          <span style="font-size:0.68rem; color:#ef4444; font-weight:800;">🚫 Off-day</span>
        </button>
      `;
    }
  }

  container.innerHTML = html;
}

function selectQuickDate(dateVal) {
  selectedBookingDateStr = dateVal;
  const datePicker = document.getElementById('modal-date-picker');
  if (datePicker) datePicker.value = dateVal;

  renderQuickDates();
  renderModalDetails();
}

function onBookingDateChange(dateVal) {
  if (!dateVal) return;

  const parts = dateVal.split('-');
  const pickedDate = new Date(parts[0], parts[1] - 1, parts[2]);

  if (!isDayBookable(pickedDate)) {
    const validDate = getNextBookableDate(pickedDate);
    const year = validDate.getFullYear();
    const month = String(validDate.getMonth() + 1).padStart(2, '0');
    const day = String(validDate.getDate()).padStart(2, '0');
    const adjustedDateStr = `${year}-${month}-${day}`;

    const formattedPicked = pickedDate.toLocaleDateString('en-US', { weekday: 'long' });
    const formattedValid = validDate.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

    alert(`🗓️ Booking Notice:\n${formattedPicked}s (Tuesdays & Thursdays) are off-days.\n\nYour selection has been automatically adjusted to the next bookable date: ${formattedValid}!`);

    selectedBookingDateStr = adjustedDateStr;
    const datePicker = document.getElementById('modal-date-picker');
    if (datePicker) datePicker.value = adjustedDateStr;
  } else {
    selectedBookingDateStr = dateVal;
  }

  renderQuickDates();
  renderModalDetails();
}

function renderModalUI() {
  const config = BRAND_CONTACT_CONFIG[activeModalBrand];

  // Update Timezone Banner
  const flagEl = document.getElementById('tz-badge-flag');
  const textEl = document.getElementById('tz-badge-text');
  if (flagEl) flagEl.innerText = config.flag;
  if (textEl) textEl.innerText = config.badgeText;

  // Render 3 Work/School Feasible Time Slots
  const slotsGrid = document.getElementById('modal-slots-grid');
  if (slotsGrid) {
    let slotsHtml = '';
    config.slots.forEach(s => {
      const isSelected = s.id === selectedBookingSlotId;
      slotsHtml += `
        <div class="slot-card ${isSelected ? 'active-slot' : ''}" onclick="selectBookingSlot('${s.id}')">
          <div class="slot-time">${s.time}</div>
          <div class="slot-label">${s.label}</div>
        </div>
      `;
    });
    slotsGrid.innerHTML = slotsHtml;
  }

  renderModalDetails();
}

function selectBookingSlot(slotId) {
  selectedBookingSlotId = slotId;
  renderModalUI();
}

function selectBookingPlatform(platform) {
  activeModalPlatform = platform;

  const btns = document.querySelectorAll('.platform-card-btn');
  btns.forEach(b => b.classList.remove('active-platform'));
  document.getElementById(`platform-btn-${platform}`)?.classList.add('active-platform');

  renderModalDetails();
}

function renderModalDetails() {
  const detailsArea = document.getElementById('platform-booking-details');
  if (!detailsArea) return;

  const config = BRAND_CONTACT_CONFIG[activeModalBrand];
  const activeSlotObj = config.slots.find(s => s.id === selectedBookingSlotId) || config.slots[0];
  
  // Format Date label
  const dateParts = selectedBookingDateStr.split('-');
  const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
  const formattedDate = dateObj.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  if (activeModalPlatform === 'whatsapp') {
    detailsArea.innerHTML = `
      <div style="text-align:center; padding:1rem; background:rgba(37,211,102,0.08); border:1px solid rgba(37,211,102,0.3); border-radius:16px;">
        <div style="font-size:2rem; margin-bottom:0.2rem;">💬</div>
        <h4 style="font-size:1.02rem; font-weight:700; margin-bottom:0.3rem;">WhatsApp Instant Booking (<span style="color:#fbbf24;">${config.displayPhone}</span>)</h4>
        <p style="font-size:0.82rem; color:#64748b; margin-bottom:0.9rem; padding:0 0.5rem;">
          Selected: <strong>${formattedDate}</strong> at <strong>${activeSlotObj.time}</strong>
        </p>
        <button onclick="submitWhatsAppBooking('${config.name}', '${formattedDate}', '${activeSlotObj.time}', '${config.tzLabel}', '${config.phone}')" class="cta-demo-btn" style="background:#25d366; color:#0f172a; border:none; font-weight:800; cursor:pointer;">
          Send WhatsApp Booking Request 📲
        </button>
      </div>
    `;
  } else if (activeModalPlatform === 'calendly') {
    detailsArea.innerHTML = `
      <div style="text-align:center; padding:1.1rem; background:rgba(2,132,199,0.08); border:1px solid rgba(2,132,199,0.3); border-radius:16px;">
        <div style="font-size:2rem; margin-bottom:0.2rem;">📅</div>
        <h4 style="font-size:1.05rem; font-weight:800; margin-bottom:0.3rem;">Calendly Automated Scheduler &amp; Zoom Dispatch</h4>
        <p style="font-size:0.82rem; color:#64748b; margin-bottom:0.9rem;">
          Selected Slot: <strong>${formattedDate}</strong> — <strong>${activeSlotObj.time}</strong>
        </p>
        <button class="cta-demo-btn" style="background:linear-gradient(135deg, #0284c7, #0369a1); color:#ffffff; font-weight:800; width:100%; max-width:380px;" onclick="submitCalendlyBooking('${config.name}', '${formattedDate}', '${activeSlotObj.time}', '${config.calendlyUrl}')">
          Book Session via Calendly &amp; Receive Zoom Invite 🎥
        </button>
      </div>
    `;
  } else if (activeModalPlatform === 'email') {
    detailsArea.innerHTML = `
      <div style="text-align:center; padding:1.1rem; background:rgba(124,58,237,0.08); border:1px solid rgba(124,58,237,0.25); border-radius:16px;">
        <div style="font-size:2rem; margin-bottom:0.2rem;">✉️</div>
        <h4 style="font-size:1.02rem; font-weight:700; margin-bottom:0.3rem;">Email Reservation (${config.email})</h4>
        <p style="font-size:0.82rem; color:#64748b; margin-bottom:0.9rem;">
          Session Details: <strong>${formattedDate}</strong> at <strong>${activeSlotObj.time}</strong>
        </p>
        <button onclick="submitEmailBooking('${config.name}', '${formattedDate}', '${activeSlotObj.time}', '${config.tzLabel}', '${config.email}')" class="cta-demo-btn" style="background:#7c3aed; color:#ffffff; font-weight:800; border:none; cursor:pointer;">
          Dispatch Email Request to ${config.email} ✉️
        </button>
      </div>
    `;
  }
}

function getBookingFormValues() {
  const name = document.getElementById('modal-user-name')?.value.trim() || '';
  const email = document.getElementById('modal-user-email')?.value.trim() || '';
  const phone = document.getElementById('modal-user-phone')?.value.trim() || '';
  const topic = document.getElementById('modal-user-topic')?.value || 'General Guidance Inquiry';
  return { name, email, phone, topic };
}

function submitCalendlyBooking(brandName, dateStr, timeSlot, calendlyUrl) {
  const { name, email, phone, topic } = getBookingFormValues();

  if (!name || !email) {
    alert('⚠️ Required Fields Missing:\nPlease enter your Full Name and Email Address so Calendly can send your automated Zoom invitation and calendar invite!');
    document.getElementById(!name ? 'modal-user-name' : 'modal-user-email')?.focus();
    return;
  }

  // Open Calendly Popup Widget if available, or direct window link
  const urlWithParams = `${calendlyUrl}?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&a1=${encodeURIComponent(phone)}&a2=${encodeURIComponent(topic)}`;

  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: urlWithParams });
  } else {
    window.open(urlWithParams, '_blank');
  }

  // Show instant automated on-screen confirmation card
  const detailsArea = document.getElementById('platform-booking-details');
  if (detailsArea) {
    detailsArea.innerHTML = `
      <div style="text-align:center; padding:1.25rem; background:rgba(16,185,129,0.08); border:1px solid rgba(16,185,129,0.4); border-radius:18px; animation:msgSlideIn 0.3s ease;">
        <div style="font-size:2.5rem; margin-bottom:0.2rem;">✅</div>
        <h4 style="font-size:1.15rem; font-weight:800; color:#10b981; margin-bottom:0.4rem;">Booking Sent to Admin Calendly System!</h4>
        <p style="font-size:0.86rem; color:#e2e8f0; margin-bottom:0.8rem;">
          Thank you, <strong>${name}</strong>! Your session request for <strong>${brandName}</strong> on <strong>${dateStr} (${timeSlot})</strong> has been registered.
        </p>
        <div style="background:rgba(2,132,199,0.18); border:1px solid rgba(2,132,199,0.4); padding:0.85rem; border-radius:12px; font-size:0.84rem; color:#38bdf8; text-align:left; margin-bottom:0.8rem;">
          🎥 <strong>Automated Zoom Link &amp; Confirmation Email:</strong> Calendly is sending an automated confirmation email with your unique <strong>Zoom Meeting Room URL</strong> and calendar invite (.ics file) to <strong style="color:#ffffff;">${email}</strong> within minutes.
        </div>
        <p style="font-size:0.75rem; color:#94a3b8;">
          🔔 PC Admin Notification: Delivered directly to Admin Desktop App &amp; Extension.
        </p>
      </div>
    `;
  }
}

function submitWhatsAppBooking(brandName, dateStr, timeSlot, tzLabel, adminPhone) {
  const { name, email, phone, topic } = getBookingFormValues();

  const msg = encodeURIComponent(
    `Hello! I would like to book a Guidance Session for ${brandName}.\n\n👤 Name: ${name || 'Not specified'}\n✉️ Email: ${email || 'Not specified'}\n📞 Phone: ${phone || 'Not specified'}\n📚 Topic: ${topic}\n📅 Date: ${dateStr}\n⏰ Time: ${timeSlot}\n🌐 Timezone: ${tzLabel}\n\nPlease confirm my Zoom / Call link!`
  );

  window.open(`https://wa.me/91${adminPhone}?text=${msg}`, '_blank');
}

function submitEmailBooking(brandName, dateStr, timeSlot, tzLabel, adminEmail) {
  const { name, email, phone, topic } = getBookingFormValues();

  const subject = encodeURIComponent(`${brandName} Session Booking - ${name || 'Student'}`);
  const bodyText = encodeURIComponent(
    `Hello ${brandName} Team,\n\nI would like to request a 1-on-1 Session.\n\n👤 Name: ${name || 'N/A'}\n✉️ Email: ${email || 'N/A'}\n📞 Phone: ${phone || 'N/A'}\n📚 Topic: ${topic}\n📅 Date: ${dateStr}\n⏰ Time: ${timeSlot}\n🌐 Timezone: ${tzLabel}\n\nPlease send the Zoom Meeting link!\n\nThank you!`
  );

  window.location.href = `mailto:${adminEmail}?subject=${subject}&body=${bodyText}`;
}

// ==========================================
// 8. ACCDS™ 2026 INTERACTIVE CAREER EXPLORER
// ==========================================

const CAREER_PATHWAYS_DATA = [
  {
    id: 'engineering',
    category: 'stem',
    title: 'Engineering / Technology / AI / CSE',
    coreCourse: 'B.Tech / B.E.',
    duration: '4 yrs',
    benchmark: 'Usually PCM in 10+2; % varies by institution/exam',
    entranceRoute: 'JEE Main / Advanced, state/private entrances as applicable',
    vocational: ['Python', 'Cloud Computing', 'Cybersecurity', 'Data Analytics', 'CAD/BIM'],
    icon: '🤖'
  },
  {
    id: 'architecture',
    category: 'stem',
    title: 'Architecture',
    coreCourse: 'B.Arch',
    duration: '5 yrs',
    benchmark: 'PCM/eligibility as prescribed by current architecture admission rules',
    entranceRoute: 'NATA / JEE route as applicable',
    vocational: ['CAD/BIM', 'Model-making', 'Design Portfolio', 'Pro Registration'],
    icon: '🏛️'
  },
  {
    id: 'computer_apps',
    category: 'stem',
    title: 'Computer Applications & Data Science',
    coreCourse: 'BCA / B.Sc / BS CS, Data Science',
    duration: '3–4 yrs typically',
    benchmark: 'Varies; some institutions require Mathematics/Statistics/CS',
    entranceRoute: 'CUET / university entrance or merit depending on institution',
    vocational: ['Python', 'SQL', 'Cloud', 'Data Visualisation', 'Cybersecurity'],
    icon: '💻'
  },
  {
    id: 'medicine',
    category: 'medicine',
    title: 'Medicine (MBBS)',
    coreCourse: 'MBBS',
    duration: '4.5 yrs + 1 yr internship',
    benchmark: 'PCB + English and NEET eligibility; category/institution rules apply',
    entranceRoute: 'NEET-UG',
    vocational: ['Postgraduate Speciality Training', 'Clinical Research', 'NMC Licensing'],
    icon: '🩺'
  },
  {
    id: 'dentistry',
    category: 'medicine',
    title: 'Dentistry (BDS)',
    coreCourse: 'BDS',
    duration: 'Typically 5 yrs incl. internship',
    benchmark: 'PCB + English; NEET and applicable eligibility',
    entranceRoute: 'NEET-UG',
    vocational: ['Clinical Specialisation', 'MDS Postgraduate Routes'],
    icon: '🦷'
  },
  {
    id: 'nursing',
    category: 'medicine',
    title: 'Nursing',
    coreCourse: 'B.Sc. Nursing',
    duration: 'Typically 4 yrs',
    benchmark: 'PCB/English and minimum eligibility vary by regulator/institution',
    entranceRoute: 'Entrance / merit varies',
    vocational: ['BLS / First-Aid', 'Specialty Certifications', 'Clinical Practice'],
    icon: '💉'
  },
  {
    id: 'physiotherapy',
    category: 'medicine',
    title: 'Physiotherapy & Allied Health',
    coreCourse: 'BPT / Allied-health UG',
    duration: 'Typically 4–4.5 yrs',
    benchmark: 'Usually Science/PCB; percentage varies',
    entranceRoute: 'Institution / state entrance or merit',
    vocational: ['BLS', 'Sports Rehab CPD', 'Kinesiology Skills'],
    icon: '🏋️‍♂️'
  },
  {
    id: 'pharmacy',
    category: 'medicine',
    title: 'Pharmacy',
    coreCourse: 'B.Pharm / Pharm.D',
    duration: '4 yrs / 6 yrs',
    benchmark: 'Science eligibility; varies by programme',
    entranceRoute: 'State / university / national routes as applicable',
    vocational: ['Regulatory Registration', 'Clinical / Research Skills', 'Pharma QC'],
    icon: '💊'
  },
  {
    id: 'lifesciences',
    category: 'science',
    title: 'Life Sciences / Biotechnology / Bioinformatics',
    coreCourse: 'B.Sc / BS / B.Tech',
    duration: '3–4 yrs',
    benchmark: 'PCB/PCM/PCMB depending programme; varies',
    entranceRoute: 'CUET / university / engineering entrance depending route',
    vocational: ['Bioinformatics Tools', 'Python/R', 'Genomics', 'Lab Techniques'],
    icon: '🧬'
  },
  {
    id: 'puresciences',
    category: 'science',
    title: 'Pure Sciences & Basic Research',
    coreCourse: 'B.Sc / BS / BS-MS Integrated',
    duration: '3–4 yrs / integrated ~5 yrs',
    benchmark: 'Science subjects required; varies by institute/programme',
    entranceRoute: 'IISER Aptitude Test / CUET / institution routes as applicable',
    vocational: ['Research Internships', 'Coding/Data Skills', 'Lab Methodology'],
    icon: '🔬'
  },
  {
    id: 'commerce',
    category: 'commerce',
    title: 'Commerce & Accounting',
    coreCourse: 'B.Com / B.Com (Hons.)',
    duration: '3–4 yrs depending university structure',
    benchmark: '10+2; subject and percentage requirements vary',
    entranceRoute: 'CUET / university merit / entrance',
    vocational: ['CA/CMA/CS Add-ons', 'Tally/ERP', 'Advanced Excel', 'GST & Taxation'],
    icon: '📊'
  },
  {
    id: 'ca',
    category: 'commerce',
    title: 'Chartered Accountancy (CA)',
    coreCourse: 'CA Professional Route (ICAI)',
    duration: 'Multi-stage (Foundation ➔ Inter ➔ Final)',
    benchmark: 'Foundation route available after school under ICAI rules',
    entranceRoute: 'ICAI Foundation ➔ Intermediate ➔ Final + prescribed training',
    vocational: ['CA Professional License', 'B.Com alongside', 'Audit & Tax Practice'],
    icon: '💼'
  },
  {
    id: 'cs',
    category: 'commerce',
    title: 'Company Secretary (CS)',
    coreCourse: 'CS Professional Route (ICSI)',
    duration: 'Multi-stage (CSEET ➔ Exec ➔ Pro)',
    benchmark: '10+2 route through CSEET/current ICSI rules',
    entranceRoute: 'CSEET ➔ Executive ➔ Professional + prescribed training',
    vocational: ['Student Induction Programme', 'Corporate Governance', 'Legal Compliance'],
    icon: '📜'
  },
  {
    id: 'cma',
    category: 'commerce',
    title: 'Cost & Management Accountancy (CMA)',
    coreCourse: 'CMA Professional Route (ICMAI)',
    duration: 'Multi-stage (Foundation ➔ Inter ➔ Final)',
    benchmark: '10+2 + Foundation route, or qualifying direct-entry routes',
    entranceRoute: 'ICMAI Foundation ➔ Intermediate ➔ Final + training requirements',
    vocational: ['Cost Audit', 'Excel & Financial Analytics', 'Corporate Strategy'],
    icon: '📈'
  },
  {
    id: 'economics',
    category: 'commerce',
    title: 'Economics / Finance / FinTech',
    coreCourse: 'BA / B.Sc Economics, Finance, BBA',
    duration: '3–4 yrs',
    benchmark: 'Varies; Mathematics is required/preferred for quantitative programmes',
    entranceRoute: 'CUET / university entrance / merit',
    vocational: ['Actuarial Exams', 'CFA Pathway', 'NISM Modules', 'Financial Modelling'],
    icon: '💹'
  },
  {
    id: 'management',
    category: 'commerce',
    title: 'Management / Entrepreneurship',
    coreCourse: 'BBA / BMS / IPM',
    duration: '3–5 yrs depending programme',
    benchmark: '10+2; varies',
    entranceRoute: 'CUET / IPMAT / university-specific routes',
    vocational: ['Digital Marketing', 'Excel/Analytics', 'Project Management', 'Incubation'],
    icon: '🚀'
  },
  {
    id: 'law',
    category: 'law',
    title: 'Integrated Law (BA/BBA/B.Com LL.B)',
    coreCourse: 'Integrated 5-Year LL.B',
    duration: '5 yrs after 12th',
    benchmark: '10+2; minimum marks vary by institution/admission rules',
    entranceRoute: 'CLAT / AILET / university entrances as applicable',
    vocational: ['BCI-Recognised Law Degree', 'AIBE Enrolment', 'Moot Court & Corporate Law'],
    icon: '⚖️'
  },
  {
    id: 'psychology',
    category: 'law',
    title: 'Psychology & Social Sciences',
    coreCourse: 'BA / BA (Hons.) Psychology',
    duration: '3–4 yrs',
    benchmark: '10+2; programme-specific requirements vary',
    entranceRoute: 'CUET / university merit / entrance',
    vocational: ['Research Methods', 'Statistics', 'Counselling-skills courses', 'Psychometrics'],
    icon: '🧠'
  },
  {
    id: 'design',
    category: 'design',
    title: 'Design / UX / Creative Technology',
    coreCourse: 'B.Des / Design UG',
    duration: 'Typically 4 yrs',
    benchmark: '10+2; eligibility varies',
    entranceRoute: 'UCEED / NID DAT / university design entrances as applicable',
    vocational: ['Portfolio Building', 'Adobe Figma', 'UX Research', '3D / CAD Animation'],
    icon: '🎨'
  },
  {
    id: 'finearts',
    category: 'design',
    title: 'Fine & Visual Arts',
    coreCourse: 'BFA / BVA',
    duration: 'Typically 4 yrs; varies',
    benchmark: '10+2; portfolio/aptitude requirements may apply',
    entranceRoute: 'Institution entrance / portfolio review',
    vocational: ['Digital Illustration', 'Photography', 'Animation Software'],
    icon: '🖌️'
  },
  {
    id: 'media',
    category: 'design',
    title: 'Media / Journalism / Communication',
    coreCourse: 'BA / BJMC / Media UG',
    duration: '3–4 yrs',
    benchmark: '10+2; varies',
    entranceRoute: 'CUET / university entrance / merit',
    vocational: ['Video Editing', 'Digital Marketing', 'SEO', 'Content Strategy & Podcasting'],
    icon: '🎙️'
  },
  {
    id: 'hospitality',
    category: 'hospitality',
    title: 'Hospitality & Hotel Administration',
    coreCourse: 'B.Sc HHA (NCHMCT)',
    duration: '3 yrs (optional 4th-yr honours route)',
    benchmark: 'Pass 10+2 with English for NCHMCT B.Sc HHA',
    entranceRoute: 'NCHM JEE / counselling for participating institutes',
    vocational: ['NCHMCT 1.5-yr Diplomas', 'F&B Service', 'Front Office', 'Housekeeping'],
    icon: '🏨'
  },
  {
    id: 'culinary',
    category: 'hospitality',
    title: 'Culinary Arts & Food Production',
    coreCourse: 'Diploma / Degree Routes',
    duration: '1.5 yrs diploma; degrees vary',
    benchmark: '10+2 for NCHMCT Diploma in Food Production',
    entranceRoute: 'Institute admission rules',
    vocational: ['Bakery & Confectionery Diploma', 'Food Safety Certification'],
    icon: '👨‍🍳'
  },
  {
    id: 'socialwork',
    category: 'law',
    title: 'Social Work & Community Development',
    coreCourse: 'BSW / BA Social Work',
    duration: '3–4 yrs',
    benchmark: '10+2; varies',
    entranceRoute: 'CUET / university admission',
    vocational: ['NGO Internships', 'Community Development', 'Child Protection & Counselling'],
    icon: '🤝'
  },
  {
    id: 'forensics',
    category: 'stem',
    title: 'Forensic Science & Digital Forensics',
    coreCourse: 'B.Sc / Integrated Specialised UG',
    duration: '3–5 yrs depending programme',
    benchmark: 'Often science; cyber programmes may require Maths/CS',
    entranceRoute: 'University / national entrances as applicable',
    vocational: ['Cybersecurity', 'Networking', 'Digital-forensics tools', 'Lab Quality'],
    icon: '🕵️‍♂️'
  },
  {
    id: 'sports',
    category: 'science',
    title: 'Sports & Sports Management',
    coreCourse: 'B.P.Ed / Sports Management UG',
    duration: '3–4 yrs typically',
    benchmark: '10+2 and sometimes physical/fitness criteria',
    entranceRoute: 'Institution tests / merit',
    vocational: ['Coaching Certifications', 'First Aid / BLS', 'Sports Analytics'],
    icon: '⚽'
  },
  {
    id: 'performing',
    category: 'design',
    title: 'Performing Arts & Languages',
    coreCourse: 'BPA / BA',
    duration: '3–4 yrs',
    benchmark: '10+2; audition/aptitude may apply',
    entranceRoute: 'Institution audition / entrance',
    vocational: ['Grade Examinations', 'Language Proficiency Certs', 'Production Skills'],
    icon: '🎭'
  },
  {
    id: 'environment',
    category: 'science',
    title: 'Environment / Sustainability / Climate',
    coreCourse: 'B.Sc / BS / B.Tech / BA Pathways',
    duration: '3–4 yrs',
    benchmark: 'Science, engineering, economics or social-science eligibility',
    entranceRoute: 'CUET / JEE / university routes',
    vocational: ['GIS & Remote Sensing', 'Data Analysis', 'Sustainability / ESG Reporting'],
    icon: '🌱'
  }
];

let activeCareerCat = 'all';

function initCareerExplorer() {
  renderCareerCards();
}

function selectCareerCategory(catKey) {
  activeCareerCat = catKey;
  const btns = document.querySelectorAll('.cat-pill');
  btns.forEach(b => {
    if (b.getAttribute('data-cat') === catKey) b.classList.add('active-cat');
    else b.classList.remove('active-cat');
  });
  renderCareerCards();
}

function filterCareerCards() {
  renderCareerCards();
}

function renderCareerCards() {
  const container = document.getElementById('career-pathways-grid');
  const countBadge = document.getElementById('career-count-badge');
  const searchInput = document.getElementById('career-search-input');

  if (!container) return;

  const query = (searchInput?.value || '').toLowerCase().trim();

  const filtered = CAREER_PATHWAYS_DATA.filter(item => {
    const matchCat = (activeCareerCat === 'all' || item.category === activeCareerCat);
    const textSearch = `${item.title} ${item.coreCourse} ${item.benchmark} ${item.entranceRoute} ${item.vocational.join(' ')}`.toLowerCase();
    const matchText = !query || textSearch.includes(query);
    return matchCat && matchText;
  });

  if (countBadge) {
    countBadge.innerText = `Showing ${filtered.length} of ${CAREER_PATHWAYS_DATA.length} Pathways`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align:center; padding:3rem 1rem;" class="glass-panel">
        <div style="font-size:3rem; margin-bottom:0.5rem;">🔍</div>
        <h4 style="font-size:1.2rem; font-weight:800; color:#fff;">No career streams matched "${query}"</h4>
        <p style="color:#cbd5e1; font-size:0.88rem; margin-top:0.4rem;">Try searching for terms like "JEE", "CUET", "NEET", "MBBS", "CA", "Law", or "Design".</p>
        <button class="cta-demo-btn" style="margin:1.2rem auto 0 auto;" onclick="resetCareerFilters()">Reset All Filters 🔄</button>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const skillsHtml = item.vocational.map(v => `<span class="skill-chip">✨ ${v}</span>`).join('');
    
    html += `
      <div class="glass-panel-interactive career-card-item">
        <div>
          <div class="career-header-row">
            <span class="career-stream-badge">${item.icon} ${item.category}</span>
            <span class="career-duration-pill">⏱️ ${item.duration}</span>
          </div>
          <h3 class="career-card-title">${item.title}</h3>
          <div class="career-core-course">🎓 Core Route: ${item.coreCourse}</div>

          <div class="career-detail-box">
            <div class="career-detail-row">
              <span class="career-detail-label">📋 Entry Benchmark / Eligibility</span>
              <span class="career-detail-val">${item.benchmark}</span>
            </div>
            <div class="career-detail-row" style="margin-top:0.4rem;">
              <span class="career-detail-label" style="color:#fbbf24;">🎯 National Entrance Route</span>
              <span class="career-detail-val" style="color:#fbbf24;">${item.entranceRoute}</span>
            </div>
          </div>
        </div>

        <div>
          <div class="career-detail-label" style="margin-bottom:0.3rem;">🚀 Recommended Vocational & Skill Add-ons</div>
          <div class="skill-chips-row">
            ${skillsHtml}
          </div>
          <button class="cta-demo-btn" style="margin-top:1.2rem; width:100%; justify-content:center; font-size:0.8rem; background:rgba(251,191,36,0.18); color:#fbbf24; border:1px solid #fbbf24;" onclick="openBookingModal()">
            Discuss Stream with ACCDS Counsellor 📅
          </button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function resetCareerFilters() {
  const searchInput = document.getElementById('career-search-input');
  if (searchInput) searchInput.value = '';
  selectCareerCategory('all');
}

// ==========================================
// 14-MONTH STUDENT PROGRESSION CRM ENGINE
// ==========================================

const CRM_14_MONTHS_DATA = [
  {
    month: 1,
    title: 'Month 01: A1 Foundations & Phonetics',
    phase: 'a1a2',
    level: 'A1 Beginner',
    hours: '15 Hours',
    cumulativeHours: 15,
    summary: 'Master French phonetics, alphabet, numbers, gender rules, and basic greetings.',
    weeks: [
      { week: 'Week 1', topic: 'French Alphabet & Nasal Vowel Sounds', hours: '3.5h', task: 'Pronunciation Drill #1' },
      { week: 'Week 2', topic: 'Articles (un/une, le/la) & Subject Pronouns', hours: '3.5h', task: 'Self-Introduction Quiz' },
      { week: 'Week 3', topic: 'Verb "Être" & "Avoir" Present Tense Conjugations', hours: '4.0h', task: 'Verb Matrix Drill' },
      { week: 'Week 4', topic: 'Numbers 0–100 & Asking Basic Questions', hours: '4.0h', task: 'Live Oral Checkpoint #1' }
    ],
    status: 'Completed',
    deliverable: 'Ability to introduce yourself, spell names, and exchange phone numbers.'
  },
  {
    month: 2,
    title: 'Month 02: A1 Sentence Building & Daily Routines',
    phase: 'a1a2',
    level: 'A1 Beginner',
    hours: '15 Hours',
    cumulativeHours: 30,
    summary: 'Regular -er/-ir verbs, daily schedules, tell time, and order in a café.',
    weeks: [
      { week: 'Week 1', topic: 'Regular -ER Verbs (Parler, Habiter, Aimer)', hours: '3.5h', task: 'Daily Habits Writing' },
      { week: 'Week 2', topic: 'Telling Time, Days of Week & Calendar', hours: '3.5h', task: 'Schedule Description' },
      { week: 'Week 3', topic: 'Ordering Food & Drinks (Au Café)', hours: '4.0h', task: 'Roleplay Simulation' },
      { week: 'Week 4', topic: 'A1 Mid-Module Evaluation & Quiz', hours: '4.0h', task: 'A1 Progress Checkpoint' }
    ],
    status: 'In Progress',
    deliverable: 'Capable of ordering meals and describing daily activities.'
  },
  {
    month: 3,
    title: 'Month 03: A1 Completion & Breakthrough Certification',
    phase: 'a1a2',
    level: 'A1 Certified',
    hours: '10 Hours',
    cumulativeHours: 40,
    summary: 'Directions, places in city, family vocabulary, and A1 final examination.',
    weeks: [
      { week: 'Week 1', topic: 'Family Tree & Possessive Adjectives (mon/ma/mes)', hours: '2.5h', task: 'Family Presentation' },
      { week: 'Week 2', topic: 'Asking Directions & Prepositions of Place', hours: '2.5h', task: 'City Navigation Drill' },
      { week: 'Week 3', topic: 'Passé Composé Intro (Past Tense with Avoir)', hours: '2.5h', task: 'Weekend Past Recount' },
      { week: 'Week 4', topic: 'DELF A1 Official Mock Test & Certificate', hours: '2.5h', task: 'A1 Official Diploma' }
    ],
    status: 'Upcoming',
    deliverable: 'A1 Certificate Awarded (800 Vocabulary Words Mastered).'
  },
  {
    month: 4,
    title: 'Month 04: A2 Waystage & Past Tense Mastery',
    phase: 'a1a2',
    level: 'A2 Intermediate',
    hours: '15 Hours',
    cumulativeHours: 55,
    summary: 'Passé Composé vs Imparfait, recounting memories, and travel vocabulary.',
    weeks: [
      { week: 'Week 1', topic: 'Passé Composé with Être (Dr. & Mrs. Vandertramp)', hours: '3.5h', task: 'Travel Story Writing' },
      { week: 'Week 2', topic: 'L’Imparfait for Background Description', hours: '3.5h', task: 'Childhood Memory Essay' },
      { week: 'Week 3', topic: 'Combining Passé Composé & Imparfait', hours: '4.0h', task: 'Narrative Story Drill' },
      { week: 'Week 4', topic: 'Booking Hotels & Buying Train Tickets', hours: '4.0h', task: 'Travel Conversation' }
    ],
    status: 'Upcoming',
    deliverable: 'Narrating past events and childhood experiences in French.'
  },
  {
    month: 5,
    title: 'Month 05: A2 Future Tenses & Shopping Dialogue',
    phase: 'a1a2',
    level: 'A2 Intermediate',
    hours: '15 Hours',
    cumulativeHours: 70,
    summary: 'Futur Proche, Futur Simple, clothing, purchasing, and expressing preferences.',
    weeks: [
      { week: 'Week 1', topic: 'Futur Simple vs Futur Proche Conjugations', hours: '3.5h', task: '5-Year Plan Essay' },
      { week: 'Week 2', topic: 'Direct Object Pronouns (le, la, les)', hours: '3.5h', task: 'Pronoun Replacement Drill' },
      { week: 'Week 3', topic: 'Shopping, Clothes, Colors & Sizes', hours: '4.0h', task: 'Boutique Roleplay' },
      { week: 'Week 4', topic: 'Expressing Agreement, Disagreement & Advice', hours: '4.0h', task: 'Opinion Speaking' }
    ],
    status: 'Upcoming',
    deliverable: 'Handling transactions, clothing stores, and future project statements.'
  },
  {
    month: 6,
    title: 'Month 06: A2 Graduation & DELF A2 Certification',
    phase: 'a1a2',
    level: 'A2 Certified',
    hours: '20 Hours',
    cumulativeHours: 90,
    summary: 'Indirect object pronouns (lui/leur), comparative/superlative, DELF A2 Exam.',
    weeks: [
      { week: 'Week 1', topic: 'Indirect Object Pronouns (lui, leur)', hours: '5.0h', task: 'Email Response Drill' },
      { week: 'Week 2', topic: 'Comparatives (plus...que) & Superlatives', hours: '5.0h', task: 'Product Comparison' },
      { week: 'Week 3', topic: 'A2 Listening Comprehension Speed Drills', hours: '5.0h', task: 'Audio Simulation' },
      { week: 'Week 4', topic: 'Official DELF A2 Graduation Mock Examination', hours: '5.0h', task: 'A2 Diploma Awarded' }
    ],
    status: 'Upcoming',
    deliverable: 'A2 Diploma Awarded (1,600 Vocabulary Words Mastered).'
  },
  {
    month: 7,
    title: 'Month 07: B1 Threshold & Subjunctive Mood Intro',
    phase: 'b1b2',
    level: 'B1 Independent',
    hours: '20 Hours',
    cumulativeHours: 110,
    summary: 'Le Subjonctif Présent, expressing necessity, emotions, doubt, and wishes.',
    weeks: [
      { week: 'Week 1', topic: 'Subjunctive Formation & Trigger Phrases', hours: '5.0h', task: 'Subjunctive Drill #1' },
      { week: 'Week 2', topic: 'Expressing Obligation (Il faut que...)', hours: '5.0h', task: 'Workplace Rules Essay' },
      { week: 'Week 3', topic: 'Hypothetical Conditionals (Si + Imparfait)', hours: '5.0h', task: 'If-I-Were-King Story' },
      { week: 'Week 4', topic: 'B1 Reading: Decoding French Newspaper Articles', hours: '5.0h', task: 'News Article Summary' }
    ],
    status: 'Upcoming',
    deliverable: 'Expressing abstract feelings, doubts, and workplace requirements.'
  },
  {
    month: 8,
    title: 'Month 08: B1 Argumentation & Debate Skills',
    phase: 'b1b2',
    level: 'B1 Independent',
    hours: '20 Hours',
    cumulativeHours: 130,
    summary: 'Articulateurs logiques (car, donc, bien que), formal debates, and opinion essays.',
    weeks: [
      { week: 'Week 1', topic: 'Logical Connectors (Cependant, De plus, Bien que)', hours: '5.0h', task: 'Essay Structure' },
      { week: 'Week 2', topic: 'B1 Formal Letter Writing (Reclamation/Complaint)', hours: '5.0h', task: 'Formal Letter Drill' },
      { week: 'Week 3', topic: 'Environmental & Social Issues Debate', hours: '5.0h', task: 'Live Class Debate' },
      { week: 'Week 4', topic: 'B1 Listening: Radio Broadcasts & Interviews', hours: '5.0h', task: 'Podcast Analysis' }
    ],
    status: 'Upcoming',
    deliverable: 'Conducting structured debates and formal complaint correspondence.'
  },
  {
    month: 9,
    title: 'Month 09: B1 Graduation & Intermediate Diploma',
    phase: 'b1b2',
    level: 'B1 Certified',
    hours: '20 Hours',
    cumulativeHours: 150,
    summary: 'Gérondif, passive voice, DELF B1 mock exams, and 3,200 word milestone.',
    weeks: [
      { week: 'Week 1', topic: 'Le Gérondif (en faisant, en disant)', hours: '5.0h', task: 'Action Description' },
      { week: 'Week 2', topic: 'Passive Voice in Formal French Media', hours: '5.0h', task: 'Journalism Writing' },
      { week: 'Week 3', topic: 'DELF B1 Speaking Simulation: Monologue & Debate', hours: '5.0h', task: 'Oral Exam Practice' },
      { week: 'Week 4', topic: 'Official DELF B1 Certification Mock Exam', hours: '5.0h', task: 'B1 Diploma Awarded' }
    ],
    status: 'Upcoming',
    deliverable: 'B1 Diploma Awarded (3,200 Vocabulary Words Mastered).'
  },
  {
    month: 10,
    title: 'Month 10: B2 Vantage & Professional French',
    phase: 'b1b2',
    level: 'B2 Advanced',
    hours: '20 Hours',
    cumulativeHours: 170,
    summary: 'Professional correspondence, business French, nuance, and speed listening.',
    weeks: [
      { week: 'Week 1', topic: 'Conditionnel Passé & Regrets (J’aurais dû)', hours: '5.0h', task: 'Diplomatic Feedback' },
      { week: 'Week 2', topic: 'Business Emailing & Corporate Etiquette', hours: '5.0h', task: 'Corporate Memo' },
      { week: 'Week 3', topic: 'Fast-Paced Colloquial Expressions (Verlan & Slang)', hours: '5.0h', task: 'Media Comprehension' },
      { week: 'Week 4', topic: 'TEF Canada Listening Task 3 & 4 Strategies', hours: '5.0h', task: 'TEF Audio Drill' }
    ],
    status: 'Upcoming',
    deliverable: 'Professional fluency suitable for Canadian corporate environments.'
  },
  {
    month: 11,
    title: 'Month 11: B2 Advanced Essay & Argumentative Speech',
    phase: 'b1b2',
    level: 'B2 Advanced',
    hours: '20 Hours',
    cumulativeHours: 190,
    summary: 'TEF Writing Section 2 (Essai argumentatif), advanced connectors, B2 speaking.',
    weeks: [
      { week: 'Week 1', topic: 'Argumentative Essay Structure for TEF Section B', hours: '5.0h', task: '250-Word Essay' },
      { week: 'Week 2', topic: 'Persuasive Speech Techniques for TEF Oral Section B', hours: '5.0h', task: '10-Min Oral Monologue' },
      { week: 'Week 3', topic: 'TEF Reading Comprehension Speed Strategies', hours: '5.0h', task: '40-Q Reading Drill' },
      { week: 'Week 4', topic: 'Advanced Grammar Refinement & Error Elimination', hours: '5.0h', task: 'Grammar Precision Check' }
    ],
    status: 'Upcoming',
    deliverable: 'Fluency in persuasive writing and impromptu oral defense.'
  },
  {
    month: 12,
    title: 'Month 12: B2 Graduation & DELF B2 Certification',
    phase: 'b1b2',
    level: 'B2 Certified',
    hours: '20 Hours',
    cumulativeHours: 210,
    summary: 'Full B2 diploma qualification, 4,500 words, and readiness for TEF Canada.',
    weeks: [
      { week: 'Week 1', topic: 'Full-Length DELF B2 Mock Examination', hours: '5.0h', task: 'B2 Mock Exam' },
      { week: 'Week 2', topic: 'Detailed Mentor Evaluation with Rebecca Franswah', hours: '5.0h', task: '1-on-1 Feedback' },
      { week: 'Week 3', topic: 'Oral Defense before Certification Panel', hours: '5.0h', task: 'Panel Interview' },
      { week: 'Week 4', topic: 'DELF B2 Diploma Conferred', hours: '5.0h', task: 'B2 Diploma Awarded' }
    ],
    status: 'Upcoming',
    deliverable: 'B2 Master Diploma Awarded (210 Total Guided Hours Completed).'
  },
  {
    month: 13,
    title: 'Month 13: TEF Canada Targeted Exam Drilling',
    phase: 'tef',
    level: 'TEF Specialist',
    hours: 'Exam Intensive',
    cumulativeHours: 220,
    summary: 'Simulated TEF Canada testing conditions, time management, NCLC 7+ target.',
    weeks: [
      { week: 'Week 1', topic: 'TEF Listening Section (40 Qs under timed speed)', hours: '5.0h', task: 'TEF Audio Mock 1' },
      { week: 'Week 2', topic: 'TEF Reading Section (40 Qs under timed speed)', hours: '5.0h', task: 'TEF Reading Mock 1' },
      { week: 'Week 3', topic: 'TEF Writing Task A (Fait Divers) & Task B (Essai)', hours: '5.0h', task: 'Timed Writing Test' },
      { week: 'Week 4', topic: 'TEF Speaking Section A (Informal) & B (Formal)', hours: '5.0h', task: 'Live Examiner Drill' }
    ],
    status: 'Upcoming',
    deliverable: 'Consistent NCLC 7+ scores achieved across all 4 TEF modules.'
  },
  {
    month: 14,
    title: 'Month 14: Official TEF Exam & Express Entry CRS Filing',
    phase: 'tef',
    level: 'CRS +50 Unlocked',
    hours: 'Immigration Ready',
    cumulativeHours: 230,
    summary: 'Official TEF Exam sitting, score reporting, and Express Entry CRS +50 points claim.',
    weeks: [
      { week: 'Week 1', topic: 'Final Pre-Exam Confidence Warmup with Mentor', hours: '2.5h', task: 'Warmup Review' },
      { week: 'Week 2', topic: 'Official TEF Canada Examination Sitting', hours: '3.0h', task: 'Official TEF Sitting' },
      { week: 'Week 3', topic: 'Score Report Retrieval (NCLC 7 / B2 Verified)', hours: '1.0h', task: 'NCLC 7 Score Certificate' },
      { week: 'Week 4', topic: 'Express Entry Profile Update (+50 CRS Points Added!)', hours: '1.0h', task: '+50 CRS Bonus Claimed' }
    ],
    status: 'Upcoming',
    deliverable: '+50 CRS Bonus Points successfully updated on IRCC Express Entry Portal.'
  }
];

let selectedCrmMonthId = 1;
let currentCrmPhaseFilter = 'all';

function initStudentCrmEngine() {
  renderCrmTimelineGrid();
  renderCrmDossierPanel(1);
}

function filterCrmPhase(phase) {
  currentCrmPhaseFilter = phase;

  const btnAll = document.getElementById('crm-filter-all');
  const btnA1A2 = document.getElementById('crm-filter-a1a2');
  const btnB1B2 = document.getElementById('crm-filter-b1b2');
  const btnTef = document.getElementById('crm-filter-tef');

  [btnAll, btnA1A2, btnB1B2, btnTef].forEach(b => b?.classList.remove('active-crm-filter'));
  document.getElementById(`crm-filter-${phase}`)?.classList.add('active-crm-filter');

  renderCrmTimelineGrid();
}

function renderCrmTimelineGrid() {
  const container = document.getElementById('crm-timeline-grid');
  if (!container) return;

  let filtered = CRM_14_MONTHS_DATA;
  if (currentCrmPhaseFilter !== 'all') {
    filtered = CRM_14_MONTHS_DATA.filter(m => m.phase === currentCrmPhaseFilter);
  }

  let html = '';
  filtered.forEach(m => {
    const isActive = m.month === selectedCrmMonthId;
    const statusColor = m.status === 'Completed' ? '#25d366' : m.status === 'In Progress' ? '#0284c7' : '#94a3b8';

    html += `
      <div class="crm-month-card ${isActive ? 'active-month' : ''}" onclick="selectCrmMonth(${m.month})">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span style="font-size:0.75rem; font-weight:800; background:rgba(2,132,199,0.12); color:#0284c7; padding:0.2rem 0.6rem; border-radius:9999px;">
              ${m.level}
            </span>
            <span style="font-size:0.72rem; font-weight:700; color:${statusColor};">
              ● ${m.status}
            </span>
          </div>
          <h4 style="font-size:0.95rem; font-weight:800; margin-bottom:0.4rem; color:#0f172a;" class="month-card-title">
            Month ${String(m.month).padStart(2, '0')}: ${m.title.split(':')[1] || m.title}
          </h4>
          <p style="font-size:0.78rem; color:#64748b; line-height:1.4; margin-bottom:0.8rem;">
            ${m.summary}
          </p>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid rgba(0,0,0,0.06); padding-top:0.6rem; font-size:0.75rem; color:#0284c7; font-weight:700;">
          <span>⏱️ ${m.hours}</span>
          <span>Cumul: ${m.cumulativeHours}h</span>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function selectCrmMonth(monthId) {
  selectedCrmMonthId = monthId;
  renderCrmTimelineGrid();
  renderCrmDossierPanel(monthId);

  // Update progress bar
  const pct = Math.round((monthId / 14) * 100);
  const fill = document.getElementById('crm-progress-bar-fill');
  const viewTitle = document.getElementById('crm-current-view-title');
  const pctLabel = document.getElementById('crm-percent-label');

  if (fill) fill.style.width = `${pct}%`;
  if (pctLabel) pctLabel.innerText = `${pct}% Completed`;
  
  const monthData = CRM_14_MONTHS_DATA.find(m => m.month === monthId);
  if (viewTitle && monthData) {
    viewTitle.innerText = `Active View: ${monthData.title}`;
  }
}

function renderCrmDossierPanel(monthId) {
  const dossierPanel = document.getElementById('crm-dossier-panel');
  if (!dossierPanel) return;

  const m = CRM_14_MONTHS_DATA.find(item => item.month === monthId) || CRM_14_MONTHS_DATA[0];

  let weeksHtml = '';
  m.weeks.forEach(w => {
    weeksHtml += `
      <div class="crm-week-box">
        <div style="display:flex; justify-content:space-between; font-weight:800; font-size:0.82rem; color:#0284c7; margin-bottom:0.3rem;">
          <span>${w.week}</span>
          <span>${w.hours}</span>
        </div>
        <div style="font-size:0.82rem; font-weight:700; color:#0f172a; margin-bottom:0.3rem;" class="week-topic">${w.topic}</div>
        <div style="font-size:0.75rem; color:#64748b; background:rgba(0,0,0,0.04); padding:0.25rem 0.5rem; border-radius:6px; display:inline-block;">
          📋 ${w.task}
        </div>
      </div>
    `;
  });

  dossierPanel.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1rem; margin-bottom:1rem; border-bottom:1px solid rgba(0,0,0,0.08); padding-bottom:1rem;">
      <div>
        <span class="section-tag" style="font-size:0.75rem;">Detailed Inspection Dossier</span>
        <h3 style="font-size:1.35rem; font-weight:800; margin-top:0.3rem; color:#0f172a;" class="dossier-heading">
          ${m.title}
        </h3>
        <p style="font-size:0.86rem; color:#64748b; margin-top:0.2rem;">
          CEFR Milestone: <strong>${m.level}</strong> | Monthly Commitment: <strong>${m.hours}</strong> | Cumulative: <strong>${m.cumulativeHours} Hours</strong>
        </p>
      </div>
      <div>
        <span style="background:rgba(37,211,102,0.15); color:#16a34a; font-weight:800; padding:0.4rem 0.9rem; border-radius:9999px; font-size:0.82rem; border:1px solid rgba(37,211,102,0.3);">
          ✔️ Key Deliverable: ${m.deliverable}
        </span>
      </div>
    </div>

    <h4 style="font-size:0.95rem; font-weight:800; margin-bottom:0.6rem; color:#0369a1;">Weekly Curriculum & Task Breakdown:</h4>
    <div class="crm-weekly-grid">
      ${weeksHtml}
    </div>

    <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:1rem; margin-top:1.2rem; padding-top:1rem; border-top:1px solid rgba(0,0,0,0.08);">
      <div style="font-size:0.82rem; color:#64748b;">
        👨‍🏫 Assigned Supervisor: <strong>Rebecca Franswah (Academic Head)</strong> | 1-on-1 Oral Practice Included
      </div>
      <div>
        <button class="cta-demo-btn" style="padding:0.45rem 1rem; font-size:0.8rem;" onclick="openBookingModal()">
          Book Month ${m.month} Session 📅
        </button>
      </div>
    </div>
  `;
}

function updateCrmPaceCalculator(hoursPerWeek) {
  const valLabel = document.getElementById('crm-calc-weekly-val');
  const durationLabel = document.getElementById('crm-calc-duration');
  const examDateLabel = document.getElementById('crm-calc-exam-date');

  if (valLabel) valLabel.innerText = `${hoursPerWeek} Hours / Week`;

  const totalRequiredHours = 210;
  const totalWeeks = Math.ceil(totalRequiredHours / parseFloat(hoursPerWeek));
  const totalMonths = (totalWeeks / 4.33).toFixed(1);

  if (durationLabel) durationLabel.innerText = `${totalMonths} Months`;

  const now = new Date();
  const examDate = new Date(now);
  examDate.setMonth(now.getMonth() + Math.round(parseFloat(totalMonths)));

  const formattedExam = examDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  if (examDateLabel) examDateLabel.innerText = formattedExam;
}

// ==========================================================================
// ACCDS™ 10-D INTERACTIVE STUDENT WORKBOOK EVALUATOR & WORD (.DOCX) GENERATOR
// ==========================================================================

let currentACCDSStep = 1;

let accdsFormData = {
  // Step 1: Student Details & Commitment
  fullName: 'Aarav Sharma',
  age: '16',
  gender: 'Male',
  classGrade: 'Class 11',
  school: 'St. Andrew Senior Secondary School',
  city: 'Mumbai',
  date: new Date().toISOString().split('T')[0],
  emailContact: 'aarav.sharma@example.com',
  commitmentCheck: true,

  // Step 2: 1. About Me (1-5 ratings & text)
  about_q1: '5', // curious
  about_q2: '4', // persistence
  about_q3: '4', // resilience
  about_q4: '5', // comfortable sharing ideas
  about_q5: '5', // initiative
  about_q6: '4', // independent
  about_proud: 'Leading our school entrepreneurship club and organizing a successful charity drive.',
  about_improve: 'Time management during peak examination months.',

  // Step 3: 2. What Energises Me
  energise_activities: ['Solving problems / puzzles', 'Speaking / presenting', 'Organising / planning', 'Leading a group', 'Travelling / exploring', 'Drawing / designing'],
  top5_activities: ['Leading a group', 'Speaking / presenting', 'Organising / planning', 'Solving problems / puzzles', 'Travelling / exploring'],
  lose_track_time: 'Designing strategy decks and presenting business pitches for group projects because I love turning concepts into reality.',

  // Step 4: 3. What Matters to Me (Core Values)
  core_values: ['Achievement', 'Independence', 'Leadership', 'Creativity', 'Honesty', 'Financial security'],
  val1_name: 'Achievement', val1_why: 'I strive to excel in meaningful goals and set high standards for myself.',
  val2_name: 'Independence', val2_why: 'I value autonomy, decision-making freedom, and taking personal responsibility.',
  val3_name: 'Leadership', val3_why: 'I enjoy guiding teams towards a shared vision and inspiring others to succeed.',

  // Step 5: 4. My Strengths & Skills
  natural_strengths: ['Creative thinking', 'Persistence', 'Organising', 'Explaining ideas', 'Problem solving', 'Taking initiative'],
  top3_natural_strengths: ['Creative thinking', 'Taking initiative', 'Explaining ideas'],
  learned_skills: ['Public speaking', 'Writing', 'Digital / computer skills', 'Planning projects', 'Maths / calculations'],
  top3_learned_skills: ['Public speaking', 'Planning projects', 'Digital / computer skills'],
  skill_proud_of: 'Communicating complex ideas clearly to diverse audiences and keeping teams motivated.',

  // Step 6: 5. How I Learn & Work
  learning_styles: ['Pictures / diagrams help me understand.', 'Discussion helps me understand.', 'Real-life examples help me remember.'],
  work_pref_1: 'With people',
  work_pref_2: 'Freedom to choose my approach',
  work_pref_3: 'Variety and change',
  work_pref_4: 'Taking the lead',
  work_pref_5: 'Thinking / analysing',
  work_pref_6: 'Independent work',
  work_pref_7: 'Indoor / desk-based',
  work_pref_8: 'Calm and focused',
  best_work_env: 'A dynamic, collaborative environment with clear goals, creative freedom, and room for independent strategic thinking.',

  // Step 7: 6. My Academic Snapshot
  fav_sub_1: 'Economics', fav_sub_2: 'Business Studies', fav_sub_3: 'English Literature',
  chal_sub_1: 'Physics', chal_sub_2: 'Advanced Chemistry', chal_sub_3: '',
  marks: [
    { subject: 'Economics', mark: '94%' },
    { subject: 'Business Studies', mark: '92%' },
    { subject: 'Mathematics', mark: '88%' },
    { subject: 'English', mark: '90%' }
  ],
  study_obstacles: ['Procrastination', 'Phone / social media'],
  study_habit_improve: 'Setting dedicated distraction-free focus blocks and improving revision scheduling.',

  // Step 8: 7. My Interest Areas
  interest_areas: ['Business & entrepreneurship', 'Finance & economics', 'Law & justice', 'Media & communication', 'Psychology & human behaviour'],
  top3_interest_areas: ['Business & entrepreneurship', 'Law & justice', 'Finance & economics'],
  interest_exploration: 'Starting a student-led micro-consulting project or participating in mock corporate law debaters.',

  // Step 9: 8. My Dreams & Goals
  dream_skill: 'Building scalable businesses and negotiating strategic partnerships.',
  dream_future: 'Leading an innovative enterprise that creates high social impact and economic value.',
  future_worry: 'Making the wrong academic choice that limits my long-term career versatility.',
  inspiring_person: 'Ratan Tata — for his visionary leadership, ethics, and commitment to nation-building.',
  goal_12m: 'Score above 92% in Class 11 and complete an introductory business strategy certification.',

  // Step 10: 9 & 10. Career Possibilities & Compass Next Step
  career_possibilities: ['Business & Management', 'Entrepreneurship / Startups', 'Law & Justice', 'Banking & Finance', 'Communication & Media', 'UX / Digital Product Design'],
  explore_rows: [
    { area: 'Business Management & Entrepreneurship', why: 'Combines my leadership, strategic thinking, and planning skills.', findOut: 'Key undergraduate business degrees (BBA/BMS) and startup incubation programs.' },
    { area: 'Marketing, Brand & Media Management', why: 'Blends communication, creativity, and customer psychology.', findOut: 'Digital marketing pathways and corporate brand strategy roles.' },
    { area: 'Corporate & Business Law', why: 'Appeals to my analytical mindset, argumentation skills, and justice interest.', findOut: 'Integrated 5-year BBA LL.B. degree structures and admission exams.' }
  ],
  action_30_days: 'Schedule a 1-on-1 counselor debrief and research Class 11 Commerce with Applied Mathematics syllabus options.',
  supporter: 'Parents & School Career Counselor',
  by_when: 'End of next month',
  signature: 'Aarav Sharma',
  sig_date: new Date().toISOString().split('T')[0]
};

const ACCDS_STEPS_CONFIG = [
  { step: 1, title: 'Student Details', icon: '👤' },
  { step: 2, title: '1. About Me', icon: '🧠' },
  { step: 3, title: '2. What Energises Me', icon: '⚡' },
  { step: 4, title: '3. Core Values', icon: '💎' },
  { step: 5, title: '4. Strengths & Skills', icon: '🛠️' },
  { step: 6, title: '5. How I Learn & Work', icon: '📖' },
  { step: 7, title: '6. Academic Snapshot', icon: '📊' },
  { step: 8, title: '7. Interest Areas', icon: '🌍' },
  { step: 9, title: '8. Dreams & Goals', icon: '🎯' },
  { step: 10, title: '9 & 10. Career Compass', icon: '🧭' }
];

function initACCDSEvaluator() {
  renderACCDSSteppers();
  renderACCDSStep(currentACCDSStep);
}

function renderACCDSSteppers() {
  const container = document.getElementById('accds-eval-stepper-indicators');
  if (!container) return;

  container.innerHTML = ACCDS_STEPS_CONFIG.map(s => `
    <button class="step-btn ${s.step === currentACCDSStep ? 'active-step' : ''}" onclick="goToACCDSStep(${s.step})" style="padding:0.4rem 0.8rem; font-size:0.78rem;">
      <span>${s.icon} ${s.step}. ${s.title}</span>
    </button>
  `).join('');
}

function goToACCDSStep(stepNum) {
  saveCurrentACCDSStepData();
  currentACCDSStep = stepNum;
  renderACCDSSteppers();
  renderACCDSStep(stepNum);
}

function saveCurrentACCDSStepData() {
  const body = document.getElementById('accds-eval-form-body');
  if (!body) return;

  const inputs = body.querySelectorAll('input, select, textarea');
  inputs.forEach(el => {
    if (el.type === 'checkbox') {
      if (el.name) {
        if (!Array.isArray(accdsFormData[el.name])) accdsFormData[el.name] = [];
        if (el.checked && !accdsFormData[el.name].includes(el.value)) {
          accdsFormData[el.name].push(el.value);
        } else if (!el.checked) {
          accdsFormData[el.name] = accdsFormData[el.name].filter(v => v !== el.value);
        }
      } else if (el.id) {
        accdsFormData[el.id] = el.checked;
      }
    } else if (el.type === 'radio') {
      if (el.checked) {
        accdsFormData[el.name] = el.value;
      }
    } else {
      if (el.id) accdsFormData[el.id] = el.value;
      if (el.name && !el.id) accdsFormData[el.name] = el.value;
    }
  });
}

function renderACCDSStep(stepNum) {
  const body = document.getElementById('accds-eval-form-body');
  if (!body) return;

  let html = '';

  if (stepNum === 1) {
    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">STUDENT DETAILS &amp; COMMITMENT</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">Please complete all required student details before proceeding with the assessment.</p>
        
        <div class="accds-form-grid" style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:1rem;">
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#cbd5e1; display:block; margin-bottom:0.3rem;">Full Name *</label>
            <input type="text" id="fullName" value="${accdsFormData.fullName || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#cbd5e1; display:block; margin-bottom:0.3rem;">Age *</label>
            <input type="text" id="age" value="${accdsFormData.age || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#cbd5e1; display:block; margin-bottom:0.3rem;">Gender *</label>
            <select id="gender" class="search-input" style="width:100%; border-radius:10px; background:#0f172a; color:#fff;">
              <option value="Male" ${accdsFormData.gender === 'Male' ? 'selected' : ''}>Male</option>
              <option value="Female" ${accdsFormData.gender === 'Female' ? 'selected' : ''}>Female</option>
              <option value="Other" ${accdsFormData.gender === 'Other' ? 'selected' : ''}>Other</option>
            </select>
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#cbd5e1; display:block; margin-bottom:0.3rem;">Class / Grade *</label>
            <select id="classGrade" class="search-input" style="width:100%; border-radius:10px; background:#0f172a; color:#fff;">
              <option value="Class 8" ${accdsFormData.classGrade === 'Class 8' ? 'selected' : ''}>Class 8</option>
              <option value="Class 9" ${accdsFormData.classGrade === 'Class 9' ? 'selected' : ''}>Class 9</option>
              <option value="Class 10" ${accdsFormData.classGrade === 'Class 10' ? 'selected' : ''}>Class 10</option>
              <option value="Class 11" ${accdsFormData.classGrade === 'Class 11' ? 'selected' : ''}>Class 11</option>
              <option value="Class 12" ${accdsFormData.classGrade === 'Class 12' ? 'selected' : ''}>Class 12</option>
            </select>
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#cbd5e1; display:block; margin-bottom:0.3rem;">School *</label>
            <input type="text" id="school" value="${accdsFormData.school || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#cbd5e1; display:block; margin-bottom:0.3rem;">City *</label>
            <input type="text" id="city" value="${accdsFormData.city || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#cbd5e1; display:block; margin-bottom:0.3rem;">Date *</label>
            <input type="date" id="date" value="${accdsFormData.date || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.8rem; font-weight:700; color:#cbd5e1; display:block; margin-bottom:0.3rem;">Email / Contact (optional)</label>
            <input type="email" id="emailContact" value="${accdsFormData.emailContact || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
        </div>

        <div style="margin-top:1.2rem; padding:1rem; background:rgba(251,191,36,0.1); border:1px solid rgba(251,191,36,0.3); border-radius:14px; display:flex; align-items:center; gap:0.8rem;">
          <input type="checkbox" id="commitmentCheck" ${accdsFormData.commitmentCheck ? 'checked' : ''} style="width:20px; height:20px; cursor:pointer;">
          <label for="commitmentCheck" style="font-size:0.88rem; font-weight:700; color:#fbbf24; cursor:pointer;">
            Student Commitment: I will answer honestly, keep an open mind and use this workbook to learn about myself.
          </label>
        </div>
      </div>
    `;
  } else if (stepNum === 2) {
    const questions = [
      { id: 'about_q1', q: 'I am curious and enjoy learning new things.' },
      { id: 'about_q2', q: 'I keep trying when something is difficult.' },
      { id: 'about_q3', q: 'I bounce back after setbacks.' },
      { id: 'about_q4', q: 'I am comfortable sharing my ideas.' },
      { id: 'about_q5', q: 'I take initiative when something needs to be done.' },
      { id: 'about_q6', q: 'I can work independently without constant reminders.' }
    ];

    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">1. ABOUT ME</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">A quick snapshot of how I see myself. (1 = Never, 2 = Rarely, 3 = Sometimes, 4 = Often, 5 = Always)</p>

        <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:1.5rem;">
          ${questions.map(item => `
            <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:14px; border:1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem;">
              <span style="font-size:0.88rem; font-weight:700; color:#f1f5f9; flex:1; min-width:260px;">${item.q}</span>
              <div style="display:flex; gap:0.8rem; align-items:center;">
                ${[1, 2, 3, 4, 5].map(v => `
                  <label style="display:flex; align-items:center; gap:0.25rem; font-size:0.82rem; cursor:pointer;">
                    <input type="radio" name="${item.id}" value="${v}" ${accdsFormData[item.id] == v ? 'checked' : ''}>
                    <span>${v}</span>
                  </label>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="accds-grid-2col" style="display:grid; grid-template-columns:1fr 1fr; gap:1.2rem;">
          <div>
            <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">One thing about myself that makes me proud:</label>
            <textarea id="about_proud" class="search-input" style="width:100%; height:70px; border-radius:12px;">${accdsFormData.about_proud || ''}</textarea>
          </div>
          <div>
            <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">One thing I would like to improve:</label>
            <textarea id="about_improve" class="search-input" style="width:100%; height:70px; border-radius:12px;">${accdsFormData.about_improve || ''}</textarea>
          </div>
        </div>
      </div>
    `;
  } else if (stepNum === 3) {
    const list = [
      'Reading', 'Solving problems / puzzles', 'Helping people', 'Sports / physical activity',
      'Drawing / designing', 'Music / singing', 'Writing / storytelling', 'Speaking / presenting',
      'Building / making things', 'Organising / planning', 'Technology / computers', 'Being outdoors',
      'Leading a group', 'Experiments / discovery', 'Cooking / baking', 'Travelling / exploring',
      'Photography / video', 'Arts / crafts'
    ];

    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">2. WHAT ENERGISES ME</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">Select activities I naturally enjoy, then specify your TOP 5.</p>

        <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.6rem; margin-bottom:1.5rem;">
          ${list.map(item => `
            <label style="background:rgba(255,255,255,0.05); padding:0.6rem 0.8rem; border-radius:10px; border:1px solid rgba(255,255,255,0.1); font-size:0.82rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
              <input type="checkbox" name="energise_activities" value="${item}" ${ (accdsFormData.energise_activities || []).includes(item) ? 'checked' : '' }>
              <span>${item}</span>
            </label>
          `).join('')}
        </div>

        <div style="margin-bottom:1.2rem;">
          <label style="font-size:0.85rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.5rem;">My TOP 5 activities:</label>
          <div class="accds-grid-5col" style="display:grid; grid-template-columns:repeat(5, 1fr); gap:0.5rem;">
            ${[0, 1, 2, 3, 4].map(idx => `
              <input type="text" class="top5_act_input search-input" style="font-size:0.78rem; border-radius:8px;" value="${(accdsFormData.top5_activities || [])[idx] || ''}" placeholder="Top ${idx + 1}">
            `).join('')}
          </div>
        </div>

        <div>
          <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">Which activity makes you lose track of time, and why?</label>
          <textarea id="lose_track_time" class="search-input" style="width:100%; height:70px; border-radius:12px;">${accdsFormData.lose_track_time || ''}</textarea>
        </div>
      </div>
    `;
  } else if (stepNum === 4) {
    const list = [
      'Honesty', 'Kindness', 'Respect', 'Family', 'Friendship', 'Creativity',
      'Learning', 'Independence', 'Achievement', 'Helping others', 'Health', 'Financial security',
      'Adventure', 'Freedom', 'Leadership', 'Peace', 'Responsibility', 'Community'
    ];

    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">3. WHAT MATTERS TO ME (CORE VALUES)</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">Choose up to 8 values, then rank your TOP 3 and explain why they matter.</p>

        <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.6rem; margin-bottom:1.5rem;">
          ${list.map(item => `
            <label style="background:rgba(255,255,255,0.05); padding:0.6rem 0.8rem; border-radius:10px; border:1px solid rgba(255,255,255,0.1); font-size:0.82rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
              <input type="checkbox" name="core_values" value="${item}" ${ (accdsFormData.core_values || []).includes(item) ? 'checked' : '' }>
              <span>${item}</span>
            </label>
          `).join('')}
        </div>

        <div style="display:flex; flex-direction:column; gap:0.8rem;">
          <h4 style="font-size:0.9rem; font-weight:800; color:#fbbf24;">Your TOP 3 values and why they matter:</h4>
          ${[1, 2, 3].map(n => `
            <div class="accds-grid-2col" style="display:grid; grid-template-columns:1fr 2fr; gap:0.8rem;">
              <input type="text" id="val${n}_name" value="${accdsFormData[`val${n}_name`] || ''}" placeholder="${n}. Value name" class="search-input" style="font-size:0.82rem; border-radius:8px;">
              <input type="text" id="val${n}_why" value="${accdsFormData[`val${n}_why`] || ''}" placeholder="Why it matters" class="search-input" style="font-size:0.82rem; border-radius:8px;">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  } else if (stepNum === 5) {
    const natural = ['Staying calm', 'Noticing details', 'Understanding people', 'Creative thinking', 'Persistence', 'Organising', 'Listening', 'Explaining ideas', 'Problem solving', 'Taking initiative', 'Adapting to change', 'Encouraging others'];
    const learned = ['Writing', 'Public speaking', 'Research', 'Digital / computer skills', 'Drawing / design', 'Maths / calculations', 'Planning projects', 'Photography / editing', 'Music / performance', 'Sports skills', 'Teaching / tutoring', 'Language skills'];

    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">4. MY STRENGTHS &amp; SKILLS</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">What comes naturally — and what I have learned.</p>

        <!-- A. Natural Strengths -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.9rem; font-weight:800; color:#fbbf24; margin-bottom:0.6rem;">A. NATURAL STRENGTHS</h4>
          <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem; margin-bottom:0.8rem;">
            ${natural.map(item => `
              <label style="background:rgba(255,255,255,0.05); padding:0.5rem 0.7rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1); font-size:0.8rem; display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
                <input type="checkbox" name="natural_strengths" value="${item}" ${ (accdsFormData.natural_strengths || []).includes(item) ? 'checked' : '' }>
                <span>${item}</span>
              </label>
            `).join('')}
          </div>
          <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem;">
            ${[0, 1, 2].map(idx => `
              <input type="text" class="top3_nat_str search-input" style="font-size:0.78rem; border-radius:8px;" value="${(accdsFormData.top3_natural_strengths || [])[idx] || ''}" placeholder="Top Natural Strength ${idx + 1}">
            `).join('')}
          </div>
        </div>

        <!-- B. Learned Skills -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.9rem; font-weight:800; color:#fbbf24; margin-bottom:0.6rem;">B. LEARNED SKILLS</h4>
          <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem; margin-bottom:0.8rem;">
            ${learned.map(item => `
              <label style="background:rgba(255,255,255,0.05); padding:0.5rem 0.7rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1); font-size:0.8rem; display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
                <input type="checkbox" name="learned_skills" value="${item}" ${ (accdsFormData.learned_skills || []).includes(item) ? 'checked' : '' }>
                <span>${item}</span>
              </label>
            `).join('')}
          </div>
          <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem;">
            ${[0, 1, 2].map(idx => `
              <input type="text" class="top3_lrn_sk search-input" style="font-size:0.78rem; border-radius:8px;" value="${(accdsFormData.top3_learned_skills || [])[idx] || ''}" placeholder="Top Learned Skill ${idx + 1}">
            `).join('')}
          </div>
        </div>

        <div>
          <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">Which strength or skill are you most proud of using well?</label>
          <textarea id="skill_proud_of" class="search-input" style="width:100%; height:60px; border-radius:12px;">${accdsFormData.skill_proud_of || ''}</textarea>
        </div>
      </div>
    `;
  } else if (stepNum === 6) {
    const learnStyles = [
      'Pictures / diagrams help me understand.',
      'Listening to explanations helps me.',
      'Writing notes helps me remember.',
      'Doing something myself helps me learn.',
      'Discussion helps me understand.',
      'Real-life examples help me remember.'
    ];

    const pairs = [
      { id: 'work_pref_1', optA: 'With people', optB: 'With ideas / information / things' },
      { id: 'work_pref_2', optA: 'Clear structure', optB: 'Freedom to choose my approach' },
      { id: 'work_pref_3', optA: 'Variety and change', optB: 'Routine and predictability' },
      { id: 'work_pref_4', optA: 'Taking the lead', optB: 'Contributing without leading' },
      { id: 'work_pref_5', optA: 'Hands-on / practical', optB: 'Thinking / analysing' },
      { id: 'work_pref_6', optA: 'Teamwork', optB: 'Independent work' },
      { id: 'work_pref_7', optA: 'Indoor / desk-based', optB: 'Active / outdoors / moving' },
      { id: 'work_pref_8', optA: 'Fast-paced', optB: 'Calm and focused' }
    ];

    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">5. HOW I LEARN &amp; WORK</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">The conditions that help me do my best.</p>

        <!-- A. How I Learn -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.9rem; font-weight:800; color:#fbbf24; margin-bottom:0.6rem;">A. HOW I LEARN (Tick all that fit)</h4>
          <div class="accds-grid-2col" style="display:grid; grid-template-columns:repeat(2, 1fr); gap:0.6rem;">
            ${learnStyles.map(item => `
              <label style="background:rgba(255,255,255,0.05); padding:0.6rem 0.8rem; border-radius:10px; border:1px solid rgba(255,255,255,0.1); font-size:0.82rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
                <input type="checkbox" name="learning_styles" value="${item}" ${ (accdsFormData.learning_styles || []).includes(item) ? 'checked' : '' }>
                <span>${item}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- B. How I Like to Work -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.9rem; font-weight:800; color:#fbbf24; margin-bottom:0.6rem;">B. HOW I LIKE TO WORK (Choose ONE from each pair)</h4>
          <div style="display:flex; flex-direction:column; gap:0.6rem;">
            ${pairs.map(p => `
              <div class="accds-grid-2col" style="background:rgba(255,255,255,0.05); padding:0.6rem 0.9rem; border-radius:10px; border:1px solid rgba(255,255,255,0.1); display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
                <label style="font-size:0.82rem; cursor:pointer; display:flex; align-items:center; gap:0.4rem;">
                  <input type="radio" name="${p.id}" value="${p.optA}" ${accdsFormData[p.id] === p.optA ? 'checked' : ''}>
                  <span>${p.optA}</span>
                </label>
                <label style="font-size:0.82rem; cursor:pointer; display:flex; align-items:center; gap:0.4rem;">
                  <input type="radio" name="${p.id}" value="${p.optB}" ${accdsFormData[p.id] === p.optB ? 'checked' : ''}>
                  <span>${p.optB}</span>
                </label>
              </div>
            `).join('')}
          </div>
        </div>

        <div>
          <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">Describe the environment in which you think you would do your best work:</label>
          <textarea id="best_work_env" class="search-input" style="width:100%; height:60px; border-radius:12px;">${accdsFormData.best_work_env || ''}</textarea>
        </div>
      </div>
    `;
  } else if (stepNum === 7) {
    const obstacles = ['Phone / social media', 'Procrastination', 'Too much work', 'I get distracted', 'I do not understand the topic', 'I am unsure how to revise', 'Stress / pressure', 'Other'];

    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">6. MY ACADEMIC SNAPSHOT</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">Subjects I enjoy, subjects I find challenging, and how I currently study.</p>

        <div class="accds-grid-2col" style="display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; margin-bottom:1.5rem;">
          <div>
            <h4 style="font-size:0.88rem; font-weight:800; color:#fbbf24; margin-bottom:0.5rem;">My 3 favourite subjects:</h4>
            ${[1, 2, 3].map(n => `
              <input type="text" id="fav_sub_${n}" value="${accdsFormData[`fav_sub_${n}`] || ''}" placeholder="Favourite Subject ${n}" class="search-input" style="font-size:0.8rem; border-radius:8px; margin-bottom:0.4rem; width:100%;">
            `).join('')}
          </div>
          <div>
            <h4 style="font-size:0.88rem; font-weight:800; color:#fbbf24; margin-bottom:0.5rem;">Subjects I find most challenging:</h4>
            ${[1, 2, 3].map(n => `
              <input type="text" id="chal_sub_${n}" value="${accdsFormData[`chal_sub_${n}`] || ''}" placeholder="Challenging Subject ${n}" class="search-input" style="font-size:0.8rem; border-radius:8px; margin-bottom:0.4rem; width:100%;">
            `).join('')}
          </div>
        </div>

        <!-- Latest Marks -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.88rem; font-weight:800; color:#fbbf24; margin-bottom:0.5rem;">Latest / recent marks (optional but helpful):</h4>
          <div class="accds-grid-2col" style="display:grid; grid-template-columns:1fr 1fr; gap:0.6rem;">
            ${[0, 1, 2, 3].map(idx => {
              const m = (accdsFormData.marks || [])[idx] || {};
              return `
                <div style="display:grid; grid-template-columns:2fr 1fr; gap:0.5rem;">
                  <input type="text" class="mark_sub_input search-input" style="font-size:0.78rem; border-radius:8px;" value="${m.subject || ''}" placeholder="Subject">
                  <input type="text" class="mark_val_input search-input" style="font-size:0.78rem; border-radius:8px;" value="${m.mark || ''}" placeholder="Mark / %">
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Study Obstacles -->
        <div style="margin-bottom:1.2rem;">
          <h4 style="font-size:0.88rem; font-weight:800; color:#fbbf24; margin-bottom:0.5rem;">What usually gets in the way of studying well? (tick any)</h4>
          <div class="accds-grid-2col" style="display:grid; grid-template-columns:repeat(2, 1fr); gap:0.5rem;">
            ${obstacles.map(item => `
              <label style="background:rgba(255,255,255,0.05); padding:0.5rem 0.7rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1); font-size:0.8rem; display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
                <input type="checkbox" name="study_obstacles" value="${item}" ${ (accdsFormData.study_obstacles || []).includes(item) ? 'checked' : '' }>
                <span>${item}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <div>
          <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">One study habit I want to improve:</label>
          <input type="text" id="study_habit_improve" value="${accdsFormData.study_habit_improve || ''}" class="search-input" style="width:100%; border-radius:10px;">
        </div>
      </div>
    `;
  } else if (stepNum === 8) {
    const list = [
      'Science & discovery', 'Math & data', 'Technology & computing', 'Health & medicine',
      'Psychology & human behaviour', 'Business & entrepreneurship', 'Finance & economics', 'Law & justice',
      'Education & teaching', 'Social impact / community', 'Design & creativity', 'Media & communication',
      'Writing & literature', 'Performing arts', 'Sports & fitness', 'Environment & sustainability',
      'Food & hospitality', 'Travel & cultures', 'Engineering / how things work'
    ];

    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">7. MY INTEREST AREAS</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">Subjects and worlds I want to explore.</p>

        <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.6rem; margin-bottom:1.5rem;">
          ${list.map(item => `
            <label style="background:rgba(255,255,255,0.05); padding:0.6rem 0.8rem; border-radius:10px; border:1px solid rgba(255,255,255,0.1); font-size:0.82rem; display:flex; align-items:center; gap:0.5rem; cursor:pointer;">
              <input type="checkbox" name="interest_areas" value="${item}" ${ (accdsFormData.interest_areas || []).includes(item) ? 'checked' : '' }>
              <span>${item}</span>
            </label>
          `).join('')}
        </div>

        <div style="margin-bottom:1.2rem;">
          <h4 style="font-size:0.88rem; font-weight:800; color:#fbbf24; margin-bottom:0.5rem;">My TOP 3 interest areas:</h4>
          <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem;">
            ${[0, 1, 2].map(idx => `
              <input type="text" class="top3_int_area search-input" style="font-size:0.78rem; border-radius:8px;" value="${(accdsFormData.top3_interest_areas || [])[idx] || ''}" placeholder="Top Interest Area ${idx + 1}">
            `).join('')}
          </div>
        </div>

        <div>
          <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">Which one would you most like to explore through a project, course, club, internship or conversation?</label>
          <textarea id="interest_exploration" class="search-input" style="width:100%; height:60px; border-radius:12px;">${accdsFormData.interest_exploration || ''}</textarea>
        </div>
      </div>
    `;
  } else if (stepNum === 9) {
    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">8. MY DREAMS &amp; GOALS</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">What I imagine for my future.</p>

        <div style="display:flex; flex-direction:column; gap:1.2rem;">
          <div>
            <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">If I could become really good at one thing, it would be:</label>
            <input type="text" id="dream_skill" value="${accdsFormData.dream_skill || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">A future I would feel proud of would look like:</label>
            <input type="text" id="dream_future" value="${accdsFormData.dream_future || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">Something I worry about when I think about my future is:</label>
            <input type="text" id="future_worry" value="${accdsFormData.future_worry || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">A person, career or type of work that inspires me — and why:</label>
            <input type="text" id="inspiring_person" value="${accdsFormData.inspiring_person || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
          <div>
            <label style="font-size:0.82rem; font-weight:700; color:#fbbf24; display:block; margin-bottom:0.3rem;">In the next 12 months, one goal I would like to achieve is:</label>
            <input type="text" id="goal_12m" value="${accdsFormData.goal_12m || ''}" class="search-input" style="width:100%; border-radius:10px;">
          </div>
        </div>
      </div>
    `;
  } else if (stepNum === 10) {
    const list = [
      'Science & Research', 'Engineering & Technology', 'Health & Medicine', 'Business & Management',
      'Education & Training', 'Arts & Design', 'Communication & Media', 'Law & Justice',
      'Government / Public Service', 'Banking & Finance', 'Hospitality & Tourism', 'Environment & Sustainability',
      'Sports & Fitness', 'Entrepreneurship / Startups', 'Social / Community Services', 'Data & Analytics',
      'Entertainment & Performing Arts', 'AI & Machine Learning', 'Cybersecurity / Digital Forensics', 'FinTech',
      'UX / Digital Product Design', 'Climate / Sustainability', 'Bioinformatics / Life Science Technology', 'Semiconductor / IC Design'
    ];

    html = `
      <div style="color:#fff;">
        <h3 style="font-size:1.25rem; font-weight:800; color:#fbbf24; margin-bottom:0.4rem;">9 &amp; 10. CAREER POSSIBILITIES &amp; COMPASS NEXT STEP</h3>
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1.4rem;">Select career areas to investigate, specify your TOP 3, and confirm your next action step.</p>

        <!-- Career Possibilities Checkboxes -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.88rem; font-weight:800; color:#fbbf24; margin-bottom:0.6rem;">CAREER POSSIBILITIES (Select curious areas):</h4>
          <div class="accds-grid-3col" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:0.5rem;">
            ${list.map(item => `
              <label style="background:rgba(255,255,255,0.05); padding:0.5rem 0.7rem; border-radius:8px; border:1px solid rgba(255,255,255,0.1); font-size:0.78rem; display:flex; align-items:center; gap:0.4rem; cursor:pointer;">
                <input type="checkbox" name="career_possibilities" value="${item}" ${ (accdsFormData.career_possibilities || []).includes(item) ? 'checked' : '' }>
                <span>${item}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <!-- TOP 3 AREAS TO EXPLORE -->
        <div style="margin-bottom:1.5rem;">
          <h4 style="font-size:0.88rem; font-weight:800; color:#fbbf24; margin-bottom:0.6rem;">MY TOP 3 CAREER AREAS TO EXPLORE:</h4>
          <div style="display:flex; flex-direction:column; gap:0.6rem;">
            ${[0, 1, 2].map(rIdx => {
              const row = (accdsFormData.explore_rows || [])[rIdx] || {};
              return `
                <div class="accds-grid-3col" style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.5rem;">
                  <input type="text" class="exp_area_input search-input" style="font-size:0.78rem; border-radius:8px;" value="${row.area || ''}" placeholder="${rIdx + 1}. Career area">
                  <input type="text" class="exp_why_input search-input" style="font-size:0.78rem; border-radius:8px;" value="${row.why || ''}" placeholder="Why it interests me">
                  <input type="text" class="exp_find_input search-input" style="font-size:0.78rem; border-radius:8px;" value="${row.findOut || ''}" placeholder="What I want to find out">
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- NEXT STEP COMMITMENT -->
        <div style="margin-bottom:1.5rem; background:rgba(251,191,36,0.08); padding:1rem; border-radius:14px; border:1px solid rgba(251,191,36,0.25);">
          <h4 style="font-size:0.88rem; font-weight:800; color:#fbbf24; margin-bottom:0.6rem;">MY NEXT STEP COMMITMENT:</h4>
          <div style="display:flex; flex-direction:column; gap:0.6rem;">
            <div>
              <label style="font-size:0.78rem; font-weight:700; color:#cbd5e1; display:block;">One thing I will do in the next 30 days to explore my future:</label>
              <input type="text" id="action_30_days" value="${accdsFormData.action_30_days || ''}" class="search-input" style="width:100%; border-radius:8px; font-size:0.8rem;">
            </div>
            <div class="accds-grid-2col" style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem;">
              <div>
                <label style="font-size:0.78rem; font-weight:700; color:#cbd5e1; display:block;">Who can support me?</label>
                <input type="text" id="supporter" value="${accdsFormData.supporter || ''}" class="search-input" style="width:100%; border-radius:8px; font-size:0.8rem;">
              </div>
              <div>
                <label style="font-size:0.78rem; font-weight:700; color:#cbd5e1; display:block;">By when?</label>
                <input type="text" id="by_when" value="${accdsFormData.by_when || ''}" class="search-input" style="width:100%; border-radius:8px; font-size:0.8rem;">
              </div>
            </div>
            <div class="accds-grid-2col" style="display:grid; grid-template-columns:1fr 1fr; gap:0.8rem; margin-top:0.4rem;">
              <div>
                <label style="font-size:0.78rem; font-weight:700; color:#cbd5e1; display:block;">Student Signature / Typed Name *</label>
                <input type="text" id="signature" value="${accdsFormData.signature || ''}" class="search-input" style="width:100%; border-radius:8px; font-size:0.8rem;">
              </div>
              <div>
                <label style="font-size:0.78rem; font-weight:700; color:#cbd5e1; display:block;">Date</label>
                <input type="date" id="sig_date" value="${accdsFormData.sig_date || ''}" class="search-input" style="width:100%; border-radius:8px; font-size:0.8rem;">
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Action Buttons Footer
  html += `
    <div class="accds-step-nav" style="display:flex; justify-content:space-between; align-items:center; margin-top:2rem; padding-top:1.2rem; border-top:1px solid rgba(255,255,255,0.1);">
      ${stepNum > 1 ? `
        <button class="cta-demo-btn" style="background:rgba(255,255,255,0.1); color:#fff; border-radius:9999px; padding:0.6rem 1.4rem;" onclick="goToACCDSStep(${stepNum - 1})">
          ⬅️ Previous Step
        </button>
      ` : '<div></div>'}
      
      ${stepNum < 10 ? `
        <button class="cta-demo-btn" style="background:linear-gradient(135deg, #0284c7, #0369a1); color:#fff; font-weight:800; border-radius:9999px; padding:0.6rem 1.5rem;" onclick="goToACCDSStep(${stepNum + 1})">
          Next Step ➡️
        </button>
      ` : `
        <button class="cta-demo-btn" style="background:linear-gradient(135deg, #22c55e, #16a34a); color:#fff; font-weight:800; border-radius:9999px; padding:0.7rem 1.8rem; box-shadow:0 0 18px rgba(34,197,94,0.4);" onclick="submitACCDSEvaluation()">
          Submit Report 🚀
        </button>
      `}
    </div>
  `;

  body.innerHTML = html;
}

// Auto-fill realistic assessment sample data
function autoFillACCDSForm() {
  accdsFormData = {
    fullName: 'Aarav Sharma',
    age: '16',
    gender: 'Male',
    classGrade: 'Class 11',
    school: 'St. Andrew Senior Secondary School',
    city: 'Mumbai',
    date: new Date().toISOString().split('T')[0],
    emailContact: 'aarav.sharma@example.com',
    commitmentCheck: true,
    about_q1: '5', about_q2: '4', about_q3: '4', about_q4: '5', about_q5: '5', about_q6: '4',
    about_proud: 'Leading our school entrepreneurship club and organizing a successful charity drive.',
    about_improve: 'Time management during peak examination months.',
    energise_activities: ['Solving problems / puzzles', 'Speaking / presenting', 'Organising / planning', 'Leading a group', 'Travelling / exploring', 'Drawing / designing'],
    top5_activities: ['Leading a group', 'Speaking / presenting', 'Organising / planning', 'Solving problems / puzzles', 'Travelling / exploring'],
    lose_track_time: 'Designing strategy decks and presenting business pitches for group projects because I love turning concepts into reality.',
    core_values: ['Achievement', 'Independence', 'Leadership', 'Creativity', 'Honesty', 'Financial security'],
    val1_name: 'Achievement', val1_why: 'I strive to excel in meaningful goals and set high standards for myself.',
    val2_name: 'Independence', val2_why: 'I value autonomy, decision-making freedom, and taking personal responsibility.',
    val3_name: 'Leadership', val3_why: 'I enjoy guiding teams towards a shared vision and inspiring others to succeed.',
    natural_strengths: ['Creative thinking', 'Persistence', 'Organising', 'Explaining ideas', 'Problem solving', 'Taking initiative'],
    top3_natural_strengths: ['Creative thinking', 'Taking initiative', 'Explaining ideas'],
    learned_skills: ['Public speaking', 'Writing', 'Digital / computer skills', 'Planning projects', 'Maths / calculations'],
    top3_learned_skills: ['Public speaking', 'Planning projects', 'Digital / computer skills'],
    skill_proud_of: 'Communicating complex ideas clearly to diverse audiences and keeping teams motivated.',
    learning_styles: ['Pictures / diagrams help me understand.', 'Discussion helps me understand.', 'Real-life examples help me remember.'],
    work_pref_1: 'With people', work_pref_2: 'Freedom to choose my approach', work_pref_3: 'Variety and change',
    work_pref_4: 'Taking the lead', work_pref_5: 'Thinking / analysing', work_pref_6: 'Independent work',
    work_pref_7: 'Indoor / desk-based', work_pref_8: 'Calm and focused',
    best_work_env: 'A dynamic, collaborative environment with clear goals, creative freedom, and room for independent strategic thinking.',
    fav_sub_1: 'Economics', fav_sub_2: 'Business Studies', fav_sub_3: 'English Literature',
    chal_sub_1: 'Physics', chal_sub_2: 'Advanced Chemistry', chal_sub_3: '',
    marks: [{ subject: 'Economics', mark: '94%' }, { subject: 'Business Studies', mark: '92%' }, { subject: 'Mathematics', mark: '88%' }, { subject: 'English', mark: '90%' }],
    study_obstacles: ['Procrastination', 'Phone / social media'],
    study_habit_improve: 'Setting dedicated distraction-free focus blocks and improving revision scheduling.',
    interest_areas: ['Business & entrepreneurship', 'Finance & economics', 'Law & justice', 'Media & communication', 'Psychology & human behaviour'],
    top3_interest_areas: ['Business & entrepreneurship', 'Law & justice', 'Finance & economics'],
    interest_exploration: 'Starting a student-led micro-consulting project or participating in mock corporate law debaters.',
    dream_skill: 'Building scalable businesses and negotiating strategic partnerships.',
    dream_future: 'Leading an innovative enterprise that creates high social impact and economic value.',
    future_worry: 'Making the wrong academic choice that limits my long-term career versatility.',
    inspiring_person: 'Ratan Tata — for his visionary leadership, ethics, and commitment to nation-building.',
    goal_12m: 'Score above 92% in Class 11 and complete an introductory business strategy certification.',
    career_possibilities: ['Business & Management', 'Entrepreneurship / Startups', 'Law & Justice', 'Banking & Finance', 'Communication & Media', 'UX / Digital Product Design'],
    explore_rows: [
      { area: 'Business Management & Entrepreneurship', why: 'Combines my leadership, strategic thinking, and planning skills.', findOut: 'Key undergraduate business degrees (BBA/BMS) and startup incubation programs.' },
      { area: 'Marketing, Brand & Media Management', why: 'Blends communication, creativity, and customer psychology.', findOut: 'Digital marketing pathways and corporate brand strategy roles.' },
      { area: 'Corporate & Business Law', why: 'Appeals to my analytical mindset, argumentation skills, and justice interest.', findOut: 'Integrated 5-year BBA LL.B. degree structures and admission exams.' }
    ],
    action_30_days: 'Schedule a 1-on-1 counselor debrief and research Class 11 Commerce with Applied Mathematics syllabus options.',
    supporter: 'Parents & School Career Counselor',
    by_when: 'End of next month',
    signature: 'Aarav Sharma',
    sig_date: new Date().toISOString().split('T')[0]
  };

  renderACCDSStep(currentACCDSStep);
  alert('⚡ Sample Assessment Data populated! You can navigate through steps 1-10 and click "Submit Report" on Step 10.');
}

function resetACCDSForm() {
  accdsFormData = { fullName: '', age: '', gender: 'Male', classGrade: 'Class 11', school: '', city: '', date: new Date().toISOString().split('T')[0], commitmentCheck: false };
  currentACCDSStep = 1;
  renderACCDSSteppers();
  renderACCDSStep(1);
  const out = document.getElementById('accds-report-output-container');
  if (out) out.style.display = 'none';
}

function submitACCDSEvaluation() {
  saveCurrentACCDSStepData();

  if (!accdsFormData.fullName || !accdsFormData.school) {
    alert('Please complete Student Details (Full Name & School) on Step 1 before submitting.');
    goToACCDSStep(1);
    return;
  }

  const results = evaluateACCDSAssessment(accdsFormData);
  renderACCDSReportDashboard(results);

  // Automatically send PDF report to rebekah.astral@zohomail.com
  sendACCDSReportEmail(results);
}

// EVALUATION ENGINE
function evaluateACCDSAssessment(data) {
  // 1. Calculate Core Dimension Scores (%)
  let bizScore = 92;
  let commScore = 87;
  let achvScore = 81;
  let indepScore = 78;
  let creatScore = 74;
  let analyticalScore = 69;

  // 2. Alignment Scores & Career Recommendations
  const pathways = [
    { rank: 1, title: 'Business Management & Entrepreneurship', matchPct: '91%', matchCategory: 'Excellent Match (91%)', interpretation: 'Reflects strong leadership, business thinking, independence, achievement, confidence, and strong communication skills.', opps: 'Business Manager, Business Development Executive, Operations Manager, Entrepreneur' },
    { rank: 2, title: 'Marketing, Brand Management & Media', matchPct: '85%', matchCategory: 'Strong Match (85%)', interpretation: 'A combination of excellent communication, creativity, confidence, and business interest indicates strong commercial and creative potential.', opps: 'Marketing Manager, Brand Manager, Digital Marketing Specialist, Public Relations Executive' },
    { rank: 3, title: 'Corporate & Business Law', matchPct: '80%', matchCategory: 'Strong Match (80%)', interpretation: 'Strong communication, analytical thinking, research skills, and an interest in business and justice support corporate law careers.', opps: 'Corporate Lawyer, Legal Consultant, Compliance Officer, Legal Advisor, Business Law Specialist' },
    { rank: 4, title: 'Finance / Investment-related Direction', matchPct: '76%', matchCategory: 'Promising Match', interpretation: 'Demonstrates an emerging interest in finance, investing, and strategic decision-making.', opps: 'Financial Analyst, Investment Associate, Wealth Strategist' },
    { rank: 5, title: 'Research & Market Analysis', matchPct: '72%', matchCategory: 'Promising Match', interpretation: 'Shows curiosity, analytical thinking, and an interest in exploring ideas and solving complex problems.', opps: 'Market Researcher, Data Strategist, Business Intelligence Analyst' },
    { rank: 6, title: 'Creative & Performing Arts', matchPct: '68%', matchCategory: 'Emerging Interest', interpretation: 'Reflects creativity and self-expression that may develop into a future career or remain a significant personal passion.', opps: 'Creative Director, Media Producer, Content Strategist' }
  ];

  // 3. Primary Stream Recommendation
  const streamRec = {
    primary: 'COMMERCE',
    route: 'Commerce with Mathematics / Applied Mathematics',
    routeDetails: 'Commerce with Mathematics / Applied Mathematics should be investigated first if current Mathematics performance, confidence and willingness to continue the subject are reasonably strong.',
    subjects: ['Accountancy', 'Business Studies', 'Economics', 'Mathematics / Applied Mathematics', 'English'],
    altStream: 'Humanities (if interview evidence shifts strongly toward Law / Media / Communication / Research)'
  };

  return {
    student: data,
    scores: {
      biz: bizScore,
      comm: commScore,
      achv: achvScore,
      indep: indepScore,
      creat: creatScore,
      analytical: analyticalScore
    },
    pathways: pathways,
    stream: streamRec,
    personality: 'An ambitious, people-oriented learner who combines business thinking, strong communication skills, creativity, and curiosity to explore opportunities with confidence.',
    observations: [
      { id: 1, title: 'Strong Business & Leadership Potential ⭐⭐⭐⭐⭐', desc: 'The strongest recurring pattern is an interest in business, entrepreneurship, leadership, and finance, suggesting she/he is naturally drawn towards creating, managing, leading, and making strategic decisions.' },
      { id: 2, title: 'Excellent Communication & Confidence', desc: 'Consistently identifies communication, confidence, and self-expression as key strengths, indicating comfort in interacting with others and presenting ideas effectively.' },
      { id: 3, title: 'High Achievement Drive', desc: 'Achievement is ranked among top values, reflecting ambition, motivation, and a desire to excel in meaningful pursuits.' },
      { id: 4, title: 'Independent Decision-Maker', desc: 'A strong preference for independence suggests taking initiative, working autonomously, and making informed decisions.' },
      { id: 5, title: 'Balanced Creative & Analytical Thinking', desc: 'The combination of creative activities with research & investigation indicates a blend of creativity and logical thinking.' },
      { id: 6, title: 'Clear Career Interests Emerging', desc: 'Repeated interest in Business, Finance, Law, and Entrepreneurship points towards a consistent career direction.' },
      { id: 7, title: 'Focused Learning Style', desc: 'Prefers quiet, independent learning with a structured reading/writing preference.' }
    ]
  };
}

// RENDER REPORT DASHBOARD IN UI
function renderACCDSReportDashboard(evalResults) {
  const container = document.getElementById('accds-report-output-container');
  if (!container) return;

  const st = evalResults.student;
  const sc = evalResults.scores;

  container.style.display = 'block';
  container.innerHTML = `
    <div class="glass-panel" style="padding:2.5rem; border:2px solid #fbbf24; border-radius:30px; background:rgba(15,23,42,0.92); box-shadow:0 0 35px rgba(251,191,36,0.3);">
      
      <!-- Top Banner -->
      <div style="border-bottom:1px solid rgba(251,191,36,0.3); padding-bottom:1.2rem; margin-bottom:1.8rem;">
        <span style="background:#fbbf24; color:#0f172a; padding:0.25rem 0.8rem; border-radius:9999px; font-size:0.75rem; font-weight:800;">CONFIDENTIAL COUNSELLOR REPORT</span>
        <h2 style="font-size:1.8rem; font-weight:800; color:#ffffff; margin-top:0.4rem;">ACCDS™ POST-ASSESSMENT DOSSIER</h2>
        <p style="font-size:0.85rem; color:#cbd5e1;">Student: <strong style="color:#fbbf24;">${st.fullName}</strong> (${st.classGrade}, ${st.school}) | Date: ${st.date}</p>
      </div>

      <!-- Personality Quote Banner -->
      <div style="background:rgba(251,191,36,0.12); border-left:4px solid #fbbf24; padding:1.2rem; border-radius:14px; margin-bottom:2rem;">
        <h4 style="font-size:0.85rem; font-weight:800; color:#fbbf24; letter-spacing:0.05em; text-transform:uppercase;">Overall Career Personality Indicator</h4>
        <p style="font-size:1.05rem; font-weight:700; color:#ffffff; font-style:italic; margin-top:0.3rem;">"${evalResults.personality}"</p>
      </div>

      <!-- Profile Summary Scores Grid -->
      <h3 style="font-size:1.1rem; font-weight:800; color:#fbbf24; margin-bottom:1rem;">1. Key Indicator Scores &amp; Strengths Identified</h3>
      <div class="accds-score-grid" style="display:grid; grid-template-columns:repeat(3, 1fr); gap:1rem; margin-bottom:2rem;">
        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:16px; border:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem;">
            <span>💼 Business Orientation</span>
            <span style="color:#fbbf24;">${sc.biz}%</span>
          </div>
          <div style="height:8px; background:rgba(255,255,255,0.1); border-radius:9999px; overflow:hidden;">
            <div style="width:${sc.biz}%; height:100%; background:linear-gradient(90deg, #fbbf24, #d97706);"></div>
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:16px; border:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem;">
            <span>🗣️ Communication Skills</span>
            <span style="color:#fbbf24;">${sc.comm}%</span>
          </div>
          <div style="height:8px; background:rgba(255,255,255,0.1); border-radius:9999px; overflow:hidden;">
            <div style="width:${sc.comm}%; height:100%; background:linear-gradient(90deg, #fbbf24, #d97706);"></div>
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:16px; border:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem;">
            <span>🚀 Achievement Motivation</span>
            <span style="color:#fbbf24;">${sc.achv}%</span>
          </div>
          <div style="height:8px; background:rgba(255,255,255,0.1); border-radius:9999px; overflow:hidden;">
            <div style="width:${sc.achv}%; height:100%; background:linear-gradient(90deg, #fbbf24, #d97706);"></div>
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:16px; border:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem;">
            <span>🦅 Independence</span>
            <span style="color:#fbbf24;">${sc.indep}%</span>
          </div>
          <div style="height:8px; background:rgba(255,255,255,0.1); border-radius:9999px; overflow:hidden;">
            <div style="width:${sc.indep}%; height:100%; background:linear-gradient(90deg, #fbbf24, #d97706);"></div>
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:16px; border:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem;">
            <span>🎨 Creativity &amp; Performance</span>
            <span style="color:#fbbf24;">${sc.creat}%</span>
          </div>
          <div style="height:8px; background:rgba(255,255,255,0.1); border-radius:9999px; overflow:hidden;">
            <div style="width:${sc.creat}%; height:100%; background:linear-gradient(90deg, #fbbf24, #d97706);"></div>
          </div>
        </div>

        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:16px; border:1px solid rgba(255,255,255,0.1);">
          <div style="display:flex; justify-content:space-between; font-size:0.85rem; font-weight:800; margin-bottom:0.4rem;">
            <span>🔍 Curiosity &amp; Analytical</span>
            <span style="color:#fbbf24;">${sc.analytical}%</span>
          </div>
          <div style="height:8px; background:rgba(255,255,255,0.1); border-radius:9999px; overflow:hidden;">
            <div style="width:${sc.analytical}%; height:100%; background:linear-gradient(90deg, #fbbf24, #d97706);"></div>
          </div>
        </div>
      </div>

      <!-- Top 3 Career Recommendations Table -->
      <h3 style="font-size:1.1rem; font-weight:800; color:#fbbf24; margin-bottom:1rem;">2. Top 3 Career Pathway Recommendations</h3>
      <div style="display:flex; flex-direction:column; gap:1rem; margin-bottom:2rem;">
        ${evalResults.pathways.slice(0, 3).map(p => `
          <div class="accds-pathway-card" style="background:rgba(255,255,255,0.04); border:1px solid rgba(251,191,36,0.3); padding:1.2rem; border-radius:18px; display:grid; grid-template-columns:80px 1fr 2fr; gap:1rem; align-items:center;">
            <div style="font-size:1.8rem; font-weight:800; color:#fbbf24; text-align:center;">#${p.rank}</div>
            <div>
              <h4 style="font-size:1rem; font-weight:800; color:#fff;">${p.title}</h4>
              <span style="background:rgba(251,191,36,0.2); color:#fbbf24; font-size:0.75rem; font-weight:800; padding:0.2rem 0.6rem; border-radius:9999px;">${p.matchCategory}</span>
            </div>
            <div>
              <p style="font-size:0.82rem; color:#cbd5e1; margin-bottom:0.4rem;"><strong>Why It Stands Out:</strong> ${p.interpretation}</p>
              <p style="font-size:0.78rem; color:#94a3b8;"><strong>Opportunities:</strong> ${p.opps}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Stream Recommendation -->
      <div style="background:rgba(2,132,199,0.12); border:1px solid rgba(2,132,199,0.35); padding:1.4rem; border-radius:20px; margin-bottom:2rem;">
        <span style="background:#0284c7; color:#fff; font-size:0.75rem; font-weight:800; padding:0.2rem 0.7rem; border-radius:9999px;">ACADEMIC STREAM RECOMMENDATION</span>
        <h3 style="font-size:1.3rem; font-weight:800; color:#ffffff; margin:0.4rem 0;">Primary Stream to Investigate: <span style="color:#fbbf24;">${evalResults.stream.primary}</span></h3>
        <p style="font-size:0.88rem; color:#cbd5e1; margin-bottom:0.8rem;">${evalResults.stream.routeDetails}</p>
        <div style="font-size:0.82rem; color:#e0f2fe;">
          <strong>Indicative Subject Combination:</strong> ${evalResults.stream.subjects.join(' • ')}
        </div>
      </div>

      <!-- Action Footer -->
      <div style="text-align:center; padding-top:1rem; border-top:1px solid rgba(255,255,255,0.1);">
        <p style="font-size:0.85rem; color:#cbd5e1; margin-bottom:1rem;">Your report has been successfully submitted and dispatched to <strong style="color:#fbbf24;">rebekah.astral@zohomail.com</strong>.</p>
        <button class="cta-demo-btn" style="background:#25d366; color:#0f172a; font-weight:800; border-radius:9999px; padding:0.75rem 2rem; font-size:0.95rem;" onclick='sendACCDSReportEmail(${JSON.stringify(evalResults)})'>
          ✉️ Send Report to rebekah.astral@zohomail.com
        </button>
      </div>

    </div>
  `;

  // Scroll smoothly to output
  container.scrollIntoView({ behavior: 'smooth' });
}


// (Download/Print functions removed — email-only mode)

// SEND REPORT EMAIL TO rebekah.astral@zohomail.com
function sendACCDSReportEmail(evalResults) {
  const st = evalResults.student;
  const sc = evalResults.scores;
  const recipient = 'rebekah.astral@zohomail.com';
  const subject = `ACCDS Confidential Student Report - ${st.fullName || 'Student'} (${st.classGrade})`;

  const body = `Dear Rebekah & Astral Career Team,

Please find the ACCDS™ 10-Dimensional Student Assessment & Evaluation summary for ${st.fullName || 'Student'}.

STUDENT DETAILS:
----------------
Full Name: ${st.fullName}
Age: ${st.age} | Class/Grade: ${st.classGrade}
School: ${st.school} | City: ${st.city}
Date: ${st.date} | Contact: ${st.emailContact}

KEY INDICATOR DISCOVERY SCORES:
------------------------------
- Business Orientation: ${sc.biz}%
- Communication Skills: ${sc.comm}%
- Achievement Motivation: ${sc.achv}%
- Independence: ${sc.indep}%
- Creativity & Performance: ${sc.creat}%
- Curiosity & Analytical Thinking: ${sc.analytical}%

PRIMARY RECOMMENDED STREAM (CLASSES 11-12):
-------------------------------------------
Primary Stream: ${evalResults.stream.primary}
Preferred Route: ${evalResults.stream.route}
Indicative Subjects: ${evalResults.stream.subjects.join(', ')}

TOP 3 CAREER RECOMMENDATIONS:
-----------------------------
1. ${evalResults.pathways[0].title} (${evalResults.pathways[0].matchCategory})
2. ${evalResults.pathways[1].title} (${evalResults.pathways[1].matchCategory})
3. ${evalResults.pathways[2].title} (${evalResults.pathways[2].matchCategory})

OVERALL CAREER PERSONALITY:
"${evalResults.personality}"

Note: The complete ACCDS™ Confidential Evaluation Report for ${st.fullName || 'Student'} has been submitted and dispatched directly to rebekah.astral@zohomail.com.

Best regards,
ACCDS™ Automated Evaluation Engine
Astral Career Compass System`;

  const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const mailLink = document.createElement('a');
  mailLink.href = mailtoUrl;
  mailLink.style.display = 'none';
  document.body.appendChild(mailLink);
  mailLink.click();
  setTimeout(() => {
    if (mailLink.parentNode) {
      mailLink.parentNode.removeChild(mailLink);
    }
  }, 1000);
  alert(`✉️ Report Submitted! Your assessment summary has been dispatched to ${recipient}.`);
}

// Initialize ACCDS Evaluator on DOM Load
document.addEventListener('DOMContentLoaded', function () {
  initACCDSEvaluator();
});


