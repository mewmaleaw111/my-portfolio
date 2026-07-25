import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Container หลัก จัดให้อยู่กลางหน้าจอ */}
      <div className="max-w-4xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        
        {/* Badge สถานะ */}
        <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-6">
          🚀 Ready for Internship / พร้อมเริ่มงานฝึกงาน
        </span>

        {/* หัวข้อหลัก */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          สวัสดีครับ, ฉันคือ <span className="text-blue-500">Computer Science Student</span>
        </h1>

        {/* สรุปตัวตนสั้นๆ */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจพัฒนา Web Application 
          คุ้นเคยกับการใช้ <span className="text-slate-200 font-semibold">Vue.js, Node.js, Express, MySQL</span> 
          และกำลังศึกษาทดลองสร้างโปรเจกต์ด้วย <span className="text-slate-200 font-semibold">Next.js & TypeScript</span>
        </p>

        {/* ปุ่ม Action */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="https://github.com/YOUR_GITHUB_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-medium transition-all shadow-lg shadow-blue-500/20"
          >
            ดูผลงานบน GitHub
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium border border-slate-700 transition-all"
          >
            ติดต่อฉัน
          </a>
        </div>

      </div>
    </main>
  );
}