import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import { 
  Building2, 
  Plane, 
  Clock, 
  Hotel, 
  Check, 
  ChevronRight, 
  ChevronDown,
  ChevronUp,
  PhoneCall, 
  HelpCircle,
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles,
  Award,
  DollarSign,
  AlertCircle,
  FileText,
  User,
  Activity,
  Luggage,
  ExternalLink,
  MessageSquare,
  Star,
  ShieldAlert,
  Calendar,
  Layers,
  Heart,
  Briefcase,
  Facebook,
  Instagram
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import ProcedureDetail from "./pages/ProcedureDetail";

function AppContent() {
  // Navigation & Language state
  const [lang, setLang] = useState<"en" | "es">("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTarget: targetId } });
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleStartFileClick = () => {
    if (location.pathname !== "/") {
      navigate("/", { state: { preselect: "" } });
    } else {
      const el = document.getElementById("lead-capture");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <div className={`min-h-screen bg-[#FAFAF9] font-sans overflow-x-hidden text-[#1E293B] antialiased selection:bg-[#22B8CF] selection:text-[#0F172A] ${lang === "en" ? "lang-en-active" : "lang-es-active"}`}>
      
      {/* TOP EMERGENCY HOTLINE BAR - Persistent across all routes (desktop only) */}
      <div className="hidden md:block bg-[#164E63] text-white py-3 px-4 text-xs font-semibold tracking-wider uppercase text-center border-b border-[#22B8CF]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#22B8CF] animate-pulse"></span>
            <span className="lang-en text-[#22B8CF]">TEXAS · MONTERREY PRIVATE MEDICAL COORDINATION</span>
            <span className="lang-es text-[#22B8CF]">COORDINACIÓN MÉDICA PRIVADA · TEXAS · MONTERREY</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white/80">
            <span className="lang-en">Bilingual coordination available</span>
            <span className="lang-es font-sans">Coordinación bilingüe disponible</span>
            <span className="flex items-center gap-1.5 font-semibold shrink-0 select-none">
              <PhoneCall size={12} className="text-[#22B8CF]" />
              <span className="lang-en text-white/70">Begin consultation today</span>
              <span className="lang-es text-white/70 font-sans">Inicia tu consulta hoy</span>
            </span>
          </div>
        </div>
      </div>

      {/* 1. HEADER (Bilingual Navigation Menu) - Persistent across all routes */}
      <header id="header" className="sticky top-0 z-40 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-11 md:h-16 lg:h-20 flex items-center justify-between">
          
          {/* Typographic Serif Logo */}
          <Link to="/" className="flex flex-col items-start select-none group">
            <span className="font-serif text-xs sm:text-sm md:text-lg lg:text-xl font-bold tracking-[0.16em] text-white leading-none">
              MTY MEDICAL
            </span>
            <span className="hidden sm:block text-[7px] md:text-[9px] font-sans font-bold tracking-[0.34em] text-[#22B8CF] uppercase mt-0.5 leading-none">
              TOURISM &bull; CONCIERGE
            </span>
          </Link>

          {/* Desktop Links with Cross-route dynamic targeting */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="text-white/80 hover:text-[#22B8CF] text-xs font-bold tracking-widest uppercase transition-colors">
              <span className="lang-en">Surgical Portfolio</span>
              <span className="lang-es">Portafolio Quirúrgico</span>
            </a>
            <a href="#why-monterrey" onClick={(e) => handleNavClick(e, "why-monterrey")} className="text-white/80 hover:text-[#22B8CF] text-xs font-bold tracking-widest uppercase transition-colors">
              <span className="lang-en">Why Monterrey?</span>
              <span className="lang-es font-sans">¿Por qué Monterrey?</span>
            </a>
            <a href="#coordination-flow" onClick={(e) => handleNavClick(e, "coordination-flow")} className="text-white/80 hover:text-[#22B8CF] text-xs font-bold tracking-widest uppercase transition-colors">
              <span className="lang-en">Coordinated Flow</span>
              <span className="lang-es">El Flujo</span>
            </a>
          </nav>

          {/* Language toggle <select id="lang-toggle"> and strategic Intake Header CTA */}
          <div className="flex items-center gap-4">
            
            {/* Language toggle — shows the language to switch TO, not current */}
            <button
              id="lang-toggle"
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className="bg-[#164E63] text-white text-[10px] md:text-xs font-bold border border-white/20 px-2 md:px-3 py-1 md:py-2 rounded-none focus:outline-none focus:border-[#22B8CF]/80 hover:bg-[#164E63]/80 cursor-pointer uppercase tracking-wider h-8 md:h-10"
            >
              {lang === "en" ? "Español" : "English"}
            </button>

            <button 
              onClick={handleStartFileClick}
              className="hidden lg:block bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] font-bold text-[10px] py-2 md:py-2.5 px-4 md:px-5 rounded-none tracking-widest uppercase transition-all max-h-10 cursor-pointer"
            >
              <span className="lang-en">Begin Consultation</span>
              <span className="lang-es">Comenzar Consulta</span>
            </button>

            {/* Mobile burger toggle */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 text-white focus:outline-none flex items-center justify-center w-11 h-11 cursor-pointer"
              aria-label="Toggle Navigation Panel"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </div>
      </header>

      {/* MOBILE NAV DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden fixed inset-x-0 bg-[#0F172A] text-white border-b border-white/10 shadow-2xl z-30"
          >
            <div className="px-6 py-6 space-y-4 flex flex-col font-sans text-sm">
              <a 
                href="#services" 
                onClick={(e) => handleNavClick(e, "services")}
                className="text-white/90 hover:text-[#22B8CF] text-xs font-bold tracking-widest uppercase py-3 border-b border-white/5"
              >
                <span className="lang-en">Surgical Portfolio</span>
                <span className="lang-es">Portafolio Quirúrgico</span>
              </a>
              <a 
                href="#why-monterrey" 
                onClick={(e) => handleNavClick(e, "why-monterrey")}
                className="text-white/90 hover:text-[#22B8CF] text-xs font-bold tracking-widest uppercase py-3 border-b border-white/5"
              >
                <span className="lang-en">Why Monterrey?</span>
                <span className="lang-es font-sans text-[11px]">¿Por qué Monterrey?</span>
              </a>
              <a 
                href="#coordination-flow" 
                onClick={(e) => handleNavClick(e, "coordination-flow")}
                className="text-white/90 hover:text-[#22B8CF] text-xs font-bold tracking-widest uppercase py-3 border-b border-white/5"
              >
                <span className="lang-en">The Flow</span>
                <span className="lang-es font-sans">El Flujo</span>
              </a>
              
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleStartFileClick();
                }}
                className="bg-[#22B8CF] text-[#0F172A] font-bold text-[11px] py-4 px-6 text-center tracking-widest uppercase mt-2 cursor-pointer"
              >
                <span className="lang-en">Begin Consultation</span>
                <span className="lang-es">Comenzar Consulta</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. DYNAMIC CONTENT PORT - Routed cleanly between homepage and SEO procedure details */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          
          {/* Mapping direct surgical procedure subpages as requested */}
          <Route path="/lasik-monterrey" element={<ProcedureDetail lang={lang} slug="lasik-monterrey" />} />
          <Route path="/gallbladder-surgery-mexico" element={<ProcedureDetail lang={lang} slug="gallbladder-surgery-mexico" />} />
          <Route path="/reflux-surgery-monterrey" element={<ProcedureDetail lang={lang} slug="reflux-surgery-monterrey" />} />
          <Route path="/laparoscopic-hysterectomy" element={<ProcedureDetail lang={lang} slug="laparoscopic-hysterectomy" />} />
          <Route path="/rhinoplasty-monterrey" element={<ProcedureDetail lang={lang} slug="rhinoplasty-monterrey" />} />
          <Route path="/smile-makeover-mexico" element={<ProcedureDetail lang={lang} slug="smile-makeover-mexico" />} />

          {/* Graceful fallback redirects */}
          <Route path="*" element={<Home lang={lang} />} />
        </Routes>
      </main>

      {/* PRICING DISCLOSURE */}
      <section id="pricing-disclaimer" className="py-8 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-[11px] text-slate-500 font-sans leading-relaxed">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 uppercase font-bold tracking-widest text-slate-600 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0 md:pr-4">
              <span className="lang-en">Pricing Disclosure</span>
              <span className="lang-es font-sans">Aviso de Precios</span>
            </div>
            <div className="md:w-3/4 font-normal">
              <p className="lang-en">
                All prices shown are baseline estimates. Final quotes are subject to individual clinical assessment by the treating surgeon. Hospital fees, lodging, and transportation costs may vary by season and availability.
              </p>
              <p className="lang-es font-sans">
                Los precios indicados son estimaciones base. La cotización final está sujeta a la valoración individual del cirujano tratante. Honorarios hospitalarios, alojamiento y traslados pueden variar según temporada y disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="footer" className="bg-[#0F172A] text-white/50 py-12 md:py-16 text-xs border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">

            {/* Column 1: Brand + Location */}
            <div className="space-y-4">
              <span className="font-serif text-sm font-bold tracking-widest text-white block">MTY MEDICAL</span>
              <p className="text-[11px] leading-relaxed text-white/55 font-sans">
                <span className="lang-en">Private medical travel coordination connecting Texas patients with certified specialists in Monterrey.</span>
                <span className="lang-es font-sans">Coordinación privada de viajes médicos que conecta pacientes de Texas con especialistas certificados en Monterrey.</span>
              </p>
              <div className="space-y-1 text-[10px] text-white/35 font-sans">
                <p>Monterrey, Nuevo León, Mexico</p>
                <p>
                  <span className="lang-en">Serving Texas &amp; Northern Mexico</span>
                  <span className="lang-es font-sans">Atendiendo Texas y Norte de México</span>
                </p>
              </div>

              {/* Social media — minimal, brand-legitimacy signals */}
              <div className="flex items-center gap-4 pt-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61590253446637"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white/25 hover:text-white/70 transition-colors duration-200"
                >
                  <Facebook size={13} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.instagram.com/mtymedical/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white/25 hover:text-white/70 transition-colors duration-200"
                >
                  <Instagram size={13} strokeWidth={1.5} />
                </a>
                <a
                  href={`https://wa.me/15125550199`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-white/25 hover:text-white/70 transition-colors duration-200"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Contact */}
            <div className="space-y-4">
              <span className="text-[9px] font-bold text-white/70 uppercase tracking-[0.2em] block font-sans">
                <span className="lang-en">Private Coordination</span>
                <span className="lang-es font-sans">Coordinación Privada</span>
              </span>
              <ul className="space-y-3 font-sans">
                <li>
                  <a
                    href={`https://wa.me/15125550199?text=${encodeURIComponent(
                      lang === "en"
                        ? "Hello, I'd like to learn more about MTY Medical coordination services."
                        : "Hola, me gustaría obtener información sobre los servicios de coordinación médica en MTY Medical."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22B8CF] hover:text-white transition-colors text-[11px] font-semibold"
                  >
                    <span className="lang-en">WhatsApp Consultation</span>
                    <span className="lang-es font-sans">Consulta por WhatsApp</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:concierge@mtymedical.com" className="hover:text-white transition-colors text-[11px]">
                    concierge@mtymedical.com
                  </a>
                </li>
                <li>
                  <a
                    href="#lead-capture"
                    onClick={(e) => handleNavClick(e, "lead-capture")}
                    className="text-[#22B8CF] hover:text-white transition-colors text-[11px] font-semibold"
                  >
                    <span className="lang-en">Begin Consultation</span>
                    <span className="lang-es font-sans">Comenzar Consulta</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Links */}
            <div className="space-y-4">
              <span className="text-[9px] font-bold text-white/70 uppercase tracking-[0.2em] block font-sans">
                <span className="lang-en">Navigation</span>
                <span className="lang-es font-sans">Navegación</span>
              </span>
              <ul className="space-y-2.5 text-[11px] font-sans">
                <li>
                  <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-white transition-colors">
                    <span className="lang-en">Surgical Portfolio</span>
                    <span className="lang-es font-sans">Portafolio Quirúrgico</span>
                  </a>
                </li>
                <li>
                  <a href="#coordination-flow" onClick={(e) => handleNavClick(e, "coordination-flow")} className="hover:text-white transition-colors">
                    <span className="lang-en">Patient Process</span>
                    <span className="lang-es font-sans">Proceso del Paciente</span>
                  </a>
                </li>
                <li>
                  <a href="#faq" onClick={(e) => handleNavClick(e, "faq")} className="hover:text-white transition-colors">FAQ</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    <span className="lang-en">Privacy Policy</span>
                    <span className="lang-es font-sans">Política de Privacidad</span>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Medical Disclaimer - Concise */}
          <div className="border-t border-white/10 pt-6 text-[10px] leading-relaxed text-white/30 font-sans space-y-2">
            <p className="lang-en">
              MTY Medical is a medical travel coordination service. We do not practice medicine, operate clinics, or provide clinical diagnoses. All procedures are performed by independent certified surgeons at accredited private hospitals in Monterrey, NL. Prices shown are estimates subject to individual clinical assessment.
            </p>
            <p className="lang-es font-sans">
              MTY Medical es un servicio de coordinación de viajes médicos. No ejercemos la medicina ni operamos clínicas. Los procedimientos son realizados por cirujanos certificados independientes en hospitales privados acreditados en Monterrey, NL. Los precios son estimaciones sujetas a valoración clínica individual.
            </p>
            <p className="mt-3 text-white/20">
              &copy; {new Date().getFullYear()} MTY Medical.{" "}
              <span className="lang-en">All Rights Reserved.</span>
              <span className="lang-es font-sans">Todos los Derechos Reservados.</span>
            </p>
          </div>

        </div>
      </footer>

      {/* PERSISTENT FLOATABLE: WhatsApp widget */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <a 
          href={`https://wa.me/15125550199?text=${encodeURIComponent(
            lang === "en" 
              ? "Hello, I'd like to learn more about MTY Medical coordination services." 
              : "Hola, me gustaría obtener información sobre los servicios de coordinación médica en MTY Medical."
          )}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#128C7E] hover:bg-[#25D366] text-white px-3 py-2 md:px-4 md:py-2.5 rounded-full shadow-xl transition-all duration-300 scale-100 hover:scale-105"
        >
          <span className="relative flex h-1.5 w-1.5 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-300"></span>
          </span>
          <MessageSquare size={13} className="text-white shrink-0" />
          <span className="hidden sm:block text-[10px] font-semibold uppercase tracking-wider font-sans">
            <span className="lang-en">Concierge</span>
            <span className="lang-es font-sans">Concierge</span>
          </span>
        </a>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
