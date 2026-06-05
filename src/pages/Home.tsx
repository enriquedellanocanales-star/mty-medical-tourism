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
  Briefcase,
  Shield,
  Building,
  Car,
  Headphones
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

// Auto-rotating image carousel — no controls, no dots, smooth CSS fade
const carouselSlides = [
  {
    src: "/assets/images/Hospital.png",
    labelEn: "Private Hospital Infrastructure",
    labelEs: "Infraestructura Hospitalaria Privada",
  },
  {
    src: "/assets/images/Fundidora-sky.png",
    labelEn: "Monterrey Metropolitan Area",
    labelEs: "Área Metropolitana de Monterrey",
  },
  {
    src: "/assets/images/Lobby.png",
    labelEn: "Premium Patient Facilities",
    labelEs: "Instalaciones de Alto Nivel",
  },
  {
    src: "/assets/images/Hotel.png",
    labelEn: "Executive Recovery Accommodations",
    labelEs: "Alojamiento Ejecutivo de Recuperación",
  },
  {
    src: "/assets/images/habitacion.png",
    labelEn: "Private Recovery Suite",
    labelEs: "Suite de Recuperación Privada",
  },
];

function ImageCarousel({ lang }: { lang: "en" | "es" }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden aspect-[16/10] w-full bg-[#164E63]/30">
      {carouselSlides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === active ? 1 : 0 }}
        >
          <img
            src={slide.src}
            alt={lang === "en" ? slide.labelEn : slide.labelEs}
            className="w-full h-full object-cover opacity-90"
            loading="lazy"
          />
          <div className="absolute bottom-2 left-2 bg-[#0F172A]/90 border border-[#22B8CF]/30 text-white font-mono text-[8px] uppercase px-2 py-0.5 tracking-widest pointer-events-none">
            {lang === "en" ? slide.labelEn : slide.labelEs}
          </div>
        </div>
      ))}
    </div>
  );
}

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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const procNames: Record<string, string> = {
      Laparoscopic_Gallbladder: "Laparoscopic Gallbladder",
      Advanced_LASIK: "Advanced LASIK",
      Rhinoplasty: "Rhinoplasty",
      Smile_Makeover: "German Zirconia Smile Makeover",
      Advanced_Reflux: "Advanced Reflux Correction",
      Laparoscopic_Hysterectomy: "Laparoscopic Hysterectomy",
    };

    // 1. Email via Formspree — replace YOUR_FORMSPREE_ID with your form ID from formspree.io
    try {
      await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          location: formData.texasLocation,
          procedure: procNames[formData.procedure] || formData.procedure,
          timeline: formData.timeframe,
          contact_method: formData.contactMethod,
          hsa_planning: formData.hsaPlanning,
          medical_files: formData.medicalFiles.join(", ") || "—",
          notes: formData.clinicalNotes || "—",
        }),
      });
    } catch {
      // WhatsApp is the live primary channel — continue even if email fails
    }

    // 2. Open WhatsApp with pre-filled patient summary (sent from patient's device to MTY Medical)
    const waMsg =
      `🏥 *MTY Medical — New Patient Inquiry*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}\n` +
      `*Location:* ${formData.texasLocation}\n` +
      `*Procedure:* ${procNames[formData.procedure] || formData.procedure || "—"}\n` +
      `*Timeline:* ${formData.timeframe || "—"}\n` +
      `*Contact via:* ${formData.contactMethod}\n` +
      `*Notes:* ${formData.clinicalNotes || "—"}`;

    window.open(
      `https://wa.me/528110487334?text=${encodeURIComponent(waMsg)}`,
      "_blank"
    );

    setIsSubmitting(false);
    setIsSubmitted(true);
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
      {/* 2. HERO SECTION - LAYERED ASYMMETRIC DESIGN (responsive) */}
      <section 
        id="hero" 
        className="relative w-full h-[60vh] md:h-[85vh] bg-[#071326] overflow-hidden flex flex-col md:flex-row items-center"
      >
        {/* LAYER 2: IMAGE (full width with precision fade) */}
        <div className="absolute left-0 top-0 h-full w-full z-0 overflow-hidden">
          <img 
            src="/assets/images/skyline-de-monterrey.png"
            alt="Monterrey Skyline"
            className="w-full h-full object-cover brightness-[0.9] contrast-[1.2] saturate-[1.1]"
            style={{ objectPosition: 'center 35%' }}
            loading="eager"
          />
          {/* Cinematic overlay gradient: soft humo, not opaque block */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `linear-gradient(to right, 
                rgba(7, 19, 38, 0.70) 0%, 
                rgba(7, 19, 38, 0.58) 32%, 
                rgba(7, 19, 38, 0.25) 55%, 
                rgba(7, 19, 38, 0.02) 75%, 
                transparent 100%)`
            }}
          ></div>
        </div>

        {/* Mobile-only: soft bottom fade to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 z-20 pointer-events-none md:hidden"
          style={{ background: 'linear-gradient(to bottom, transparent 20%, rgba(250,249,246,0.85) 100%)' }}
        />

        {/* LAYER 3: CONTENT (left side desktop, centered mobile) */}
        <div className="relative z-10 w-full h-full flex flex-col md:flex-row md:items-center justify-center md:justify-start px-6 sm:px-10 md:pl-12 lg:pl-16 py-10 md:py-0">
          <div className="max-w-[230px] sm:max-w-[340px] md:max-w-[500px] text-center md:text-left">
            
            {/* Eyebrow Badge */}
            <span className="text-[#22B8CF] text-[7px] md:text-[10px] font-semibold tracking-[0.2em] md:tracking-[0.25em] uppercase block mb-1.5 md:mb-3">
              <span className="lang-en">PRIVATE MEDICAL CONCIERGE</span>
              <span className="lang-es">ENLACE LOGÍSTICO MÉDICO</span>
            </span>

            {/* Decorative Line */}
            <div className="w-8 md:w-10 h-px bg-[#22B8CF] mb-1.5 md:mb-4 mx-auto md:mx-0"></div>

            {/* Main Title */}
            <h1 
              className="text-[#F2F1ED] font-serif uppercase text-[clamp(16px,4.2vw,65px)] md:text-[clamp(38px,4.5vw,65px)] leading-[1.1] md:leading-[0.95] mb-2 md:mb-6 font-light tracking-[0.01em] md:tracking-tight"
            >
              <span className="lang-en block">Premium Surgical Access</span>
              <span className="lang-es block">Acceso Quirúrgico Premium</span>
            </h1>

            {/* Italic Subtitle */}
            <h2 
              className="text-[#D6DCE5] font-serif text-[clamp(10px,2.6vw,30px)] md:text-[clamp(18px,2.5vw,30px)] italic uppercase font-normal md:font-light leading-[1.35] md:leading-[1.1] mb-2 md:mb-6"
            >
              <span className="lang-en block">&amp; Private Travel Coordination</span>
              <span className="lang-es block">&amp; Coordinación Privada de Viajes</span>
            </h2>

            {/* Description */}
            <p className="text-[#D6DCE5] text-[11px] md:text-[13px] lg:text-[14px] mb-3 md:mb-6 leading-relaxed font-light max-w-[420px] mx-auto md:mx-0">
              <span className="lang-en">
                Connecting Texas patients with certified surgeons in Monterrey through executive-level logistical care.
              </span>
              <span className="lang-es">
                Conectando pacientes de Texas con cirujanos certificados en Monterrey mediante atención logística ejecutiva.
              </span>
            </p>

            {/* CTA Button - Executive, refined, minimal (responsive) */}
            <button 
              onClick={() => scrollToLeadCaptureWithProcedure("")}
              className="bg-[#22B8CF]/80 md:bg-[#22B8CF] text-[#071326] font-semibold tracking-[0.06em] md:tracking-[0.08em] uppercase text-[7px] md:text-[9px] py-1 md:py-1.5 px-3 md:px-5 hover:bg-white transition-all cursor-pointer rounded-none mb-3 md:mb-7"
            >
              <span className="lang-en">Begin Consultation</span>
              <span className="lang-es">Comenzar Consulta</span>
            </button>


          </div>
        </div>
      </section>

      {/* TRUST STRIP — bridge between hero and content */}
      <div className="bg-white border-b border-slate-100 py-5 px-4">
        <p className="text-center text-[#64748B] text-[8px] md:text-[9px] tracking-[0.28em] uppercase font-sans">
          <span className="lang-en">Board-Certified Physicians &nbsp;&bull;&nbsp; Executive Coordination &nbsp;&bull;&nbsp; Bilingual Support</span>
          <span className="lang-es font-sans">Médicos Certificados &nbsp;&bull;&nbsp; Coordinación Ejecutiva &nbsp;&bull;&nbsp; Soporte Bilingüe</span>
        </p>
      </div>

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
                  <span className="lang-en">Recovery Accommodations</span>
                  <span className="lang-es font-sans">Alojamiento de Recuperación</span>
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-wider uppercase leading-snug">
                  <span className="lang-en">Executive, Secure Recovery Accommodations</span>
                  <span className="lang-es font-sans text-xl sm:text-2xl font-bold">Alojamiento Ejecutivo de Recuperación</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans normal-case">
                  <span className="lang-en">
                    We arrange stays in carefully selected private accommodations in San Pedro Garza García, Monterrey's premier residential district. Each property is chosen for its calm environment, privacy, and proximity to surgical facilities—ideal for post-operative rest.
                  </span>
                  <span className="lang-es font-sans">
                    Nuestros clientes descansan en exclusivas suites de alojamiento ejecutivo en San Pedro Garza García, la zona urbana de mayor seguridad en el país. Los espacios garantizan un reposo confortable, alimentación adaptada, y enlace directo de chofer privado a las citas clínicas.
                  </span>
                </p>
              </div>

              {/* Auto-rotating Image Carousel */}
              <div className="lg:col-span-5 w-full bg-black/20 border border-white/10 p-2 shadow-xl">
                <ImageCarousel lang={lang} />
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
              <span className="lang-en">What Is Included</span>
              <span className="lang-es">Qué Está Incluido</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider uppercase text-[#0F172A]">
              <span className="lang-en">Package Scope</span>
              <span className="lang-es font-sans text-2xl sm:text-3xl font-bold">Alcance del Paquete</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#164E63]/30 mx-auto my-3"></div>
            <p className="text-xs sm:text-sm text-[#64748B] tracking-widest uppercase mt-2">
              <span className="lang-en">Full transparency on what your coordination includes and what falls outside.</span>
              <span className="lang-es">Claridad total sobre lo que incluye su coordinación y lo que queda fuera.</span>
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
                <span className="lang-en">&bull; Personal coordination support throughout your journey</span>
                <span className="lang-es">&bull; Apoyo de coordinación personal durante todo su proceso</span>
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
                        <span className="lang-en">Flexible Travel Arrangements</span>
                        <span className="lang-es font-sans">Arreglos de Viaje Flexibles</span>
                      </strong>
                      <span className="text-[#64748B] text-[11px] sm:text-xs font-normal font-sans">
                        <span className="lang-en">We prioritize your travel flexibility. Patients choose their preferred airline, schedule, and miles program. Personalized travel coordination is available upon request.</span>
                        <span className="lang-es">Priorizamos su flexibilidad de viaje. Cada paciente elige su aerolínea, horario y programa de millas preferido. Coordinación de viaje personalizada disponible bajo solicitud.</span>
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
                <span className="lang-en">&bull; Separate flight assistance available upon request</span>
                <span className="lang-es">&bull; Asistencia con vuelos disponible bajo solicitud</span>
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
              <span className="lang-en">How It Works</span>
              <span className="lang-es font-sans">Cómo Funciona</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider uppercase text-[#0F172A]">
              <span className="lang-en">From Inquiry to Recovery</span>
              <span className="lang-es font-sans">De la Consulta a la Recuperación</span>
            </h2>
            <div className="h-px w-16 bg-[#164E63]/30 mx-auto my-3"></div>
            <p className="text-[11px] sm:text-xs text-[#64748B] tracking-widest uppercase">
              <span className="lang-en">A clear, private process designed around your comfort and safety.</span>
              <span className="lang-es font-sans">Un proceso claro y privado diseñado para tu comodidad y seguridad.</span>
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
                  Share your contact details. We establish immediate, trusted personal communication with full discretion.
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
              <span className="lang-en">Patient Experiences</span>
              <span className="lang-es">Experiencias de Pacientes</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider text-[#0F172A] uppercase">
              <span className="lang-en">What Our Patients Say</span>
              <span className="lang-es font-sans">Lo Que Dicen Nuestros Pacientes</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#164E63]/30 mx-auto my-3"></div>
            <p className="text-[11px] sm:text-xs text-[#64748B] tracking-widest uppercase">
              <span className="lang-en">Shared experiences from Texas patients, presented with full privacy.</span>
              <span className="lang-es">Experiencias compartidas por pacientes de Texas, presentadas con total privacidad.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Experience Card 1 - Gallbladder from Dallas */}
            <div className="bg-[#FAFAF9] p-6 sm:p-8 border border-slate-200/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
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
                <div className="flex items-center gap-1 text-amber-500 mb-4">
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
                <div className="flex items-center gap-1 text-amber-500 mb-4">
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


        </div>
      </section>

      {/* 8. GENERAL FAQ DESK */}
      <section id="faq" className="py-20 sm:py-28 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#22B8CF] text-xs font-bold tracking-[0.3em] uppercase block mb-3">
              <span className="lang-en">Common Questions</span>
              <span className="lang-es font-sans">Preguntas Frecuentes</span>
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-wider text-[#0F172A] uppercase">
              <span className="lang-en">Patient FAQ</span>
              <span className="lang-es font-sans text-2xl sm:text-3xl leading-snug">Preguntas del Paciente</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#164E63]/30 mx-auto my-3"></div>
            <p className="text-xs sm:text-sm text-[#64748B] tracking-widest uppercase">
              <span className="lang-en">Honest answers to the questions patients ask most.</span>
              <span className="lang-es">Respuestas claras a las preguntas más frecuentes de nuestros pacientes.</span>
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
              <span className="lang-en">Confidential Intake</span>
              <span className="lang-es font-sans">Solicitud Confidencial</span>
            </span>
            <h2 className="text-3xl font-serif font-bold tracking-wider text-white uppercase">
              <span className="lang-en">Begin Your Consultation</span>
              <span className="lang-es font-sans text-2xl sm:text-3xl leading-snug font-bold">Comienza Tu Consulta</span>
            </h2>
            <div className="h-0.5 w-16 bg-[#22B8CF]/30 mx-auto my-3"></div>
            <p className="text-xs sm:text-sm text-slate-300 tracking-wider">
              <span className="lang-en font-sans">Share a few details and a bilingual coordinator will reach out within 4 business hours.</span>
              <span className="lang-es font-sans text-xs">Comparte algunos datos y un coordinador bilingüe te contactará en menos de 4 horas hábiles.</span>
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
                          <option value="Dallas_FTW">Dallas / Fort Worth Metroplex</option>
                          <option value="Austin">Austin Area</option>
                          <option value="Houston">Houston Metropolitan Area</option>
                          <option value="San_Antonio">San Antonio Area</option>
                          <option value="El_Paso">El Paso / West Texas</option>
                          <option value="Other_US">Other Out of State Area</option>
                        </select>
                      </div>

                      <div className="pt-4 space-y-2">
                        {/* Validation hints — only shown once the user starts filling */}
                        {(formData.fullName || formData.phone || formData.email || formData.texasLocation) &&
                          (!formData.fullName || !formData.phone || !formData.email || !formData.texasLocation) && (
                          <div className="text-[10px] text-amber-400/75 font-sans leading-relaxed space-y-0.5 text-right">
                            {!formData.fullName && (
                              <p><span className="lang-en">· Full name is required</span><span className="lang-es font-sans">· Nombre completo requerido</span></p>
                            )}
                            {!formData.phone && (
                              <p><span className="lang-en">· Phone number is required</span><span className="lang-es font-sans">· Número de teléfono requerido</span></p>
                            )}
                            {!formData.email && (
                              <p><span className="lang-en">· Email address is required</span><span className="lang-es font-sans">· Correo electrónico requerido</span></p>
                            )}
                            {!formData.texasLocation && (
                              <p><span className="lang-en">· Select your location to continue</span><span className="lang-es font-sans">· Selecciona tu ciudad para continuar</span></p>
                            )}
                          </div>
                        )}
                        <div className="flex justify-end">
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
                          <option value="">Select procedure...</option>
                          <option value="Laparoscopic_Gallbladder">Laparoscopic Gallbladder ($4,900 USD)</option>
                          <option value="Advanced_LASIK">Advanced LASIK ($3,400 USD)</option>
                          <option value="Rhinoplasty">Rhinoplasty ($4,500 USD)</option>
                          <option value="Smile_Makeover">German Zirconia Smile Makeover ($5,800 USD)</option>
                          <option value="Advanced_Reflux">Advanced Reflux Correction ($5,800 USD)</option>
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
                            <option value="hsa">Planning to cover via HSA/FSA Funds</option>
                            <option value="out_pocket">Self-Pay Out-of-pocket savings</option>
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
                          <option value="email">Detailed Email</option>
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

                      <div className="pt-4 space-y-2 font-sans">
                        {/* Validation hints — always visible on Step 3 if anything is missing */}
                        {(!formData.contactMethod || !formData.termsAccepted) && (
                          <div className="text-[10px] text-amber-400/75 font-sans leading-relaxed space-y-0.5 text-right">
                            {!formData.contactMethod && (
                              <p>
                                <span className="lang-en">· Select a preferred contact method above</span>
                                <span className="lang-es font-sans">· Elige tu método de contacto preferido</span>
                              </p>
                            )}
                            {!formData.termsAccepted && (
                              <p>
                                <span className="lang-en">· Accept the coordination terms to submit</span>
                                <span className="lang-es font-sans">· Acepta los términos de coordinación para enviar</span>
                              </p>
                            )}
                          </div>
                        )}
                        <div className="flex justify-between items-center">
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
                              <>
                                <span className="lang-en">Sending...</span>
                                <span className="lang-es font-sans">Enviando...</span>
                              </>
                            ) : (
                              <>
                                <span className="lang-en">Submit &amp; Open WhatsApp</span>
                                <span className="lang-es font-sans">Enviar y Abrir WhatsApp</span>
                              </>
                            )}
                          </button>
                        </div>
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
                      <span className="lang-en">Consultation Received</span>
                      <span className="lang-es font-sans">Consulta Recibida</span>
                    </h3>
                    <p className="text-sm text-slate-300 leading-relaxed font-sans max-w-md mx-auto normal-case font-normal">
                      <span className="lang-en">
                        Thank you, {formData.fullName}. Your request has been received. A bilingual coordinator will contact you shortly via your preferred method.
                      </span>
                      <span className="lang-es">
                        Gracias, {formData.fullName}. Tu solicitud ha sido recibida. Un coordinador bilingüe se pondrá en contacto contigo pronto.
                      </span>
                    </p>
                  </div>
                  <button 
                    onClick={resetForm}
                    className="border border-white/25 hover:border-white/60 text-white font-bold text-xs py-3 px-6 uppercase tracking-widest transition-colors cursor-pointer"
                  >
                    <span className="lang-en">Submit another request</span>
                    <span className="lang-es font-sans text-xs">Enviar otra solicitud</span>
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
