export interface FAQItem {
  question: string;
  answer: string;
}

export interface PackageNights {
  hospitalNights: number;  // nights at Hospital ION; 0 = outpatient/same-day
  hotelNights: number;     // nights at Antaris Fundidora
  totalNights: number;     // hospitalNights + hotelNights
}

export interface ProcedureData {
  slug: string;
  procedureKey: string;
  startingPrice: string;
  packageNights: PackageNights;
  en: {
    title: string;
    subtitle: string;
    overview: string;
    executiveCoordination: string;
    recoveryOverview: string;
    whatsCoordinated: string[];
    faqs: FAQItem[];
  };
  es: {
    title: string;
    subtitle: string;
    overview: string;
    executiveCoordination: string;
    recoveryOverview: string;
    whatsCoordinated: string[];
    faqs: FAQItem[];
  };
}

export const proceduresData: ProcedureData[] = [
  {
    slug: "lasik-monterrey",
    procedureKey: "Advanced_LASIK",
    startingPrice: "$3,900 USD",
    packageNights: { hospitalNights: 0, hotelNights: 2, totalNights: 2 },
    en: {
      title: "Advanced LASIK Laser Eye Surgery",
      subtitle: "Bicultural Refractive Adjustments in Monterrey's Premier Ophthalmic Clinics",
      overview: "Experience premium, state-of-the-art custom wavefront-guided LASIK laser correction. This treatment adjusts refractive errors such as myopia, hyperopia, and astigmatism with high-precision computer mapping.",
      executiveCoordination: "Your Monterrey experience is fully arranged. A private bilingual chauffeur in an executive SUV meets you at arrival, managing all local transfers and clinic visits. Recovery accommodation at Antaris Fundidora is pre-coordinated. Personalized travel coordination from Texas is available upon request.",
      recoveryOverview: "Vision improvements are typically noticeable following the procedure. Medical eye drop panels and post-evaluations are strictly scheduled. Your package includes 2 recovery nights at Antaris Fundidora.",
      whatsCoordinated: [
        "Preoperative ophthalmic diagnostic mapping and corneal thickness evaluation",
        "Expert ophthalmic surgeon fees and clinic equipment runtime support",
        "Curated administrative assistance, checking in bilingual hospital registrars",
        "Private terminal-to-clinic transfers in premium SUV",
        "2 recovery nights at Antaris Fundidora, pre-coordinated for post-operative care"
      ],
      faqs: [
        {
          question: "How long does the LASIK procedure take?",
          // TODO: Confirm procedure duration with treating ophthalmologist.
          answer: "The actual laser time is less than 60 seconds per eye, while the entire clinical room session is completed in approximately 15 to 20 minutes."
        },
        {
          question: "Is the recovery accommodation suited for eye care?",
          // TODO: Confirm specific amenities for post-LASIK recovery with Antaris Fundidora.
          answer: "Yes, Antaris Fundidora provides a comfortable environment configured to support optimal post-operative rest. Your package includes 2 recovery nights."
        },
        {
          question: "How does the bilingual coordination team assist?",
          answer: "We manage all clinic check-ins, medical form collection, bilingual guide translations, and schedule your post-operative corneal assessment."
        }
      ]
    },
    es: {
      title: "Cirugía Láser Ocular LASIK Avanzada",
      subtitle: "Ajustes Refractivos Biculturales en Clínicas Oftalmológicas de Monterrey",
      overview: "Experimente corrección láser LASIK guiada por mapeo de frente de onda de alta resolución. Este tratamiento corrige errores refractivos como miopía, hipermetropía y astigmatismo con mapeo digital de alta precisión.",
      executiveCoordination: "Su experiencia en Monterrey está completamente coordinada. Un chofer bilingüe privado en camioneta ejecutiva le recibe en su terminal de llegada y gestiona todos los traslados locales y visitas clínicas. Alojamiento en Antaris Fundidora pre-coordinado. Coordinación de viaje personalizada desde Texas disponible bajo solicitud.",
      recoveryOverview: "La mejoría en la agudeza visual se percibe tras el procedimiento. Las gotas oculares protectoras e indicaciones de seguimiento son coordinadas. Su paquete incluye 2 noches de recuperación en Antaris Fundidora.",
      whatsCoordinated: [
        "Mapeo de diagnóstico oftálmico preoperatorio y evaluación de espesor corneal",
        "Gastos administrativos y facilitación de honorarios del cirujano oftalmólogo tratante",
        "Coordinación y gestión del quirófano especializado e insumos médicos",
        "Traslados privados en camioneta ejecutiva de lujo",
        "2 noches de recuperación en Antaris Fundidora, pre-coordinadas para el descanso postoperatorio"
      ],
      faqs: [
        {
          question: "¿Cuánto dura el procedimiento de LASIK?",
          // TODO: Confirmar duración exacta con el oftalmólogo tratante.
          answer: "La aplicación del láser toma menos de 60 segundos por ojo, y la sesión clínica total concluye en aproximadamente 15 a 20 minutos."
        },
        {
          question: "¿El hotel de recuperación es adecuado para el cuidado de los ojos?",
          // TODO: Confirmar amenidades específicas para recuperación post-LASIK con Antaris Fundidora.
          answer: "Sí, Antaris Fundidora cuenta con un entorno confortable diseñado para el reposo postoperatorio óptimo. Su paquete incluye 2 noches de recuperación."
        },
        {
          question: "¿Cómo ayuda el equipo de coordinación bilingüe?",
          answer: "Gestionamos el registro bilingüe en la clínica, recopilamos la información médica, proporcionamos guía de traducción en sitio y agendamos su revisión postoperatoria."
        }
      ]
    }
  },
  {
    slug: "gallbladder-surgery-mexico",
    procedureKey: "Laparoscopic_Gallbladder",
    startingPrice: "$5,900 USD",
    packageNights: { hospitalNights: 0, hotelNights: 3, totalNights: 3 },
    en: {
      title: "Laparoscopic Gallbladder Removal",
      subtitle: "Minimally Invasive Gallstone Solution in High-End Certified Surgical Centers",
      overview: "Avoid painful biliary complications with standard laparoscopic cholecystectomy. Using microscopic incisions and camera-guided precision, board-certified general surgeons remove the gallbladder safely under general anesthesia.",
      executiveCoordination: "Curated within Monterrey, end-to-end. We manage your airport reception, secure transport in executive vehicles, private bilingual concierge escort, and recovery accommodation at Antaris Fundidora. Flexible travel arrangements from Texas are available upon request.",
      recoveryOverview: "Laparoscopic techniques offer rapid physical turnaround. Patients typically stay one evening at Hospital ION following surgery, then transition to Antaris Fundidora for post-operative recovery. Your package includes 3 recovery nights at Antaris Fundidora.",
      whatsCoordinated: [
        "Comprehensive screening panels, clinical chemistry, and pre-anesthesia evaluation",
        "Facilitation and logistic coordination of Hospital ION suite runtime and general surgical team care",
        "Management of certified general surgeon and surgical assistant professional services",
        "Full private executive SUV terminal transfers",
        "3 recovery nights at Antaris Fundidora with post-operative dietary coordination per physician instructions"
      ],
      faqs: [
        {
          question: "Why should I choose laparoscopic gallbladder removal in Monterrey?",
          // TODO: Verify cost comparison claim against current Texas pricing before publishing.
          answer: "You avoid the long waiting lists under northern healthcare plans and access certified surgical care at a significant cost advantage compared to private clinics in Texas, with no compromise on equipment."
        },
        {
          question: "Is a passport required for private ground transit?",
          answer: "Yes, you need a valid passport to re-enter Texas. Our chauffeured executive vehicles streamline secure border or flight terminal coordination."
        },
        {
          question: "Can I manage medical payments through HSA funds?",
          answer: "Most health savings accounts (HSA) and flexible spending accounts (FSA) allow medical travel reimbursement. We provide complete itemized receipts."
        }
      ]
    },
    es: {
      title: "Cirugía de Vesícula por Laparoscopia",
      subtitle: "Extirpación de Vesícula Mínimamente Invasiva en Clínicas de Alta Seguridad",
      overview: "Evite complicaciones de cólico biliar con colecistectomía laparoscópica. A través de incisiones milimétricas y guía por cámara, cirujanos certificados extirpan la vesícula biliar de forma rápida y segura.",
      executiveCoordination: "Coordinación completa dentro de Monterrey. Gestionamos su recepción en aeropuerto, traslados clínicos en vehículo ejecutivo privado, acompañamiento bilingüe y estancia en Antaris Fundidora. Arreglos de viaje flexibles desde Texas disponibles a petición.",
      recoveryOverview: "La técnica laparoscópica ofrece la recuperación más rápida. Generalmente se prescribe una noche de hospitalización en Hospital ION para monitoreo clínico estricto, seguida de descanso en Antaris Fundidora. Su paquete incluye 3 noches de recuperación en Antaris Fundidora.",
      whatsCoordinated: [
        "Panel completo de estudios preoperatorios de sangre, ultrasonido y valoración pre-anestésica",
        "Apoyo administrativo para la gestión de honorarios médicos y logística de Hospital ION",
        "Vigilancia logística de sala de operaciones y gases médicos",
        "Transportación privada en camioneta ejecutiva de lujo",
        "3 noches de recuperación en Antaris Fundidora con coordinación dietética postoperatoria por indicación médica"
      ],
      faqs: [
        {
          question: "¿Por qué operar mi vesícula en Monterrey?",
          // TODO: Verificar afirmación de ahorro vs. clínicas privadas de Texas antes de publicar.
          answer: "Elimina de inmediato el riesgo de una pancreatitis de urgencia, se salta los largos tiempos de espera en EUA y accede a atención quirúrgica certificada con ventaja económica significativa."
        },
        {
          question: "¿Qué documentación de reingreso necesito?",
          answer: "Requiere pasaporte vigente para cruzar la frontera de regreso. Su chofer ejecutivo apoya con una logística clara y estructurada en terminales de tránsito."
        },
        {
          question: "¿Es posible usar fondos de cuenta de ahorro de salud (HSA)?",
          answer: "Por lo general las cuentas de ahorro de salud (HSA y FSA) permiten gastos médicos fuera de EUA. Proveemos facturas en regla e informes médicos bilingües."
        }
      ]
    }
  },
  {
    slug: "reflux-surgery-monterrey",
    procedureKey: "Advanced_Reflux",
    startingPrice: "$6,900 USD",
    packageNights: { hospitalNights: 1, hotelNights: 4, totalNights: 5 },
    en: {
      title: "Laparoscopic Nissen Anti-Reflux Surgery",
      subtitle: "Permanent GERD and Hiatal Hernia Relief by Board-Certified Specialists",
      overview: "Put an end to severe gastroesophageal reflux disease (GERD) and chronic heartburn. The laparoscopic Nissen fundoplication wraps the upper curve of the stomach around the lower esophagus to reinforce the lower esophageal sphincter.",
      executiveCoordination: "Every in-Monterrey logistical aspect is arranged. Enjoy direct executive ground transfers, bilingual interpreter services during clinical check-ins, and recovery accommodation at Antaris Fundidora. Tailored travel assistance from Texas is available upon request.",
      // TODO: Confirm dietary restriction duration (liquid/soft diet weeks) with treating surgeon before publishing.
      recoveryOverview: "Surgical soreness resolves rapidly. Most patients follow a medically prescribed liquid-to-soft diet transition to allow correct healing. Your package includes 1 night at Hospital ION and 4 recovery nights at Antaris Fundidora — 5 total nights.",
      whatsCoordinated: [
        "Preoperative imaging, esophageal manometry coordination, and cardiac clearances",
        "Assistance with administrative and logistical coordination of surgeon and anesthesiologist fees",
        "Arrangement and monitoring of Hospital ION surgical facility runtime and endoscopic camera equipment",
        "Bilingual executive SUV transfers from terminal corridors",
        "1 night at Hospital ION + 4 recovery nights at Antaris Fundidora"
      ],
      faqs: [
        {
          question: "Am I a candidate if I have a hiatal hernia?",
          answer: "Yes, laparoscopic Nissen surgery is highly recommended to repair hiatal hernias simultaneously, preventing acid reflux at its anatomical cause."
        },
        {
          question: "How long is the recommended stay in Monterrey?",
          answer: "Your package includes 1 night at Hospital ION and 4 recovery nights at Antaris Fundidora — 5 total nights. This covers preoperative checks, your surgical night, and full post-operative hotel recovery."
        },
        {
          question: "When can I stop taking acid blockers?",
          // TODO: Confirm PPI/antacid discontinuation timeline with treating surgeon before publishing.
          answer: "While most patients experience significant reflux relief following surgery, your treating surgeon will guide you on phasing out medications based on post-operative evaluations."
        }
      ]
    },
    es: {
      title: "Cirugía Antirreflujo Nissen Laparoscópica",
      subtitle: "Alivio Permanente para ERGE y Hernia Hiatal con Especialistas Certificados",
      overview: "Ponga fin a la Enfermedad por Reflujo Gastroesofágico (ERGE) y la acidez crónica. La funduplicatura tipo Nissen refuerza el esfínter esofágico inferior doblando la parte superior de la cámara gástrica.",
      executiveCoordination: "Toda la logística dentro de Monterrey está coordinada: transportación ejecutiva en camioneta privada, atención bilingüe dedicada y alojamiento en Antaris Fundidora. Asistencia logística personalizada desde Texas disponible bajo solicitud.",
      // TODO: Confirmar duración de dieta líquida/blanda con el cirujano tratante antes de publicar.
      recoveryOverview: "La recuperación de heridas pequeñas de laparoscopia es muy rápida. Se prescribe una dieta progresiva de líquidos a alimentos blandos para permitir una curación correcta. Su paquete incluye 1 noche en Hospital ION y 4 noches de recuperación en Antaris Fundidora — 5 noches en total.",
      whatsCoordinated: [
        "Coordinación de manometría esofágica preoperatoria, estudios de imagen y valoraciones clínicas",
        "Gestión logística de honorarios para cirujano gastrointestinal calificado, ayudantes y anestesistas",
        "Trámites de Hospital ION, insumos quirúrgicos estériles de laparoscopia de marcas internacionales",
        "Servicio de transporte privado con chofer ejecutivo bilingüe",
        "1 noche en Hospital ION + 4 noches de recuperación en Antaris Fundidora"
      ],
      faqs: [
        {
          question: "¿Esta técnica repara hernias hiatales?",
          answer: "Sí, la funduplicatura de Nissen es la técnica de elección de los cirujanos generales para cerrar los pilares del diafragma y corregir hernias simultáneamente."
        },
        {
          question: "¿Cuántos días de estancia en la ciudad se recomiendan?",
          answer: "Su paquete incluye 1 noche en Hospital ION y 4 noches de recuperación en Antaris Fundidora — 5 noches en total. Esto cubre los estudios preoperatorios, la noche quirúrgica y la recuperación completa en hotel."
        },
        {
          question: "¿Cuándo puedo dejar de tomar medicamentos para el reflujo?",
          // TODO: Confirmar esquema de retiro de antiácidos con el cirujano tratante antes de publicar.
          answer: "Aunque el reflujo suele mejorar significativamente tras la cirugía, el médico tratante le indicará el esquema correcto de retiro de medicamentos basado en las evaluaciones postoperatorias."
        }
      ]
    }
  },
  {
    slug: "laparoscopic-hysterectomy",
    procedureKey: "Laparoscopic_Hysterectomy",
    startingPrice: "$6,900 USD",
    packageNights: { hospitalNights: 1, hotelNights: 6, totalNights: 7 },
    en: {
      title: "Laparoscopic Hysterectomy Coordination",
      subtitle: "Minimally Invasive Guided Gynecological Surgical Excellence",
      overview: "Obtain clinical intervention for uterine fibroids, severe endometriosis, or chronic pelvic pain. Laparoscopic techniques utilize standard micro-incisions to facilitate uterine removal, meaning reduced pain and faster restoration of energy.",
      executiveCoordination: "Your entire Monterrey stay is optimized. Private executive transit is scheduled, paired with vetted bilingual guides and recovery accommodation at Antaris Fundidora. Personalized travel coordination from Texas is available upon request.",
      recoveryOverview: "While traditional open procedures require several weeks, laparoscopic patients are up walking safely the next day. Your package includes 1 night at Hospital ION and 6 recovery nights at Antaris Fundidora — 7 total nights.",
      whatsCoordinated: [
        "Preoperative gynecological ultrasound checks, clinical panels, and pre-op clearances",
        "Facilitation and logistic support for certified gynecological surgeons and specialized staff",
        "Coordination of the Hospital ION operatory suite, advanced imaging, and post-op nursing check-ins",
        "Bilingual driver transportation in private executive vehicles",
        "1 night at Hospital ION + 6 recovery nights at Antaris Fundidora"
      ],
      faqs: [
        {
          question: "Is this a total or partial hysterectomy?",
          answer: "The surgical team customizes the approach based on your direct evaluation and preferences (whether to preserve the cervix or ovaries)."
        },
        {
          // TODO: Confirm Hospital ION certification body and accreditation number before publishing.
          question: "What safety certifications does the hospital hold?",
          answer: "Hospital ION maintains national certifications and quality standards equivalent to international accreditation benchmarks, with strict sanitary safety controls."
        },
        {
          question: "How long should I stay before returning home?",
          answer: "Your package includes 7 total nights — 1 at Hospital ION and 6 recovery nights at Antaris Fundidora. A post-operative check-up with the physician is coordinated before your departure."
        }
      ]
    },
    es: {
      title: "Histerectomía Laparoscópica Ginecológica",
      subtitle: "Mínima Invasión para Alivio Ginecológico con Ginecólogos Certificados",
      overview: "Encuentre solución definitiva a miomas uterinos, endometriosis severa o dolor pélvico crónico. La técnica laparoscópica utiliza incisiones milimétricas para extirpar el útero, reduciendo el dolor y acelerando la ganancia de energía.",
      executiveCoordination: "Minimizamos el estrés logístico dentro de Monterrey. Su itinerario incluye chofer bilingüe en camioneta ejecutiva, acompañamiento clínico continuo y estancia en Antaris Fundidora. Coordinación ejecutiva de viaje desde Texas disponible bajo solicitud.",
      recoveryOverview: "A diferencia de la técnica abierta clásica, con la laparoscopia se camina sin dolor al día siguiente del egreso. Su paquete incluye 1 noche en Hospital ION y 6 noches de recuperación en Antaris Fundidora — 7 noches en total.",
      whatsCoordinated: [
        "Ultrasonido ginecológico preoperatorio, analítica sanguínea y valoración de riesgo quirúrgico",
        "Trámites logísticos correspondientes a los honorarios del cirujano ginecólogo certificado y equipo auxiliar",
        "Facilitación administrativa de Hospital ION, sala de cirugía de laparoscopia y recuperación inicial",
        "Traslados completos con chofer y camioneta ejecutiva privada",
        "1 noche en Hospital ION + 6 noches de recuperación en Antaris Fundidora"
      ],
      faqs: [
        {
          question: "¿La histerectomía es total o parcial?",
          answer: "El equipo ginecológico adaptará el tipo de abordaje de forma personalizada según sus antecedentes médicos (conservación de ovarios o cuello uterino)."
        },
        {
          // TODO: Confirmar certificación de Hospital ION (organismo y número de acreditación) antes de publicar.
          question: "¿Con qué certificaciones cuenta el hospital?",
          answer: "Hospital ION cuenta con certificaciones nacionales y estándares de calidad equivalentes a los parámetros de acreditación internacional, con máxima seguridad sanitaria."
        },
        {
          question: "¿Cuántos días debo esperar en Monterrey antes de viajar?",
          answer: "Su paquete incluye 7 noches en total — 1 en Hospital ION y 6 noches de recuperación en Antaris Fundidora. Se coordina una revisión postoperatoria con el médico antes de su salida."
        }
      ]
    }
  },
  {
    slug: "rhinoplasty-monterrey",
    procedureKey: "Rhinoplasty",
    startingPrice: "$5,900 USD",
    packageNights: { hospitalNights: 0, hotelNights: 7, totalNights: 7 },
    en: {
      title: "Bespoke Aesthetic Rhinoplasty",
      subtitle: "Reconstructive and Cosmetic Nasal Design by Highly Skilled Plastic Surgeons",
      overview: "Achieve facial harmony and improved nasal airway function. Specialized board-certified plastic registry surgeons customize rhinoplasty techniques to refine the nasal bridge, tip, and correct internal septal deviations.",
      executiveCoordination: "Every Monterrey logistics asset is pre-arranged. A dedicated private executive SUV with bilingual driver manages all local transfers and clinic visits, while your recovery occurs at Antaris Fundidora. Flexible travel coordination from Texas is available upon request.",
      recoveryOverview: "Swelling and nasal splints are maintained for 7 days, removed during the scheduled post-operative consultation. Your package includes 7 recovery nights at Antaris Fundidora.",
      whatsCoordinated: [
        "Preoperative facial imaging, virtual diagnostic simulations, and septal evaluation",
        "Coordination and facilitation of plastic and reconstructive surgeon professional fees",
        "Monitoring of Hospital ION certified operating suite and micro-surgical materials",
        "Bilingual executive private transport between airport, hotel, and consulting offices",
        "7 recovery nights at Antaris Fundidora, pre-coordinated for quiet post-operative rest"
      ],
      faqs: [
        {
          question: "Can septal airway problems be corrected inside the same surgical plan?",
          answer: "Yes, septorhinoplasty matches aesthetic improvements with airway correction by correcting a deviated septum simultaneously."
        },
        {
          question: "When are the external nasal splint and sutures removed?",
          answer: "External splints and microscopic sutures are removed around 7 days post-op during your coordinated consultation check-up. Your 7-night package is designed to cover this full recovery period."
        },
        {
          question: "Why travel from Texas for Rhinoplasty?",
          // TODO: Verify cost comparison claim against current US market rates before publishing.
          answer: "Our surgeons are certified specialists who deliver high-definition natural results with private concierge-level care, at a significant cost advantage compared to US rates."
        }
      ]
    },
    es: {
      title: "Rinoplastia Estética y Funcional",
      subtitle: "Diseño Nasal Reconstructivo y Armonía Facial con Cirujanos Plásticos Licenciados",
      overview: "Logre una excelente armonía en su rostro y optimice su respiración. Cirujanos plásticos certificados personalizan la técnica quirúrgica para definir el perfil nasal, punta nasal y corregir desviaciones de tabique.",
      executiveCoordination: "Todo lo de Monterrey resuelto de antemano. Camioneta ejecutiva privada con chofer bilingüe para todos los traslados locales programados y estancia de recuperación en Antaris Fundidora. Coordinación concierge de viaje desde Texas disponible bajo solicitud.",
      recoveryOverview: "La férula postoperatoria se retira en el consultorio al séptimo día. Su paquete incluye 7 noches de recuperación en Antaris Fundidora.",
      whatsCoordinated: [
        "Diagnóstico preoperatorio de simulación digital facial y análisis de la vía aérea nasal",
        "Gestión logística y administrativa de los honorarios del cirujano plástico reconstructivo y anestesista",
        "Logística de Hospital ION para cirugía nasal estética bajo condiciones estériles",
        "Coordinación de traslados con chofer privado bilingüe",
        "7 noches de recuperación en Antaris Fundidora para recuperación tranquila y sin ruidos"
      ],
      faqs: [
        {
          question: "¿Se puede corregir la desviación del tabique en la misma cirugía?",
          answer: "Sí, la septorhinoplastia combina el rediseño estético con la corrección funcional del tabique desviado para optimizar la respiración."
        },
        {
          question: "¿Cuándo se retira la férula y las puntadas microscópicas?",
          answer: "La férula externa y suturas se retiran al cabo de 7 días durante la consulta médica coordinada de seguimiento. Su paquete de 7 noches está diseñado para cubrir este período completo de recuperación."
        },
        {
          question: "¿Por qué viajar desde Texas para una rinoplastia?",
          // TODO: Verificar afirmación de ahorro vs. EUA antes de publicar.
          answer: "Nuestros cirujanos ofrecen resultados muy naturales con atención personalizada de nivel concierge, con una ventaja económica significativa respecto a las tarifas en EUA."
        }
      ]
    }
  },
  {
    slug: "smile-makeover-mexico",
    procedureKey: "Smile_Makeover",
    startingPrice: "$6,900 USD",
    packageNights: { hospitalNights: 0, hotelNights: 4, totalNights: 4 },
    en: {
      title: "Premium Dental Smile Makeover",
      subtitle: "Full Restorative Aesthetics with Advanced German Zirconia Crowns",
      overview: "Transform your smile with computerized ceramic dentistry. This comprehensive package covers 8 high-density premium German zirconia crowns or veneers, color-matched and crafted via high-precision CAD/CAM laboratories.",
      executiveCoordination: "Relax while we arrange every Monterrey detail. High-grade private executive SUV transfers, dedicated bilingual driver assistance, and recovery accommodation at Antaris Fundidora are pre-arranged. Personalized travel coordination from Texas is available upon request.",
      // TODO: Confirm number of clinical visits and soft-diet duration with treating dentist before publishing.
      recoveryOverview: "Since dental makeovers are non-invasive, sensitivity is minimal and patients enjoy an immediate aesthetic improvement. Your package includes 4 recovery nights at Antaris Fundidora.",
      whatsCoordinated: [
        "Preoperative bite assessment, computerized digital mock-up, and clinical x-ray panels",
        "Coordination and coverage representation of leading prosthodontists and digital lab technician fees",
        "Provision of certified bio-compatible German CAD/CAM zirconia elements",
        "Private terminal-to-office executive vehicle transfers",
        "4 recovery nights at Antaris Fundidora, pre-coordinated with concierge dietary support"
      ],
      faqs: [
        {
          // TODO: Confirm exact number of visits with treating dentist before publishing.
          question: "How many clinical visits are needed?",
          answer: "Typically 2 key visits are scheduled: the first for digital preparation and mockup framing, and the second for final high-bond crown placement. Your 4-night package provides ample time for both visits."
        },
        {
          // TODO: Confirm warranty terms, duration, and issuing party before publishing.
          question: "Is there a warranty on German Zirconia materials?",
          answer: "Our certified partner dental laboratories provide structural warranties on bio-compatible premium dental elements. Warranty terms are provided in writing at the time of treatment."
        },
        {
          // TODO: Confirm dental clinic certification and specific standard applied before publishing.
          question: "Are dental treatments in Mexico highly sterile?",
          answer: "Our partner dental clinics operate under strict international sanitation protocols, utilizing single-use sterilized kits for patient safety."
        }
      ]
    },
    es: {
      title: "Diseño de Sonrisa Dental Premium",
      subtitle: "Rehabilitación Estética de Alta Gama con Coronas de Zirconia Alemana",
      overview: "Renueve por completo su sonrisa con odontología cerámica computarizada. Este paquete integral cubre 8 coronas o carillas de zirconia alemana de alta densidad, fabricadas con impresores CAD/CAM de máxima precisión.",
      executiveCoordination: "Descanse mientras coordinamos cada detalle en Monterrey. Traslados clínicos en camioneta ejecutiva privada y hospedaje en Antaris Fundidora, todo pre-organizado. Coordinación de viaje personalizada desde Texas disponible bajo solicitud.",
      // TODO: Confirmar número de visitas y duración de dieta blanda con el odontólogo tratante antes de publicar.
      recoveryOverview: "Es un procedimiento de odontología con mínimas molestias. La sensibilidad inicial es leve y el cambio estético es inmediato. Su paquete incluye 4 noches de recuperación en Antaris Fundidora.",
      whatsCoordinated: [
        "Evaluación preoperatoria de mordida, diagnóstico 3D digital interactivo y placas de rayos X",
        "Gestión administrativa de honorarios del cirujano dentista rehabilitador y técnico de laboratorio dental",
        "Provisión directa de elementos estructurales de zirconia alemana premium de laboratorio certificado",
        "Servicios de traslado privado en camioneta de alta gama",
        "4 noches de recuperación en Antaris Fundidora con asistencia de concierge para alimentación blanda"
      ],
      faqs: [
        {
          // TODO: Confirmar número exacto de visitas con el odontólogo tratante antes de publicar.
          question: "¿Cuántas consultas se necesitan para colocar el diseño de sonrisa?",
          answer: "Generalmente se programan 2 citas clave: la primera para preparación digital, escaneo y provisionales; y la segunda para colocación definitiva. Su paquete de 4 noches ofrece tiempo suficiente para ambas visitas."
        },
        {
          // TODO: Confirmar términos de garantía y parte responsable antes de publicar.
          question: "¿Los materiales cuentan con alguna garantía?",
          answer: "Los laboratorios dentales certificados ofrecen garantías estructurales sobre la zirconia dental biocompatible. Los términos de garantía se entregan por escrito al momento del tratamiento."
        },
        {
          // TODO: Confirmar norma de esterilización y organismo certificador para la clínica dental aliada.
          question: "¿Los procedimientos clínicos dentales en México son estériles?",
          answer: "Las clínicas de diseño de sonrisa aliadas operan bajo estrictos protocolos de esterilización internacional, utilizando insumos de un solo uso para la seguridad del paciente."
        }
      ]
    }
  }
];
