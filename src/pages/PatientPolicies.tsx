import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp, ShieldCheck, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PatientPoliciesProps {
  lang: "en" | "es";
}

interface PolicySection {
  id: string;
  titleEn: string;
  titleEs: string;
  contentEn: React.ReactNode;
  contentEs: React.ReactNode;
}

export default function PatientPolicies({ lang }: PatientPoliciesProps) {
  const [openSection, setOpenSection] = useState<string | null>("cancellation");

  const toggle = (id: string) => setOpenSection(openSection === id ? null : id);

  const policies: PolicySection[] = [
    {
      id: "cancellation",
      titleEn: "Cancellation Policy",
      titleEs: "Política de Cancelación",
      contentEn: (
        <div className="space-y-5 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-1">Reservation Deposit</p>
            <p>A reservation deposit of <strong>30% of the package price</strong> is required to confirm a procedure date.</p>
          </div>
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">Grace Period</p>
            <p>Patients have a <strong>24-hour grace period</strong> following deposit payment during which the deposit is fully refundable.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left p-3 font-bold uppercase tracking-wider">Cancellation Timing</th>
                  <th className="text-left p-3 font-bold uppercase tracking-wider">Refund</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-3">Within 24 hours of deposit payment</td>
                  <td className="p-3 text-emerald-700 font-semibold">100% of deposit refunded</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="p-3">After 24-hour grace period</td>
                  <td className="p-3 text-red-600 font-semibold">Deposit non-refundable</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3">More than 30 days before procedure (after grace period)</td>
                  <td className="p-3">
                    <span className="font-semibold">Option A:</span> Reschedule at no charge<br />
                    <span className="font-semibold">Option B:</span> 50% of the deposit refunded<br />
                    <span className="text-slate-400 text-[10px]">(This is 50% of the deposit amount, not 50% of the total package price)</span>
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">Less than 30 days before procedure</td>
                  <td className="p-3 text-red-600 font-semibold">No refund</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
      contentEs: (
        <div className="space-y-5 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-1">Depósito de Reserva</p>
            <p>Se requiere un depósito de reserva del <strong>30% del precio del paquete</strong> para confirmar una fecha de procedimiento.</p>
          </div>
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">Período de Gracia</p>
            <p>El paciente dispone de un <strong>período de gracia de 24 horas</strong> desde el pago del depósito durante el cual el depósito es totalmente reembolsable.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left p-3 font-bold uppercase tracking-wider">Momento de Cancelación</th>
                  <th className="text-left p-3 font-bold uppercase tracking-wider">Reembolso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="p-3">Dentro de las 24 horas del pago del depósito</td>
                  <td className="p-3 text-emerald-700 font-semibold">100% del depósito reembolsado</td>
                </tr>
                <tr className="border-b border-slate-100 bg-slate-50">
                  <td className="p-3">Después del período de gracia de 24 horas</td>
                  <td className="p-3 text-red-600 font-semibold">Depósito no reembolsable</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3">Más de 30 días antes del procedimiento (después del período de gracia)</td>
                  <td className="p-3">
                    <span className="font-semibold">Opción A:</span> Reprogramación sin cargo<br />
                    <span className="font-semibold">Opción B:</span> 50% del depósito reembolsado<br />
                    <span className="text-slate-400 text-[10px]">(Esto es el 50% del monto del depósito, no el 50% del precio total del paquete)</span>
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3">Menos de 30 días antes del procedimiento</td>
                  <td className="p-3 text-red-600 font-semibold">Sin reembolso</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
    {
      id: "payment",
      titleEn: "Refund & Payment Policy",
      titleEs: "Política de Pago y Reembolso",
      contentEn: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">Payment Schedule</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span><strong>30%</strong> reservation deposit — due at booking.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span><strong>70%</strong> remaining balance — must be paid at least <strong>7 days before the procedure date</strong>.</span></li>
            </ul>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 text-[11px] text-amber-800">
            If the remaining balance is not received at least 7 days before the procedure, the scheduled date may be released to another patient. The reservation deposit remains non-refundable in this scenario.
          </div>
        </div>
      ),
      contentEs: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">Calendario de Pagos</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Depósito de reserva del <strong>30%</strong> — pagadero al momento de la reserva.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Saldo restante del <strong>70%</strong> — debe pagarse al menos <strong>7 días antes de la fecha del procedimiento</strong>.</span></li>
            </ul>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 text-[11px] text-amber-800">
            Si el saldo restante no se recibe al menos 7 días antes del procedimiento, la fecha programada podrá ser liberada a otro paciente. El depósito de reserva permanece no reembolsable en este escenario.
          </div>
        </div>
      ),
    },
    {
      id: "eligibility",
      titleEn: "Medical Eligibility Policy",
      titleEs: "Política de Elegibilidad Médica",
      contentEn: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>Final medical eligibility is determined exclusively by the treating physician following direct clinical evaluation. Submission of a consultation request or payment of a deposit does not guarantee medical acceptance or procedure approval.</p>
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">If a Patient Is Not Medically Eligible</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Unused medical services that have not yet been rendered may be eligible for refund.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Services already provided — including consultations, pre-operative evaluations, or testing — are non-refundable.</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400">MTY Medical Tourism is a coordination service. We do not practice medicine or make clinical determinations. All medical decisions are made exclusively by the licensed treating physician and healthcare facility.</p>
        </div>
      ),
      contentEs: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>La elegibilidad médica final es determinada exclusivamente por el médico tratante tras una evaluación clínica directa. El envío de una solicitud de consulta o el pago de un depósito no garantiza la aceptación médica ni la aprobación del procedimiento.</p>
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">Si el Paciente No Es Médicamente Elegible</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Los servicios médicos no utilizados que aún no hayan sido prestados pueden ser elegibles para reembolso.</span></li>
              <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Los servicios ya prestados — incluyendo consultas, evaluaciones preoperatorias o estudios — no son reembolsables.</span></li>
            </ul>
          </div>
          <p className="text-xs text-slate-400">MTY Medical Tourism es un servicio de coordinación. No ejercemos la medicina ni realizamos determinaciones clínicas. Todas las decisiones médicas son tomadas exclusivamente por el médico tratante certificado y la institución de salud.</p>
        </div>
      ),
    },
    {
      id: "travel",
      titleEn: "Travel Disruption Policy",
      titleEs: "Política de Interrupción de Viaje",
      contentEn: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>The following documented situations may qualify for rescheduling without penalty, subject to provider availability:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Documented airline cancellation</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Severe weather events</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Government-issued travel restrictions</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Travel disruptions outside the patient's reasonable control</span></li>
          </ul>
          <p>Documentation must be provided to MTY Medical Tourism before rescheduling can be confirmed.</p>
          <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-500">
            Additional travel-related expenses — including airfare change fees, rebooking costs, or new hotel arrangements outside of the coordination package — remain the sole responsibility of the patient.
          </div>
        </div>
      ),
      contentEs: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>Las siguientes situaciones documentadas pueden calificar para reprogramación sin penalización, sujeto a disponibilidad del proveedor:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Cancelación de vuelo documentada</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Eventos climáticos severos</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Restricciones de viaje emitidas por el gobierno</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Interrupciones de viaje fuera del control razonable del paciente</span></li>
          </ul>
          <p>La documentación debe ser proporcionada a MTY Medical Tourism antes de confirmar la reprogramación.</p>
          <div className="p-4 bg-slate-50 border border-slate-200 text-xs text-slate-500">
            Los gastos adicionales relacionados con el viaje — incluyendo cargos por cambio de vuelo, costos de reprogramación u hospedaje adicional fuera del paquete de coordinación — son responsabilidad exclusiva del paciente.
          </div>
        </div>
      ),
    },
    {
      id: "extended",
      titleEn: "Extended Recovery Policy",
      titleEs: "Política de Recuperación Extendida",
      contentEn: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>Each package includes a defined number of recovery nights at Antaris Fundidora and, where applicable, hospital nights at Hospital ION.</p>
          <p>If the treating physician determines that additional monitoring or recovery time is medically necessary, the following apply:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Additional lodging at Antaris Fundidora will be arranged by MTY Medical Tourism.</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Additional transportation coordination will be provided as needed.</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>All additional services and nights are billed separately and are not included in the original package price.</span></li>
          </ul>
          <div className="p-4 bg-[#0F172A] text-white text-xs leading-relaxed">
            "Additional recovery nights may be required if the treating physician determines that additional monitoring or recovery time is medically necessary. Additional lodging, transportation, and related services are not included in the original package price and will be billed separately."
          </div>
        </div>
      ),
      contentEs: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>Cada paquete incluye un número definido de noches de recuperación en Antaris Fundidora y, cuando aplica, noches de hospitalización en Hospital ION.</p>
          <p>Si el médico tratante determina que se requiere monitoreo o tiempo de recuperación adicional de manera médicamente necesaria, aplica lo siguiente:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>MTY Medical Tourism coordinará el alojamiento adicional en Antaris Fundidora.</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Se proporcionará coordinación de transporte adicional según sea necesario.</span></li>
            <li className="flex items-start gap-2"><span className="text-[#22B8CF] font-bold mt-0.5">•</span><span>Todos los servicios y noches adicionales se facturan por separado y no están incluidos en el precio original del paquete.</span></li>
          </ul>
          <div className="p-4 bg-[#0F172A] text-white text-xs leading-relaxed">
            "Noches de recuperación adicionales podrán ser requeridas si el médico tratante determina que el monitoreo o el tiempo de recuperación adicional es médicamente necesario. El alojamiento, transporte y servicios relacionados adicionales no están incluidos en el precio original del paquete y serán facturados por separado."
          </div>
        </div>
      ),
    },
    {
      id: "noshow",
      titleEn: "No Show Policy",
      titleEs: "Política de No Presentación",
      contentEn: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>A no-show is defined as failure to appear for a scheduled procedure date without prior written notice to MTY Medical Tourism.</p>
          <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-700">
            <strong>In the event of a no-show: all payments made — including the reservation deposit and any portion of the remaining balance — become non-refundable.</strong>
          </div>
          <p>If you are unable to attend your scheduled procedure, please contact MTY Medical Tourism as early as possible to discuss available options.</p>
        </div>
      ),
      contentEs: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>Se considera no presentación cuando el paciente no se presenta en la fecha programada del procedimiento sin aviso previo por escrito a MTY Medical Tourism.</p>
          <div className="p-4 bg-red-50 border border-red-200 text-xs text-red-700">
            <strong>En caso de no presentación: todos los pagos realizados — incluyendo el depósito de reserva y cualquier parte del saldo restante — son no reembolsables.</strong>
          </div>
          <p>Si no puede asistir a su procedimiento programado, comuníquese con MTY Medical Tourism lo antes posible para analizar las opciones disponibles.</p>
        </div>
      ),
    },
    {
      id: "scope",
      titleEn: "Package Scope Policy",
      titleEs: "Política de Alcance del Paquete",
      contentEn: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>MTY Medical Tourism charges only for the services included in the purchased package. The scope of each package is clearly defined at the time of booking.</p>
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">All Packages Include</p>
            <ul className="space-y-1.5">
              {["Procedure", "Physician Fees", "Hospital Fees (when applicable)", "Transportation Coordination", "Antaris Fundidora Accommodation (defined nights)", "Scheduled Follow-Up Visits", "Bilingual Patient Coordination"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs"><span className="text-[#22B8CF] font-bold mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">No Package Includes</p>
            <ul className="space-y-1.5">
              {["Airfare", "Companion Expenses", "Personal Purchases", "Additional Recovery Nights", "Additional Medical Services Not Originally Planned", "Additional Testing Not Originally Required"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs"><span className="text-slate-400 font-bold mt-0.5">—</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-slate-400">Anything outside the purchased package scope may incur additional charges. Patients will be informed of any potential additional charges before they are applied.</p>
        </div>
      ),
      contentEs: (
        <div className="space-y-4 text-sm text-slate-600 font-sans leading-relaxed normal-case">
          <p>MTY Medical Tourism cobra únicamente por los servicios incluidos en el paquete adquirido. El alcance de cada paquete queda claramente definido al momento de la reserva.</p>
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">Todos los Paquetes Incluyen</p>
            <ul className="space-y-1.5">
              {["Procedimiento", "Honorarios Médicos", "Honorarios Hospitalarios (cuando aplica)", "Coordinación de Transporte", "Hospedaje en Antaris Fundidora (noches definidas)", "Visitas de Seguimiento Programadas", "Coordinación Bilingüe del Paciente"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs"><span className="text-[#22B8CF] font-bold mt-0.5">✓</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#0F172A] uppercase tracking-wider text-xs mb-2">Ningún Paquete Incluye</p>
            <ul className="space-y-1.5">
              {["Vuelos", "Gastos de Acompañante", "Compras Personales", "Noches de Recuperación Adicionales", "Servicios Médicos Adicionales No Contemplados", "Estudios Adicionales No Requeridos Originalmente"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs"><span className="text-slate-400 font-bold mt-0.5">—</span><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <p className="text-xs text-slate-400">Cualquier servicio fuera del alcance del paquete adquirido puede generar cargos adicionales. El paciente será informado de cualquier cargo adicional potencial antes de ser aplicado.</p>
        </div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-[#FAFAF9]"
    >
      {/* HERO */}
      <section className="relative bg-[#0F172A] text-white pt-16 pb-20 md:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#164E63]/50 via-[#0F172A] to-[#0F172A] z-0"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#22B8CF] hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            <span>{lang === "en" ? "Back to Home" : "Volver al Inicio"}</span>
          </Link>
          <div className="inline-flex items-center gap-2 bg-[#164E63]/80 border border-[#22B8CF]/20 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#22B8CF] mb-4">
            <ShieldCheck size={12} />
            <span>{lang === "en" ? "PATIENT DOCUMENTATION" : "DOCUMENTACIÓN DEL PACIENTE"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold tracking-wider text-white uppercase leading-tight mb-4">
            {lang === "en" ? "Patient Policies" : "Políticas del Paciente"}
          </h1>
          <p className="text-sm text-slate-300 font-sans max-w-xl leading-relaxed normal-case">
            {lang === "en"
              ? "Please review the following policies before completing your booking. These policies govern cancellations, refunds, medical eligibility, travel disruptions, and package scope."
              : "Por favor revise las siguientes políticas antes de completar su reserva. Estas políticas regulan cancelaciones, reembolsos, elegibilidad médica, interrupciones de viaje y el alcance del paquete."}
          </p>
        </div>
      </section>

      {/* POLICY ACCORDION */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-3">
            {policies.map((policy, index) => {
              const isOpen = openSection === policy.id;
              const title = lang === "en" ? policy.titleEn : policy.titleEs;
              const body = lang === "en" ? policy.contentEn : policy.contentEs;
              return (
                <div key={policy.id} className="border border-slate-200 bg-white">
                  <button
                    onClick={() => toggle(policy.id)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[#22B8CF] font-mono text-[10px] font-bold tracking-widest shrink-0">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif font-bold text-sm sm:text-base text-[#0F172A] uppercase tracking-wide">
                        {title}
                      </span>
                    </div>
                    {isOpen
                      ? <ChevronUp size={16} className="text-[#22B8CF] shrink-0" />
                      : <ChevronDown size={16} className="text-[#22B8CF] shrink-0" />}
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
                        <div className="px-6 pb-6 border-t border-slate-100 pt-5">
                          {body}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* PATIENT ACCEPTANCE ACKNOWLEDGEMENT */}
      <section className="py-16 bg-[#0F172A] text-white border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-4 text-[#22B8CF] text-xs font-bold uppercase tracking-widest">
            <ShieldAlert size={14} />
            <span>{lang === "en" ? "PATIENT ACKNOWLEDGEMENT" : "RECONOCIMIENTO DEL PACIENTE"}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-serif font-bold uppercase tracking-wider text-white mb-6">
            {lang === "en" ? "Before You Book" : "Antes de Reservar"}
          </h2>
          <div className="bg-white/5 border border-white/10 p-6 sm:p-8 space-y-4 text-sm text-slate-300 font-sans leading-relaxed normal-case">
            <p>
              {lang === "en"
                ? "By completing your booking with MTY Medical Tourism, you acknowledge and agree that you have read and understood the following:"
                : "Al completar su reserva con MTY Medical Tourism, usted reconoce y acepta haber leído y comprendido lo siguiente:"}
            </p>
            <ul className="space-y-3">
              {(lang === "en" ? [
                "The package inclusions and exclusions as defined on your procedure page and in these policies.",
                "The cancellation and refund policy, including the 24-hour grace period and the non-refundable deposit terms.",
                "The additional recovery policy — that extra nights beyond the package are not included and will be billed separately.",
                "That final medical eligibility is determined exclusively by the treating physician.",
                "That MTY Medical Tourism is a coordination service and does not practice medicine.",
              ] : [
                "Las inclusiones y exclusiones del paquete según se definen en su página de procedimiento y en estas políticas.",
                "La política de cancelación y reembolso, incluyendo el período de gracia de 24 horas y los términos de depósito no reembolsable.",
                "La política de recuperación adicional — que las noches adicionales al paquete no están incluidas y serán facturadas por separado.",
                "Que la elegibilidad médica final es determinada exclusivamente por el médico tratante.",
                "Que MTY Medical Tourism es un servicio de coordinación y no ejerce la medicina.",
              ]).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-[#22B8CF] font-bold mt-0.5 shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/#lead-capture"
              className="bg-[#22B8CF] hover:bg-[#22B8CF]/90 text-[#0F172A] font-extrabold text-xs py-4 px-8 tracking-widest uppercase transition-all text-center"
            >
              {lang === "en" ? "Begin Consultation" : "Comenzar Consulta"}
            </Link>
            <Link
              to="/"
              className="border border-white/20 hover:border-white/50 text-white font-bold text-xs py-4 px-8 tracking-widest uppercase transition-colors text-center"
            >
              {lang === "en" ? "Back to Home" : "Volver al Inicio"}
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-[10px] text-slate-500 font-sans leading-relaxed text-center normal-case">
          <ShieldAlert size={12} className="text-[#22B8CF] inline-block mr-1.5 -mt-0.5" />
          {lang === "en"
            ? "MTY Medical Tourism is a medical travel coordination service. We do not practice medicine, operate clinics, or provide clinical diagnoses. All procedures are performed by independent certified surgeons at accredited private facilities in Monterrey, NL. Policies are subject to change."
            : "MTY Medical Tourism es un servicio de coordinación de viajes médicos. No ejercemos la medicina ni operamos clínicas. Los procedimientos son realizados por cirujanos certificados independientes en instalaciones privadas acreditadas en Monterrey, NL. Las políticas están sujetas a cambios."}
        </div>
      </section>
    </motion.div>
  );
}
