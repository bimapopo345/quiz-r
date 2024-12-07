import { StudentInfo } from '../types';

interface Props {
  studentInfo: StudentInfo;
  onStudentInfoChange: (info: StudentInfo) => void;
}

export default function Header({ studentInfo, onStudentInfoChange }: Props) {
  return (
    <div className="bg-white p-8 rounded shadow-md">
      <h1 className="text-3xl font-bold text-center mb-6">UJIAN AKHIR SEMESTER GANJIL TAHUN AKADEMIK 2024/2025</h1>
      <h2 className="text-xl font-semibold text-center mb-6">SEKOLAH VOKASI IPB</h2>
      <div className="mb-8 space-y-2">
        <p><strong>Mata Kuliah:</strong> Rekayasa Perangkat Lunak</p>
        <p><strong>Koordinator/Dosen:</strong> Gema Parasti Mindara, SSi, MKom</p>
        <p><strong>Program Studi:</strong> Teknologi Rekayasa Komputer</p>
        <div className="space-y-2">
          <div>
            <label className="font-bold mr-2">Hari/Tanggal:</label>
            <input 
              type="date" 
              value={studentInfo.date}
              onChange={(e) => onStudentInfoChange({ ...studentInfo, date: e.target.value })}
              className="border rounded p-1"
            />
          </div>
          <div>
            <label className="font-bold mr-2">Pukul:</label>
            <input 
              type="time" 
              value={studentInfo.time}
              onChange={(e) => onStudentInfoChange({ ...studentInfo, time: e.target.value })}
              className="border rounded p-1"
            />
          </div>
          <div>
            <label className="font-bold mr-2">Nama Mahasiswa:</label>
            <input 
              type="text" 
              value={studentInfo.name}
              onChange={(e) => onStudentInfoChange({ ...studentInfo, name: e.target.value })}
              className="border rounded p-1"
            />
          </div>
          <div>
            <label className="font-bold mr-2">NIM:</label>
            <input 
              type="text" 
              value={studentInfo.nim}
              onChange={(e) => onStudentInfoChange({ ...studentInfo, nim: e.target.value })}
              className="border rounded p-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
