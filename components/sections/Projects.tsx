"use client";

import { FaGithub } from "react-icons/fa6";
import { ExternalLink, X, FolderGit2 } from "lucide-react";

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  highlights?: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    title: "เว็บขายสินค้า OTOP ออนไลน์",
    subtitle: "Group Project",
    description:
      "แพลตฟอร์มอีคอมเมิร์ซสำหรับซื้อขายสินค้า OTOP ครบวงจร พร้อมระบบจัดการหลังบ้าน (Admin Dashboard) และ RESTful API",
    highlights: [
      "ออกแบบ UI/UX และสร้าง Prototype ด้วย Figma",
      "พัฒนา Frontend และระบบหลังบ้าน Admin ด้วย Vue.js",
      "พัฒนาฐานข้อมูลและ API (Backend) ด้วย Node.js และ Express.js",
      "จำลองเซิร์ฟเวอร์และจัดการฐานข้อมูล MySQL ผ่าน XAMPP สำหรับทดสอบระบบ",
      "Deploy ระบบ Frontend บน Vercel, Backend บน Render และ TiDB Cloud",
    ],
    tags: [
      "Vue.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "TiDB Cloud",
      "Render",
      "Vercel",
      "Figma",
    ],
    liveUrl: "https://my-vue-app-otopstore.vercel.app/",
    githubUrl: "https://github.com/mewmaleaw111/my-vue-app-otopstore",
  },
  {
    title: "เว็บจองสนามแบดมินตันออนไลน์",
    subtitle: "Group Project",
    description:
      "ระบบจองคอร์ดแบดมินตันออนไลน์แบบเรียลไทม์ รองรับการเลือกสนาม วัน และช่วงเวลา พร้อมระบบจัดการข้อมูลการจอง",
    highlights: [
      "ออกแบบ UI/UX และ Prototype ด้วย Figma เน้นใช้งานง่ายและคล่องตัว",
      "พัฒนา Frontend ระบบจองคอร์ด วัน-เวลา และหลังบ้านด้วย Vue.js",
      "พัฒนา API เชื่อมต่อฐานข้อมูล (Backend) ด้วย Node.js และ Express.js",
      "จำลอง Server และทดสอบฐานข้อมูลเชิงสัมพันธ์ (MySQL) ผ่าน XAMPP",
      "Deploy Frontend บน Vercel, API บน Render และ Database บน TiDB Cloud",
    ],
    tags: [
      "Vue.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "TiDB Cloud",
      "Render",
      "Vercel",
      "Figma",
    ],
    liveUrl: "https://badminton-booking-sigma.vercel.app/",
    githubUrl: "https://github.com/mewmaleaw111/badminton-booking",
  },
  {
    title: "เว็บไซต์พอร์ตโฟลิโอส่วนตัว (My Portfolio)",
    subtitle: "Personal Project",
    description:
      "เว็บไซต์พอร์ตโฟลิโอสำหรับนำเสนอผลงาน ประวัติ และทักษะความสามารถด้าน Software Engineer ออกแบบเน้นความเรียบหรู คลีน และรองรับ Responsive ทุกหน้าจอ",
    highlights: [
      "ออกแบบและพัฒนา Frontend ด้วย Next.js, React และ TypeScript",
      "ปรับแต่งสไตล์ ดีไซน์ และรองรับทุกขนาดหน้าจอด้วย Tailwind CSS",
      "Deploy และจัดการ CI/CD แบบอัตโนมัติผ่าน Vercel",
    ],
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    liveUrl: "https://my-portfolio-delta-mauve-47.vercel.app/",
    githubUrl: "https://github.com/mewmaleaw111/my-portfolio",
  },
];

interface ProjectsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Projects({ isOpen, onClose }: ProjectsProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* กล่อง Pop-up หลัก */}
      <div
        className="relative w-full max-w-4xl max-h-[85vh] bg-white rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-100 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header ตรึงอยู่กับที่ไม่เลื่อนตาม */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-slate-100 rounded-2xl text-slate-700">
              <FolderGit2 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800">
                ผลงานทั้งหมด (Projects)
              </h2>
              <p className="text-xs md:text-sm text-slate-500">
                โปรเจกต์ที่ Deploy แล้วและซอร์สโค้ดบน GitHub
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ส่วนเนื้อหาผลงานที่ Scroll เลื่อนขึ้น-ลงได้ */}
        <div className="overflow-y-auto pr-1 md:pr-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
            {projectsData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 md:p-6 flex flex-col justify-between transition-all hover:shadow-md space-y-4"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-bold text-lg text-slate-800">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                        {item.subtitle}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights && (
                    <ul className="space-y-1.5 mb-4 text-xs text-slate-600 leading-relaxed">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2">
                          <span className="text-slate-400 mt-0.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stacks */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[11px] font-medium bg-white text-slate-700 border border-slate-200 px-2.5 py-0.5 rounded-md shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links Buttons */}
                <div className="flex items-center gap-2.5 pt-3 border-t border-slate-200/60">
                  {item.liveUrl && (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-xl transition-transform active:scale-95 shadow-sm"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}

                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 text-xs font-medium rounded-xl transition-transform active:scale-95 shadow-sm"
                    >
                      <FaGithub className="w-3.5 h-3.5" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}