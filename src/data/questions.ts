import { QuizQuestion } from '../types';

export const quizData: QuizQuestion[] = [
  {
    question: "1. Use diagram dapat divisualisasikan alurnya menggunakan activity diagram.",
    type: "true-false",
    correct: "Benar"
  },
  // ... (previous questions 2-22 remain unchanged)
  {
    question: "23. Perhatikan gambar di samping ini. Gambar tersebut menunjukkan arsitektur__________ [Referensi: https://www.cse.msu.edu/~cse870/Lectures/2013/09a-System-Design-notes.pdf]",
    type: "multiple-choice",
    image: "/images/soal-23.png",
    options: {
      a: "Client Server",
      b: "Pipe and Filter",
      c: "Peer to Peer",
      d: "Layering"
    },
    correct: "a"
  },
  {
    question: "24. Berikut ini pernyataan yang benar terkait dengan domain model adalah _________",
    type: "multiple-choice",
    options: {
      a: "Domain model adalah class yang hanya memiliki relasi pewarisan dan agregasi",
      b: "Domain model adalah class diagram yang memiliki atribut dan operasi",
      c: "Domain model adalah kumpulan semua kata benda dari suatu scenario",
      d: "Domain model adalah class diagram yang lengkap dan dijadikan acuan untuk implementasi coding"
    },
    correct: "c"
  },
  {
    question: "25. Berdasarkan scenario tersebut, tentukan manakah yang merupakan sunny day scenario____________",
    type: "multiple-choice",
    image: "/images/soal-25.png",
    options: {
      a: "(1)",
      b: "(2)",
      c: "(3)",
      d: "(2) dan (3)"
    },
    correct: "a"
  },
  // ... (questions 26-27 remain unchanged)
  {
    question: "28. Pada analisis dan perancangan menggunakan robustness diagram maupun sequence diagram. Terdapat simbol-simbol berikut ini (lihat gambar di samping). Secara berurutan dari atas ke bawah, simbol-simbol tersebut adalah________",
    type: "multiple-choice",
    image: "/images/soal-28.png",
    options: {
      a: "Boundary object, Entity Object, Control Object",
      b: "Entity Object, Boundary object, Control Object",
      c: "Control Object, Boundary object, Entity Object",
      d: "Boundary object, Control Object, Entity Object"
    },
    correct: "a"
  },
  {
    question: "29. Message buatbaru() akan masuk ke dalam class_________",
    type: "multiple-choice",
    image: "/images/soal-29.png",
    options: {
      a: "WorkOrderModel",
      b: "WorkOrderController",
      c: "WorkOrder",
      d: "Motor"
    },
    correct: "b"
  },
  // ... (questions 30-31 remain unchanged)
  {
    question: "32. Penggunaan font disesuaikan dengan hasil analisis terhadap user, task, dan environment. Hal ini sesuai dengan prinsip user interface design yaitu______",
    type: "multiple-choice",
    image: "/images/soal-32.png",
    options: {
      a: "User Familiarity",
      b: "Consistency",
      c: "User Diversity",
      d: "Recoverability"
    },
    correct: "c"
  },
  {
    question: "33. Berdasarkan contoh layout aplikasi di atas. Berikut ini adalah daftar komponen user interface yang benar_______________",
    type: "multiple-choice",
    image: "/images/soal-33.png",
    options: {
      a: "Label, ComboBox, TextBox",
      b: "TextBox, Label, CheckBox",
      c: "TexBox, Text, Button",
      d: "TextArea, TextBox, Label"
    },
    correct: "a"
  },
  {
    question: "34. Jika dalam suatu aplikasi terdapat fungsi login dengan interface seperti yang tampak pada gambar di samping ini. Terdapat 2 textbox untuk isian username dan password serta 1 tombol login. Untuk melakukan pengujian dengan teknik black box. Berapakah peluang maksimal scenario input salah yang bisa dibuat ________",
    type: "multiple-choice",
    image: "/images/soal-34.png",
    options: {
      a: "2",
      b: "8",
      c: "9",
      d: "3"
    },
    correct: "d"
  },
  {
    question: "35. Testing yang dilakukan dengan mengkondisikan sistem dalam kondisi seperti volume data yang tidak normal (melebihi frekuensi biasa) agar dapat diobservasi performance dari sistem tersebut. Teknik testing ini disebut_________",
    type: "multiple-choice",
    options: {
      a: "Recovery testing",
      b: "Stress Testing",
      c: "Security Testing",
      d: "Realiability Testing"
    },
    correct: "b"
  },
  {
    question: "36. Dari flow graph yang sudah tersedia, nilai dari cyclomatic complexity program tersebut adalah________",
    type: "multiple-choice",
    image: "/images/soal-36.png",
    options: {
      a: "9",
      b: "11",
      c: "4",
      d: "3"
    },
    correct: "c"
  }
  // ... (remaining questions 37-40 remain unchanged)
];
