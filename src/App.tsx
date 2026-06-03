import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

// ─── Icons ────────────────────────────────────────────────────────────────────
const MenuIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);
const CloseIcon = () => (
  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const GithubIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const EmailIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const PhoneIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.41 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.07 6.07l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const LocationIcon = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ExternalLinkIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const ChevronDownIcon = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const SendIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────
interface Skill {
  name: string;
  level: number;
  color: string;
  icon: string;
  category: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: string;
  emoji: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const skills: Skill[] = [
  // Web Dev
  { name: "HTML5", level: 95, color: "#e34f26", icon: "🌐", category: "Web Dev" },
  { name: "CSS3", level: 90, color: "#1572b6", icon: "🎨", category: "Web Dev" },
  { name: "JavaScript", level: 85, color: "#f7df1e", icon: "⚡", category: "Web Dev" },
  { name: "React", level: 80, color: "#61dafb", icon: "⚛️", category: "Web Dev" },
  // Design
  { name: "Figma", level: 88, color: "#f24e1e", icon: "🖌️", category: "Design" },
  { name: "Adobe Photoshop", level: 82, color: "#31a8ff", icon: "🖼️", category: "Design" },
  { name: "Adobe Illustrator", level: 78, color: "#ff9a00", icon: "✏️", category: "Design" },
  // Tools
  { name: "MS Office", level: 92, color: "#d83b01", icon: "📊", category: "Tools" },
];

const projects: Project[] = [
  {
    title: "E-Commerce UI",
    description: "A fully responsive e-commerce website with modern UI/UX design, built using HTML, CSS, and JavaScript with smooth animations.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-purple-600 to-blue-600",
    emoji: "🛒",
  },
  {
    title: "React Dashboard",
    description: "A feature-rich admin dashboard built with React, featuring data visualization, user management, and real-time updates.",
    tags: ["React", "CSS", "JS"],
    color: "from-blue-600 to-cyan-500",
    emoji: "📊",
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package designed in Adobe Illustrator & Photoshop — logos, color palettes, and brand guidelines.",
    tags: ["Illustrator", "Photoshop", "Figma"],
    color: "from-pink-600 to-orange-500",
    emoji: "🎨",
  },
  {
    title: "Portfolio UI/UX",
    description: "Designed a complete portfolio UI/UX prototype in Figma with interactive components, micro-animations, and style guide.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    color: "from-orange-500 to-yellow-500",
    emoji: "🖌️",
  },
  {
    title: "Restaurant Website",
    description: "Modern restaurant website with menu showcase, reservation system, and responsive design built with HTML, CSS & JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-green-600 to-teal-500",
    emoji: "🍽️",
  },
  {
    title: "Landing Page Suite",
    description: "A collection of high-converting SaaS landing pages with pixel-perfect design and smooth CSS transitions.",
    tags: ["HTML", "CSS", "React"],
    color: "from-violet-600 to-purple-500",
    emoji: "🚀",
  },
];

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "About", "Skills", "Projects", "Contact"];

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur bg-[#0a0a0f]/80 border-b border-purple-900/30 shadow-lg shadow-purple-900/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-700/40">
            Ai
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            <span className="gradient-text">Aawaiz Ijaz</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-purple-700/40 transition-all duration-300 hover:scale-105"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden nav-blur bg-[#0a0a0f]/95 border-t border-purple-900/30 px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-slate-300 hover:text-white text-base font-medium text-left transition-colors duration-200"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [text, setText] = useState("");
  const [emailCopied, setEmailCopied] = useState(false);
  const [_idx, setIdx] = useState(0);
  const phrases = ["Frontend Developer", "UI/UX Designer", "Creative Coder", "React Developer"];
  const phraseRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);
  const emailCopyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const type = () => {
      const current = phrases[phraseRef.current];
      if (!deletingRef.current) {
        if (charRef.current < current.length) {
          setText(current.slice(0, charRef.current + 1));
          charRef.current++;
          return 80;
        } else {
          deletingRef.current = true;
          return 1500;
        }
      } else {
        if (charRef.current > 0) {
          setText(current.slice(0, charRef.current - 1));
          charRef.current--;
          return 40;
        } else {
          deletingRef.current = false;
          phraseRef.current = (phraseRef.current + 1) % phrases.length;
          setIdx((i) => i + 1);
          return 300;
        }
      }
    };
    let timeout: number;
    const run = () => { const delay = type(); timeout = window.setTimeout(run, delay); };
    timeout = window.setTimeout(run, 500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    return () => {
      if (emailCopyTimeoutRef.current) {
        window.clearTimeout(emailCopyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("awaiztabassam3@gmail.com");
      setEmailCopied(true);
      if (emailCopyTimeoutRef.current) {
        window.clearTimeout(emailCopyTimeoutRef.current);
      }
      emailCopyTimeoutRef.current = window.setTimeout(() => {
        setEmailCopied(false);
        emailCopyTimeoutRef.current = null;
      }, 2000);
    } catch (error) {
      console.error("Failed to copy email to clipboard:", error);
      setEmailCopied(true);
      if (emailCopyTimeoutRef.current) {
        window.clearTimeout(emailCopyTimeoutRef.current);
      }
      emailCopyTimeoutRef.current = window.setTimeout(() => {
        setEmailCopied(false);
        emailCopyTimeoutRef.current = null;
      }, 2000);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-700/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-900/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-700/50 bg-purple-900/20 text-purple-300 text-sm font-medium mb-6 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-400 inline-block pulse-glow" />
            Available for work
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 fade-in-up">
            Hi, I'm <br />
            <span className="gradient-text">Muhammad</span>
            <br />
            <span className="text-slate-100">Aawaiz</span>
          </h1>

          <div className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6 h-10 fade-in-up">
            <span className="gradient-text">{text}</span>
            <span className="cursor text-purple-400">|</span>
          </div>

          <p className="text-slate-400 text-lg max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed fade-in-up">
            I craft beautiful, responsive websites and stunning visual designs. Passionate about turning ideas into digital experiences that leave a lasting impression.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start fade-in-up">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white font-bold text-base hover:shadow-2xl hover:shadow-purple-700/40 transition-all duration-300 hover:scale-105 pulse-glow"
            >
              View My Work 🚀
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 rounded-full border border-purple-600/50 text-purple-300 font-bold text-base hover:border-purple-400 hover:text-white hover:bg-purple-900/30 transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-2 mt-10 justify-center lg:justify-start">
            <div className="flex gap-4">
              {[
                { icon: <GithubIcon />, href: "https://github.com/Awaiz11", label: "GitHub" },
                { icon: <LinkedinIcon />, href: "#", label: "LinkedIn" },
                { icon: <EmailIcon />, href: "#", label: "Email", onClick: handleCopyEmail },
              ].map(({ icon, href, label, onClick }) => (
                <a
                  key={label}
                  href={href}
                  onClick={label === "Email" ? (event) => { event.preventDefault(); onClick?.(); } : undefined}
                  target={label === "GitHub" ? "_blank" : undefined}
                  rel={label === "GitHub" ? "noreferrer noopener" : undefined}
                  Airia-label={label}
                  className="w-11 h-11 rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-900/30 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
            {emailCopied && (
              <p className="text-sm text-green-400 font-medium">Email Copied!</p>
            )}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 relative float-animation">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Spinning ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/40 animate-spin" style={{ animationDuration: "12s" }} />
            <div className="absolute inset-4 rounded-full border border-blue-500/30 animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }} />
            {/* Glow */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-xl" />
            {/* Image */}
            <div className="absolute inset-6 rounded-full overflow-hidden gradient-border pulse-glow">
              <img
                src="/images/portfolio.jpeg"
                Ailt="Muhammad Aawaiz"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl px-3 py-2 text-white text-xs font-bold shadow-lg shadow-purple-700/40 flex items-center gap-1">
              ⚛️ React Dev
            </div>
            <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-pink-600 to-orange-500 rounded-2xl px-3 py-2 text-white text-xs font-bold shadow-lg flex items-center gap-1">
              🎨 Designer
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce">
        <ChevronDownIcon />
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const stats = [
    { value: "1+", label: "Years Experience" },
    { value: "20+", label: "Projects Done" },
    { value: "8+", label: "Happy Clients" },
    { value: "100%", label: "Dedication" },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-800/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="relative">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden gradient-border">
                <img
                  src="https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  Ailt="Workspace"
                  className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
              </div>
              {/* Code snippet overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#0d0d1a]/90 backdrop-blur rounded-xl p-4 border border-purple-700/30">
                <p className="text-green-400 text-xs font-mono">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-white">= {"{"}</span>
                </p>
                <p className="text-xs font-mono ml-4 text-slate-300">
                  name: <span className="text-yellow-300">"Muhammad Aawaiz"</span>,
                </p>
                <p className="text-xs font-mono ml-4 text-slate-300">
                  passion: <span className="text-yellow-300">"Building amazing things"</span>
                </p>
                <p className="text-white text-xs font-mono">{"}"}</p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Ai passionate <span className="gradient-text">Frontend Developer</span> & Designer
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4 text-base">
              Hello! I'm <strong className="text-white">Muhammad Aawaiz</strong>, a creative frontend developer and UI/UX designer who loves turning complex ideas into beautiful, intuitive digital experiences.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6 text-base">
              With expertise in <strong className="text-purple-400">HTML, CSS, JavaScript, and React</strong>, alongside design tools like <strong className="text-blue-400">Figma, Adobe Photoshop, and Illustrator</strong>, I bridge the gap between design and development — delivering pixel-perfect, performant web solutions.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Problem Solver", "Creative Thinker", "Detail Oriented", "Team Player", "Fast Learner"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-purple-700/50 bg-purple-900/20 text-purple-300 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold hover:shadow-xl hover:shadow-purple-700/30 transition-all duration-300 hover:scale-105"
            >
              Let's Talk 💬
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="text-center p-6 rounded-2xl border border-purple-700/30 bg-purple-900/10 hover:border-purple-500/50 hover:bg-purple-900/20 transition-all duration-300 card-hover"
            >
              <div className="text-4xl font-black gradient-text mb-1">{value}</div>
              <div className="text-slate-400 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Skills ───────────────────────────────────────────────────────────────────
function Skills() {
  const categories = ["Web Dev", "Design", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute -left-40 top-20 w-80 h-80 rounded-full bg-blue-800/10 blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">My Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-700/30 scale-105"
                  : "border border-slate-700 text-slate-400 hover:border-purple-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="relative p-6 rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-900/40 hover:border-purple-600/50 transition-all duration-300 card-hover group overflow-hidden shine"
            >
              {/* BG glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at 50% 50%, ${skill.color}15 0%, transparent 70%)` }} />

              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">{skill.icon}</div>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${skill.color}20`, color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-3">{skill.name}</h3>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color, boxShadow: `0 0 8px ${skill.color}80` }}
                  />
                </div>
                <span className="text-slate-500 text-xs mt-2 inline-block">{skill.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Tools Grid */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm uppercase tracking-widest mb-6 font-semibold">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Git", "VS Code", "Chrome DevTools", "Responsive Design", "SEO Basics", "Canva", "Bootstrap", "Tailwind CSS"].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full border border-slate-700 bg-slate-900/50 text-slate-400 text-sm hover:border-purple-500/50 hover:text-slate-200 transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Projects ─────────────────────────────────────────────────────────────────
function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">My Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 max-w-xl mx-auto mt-4 text-base">
            Ai showcase of my best projects — from web development to design work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden hover:border-purple-600/50 transition-all duration-300 card-hover"
            >
              {/* Top Banner */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-7xl filter drop-shadow-lg">{project.emoji}</span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20 flex items-center justify-center gap-3">
                  <button className="p-2.5 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-colors">
                    <ExternalLinkIcon />
                  </button>
                </div>
                {/* Number */}
                <span className="absolute top-3 right-4 text-white/20 font-black text-5xl font-mono">
                  0{i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full border border-purple-700/40 bg-purple-900/20 text-purple-300 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-purple-600/50 text-purple-300 font-semibold hover:bg-purple-900/20 hover:border-purple-400 transition-all duration-300"
          >
            View All Projects <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ from_name: "", from_email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_35oxd5k",
        "template_ic6nn6k",
        formRef.current,
        "4qCYzOhEPhWBKBV7C"
      )
      .then(() => {
        alert("Message sent! I'll get back to you soon.");
        setSent(true);
        setForm({ from_name: "", from_email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Unable to send message. Please try again later.");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setSent(false), 4000);
      });
  };

  const contactInfo = [
    { icon: <EmailIcon />, label: "Email", value: "awaiztabassam3@gmail.com", color: "from-purple-600 to-violet-600" },
    { icon: <PhoneIcon />, label: "Phone", value: "+92 312 4915599", color: "from-blue-600 to-cyan-500" },
    { icon: <LocationIcon />, label: "Location", value: "Lahore 🇵🇰", color: "from-pink-600 to-rose-500" },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-800/10 rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Contact <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-4 rounded-full" />
          <p className="text-slate-400 max-w-lg mx-auto mt-4 text-base">
            Have a project in mind? Let's collaborate and build something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info Cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {contactInfo.map(({ icon, label, value, color }) => (
              <div
                key={label}
                className="flex items-center gap-5 p-5 rounded-2xl border border-slate-800 bg-slate-900/50 hover:border-purple-600/40 transition-all duration-300 card-hover"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white flex-shrink-0 shadow-lg`}>
                  {icon}
                </div>
                <div>
                  <p className="text-slate-500 text-xs uppercase tracking-widest font-semibold mb-0.5">{label}</p>
                  <p className="text-white font-semibold text-sm">{value}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="p-5 rounded-2xl border border-slate-800 bg-slate-900/50">
              <p className="text-slate-400 text-sm font-semibold mb-4">Follow Me On</p>
              <div className="flex gap-3">
                {[
                  { icon: <GithubIcon />, label: "GitHub", href: "https://github.com/Awaiz11" },
                  { icon: <LinkedinIcon />, label: "LinkedIn", href: "#" },
                ].map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "GitHub" ? "_blank" : undefined}
                    rel={label === "GitHub" ? "noreferrer noopener" : undefined}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 text-sm font-semibold"
                  >
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={sendEmail} className="lg:col-span-3 p-8 rounded-2xl border border-slate-800 bg-slate-900/50">
            {sent && (
              <div className="mb-6 p-4 rounded-xl bg-green-900/30 border border-green-700/50 text-green-400 text-sm font-semibold flex items-center gap-2">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-5 mb-5">
              {[
                { name: "from_name", label: "Your Name", placeholder: "Muhammad Aawaiz", type: "text" },
                { name: "from_email", label: "Email Address", placeholder: "aawaiz@email.com", type: "email" },
              ].map(({ name, label, placeholder, type }) => (
                <div key={name}>
                  <label className="block text-slate-400 text-sm font-semibold mb-2">{label}</label>
                  <input
                    type={type}
                    name={name}
                    value={(form as any)[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:bg-slate-800 transition-all duration-200 text-sm"
                  />
                </div>
              ))}
            </div>

            <div className="mb-5">
              <label className="block text-slate-400 text-sm font-semibold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Project collaboration..."
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:bg-slate-800 transition-all duration-200 text-sm"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-400 text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-600 focus:outline-none focus:border-purple-500 focus:bg-slate-800 transition-all duration-200 text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 via-violet-600 to-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-purple-700/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <SendIcon />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-10 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 flex items-center justify-center text-white font-bold">
            Ai
          </div>
          <span className="gradient-text font-bold text-lg">Muhammad Aawaiz</span>
        </div>
        <p className="text-slate-500 text-sm">
          Designed & Developed with <span className="text-red-400">❤️</span> by Muhammad Aawaiz
        </p>
        <p className="text-slate-600 text-xs mt-2">© {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
