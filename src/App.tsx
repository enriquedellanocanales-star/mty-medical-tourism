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
  Briefcase
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
      
      {/* TOP EMERGENCY HOTLINE BAR - Persistent across all routes */}
      <div className="bg-[#164E63] text-white py-3 px-4 text-xs font-semibold tracking-wider uppercase text-center border-b border-[#22B8CF]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#22B8CF] animate-pulse"></span>
            <span className="lang-en text-[#22B8CF]">TEXAS-TO-MONTERREY EXECUTIVE SURGICAL CORRIDOR</span>
            <span className="lang-es text-[#22B8CF]">CORREDOR QUIRÚRGICO DE ÉLITE DE TEXAS A MONTERREY</span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-white/95">
            <span className="lang-en">BILINGUAL REGISTRARS AVAILABLE: IMMEDIATE</span>
            <span className="lang-es font-sans">REGISTRADORES BILINGÜES DISPONIBLES: INMEDIATO</span>
            <span className="flex items-center gap-1.5 font-bold shrink-0 text-white/90 select-none">
              <PhoneCall size={13} className="text-[#22B8CF]" /> 
              <span className="lang-en text-[#22B8CF]/90">Patient Coordination Team</span>
              <span className="lang-es text-[#22B8CF]/90 font-sans">Equipo de Coordinación</span>
            </span>
          </div>
        </div>
      </div>

      {/* 1. HEADER (Bilingual Navigation Menu) - Persistent across all routes */}
      <header id="header" className="sticky top-0 z-40 bg-[#0F172A]/95 backdrop-blur-md border-b border-white/5 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between">
          
          {/* Typographic Serif Logo - High Architectural Aesthetic */}
          <Link to="/" className="flex flex-col items-start select-none group">
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-[0.16em] text-white leading-none">
              MTY MEDICAL
            </span>
            <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.34em] text-[#22B8CF] uppercase mt-1 leading-none">
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
            
            {/* Custom styled select widget */}
            <div className="relative inline-block text-left">
              <select 
                id="lang-toggle"
                value={lang} 
                onChange={(e) => setLang(e.target.value as "en" | "es")}
                className="bg-[#164E63] text-white text-xs font-bold border border-white/20 px-3 py-2 rounded-none focus:outline-none focus:border-[#22B8CF]/80 hover:bg-[#164E63]/80 cursor-pointer uppercase tracking-wider h-11"
              >
                <option value="en">English (EN)</option>
                <option value="es">Español (ES)</option>
              </select>
            </div>

            <button 
              onClick={handleStartFileClick}
              className="hidden md:block bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] font-extrabold text-xs py-3.5 px-6 rounded-none tracking-widest uppercase transition-all max-h-12 cursor-pointer"
            >
              <span className="lang-en">Start File Intake</span>
              <span className="lang-es">Comenzar Registro</span>
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
                className="bg-[#22B8CF] text-[#0F172A] font-extrabold text-[11px] py-4 px-6 text-center tracking-widest uppercase mt-2 cursor-pointer"
              >
                <span className="lang-en">Start File Intake</span>
                <span className="lang-es">Comenzar Registro</span>
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

      {/* 10. FIXED BASELINE PRICING RULES DISCLAIMER - Persistent */}
      <section id="pricing-disclaimer" className="py-12 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-[11px] sm:text-xs text-slate-500 font-sans tracking-wide leading-relaxed">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4 uppercase font-bold tracking-widest text-slate-600 border-b md:border-b-0 md:border-r border-slate-200 pb-3 md:pb-0 md:pr-4">
              <span className="lang-en">Rates &amp; Dynamic Pricing Disclosure</span>
              <span className="lang-es">Desglose Legal de Tarifas y Variaciones</span>
            </div>
            <div className="md:w-3/4 space-y-2.5 font-normal">
              <p className="lang-en">
                All prices presented are strategic baseline approximations calculated during spring fiscal analysis. Individual clinical quotes remain strictly subject to direct review of personal medical imaging, ultrasound records, and active blood works by our respective chief operations surgeons. Operating room fees, clinical materials, and local lodging baseline calculations may experience seasonal shifts, airport corridor tax variances, and airline schedule alterations.
              </p>
              <p className="lang-es">
                Los montos presentados corresponden a estimaciones y simulaciones base. La cotización quirúrgica final está estrictamente sujeta a la valoración individual de los estudios de imagen, laboratorios e indicación del cirujano certificado tratante. Tarifas hospitalarias, honorarios quirúrgicos y hospedaje de recuperación pueden registrar variaciones según inflación transfronteriza, temporada alta turística y disponibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Persistent footer (Addresses, Legal Medical Disclaimer and Confidential Privacy frameworks) */}
      <footer id="footer" className="bg-[#0F172A] text-white/50 py-16 text-xs border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Column 1: Brand details */}
            <div className="space-y-4 font-sans">
              <span className="font-serif text-lg font-bold tracking-widest text-white block">MTY MEDICAL</span>
              <p className="text-[11px] leading-relaxed">
                <span className="lang-en">Premium medical travel concierge systems connecting USA residents with board-certified operating teams in San Pedro Garza García and Monterrey, NL.</span>
                <span className="lang-es font-sans">Enlace de medicina corporativa internacional. Conectamos pacientes norteamericanos con infraestructura y cirujanos de élite en Nuevo León.</span>
              </p>
              <div className="text-[10px] text-slate-400">
                <span>&copy; {new Date().getFullYear()} MTY Medical. </span>
                <span className="lang-en">All Rights Reserved.</span>
                <span className="lang-es">Todos los Derechos Reservados.</span>
              </div>
            </div>

            {/* Column 2: Corridors desk coordinates */}
            <div className="space-y-3">
              <span className="font-serif text-xs font-bold text-white uppercase tracking-widest block">Operational Desks</span>
              <ul className="space-y-2 font-mono text-[11px] leading-relaxed">
                <li>
                  <strong className="text-white block">Dallas / Austin Office:</strong>
                  <span>901 Congress Avenue, Downtown Austin, TX 78701</span>
                </li>
                <li>
                  <strong className="text-white block">Monterrey Clinical Port:</strong>
                  <span>Av. Vasconcelos 310, San Pedro Garza García, NL 66220</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Telephony Hotlines */}
            <div className="space-y-3 font-sans">
              <span className="font-serif text-xs font-bold text-white uppercase tracking-widest block font-sans">Patient Support</span>
              <ul className="space-y-2 text-[11px]">
                <li>
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Registry & Contact:</span>
                  <span className="text-white font-bold block">
                    <span className="lang-en">Patient Coordination Team</span>
                    <span className="lang-es">Equipo de Coordinación de Pacientes</span>
                  </span>
                </li>
                <li>
                  <span className="text-slate-400 block uppercase tracking-wider text-[10px]">Immediate Response:</span>
                  <a href="#lead-capture" onClick={(e) => handleNavClick(e, "lead-capture")} className="text-[#22B8CF] hover:underline font-bold block mt-1">
                    <span className="lang-en">Start Secure Intake</span>
                    <span className="lang-es font-sans">Iniciar Registro Confidencial</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Persistent Links */}
            <div className="space-y-3 font-sans">
              <span className="font-serif text-xs font-bold text-white uppercase tracking-widest block font-sans">Corridor Links</span>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="hover:text-white transition-colors">Surgical Portfolio</a>
                <a href="#why-monterrey" onClick={(e) => handleNavClick(e, "why-monterrey")} className="hover:text-white transition-colors">Our Standard</a>
                <a href="#package-includes" onClick={(e) => handleNavClick(e, "package-includes")} className="hover:text-white transition-colors">Inclusions</a>
                <a href="#coordination-flow" onClick={(e) => handleNavClick(e, "coordination-flow")} className="hover:text-white transition-colors">The Flow</a>
                <a href="#faq" onClick={(e) => handleNavClick(e, "faq")} className="hover:text-white transition-colors">FAQ Desk</a>
                <a href="#lead-capture" onClick={(e) => handleNavClick(e, "lead-capture")} className="hover:text-white font-bold text-[#22B8CF] transition-colors">Start Ingress</a>
              </div>
            </div>

          </div>

          {/* MEDICAL DISCLAIMER - VERY RIGOROUS CLINICAL BOUNDARIES FOR BORDER PROTECTION */}
          <div className="border-t border-white/10 pt-8 text-[10px] sm:text-[11px] leading-relaxed text-slate-500 space-y-3 font-sans">
            <div className="flex items-center gap-1.5 text-slate-400">
              <ShieldAlert size={14} className="text-[#22B8CF] shrink-0" />
              <strong className="uppercase tracking-widest">
                <span className="lang-en">Bicultural Legal Medical Disclaimer</span>
                <span className="lang-es">Aviso Legal de Deslinde de Responsabilidad Médica</span>
              </strong>
            </div>
            
            <p className="lang-en font-sans normal-case">
              MTY Medical remains strictly a medical tourism agency coordinating administrative travel logs, lodging interfaces, bilingual shuttle transportation, and private surgeon introductions. MTY Medical does not carry malpractice insurance, operate clinics, practice medicine directly, act as an emergency trauma provider, or provide clinical diagnostics of any form. All surgical assessments, operation checklists, anesthesia criteria, surgical liabilities, and medical therapies are the exclusive credentialed responsibility of our aligned certified board surgeons and private surgical clinics in Monterrey, NL.
            </p>
            <p className="lang-es font-sans normal-case">
              MTY Medical actúa únicamente como una agencia coordinadora de trayectos logísticos, hospitalidad hotelera, transporte privado y enlace administrativo bilingüe con médicos independientes. MTY Medical no ejerce la medicina, no emite diagnósticos terapéuticos directos ni asume la responsabilidad clínica de las intervenciones quirúrgicas. Todo dictamen de idoniedad, técnica quirúrgica, manejo de anestesia y seguimiento clínico postoperatorio es responsabilidad exclusiva de los cirujanos certificados tratantes y los hospitales privados seleccionados en Monterrey, Nuevo León.
            </p>
          </div>

        </div>
      </footer>

      {/* PERSISTENT FLOATABLE: WhatsApp widget */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2">
        <a 
          href={`https://wa.me/15125550199?text=${encodeURIComponent(
            lang === "en" 
              ? "Hello, I am seeking details regarding premium medical flights & coordinated surgical logistics at MTY Medical." 
              : "Hola, solicito información sobre vuelos premium y coordinación logística quirúrgica en MTY Medical."
          )}`}
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-[#128C7E] hover:bg-[#25D366] text-white px-4 py-2.5 rounded-full shadow-2xl transition-all duration-300 group max-h-12 scale-100 hover:scale-105"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-300"></span>
          </span>
          <MessageSquare size={16} className="text-white" />
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider block font-sans">
            <span className="lang-en">Chat with an Executive Concierge</span>
            <span className="lang-es font-sans">Hablar con un Coordinador</span>
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
