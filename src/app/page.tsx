import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <a href="#inicio" className="flex items-center">
              <Image 
                src="/logo amestoy.png" 
                alt="Estudio Amestoy & Asociados" 
                width={200} 
                height={60} 
                className="h-8 md:h-12 w-auto"
                priority
              />
            </a>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#inicio" className="text-gray-600 hover:text-gray-800 font-montserrat text-sm lg:text-base">Inicio</a>
              <a href="#sobre-nosotros" className="text-gray-600 hover:text-gray-800 font-montserrat text-sm lg:text-base">Sobre Nosotros</a>
              <a href="#areas-practica" className="text-gray-600 hover:text-gray-800 font-montserrat text-sm lg:text-base">Áreas de Práctica</a>
              <a href="#contacto" className="text-gray-600 hover:text-gray-800 font-montserrat text-sm lg:text-base">Contacto</a>
              <a href="tel:+541160111758" className="bg-gray-800 text-white px-4 lg:px-6 py-2 font-montserrat hover:bg-gray-700 transition-colors text-sm lg:text-base">
                Llamar ahora
              </a>
            </div>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-600 hover:text-gray-800">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="px-4 md:px-8 lg:px-12" style={{ marginTop: '8rem' }}>
        <div className="modern-hero">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10 animate-fade-in-left">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 font-playfair italic leading-tight">
                Estudio Amestoy & Asociados
              </h1>
              <p className="text-base md:text-lg text-gray-200 mb-3 md:mb-4 font-montserrat leading-relaxed">
                Especialistas en Derecho Civil Patrimonial y recupero de inmuebles en CABA y Provincia de Buenos Aires.
              </p>
              <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8 font-montserrat leading-relaxed">
                Más de 30 años de experiencia en litigación. Estrategia y resultados claros para la defensa de su patrimonio.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a href="tel:+541160111758" className="modern-button text-center">
                  Llamar ahora
                </a>
                <a href="#contacto" className="modern-button modern-button-secondary text-center">
                  Enviar consulta
                </a>
              </div>
            </div>
            <div className="relative z-10 animate-fade-in-right delay-200 mt-8 md:mt-0">
              <div className="bg-white/10 backdrop-blur-sm rounded-[2rem] p-4 md:p-6 border border-white/20">
                <h3 className="text-white text-base md:text-lg font-semibold mb-3 md:mb-4">¿Necesitás asesoramiento?</h3>
                <div className="space-y-2 md:space-y-3 text-gray-200 text-sm md:text-base">
                  <p><strong>Teléfono:</strong> 11-6011-1758</p>
                    <p><strong>Dirección:</strong> Avenida Corrientes 1386 Piso 4 Oficina 17, CABA</p>
                  <p><strong>Instagram:</strong> @amestoyestudiojuridico</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="sobre-nosotros" className="py-12 md:py-24">
        <div className="relative">
          {/* Imagen izquierda - oculta en móviles */}
          <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 w-48 h-64 bg-gray-200 rounded-r-[2.5rem] overflow-hidden animate-fade-in-left delay-300">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-montserrat">Imagen 1</span>
            </div>
          </div>
          
          {/* Imagen derecha - oculta en móviles */}
          <div className="hidden lg:block absolute right-0 top-1/2 transform translate-y-16 w-48 h-64 bg-gray-200 rounded-l-[2.5rem] overflow-hidden animate-fade-in-right delay-400">
            <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <span className="text-gray-600 text-sm font-montserrat">Imagen 2</span>
            </div>
          </div>
          
          {/* Contenido central */}
          <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center flex items-center justify-center min-h-[400px] lg:h-[500px]">
            <div className="animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6 font-playfair italic">Sobre nosotros</h2>
              <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 font-montserrat">Más de 30 años protegiendo patrimonios</p>
              
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="text-center animate-fade-in-left delay-200">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Nuestra experiencia</h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 font-montserrat">
                    Somos el Estudio Amestoy & Asociados, con más de 30 años de trayectoria en litigación en el ámbito civil, 
                    priorizando el Derecho Patrimonial.
                  </p>
                  <div className="space-y-2 flex flex-col items-center">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-montserrat text-sm md:text-base">Capital Federal (CABA)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                      <span className="text-gray-700 font-montserrat text-sm md:text-base">Provincia de Buenos Aires</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center animate-fade-in-right delay-300">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Nuestro enfoque</h3>
                  <div className="space-y-3 md:space-y-4 flex flex-col items-center">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 font-montserrat text-sm md:text-base">Experiencia probada</h4>
                        <p className="text-gray-600 text-xs md:text-sm font-montserrat">Más de 30 años de experiencia</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1 font-montserrat text-sm md:text-base">Especialización</h4>
                        <p className="text-gray-600 text-xs md:text-sm font-montserrat">Derecho Civil Patrimonial</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="areas-practica" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-4 md:p-6 lg:p-8 text-white">
            <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-playfair italic">Áreas de práctica</h2>
              <p className="text-base md:text-lg text-gray-300 font-montserrat">Especialización en Derecho Civil Patrimonial</p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
              <div className="text-center animate-fade-in-scale delay-100">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-white text-lg md:text-xl font-bold">R</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair italic">Recupero de Inmuebles</h3>
                <p className="text-sm md:text-base text-gray-300 font-montserrat">
                  Acciones de desalojo y reivindicación para recuperar su propiedad usurpada.
                </p>
              </div>
              
              <div className="text-center animate-fade-in-scale delay-200">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-white text-lg md:text-xl font-bold">S</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair italic">Sucesiones</h3>
                <p className="text-sm md:text-base text-gray-300 font-montserrat">
                  Ab-intestato y testamentarias, trámites completos para proteger su herencia.
                </p>
              </div>
              
              <div className="text-center animate-fade-in-scale delay-300">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-white text-lg md:text-xl font-bold">D</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair italic">Divisiones de Condominio</h3>
                <p className="text-sm md:text-base text-gray-300 font-montserrat">
                  Resolución de conflictos entre copropietarios de manera efectiva.
                </p>
              </div>
              
              <div className="text-center animate-fade-in-scale delay-400">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-white text-lg md:text-xl font-bold">A</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair italic">Subastas Judiciales</h3>
                <p className="text-sm md:text-base text-gray-300 font-montserrat">
                  Asesoramiento y representación en subastas judiciales especializadas.
                </p>
              </div>
              
              <div className="text-center animate-fade-in-scale delay-500">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-white text-lg md:text-xl font-bold">P</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair italic">Derecho Penal</h3>
                <p className="text-sm md:text-base text-gray-300 font-montserrat">
                  Defensa penal especializada y asesoramiento en procesos criminales.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-8 md:mt-12 animate-slide-in-bottom delay-500">
              <div className="bg-white/10 backdrop-blur-sm rounded-[2.5rem] p-4 md:p-6 border border-white/20 inline-block">
                <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4 font-playfair italic">¿Su caso no figura?</h3>
                <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 font-montserrat">
                  Contanos tu situación: evaluamos la viabilidad legal y definimos los próximos pasos sin tecnicismos.
                </p>
                <a href="#contacto" className="bg-white text-gray-800 px-4 md:px-6 py-2 md:py-3 font-montserrat hover:bg-gray-200 transition-colors text-sm md:text-base">
                  Consultar mi caso
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Soluciones Legales Eficientes */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Soluciones Legales Eficientes</h2>
            <p className="text-base md:text-lg text-gray-600 font-montserrat">Enfoque integral para la resolución de conflictos patrimoniales</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 text-center animate-fade-in-left delay-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">S</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Soluciones Eficientes</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Años de experiencia en derecho real con los mejores profesionales trabajando en nuestro equipo.
              </p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 text-center animate-fade-in-up delay-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">C</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Compramos YA</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Contamos con inversores y fondos de inversión privados dispuestos a evaluar su caso.
              </p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 text-center animate-fade-in-right delay-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">N</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Negociación Creativa</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Somos creativos a la hora de proponer soluciones que satisfagan a todas las partes involucradas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Cómo trabajamos</h2>
            <p className="text-base md:text-lg text-gray-600 font-montserrat">Proceso claro y transparente</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-lg border border-gray-100 text-center animate-fade-in-scale delay-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair italic">Escucha y diagnóstico</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Recibimos tu consulta y coordinamos una entrevista inicial para entender tu situación.
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-lg border border-gray-100 text-center animate-fade-in-scale delay-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair italic">Estrategia y presupuesto</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Objetivos, plazos estimados y honorarios detallados por escrito.
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-lg border border-gray-100 text-center animate-fade-in-scale delay-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair italic">Gestión y seguimiento</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Litigación, presentaciones, audiencias y negociaciones con informes periódicos.
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-lg border border-gray-100 text-center animate-fade-in-scale delay-400">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair italic">Cierre y prevención</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Buscamos el mejor resultado y te asesoramos para evitar futuros conflictos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Preguntas frecuentes</h2>
            <p className="text-base md:text-lg text-gray-600 font-montserrat">Respuestas a las consultas más comunes</p>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <details className="group bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up delay-100">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-base md:text-lg font-bold text-gray-800 font-playfair italic pr-4">¿En qué áreas se especializan?</h3>
                <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <p className="text-sm md:text-base text-gray-600 font-montserrat">
                  Nuestra área principal es el Derecho Patrimonial Civil, con foco en el recupero de inmuebles, sucesiones, divisiones de condominio y subastas.
                </p>
              </div>
            </details>
            
            <details className="group bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up delay-200">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-base md:text-lg font-bold text-gray-800 font-playfair italic pr-4">¿Dónde litigan?</h3>
                <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <p className="text-sm md:text-base text-gray-600 font-montserrat">
                  Principalmente en la Capital Federal (CABA) y en la Provincia de Buenos Aires.
                </p>
              </div>
            </details>
            
            <details className="group bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up delay-300">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-base md:text-lg font-bold text-gray-800 font-playfair italic pr-4">¿Cómo se pactan los honorarios?</h3>
                <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <p className="text-sm md:text-base text-gray-600 font-montserrat">
                  Se definen por escrito, basándonos en la complejidad del caso y la normativa vigente.
                </p>
              </div>
            </details>
            
            <details className="group bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up delay-400">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-base md:text-lg font-bold text-gray-800 font-playfair italic pr-4">¿Cuál es el primer paso si tengo un inmueble usurpado?</h3>
                <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <p className="text-sm md:text-base text-gray-600 font-montserrat">
                  Contáctenos de inmediato por teléfono. Evaluaremos los antecedentes de la propiedad y coordinaremos una entrevista para iniciar la acción legal urgente.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair italic">Ubicación y contacto</h2>
            <p className="text-base md:text-lg text-gray-600 font-montserrat">Estamos aquí para ayudarte</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 animate-fade-in-left delay-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 font-playfair italic">Información de contacto</h3>
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                    <span className="text-white text-sm md:text-xl font-bold">A</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg font-montserrat">Dirección</h4>
                    <p className="text-sm md:text-base text-gray-600 font-montserrat">Avenida Corrientes 1386 Piso 4 Oficina 17, CABA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                    <span className="text-white text-sm md:text-xl font-bold">T</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg font-montserrat">Teléfono</h4>
                    <p className="text-sm md:text-base text-gray-600 font-montserrat">11-6011-1758</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-800 rounded-full flex items-center justify-center mr-4 md:mr-6 flex-shrink-0">
                    <span className="text-white text-sm md:text-xl font-bold">I</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-base md:text-lg font-montserrat">Instagram</h4>
                    <p className="text-sm md:text-base text-gray-600 font-montserrat">@amestoyestudiojuridico</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 md:mt-10 space-y-3 md:space-y-4">
                <a href="tel:+541160111758" className="block w-full bg-gray-800 text-white px-4 md:px-6 py-3 md:py-4 text-center font-montserrat hover:bg-gray-700 transition-colors text-sm md:text-base">
                  Llamar ahora
                </a>
                <a href="https://instagram.com/amestoyestudiojuridico" target="_blank" rel="noopener noreferrer" className="block w-full bg-white text-gray-800 border-2 border-gray-800 px-4 md:px-6 py-3 md:py-4 text-center font-montserrat hover:bg-gray-50 transition-colors text-sm md:text-base">
                  Seguir en Instagram
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 animate-fade-in-right delay-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8 font-playfair italic">Cómo llegar</h3>
              <div className="rounded-[2.5rem] h-48 md:h-64 overflow-hidden mb-4 md:mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.1234567890123!2d-58.39612345678901!3d-34.60345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1234567890%3A0x1234567890abcdef!2sAv.%20Corrientes%201386%2C%20C1043%20CABA!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación del Estudio Amestoy & Asociados"
                ></iframe>
              </div>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Avenida Corrientes 1386 Piso 4 Oficina 17, CABA
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-6 md:p-8 lg:p-12 text-white text-center animate-fade-in-scale delay-100">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 font-playfair italic">Recupere su patrimonio. Empecemos hoy.</h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 lg:mb-10 text-gray-200 font-montserrat">
              Contáctenos por teléfono al 11-6011-1758 o envíenos su consulta. Más de 30 años de experiencia en litigación respaldan su caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <a href="tel:+541160111758" className="bg-white text-gray-800 px-6 md:px-8 py-3 md:py-4 font-montserrat hover:bg-gray-200 transition-colors text-sm md:text-base">
                Llamar ahora
              </a>
              <a href="#contacto" className="bg-transparent text-white border-2 border-white px-6 md:px-8 py-3 md:py-4 font-montserrat hover:bg-white hover:text-gray-800 transition-colors text-sm md:text-base">
                Enviar consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-12">
            {/* Información del Estudio */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4 md:mb-6">
                <Image 
                  src="/logo amestoy.png" 
                  alt="Estudio Amestoy & Asociados" 
                  width={250} 
                  height={75} 
                  className="h-12 md:h-16 w-auto"
                />
              </div>
              <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 font-montserrat">
                Especialistas en Derecho Civil Patrimonial y recupero de inmuebles con más de 30 años de experiencia en litigación.
              </p>
              <div className="space-y-2 md:space-y-3">
                <p className="text-gray-400 font-montserrat flex items-center text-sm md:text-base">
                  <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded-full flex items-center justify-center mr-2 md:mr-3 text-xs font-bold">A</span>
                  Avenida Corrientes 1386 Piso 4 Oficina 17, CABA
                </p>
                <p className="text-gray-400 font-montserrat flex items-center text-sm md:text-base">
                  <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded-full flex items-center justify-center mr-2 md:mr-3 text-xs font-bold">T</span>
                  11-6011-1758
                </p>
                <p className="text-gray-400 font-montserrat flex items-center text-sm md:text-base">
                  <span className="w-4 h-4 md:w-5 md:h-5 bg-gray-600 rounded-full flex items-center justify-center mr-2 md:mr-3 text-xs font-bold">I</span>
                  @amestoyestudiojuridico
                </p>
              </div>
            </div>

            {/* Áreas de Práctica */}
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 font-playfair italic">Áreas de Práctica</h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="text-gray-300 font-montserrat text-sm md:text-base">• Recupero de Inmuebles</li>
                <li className="text-gray-300 font-montserrat text-sm md:text-base">• Sucesiones</li>
                <li className="text-gray-300 font-montserrat text-sm md:text-base">• Divisiones de Condominio</li>
                <li className="text-gray-300 font-montserrat text-sm md:text-base">• Subastas Judiciales</li>
                <li className="text-gray-300 font-montserrat text-sm md:text-base">• Derecho Penal</li>
                <li className="text-gray-300 font-montserrat text-sm md:text-base">• Derecho Civil Patrimonial</li>
              </ul>
            </div>

            {/* Cobertura y Horarios */}
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 font-playfair italic">Cobertura</h4>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                <li className="text-gray-300 font-montserrat text-sm md:text-base">• Capital Federal (CABA)</li>
                <li className="text-gray-300 font-montserrat text-sm md:text-base">• Provincia de Buenos Aires</li>
              </ul>
              
              <h4 className="text-lg md:text-xl font-bold mb-4 md:mb-6 font-playfair italic">Horarios de Atención</h4>
              <div className="space-y-1 md:space-y-2">
                <p className="text-gray-300 font-montserrat text-sm md:text-base">Lunes a Viernes: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Línea divisoria y copyright */}
          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 font-montserrat text-xs md:text-sm text-center md:text-left">
                © 2024 Estudio Amestoy & Asociados. Todos los derechos reservados.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
                <a href="tel:+541160111758" className="text-gray-400 hover:text-white transition-colors font-montserrat text-xs md:text-sm">
                  Llamar ahora
                </a>
                <a href="#contacto" className="text-gray-400 hover:text-white transition-colors font-montserrat text-xs md:text-sm">
                  Contacto
                </a>
                <a href="https://instagram.com/amestoyestudiojuridico" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors font-montserrat text-xs md:text-sm">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/541160111758?text=Hola,%20me%20interesa%20recibir%20asesoramiento%20legal" 
          target="_blank"
          rel="noopener noreferrer"
        className="fixed bottom-16 md:bottom-20 right-4 md:right-6 z-50 bg-gray-800 hover:bg-gray-700 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.346 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  );
}