"use client";

import Image from "next/image";
import { JSX, useState } from "react";
import { FaReact, FaJava, FaPython, FaJsSquare } from "react-icons/fa";
import { SiCplusplus, SiTypescript, SiDart } from "react-icons/si";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  const handleProjectsClick = () => setShowProjects(true);
  const handleInicioClick = () => setShowProjects(false);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 backdrop-blur-lg">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
    
    {/* Linha superior: título à esquerda e botão à direita */}
    <div className="flex w-full items-center justify-between md:w-auto">
      {/* Logo */}
      <a
        href="#"
        className="flex items-center space-x-3 rtl:space-x-reverse transition-transform duration-300 hover:scale-105"
      >
        <span className="self-center text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent whitespace-nowrap">
          NICOLLY MUNHOZ
        </span>
      </a>

      {/* Botão mobile à direita */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center rounded-lg p-2 text-gray-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-300 md:hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-yellow-300/20"
        aria-controls="navbar-default"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Abrir menu</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>

    {/* Menu */}
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } w-full md:block md:w-auto mt-2 md:mt-0`}
      id="navbar-default"
    >
      <ul className="flex flex-col gap-4 rounded-lg backdrop-blur-md p-4 font-medium md:flex-row md:space-x-8 md:p-0 md:mt-0">
        <li>
          <a
            href="#"
            onClick={handleInicioClick}
            className="block rounded py-2 px-3 text-white transition-all duration-300 hover:bg-yellow-300/10 hover:text-yellow-300 hover:scale-105"
          >
            INÍCIO
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={handleProjectsClick}
            className="block rounded py-2 px-3 text-white transition-all duration-300 hover:bg-yellow-300/10 hover:text-yellow-300 hover:scale-105"
          >
            PROJETOS
          </a>
        </li>
        <li>
          <a
            href="https://github.com/NicollyEising"
            target="_blank"
            className="block rounded py-2 px-3 text-white transition-all duration-300 hover:bg-yellow-300/10 hover:text-yellow-300 hover:scale-105"
          >
            GITHUB
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>



      {/* Hero (visível se showProjects = false) */}
      {!showProjects && (
        <section className="bg-gray-900 relative flex h-screen items-center justify-center overflow-hidden lg:mt-[-20vh] lg:mb-[-30vh] transition-all duration-700">
          <div className="absolute inset-0 bg-[radial-gradient(#444769_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

          <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center gap-8 px-4 py-12 sm:px-6 lg:px-8 xl:flex-row xl:gap-16 animate-fade-in-down">
            <div className="flex flex-col items-center justify-center text-center xl:items-start xl:text-left">
              <h1 className="text-5xl font-extrabold text-white leading-tight tracking-tighter bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                FRONTEND & BACKEND
              </h1>
              <h1 className="text-7xl font-bold bg-gradient-to-r from-yellow-300 to-orange-500 bg-clip-text text-transparent leading-tight tracking-tighter animation-delay-200">
                DEVELOPER
              </h1>
            </div>

            <div className="flex items-center justify-center rounded-full bg-gray-700/50 p-2 shadow-2xl animate-scale-in border border-gray-600/50">
              <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] transition-transform duration-300 hover:scale-105">
                <Image
                  src="/images/foto.jpeg"
                  alt="Foto de Nicolly Munhoz"
                  className="rounded-full border-4 border-yellow-300 shadow-lg"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {!showProjects && (
        <section className="bg-gray-900 py-8 transition-all duration-700">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 text-white text-5xl perspective-1000">
              <Tecnologia
                icon={<FaReact />}
                nome="React"
                cor="text-blue-400"
                hover="hover:bg-blue-400 hover:text-gray-900"
              />
              <Tecnologia
                icon={<FaJava />}
                nome="Java"
                cor="text-orange-500"
                hover="hover:bg-orange-500 hover:text-gray-900"
              />
              <Tecnologia
                icon={<SiCplusplus />}
                nome="C++"
                cor="text-blue-700"
                hover="hover:bg-blue-700 hover:text-white"
              />
              <Tecnologia
                icon={<FaPython />}
                nome="Python"
                cor="text-yellow-400"
                hover="hover:bg-yellow-400 hover:text-gray-900"
              />
              <Tecnologia
                icon={<SiTypescript />}
                nome="TypeScript"
                cor="text-blue-500"
                hover="hover:bg-blue-600 hover:text-white"
              />
              <Tecnologia
                icon={<FaJsSquare />}
                nome="JavaScript"
                cor="text-yellow-500"
                hover="hover:bg-yellow-500 hover:text-gray-900"
              />
              <Tecnologia
                icon={<SiDart />}
                nome="Dart"
                cor="text-cyan-400"
                hover="hover:bg-cyan-400 hover:text-gray-900"
              />
            </div>
          </div>
        </section>
      )}

      {/* Projetos (visível se showProjects = true) */}
      {showProjects && (
        <section className="bg-gray-900 py-16 transition-all duration-700 animate-fade-in-up lg:mb-15">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ProjetoCard
                title="Conversor de Números Cistercienses"
                desc="Sistema de conversão bidirecional entre números arábicos (1 a 9999) e números cistercienses, com suporte a entrada via imagem e geração gráfica"
                link="https://github.com/NicollyEising/NumerosCistercienses"
              />
              <ProjetoCard
                title="Teclado Virtual"
                desc="Sistema de autenticação seguro baseado em um teclado virtual."
                link="https://github.com/NicollyEising/tecladoVirtual"

              />
              <ProjetoCard
                title="Gerenciador de Salas"
                desc="Plataforma para controle de ocupação de salas em universidades, com dashboards dinâmicos."
                link="https://github.com/NicollyEising/Lab-Manager"
              />
              <ProjetoCard
                title="Calculadora de Rotas com Algoritmo Guloso"
                desc="Aplicação que otimiza rotas de entrega utilizando algoritmo guloso."
                link="https://github.com/NicollyEising/AlgoritmoGulosoRota"
              />
              <ProjetoCard
                title="E-commerce de Cadeiras - 2023"
                desc="Loja virtual de sapatos, layout moderno e responsivo."
                link="https://github.com/NicollyEising/WebsiteMoveisCRUD"

              />
              <ProjetoCard
                title="Previsão de Valores com Machine Learning"
                desc="Modelo preditivo que utiliza LTSM, XGBoost e Ensemble como abordagens de Machine Learning."
                link="https://github.com/NicollyEising/Machine-LearningPredictionValues"

              />
              <ProjetoCard
                title="Previsão do Tempo"
                desc="App que fornece previsões meteorológicas."
                link="https://github.com/NicollyEising/Weather"

              />
              <ProjetoCard
                title="E-commerce de Sapatos - 2023"
                desc="Loja virtual completa com carrinho de compras e pagamentos."
                link="https://github.com/NicollyEising/Projeto-E-commerce-V1"

              />
              <ProjetoCard
                title="App de Comidas - 2023"
                desc="Aplicativo mobile para delivery de comida."
                link="https://github.com/NicollyEising/FlutterApp2023"
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
}

type TecnologiaProps = {
  icon: JSX.Element;
  nome: string;
  cor: string;
  hover: string;
};

function Tecnologia({ icon, nome, cor, hover }: TecnologiaProps) {
  return (
    <div className="bg-gray-900 group relative flex flex-col items-center preserve-3d hover:rotate-y-10 transition-transform duration-500">
      <div
        className={`bg-gray-800 rounded-full p-4 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl ${cor} ${hover} transform-gpu`}
      >
        {icon}
      </div>
      <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition">
        {nome}
      </span>
    </div>
  );
}

type ProjetoCardProps = {
  title: string;
  desc: string;
  link: string;
};

function ProjetoCard({ title, desc, link }: ProjetoCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-2xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-yellow-300/20 border border-gray-700">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{desc}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-yellow-400 hover:text-yellow-300 transition-all duration-300 text-sm font-medium"
      >
        VER PROJETO →
      </a>
    </div>
  );
}
