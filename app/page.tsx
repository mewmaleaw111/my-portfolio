export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white font-sans">
      {/* Container หลัก */}
      <div className="max-w-4xl mx-auto px-6 py-16 flex flex-col items-center justify-center">
        
        {/* ================= HERO SECTION ================= */}
        <section className="flex flex-col items-center text-center py-12">
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-6">
            🚀 Ready for Internship / พร้อมเริ่มงานฝึกงาน
          </span>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            สวัสดีครับ, ฉันคือ <span className="text-blue-500">Computer Science Student</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
            นักศึกษาวิทยาการคอมพิวเตอร์ที่สนใจพัฒนา Web Application 
            คุ้นเคยกับการใช้ <span className="text-slate-200 font-semibold">Vue.js, Node.js, Express, MySQL</span> 
            และกำลังศึกษาทดลองสร้างโปรเจกต์ด้วย <span className="text-slate-200 font-semibold">Next.js & TypeScript</span>
          </p>

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
              href="#skills"
              className="px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium border border-slate-700 transition-all"
            >
              ดูทักษะความสามารถ
            </a>
          </div>
        </section>

        {/* ================= SKILLS SECTION ================= */}
        <section id="skills" className="w-full py-12 border-t border-slate-800 mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
            Technical Skills (ทักษะความสามารถ)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Frontend Skills */}
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/50 transition-all">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                💻 Frontend
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Vue.js</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Next.js (App Router)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> React / JavaScript (ES6)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> HTML5 / CSS3 / Tailwind CSS</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> TypeScript (Basic)</li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 transition-all">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                ⚙️ Backend & Database
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Node.js</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Express.js</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> RESTful APIs Design</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> MySQL / XAMPP</li>
              </ul>
            </div>

            {/* Tools & Knowledge */}
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 transition-all">
              <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                🛠️ Tools & Fundamental
              </h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Git & GitHub</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> Postman (API Testing)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> DevOps Fundamentals</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span> VS Code</li>
              </ul>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}