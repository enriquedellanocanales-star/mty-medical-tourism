import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";

interface PartnerTermsProps {
  lang: "en" | "es";
}

export default function PartnerTerms({ lang }: PartnerTermsProps) {
  const sections = [
    {
      num: "01",
      titleEn: "Program Purpose",
      titleEs: "Propósito del Programa",
      bodyEn:
        "The MTY Medical Partner Network is a voluntary referral program operated by MTY Medical Tourism. The program allows approved individuals to refer prospective patients to MTY Medical Tourism's coordination services. Partners are not employees, agents, or representatives of MTY Medical Tourism, nor of any hospital, clinic, or physician.",
      bodyEs:
        "La Red de Socios MTY Medical es un programa de referidos voluntario operado por MTY Medical Tourism. El programa permite a personas aprobadas referir pacientes potenciales a los servicios de coordinación de MTY Medical Tourism. Los socios no son empleados, agentes ni representantes de MTY Medical Tourism, ni de ningún hospital, clínica o médico.",
    },
    {
      num: "02",
      titleEn: "Eligibility",
      titleEs: "Elegibilidad",
      bodyEn:
        "Participation is open to individuals 18 years of age or older who complete the partner application and receive written approval from MTY Medical Tourism. MTY Medical Tourism reserves the right to approve or deny any application at its sole discretion and to revoke partner status at any time.",
      bodyEs:
        "La participación está abierta a personas mayores de 18 años que completen la solicitud de socio y reciban aprobación por escrito de MTY Medical Tourism. MTY Medical Tourism se reserva el derecho de aprobar o rechazar cualquier solicitud a su entera discreción, así como de revocar el estatus de socio en cualquier momento.",
    },
    {
      num: "03",
      titleEn: "Referral Compensation",
      titleEs: "Compensación por Referido",
      bodyEn:
        "Approved partners are eligible to receive a referral compensation of USD $200 per completed procedure. A procedure is considered completed when the referred patient has undergone the scheduled surgical or clinical procedure and the patient account has been fully settled with MTY Medical Tourism.",
      bodyEs:
        "Los socios aprobados son elegibles para recibir una compensación por referido de USD $200 por procedimiento completado. Un procedimiento se considera completado cuando el paciente referido se ha sometido al procedimiento quirúrgico o clínico programado y la cuenta del paciente ha sido liquidada en su totalidad con MTY Medical Tourism.",
    },
    {
      num: "04",
      titleEn: "Compensation Conditions",
      titleEs: "Condiciones de Compensación",
      bodyEn:
        "Compensation is earned only upon: (1) the referred patient completing the procedure; (2) full settlement of the patient account. No compensation is owed for referrals that do not result in a completed procedure, for cancelled procedures, for procedures in progress, or for cases where payment has not been received. Compensation is paid by MTY Medical Tourism through agreed methods within a reasonable period following account settlement.",
      bodyEs:
        "La compensación se devenga únicamente cuando: (1) el paciente referido completa el procedimiento; (2) la cuenta del paciente queda completamente liquidada. No se deberá compensación por referidos que no resulten en un procedimiento completado, por procedimientos cancelados, por procedimientos en curso ni por casos en que el pago no haya sido recibido. La compensación es pagada por MTY Medical Tourism a través de los métodos acordados dentro de un plazo razonable tras la liquidación de la cuenta.",
    },
    {
      num: "05",
      titleEn: "Prohibited Activities",
      titleEs: "Actividades Prohibidas",
      bodyEn:
        "Partners may not: (a) provide medical advice of any kind; (b) recommend specific procedures, treatments, or physicians; (c) guarantee medical outcomes, eligibility, or procedure approval; (d) quote, modify, or negotiate pricing on behalf of MTY Medical Tourism; (e) create, distribute, or publish unauthorized promotional materials; (f) use MTY Medical Tourism's name, logo, or brand in any manner not expressly authorized in writing; (g) collect payments or deposits from prospective patients; (h) engage in any misleading, deceptive, or high-pressure referral practices.",
      bodyEs:
        "Los socios no pueden: (a) brindar consejo médico de ningún tipo; (b) recomendar procedimientos, tratamientos o médicos específicos; (c) garantizar resultados médicos, elegibilidad ni aprobación de procedimientos; (d) cotizar, modificar ni negociar precios a nombre de MTY Medical Tourism; (e) crear, distribuir ni publicar materiales promocionales no autorizados; (f) usar el nombre, logotipo o marca de MTY Medical Tourism de manera no expresamente autorizada por escrito; (g) cobrar pagos o depósitos a pacientes potenciales; (h) emplear prácticas de referido engañosas, falsas o de alta presión.",
    },
    {
      num: "06",
      titleEn: "No Authority to Represent MTY Medical Tourism",
      titleEs: "Sin Autoridad para Representar a MTY Medical Tourism",
      bodyEn:
        "Partners have no authority to enter into contracts, make commitments, accept payments, or act in any capacity on behalf of MTY Medical Tourism. Partners must clearly identify themselves as independent referral partners and not as employees, staff, or official representatives of the company.",
      bodyEs:
        "Los socios no tienen autoridad para celebrar contratos, asumir compromisos, aceptar pagos ni actuar en ninguna capacidad a nombre de MTY Medical Tourism. Los socios deben identificarse claramente como socios de referido independientes y no como empleados, personal ni representantes oficiales de la empresa.",
    },
    {
      num: "07",
      titleEn: "No Authority to Represent Hospitals or Physicians",
      titleEs: "Sin Autoridad para Representar Hospitales o Médicos",
      bodyEn:
        "Partners have no authority to represent, speak on behalf of, or make commitments for any hospital, clinic, surgical facility, or physician associated with MTY Medical Tourism's network. All clinical matters are exclusively the responsibility of the treating physician and the healthcare facility.",
      bodyEs:
        "Los socios no tienen autoridad para representar, hablar en nombre de ni asumir compromisos por ningún hospital, clínica, instalación quirúrgica o médico asociado con la red de MTY Medical Tourism. Todos los asuntos clínicos son responsabilidad exclusiva del médico tratante y de la institución de salud.",
    },
    {
      num: "08",
      titleEn: "No Medical Advice",
      titleEs: "Sin Consejos Médicos",
      bodyEn:
        "Partners are strictly prohibited from providing any form of medical advice, clinical opinions, diagnosis, or treatment recommendations. Any health-related questions from prospective patients must be directed exclusively to MTY Medical Tourism's coordination team or to a licensed healthcare provider.",
      bodyEs:
        "Los socios tienen estrictamente prohibido proporcionar cualquier forma de consejo médico, opinión clínica, diagnóstico o recomendación de tratamiento. Cualquier pregunta relacionada con la salud de pacientes potenciales debe ser dirigida exclusivamente al equipo de coordinación de MTY Medical Tourism o a un proveedor de salud con licencia.",
    },
    {
      num: "09",
      titleEn: "No Guarantees of Outcomes",
      titleEs: "Sin Garantías de Resultados",
      bodyEn:
        "Partners must not, under any circumstances, guarantee or imply guaranteed outcomes, surgical results, recovery timelines, or procedure eligibility to any prospective patient. All medical outcomes depend solely on the clinical assessment and decisions of the treating physician.",
      bodyEs:
        "Los socios no deben, bajo ninguna circunstancia, garantizar ni insinuar resultados garantizados, resultados quirúrgicos, tiempos de recuperación ni elegibilidad para procedimientos a ningún paciente potencial. Todos los resultados médicos dependen exclusivamente de la evaluación clínica y las decisiones del médico tratante.",
    },
    {
      num: "10",
      titleEn: "No Price Modifications",
      titleEs: "Sin Modificaciones de Precios",
      bodyEn:
        "Partners may not quote, negotiate, discount, or modify pricing for any procedure or service offered by MTY Medical Tourism. All pricing information must be obtained directly from MTY Medical Tourism's official published materials.",
      bodyEs:
        "Los socios no pueden cotizar, negociar, descontar ni modificar precios de ningún procedimiento o servicio ofrecido por MTY Medical Tourism. Toda la información de precios debe obtenerse directamente de los materiales oficiales publicados por MTY Medical Tourism.",
    },
    {
      num: "11",
      titleEn: "Termination",
      titleEs: "Terminación",
      bodyEn:
        "Either party may terminate participation in the Partner Network at any time, with or without cause, upon written notice. MTY Medical Tourism may immediately suspend or terminate a partner's participation for any violation of these Terms & Conditions. Termination does not affect compensation earned and settled prior to the termination date.",
      bodyEs:
        "Cualquiera de las partes puede terminar la participación en la Red de Socios en cualquier momento, con o sin causa, mediante notificación por escrito. MTY Medical Tourism puede suspender o terminar inmediatamente la participación de un socio por cualquier violación de estos Términos y Condiciones. La terminación no afecta la compensación devengada y liquidada antes de la fecha de terminación.",
    },
    {
      num: "12",
      titleEn: "General Disclaimer",
      titleEs: "Aviso General",
      bodyEn:
        "MTY Medical Tourism makes no representations or warranties regarding the outcomes of any medical procedure, the availability of specific physicians or facilities, or the continuity of the Partner Program. These Terms & Conditions are subject to change at any time with notice to active partners. Continued participation after notice of changes constitutes acceptance of the updated terms.",
      bodyEs:
        "MTY Medical Tourism no realiza declaraciones ni garantías respecto a los resultados de ningún procedimiento médico, la disponibilidad de médicos o instalaciones específicas ni la continuidad del Programa de Socios. Estos Términos y Condiciones están sujetos a cambios en cualquier momento, con notificación a los socios activos. La participación continuada tras la notificación de cambios constituye la aceptación de los términos actualizados.",
    },
  ];

  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      {/* Header */}
      <div className="bg-[#0F172A] pt-20 pb-12 md:pb-16 border-b border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#22B8CF] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span>{lang === "en" ? "Partner Program" : "Programa de Socios"}</span>
          </Link>
          <div className="flex items-center gap-2.5 mb-4">
            <ShieldCheck size={16} className="text-[#22B8CF]" />
            <span className="text-[9px] font-bold text-[#22B8CF] uppercase tracking-widest font-sans">
              {lang === "en" ? "Legal Document" : "Documento Legal"}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase tracking-wider leading-tight">
            {lang === "en"
              ? "Partner Program Terms & Conditions"
              : "Términos y Condiciones del Programa de Socios"}
          </h1>
          <p className="text-[11px] text-slate-400 mt-3 font-sans">
            MTY Medical Partner Network &nbsp;·&nbsp;{" "}
            {lang === "en" ? "Effective June 2026" : "Vigente a partir de junio 2026"}
          </p>
        </div>
      </div>

      {/* Terms content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.num} className="flex gap-6 items-start">
              <span className="text-[#22B8CF]/30 font-serif text-lg font-bold shrink-0 w-8 pt-0.5">
                {s.num}
              </span>
              <div className="flex-1 border-b border-slate-200 pb-8">
                <h2 className="font-serif text-sm font-bold uppercase tracking-widest text-[#0F172A] mb-3">
                  {lang === "en" ? s.titleEn : s.titleEs}
                </h2>
                <p className="text-sm text-[#475569] leading-relaxed font-sans normal-case">
                  {lang === "en" ? s.bodyEn : s.bodyEs}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-12 p-5 bg-slate-100 border border-slate-200 text-[11px] text-slate-500 font-sans leading-relaxed space-y-1">
          <p className="font-semibold text-slate-600 uppercase tracking-wider text-[10px]">
            {lang === "en" ? "Questions about these terms?" : "¿Preguntas sobre estos términos?"}
          </p>
          <p>
            {lang === "en"
              ? "Contact MTY Medical Tourism at "
              : "Contacte a MTY Medical Tourism en "}
            <a
              href="mailto:concierge@mtymedicaltourism.com"
              className="text-[#164E63] hover:underline"
            >
              concierge@mtymedicaltourism.com
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/partners"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#164E63] hover:text-[#22B8CF] transition-colors"
          >
            <ArrowLeft size={13} />
            {lang === "en" ? "Back to Partner Program" : "Volver al Programa de Socios"}
          </Link>
        </div>
      </div>
    </div>
  );
}
