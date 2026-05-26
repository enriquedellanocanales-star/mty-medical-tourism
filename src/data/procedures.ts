export interface FAQItem {
  question: string;
  answer: string;
}

export interface ProcedureData {
  slug: string;
  procedureKey: string;
  startingPrice: string;
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
    startingPrice: "$3,400 USD",
    en: {
      title: "Advanced LASIK Laser Eye Surgery",
      subtitle: "Bicultural Refractive Adjustments in Monterrey's Premier Ophthalmic Clinics",
      overview: "Experience premium, state-of-the-art custom wavefront-guided LASIK laser correction. This treatment adjusts refractive errors such as myopia, hyperopia, and astigmatism with high-precision computer mapping.",
      executiveCoordination: "Your Monterrey experience is fully arranged. A private bilingual chauffeur in an executive SUV meets you at arrival, managing all local transfers and clinic visits. Premium business-grade recovery accommodations in San Pedro Garza García are pre-reserved. Personalized travel coordination from Texas is available upon request.",
      recoveryOverview: "Vision improvements are typically noticeable within 24 hours. Most patients return to light activities and work with exceptional visual acuity within 1-2 days. Medical eye drop panels and post-evaluations are strictly scheduled.",
      whatsCoordinated: [
        "Preoperative ophthalmic diagnostic mapping and corneal thickness evaluation",
        "Expert ophthalmic surgeon fees and clinic equipment runtime support",
        "Curated administrative assistance, checking in bilingual hospital registrars",
        "Private terminal-to-clinic transfers in premium SUV",
        "Luxury business-suite accommodations with clinical-grade room options"
      ],
      faqs: [
        {
          question: "How long does the LASIK procedure take?",
          answer: "The actual laser time is less than 60 seconds per eye, while the entire clinical room session is completed in approximately 15 to 20 minutes."
        },
        {
          question: "Is the recovery room or hotel suited for eye care?",
          answer: "Yes, our partner corporate suites in San Pedro are configured with advanced blackout curtains and sanitation setups to support optimal rest immediately post-op."
        },
        {
          question: "How does the bicultural coordinating desk assist?",
          answer: "We manage all clinic check-ins, medical form collection, bilingual guide translations, and schedule your immediate 24-hour post-op corneal assessment."
        }
      ]
    },
    es: {
      title: "Cirugía Láser Ocular LASIK Avanzada",
      subtitle: "Ajustes Refractivos Biculturales en Clínicas Oftalmológicas de Monterrey",
      overview: "Experimente corrección láser LASIK guiada por mapeo de frente de onda de alta resolución. Este tratamiento corrige errores refractivos como miopía, hipermetropía y astigmatismo con mapeo digital de alta precisión.",
      executiveCoordination: "Su experiencia en Monterrey está completamente coordinada. Un chofer bilingüe privado en camioneta ejecutiva le recibe en su terminal de llegada y gestiona todos los traslados locales y visitas clínicas. Alojamiento ejecutivo de negocios en San Pedro Garza García pre-reservado. Coordinación de viaje personalizada desde Texas disponible bajo solicitud.",
      recoveryOverview: "La mejoría en la agudeza visual se percibe en un periodo de 24 horas. La mayoría de los pacientes regresan a sus actividades ligeras en 1-2 días con gotas oculares protectoras e indicaciones de seguimiento.",
      whatsCoordinated: [
        "Mapeo de diagnóstico oftálmico preoperatorio y evaluación de espesor corneal",
        "Gastos administrativos y facilitación de honorarios del cirujano oftalmólogo tratante",
        "Coordinación y gestión del quirófano especializado e insumos médicos",
        "Traslados privados en camioneta ejecutiva de lujo",
        "Hospedaje de negocio premium en suites adaptadas para el descanso postoperatorio"
      ],
      faqs: [
        {
          question: "¿Cuánto dura el procedimiento de LASIK?",
          answer: "La aplicación del láser toma menos de 60 segundos por ojo, y la sesión clínica total concluye en aproximadamente 15 a 20 minutos."
        },
        {
          question: "¿El hotel de recuperación es adecuado para el cuidado de los ojos?",
          answer: "Sí, las suites corporativas de nuestros hoteles aliados cuentan con cortinas blackout completas y entornos limpios óptimos para el reposo inicial."
        },
        {
          question: "¿Cómo ayuda el enlace de coordinación bicultural?",
          answer: "Gestionamos el registro bilingüe en la clínica, recopilamos la información médica, proporcionamos guía de traducción en sitio y agendamos su revisión de cortesía."
        }
      ]
    }
  },
  {
    slug: "gallbladder-surgery-mexico",
    procedureKey: "Laparoscopic_Gallbladder",
    startingPrice: "$4,900 USD",
    en: {
      title: "Laparoscopic Gallbladder Removal",
      subtitle: "Minimally Invasive Gallstone Solution in High-End Certified Surgical Centers",
      overview: "Avoid painful biliary complications with standard laparoscopic cholecystectomy. Using microscopic incisions and camera-guided precision, board-certified general surgeons remove the gallbladder safely under general anesthesia.",
      executiveCoordination: "Curated within Monterrey, end-to-end. We manage your airport reception, secure transport in executive vehicles, private bilingual concierge escort, and premium recovery accommodations in the elite zone of San Pedro Garza García. Flexible travel arrangements from Texas are available upon request.",
      recoveryOverview: "Laparoscopic techniques offer rapid physical turnaround. Patients typically stay one evening in the clinical facility and transition to the luxury hotel recovery room for 2-3 additional days before returning to Texas.",
      whatsCoordinated: [
        "Comprehensive screening panels, clinical chemistry, and pre-anesthesia evaluation",
        "Facilitation and logistic coordination of hospital suite runtime and general surgical team care",
        "Management of certified general surgeon and surgical assistant professional services",
        "Full private executive SUV terminal transfers",
        "Vetted luxury business hotel stay with dietary coordination requested by the physician"
      ],
      faqs: [
        {
          question: "Why should I choose laparoscopic gallbladder removal in Monterrey?",
          answer: "You avoid the long waiting lists under northern healthcare plans and pay up to 60% less than private out-of-pocket clinics in Texas, with no compromise on equipment."
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
      executiveCoordination: "Coordinación completa dentro de Monterrey. Gestionamos su recepción en aeropuerto, traslados clínicos en vehículo ejecutivo privado, acompañamiento bilingüe y estancia en suite ejecutiva en San Pedro Garza García. Arreglos de viaje flexibles desde Texas disponibles a petición.",
      recoveryOverview: "La técnica laparoscópica ofrece la recuperación más rápida. Generalmente se prescribe una noche de hospitalización para monitoreo clínico estricto y 2-3 días de descanso en hotel corporativo antes del viaje de regreso.",
      whatsCoordinated: [
        "Panel completo de estudios preoperatorios de sangre, ultrasonido y valoración pre-anestésica",
        "Apoyo administrativo para la gestión de honorarios médicos y técnicos del equipo quirúrgico",
        "Vigilancia logística del hospital privado seleccionado, uso de sala de operaciones y gases médicos",
        "Transportación privada en camioneta ejecutiva de lujo",
        "Hospedaje premium de nivel ejecutivo con opciones de menú blando postoperatorio"
      ],
      faqs: [
        {
          question: "¿Por qué operar mi vesícula en Monterrey?",
          answer: "Elimina de inmediato el riesgo de una pancreatitis de urgencia, se salta los largos tiempos de espera en EUA y ahorra un 60% en comparación con clínicas privadas de Texas."
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
    startingPrice: "$5,800 USD",
    en: {
      title: "Laparoscopic Nissen Anti-Reflux Surgery",
      subtitle: "Permanent GERD and Hiatal Hernia Relief by Board-Certified Specialists",
      overview: "Put an end to severe gastroesophageal reflux disease (GERD) and chronic heartburn. The laparoscopic Nissen fundoplication wraps the upper curve of the stomach around the lower esophagus to reinforce the lower esophageal sphincter.",
      executiveCoordination: "Every in-Monterrey logistical aspect is arranged. Enjoy direct executive ground transfers, bilingual interpreter services during clinical check-ins, and secure luxury corporate recovery stays in San Pedro Garza García. Tailored travel assistance from Texas is available upon request.",
      recoveryOverview: "Surgical soreness resolves rapidly. Most patients transition back to solid meals following a strictly configured liquid-to-soft diet plan during 2 to 3 weeks. Liquid panels and dietary plans are tailored.",
      whatsCoordinated: [
        "Preoperative imaging, esophageal manometry coordination, and cardiac clearances",
        "Assistance with administrative and logistical coordination of surgeon and anesthesiologist fees",
        "Arrangement and monitoring of surgical facility runtime and endoscopic camera equipment",
        "Bilingual executive SUV transfers from terminal corridors",
        "Luxury hotel rooms suited for soft postoperative diet requirements"
      ],
      faqs: [
        {
          question: "Am I a candidate if I have a hiatal hernia?",
          answer: "Yes, laparoscopic Nissen surgery is highly recommended to repair hiatal hernias simultaneously, preventing acid reflux at its anatomical cause."
        },
        {
          question: "How long is the safe timeline in Mexico?",
          answer: "We recommend a 4 to 5 day trip which includes preoperative checks, 1 night in the private hospital room, and 3 nights of quiet hotel recovery."
        },
        {
          question: "When can I stop taking acid blockers?",
          answer: "While most patients enjoy instant reflux relief, your treating surgeon will safely guide you on phasing out PPI and antacid medications based on post-op evaluations."
        }
      ]
    },
    es: {
      title: "Cirugía Antirreflujo Nissen Laparoscópica",
      subtitle: "Alivio Permanente para ERGE y Hernia Hiatal con Especialistas Certificados",
      overview: "Ponga fin a la Enfermedad por Reflujo Gastroesofágico (ERGE) y la acidez crónica. La funduplicatura tipo Nissen refuerza el esfínter esofágico inferior doblando la parte superior de la cámara gástrica.",
      executiveCoordination: "Toda la logística dentro de Monterrey está coordinada: transportación ejecutiva en camioneta privada, atención bilingüe dedicada y hospedaje en alojamiento ejecutivo de negocios en San Pedro Garza García. Asistencia logística personalizada desde Texas disponible bajo solicitud.",
      recoveryOverview: "La recuperación de heridas pequeñas de laparoscopia es muy rápida. Se prescribe una dieta estricta de líquidos a papillas y alimentos blandos durante 2 a 3 semanas para permitir una curación correcta.",
      whatsCoordinated: [
        "Coordinación de manometría esofágica preoperatoria, estudios de imagen y valoraciones clínicas",
        "Gestión logística de honorarios para cirujano gastrointestinal calificado, ayudantes y anestesistas",
        "Trámites de hospital, insumos quirúrgicos estériles de laparoscopia de marcas internacionales",
        "Servicio de transporte privado con chofer ejecutivo bilingüe",
        "Estancia hotelera de alta gama con asistencia de concierge para alimentación suave"
      ],
      faqs: [
        {
          question: "¿Esta técnica repara hernias hiatales?",
          answer: "Sí, la funduplicatura de Nissen es la técnica de elección de los cirujanos generales para cerrar los pilares del diafragma y corregir hernias simultáneamente."
        },
        {
          question: "¿Cuántos días de estancia en la ciudad se recomiendan?",
          answer: "Recomendamos un viaje total de 4 a 5 días para cubrir análisis clínicos preoperatorios, 1 noche de hospitalización y 3 noches de reposo en hotel corporativo."
        },
        {
          question: "¿Cuándo puedo dejar de tomar medicamentos para el reflujo?",
          answer: "Aunque el reflujo suele remitir de inmediato, el cirujano tratante le indicará el esquema correcto de retiro paulatino de antiácidos y omeprazol."
        }
      ]
    }
  },
  {
    slug: "laparoscopic-hysterectomy",
    procedureKey: "Laparoscopic_Hysterectomy",
    startingPrice: "$5,900 USD",
    en: {
      title: "Laparoscopic Hysterectomy Coordination",
      subtitle: "Minimally Invasive Guided Gynecological Surgical Excellence",
      overview: "Obtain clinical intervention for uterine fibroids, severe endometriosis, or chronic pelvic pain. Laparoscopic techniques utilize standard micro-incisions to facilitate uterine removal, meaning reduced pain and faster restoration of energy.",
      executiveCoordination: "Your entire Monterrey stay is optimized. Private executive transit is scheduled, paired with vetted bilingual guides and lodging in the most prestigious residential hotels in San Pedro Garza García. Personalized travel coordination from Texas is available upon request.",
      recoveryOverview: "While traditional open procedures require several weeks, laparoscopic patients are up walking safely the next day. A rest period of 7-14 days at a controlled pace is typically recommended before returning to Texas.",
      whatsCoordinated: [
        "Preoperative gynecological ultrasound checks, clinical panels, and pre-op clearances",
        "Facilitation and logistic support for certified gynecological surgeons and specialized staff",
        "Coordination of the private clinic operatory suite, advanced imaging, and post-op nursing check-ins",
        "Bilingual driver transportation in private executive vehicles",
        "Premium corporate recovery accommodations arranged near medical facilities"
      ],
      faqs: [
        {
          question: "Is this a total or partial hysterectomy?",
          answer: "The surgical team customizes the approach based on your direct evaluation and preferences (whether to preserve the cervix or ovaries)."
        },
        {
          question: "What safety certificates do partner clinics hold?",
          answer: "Our partner hospitals in Monterrey carry national CSG certifications equivalent to Joint Commission standards, maintaining high sanitary safety controls."
        },
        {
          question: "How long should I stay before flying back?",
          answer: "We ensure you remain in Monterrey for 4 to 5 days ensuring perfect baseline check-ups with the doctor before border or aircraft cabin boarding."
        }
      ]
    },
    es: {
      title: "Histerectomía Laparoscópica Ginecológica",
      subtitle: "Mínima Invasión para Alivio Ginecológico con Ginecólogos Certificados",
      overview: "Encuentre solución definitiva a miomas uterinos, endometriosis severa o dolor pélvico crónico. La técnica laparoscópica utiliza incisiones milimétricas para extirpar el útero, reduciendo el dolor y acelerando la ganancia de energía.",
      executiveCoordination: "Minimizamos el estrés logístico dentro de Monterrey. Su itinerario incluye chofer bilingüe en camioneta ejecutiva, acompañamiento clínico continuo y estancia en suite corporativa premium en San Pedro. Coordinación ejecutiva de viaje desde Texas disponible bajo solicitud.",
      recoveryOverview: "A diferencia de la técnica abierta clásica, con la laparoscopia se camina sin dolor al día siguiente del egreso. Se prescribe reposo moderado de 7 a 14 días para una curación óptima antes de retomar labores cotidianas.",
      whatsCoordinated: [
        "Ultrasonido ginecológico preoperatorio, analítica sanguínea y valoración de riesgo quirúrgico",
        "Trámites logísticos correspondientes a los honorarios del cirujano ginecólogo certificado y equipo auxiliar",
        "Facilitación administrativa de la clínica acreditada, sala de cirugía de laparoscopia y recuperación inicial",
        "Traslados completos con chofer y camioneta ejecutiva privada",
        "Hospedaje premium de nivel ejecutivo en áreas seguras y vigiladas con coordinación de enfermería"
      ],
      faqs: [
        {
          question: "¿La histerectomía es total o parcial?",
          answer: "El equipo ginecológico adaptará el tipo de abordaje de forma personalizada según sus antecedentes médicos (conservación de ovarios o cuello uterino)."
        },
        {
          question: "¿Con qué certificaciones cuentan los hospitales aliados?",
          answer: "Los centros hospitalarios en Monterrey cuentan con avales federales equivalentes a la Joint Commission, asegurando máxima seguridad sanitaria."
        },
        {
          question: "¿Cuántos días debo esperar en Monterrey antes de viajar seguro?",
          answer: "Recomendamos permanecer de 4 a 5 días en la ciudad para asegurar que la primera revisión ginecológica postoperatoria resulte excelente."
        }
      ]
    }
  },
  {
    slug: "rhinoplasty-monterrey",
    procedureKey: "Rhinoplasty",
    startingPrice: "$4,500 USD",
    en: {
      title: "Bespoke Aesthetic Rhinoplasty",
      subtitle: "Reconstructive and Cosmetic Nasal Design by Highly Skilled Plastic Surgeons",
      overview: "Achieve facial harmony and improved nasal airway function. Specialized board-certified plastic registry surgeons customize rhinoplasty techniques to refine the nasal bridge, tip, and correct internal septal deviations.",
      executiveCoordination: "Every Monterrey logistics asset is pre-arranged. A dedicated private executive SUV with bilingual driver manages all local transfers and clinic visits, while your recovery occurs in a boutique hotel in secure San Pedro districts. Flexible travel coordination from Texas is available upon request.",
      recoveryOverview: "Swelling and nasal splints are maintained for 7 days. Most patients resume low-impact work with minimal discomfort within a week. Safe airway breathing returns steadily.",
      whatsCoordinated: [
        "Preoperative facial imaging, virtual diagnostic simulations, and septal evaluation",
        "Coordination and facilitation of plastic and reconstructive surgeon professional fees",
        "Monitoring of certified cosmetic operating clinic and micro-surgical materials",
        "Bilingual executive private transport between airport, hotel, and consulting offices",
        "Vetted luxury corporate hotel recovery accommodations with quiet spaces"
      ],
      faqs: [
        {
          question: "Can septal airway problems be corrected inside the same surgical plan?",
          answer: "Yes, septorhinoplasty matches aesthetic improvements with airway correction by correcting a deviated septum simultaneously."
        },
        {
          question: "When are the external nasal splint and sutures removed?",
          answer: "External splints and microscopic sutures are painlessly removed around 7 days post-op during your coordinated consultation check-up."
        },
        {
          question: "Why travel from Texas for Rhinoplasty?",
          answer: "Our surgeons are internationally certified specialists who deliver high-definition natural results with upscale private care, at around 50% of Houston or Dallas fees."
        }
      ]
    },
    es: {
      title: "Rinoplastia Estética y Funcional",
      subtitle: "Diseño Nasal Reconstructivo y Armonía Facial con Cirujanos Plásticos Licenciados",
      overview: "Logre una excelente armonía en su rostro y optimice su respiración. Cirujanos plásticos certificados personalizan la técnica quirúrgica para definir el perfil nasal, punta nasal y corregir desviaciones de tabique.",
      executiveCoordination: "Todo lo de Monterrey resuelto de antemano. Camioneta ejecutiva privada con chofer bilingüe para todos los traslados locales programados y estancia de recuperación en hotel boutique de negocios en San Pedro Garza García. Coordinación concierge de viaje desde Texas disponible bajo solicitud.",
      recoveryOverview: "La férula postoperatoria se retira en el consultorio al séptimo día. La mayoría de los pacientes viajan de regreso y regresan a labores de oficina en 7 días con mínimas molestias y moretones mínimos.",
      whatsCoordinated: [
        "Diagnóstico preoperatorio de simulación digital facial y análisis de la vía aérea nasal",
        "Gestión logística y administrativa de los honorarios del cirujano plástico reconstructivo y anestesista",
        "Logística institucional del centro quirúrgico para cirugía nasal estética bajo condiciones estériles",
        "Coordinación de traslados con chofer privado bilingüe",
        "Hospedaje de alta gama para recuperación tranquila sin ruidos en zona de confort corporativa"
      ],
      faqs: [
        {
          question: "¿Se puede corregir la desviación del tabique en la misma cirugía?",
          answer: "Sí, la septorhinoplastia combina el rediseño estético con la corrección funcional del tabique desviado para optimizar la respiración."
        },
        {
          question: "¿Cuándo se retira la férula y las puntadas microscópicas?",
          answer: "La férula externa y suturas se retiran al cabo de 7 días durante la consulta médica coordinada de seguimiento sin provocar dolor."
        },
        {
          question: "¿Por qué viajar desde Texas para una rinoplastia?",
          answer: "Nuestros cirujanos están certificados por la AMCPER y ofrecen resultados muy naturales, con atención personalizada y al 50% del costo en EUA."
        }
      ]
    }
  },
  {
    slug: "smile-makeover-mexico",
    procedureKey: "Smile_Makeover",
    startingPrice: "$5,800 USD",
    en: {
      title: "Premium Dental Smile Makeover",
      subtitle: "Full Restorative Aesthetics with Advanced German Zirconia Crowns",
      overview: "Transform your smile with computerized ceramic dentistry. This comprehensive package covers 8 high-density premium German zirconia crowns or veneers, color-matched and crafted via high-precision CAD/CAM laboratories.",
      executiveCoordination: "Relax while we arrange every Monterrey detail. High-grade private executive SUV transfers, dedicated bilingual driver assistance, and premium recovery hotel suites in San Pedro Garza García are pre-arranged. Personalized travel coordination from Texas is available upon request.",
      recoveryOverview: "Since dental makeovers are non-invasive, soreness is highly mild. Patients enjoy immediate aesthetic pride. Direct soft meal guidelines are recommended for the first 3-5 days.",
      whatsCoordinated: [
        "Preoperative bite assessment, computerized digital mock-up, and clinical x-ray panels",
        "Coordination and coverage representation of leading prosthodontists and digital lab technician fees",
        "Provision of certified bio-compatible German CAD/CAM zirconia elements",
        "Private terminal-to-office executive vehicle transfers",
        "Premium business hotel lodging configured with concierge support for dining comfort"
      ],
      faqs: [
        {
          question: "How many clinical visits are needed?",
          answer: "Typically just 2 key visits: the first for digital preparation and mockup framing, and the second for final high-bond crown placement, completed in 5-6 total days."
        },
        {
          question: "Is there a warranty on German Zirconia materials?",
          answer: "Yes, our certified partner dental laboratories provide structural warranties against damage on bio-compatible premium dental elements."
        },
        {
          question: "Are dental treatments in Mexico highly sterile?",
          answer: "Unquestionably. Our partner dental clinics operate strictly under OSHA-equivalent sanitation protocols, utilizing advanced single-use sterilized kits for your complete safety."
        }
      ]
    },
    es: {
      title: "Diseño de Sonrisa Dental Premium",
      subtitle: "Rehabilitación Estética de Alta Gama con Coronas de Zirconia Alemana",
      overview: "Renueve por completo su sonrisa con odontología cerámica computarizada. Este paquete integral cubre 8 coronas o carillas de zirconia alemana de alta densidad, fabricadas con impresores CAD/CAM de máxima precisión.",
      executiveCoordination: "Descanse mientras coordinamos cada detalle en Monterrey. Traslados clínicos en camioneta ejecutiva privada y hospedaje en suites de negocios preferenciales en San Pedro Garza García, todo pre-organizado. Coordinación de viaje personalizada desde Texas disponible bajo solicitud.",
      recoveryOverview: "Es un procedimiento de odontología mínimamente molesto. Tendrá mínima sensibilidad inicial, disfrutando de un cambio estético inmediato. Se aconseja alimentos suaves por los primeros 3 a 5 días.",
      whatsCoordinated: [
        "Evaluación preoperatoria de mordida, diagnóstico 3D digital interactivo y placas de rayos X",
        "Gestión administrativa de honorarios del cirujano dentista rehabilitador y técnico de laboratorio dental",
        "Provisión directa de elementos estructurales de zirconia alemana premium de laboratorio certificado",
        "Servicios de traslado privado en camioneta de alta gama",
        "Estancia selecta en alojamiento corporativo premium con alternativas de alimentación blanda a petición"
      ],
      faqs: [
        {
          question: "¿Cuántas consultas se necesitan para colocar el diseño de sonrisa?",
          answer: "Generalmente solo 2 citas clave: la primera para preparación digital, escaneo y provisionales; y la segunda para colocación definitiva, todo en 5-6 días."
        },
        {
          question: "¿Los materiales cuentan con alguna garantía?",
          answer: "Sí, los laboratorios dentales certificados e integrados ofrecen respaldos de garantía sobre fallas mecánicas de la zirconia dental biocompatible."
        },
        {
          question: "¿Los procedimientos clínicos dentales en México son estériles?",
          answer: "Sin duda alguna. Las clínicas de diseño de sonrisa aliadas operan bajo rígidas normas de esterilización y autoclave equivalentes a OSHA."
        }
      ]
    }
  }
];
