import Image from "next/image";
import { FaFacebookF, FaGithub, FaEnvelope } from "react-icons/fa6";
import { Code2 } from "lucide-react";

export default function Hero() {
  return (
    /* 1. ขยาย max-w-4xl เป็น max-w-6xl และเพิ่ม gap */
    <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 p-6">
      {/* ข้อความและปุ่ม Social ด้านซ้าย */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        {/* 2. ขยายขนาดข้อความ Hello I'm */}
        <span className="text-slate-500 font-medium text-base md:text-xl">
          Hello, I'm
        </span>

        {/* 3. ขยายขนาดชื่อตัวโตๆ (text-6xl / text-7xl) */}
        <h1 className="group relative cursor-default text-5xl md:text-7xl font-bold text-slate-800 tracking-tight">
          {/* ชื่อภาษาอังกฤษ (แสดงปกติ / ซ่อนตอน hover) */}
          <span className="inline-block transition-opacity duration-300 group-hover:opacity-0">
            MEW Pakin
          </span>

          {/* ชื่อภาษาไทย (ซ่อนปกติ / แสดงตอน hover) */}
          <span className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-black-600">
            มิว ภาคิน
          </span>
        </h1>

        {/* 4. ขยาย Badge ตำแหน่งงาน */}
        <div className="w-full flex items-center justify-center md:justify-start gap-4 py-2">
          <div className="h-[2px] w-16 bg-slate-300 hidden md:block"></div>
          <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/80 rounded-full px-5 py-2 text-sm md:text-base font-medium text-slate-700 shadow-sm">
            <Code2 className="w-5 h-5 text-slate-600" />
            <span>Software Engineer</span>
          </div>
          <div className="h-[2px] flex-1 bg-slate-300 hidden md:block"></div>
        </div>

        {/* 5. ขยายปุ่ม Social Links (w-14 h-14) */}
        <div className="flex items-center gap-4 pt-2">
          <a
            href="https://www.facebook.com/pakin.chuerkratok/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm transition-transform active:scale-95 hover:-translate-y-0.5"
          >
            <FaFacebookF className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/mewmaleaw111"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center text-slate-800 shadow-sm transition-transform active:scale-95 hover:-translate-y-0.5"
          >
            <FaGithub className="w-6 h-6" />
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=mui0033@gmail.com&su=Contact+from+Portfolio" target="_blank"
            aria-label="Email"
            className="w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center text-red-500 shadow-sm transition-transform active:scale-95 hover:-translate-y-0.5"
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* 6. ขยายขนาดรูปโปรไฟล์ (w-80 h-96 / md:w-96 md:h-[480px]) */}
      <div className="relative animate-float">
        <div className="relative w-80 h-96 md:w-96 md:h-[480px] rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-slate-200">
          <Image
            src="/124139.png"
            alt="MEW Pakin"
            fill
            sizes="(max-width: 768px) 320px, 384px"
            className="object-cover"
            priority
          />
        </div>

        {/* 7. ขยาย Domain status badge */}
        <div className="absolute -bottom-4 -right-2 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full shadow-md flex items-center gap-2.5 text-sm font-medium text-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>pakin.com</span>
        </div>
      </div>
    </div>
  );
}