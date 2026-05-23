import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { proceduresData } from "../data/procedures";
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

// Robust image element wrapper with safe Unsplash backup mechanism
const SafeImage = ({ 
  src, 
  fallback, 
  alt, 
  className, 
  id 
}: { 
  src: string; 
  fallback: string; 
  alt: string; 
  className?: string; 
  id?: string; 
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img 
      id={id}
      src={imgSrc} 
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }} 
      alt={alt} 
      className={className}
      referrerPolicy="no-referrer"
    />
  );
};

interface HomeProps {
  lang: "en" | "es";
}

export default function Home({ lang }: HomeProps) {
  const location = useLocation();

  // Accordion active FAQ index tracker
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Questionnaire wizard state
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    texasLocation: "",
    procedure: "",
    medicalFiles: [] as string[],
    clinicalNotes: "",
    timeframe: "",
    hsaPlanning: "",
    contactMethod: "",
    termsAccepted: false
  });

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep((prev) => (prev + 1) as 1 | 2 | 3);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const handleCheckboxChange = (fileName: string) => {
    setFormData(prev => {
      const alreadySelected = prev.medicalFiles.includes(fileName);
      const updated = alreadySelected 
        ? prev.medicalFiles.filter(item => item !== fileName)
        : [...prev.medicalFiles, fileName];
      return { ...prev, medicalFiles: updated };
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      texasLocation: "",
      procedure: "",
      medicalFiles: [],
      clinicalNotes: "",
      timeframe: "",
      hsaPlanning: "",
      contactMethod: "",
      termsAccepted: false
    });
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const leadCaptureRef = useRef<HTMLDivElement>(null);

  const scrollToLeadCaptureWithProcedure = (procedureValue: string) => {
    setFormData(prev => ({ ...prev, procedure: procedureValue }));
    leadCaptureRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Pre-selection and scrolling from router navigation state (CRO strategy)
  useEffect(() => {
    if (location.state?.preselect) {
      scrollToLeadCaptureWithProcedure(location.state.preselect);
    } else if (location.state?.scrollTarget) {
      const el = document.getElementById(location.state.scrollTarget);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 80);
      }
    } else if (location.hash === "#lead-capture") {
      leadCaptureRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [location]);

  return (
    <>
      {/* 2. HERO SECTION */}
      <section 
        id="hero" 
        className="relative text-white pt-28 pb-28 sm:pt-40 sm:pb-40 lg:pt-52 lg:pb-52 overflow-hidden flex items-center justify-start min-h-[80vh] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/skyline-de-monterrey.webp'), url('/assets/images/monterrey-skyline.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40 z-5"></div>
        
        <div className="relative max-w-[1200px] w-full mx-auto px-8 md:px-16 z-10 text-left flex flex-col items-start justify-center gap-6 sm:gap-8">
          
          <span className="text-[#22B8CF] text-xs font-bold tracking-[0.35em] uppercase block">
            <span className="lang-en">PRIVATE MEDICAL CONCIERGE</span>
            <span className="lang-es font-sans">ENLACE LOGÍSTICO MÉDICO PRIVADO</span>
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-serif font-light tracking-wide text-white uppercase leading-[1.12] max-w-4xl">
            <span className="lang-en block">Premium Surgical Access <br className="hidden sm:inline" /><span className="font-light italic shrink-0 text-slate-300 normal-case tracking-normal">&amp; Private Travel Coordination</span></span>
            
            <span className="lang-es block">Acceso Quirúrgico Premium <br className="hidden sm:inline" /><span className="font-light italic shrink-0 text-slate-300 normal-case tracking-normal">&amp; Coordinación Privada de Viajes</span></span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl font-sans normal-case">
            <span className="lang-en">
              Connecting Texas patients with certified surgeons in Monterrey through executive-level logistical care.
            </span>
            <span className="lang-es font-sans">
              Conectando pacientes de Texas con cirujanos certificados en Monterrey mediante atención logística ejecutiva.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-start justify-start gap-4 w-full sm:w-auto pt-6 z-10">
            <button 
              onClick={() => scrollToLeadCaptureWithProcedure("")}
              className="bg-[#22B8CF] hover:bg-[#22B8CF]/95 text-[#0F172A] font-extrabold text-xs py-4 px-12 tracking-widest uppercase transition-all duration-300 text-center cursor-pointer shadow-lg shadow-[#0F172A]/40 rounded-none h-13 flex items-center justify-center"
            >
              <span className="lang-en">Request Coordination Quote</span>
              <span className="lang-es">Solicitar Cotización de Coordinación</span>
            </button>
          </div>
          
        </div>
      </section>

      {/* 3. SURGICAL PORTFOLIO INCLUSIONS */}
      <section id="services" className="py-24 sm:py-32 lg:py-40 bg-white border-b border-slate-100 relative">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#164E63] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              <span className="lang-en">COORDINATED SURGICAL SPECIALTIES</span>
              <span className="lang-es">ESPECIALIDADES QUIRÚRGICAS COORDINADAS</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider uppercase text-[#0F172A]">
              <span className="lang-en">Surgical Portfolio</span>
              <span className="lang-es font-sans text-2xl sm:text-3xl font-bold">Portafolio Quirúrgico</span>
            </h2>
            <div className="h-px w-16 bg-[#164E63]/30 mx-auto my-3"></div>
            <p className="text-xs sm:text-sm text-[#64748B] uppercase tracking-widest max-w-xl mx-auto normal-case leading-relaxed">
              <span className="lang-en">Professional coordination, pre-op screenings, hospital surgical facility, surgeon fees, & recovery lodging baseline.</span>
              <span className="lang-es">Gastos logísticos coordinados: honorarios de cirujanos, quirófano de alta especialidad, hospitalización, estancia residencial y traslados.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-[1200px] mx-auto">
            {proceduresData.map((proc) => {
              const info = lang === "en" ? proc.en : proc.es;
              return (
                <div key={proc.slug} className="bg-[#FAF9F6] border border-slate-200/60 p-8 hover:bg-[#F3F6F8] hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <h3 className="font-serif text-xl font-bold tracking-wide text-[#0F172A] leading-snug mb-2 uppercase">
                      {info.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#164E63] font-sans font-semibold mb-4 uppercase tracking-wider">
                      <span className="lang-en">Starting at <span className="font-bold text-[#22B8CF]">{proc.startingPrice}</span></span>
                      <span className="lang-es font-sans">Desde <span className="font-bold text-[#22B8CF]">{proc.startingPrice}</span></span>
                    </p>

                    <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6 font-sans">
                      {info.overview}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200/50 mt-4">
                    <Link 
                      to={`/${proc.slug}`}
                      className="text-[11px] font-extrabold text-[#164E63] hover:text-[#22B8CF] uppercase tracking-wider flex items-center gap-1 transition-colors"
                    >
                      <span className="lang-en">Detailed Specs</span>
                      <span className="lang-es">Especificaciones</span>
                      <span>&rarr;</span>
                    </Link>
                    
                    <button 
                      onClick={() => scrollToLeadCaptureWithProcedure(proc.procedureKey)}
                      className="text-[11px] font-extrabold text-[#22B8CF] hover:text-[#164E63] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <span className="lang-en">Request Quote</span>
                      <span className="lang-es">Solicitad</span>
                      <span>&rarr;</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. WHY MONTERREY */}
      <section id="why-monterrey" className="py-24 sm:py-32 lg:py-40 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#22B8CF] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              <span className="lang-en">THE GEOGRAPHIC &amp; LOGISTIC CHOICE</span>
              <span className="lang-es font-sans">CRITERIOS DE SELECCIÓN LOGÍSTICA</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider text-[#0F172A] uppercase">
              <span className="lang-en">Why Monterrey?</span>
              <span className="lang-es font-sans">¿Por qué Monterrey?</span>
            </h2>
            <div className="h-px w-16 bg-[#164E63]/30 mx-auto my-3 font-semibold"></div>
            <p className="text-[11px] sm:text-xs text-[#64748B] tracking-widest uppercase mb-4">
              <span className="lang-en">Bicultural private support with unmatched geographic accessibility</span>
              <span className="lang-es font-sans">Máxima seguridad clínica y logística a minutos de la frontera de Texas</span>
            </p>
          </div>

          {/* 4 Bullets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
            
            {/* Bullet 1 - Proximity */}
            <div className="bg-white p-8 border border-slate-200/50 hover:shadow-md transition-all duration-300">
              <span className="text-[#22B8CF]/30 font-serif text-2xl font-bold block mb-3">01</span>
              <h3 className="font-serif text-base font-bold tracking-widest uppercase text-[#0F172A] mb-3">
                <span className="lang-en">Proximity</span>
                <span className="lang-es">Proximidad</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                <span className="lang-en">Just a short sub-90 minute flight from Texas hubs or a direct chauffeured premium transit over secure corridors.</span>
                <span className="lang-es">A solo 90 minutos de vuelo desde Houston o Dallas, o mediante trayectos terrestres coordinados de primer nivel.</span>
              </p>
            </div>

            {/* Bullet 2 - Certified Physicians */}
            <div className="bg-white p-8 border border-slate-200/50 hover:shadow-md transition-all duration-300">
              <span className="text-[#22B8CF]/30 font-serif text-2xl font-bold block mb-3">02</span>
              <h3 className="font-serif text-base font-bold tracking-widest uppercase text-[#0F172A] mb-3">
                <span className="lang-en">Certified Physicians</span>
                <span className="lang-es font-sans">Médicos Certificados</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                <span className="lang-en">Every selected specialist holds national council credentials and bicultural clinical fellowship experience.</span>
                <span className="lang-es">Cada especialista cuenta con certificación vigente de consejo médico y experiencia de posgrado bicultural.</span>
              </p>
            </div>

            {/* Bullet 3 - Private Accredited Hospitals */}
            <div className="bg-white p-8 border border-slate-200/50 hover:shadow-md transition-all duration-300">
              <span className="text-[#22B8CF]/30 font-serif text-2xl font-bold block mb-3">03</span>
              <h3 className="font-serif text-base font-bold tracking-widest uppercase text-[#0F172A] mb-3">
                <span className="lang-en">Private Accredited Hospitals</span>
                <span className="lang-es font-sans font-bold">Hospitales Privados Acreditados</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                <span className="lang-en">Operating facilities matching gold-standard safety parameters analogous to international safety benchmarks.</span>
                <span className="lang-es">Instalaciones acreditadas de alto nivel tecnológico que operan bajo rigurosos protocolos internacionales de seguridad.</span>
              </p>
            </div>

            {/* Bullet 4 - Human-Led Coordination */}
            <div className="bg-white p-8 border border-slate-200/50 hover:shadow-md transition-all duration-300">
              <span className="text-[#22B8CF]/30 font-serif text-2xl font-bold block mb-3">04</span>
              <h3 className="font-serif text-base font-bold tracking-widest uppercase text-[#0F172A] mb-3">
                <span className="lang-en">Human-Led Coordination</span>
                <span className="lang-es font-sans">Coordinación Humana</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                <span className="lang-en">Continuous personal administrative guidance. Elegant, personalized assistance instead of automated chatbot routing.</span>
                <span className="lang-es">Acompañamiento personal continuo y dedicado, garantizando respuestas directas en lugar de chatbots automatizados.</span>
              </p>
            </div>

          </div>

          {/* Aesthetic Recovery Concept Box - San Pedro Garza García Executive lodging */}
          <div className="mt-16 bg-[#0F172A] text-white p-8 md:p-12 border border-white/5 relative overflow-hidden max-w-[1200px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-[#164E63]/40 via-transparent to-transparent z-0"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 flex flex-col items-start gap-4">
                <span className="text-[#22B8CF] text-[9.5px] font-bold tracking-[0.25em] uppercase">
                  <span className="lang-en font-mono font-bold">CONCIERGE HOUSING CORRIDOR</span>
                  <span className="lang-es font-bold">CONCIERGE DE ALOJAMIENTO PREFERENCIAL</span>
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider uppercase leading-snug">
                  <span className="lang-en">Executive, Secure Recovery Accommodations</span>
                  <span className="lang-es font-sans text-xl sm:text-2xl font-bold">Alojamiento Ejecutivo de Recuperación</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans normal-case">
                  <span className="lang-en">
                    Our clients are lodged in vetted, private executive recovery accommodations in San Pedro Garza García—Mexico’s most secure premium district. These spaces are fully suited for peaceful post-surgical resting, with access to clinical-grade care elements, custom menus coordinates, and dedicated private transiting back and forth to medical hubs.
                  </span>
                  <span className="lang-es font-sans">
                    Nuestros clientes descansan en exclusivas suites de alojamiento ejecutivo en San Pedro Garza García, la zona urbana de mayor seguridad en el país. Los espacios garantizan un reposo confortable, alimentación adaptada, y enlace directo de chofer privado a las citas clínicas.
                  </span>
                </p>
              </div>

              {/* Recovery Suites Showcase Frame */}
              <div className="lg:col-span-5 w-full flex justify-center bg-black/20 border border-white/10 p-2 shadow-xl">
                <div className="relative overflow-hidden aspect-[16/10] w-full bg-[#164E63]/30 group">
                  <SafeImage 
                    id="img-recovery"
                    src="assets/images/procedures/recovery-suite.jpg" 
                    fallback="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80" 
                    alt="Bespoke luxury business recovery bedroom with medical logistics support"
                    className="w-full h-full object-cover grayscale opacity-75 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-2 left-2 bg-[#0F172A]/90 border border-[#22B8CF]/40 text-white font-mono text-[9px] uppercase px-2 py-0.5 tracking-widest">
                    <span className="lang-en font-sans text-[8px]">RECOVERY SUITES</span>
                    <span className="lang-es">ALBERGUE DE CONVENIO</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. INCLUSIONS VS EXCEPTIONS */}
      <section id="package-includes" className="py-24 sm:py-32 lg:py-40 bg-white border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#164E63] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              <span className="lang-en font-mono font-bold">TRANSPARENT COOPERATIVE AGREEMENT</span>
              <span className="lang-es font-bold">ALCANCE DEFINITIVO DE LA ASISTENCIA</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider uppercase text-[#0F172A]">
              <span className="lang-en">Scope of Coordinated Coverage</span>
              <span className="lang-es font-sans text-2xl sm:text-3xl font-bold">Inclusiones vs Responsabilidades</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#164E63]/30 mx-auto my-3"></div>
            <p className="text-xs sm:text-sm text-[#64748B] tracking-widest uppercase mt-2">
              <span className="lang-en">Providing exact clarity on package borders for legal and patient tranquility</span>
              <span className="lang-es">Claridad absoluta para blindar las operaciones comerciales del corredor transfronterizo</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2 max-w-[1200px] mx-auto">
            
            {/* Column 1: YOUR PACKAGE INCLUDES */}
            <div className="bg-[#164E63]/5 border border-[#164E63]/15 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-[#164E63]">
                  <ShieldCheck size={20} className="text-[#22B8CF] shrink-0" />
                  <h3 className="font-serif text-base sm:text-lg font-bold tracking-widest uppercase">
                    <span className="lang-en">Your Package Includes</span>
                    <span className="lang-es">Elementos Incluidos</span>
                  </h3>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-[#1E293B]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-none bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&bull;</span>
                    <div>
                      <strong className="text-[#0F172A] uppercase tracking-wider block text-[11px] sm:text-xs font-bold">
                        <span className="lang-en">Surgical Coordination</span>
                        <span className="lang-es font-sans font-bold">Coordinación Médica-Quirúrgica</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal font-sans">
                        <span className="lang-en">Pre-op remote documentation triage, medical history assessment, and registrar scheduling.</span>
                        <span className="lang-es">Integración del expediente clínico, valoración preoperatoria virtual y coordinación de fechas.</span>
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-none bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&bull;</span>
                    <div>
                      <strong className="text-[#0F172A] uppercase tracking-wider block text-[11px] sm:text-xs">
                        <span className="lang-en">Hospital &amp; Clinical Facility</span>
                        <span className="lang-es font-sans">Instalaciones Hospitalarias Corporativas</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal">
                        <span className="lang-en">Operating room access, private recovery room, post-op care, meals inside clinic.</span>
                        <span className="lang-es font-sans">Suite clínica de recuperación privada, equipo de anestesiología y honorarios.</span>
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-none bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&bull;</span>
                    <div>
                      <strong className="text-[#0F172A] uppercase tracking-wider block text-[11px] sm:text-xs">
                        <span className="lang-en">5-Star Lodging &amp; Recovery Stay</span>
                        <span className="lang-es">Estancia Ejecutiva de 5 Estrellas</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal font-sans">
                        <span className="lang-en">Vetted partner boutique business hotel nights for post-discharge sanitation care.</span>
                        <span className="lang-es">Noches de hotel corporativo de alta gama adaptado para la recuperación postquirúrgica.</span>
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-none bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&bull;</span>
                    <div>
                      <strong className="text-[#0F172A] uppercase tracking-wider block text-[11px] sm:text-xs font-bold">
                        <span className="lang-en">Private Bicultural Transportation</span>
                        <span className="lang-es font-sans font-bold">Transporte Privado Traslados Cortos</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal">
                        <span className="lang-en">Chofere-conducted SUV from Monterrey target terminals to hotel and operating clinic.</span>
                        <span className="lang-es font-sans text-xs">Pick-up en terminal aérea y traslado bilingüe privado en SUV ejecutiva a hotel y clínica.</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-t border-[#164E63]/20 pt-4 mt-6 text-xs text-[#164E63] font-bold">
                <span className="lang-en">&bull; Comprehensive logistics desk at patient disposal 24/7</span>
                <span className="lang-es">&bull; Mesa de soporte logístico transfronterizo disponible 24/7</span>
              </div>
            </div>

            {/* Column 2: NOT INCLUDED UNLESS SPECIFIED */}
            <div className="bg-amber-500/5 border border-amber-500/15 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-6 text-amber-800">
                  <ShieldAlert size={20} className="text-amber-600 shrink-0" />
                  <h3 className="font-serif text-base sm:text-lg font-bold tracking-widest uppercase">
                    <span className="lang-en font-serif">Not Included Unless Specified</span>
                    <span className="lang-es font-sans">Exclusiones Expresas del Paquete</span>
                  </h3>
                </div>

                <ul className="space-y-4 text-xs sm:text-sm text-[#1E293B]">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-none bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&times;</span>
                    <div>
                      <strong className="text-[#0F172A] uppercase tracking-wider block text-[11px] sm:text-xs">
                        <span className="lang-en">International Airline Flights</span>
                        <span className="lang-es font-sans">Boletos de Avión Internacionales</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal font-sans">
                        <span className="lang-en">Commercial flights or private jet charter rates (coordinated separately based on timing).</span>
                        <span className="lang-es">Boletos aéreos de aerolíneas comerciales o jets privados desde aeropuertos de Texas.</span>
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-none bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&times;</span>
                    <div>
                      <strong className="text-[#0F172A] uppercase tracking-wider block text-[11px] sm:text-xs">
                        <span className="lang-en font-sans font-bold">Extra Lodging Companions</span>
                        <span className="lang-es">Acompañantes Adicionales no Declarados</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal font-sans">
                        <span className="lang-en">Additional rooms, hotel keys, or extensive family lodging packs outside specified quotes.</span>
                        <span className="lang-es">Habitaciones extra o boletos de acompañamiento no previstos en el presupuesto original.</span>
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-none bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&times;</span>
                    <div>
                      <strong className="text-[#0F172A] uppercase tracking-wider block text-[11px] sm:text-xs">
                        <span className="lang-en">Gourmet Meals and Luxury bills</span>
                        <span className="lang-es">Gastos Personales, Restaurantes de Lujo</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal font-sans">
                        <span className="lang-en">High-end steakhouse bills, bar tabs, premium room service outside of patient clinical diets.</span>
                        <span className="lang-es">Cenas gourmet fuera de los planes clínicos del hotel y cuentas personales en distritos de ocio.</span>
                      </span>
                    </div>
                  </li>

                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-none bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">&times;</span>
                    <div>
                      <strong className="text-[#0F172A] uppercase tracking-wider block text-[11px] sm:text-xs font-sans font-bold">
                        <span className="lang-en">Unrelated Chronic Pathologies</span>
                        <span className="lang-es">Atención de Patologías Preexistentes</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal">
                        <span className="lang-en">Handling of completely independent preexisting medical emergencies or dental procedures during travel.</span>
                        <span className="lang-es font-sans text-xs">Atención médica de urgencias no vinculadas al procedimiento quirúrgico coordinado planificado.</span>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="border-t border-amber-500/20 pt-4 mt-6 text-xs text-amber-800 font-bold">
                <span className="lang-en">&bull; Flight booking desk available for separated itinerary setup</span>
                <span className="lang-es">&bull; Enlace logístico disponible para planeamiento externo de vuelos</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. COORDINATION FLOW (The Flow) */}
      <section id="coordination-flow" className="py-24 sm:py-32 lg:py-40 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#164E63] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              <span className="lang-en">STEP-BY-STEP PATIENT CORRIDOR</span>
              <span className="lang-es font-sans">FLUJO DE PROCESO LOGÍSTICO</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider uppercase text-[#0F172A]">
              <span className="lang-en">From Intake to Recovery: The Flow</span>
              <span className="lang-es font-sans">El Proceso de Coordinación Quirúrgica</span>
            </h2>
            <div className="h-px w-16 bg-[#164E63]/30 mx-auto my-3 font-semibold"></div>
            <p className="text-[11px] sm:text-xs text-[#64748B] tracking-widest uppercase">
              <span className="lang-en font-sans">Designed for safety, discretion, and absolute medical safety</span>
              <span className="lang-es font-sans font-bold">Monitoreado en tiempo real con estándares de atención bicultural de confianza</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative max-w-[1200px] mx-auto z-10">
            {/* Connector line on desktop */}
            <div className="hidden lg:block absolute top-[28%] left-[15%] right-[15%] h-px bg-slate-200 z-0"></div>

            {/* Step 1: Confidential Request */}
            <div className="bg-white p-8 border border-slate-200/50 shadow-sm relative z-10 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#0F172A] text-white font-serif font-bold text-lg flex items-center justify-center mb-6 group-hover:bg-[#22B8CF] group-hover:text-[#0F172A] transition-colors">
                I
              </div>
              <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-[#0F172A] mb-3">
                <span className="lang-en">I. Confidential Request</span>
                <span className="lang-es font-sans">I. Solicitud Confidencial</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                <span className="lang-en font-sans">
                  Submit your contact coordination coordinates. We establish immediate personal, trusted communication protecting your absolute discretion.
                </span>
                <span className="lang-es">
                  Envíe sus datos de contacto iniciales. Establecemos de inmediato una comunicación personal directa y de absoluta reserva.
                </span>
              </p>
            </div>

            {/* Step 2: Human Coordination */}
            <div className="bg-white p-8 border border-slate-200/50 shadow-sm relative z-10 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#0F172A] text-white font-serif font-bold text-lg flex items-center justify-center mb-6 group-hover:bg-[#22B8CF] group-hover:text-[#0F172A] transition-colors">
                II
              </div>
              <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-[#0F172A] mb-3">
                <span className="lang-en">II. Human Coordination</span>
                <span className="lang-es font-sans">II. Coordinación Humana</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                <span className="lang-en font-sans">
                  An assigned personal bicultural representative guides you through certified medical options, introducing you directly to elite general or cosmetic surgeons.
                </span>
                <span className="lang-es">
                  Su administrador logístico bilingüe asignado le guía de forma personalizada, coordinando consultas directas con especialistas de alto nivel.
                </span>
              </p>
            </div>

            {/* Step 3: Executive Care */}
            <div className="bg-white p-8 border border-slate-200/50 shadow-sm relative z-10 hover:shadow-md transition-all duration-300 group">
              <div className="w-12 h-12 bg-[#0F172A] text-white font-serif font-bold text-lg flex items-center justify-center mb-6 group-hover:bg-[#22B8CF] group-hover:text-[#0F172A] transition-colors">
                III
              </div>
              <h3 className="font-serif text-lg font-bold tracking-widest uppercase text-[#0F172A] mb-3">
                <span className="lang-en">III. Executive Care</span>
                <span className="lang-es font-sans">III. Cuidado Ejecutivo</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                <span className="lang-en font-sans">
                  Experience private SUV transits, first-class accredited operating clinics, and premium business-grade recovery rooms in Monterrey's most secure districts.
                </span>
                <span className="lang-es font-sans">
                  Disfrute de transportación privada en SUV y descanso postoperatorio asistido en suites hoteleras óptimas en el distrito de mayor seguridad de la metrópoli.
                </span>
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. PATIENT EXPERIENCES */}
      <section id="patient-experience" className="py-20 sm:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-[#164E63] text-xs font-bold tracking-[0.25em] uppercase block mb-3">
              <span className="lang-en font-mono">BILINGUAL PATIENT ANTHOLOGY</span>
              <span className="lang-es">CRÓNICAS DE RECUPERACIÓN REALES</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider text-[#0F172A] uppercase">
              <span className="lang-en">The Texas Patient Archive</span>
              <span className="lang-es font-sans">Testimonios de Pacientes de Texas</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#164E63]/30 mx-auto my-3"></div>
            <p className="text-[11px] sm:text-xs text-[#64748B] tracking-widest uppercase">
              <span className="lang-en">True surgical narratives with curated bicultural oversight. No generic models or stock actors.</span>
              <span className="lang-es">Historias y crónicas clínicas compartidas por pacientes con absoluta privacidad de identidad</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Experience Card 1 - Gallbladder from Dallas */}
            <div className="bg-[#FAFAF9] p-6 sm:p-8 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4 animate-pulse">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <h4 className="font-serif text-lg font-bold uppercase text-[#0F172A] tracking-wider leading-snug mb-3">
                  <span className="lang-en">"Absolutely seamless gallbladder coordination"</span>
                  <span className="lang-es font-sans">"Logística impecable de cirugía de vesícula"</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] italic leading-relaxed mb-6 font-sans">
                  <span className="lang-en">
                    "Faced a massive wait in Frisco and a ridiculous co-pay. Within three days of contacting MTY Medical, I was inside an executive SUV in Monterrey. The surgical staff was amazing, spoke perfect English, and my recovery in San Pedro was quiet and elegant."
                  </span>
                  <span className="lang-es">
                    "Tenía un deducible altísimo en Frisco. A los tres días de contactarles, estaba en San Pedro. El cirujano bilingüe y su equipo hicieron todo sencillo. Mi estancia en el hotel ejecutivo fue de primer nivel, tranquila y muy segura."
                  </span>
                </p>
              </div>
              <div className="border-t border-slate-200/50 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#0F172A] block uppercase">Kenneth R.</span>
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Dallas, Frisco Area</span>
                </div>
                <span className="bg-[#164E63]/10 text-[#164E63] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
                  <span className="lang-en">Gallbladder</span>
                  <span className="lang-es">Vesícula</span>
                </span>
              </div>
            </div>

            {/* Experience Card 2 - LASIK from Austin */}
            <div className="bg-[#FAFAF9] p-6 sm:p-8 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <h4 className="font-serif text-lg font-bold uppercase text-[#0F172A] tracking-wider leading-snug mb-3">
                  <span className="lang-en">"Perfect visual clarity, zero delay"</span>
                  <span className="lang-es font-sans">"Visión perfecta, sin ningún retraso"</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] italic leading-relaxed mb-6 font-sans font-normal">
                  <span className="lang-en">
                    "I requested advanced laser eye options. MTY Medical booked me in a top specialized institute with computerized imaging. Combined with private airport shuttles, I saved over 50% and was back in Austin working by Monday."
                  </span>
                  <span className="lang-es font-sans">
                    "Solicité ajuste refractivo bilateral. El instituto privado contaba con equipo láser de última gama. Los traslados privados fueron puntuales. Ahorré la mitad comparado con lo cotizado en Austin y regresé sin molestias."
                  </span>
                </p>
              </div>
              <div className="border-t border-slate-200/50 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#0F172A] block uppercase">Victoria M.</span>
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">Austin, Westlake Hills</span>
                </div>
                <span className="bg-[#164E63]/10 text-[#164E63] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 font-mono">
                  <span className="lang-en">Advanced LASIK</span>
                  <span className="lang-es">Láser Ocular</span>
                </span>
              </div>
            </div>

            {/* Experience Card 3 - Reconstructive Support from San Antonio */}
            <div className="bg-[#FAFAF9] p-6 sm:p-8 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4 font-bold">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
                <h4 className="font-serif text-lg font-bold uppercase text-[#0F172A] tracking-wider leading-snug mb-3">
                  <span className="lang-en">"Elite medical team &amp; executive suites"</span>
                  <span className="lang-es font-sans">"Médicos de élite e instalaciones excelentes"</span>
                </h4>
                <p className="text-xs sm:text-sm text-[#64748B] italic leading-relaxed mb-6 font-sans">
                  <span className="lang-en">
                    "Their Nissen Reflux coordination was incredible. The doctor has a master fellowship in the US, explaining the entire surgical logic perfectly. The bicultural logistics desk was responsive to every message. Highly recommend."
                  </span>
                  <span className="lang-es">
                    "La funduplicatura laparoscópica resolvió mi reflujo grave. El cirujano se formó en EUA y el proceso logístico funcionó a la perfección. La mesa bilingüe resolvió mis dudas al instante. Totalmente recomendable."
                  </span>
                </p>
              </div>
              <div className="border-t border-slate-200/50 pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold tracking-wider text-[#0F172A] block uppercase">Eduardo G.</span>
                  <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">San Antonio, Stone Oak</span>
                </div>
                <span className="bg-[#164E63]/10 text-[#164E63] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1">
                  <span className="lang-en">Reflux Surgery</span>
                  <span className="lang-es font-sans">Cirugía Reflujo</span>
                </span>
              </div>
            </div>

          </div>

          {/* Video Placeholder Box - Design integrity placeholder */}
          <div className="mt-12 bg-slate-50 border border-slate-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#164E63] flex items-center justify-center text-[#22B8CF] shadow-md shrink-0">
                <Activity size={20} />
              </div>
              <div>
                <strong className="text-sm font-serif text-[#0F172A] block uppercase tracking-wide font-bold">
                  <span className="lang-en">VERIFIABLE MEDICAL LOGS ARCHIVE</span>
                  <span className="lang-es font-sans font-bold">ARCHIVO QUIRÚRGICO DOCUMENTAL DE RESPALDO</span>
                </strong>
                <span className="text-xs text-[#64748B] font-normal font-sans">
                  <span className="lang-en">Anonymous interview files and hotel logs available to serious prospects during consultation steps.</span>
                  <span className="lang-es">Copias de bitácoras de coordinación hotelera y médica disponibles bajo confidencialidad.</span>
                </span>
              </div>
            </div>
            <button 
              onClick={() => scrollToLeadCaptureWithProcedure("")}
              className="border border-[#164E63] hover:bg-[#164E63] hover:text-white text-[#164E63] font-bold text-xs py-3 px-6 tracking-widest uppercase transition-colors shrink-0 cursor-pointer"
            >
              <span className="lang-en font-serif">Inquire Case Archives</span>
              <span className="lang-es font-sans">Solicitar Bitácoras</span>
            </button>
          </div>

        </div>
      </section>

      {/* 8. GENERAL FAQ DESK */}
      <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#22B8CF] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              <span className="lang-en font-mono text-[#22B8CF]">ANSWERS TO OPERATIONS CRITICAL CHECKS</span>
              <span className="lang-es font-sans">RESPUESTAS A DUDAS DE OPERACIÓN MUNDIAL</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider text-[#0F172A] uppercase">
              <span className="lang-en">Concierge FAQ Desk</span>
              <span className="lang-es font-sans text-2xl sm:text-3xl leading-snug">Preguntas Críticas Frecuentes</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#164E63]/30 mx-auto my-3"></div>
            <p className="text-xs sm:text-sm text-[#64748B] tracking-widest uppercase">
              <span className="lang-en">Addressing patient travel parameters transparently with elite clarity</span>
              <span className="lang-es">Despejando inquietudes normativas, migratorias y de viabilidad quirúrgica</span>
            </p>
          </div>

          {/* Accordion List inside Vanilla JS / React handler */}
          <div className="space-y-4 pt-4">
            
            {/* FAQ 1: Passport */}
            <div className="bg-white border border-slate-200">
              <button 
                onClick={() => toggleFaq(1)}
                className="w-full text-left p-6 flex justify-between items-center text-[#0F172A] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              >
                <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider">
                  <span className="lang-en">1. Do I need a passport to travel for surgery?</span>
                  <span className="lang-es font-sans">1. ¿Necesito pasaporte vigente para viajar a cirugía?</span>
                </span>
                {activeFaq === 1 ? <ChevronUp size={18} className="text-[#22B8CF]" /> : <ChevronDown size={18} className="text-[#22B8CF]" />}
              </button>
              
              <AnimatePresence>
                {activeFaq === 1 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-slate-100 text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                      <p className="lang-en">
                        Yes. Since Monterrey is located in Mexico, all US citizens must carry a valid passport for entry and re-entry into the United States via border control or commercial flights. If you are arriving via the executive land corridor, a valid passport card is acceptable.
                      </p>
                      <p className="lang-es font-sans text-xs">
                        Sí. Al ubicarse en territorio de México, todos los ciudadanos estadounidenses requieren pasaporte físico original vigente para ingresar y retornar vía aérea o terrestre. El corredor ejecutivo monitorea con el consulado los parámetros aduanales.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 2: Estancia */}
            <div className="bg-white border border-slate-200">
              <button 
                onClick={() => toggleFaq(2)}
                className="w-full text-left p-6 flex justify-between items-center text-[#0F172A] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              >
                <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider">
                  <span className="lang-en">2. How long should I stay in Monterrey?</span>
                  <span className="lang-es font-sans">2. ¿Cuánto tiempo debo permanecer en Monterrey?</span>
                </span>
                {activeFaq === 2 ? <ChevronUp size={18} className="text-[#22B8CF]" /> : <ChevronDown size={18} className="text-[#22B8CF]" />}
              </button>
              
              <AnimatePresence>
                {activeFaq === 2 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-slate-100 text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                      <p className="lang-en">
                        Typically between 3 to 7 days, depending on the procedural complexity. For example, standard Laparoscopic Gallbladder surgery requires 1 day inside the hospital suite and 2-3 additional days resting in client executive lodging before post-op clinical release clearance is granted for standard flights.
                      </p>
                      <p className="lang-es font-sans">
                        Normalmente de 3 a 7 días, dependiendo del procedimiento. Una colecistectomía laparoscópica común requiere un día de suite hospitalaria y de 2 a 3 días extra en la suite hotelera premium de reposo antes de que el cirujano emita el pase seguro de vuelo de retorno.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 3: Transporte */}
            <div className="bg-white border border-slate-200">
              <button 
                onClick={() => toggleFaq(3)}
                className="w-full text-left p-6 flex justify-between items-center text-[#0F172A] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              >
                <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider">
                  <span className="lang-en">3. Is airport and hotel transportation fully included?</span>
                  <span className="lang-es font-sans">3. ¿El transporte entre aeropuerto, hotel y clínica está incluido?</span>
                </span>
                {activeFaq === 3 ? <ChevronUp size={18} className="text-[#22B8CF]" /> : <ChevronDown size={18} className="text-[#22B8CF]" />}
              </button>
              
              <AnimatePresence>
                {activeFaq === 3 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-slate-100 text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                      <p className="lang-en">
                        Absolutely. All targeted terminal collections, clinic transit loops, and post-discharge travel checks are conducted in private SUVs with dedicated, vetted English-speaking drivers. You will not have to hail independent cabs or manage public transport stress during your corridor stay.
                      </p>
                      <p className="lang-es font-sans text-xs">
                        Totalmente. Cada traslado desde terminal aérea o terrestre privada, consultas médicas, ingreso quirúrgico y traslados de alta médica se cubren mediante camioneta ejecutiva de lujo privada con chofer dedicado con dominio del inglés.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 4: Companion */}
            <div className="bg-white border border-slate-200">
              <button 
                onClick={() => toggleFaq(4)}
                className="w-full text-left p-6 flex justify-between items-center text-[#0F172A] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              >
                <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider">
                  <span className="lang-en">4. Can someone travel with me as a recovery companion?</span>
                  <span className="lang-es font-sans">4. ¿Puede viajar algún acompañante conmigo como apoyo?</span>
                </span>
                {activeFaq === 4 ? <ChevronUp size={18} className="text-[#22B8CF]" /> : <ChevronDown size={18} className="text-[#22B8CF]" />}
              </button>
              
              <AnimatePresence>
                {activeFaq === 4 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-slate-100 text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                      <p className="lang-en">
                        Yes. In fact, we highly encourage traveling with a dedicated recovery partner. Our partner corporate hotels in San Pedro allow companion lodging inside executive king rooms at no extra baseline price, and hospital suites have dedicated rest couches.
                      </p>
                      <p className="lang-es font-sans">
                        Sí, e incentivamos a que viaje con un acompañante para su máxima tranquilidad emocional. Las suites ejecutivas king de nuestros hoteles socios admiten un acompañante sin costo extra y las suites clínicas de hospital disponen de sofá cama de descanso de lujo.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* FAQ 5: Bilingual Coordination */}
            <div className="bg-white border border-slate-200">
              <button 
                onClick={() => toggleFaq(5)}
                className="w-full text-left p-6 flex justify-between items-center text-[#0F172A] hover:bg-slate-50 transition-colors focus:outline-none cursor-pointer"
              >
                <span className="font-serif text-sm sm:text-base font-bold uppercase tracking-wider">
                  <span className="lang-en font-serif">5. Do you offer full English-speaking coordination?</span>
                  <span className="lang-es font-sans">5. ¿Ofrecen coordinación bilingüe completa en todo momento?</span>
                </span>
                {activeFaq === 5 ? <ChevronUp size={18} className="text-[#22B8CF]" /> : <ChevronDown size={18} className="text-[#22B8CF]" />}
              </button>
              
              <AnimatePresence>
                {activeFaq === 5 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 border-t border-slate-100 text-xs sm:text-sm text-[#64748B] leading-relaxed font-sans font-normal">
                      <p className="lang-en">
                        Yes, our operational core is native-level bicultural. Your medical coordination manager, surgical clinic team, hospital nurses, registrars, and private drivers are entirely bilingual, ensuring you never face semantic gaps or administrative confusion.
                      </p>
                      <p className="lang-es font-sans text-xs">
                        Sí. Todo nuestro espectro operativo es bilingüe y bicultural nativo. Su administrador clínico logístico asignado, cirujanos, enfermeras, choferes y asesores dominan el inglés y español para eliminar cualquier tipo de confusión técnica o humana.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 9. LEAD CAPTURE QUESTIONNAIRE */}
      <section id="lead-capture" ref={leadCaptureRef} className="py-24 bg-[#0F172A] text-white relative border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#164E63]/10 to-transparent pointer-events-none"></div>
        
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
          
          <div className="text-center mb-12">
            <span className="text-[#22B8CF] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              <span className="lang-en font-mono text-[#22B8CF]">CONFIDENTIAL SECURE SYSTEM</span>
              <span className="lang-es font-sans text-xs">SISTEMA SEGURO Y ALTAMENTE CONFIDENCIAL</span>
            </span>
            <h2 className="text-3xl font-serif font-bold tracking-wider text-white uppercase">
              <span className="lang-en">Patient Coordination Questionnaire</span>
              <span className="lang-es font-sans text-2xl sm:text-3xl leading-snug font-bold">Cuestionario de Enlace Quirúrgico</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#22B8CF]/30 mx-auto my-3"></div>
            <p className="text-xs sm:text-sm text-slate-300 tracking-wider">
              <span className="lang-en font-sans">Begin your private bicultural entry file. Our registrars will respond in under 4 hours.</span>
              <span className="lang-es font-sans text-xs">Inicie su expediente logístico privado. Reciba una respuesta médica en menos de 4 horas hábiles.</span>
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 p-6 sm:p-10 backdrop-blur-sm">
            
            {/* Step Indicators */}
            <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-6 text-xs font-bold tracking-widest uppercase text-slate-400">
              <div className={`flex items-center gap-2 ${currentStep === 1 ? "text-[#22B8CF]" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border text-[11px] ${currentStep === 1 ? "border-[#22B8CF] bg-[#22B8CF] text-[#0F172A]" : "border-white/20"}`}>1</span>
                <span>
                  <span className="lang-en font-bold">Basic Info</span>
                  <span className="lang-es font-bold font-sans text-[10px]">Contacto</span>
                </span>
              </div>
              <div className="h-px bg-white/10 flex-grow mx-2"></div>
              <div className={`flex items-center gap-2 ${currentStep === 2 ? "text-[#22B8CF]" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border text-[11px] ${currentStep === 2 ? "border-[#22B8CF] bg-[#22B8CF] text-[#0F172A]" : "border-white/20"}`}>2</span>
                <span>
                  <span className="lang-en font-serif font-bold">Medical Profile</span>
                  <span className="lang-es font-sans text-[10px] font-bold">Perfil</span>
                </span>
              </div>
              <div className="h-px bg-white/10 flex-grow mx-2"></div>
              <div className={`flex items-center gap-2 ${currentStep === 3 ? "text-[#22B8CF]" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border text-[11px] ${currentStep === 3 ? "border-[#22B8CF] bg-[#22B8CF] text-[#0F172A]" : "border-white/20"}`}>3</span>
                <span>
                  <span className="lang-en font-bold">Preferences</span>
                  <span className="lang-es font-sans text-[10px] font-bold">Estatus</span>
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleFormSubmit} className="space-y-6">

                  {/* STEP 1: BASIC INFORMATION */}
                  {currentStep === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4 font-sans"
                    >
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5 label-required">
                          <span className="lang-en">Full Name</span>
                          <span className="lang-es font-sans">Nombre Completo del Paciente</span>
                        </label>
                        <input 
                          type="text" 
                          name="fullName" 
                          required
                          placeholder="e.g. Kenneth Rogers"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5 label-required">
                            <span className="lang-en">US Phone Number</span>
                            <span className="lang-es font-sans">Teléfono en EUA</span>
                          </label>
                          <input 
                            type="tel" 
                            name="phone" 
                            required
                            placeholder="e.g. +1 (Area Code) Phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5 label-required">
                            <span className="lang-en">Confidential Email</span>
                            <span className="lang-es font-sans text-xs">Correo Confidencial</span>
                          </label>
                          <input 
                            type="email" 
                            name="email" 
                            required
                            placeholder="e.g. kenneth@domain.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5 label-required">
                          <span className="lang-en">Current Texas Location</span>
                          <span className="lang-es font-sans">Ubicación Actual en Texas</span>
                        </label>
                        <select 
                          name="texasLocation" 
                          required
                          value={formData.texasLocation}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none cursor-pointer"
                        >
                          <option value="" disabled className="text-slate-500">Select location...</option>
                          <option value="Dallas_FTW font-sans">Dallas / Fort Worth Metroplex</option>
                          <option value="Austin">Austin Area</option>
                          <option value="Houston">Houston Metropolitan Area</option>
                          <option value="San_Antonio font-sans">San Antonio Area</option>
                          <option value="El_Paso">El Paso / West Texas</option>
                          <option value="Other_US">Other Out of State Area</option>
                        </select>
                      </div>

                      <div className="pt-4 flex justify-end">
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          disabled={!formData.fullName || !formData.phone || !formData.email || !formData.texasLocation}
                          className="bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] disabled:opacity-50 disabled:cursor-not-allowed font-extrabold text-xs py-3.5 px-6 uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          <span className="lang-en flex items-center gap-1">Next Step <ChevronRight size={13} /></span>
                          <span className="lang-es font-sans flex items-center gap-1">Siguiente <ChevronRight size={13} /></span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: MEDICAL PROFILE AND CHECKBOXES */}
                  {currentStep === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4"
                    >
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5">
                          <span className="lang-en">Select Intended Procedure</span>
                          <span className="lang-es font-sans">Elegir Procedimiento Quirúrgico</span>
                        </label>
                        <select 
                          name="procedure" 
                          value={formData.procedure}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none cursor-pointer"
                        >
                          <option value="">Choose proceduring option...</option>
                          <option value="Laparoscopic_Gallbladder">Laparoscopic Gallbladder ($4,900 USD)</option>
                          <option value="Advanced_LASIK">Advanced LASIK ($3,400 USD)</option>
                          <option value="Rhinoplasty">Rhinoplasty ($4,500 USD)</option>
                          <option value="Smile_Makeover">German Zirconia Smile Makeover ($5,800 USD)</option>
                          <option value="Advanced_Reflux font-sans">Advanced Reflux Correction ($5,800 USD)</option>
                          <option value="Laparoscopic_Hysterectomy">Laparoscopic Hysterectomy ($5,900 USD)</option>
                        </select>
                      </div>

                      {/* Checkboxes */}
                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-2 font-mono">
                          <span className="lang-en">Do you currently have:</span>
                          <span className="lang-es font-sans text-xs">¿Cuenta actualmente con alguno de estos estudios?</span>
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                          {[
                            { key: "diagnosis", labelEN: "Clinical Diagnosis / Symptoms Confirmation", labelES: "Diagnóstico Clínico o Confirmación de Síntoma" },
                            { key: "imaging", labelEN: "Medical Imaging (Ultrasound, CT, MRI, etc.)", labelES: "Estudios de Imagen (Ultrasonido, Tomografía, Resonancia)" },
                            { key: "labs", labelEN: "Clinical Labs / Active Blood Works", labelES: "Exámenes de Laboratorio o Analíticas de Sangre" },
                            { key: "none", labelEN: "No clinical reports yet (Need guidance)", labelES: "Sin estudios previos (Requiero asesoría)" }
                          ].map((item) => (
                            <label key={item.key} className="flex items-start gap-2.5 bg-[#0F172A]/45 p-3 border border-white/5 hover:border-white/10 cursor-pointer select-none">
                              <input 
                                type="checkbox"
                                checked={formData.medicalFiles.includes(item.key)}
                                onChange={() => handleCheckboxChange(item.key)}
                                className="mt-0.5 accent-[#22B8CF]"
                              />
                              <span className="leading-tight text-slate-300 font-sans">
                                <span className="lang-en">{item.labelEN}</span>
                                <span className="lang-es font-sans text-[11px]">{item.labelES}</span>
                              </span>
                            </label>
                          ))}
                        </div>
                        <div className="mt-3 text-[11px] text-slate-400 italic font-sans leading-normal">
                          <span className="lang-en font-sans">To protect your medical privacy, documentation will be requested securely via direct coordination after initial contact.</span>
                          <span className="lang-es font-sans">Para salvaguardar su privacidad de datos médicos, no solicitamos la carga de archivos en este sitio; toda la documentación clínica le será requerida de forma segura por su coordinador asignado después del primer contacto.</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5">
                          <span className="lang-en">Clinical Symptoms or Preexisting Pathologies</span>
                          <span className="lang-es font-sans">Síntomas Actuales o Alergias Clínicas</span>
                        </label>
                        <textarea 
                          name="clinicalNotes" 
                          rows={3}
                          placeholder="Please detail your main symptoms, pain levels, or active conditions."
                          value={formData.clinicalNotes}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500 font-sans"
                        />
                      </div>

                      <div className="pt-4 flex justify-between items-center">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="border border-white/20 hover:border-white/50 text-white font-bold text-xs py-3.5 px-6 uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          <span className="lang-en">Back</span>
                          <span className="lang-es font-sans">Atrás</span>
                        </button>
                        <button 
                          type="button" 
                          onClick={handleNextStep}
                          className="bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] font-extrabold text-xs py-3.5 px-6 uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          <span className="lang-en">Continue</span>
                          <span className="lang-es">Continuar</span>
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: PREFERENCES AND HSAs */}
                  {currentStep === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5">
                            <span className="lang-en">Medical Timeline urgency</span>
                            <span className="lang-es font-sans font-bold text-[11px]">Plazo para el Procedimiento</span>
                          </label>
                          <select 
                            name="timeframe" 
                            value={formData.timeframe}
                            onChange={handleInputChange}
                            className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none cursor-pointer"
                          >
                            <option value="">Select urgency timeline...</option>
                            <option value="immediate">Immediate Priority (Next 48 hrs - 15 days)</option>
                            <option value="30days">Within 30 Days</option>
                            <option value="90days">Standard Planning (Within 3 months)</option>
                            <option value="exploring">Just researching and comparing</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5 font-sans">
                            <span className="lang-en">Insurance / HSA Planning Status</span>
                            <span className="lang-es font-sans">Estatus Financiero o Uso de HSA</span>
                          </label>
                          <select 
                            name="hsaPlanning" 
                            value={formData.hsaPlanning}
                            onChange={handleInputChange}
                            className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none cursor-pointer font-sans"
                          >
                            <option value="">Select funding type status...</option>
                            <option value="hsa">Plannig to cover via HSA/FSA Funds</option>
                            <option value="out_pocket font-sans">Self-Pay Out-of-pocket savings</option>
                            <option value="seeking_reimburse">Seeking insurer reimbursement letter</option>
                            <option value="unsure">Need financial advisory guidance</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-widest mb-1.5 label-required">
                          <span className="lang-en">Preferred Contact Method</span>
                          <span className="lang-es font-sans text-xs">Método de Contacto Preferido</span>
                        </label>
                        <select 
                          name="contactMethod" 
                          required
                          value={formData.contactMethod}
                          onChange={handleInputChange}
                          className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none cursor-pointer"
                        >
                          <option value="">Select communication target...</option>
                          <option value="whatsapp">Secure WhatsApp Chat</option>
                          <option value="phone">Bicultural Registrar Phone Call</option>
                          <option value="email font-sans">Comprehensive Detailed Email Plan</option>
                        </select>
                      </div>

                      <div className="pt-2">
                        <label className="flex items-start gap-2.5 text-xs text-slate-300 select-none cursor-pointer">
                          <input 
                            type="checkbox" 
                            required
                            checked={formData.termsAccepted}
                            onChange={(e) => setFormData(prev => ({ ...prev, termsAccepted: e.target.checked }))}
                            className="mt-0.5 accent-[#22B8CF]"
                          />
                          <p className="leading-tight font-sans">
                            <span className="lang-en">I authorize bicultural registrars to review my basic records under strict privacy-conscious coordination and confidential intake terms.</span>
                            <span className="lang-es font-sans">Autorizo el análisis de mis datos iniciales con estricto apego a confidencialidad clínica internacional.</span>
                          </p>
                        </label>
                      </div>

                      <div className="pt-4 flex justify-between items-center font-sans">
                        <button 
                          type="button" 
                          onClick={handlePrevStep}
                          className="border border-white/20 hover:border-white/50 text-white font-bold text-xs py-3.5 px-6 uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          <span className="lang-en">Back</span>
                          <span className="lang-es font-sans">Atrás</span>
                        </button>
                        <button 
                          type="submit" 
                          disabled={isSubmitting || !formData.contactMethod || !formData.termsAccepted}
                          className="bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] disabled:opacity-50 disabled:cursor-not-allowed font-extrabold text-xs py-3.5 px-6 uppercase tracking-widest transition-colors cursor-pointer"
                        >
                          {isSubmitting ? (
                            <span className="lang-en">Securing link...</span>
                          ) : (
                            <>
                              <span className="lang-en">Submit Intake Plan</span>
                              <span className="lang-es font-sans">Enviar Expediente</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}

                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-16 h-16 bg-[#22B8CF]/10 text-[#22B8CF] rounded-full flex items-center justify-center mx-auto shadow-md">
                    <ShieldCheck size={36} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold uppercase tracking-wider text-white">
                      <span className="lang-en font-serif">Expedite Link Secured</span>
                      <span className="lang-es font-sans">Enlace Quirúrgico Vinculado</span>
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-md mx-auto normal-case font-normal">
                      <span className="lang-en">
                        Thank you, {formData.fullName}. Your confidential portfolio has been registered under reference #{Math.floor(Math.random() * 900000) + 100000}. A bicultural clinical registrar will contact you shortly using your preferred method.
                      </span>
                      <span className="lang-es">
                        Agradecemos su confianza, {formData.fullName}. Su expediente temporal se registró con éxito bajo el folio #{Math.floor(Math.random() * 900000) + 100000}. Un registrador de enlace bilingüe le contactará en breve.
                      </span>
                    </p>
                  </div>
                  <button 
                    onClick={resetForm}
                    className="border border-white/25 hover:border-white/60 text-white font-bold text-xs py-3 px-6 uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <span className="lang-en">Submit another file</span>
                    <span className="lang-es font-sans text-xs">Registrar otro procedimiento</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>
      </section>
    </>
  );
}
