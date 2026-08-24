"use client";

import { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaEnvelope, FaFilePdf } from "react-icons/fa6";
import { Code2, FolderGit2 } from "lucide-react";
import Projects from "./Projects";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 p-6 relative">
      {/* ข้อความและปุ่ม Social ด้านซ้าย */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <span className="text-slate-500 font-medium text-base md:text-xl">
          Hello, I'm
        </span>

        <h1 className="group relative cursor-pointer text-5xl md:text-7xl font-bold text-slate-800 tracking-tight select-none">
          <span className="inline-block transition-opacity duration-300 group-hover:opacity-0 group-active:opacity-0">
            MEW Pakin
          </span>
          <span className="absolute left-0 top-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-active:opacity-100 text-slate-900">
            มิว ภาคิน
          </span>
        </h1>

        <div className="w-full flex items-center justify-center md:justify-start gap-4 py-2">
          <div className="h-[2px] w-16 bg-slate-300 hidden md:block"></div>
          <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/80 rounded-full px-5 py-2 text-sm md:text-base font-medium text-slate-700 shadow-sm">
            <Code2 className="w-5 h-5 text-slate-600" />
            <span>Software Engineer</span>
          </div>
          <div className="h-[2px] flex-1 bg-slate-300 hidden md:block"></div>
        </div>

        {/* Social Icons & ปุ่มผลงาน */}
        <div className="flex flex-col items-center md:items-start gap-4 pt-2">
          <div className="flex items-center gap-4">
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=mui0033@gmail.com&su=Contact+from+Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center text-red-500 shadow-sm transition-transform active:scale-95 hover:-translate-y-0.5"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>

            <a
              href="/Pakin-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              title="View Resume"
              className="w-14 h-14 bg-white hover:bg-slate-50 border border-slate-200/80 rounded-2xl flex items-center justify-center text-rose-600 shadow-sm transition-transform active:scale-95 hover:-translate-y-0.5"
            >
              <FaFilePdf className="w-6 h-6" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2.5 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-medium shadow-md shadow-slate-900/10 transition-all active:scale-95 hover:-translate-y-0.5 cursor-pointer"
          >
            <FolderGit2 className="w-5 h-5 text-slate-300" />
            <span>ดูผลงาน (Projects)</span>
          </button>
        </div>
      </div>

      {/* รูปโปรไฟล์ด้านขวา */}
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

        <div className="absolute -bottom-4 -right-2 bg-white/10 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full shadow-md flex items-center gap-2.5 text-sm font-medium text-slate-800">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>pakin.com</span>
        </div>
      </div>

      {/* เรียกใช้งาน Projects Modal */}
      <Projects
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}