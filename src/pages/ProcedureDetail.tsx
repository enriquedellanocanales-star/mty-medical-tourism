import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Check, 
  ArrowLeft, 
  ShieldCheck, 
  Award, 
  Activity, 
  Clock, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  Car, 
  AlertCircle,
  HelpCircle,
  ShieldAlert,
  PhoneCall
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { proceduresData, FAQItem } from "../data/procedures";

interface ProcedureDetailProps {
  lang: "en" | "es";
  slug: string;
}

export default function ProcedureDetail({ lang, slug }: ProcedureDetailProps) {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Find the requested procedure
  const procedure = proceduresData.find((p) => p.slug === slug);

  if (!procedure) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center">
        <AlertCircle size={48} className="text-[#22B8CF] mb-4" />
        <h2 className="text-2xl font-serif font-bold text-[#0F172A] mb-2 uppercase tracking-wider">
          {lang === "en" ? "Procedure Not Found" : "Procedimiento No Encontrado"}
        </h2>
        <p className="text-slate-500 mb-6 font-sans max-w-md">
          {lang === "en" 
            ? "The requested surgical portfolio landing page does not exist or has been relocated." 
            : "La página de portafolio solicitada no existe o ha sido reubicada."}
        </p>
        <Link 
          to="/" 
          className="bg-[#164E63] text-white font-bold text-xs py-3 px-6 uppercase tracking-widest hover:bg-[#22B8CF] hover:text-[#0F172A] transition-colors"
        >
          {lang === "en" ? "Back to Corridor Home" : "Volver al Inicio"}
        </Link>
      </div>
    );
  }

  const content = lang === "en" ? procedure.en : procedure.es;

  const handleCtaClick = () => {
    // Navigate back to homepage and specify the desired procedure key in state
    navigate("/", { state: { preselect: procedure.procedureKey } });
    
    // Smooth scroll down to #lead-capture after a small timeout to let the page load
    setTimeout(() => {
      const formEl = document.getElementById("lead-capture");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Safe image generator mapping for high CRO aesthetics
  const getProcedureImageUrl = (key: string) => {
    switch (key) {
      case "Advanced_LASIK":
        return "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=800&q=80";
      case "Laparoscopic_Gallbladder":
        return "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80";
      case "Advanced_Reflux":
        return "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80";
      case "Laparoscopic_Hysterectomy":
        return "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=800&q=80";
      case "Rhinoplasty":
        return "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80";
      case "Smile_Makeover":
        return "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FAFAF9]"
    >
      {/* 1. HERO OF PROCEDURE */}
      <section className="relative bg-[#0F172A] text-white pt-16 pb-20 md:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#164E63]/50 via-[#0F172A] to-[#0F172A] z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.01)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.01)_1px,_transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#22B8CF] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span>{lang === "en" ? "Back to Surgical Corridor" : "Volver al Corredor Quirúrgico"}</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Title, Subtitle, startingPrice (Pricing is NEVER hardcoded in raw text strings) */}
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 bg-[#164E63]/80 border border-[#22B8CF]/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#22B8CF]">
                <Award size={12} />
                <span>{lang === "en" ? "COORDINATED EXECUTIVE PORTFOLIO" : "PORTAFOLIO EXCLUSIVO DE ENLACE"}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wider text-white uppercase leading-tight">
                {content.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 font-sans tracking-wide leading-relaxed font-normal max-w-2xl normal-case">
                {content.subtitle}
              </p>

              {/* Dynamic startingPrice block */}
              <div className="mt-4 bg-[#164E63]/30 border border-white/10 p-4 inline-flex flex-col items-start min-w-[240px]">
                <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase font-sans">
                  {lang === "en" ? "ESTIMATED TOTAL OUT-OF-POCKET" : "PRESUPUESTO ESTIMADO TOTAL"}
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#22B8CF] mt-1 tracking-wider uppercase">
                  {lang === "en" ? `Starting at ${procedure.startingPrice}` : `Desde ${procedure.startingPrice}`}
                </span>
                <span className="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-1">
                  {lang === "en" ? "Includes Coordination, Concierge & Hotel" : "Incluye Coordinación, Concierge y Hotel"}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4">
                <button 
                  onClick={handleCtaClick}
                  className="bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] font-extrabold text-xs py-4 px-8 tracking-widest uppercase transition-all text-center cursor-pointer shadow-lg shadow-[#22B8CF]/10"
                >
                  {lang === "en" ? "Secure Priority Booking" : "Reservar Atención Quirúrgica"}
                </button>
                <a 
                  href="#overview"
                  className="border border-white/20 hover:border-white/50 text-white font-bold text-xs py-4 px-8 tracking-widest uppercase transition-colors text-center"
                >
                  {lang === "en" ? "View Treatment Specs" : "Ver Especificaciones"}
                </a>
              </div>
            </div>

            {/* Premium Procedural Illustration Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-[#0F172A]/95 border border-white/10 p-2 shadow-2xl">
                <div className="relative overflow-hidden aspect-[4/3] bg-[#164E63]/20 group">
                  <img 
                    src={getProcedureImageUrl(procedure.procedureKey)} 
                    alt={`MTY Medical Clinical Environment representing ${content.title}`}
                    className="w-full h-full object-cover grayscale opacity-70 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-[#22B8CF] text-[#0F172A] font-sans font-extrabold text-[9px] uppercase tracking-widest px-2.5 py-1">
                      {lang === "en" ? "SURGICAL FACILITY COMPONENT" : "INFRAESTRUCTURA QUIRÚRGICA"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PROCEDURE OVERVIEW */}
      <section id="overview" className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-1/3 flex flex-col items-start">
              <span className="text-[#164E63] text-xs font-bold tracking-[0.25em] uppercase mb-2">
                {lang === "en" ? "CLINICAL SPECIFICATION" : "DETALLE CLÍNICO"}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] uppercase tracking-wider">
                {lang === "en" ? "Procedure Overview" : "Breve Explicación"}
              </h2>
              <div className="h-0.5 w-12 bg-[#22B8CF] mt-2"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed normal-case">
                {content.overview}
              </p>
              
              <div className="mt-6 p-4 bg-[#FAFAF9] border-l-2 border-[#164E63] text-xs text-[#164E63] font-semibold uppercase tracking-wider flex items-center gap-2.5">
                <Activity size={15} className="text-[#22B8CF] shrink-0" />
                <span>
                  {lang === "en" 
                    ? "Bicultural protocol compliant: strict quality and sterile safety controls" 
                    : "Alineado a normas biculturales: estrictos niveles de esterilidad y seguridad"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXECUTIVE COORDINATION (Logística de Viaje) */}
      <section className="py-16 md:py-24 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-4">
              <span className="text-[#22B8CF] text-xs font-bold tracking-[0.25em] uppercase block">
                {lang === "en" ? "CONCIERGE COORDINATION" : "COORDINACIÓN CONCIERGE"}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] uppercase tracking-wider">
                {lang === "en" ? "Executive Journey Design" : "Coordinación Ejecutiva de Viaje"}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 tracking-widest uppercase mb-1">
                {lang === "en" 
                  ? "From your arrival to a seamless, supported departure" 
                  : "Desde tu llegada hasta tu salida con total respaldo"}
              </p>
              <div className="h-0.5 w-12 bg-[#164E63] my-3"></div>
              
              <p className="text-slate-600 font-sans text-xs sm:text-sm leading-relaxed normal-case">
                {content.executiveCoordination}
              </p>
            </div>

            {/* Quick logistical details checklist panel */}
            <div className="bg-white p-6 sm:p-8 border border-slate-200/60 shadow-sm space-y-4">
              <h3 className="font-serif text-sm font-bold tracking-widest text-[#0F172A] uppercase border-b border-slate-100 pb-2">
                {lang === "en" ? "Corridor Travel Assets" : "Activos de Logística Incluidos"}
              </h3>
              
              <div className="space-y-3.5 text-xs">
                <div className="flex items-start gap-2.5">
                  <Car size={15} className="text-[#22B8CF] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0F172A] uppercase tracking-wide block text-[10px]">
                      {lang === "en" ? "Private Executive SUV" : "Transportación Ejecutiva Directa"}
                    </strong>
                    <span className="text-slate-500">
                      {lang === "en" ? "Chauffeured, bilingual concierge escort" : "Chofer premium bilingüe a las órdenes"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building2 size={15} className="text-[#22B8CF] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0F172A] uppercase tracking-wide block text-[10px]">
                      {lang === "en" ? "Luxury recovery suite room" : "Alojamiento en Suite de Negocios"}
                    </strong>
                    <span className="text-slate-500">
                      {lang === "en" ? "Located inside secure San Pedro municipality" : "Dentro del área urbana blindada de San Pedro"}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock size={15} className="text-[#22B8CF] mt-0.5 shrink-0" />
                  <div>
                    <strong className="text-[#0F172A] uppercase tracking-wide block text-[10px]">
                      {lang === "en" ? "Continuous bilingual support" : "Coordinación Bilingüe Continua"}
                    </strong>
                    <span className="text-slate-500">
                      {lang === "en" ? "Instant coordination with your home registrar" : "Monitoreo constante e intercomunicación instantánea"}
                    </span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. RECOVERY OVERVIEW */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            <div className="md:w-1/3 flex flex-col items-start">
              <span className="text-[#164E63] text-xs font-bold tracking-[0.25em] uppercase mb-2">
                {lang === "en" ? "POSTOPERATIVE HEALTH & TIMELINES" : "SALUD Y TIEMPOS POSTOPERATORIOS"}
              </span>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0F172A] uppercase tracking-wider">
                {lang === "en" ? "Recovery Guidance" : "Progreso de Recuperación"}
              </h2>
              <div className="h-0.5 w-12 bg-[#22B8CF] mt-2"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-slate-600 font-sans text-sm leading-relaxed normal-case">
                {content.recoveryOverview}
              </p>
              
              <div className="mt-6 border-t border-slate-100 pt-6 grid grid-cols-2 gap-4 text-xs font-semibold tracking-wider text-[#164E63] uppercase">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 text-[10px] block font-medium">{lang === "en" ? "Clinical Checkups" : "Revisiones Clínicas"}</span>
                  <span>{lang === "en" ? "Included post-op check" : "Consulta de evaluación incluida"}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-slate-400 text-[10px] block font-medium">{lang === "en" ? "Physical activity return" : "Retorno Físico"}</span>
                  <span>{lang === "en" ? "Varies dynamically per case" : "Según indicación del médico"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHAT'S COORDINATED (Protección Legal con "may include") */}
      <section className="py-16 md:py-24 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#164E63] text-xs font-bold tracking-[0.25em] uppercase block mb-2">
              {lang === "en" ? "TRANSPARENT BOUNDARIES" : "TRANSPARENCIA INSTITUCIONAL"}
            </span>
            <h2 className="text-xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-[#0F172A] mb-3">
              {lang === "en" ? "Coordinated Corridor Elements" : "Elementos de Gestión del Corredor"}
            </h2>
            <p className="text-xs text-[#64748B] tracking-wider uppercase leading-relaxed normal-case">
              {lang === "en" 
                ? "Our package options may include specific representation and logistical allocations. Please review the operational borders below:"
                : "Nuestros paquetes de coordinación pueden incluir gestiones y asignación de recursos específicos. Conozca las exclusiones y alcances a continuación:"}
            </p>
          </div>

          <div className="bg-white border border-slate-200/60 p-6 sm:p-10 shadow-sm max-w-2xl mx-auto">
            <div className="flex items-center gap-2 mb-6 text-[#164E63]">
              <ShieldCheck size={18} className="text-[#22B8CF] shrink-0" />
              <h3 className="font-serif text-sm font-bold tracking-widest uppercase">
                {lang === "en" ? "Scope of Administrative Management" : "Alcance de Gestión Administrativa"}
              </h3>
            </div>

            <ul className="space-y-4 text-xs sm:text-sm text-[#1E293B]">
              {content.whatsCoordinated.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-none bg-[#22B8CF]/10 text-[#164E63] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">•</span>
                  <div className="font-sans leading-relaxed text-[#1F2937]">
                    {item}
                  </div>
                </li>
              ))}
            </ul>

            <p className="text-[10px] text-slate-400 font-sans italic mt-6 border-t border-slate-100 pt-4 leading-normal normal-case">
              {lang === "en" 
                ? "*Scope notes: MTY Medical coordinates clinical fees on behalf of the patient, which may include operating rooms, anesthesia supplies, and private doctor introducing catalogs. Exact allocations depend on surgeon determinations."
                : "*Nota de alcance: MTY Medical gestiona y coordina la liquidación administrativa a cuenta y orden del paciente, lo cual puede incluir uso de quirófano en centro quirúrgico, gases de anestesia, insumos básicos y listado de introducción de especialistas."}
            </p>
          </div>

        </div>
      </section>

      {/* 6. FAQ ESPECÍFICO (3 acordeones interactivos) */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-[#164E63] text-xs font-bold tracking-[0.25em] uppercase block mb-2">
              {lang === "en" ? "SURGICAL TRUTHS" : "DUDAS ESPECÍFICAS RESOLUTIVAS"}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold uppercase tracking-wider text-[#0F172A]">
              {lang === "en" ? "Procedure FAQs" : "Preguntas Frecuentes"}
            </h2>
            <div className="h-1 w-12 bg-[#22B8CF] mx-auto mt-2"></div>
          </div>

          <div className="space-y-4">
            {content.faqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div 
                  key={index} 
                  className="border-b border-slate-100 pb-3"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left py-4 flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-[#0F172A] uppercase tracking-wide hover:text-[#22B8CF] transition-colors"
                  >
                    <span>{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp size={16} className="text-[#22B8CF] shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-[#22B8CF] shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed pb-4 pr-4 normal-case">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7. STRATEGIC CTA (Botón en #22B8CF que redirige a lead-capture preseleccionando) */}
      <section className="py-16 md:py-24 bg-[#0F172A] text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#164E63]/30 to-[#0F172A] z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-[#22B8CF] text-xs font-bold tracking-[0.25em] uppercase block">
            {lang === "en" ? "FAST-PASS SEAMLESS INTAKE" : "REGISTRO DE PRIORIDAD INMEDIATA"}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold uppercase tracking-wider text-white">
            {lang === "en" ? "Ready to Secure Your Surgical Date?" : "¿Listo para Vincular su Cirugía de Urgencia?"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl mx-auto normal-case leading-relaxed">
            {lang === "en" 
              ? "Bypass US wait periods immediately. Click below to begin your secure file setup. This procedure is automatically pre-selected in our registrar intake pipeline."
              : "Sáltese las interminables listas de espera del norte hoy mismo. Inicie su registro seguro. Este procedimiento se cargará en automático al cuestionario."}
          </p>

          <div className="pt-2">
            <button 
              onClick={handleCtaClick}
              className="bg-[#22B8CF] hover:bg-white text-[#0F172A] font-extrabold text-xs py-4 px-10 tracking-widest uppercase transition-all shadow-xl shadow-[#22B8CF]/15 cursor-pointer inline-block"
            >
              {lang === "en" ? "Open Secure Hospital Link File" : "Iniciar Expediente de Prioridad"}
            </button>
          </div>
        </div>
      </section>

      {/* 8. MANDATORY DISCLAIMER */}
      <section className="py-8 bg-slate-100 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[10px] sm:text-xs text-slate-500 font-sans tracking-wide leading-relaxed">
          <div className="flex items-center justify-center gap-1.5 text-slate-600 mb-2 font-bold uppercase tracking-widest justify-center">
            <ShieldAlert size={13} className="text-[#22B8CF]" />
            <span>{lang === "en" ? "Surgical Candidate Safeguard Requirement" : "Requisito Clínico Mandatorio de Idoneidad"}</span>
          </div>
          <p className="normal-case max-w-3xl mx-auto">
            <strong>
              {lang === "en" 
                ? "Final candidacy and surgical recommendations are determined exclusively by the treating physician after direct medical evaluation." 
                : "La candidatura definitiva y las recomendaciones quirúrgicas son determinadas exclusivamente por el médico tratante después de una evaluación médica directa."}
            </strong>
          </p>
        </div>
      </section>
    </motion.div>
  );
}
