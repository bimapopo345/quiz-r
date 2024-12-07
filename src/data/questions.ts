import { QuizQuestion } from '../types';

export const quizData: QuizQuestion[] = [
  {
                question: "1. Use diagram dapat divisualisasikan alurnya menggunakan activity diagram.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "2. Activity diagram menekankan pengklasifikasian aksi setiap proses di dalam sistem.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "3. Simbol <stop symbol> dalam activity diagram digunakan untuk mengakhiri suatu rangkaian aktivitas.",
                type: "true-false",
                correct: "Salah"
            },
            {
                question: "4. Jika ada aksi/kegiatan yang dapat dilakukan secara bersamaan maka digunakan simbol berupa bangun belah ketupat yang menggambarkan adanya percabangan di suatu activity diagram.",
                type: "true-false",
                correct: "Salah"
            },
            {
                question: "5. Suatu proses bisnis dapat dibagi-bagi responsibilitinya yang digambarkan dengan notasi swimlane.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "6. Activity diagram dibuat sesuai dengan jumlah use case yang ada di use case diagram.",
                type: "true-false",
                correct: "Salah"
            },
            {
                question: "7. Class Responsibility dan Collaborator Card (CRC Card) dapat dibentuk dengan hanya berdasarkan requirement statement dan scenario yang dibuat oleh domain expert.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "8. CRC Card digunakan untuk memvalidasi class diagram yang sudah terbentuk dari menurunkan use case diagram.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "9. Metodologi Extreme Programming yang minim analisis dan desain akan membangun CRC Card dari user story dan menggunakan CRC Card untuk acuan pembuatan Class Diagram.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "10. Multiplicity dapat muncul pada relasi realisasi suatu class terhadap class interfacenya.",
                type: "true-false",
                correct: "Salah"
            },
            {
                question: "11. Notasi <composition symbol> adalah relasi komposisi antar class dalam class diagram.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "12. Pengujian beta adalah pengujian yang dilakukan oleh pengguna akhir yang kemudian memberikan feedback sebanyak-banyaknya untuk perbaikan sistem.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "13. Stress testing adalah pengujian yang dilakukan untuk menguji performance suatu sistem dengan melihat banyaknya serangan-serangan keamanan dalam kondisi melebihi normal.",
                type: "true-false",
                correct: "Salah"
            },
            {
                question: "14. Pengujian white box dapat dilakukan oleh pihak pengguna yang meliputi klien dan end user untuk memastikan bahwa alur fungsionalitas sistem sudah berjalan dengan efisien.",
                type: "true-false",
                correct: "Salah"
            },
            {
                question: "15. Pengujian black box disarankan menggunakan scenario uji minimal 1 input salah dan 2 input benar.",
                type: "true-false",
                correct: "Salah"
            },
            {
                question: "16. Kegiatan pengujian sistem berfokus untuk memastikan bahwa sistem yang dibangun terbebas dari kesalahan dan kekurangan.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "17. Kegiatan pengujian biasanya didokumentasikan dalam Dokumen Pengujian Perangkat Lunak (DPPL).",
                type: "true-false",
                correct: "Salah"
            },
            {
                question: "18. Tahap perancangan data adalah membangun data dictionary yang mencakup deskripsi rinci dan struktur dari data yang akan diimplementasikan di database sistem.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "19. Pengujian kualitas produk perangkat lunak dapat dilakukan dengan menyebarkan kuesioner untuk menggali informasi terkait dengan kepuasan end user terhadap produk yang telah dibuat.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "20. Rancangan lingkungan implementasi adalah menjelaskan tentang spesifikasi hardware dan software yang digunakan, termasuk DBMS.",
                type: "true-false",
                correct: "Benar"
            },
            {
                question: "21. Pembuatan CRC Card dilakukan dengan pertemuan “CRC Card Session” yang dihadiri oleh 5-6 orang. Berikut ini yang tidak termasuk peserta dalam pertemuan tersebut adalah______________",
                type: "multiple-choice",
                options: {
                    a: "Domain Expert",
                    b: "Analyst",
                    c: "Junior Programmer",
                    d: "Group’s leader"
                },
                correct: "c"
            },
            {
                question: "22. CRC Card session menjalankan scenario untuk menuliskan objek-objek pada crc card. Skenario tersebut ditentukan oleh ______________",
                type: "multiple-choice",
                options: {
                    a: "Analyst",
                    b: "Group’s Leader",
                    c: "Domain Expert",
                    d: "Programmer"
                },
                correct: "c"
            },
            {
                question: "23. Perhatikan gambar di samping ini. Gambar tersebut menunjukkan arsitektur__________ [Referensi: https://www.cse.msu.edu/~cse870/Lectures/2013/09a-System-Design-notes.pdf]",
                type: "multiple-choice",
                image: "soal-23.png",
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
                image: "soal-25.png",
                options: {
                    a: "(1)",
                    b: "(2)",
                    c: "(3)",
                    d: "(2) dan (3)"
                },
                correct: "a"
            },
            {
                question: "26. Berdasarkan scenario tersebut, tentukan manakah yang merupakan rainy day scenario____________",
                type: "multiple-choice",
                options: {
                    a: "(1)",
                    b: "(2)",
                    c: "(3)",
                    d: "(2) dan (3)"
                },
                correct: "c"
            },
            {
                question: "27. Berdasarkan scenario, yang merupakan Alternate scenario adalah ________",
                type: "multiple-choice",
                options: {
                    a: "(1) saja",
                    b: "(1) dan (2)",
                    c: "(1) dan (3)",
                    d: "(2) dan (3)"
                },
                correct: "c"
            },
            {
                question: "28. Pada analisis dan perancangan menggunakan robustness diagram maupun sequence diagram. Terdapat simbol-simbol berikut ini (lihat gambar di samping). Secara berurutan dari atas ke bawah, simbol-simbol tersebut adalah________ [Referensi: https://repository.dinus.ac.id/docs/ajar/7_Whitebox_testing.pdf]",
                type: "multiple-choice",
                image: "soal-28.png",
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
                image: "soal-29.png",
                options: {
                    a: "WorkOrderModel",
                    b: "WorkOrderController",
                    c: "WorkOrder",
                    d: "Motor"
                },
                correct: "b"
            },
            {
                question: "30. Message setStatus() akan masuk ke dalam class___________",
                type: "multiple-choice",
                options: {
                    a: "WorkOrderModel",
                    b: "WorkOrderController",
                    c: "WorkOrder",
                    d: "Motor"
                },
                correct: "c"
            },
            {
                question: "31. Pesan kesalahan akan disampaikan ke actor melalui objek__________",
                type: "multiple-choice",
                options: {
                    a: "Work Order",
                    b: "WorkOrderController",
                    c: "Screen ListMotor",
                    d: "WorkOrderModel"
                },
                correct: "c"
            },
            {
                question: "32. Penggunaan font disesuaikan dengan hasil analisis terhadap user, task, dan environment. Hal ini sesuai dengan prinsip user interface design yaitu______",
                type: "multiple-choice",
                image: "soal-32.png",
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
                image: "soal-33.png",
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
                image: "soal-34.png",
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
                image: "soal-36.png",
                options: {
                    a: "9",
                    b: "11",
                    c: "4",
                    d: "3"
                },
                correct: "c"
            },
            {
                question: "37. Deployment method yang dilakukan dengan cara mengoperasikan sistem lama dan sistem baru dalam jangka waktu tertentu. Method ini disebut__________",
                type: "multiple-choice",
                options: {
                    a: "Direct Deployment",
                    b: "Phased Deployment",
                    c: "Parallel Deployment",
                    d: "Operational Deployment"
                },
                correct: "c"
            },
            {
                question: "38. Salah satu deployment activity adalah dengan converting & initializing data yaitu ETL. Kepanjangan ETL adalah__________",
                type: "multiple-choice",
                options: {
                    a: "Export, Transform, Load",
                    b: "Extraction, Transfer, Load",
                    c: "Export, Transfer, Load",
                    d: "Extraction, Transform, Load"
                },
                correct: "d"
            },
            {
                question: "39. Versi update sistem yang disediakan untuk memperbaiki bugs dan terdapat beberapa perubahan kecil terhadap fitur aplikasi yang sudah ada adalah_______",
                type: "multiple-choice",
                options: {
                    a: "Production Version",
                    b: "Betha Version",
                    c: "Control Version",
                    d: "Maintenance Release"
                },
                correct: "d"
            },
            {
                question: "40. Hasil kegiatan pengujian didokumentasikan ke dalam dokumen________",
                type: "multiple-choice",
                options: {
                    a: "SKPL",
                    b: "DPPL",
                    c: "DUPL",
                    d: "Maintenance"
                },
                correct: "c"
            }
];
