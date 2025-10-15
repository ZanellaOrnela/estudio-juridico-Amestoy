"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { AnimatedSection } from "./components/AnimatedSection";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-nosotros", "areas-practica", "contacto"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="w-full px-4 md:px-8 lg:px-12">
          <div className="flex justify-between items-center py-4 md:py-6">
            <a href="#inicio" className="flex items-center">
              <div className="w-36 md:w-48 h-12 md:h-16 overflow-hidden flex items-center justify-center rounded-xl">
        <Image
                  src="/logo amestoy 2.png" 
                  alt="Estudio Amestoy & Asociados" 
                  width={300} 
                  height={80} 
                  className="w-full h-auto -mt-1 md:-mt-2 -mb-1 md:-mb-2"
          priority
        />
              </div>
            </a>
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#inicio" className={`text-gray-600 hover:text-gray-800 font-montserrat text-sm lg:text-base font-semibold transition-colors relative ${activeSection === "inicio" ? "text-amestoy-blue" : ""}`}>
                Inicio
                {activeSection === "inicio" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amestoy-blue"></div>}
              </a>
              <a href="#sobre-nosotros" className={`text-gray-600 hover:text-gray-800 font-montserrat text-sm lg:text-base font-semibold transition-colors relative ${activeSection === "sobre-nosotros" ? "text-amestoy-blue" : ""}`}>
                Sobre Nosotros
                {activeSection === "sobre-nosotros" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amestoy-blue"></div>}
              </a>
              <a href="#areas-practica" className={`text-gray-600 hover:text-gray-800 font-montserrat text-sm lg:text-base font-semibold transition-colors relative ${activeSection === "areas-practica" ? "text-amestoy-blue" : ""}`}>
                Áreas de Práctica
                {activeSection === "areas-practica" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amestoy-blue"></div>}
              </a>
              <a href="#contacto" className={`text-gray-600 hover:text-gray-800 font-montserrat text-sm lg:text-base font-semibold transition-colors relative ${activeSection === "contacto" ? "text-amestoy-blue" : ""}`}>
                Contacto
                {activeSection === "contacto" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amestoy-blue"></div>}
              </a>
            </div>
            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700 hover:text-gray-900 p-2 rounded-md border border-gray-200"
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu panel */}
        <div
          className={`md:hidden bg-white border-t border-gray-200 transition-[max-height,opacity] duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-3 space-y-2">
            <a href="#inicio" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 font-montserrat text-base font-semibold transition-colors relative ${activeSection === "inicio" ? "text-amestoy-blue" : "text-gray-700 hover:text-gray-900"}`}>
              Inicio
              {activeSection === "inicio" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amestoy-blue"></div>}
            </a>
            <a href="#sobre-nosotros" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 font-montserrat text-base font-semibold transition-colors relative ${activeSection === "sobre-nosotros" ? "text-amestoy-blue" : "text-gray-700 hover:text-gray-900"}`}>
              Sobre Nosotros
              {activeSection === "sobre-nosotros" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amestoy-blue"></div>}
            </a>
            <a href="#areas-practica" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 font-montserrat text-base font-semibold transition-colors relative ${activeSection === "areas-practica" ? "text-amestoy-blue" : "text-gray-700 hover:text-gray-900"}`}>
              Áreas de Práctica
              {activeSection === "areas-practica" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amestoy-blue"></div>}
            </a>
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)} className={`block py-2 font-montserrat text-base font-semibold transition-colors relative ${activeSection === "contacto" ? "text-amestoy-blue" : "text-gray-700 hover:text-gray-900"}`}>
              Contacto
              {activeSection === "contacto" && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amestoy-blue"></div>}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-32 md:pt-40 pb-16 md:pb-24 lg:pb-28">
        {/* Título fuera del bloque hero, encima del div */}
        <div className="max-w-none w-full px-4 md:px-8 lg:px-12 mb-6 md:mb-8">
          <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-amestoy-blue font-playfair leading-tight">
              Estudio Amestoy & Asociados
            </h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <p className="text-gray-500 font-montserrat text-sm md:text-base">
                  Especialistas en Derecho Civil Patrimonial
                </p>
                <div className="h-0.5 w-16 bg-amestoy-accent mt-2"></div>
              </div>
              <div className="flex-shrink-0">
                <a href="#contacto" className="bg-amestoy-blue text-white px-6 py-3 font-montserrat hover:bg-[#0c1833] transition-colors text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl">
                  Consultar ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4 md:mx-8 lg:mx-12">
          <div className="relative w-full rounded-[2.5rem] overflow-hidden min-h-[320px] md:min-h-[380px] lg:min-h-[420px] bg-[url('/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg')] bg-cover bg-center px-6 md:px-12 lg:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-[rgba(10,20,40,0.7)] to-[rgba(10,15,30,0.6)]"></div>
          <div className="absolute bottom-0 left-0 right-0 z-10 px-11 py-6 md:py-8 lg:py-10">
            <div className="glass-lite rounded-[2rem] p-3 md:p-4 lg:p-5 w-full">
              <p className="text-amestoy-accent font-playfair text-lg md:text-xl font-bold mb-3 tracking-wide">¿Necesitas asesoramiento?</p>
              <p className="text-sm md:text-base text-white/90 mb-2 font-montserrat leading-tight">
                Especialistas en Derecho Civil Patrimonial y recupero de inmuebles en CABA y Provincia de Buenos Aires.
              </p>
              <p className="text-sm md:text-base text-white/90 mb-0 font-montserrat leading-tight">
                Más de 30 años de experiencia en litigación. Estrategia y resultados claros para la defensa de su patrimonio.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="sobre-nosotros" className="py-12 md:py-24 bg-white">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Título y subtítulo */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-amestoy-blue font-playfair mb-4">
              Sobre nosotros
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-montserrat">
              Más de 30 años protegiendo patrimonios
            </p>
          </div>

          {/* Layout principal */}
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            {/* Columna izquierda - Imagen */}
            <div className="animate-fade-in-left flex">
              <div className="relative w-full">
                <Image
                  src="/giammarco-boscaro-zeH-ljawHtg-unsplash.jpg"
                  alt="Lote de libros en estantería de madera negra"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover rounded-[2.5rem] shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amestoy-accent/20 rounded-full"></div>
              </div>
            </div>

            {/* Columna derecha - Contenido apilado */}
            <div className="animate-fade-in-right flex flex-col">
              <div className="space-y-8 flex-grow">
                {/* Div de experiencia */}
                <div className="bg-gray-50 rounded-[2.5rem] p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 font-playfair">Nuestra experiencia</h3>
                  </div>
                  <p className="text-gray-600 font-montserrat mb-4 text-base">
                    Somos el Estudio Amestoy & Asociados, con más de 30 años de trayectoria en litigación en el ámbito civil, 
                    priorizando el Derecho Patrimonial.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amestoy-blue rounded-full mr-3"></div>
                      <span className="text-gray-700 font-montserrat text-base">Capital Federal (CABA)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amestoy-blue rounded-full mr-3"></div>
                      <span className="text-gray-700 font-montserrat text-base">Provincia de Buenos Aires</span>
                    </div>
                  </div>
                </div>

                {/* Div de enfoque */}
                <div className="bg-gray-50 rounded-[2.5rem] p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 font-playfair">Nuestro enfoque</h3>
                  </div>
                  <p className="text-gray-600 font-montserrat mb-4 text-base">
                    Estrategia y resultados claros para la defensa de su patrimonio
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-amestoy-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1 font-montserrat">Experiencia probada</h4>
                        <p className="text-gray-600 font-montserrat text-sm">Más de 30 años de experiencia en litigación civil</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-amestoy-blue rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 mb-1 font-montserrat">Especialización</h4>
                        <p className="text-gray-600 font-montserrat text-sm">Derecho Civil Patrimonial y recupero de inmuebles</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Silvina Amestoy Section */}
      <section className="py-12 md:py-20 gradient-accent">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Título y subtítulo arriba */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amestoy-blue font-playfair mb-4">
              Silvina Amestoy
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-montserrat">
              Fundadora y Directora del Estudio
            </p>
          </div>

          {/* Layout con foto central y divs a los lados */}
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Div izquierdo */}
            <div className="animate-fade-in-left">
              <div className="bg-white rounded-[2.5rem] p-6 shadow-lg border border-gray-200 h-full flex flex-col">
                <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-playfair">Experiencia</h3>
                <p className="text-gray-600 font-montserrat text-sm mb-4 flex-grow">
                  <strong>Magíster en Derecho Civil Patrimonial</strong> por la Pontificia Universidad Católica Argentina (2014-2015) 
                  y <strong>Abogada con Diploma de Honor</strong> por la Universidad del Salvador (1989-1994). 
                  Especialista en derechos reales con más de 30 años de experiencia profesional.
                </p>
                <div className="space-y-2 mt-auto">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amestoy-blue rounded-full mr-3"></div>
                    <span className="text-gray-700 font-montserrat text-sm">Certificación CAMS - ACAMS</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-amestoy-blue rounded-full mr-3"></div>
                    <span className="text-gray-700 font-montserrat text-sm">Especialista en derechos reales</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Foto central */}
            <div className="animate-fade-in-up order-first lg:order-none">
              <div className="relative">
                <Image 
                  src="/1609068178084.jpg"
                  alt="Silvina Amestoy - Abogada"
                  width={400}
                  height={500}
                  className="w-full h-96 md:h-[500px] object-cover rounded-[2.5rem] shadow-xl"
                />
              </div>
            </div>
            
            {/* Div derecho */}
            <div className="animate-fade-in-right">
              <div className="bg-white rounded-[2.5rem] p-6 shadow-lg border border-gray-200 h-full flex flex-col">
                <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-playfair">Trayectoria</h3>
                <p className="text-gray-600 font-montserrat text-sm flex-grow">
                  Titular del Estudio Jurídico Amestoy & Asociados desde 1995. Anteriormente se desempeñó como 
                  <strong> Directora Legal en Infosubastas S.A.</strong> (2009-2019), especializándose en asesoramiento 
                  para la compra de inmuebles en subastas judiciales y negociación con inmuebles litigiosos.
                </p>
              </div>
            </div>
          </div>
          
          {/* Botones de contacto abajo */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href="https://ar.linkedin.com/in/silvina-amestoy-b5161229" target="_blank" rel="noopener noreferrer" className="bg-amestoy-blue text-white px-6 py-3 font-montserrat hover:bg-[#0c1833] transition-colors text-sm text-center rounded-lg">
              Ver perfil en LinkedIn
            </a>
            <a href="https://wa.me/541160111758?text=Hola%20Silvina,%20me%20interesa%20recibir%20asesoramiento%20legal" target="_blank" rel="noopener noreferrer" className="bg-amestoy-accent text-amestoy-blue px-6 py-3 font-montserrat hover:bg-[#E8A99E] transition-colors text-sm text-center rounded-lg">
              Contactar por WhatsApp
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Practice Areas Section */}
        <section id="areas-practica" className="py-12 md:py-20 bg-amestoy-blue">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-7xl mx-auto px-2 md:px-4 lg:px-6">
          {/* Título y subtítulo */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-playfair mb-4">
              Áreas de práctica
            </h2>
            <p className="text-lg md:text-xl text-white/90 font-montserrat">
              Especialización en Derecho Civil Patrimonial
            </p>
          </div>

          {/* Grid de áreas de práctica */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 mb-16">
            {/* Recupero de Inmuebles */}
            <div className="bg-white rounded-[2.5rem] p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow animate-fade-in-up">
              <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair">Recupero de Inmuebles</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Acciones de desalojo y reivindicación para recuperar su propiedad usurpada.
              </p>
            </div>

            {/* Sucesiones */}
            <div className="bg-white rounded-[2.5rem] p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow animate-fade-in-up delay-100">
              <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">Sucesiones</h3>
              <p className="text-gray-600 font-montserrat">
                Ab-intestato y testamentarias, trámites completos para proteger su herencia.
              </p>
            </div>

            {/* Divisiones de Condominio */}
            <div className="bg-white rounded-[2.5rem] p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow animate-fade-in-up delay-200">
              <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">Divisiones de Condominio</h3>
              <p className="text-gray-600 font-montserrat">
                Resolución de conflictos entre copropietarios de manera efectiva.
              </p>
            </div>

            {/* Subastas Judiciales */}
            <div className="bg-white rounded-[2.5rem] p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow animate-fade-in-up delay-300">
              <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">Subastas Judiciales</h3>
              <p className="text-gray-600 font-montserrat">
                Asesoramiento y representación en subastas judiciales especializadas.
              </p>
            </div>

            {/* Derecho Penal */}
            <div className="bg-white rounded-[2.5rem] p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow animate-fade-in-up delay-400">
              <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-playfair">Derecho Penal</h3>
              <p className="text-gray-600 font-montserrat">
                Defensa penal especializada y asesoramiento en procesos criminales.
              </p>
            </div>
          </div>

          {/* Sección de consulta */}
          <div className="bg-white/20 backdrop-blur-sm rounded-[2.5rem] p-6 md:p-8 text-center border border-white/30 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-playfair">¿Su caso no figura?</h3>
            <p className="text-base text-white/90 mb-6 font-montserrat max-w-2xl mx-auto leading-relaxed">
              Cuéntanos tu situación: evaluamos la viabilidad legal y definimos los próximos pasos sin tecnicismos.
            </p>
                <a href="#contacto" className="inline-block bg-white text-amestoy-blue px-8 py-3 font-montserrat hover:bg-gray-100 transition-colors text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl">
              Consultar mi caso
            </a>
          </div>
        </AnimatedSection>
      </section>

      {/* Soluciones Legales Eficientes */}
      <section className="py-12 md:py-20 gradient-accent">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
            <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair">Soluciones Legales Eficientes</h2>
              <div className="h-0.5 w-14 bg-amestoy-accent mx-auto mb-3"></div>
            <p className="text-base md:text-lg text-gray-600 font-montserrat">Enfoque integral para la resolución de conflictos patrimoniales</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 text-center animate-fade-in-up delay-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amestoy-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">S</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair">Soluciones Eficientes</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Años de experiencia en derecho real con los mejores profesionales trabajando en nuestro equipo.
              </p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 text-center animate-fade-in-up delay-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amestoy-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">C</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair">Compramos YA</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Contamos con inversores y fondos de inversión privados dispuestos a evaluar su caso.
              </p>
            </div>
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 lg:p-8 shadow-lg border border-gray-100 text-center animate-fade-in-up delay-300 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amestoy-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">N</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair">Negociación Creativa</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Somos creativos a la hora de proponer soluciones que satisfagan a todas las partes involucradas.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* How We Work Section */}
      <section className="py-12 md:py-20 bg-white">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 font-playfair">Cómo trabajamos</h2>
            <div className="h-0.5 w-14 bg-amestoy-accent mx-auto mb-3"></div>
            <p className="text-base md:text-lg text-gray-600 font-montserrat">Proceso claro y transparente</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-lg border border-gray-100 text-center animate-fade-in-up delay-100">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amestoy-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair">Escucha y diagnóstico</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Recibimos tu consulta y coordinamos una entrevista inicial para entender tu situación.
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-lg border border-gray-100 text-center animate-fade-in-up delay-200">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amestoy-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair">Estrategia y presupuesto</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Objetivos, plazos estimados y honorarios detallados por escrito.
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-lg border border-gray-100 text-center animate-fade-in-up delay-300">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amestoy-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair">Gestión y seguimiento</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Litigación, presentaciones, audiencias y negociaciones con informes periódicos.
              </p>
            </div>
            
            <div className="bg-white rounded-[2.5rem] p-4 md:p-6 shadow-lg border border-gray-100 text-center animate-fade-in-up delay-400">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-amestoy-blue rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                <span className="text-lg md:text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 font-playfair">Cierre y prevención</h3>
              <p className="text-sm md:text-base text-gray-600 font-montserrat">
                Buscamos el mejor resultado y te asesoramos para evitar futuros conflictos.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-amestoy-gray-light">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair">Preguntas frecuentes</h2>
            <div className="h-0.5 w-14 bg-amestoy-accent mx-auto mb-3"></div>
            <p className="text-base md:text-lg text-gray-600 font-montserrat">Respuestas a las consultas más comunes</p>
          </div>
          
          <div className="space-y-3 md:space-y-4">
            <details className="group bg-white rounded-[2.5rem] shadow-lg border border-gray-100 overflow-hidden animate-fade-in-up delay-100">
              <summary className="flex items-center justify-between p-4 md:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                <h3 className="text-base md:text-lg font-bold text-gray-800 font-playfair pr-4">¿En qué áreas se especializan?</h3>
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
                <h3 className="text-base md:text-lg font-bold text-gray-800 font-playfair pr-4">¿Dónde litigan?</h3>
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
                <h3 className="text-base md:text-lg font-bold text-gray-800 font-playfair pr-4">¿Cómo se pactan los honorarios?</h3>
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
                <h3 className="text-base md:text-lg font-bold text-gray-800 font-playfair pr-4">¿Cuál es el primer paso si tengo un inmueble usurpado?</h3>
                <span className="text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0">▼</span>
              </summary>
              <div className="px-4 md:px-6 pb-4 md:pb-6">
                <p className="text-sm md:text-base text-gray-600 font-montserrat">
                  Contáctenos de inmediato por teléfono. Evaluaremos los antecedentes de la propiedad y coordinaremos una entrevista para iniciar la acción legal urgente.
                </p>
              </div>
            </details>
          </div>
        </AnimatedSection>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 md:py-20 bg-white">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-8 md:mb-12 lg:mb-16 animate-fade-in-up">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4 font-playfair">Contacto</h2>
            <div className="h-0.5 w-14 bg-amestoy-accent mx-auto mb-3"></div>
            <p className="text-base md:text-lg text-gray-600 font-montserrat">Estamos aquí para ayudarte</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Formulario de contacto */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-lg border border-gray-100 animate-fade-in-left delay-100">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 font-playfair">Envíanos tu consulta</h3>
              
              <form className="space-y-4 md:space-y-5">
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2 font-montserrat">Nombre completo</label>
                  <input 
                    type="text" 
                    id="nombre"
                    className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amestoy-blue focus:border-transparent font-montserrat text-sm md:text-base"
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2 font-montserrat">Teléfono</label>
                  <input 
                    type="tel" 
                    id="telefono"
                    className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amestoy-blue focus:border-transparent font-montserrat text-sm md:text-base"
                    placeholder="+54 11 1234-5678"
                  />
                </div>
                
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2 font-montserrat">Tipo de consulta</label>
                  <select 
                    id="consulta"
                    className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amestoy-blue focus:border-transparent font-montserrat text-sm md:text-base"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="recupero">Recupero de Inmuebles</option>
                    <option value="sucesiones">Sucesiones</option>
                    <option value="condominio">Divisiones de Condominio</option>
                    <option value="subastas">Subastas Judiciales</option>
                    <option value="penal">Derecho Penal</option>
                    <option value="otro">Otra consulta</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm md:text-base font-semibold text-gray-700 mb-2 font-montserrat">Mensaje (opcional)</label>
                  <textarea 
                    id="mensaje"
                    rows={3}
                    className="w-full px-4 py-3 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amestoy-blue focus:border-transparent font-montserrat text-sm md:text-base resize-none"
                    placeholder="Cuéntanos brevemente tu situación..."
                  ></textarea>
                </div>
                
                <button 
                  type="button"
                  onClick={() => {
                    const nombre = (document.getElementById('nombre') as HTMLInputElement)?.value || '';
                    const telefono = (document.getElementById('telefono') as HTMLInputElement)?.value || '';
                    const consulta = (document.getElementById('consulta') as HTMLSelectElement)?.value || '';
                    const mensaje = (document.getElementById('mensaje') as HTMLTextAreaElement)?.value || '';
                    
                    const tiposConsulta = {
                      'recupero': 'Recupero de Inmuebles',
                      'sucesiones': 'Sucesiones',
                      'condominio': 'Divisiones de Condominio',
                      'subastas': 'Subastas Judiciales',
                      'penal': 'Derecho Penal',
                      'otro': 'Otra consulta'
                    };
                    
                    const tipoSeleccionado = tiposConsulta[consulta as keyof typeof tiposConsulta] || 'Consulta general';
                    
                    const textoWhatsApp = `Hola, me interesa recibir asesoramiento legal.

*Datos de contacto:*
• Nombre: ${nombre || 'No especificado'}
• Teléfono: ${telefono || 'No especificado'}

*Tipo de consulta:* ${tipoSeleccionado}

*Mensaje:* ${mensaje || 'Sin mensaje adicional'}

Gracias por su atención.`;

                    const urlWhatsApp = `https://wa.me/541160111758?text=${encodeURIComponent(textoWhatsApp)}`;
                    window.open(urlWhatsApp, '_blank');
                  }}
                  className="w-full bg-amestoy-blue text-white px-6 py-3 md:py-4 rounded-lg font-montserrat hover:bg-[#0c1833] transition-colors text-sm md:text-base font-semibold"
                >
                  Enviar por WhatsApp
                </button>
              </form>
            </div>
            
            {/* Información de contacto */}
            <div className="bg-white rounded-[2.5rem] p-6 md:p-8 shadow-lg border border-gray-100 animate-fade-in-right delay-200">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 font-playfair">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-base font-montserrat">Dirección</h4>
                    <p className="text-sm text-gray-600 font-montserrat">Avenida Corrientes 1386 Piso 4 Oficina 17, CABA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-base font-montserrat">Teléfono</h4>
                    <p className="text-sm text-gray-600 font-montserrat">+54 11 6011-1758</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-amestoy-blue rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-base font-montserrat">Instagram</h4>
                    <p className="text-sm text-gray-600 font-montserrat">@amestoyestudiojuridico</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 space-y-3">
                <a href="tel:+541160111758" className="block w-full bg-amestoy-blue text-white px-6 py-3 text-center font-montserrat hover:bg-[#0c1833] transition-colors text-sm rounded-lg">
                  Llamar ahora
                </a>
                <a href="https://instagram.com/amestoyestudiojuridico" target="_blank" rel="noopener noreferrer" className="block w-full bg-amestoy-accent text-amestoy-blue px-6 py-3 text-center font-montserrat hover:bg-[#E8A99E] transition-colors text-sm rounded-lg">
                  Seguir en Instagram
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-white">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-4xl mx-auto px-4 md:px-8 lg:px-12">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[2.5rem] p-6 md:p-8 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 font-playfair">Recupera tu patrimonio. Empecemos hoy.</h2>
            <div className="h-0.5 w-14 bg-amestoy-accent mx-auto mb-3"></div>
            <p className="text-base md:text-lg mb-6 text-gray-200 font-montserrat">
              Contáctanos por teléfono al +54 11 6011-1758 o envíanos tu consulta. Más de 30 años de experiencia en litigación respaldan tu caso.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+541160111758" className="bg-white text-gray-800 px-6 py-3 font-montserrat hover:bg-gray-200 transition-colors text-sm md:text-base animate-fade-in-up delay-200">
                Llamar ahora
              </a>
              <a href="#contacto" className="bg-transparent text-white border-2 border-white px-6 py-3 font-montserrat hover:bg-white hover:text-gray-800 transition-colors text-sm md:text-base animate-fade-in-up delay-300">
                Enviar consulta
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="bg-amestoy-blue text-white py-6 md:py-8">
        <AnimatedSection animationClass="opacity-100 translate-y-0" className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Footer en una sola fila */}
          <div className="flex flex-col lg:flex-row items-start justify-start gap-4 md:gap-6 lg:gap-8">
            {/* Información principal */}
            <div className="text-left animate-fade-in-up">
              <h3 className="text-xl font-bold mb-2 font-playfair">Estudio Amestoy & Asociados</h3>
              <p className="text-sm text-gray-300 font-montserrat mb-3">
                Especialistas en Derecho Civil Patrimonial
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+541160111758" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-sm font-montserrat">
                  +54 11 6011-1758
                </a>
                <a href="https://instagram.com/amestoyestudiojuridico" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded text-sm font-montserrat">
                  @amestoyestudiojuridico
                </a>
              </div>
            </div>

            {/* Ubicación */}
            <div className="text-left animate-fade-in-up delay-100">
              <div className="flex items-center mb-2">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h4 className="font-bold text-base font-playfair">Ubicación</h4>
              </div>
              <p className="text-gray-300 text-sm font-montserrat">
                Av. Corrientes 1386, Piso 4<br />
                CABA, Argentina
              </p>
            </div>

            {/* Especialidades */}
            <div className="text-left animate-fade-in-up delay-200">
              <h4 className="font-bold text-base mb-2 font-playfair">Especialidades</h4>
              <div className="text-gray-300 text-sm font-montserrat">
                <p>Recupero • Sucesiones • Civil</p>
              </div>
            </div>

            {/* Horarios */}
            <div className="text-left animate-fade-in-up delay-300">
              <h4 className="font-bold text-base mb-2 font-playfair">Horarios</h4>
              <p className="text-gray-300 text-sm font-montserrat">
                Lun-Vie: 9:00-18:00
              </p>
            </div>

            {/* Cobertura */}
            <div className="text-left animate-fade-in-up delay-400">
              <h4 className="font-bold text-base mb-2 font-playfair">Cobertura</h4>
              <div className="text-gray-300 text-sm font-montserrat">
                <p>CABA • PBA</p>
              </div>
            </div>

            {/* Enlaces */}
            <div className="flex flex-col items-start animate-fade-in-up delay-500">
              <div className="flex space-x-4 mb-2">
                <a href="tel:+541160111758" className="text-white/70 hover:text-white transition-colors text-sm">
                  Llamar
                </a>
                <a href="#contacto" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contacto
                </a>
                <a href="https://instagram.com/amestoyestudiojuridico" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  Instagram
                </a>
              </div>
              <p className="text-gray-400 font-montserrat text-sm">
                © 2024 Estudio Amestoy & Asociados
              </p>
            </div>
          </div>
        </AnimatedSection>
      </footer>

      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/541160111758?text=Hola,%20me%20interesa%20recibir%20asesoramiento%20legal" 
          target="_blank"
          rel="noopener noreferrer"
        className="fixed bottom-16 md:bottom-20 right-4 md:right-6 z-50 bg-amestoy-blue hover:bg-[#0c1833] text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.346 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      </a>
    </div>
  );
}