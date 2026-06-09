import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Users,
  DollarSign,
  FileText,
  ShieldCheck,
  Award,
  Briefcase,
  PhoneCall,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PartnersProps {
  lang: "en" | "es";
}

const partnerFaqs = [
  {
    qEn: "When do I become eligible for compensation?",
    aEn: "You become eligible once the referred patient has paid the treatment package in full and treatment dates have been confirmed. Compensation is not issued for leads, consultations, or incomplete treatment packages.",
    qEs: "¿Cuándo soy elegible para recibir compensación?",
    aEs: "Eres elegible una vez que el paciente referido ha pagado el paquete de tratamiento en su totalidad y las fechas de tratamiento han sido confirmadas. La compensación no se emite por prospectos, consultas ni paquetes de tratamiento incompletos.",
  },
  {
    qEn: "How do I receive payment?",
    aEn: "Wise is the preferred payment method. Alternative payment methods may be available upon request. MTY Medical Tourism will contact you to confirm payment details once eligibility requirements have been met.",
    qEs: "¿Cómo recibo el pago?",
    aEs: "Wise es el método de pago preferido. Métodos alternativos pueden estar disponibles bajo solicitud. MTY Medical Tourism se pondrá en contacto para confirmar los datos de pago una vez que se hayan cumplido los requisitos de elegibilidad.",
  },
  {
    qEn: "How long does the referral process usually take?",
    aEn: "Most successful referrals are completed within approximately 30–90 days depending on the procedure and patient readiness. Medical referrals involve review, specialist approval, scheduling, and travel planning — timelines vary by case.",
    qEs: "¿Cuánto tiempo tarda generalmente el proceso de referido?",
    aEs: "La mayoría de los referidos exitosos se completan en aproximadamente 30 a 90 días, dependiendo del procedimiento y la disposición del paciente. Los referidos médicos implican revisión, aprobación del especialista, programación y planificación de viaje; los plazos varían según el caso.",
  },
  {
    qEn: "When will I receive payment?",
    aEn: "Compensation is issued within a maximum of 14 business days after eligibility requirements have been met.",
    qEs: "¿Cuándo recibiré el pago?",
    aEs: "La compensación se emite en un máximo de 14 días hábiles después de que se hayan cumplido los requisitos de elegibilidad.",
  },
  {
    qEn: "Is there a limit on how many patients I can refer?",
    aEn: "No. There is no cap on referrals. Every successful referral that results in a fully paid and confirmed treatment package earns the $200 compensation.",
    qEs: "¿Hay un límite en cuántos pacientes puedo referir?",
    aEs: "No. No hay límite en referidos. Cada referido exitoso que resulte en un paquete de tratamiento completamente pagado y confirmado genera la compensación de $200.",
  },
  {
    qEn: "Do I need medical knowledge to participate?",
    aEn: "No medical knowledge is required. Your role is to connect interested individuals with MTY Medical Tourism's coordination team. All clinical matters are handled exclusively by the physicians and healthcare facilities.",
    qEs: "¿Necesito conocimientos médicos para participar?",
    aEs: "No se requieren conocimientos médicos. Tu función es conectar a personas interesadas con el equipo de coordinación de MTY Medical Tourism. Todos los asuntos clínicos son manejados exclusivamente por los médicos e instituciones de salud.",
  },
  {
    qEn: "Can I modify or negotiate pricing for referred patients?",
    aEn: "No. Partners are not authorized to quote, negotiate, or modify pricing. All pricing information must come directly from MTY Medical Tourism's official published materials.",
    qEs: "¿Puedo modificar o negociar precios para los pacientes que refiero?",
    aEs: "No. Los socios no están autorizados para cotizar, negociar ni modificar precios. Toda la información de precios debe provenir directamente de los materiales oficiales de MTY Medical Tourism.",
  },
];

const audiences = [
  {
    icon: Briefcase,
    labelEn: "Insurance Agents",
    labelEs: "Agentes de Seguros",
  },
  { icon: Users, labelEn: "Realtors", labelEs: "Agentes Inmobiliarios" },
  {
    icon: FileText,
    labelEn: "Tax Preparers",
    labelEs: "Preparadores de Impuestos",
  },
  {
    icon: PhoneCall,
    labelEn: "Community Leaders",
    labelEs: "Líderes Comunitarios",
  },
  {
    icon: Award,
    labelEn: "Business Owners",
    labelEs: "Empresarios",
  },
  {
    icon: ShieldCheck,
    labelEn: "Professional Network Contacts",
    labelEs: "Contactos de Red Profesional",
  },
];

export default function Partners({ lang }: PartnersProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    cityState: "",
    networkDescription: "",
    termsAccepted: false,
  });

  const handleInput = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Email via Formspree — replace YOUR_PARTNER_FORMSPREE_ID
    try {
      await fetch("https://formspree.io/f/YOUR_PARTNER_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          profession: formData.profession,
          city_state: formData.cityState,
          network_description: formData.networkDescription,
          source: "partner-application",
        }),
      });
    } catch {
      // Continue to WhatsApp even if email fails
    }

    // WhatsApp notification
    const waMsg =
      `🤝 *MTY Medical — Partner Application*\n\n` +
      `*Name:* ${formData.fullName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Profession:* ${formData.profession}\n` +
      `*Location:* ${formData.cityState}\n` +
      `*Network:* ${formData.networkDescription || "—"}`;

    window.open(
      `https://wa.me/528110487334?text=${encodeURIComponent(waMsg)}`,
      "_blank"
    );

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const isFormValid =
    formData.fullName &&
    formData.email &&
    formData.phone &&
    formData.profession &&
    formData.cityState &&
    formData.termsAccepted;

  return (
    <div className="bg-[#FAFAF9]">
      {/* ── 1. HERO ── */}
      <section className="relative bg-[#0F172A] text-white pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#164E63]/50 via-[#0F172A] to-[#0F172A] z-0" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-[#164E63]/80 border border-[#22B8CF]/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#22B8CF] mb-6">
            <Award size={11} />
            <span>
              {lang === "en"
                ? "Professional Referral Program"
                : "Programa Profesional de Referidos"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wider text-white uppercase leading-tight mb-5">
            {lang === "en" ? "MTY Medical\nPartner Network" : "Red de Socios\nMTY Medical"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-sans max-w-xl mx-auto leading-relaxed normal-case mb-8">
            {lang === "en"
              ? "Refer patients to a trusted medical coordination service and earn a fixed compensation per completed procedure. No medical knowledge required."
              : "Refiere pacientes a un servicio confiable de coordinación médica y recibe una compensación fija por procedimiento completado. No se requieren conocimientos médicos."}
          </p>
          <a
            href="#apply"
            className="inline-block bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] font-extrabold text-xs py-4 px-10 tracking-widest uppercase transition-all shadow-lg shadow-[#22B8CF]/10"
          >
            {lang === "en" ? "Apply to Join" : "Solicitar Adhesión"}
          </a>
        </div>
      </section>

      {/* ── 2. HOW IT WORKS ── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#22B8CF] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
              {lang === "en" ? "Simple Process" : "Proceso Simple"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-[#0F172A]">
              {lang === "en" ? "How It Works" : "Cómo Funciona"}
            </h2>
            <div className="h-px w-12 bg-[#22B8CF]/50 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                titleEn: "Submit Application",
                titleEs: "Envía tu Solicitud",
                bodyEn:
                  "Complete the partner application below. Our team reviews all submissions and responds within 2 business days.",
                bodyEs:
                  "Completa la solicitud de socio a continuación. Nuestro equipo revisa todas las solicitudes y responde en 2 días hábiles.",
              },
              {
                step: "02",
                titleEn: "Get Approved",
                titleEs: "Recibe Aprobación",
                bodyEn:
                  "Approved partners receive a unique referral identifier to share with their network.",
                bodyEs:
                  "Los socios aprobados reciben un identificador único de referido para compartir con su red.",
              },
              {
                step: "03",
                titleEn: "Earn Per Procedure",
                titleEs: "Gana por Procedimiento",
                bodyEn:
                  "Receive USD $200 for every referred patient who completes a procedure and settles their account.",
                bodyEs:
                  "Recibe USD $200 por cada paciente referido que complete un procedimiento y liquide su cuenta.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#FAFAF9] border border-slate-200/60 p-8 hover:shadow-sm transition-all"
              >
                <span className="text-[#22B8CF]/30 font-serif text-2xl font-bold block mb-3">
                  {item.step}
                </span>
                <h3 className="font-serif text-sm font-bold tracking-widest uppercase text-[#0F172A] mb-3">
                  {lang === "en" ? item.titleEn : item.titleEs}
                </h3>
                <p className="text-xs text-[#64748B] leading-relaxed font-sans normal-case">
                  {lang === "en" ? item.bodyEn : item.bodyEs}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHO CAN PARTNER ── */}
      <section className="py-20 md:py-28 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#164E63] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
              {lang === "en" ? "Target Audiences" : "Perfiles Ideales"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-[#0F172A]">
              {lang === "en" ? "Who Can Become a Partner?" : "¿Quién Puede Ser Socio?"}
            </h2>
            <div className="h-px w-12 bg-[#164E63]/30 mx-auto mt-3" />
            <p className="text-xs text-[#64748B] mt-4 font-sans max-w-lg mx-auto normal-case">
              {lang === "en"
                ? "The program is open to professionals and community leaders who interact with individuals that may benefit from medical coordination services."
                : "El programa está abierto a profesionales y líderes comunitarios que interactúan con personas que podrían beneficiarse de los servicios de coordinación médica."}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {audiences.map((a) => (
              <div
                key={a.labelEn}
                className="flex items-center gap-3 bg-white border border-slate-200/60 px-5 py-4 hover:shadow-sm transition-all"
              >
                <a.icon size={15} className="text-[#22B8CF] shrink-0" />
                <span className="text-xs font-semibold text-[#0F172A] uppercase tracking-wide font-sans">
                  {lang === "en" ? a.labelEn : a.labelEs}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HOW COMPENSATION WORKS — 7-step timeline ── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#22B8CF] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
              {lang === "en" ? "Compensation Process" : "Proceso de Compensación"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-[#0F172A]">
              {lang === "en" ? "How Compensation Works" : "Cómo Funciona la Compensación"}
            </h2>
            <div className="h-px w-12 bg-[#22B8CF]/50 mx-auto mt-3" />
          </div>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="absolute left-[19px] top-8 bottom-8 w-px bg-slate-200 hidden sm:block" aria-hidden="true" />

            <div className="space-y-1">
              {[
                {
                  titleEn: "Register",
                  titleEs: "Regístrate",
                  bodyEn: "Submit your partner application and receive approval from our team.",
                  bodyEs: "Envía tu solicitud de socio y recibe aprobación de nuestro equipo.",
                },
                {
                  titleEn: "Receive Your Referral Link",
                  titleEs: "Recibe Tu Enlace de Referido",
                  bodyEn: "Once approved, you receive a unique referral identifier to share with your network.",
                  bodyEs: "Una vez aprobado, recibes un identificador único de referido para compartir con tu red.",
                },
                {
                  titleEn: "Share With Potential Patients",
                  titleEs: "Comparte Con Pacientes Potenciales",
                  bodyEn: "Share your referral link with individuals who may benefit from medical coordination services.",
                  bodyEs: "Comparte tu enlace con personas que puedan beneficiarse de los servicios de coordinación médica.",
                },
                {
                  titleEn: "Patient Completes Medical Review",
                  titleEs: "El Paciente Completa la Revisión Médica",
                  bodyEn: "The referred patient completes the initial consultation and specialist evaluation.",
                  bodyEs: "El paciente referido completa la consulta inicial y la evaluación del especialista.",
                },
                {
                  titleEn: "Patient Pays Treatment Package In Full",
                  titleEs: "El Paciente Paga el Paquete de Tratamiento en Su Totalidad",
                  bodyEn: "The patient settles the full treatment package amount with MTY Medical Tourism.",
                  bodyEs: "El paciente liquida el monto total del paquete de tratamiento con MTY Medical Tourism.",
                },
                {
                  titleEn: "Treatment Date Is Confirmed",
                  titleEs: "Se Confirma la Fecha de Tratamiento",
                  bodyEn: "The procedure date is officially scheduled and confirmed with the patient and medical team.",
                  bodyEs: "La fecha del procedimiento es programada y confirmada oficialmente con el paciente y el equipo médico.",
                },
                {
                  titleEn: "Compensation Issued",
                  titleEs: "Compensación Emitida",
                  bodyEn: "USD $200 is issued to you within a maximum of 14 business days via Wise or agreed method.",
                  bodyEs: "USD $200 se emite en un máximo de 14 días hábiles via Wise o el método acordado.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-5 items-start py-4">
                  <div className="w-10 h-10 bg-[#0F172A] border border-[#22B8CF]/30 flex items-center justify-center shrink-0 z-10 relative">
                    <span className="text-[#22B8CF] font-mono text-[10px] font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex-1 pt-1.5 pb-2 border-b border-slate-100 last:border-0">
                    <h3 className="font-serif text-sm font-bold uppercase tracking-wide text-[#0F172A] mb-1">
                      {lang === "en" ? step.titleEn : step.titleEs}
                    </h3>
                    <p className="text-xs text-[#64748B] leading-relaxed font-sans normal-case">
                      {lang === "en" ? step.bodyEn : step.bodyEs}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. COMPENSATION & PAYMENT ── */}
      <section className="py-20 md:py-28 bg-[#0F172A] text-white border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#22B8CF] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
              {lang === "en" ? "Partner Earnings" : "Ganancias del Socio"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-white">
              {lang === "en" ? "Compensation & Payment" : "Compensación y Pago"}
            </h2>
            <div className="h-px w-12 bg-[#22B8CF]/40 mx-auto mt-3" />
          </div>

          {/* Amount display */}
          <div className="text-center mb-10">
            <span className="text-slate-400 text-[10px] uppercase tracking-widest font-sans block mb-2">
              {lang === "en" ? "Per Successful Referral" : "Por Referido Exitoso"}
            </span>
            <span className="text-6xl sm:text-7xl font-serif font-bold text-[#22B8CF] tracking-wider block">
              $200
            </span>
            <span className="text-slate-400 text-xs font-sans mt-1 block">USD</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">

            {/* Eligibility */}
            <div className="bg-[#164E63]/20 border border-white/10 p-5 space-y-3">
              <p className="text-[9px] font-bold text-[#22B8CF] uppercase tracking-widest font-sans">
                {lang === "en" ? "Eligibility Requirements" : "Requisitos de Elegibilidad"}
              </p>
              {[
                {
                  en: "Patient treatment package paid in full",
                  es: "Paquete de tratamiento pagado en su totalidad",
                },
                {
                  en: "Treatment date confirmed",
                  es: "Fecha de tratamiento confirmada",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={12} className="text-[#22B8CF] mt-0.5 shrink-0" />
                  <span className="text-[11px] text-slate-300 font-sans leading-snug normal-case">
                    {lang === "en" ? item.en : item.es}
                  </span>
                </div>
              ))}
            </div>

            {/* Payment method */}
            <div className="bg-[#164E63]/20 border border-white/10 p-5 space-y-3">
              <p className="text-[9px] font-bold text-[#22B8CF] uppercase tracking-widest font-sans">
                {lang === "en" ? "Payment Method" : "Método de Pago"}
              </p>
              {[
                {
                  en: "Wise (preferred)",
                  es: "Wise (preferido)",
                },
                {
                  en: "Alternative methods available upon request",
                  es: "Métodos alternativos disponibles bajo solicitud",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <Check size={12} className="text-[#22B8CF] mt-0.5 shrink-0" />
                  <span className="text-[11px] text-slate-300 font-sans leading-snug normal-case">
                    {lang === "en" ? item.en : item.es}
                  </span>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="bg-[#164E63]/20 border border-white/10 p-5 space-y-3">
              <p className="text-[9px] font-bold text-[#22B8CF] uppercase tracking-widest font-sans">
                {lang === "en" ? "Payment Timeline" : "Plazo de Pago"}
              </p>
              <div className="flex items-start gap-2.5">
                <Clock size={12} className="text-[#22B8CF] mt-0.5 shrink-0" />
                <span className="text-[11px] text-slate-300 font-sans leading-snug normal-case">
                  {lang === "en"
                    ? "Within a maximum of 14 business days after eligibility requirements have been met."
                    : "En un máximo de 14 días hábiles después de que se hayan cumplido los requisitos de elegibilidad."}
                </span>
              </div>
            </div>

          </div>

          <p className="text-[10px] text-slate-500 font-sans normal-case max-w-xl mx-auto leading-relaxed text-center mt-8">
            {lang === "en"
              ? "Compensation is earned for successful patient referrals that result in a fully paid and confirmed treatment package. Compensation is not issued for leads, consultations, or incomplete packages. There are no enrollment fees or subscription costs."
              : "La compensación se devenga por referidos exitosos de pacientes que resulten en un paquete de tratamiento completamente pagado y confirmado. No se emite compensación por prospectos, consultas ni paquetes incompletos. No hay cuotas de inscripción ni costos de membresía."}
          </p>
        </div>
      </section>

      {/* ── 6. WHAT TO EXPECT ── */}
      <section className="py-20 md:py-28 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#164E63] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
              {lang === "en" ? "Transparency" : "Transparencia"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-[#0F172A]">
              {lang === "en" ? "What To Expect" : "Qué Puede Esperar"}
            </h2>
            <div className="h-px w-12 bg-[#164E63]/30 mx-auto mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-sm text-[#0F172A] font-serif font-semibold leading-relaxed mb-4 normal-case">
                {lang === "en"
                  ? "Medical referrals differ from traditional referral programs."
                  : "Los referidos médicos son distintos a los programas de referidos tradicionales."}
              </p>
              <p className="text-xs text-[#64748B] font-sans leading-relaxed normal-case mb-5">
                {lang === "en"
                  ? "Every patient case undergoes an individualized review process. Timelines depend on the procedure, specialist availability, and the patient's own readiness to proceed."
                  : "Cada caso de paciente pasa por un proceso de revisión individualizado. Los plazos dependen del procedimiento, la disponibilidad del especialista y la disposición del propio paciente para avanzar."}
              </p>
              <p className="text-xs text-[#64748B] font-sans leading-relaxed normal-case">
                {lang === "en"
                  ? "Most successful referrals are completed within approximately 30–90 days depending on the procedure and patient readiness."
                  : "La mayoría de los referidos exitosos se completan en aproximadamente 30 a 90 días, dependiendo del procedimiento y la disposición del paciente."}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-[9px] font-bold text-[#164E63] uppercase tracking-widest font-sans mb-4">
                {lang === "en" ? "Patients Often Require" : "Los Pacientes Frecuentemente Requieren"}
              </p>
              {[
                { en: "Medical review by a specialist", es: "Revisión médica por un especialista" },
                { en: "Specialist approval to proceed", es: "Aprobación del especialista para continuar" },
                { en: "Procedure scheduling & coordination", es: "Programación y coordinación del procedimiento" },
                { en: "Travel planning and logistics", es: "Planificación de viaje y logística" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 bg-white border border-slate-200/60 px-4 py-3">
                  <Clock size={12} className="text-[#164E63]/60 mt-0.5 shrink-0" />
                  <span className="text-xs text-[#475569] font-sans normal-case">
                    {lang === "en" ? item.en : item.es}
                  </span>
                </div>
              ))}

              <div className="bg-[#164E63]/5 border border-[#164E63]/15 px-4 py-3 mt-2">
                <p className="text-[10px] text-[#164E63] font-sans leading-relaxed normal-case">
                  {lang === "en"
                    ? "Setting realistic expectations benefits everyone — partners, patients, and our coordination team."
                    : "Establecer expectativas realistas beneficia a todos: socios, pacientes y nuestro equipo de coordinación."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#164E63] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
              {lang === "en" ? "Common Questions" : "Preguntas Frecuentes"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-[#0F172A]">FAQ</h2>
            <div className="h-px w-12 bg-[#164E63]/30 mx-auto mt-3" />
          </div>

          <div className="space-y-2">
            {partnerFaqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div key={i} className="border-b border-slate-100 pb-1">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full text-left py-4 flex items-center justify-between gap-4 font-serif text-sm font-bold text-[#0F172A] uppercase tracking-wide hover:text-[#22B8CF] transition-colors"
                  >
                    <span>{lang === "en" ? faq.qEn : faq.qEs}</span>
                    {isOpen ? (
                      <ChevronUp size={15} className="text-[#22B8CF] shrink-0" />
                    ) : (
                      <ChevronDown size={15} className="text-[#22B8CF] shrink-0" />
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
                        <p className="text-xs text-slate-500 font-sans leading-relaxed pb-4 pr-4 normal-case">
                          {lang === "en" ? faq.aEn : faq.aEs}
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

      {/* ── 6. APPLICATION FORM ── */}
      <section id="apply" className="py-20 md:py-28 bg-[#0F172A] text-white border-b border-white/5">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-12">
                <span className="text-[#22B8CF] text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">
                  {lang === "en" ? "Partner Application" : "Solicitud de Socio"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold uppercase tracking-wider text-white">
                  {lang === "en" ? "Apply to Join" : "Solicitar Adhesión"}
                </h2>
                <div className="h-px w-12 bg-[#22B8CF]/40 mx-auto mt-3" />
                <p className="text-xs text-slate-400 mt-4 font-sans normal-case max-w-md mx-auto">
                  {lang === "en"
                    ? "Complete the form below. Our team will review your application and contact you within 2 business days."
                    : "Completa el formulario a continuación. Nuestro equipo revisará tu solicitud y te contactará en 2 días hábiles."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1.5 font-sans">
                      {lang === "en" ? "Full Name *" : "Nombre Completo *"}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleInput}
                      placeholder={lang === "en" ? "Your full name" : "Tu nombre completo"}
                      className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1.5 font-sans">
                      {lang === "en" ? "Email Address *" : "Correo Electrónico *"}
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInput}
                      placeholder="email@example.com"
                      className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500 font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1.5 font-sans">
                      {lang === "en" ? "Phone Number *" : "Teléfono *"}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInput}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1.5 font-sans">
                      {lang === "en" ? "City / State *" : "Ciudad / Estado *"}
                    </label>
                    <input
                      type="text"
                      name="cityState"
                      required
                      value={formData.cityState}
                      onChange={handleInput}
                      placeholder={lang === "en" ? "e.g. Houston, TX" : "Ej. Houston, TX"}
                      className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500 font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1.5 font-sans">
                    {lang === "en" ? "Profession / Role *" : "Profesión / Rol *"}
                  </label>
                  <select
                    name="profession"
                    required
                    value={formData.profession}
                    onChange={handleInput}
                    className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none cursor-pointer font-sans"
                  >
                    <option value="">
                      {lang === "en" ? "Select your role..." : "Selecciona tu rol..."}
                    </option>
                    <option value="Insurance Agent">
                      {lang === "en" ? "Insurance Agent" : "Agente de Seguros"}
                    </option>
                    <option value="Realtor">
                      {lang === "en" ? "Realtor / Real Estate Agent" : "Agente Inmobiliario"}
                    </option>
                    <option value="Tax Preparer">
                      {lang === "en" ? "Tax Preparer / Accountant" : "Preparador de Impuestos / Contador"}
                    </option>
                    <option value="Community Leader">
                      {lang === "en" ? "Community Leader" : "Líder Comunitario"}
                    </option>
                    <option value="Business Owner">
                      {lang === "en" ? "Business Owner" : "Empresario / Dueño de Negocio"}
                    </option>
                    <option value="Existing Client">
                      {lang === "en" ? "Existing MTY Medical Client" : "Cliente Existente de MTY Medical"}
                    </option>
                    <option value="Other Professional">
                      {lang === "en" ? "Other Professional" : "Otro Profesional"}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-300 uppercase tracking-widest mb-1.5 font-sans">
                    {lang === "en"
                      ? "Brief Description of Your Network (optional)"
                      : "Descripción Breve de tu Red (opcional)"}
                  </label>
                  <textarea
                    name="networkDescription"
                    rows={3}
                    value={formData.networkDescription}
                    onChange={handleInput}
                    placeholder={
                      lang === "en"
                        ? "Briefly describe the community or professional network you work with..."
                        : "Describe brevemente la comunidad o red profesional con la que trabajas..."
                    }
                    className="w-full bg-[#0F172A]/70 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#22B8CF] transition-colors rounded-none placeholder-slate-500 font-sans resize-none"
                  />
                </div>

                {/* Terms checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2.5 text-xs text-slate-300 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      required
                      checked={formData.termsAccepted}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }))
                      }
                      className="mt-0.5 accent-[#22B8CF] shrink-0"
                    />
                    <p className="leading-snug font-sans">
                      {lang === "en" ? (
                        <>
                          I have read and agree to the{" "}
                          <Link
                            to="/partners/terms"
                            className="text-[#22B8CF] hover:underline"
                            target="_blank"
                          >
                            Partner Program Terms & Conditions
                          </Link>
                          .
                        </>
                      ) : (
                        <>
                          He leído y acepto los{" "}
                          <Link
                            to="/partners/terms"
                            className="text-[#22B8CF] hover:underline"
                            target="_blank"
                          >
                            Términos y Condiciones del Programa de Socios
                          </Link>
                          .
                        </>
                      )}
                    </p>
                  </label>
                </div>

                {/* Validation hints */}
                {!isFormValid && (
                  formData.fullName || formData.email || formData.phone
                ) && (
                  <div className="text-[10px] text-amber-400/75 font-sans space-y-0.5 text-right leading-relaxed">
                    {!formData.fullName && <p>· {lang === "en" ? "Full name required" : "Nombre requerido"}</p>}
                    {!formData.email && <p>· {lang === "en" ? "Email required" : "Correo requerido"}</p>}
                    {!formData.phone && <p>· {lang === "en" ? "Phone required" : "Teléfono requerido"}</p>}
                    {!formData.profession && <p>· {lang === "en" ? "Select your profession" : "Selecciona tu profesión"}</p>}
                    {!formData.cityState && <p>· {lang === "en" ? "City / State required" : "Ciudad / Estado requerido"}</p>}
                    {!formData.termsAccepted && <p>· {lang === "en" ? "Accept the Terms & Conditions" : "Acepta los Términos y Condiciones"}</p>}
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || !isFormValid}
                    className="w-full bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] disabled:opacity-50 disabled:cursor-not-allowed font-extrabold text-xs py-4 uppercase tracking-widest transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>{lang === "en" ? "Submitting..." : "Enviando..."}</span>
                    ) : (
                      <>
                        <span>
                          {lang === "en" ? "Submit Application & Open WhatsApp" : "Enviar Solicitud y Abrir WhatsApp"}
                        </span>
                        <ArrowRight size={13} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-12 space-y-5">
              <div className="w-12 h-12 rounded-none bg-[#22B8CF]/10 border border-[#22B8CF]/30 flex items-center justify-center mx-auto">
                <Check size={20} className="text-[#22B8CF]" />
              </div>
              <h2 className="text-xl font-serif font-bold text-white uppercase tracking-wider">
                {lang === "en" ? "Application Received" : "Solicitud Recibida"}
              </h2>
              <p className="text-sm text-slate-300 font-sans max-w-sm mx-auto leading-relaxed normal-case">
                {lang === "en"
                  ? `Thank you, ${formData.fullName}. Our team will review your application and contact you within 2 business days.`
                  : `Gracias, ${formData.fullName}. Nuestro equipo revisará tu solicitud y te contactará en 2 días hábiles.`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── PARTNER GUIDELINES SUMMARY ── */}
      <section className="py-16 md:py-20 bg-[#FAFAF9] border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Allowed */}
            <div>
              <span className="text-[10px] font-bold text-[#22B8CF] uppercase tracking-widest block mb-4 font-sans">
                {lang === "en" ? "Allowed Activities" : "Actividades Permitidas"}
              </span>
              <ul className="space-y-2.5">
                {[
                  { en: "Sharing official MTY Medical Tourism content", es: "Compartir contenido oficial de MTY Medical Tourism" },
                  { en: "Referring prospective patients", es: "Referir pacientes potenciales" },
                  { en: "Sharing the official website link", es: "Compartir el enlace del sitio web oficial" },
                  { en: "Explaining that all cases require physician review", es: "Explicar que todos los casos requieren revisión médica" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#475569] font-sans">
                    <Check size={13} className="text-[#22B8CF] mt-0.5 shrink-0" />
                    <span>{lang === "en" ? item.en : item.es}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not Allowed */}
            <div>
              <span className="text-[10px] font-bold text-rose-400/80 uppercase tracking-widest block mb-4 font-sans">
                {lang === "en" ? "Not Allowed" : "No Permitido"}
              </span>
              <ul className="space-y-2.5">
                {[
                  { en: "Providing medical advice or recommendations", es: "Proporcionar consejos médicos o recomendaciones" },
                  { en: "Guaranteeing results, approval, or eligibility", es: "Garantizar resultados, aprobación o elegibilidad" },
                  { en: "Modifying or negotiating pricing", es: "Modificar o negociar precios" },
                  { en: "Representing hospitals or physicians", es: "Representar hospitales o médicos" },
                  { en: "Creating unauthorized promotional materials", es: "Crear materiales promocionales no autorizados" },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#475569] font-sans">
                    <span className="text-rose-400/80 shrink-0 mt-0.5 font-bold text-sm leading-none">×</span>
                    <span>{lang === "en" ? item.en : item.es}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/partners/terms"
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#164E63] hover:text-[#22B8CF] transition-colors"
            >
              {lang === "en" ? "Read Full Terms & Conditions" : "Leer Términos y Condiciones Completos"}
              <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
