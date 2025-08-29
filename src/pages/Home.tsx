import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
import bannerImg from "../assets/img/1.jpeg";
import fondoImg from "../assets/img/2.jpeg";
import alcalde from "../assets/img/alcalde.jpeg";
import toro from "../assets/img/toro.jpeg";
import banner1 from "../assets/img/banner1.jpg";
import banner3 from "../assets/img/banner3.png";
import banner4 from "../assets/img/banner4.jpg";
import {
  CheckCircle,
  Clipboard,
  Users,
  Briefcase,
  Globe,
  Activity,
} from "lucide-react";
import proyectoImg from "../assets/img/3.jpeg";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-white" />,
      value: "1,234",
      label: "Ciudadanos",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      value: "56",
      label: "Proyectos",
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      value: "89%",
      label: "Impacto",
    },
    {
      icon: <Activity className="w-8 h-8 text-white" />,
      value: "100%",
      label: "Trabajo",
    },
  ];

  const noticias = [
    {
      imagen: banner1,
      titulo: "Misión",
      subtitulo: "",
      descripcion:
        "Sabaino es un distrito agroecológico y minero con paz social y producción diversificada , ambientalmente sostenible , que esta mejorando la calidad de vida de sus habitantes.",
    },
    {
      imagen: banner3,
      titulo: "Visión",
      subtitulo: "",
      descripcion:
        "Promover el desarrollo integral y sostenible del distrito de sabaino, brindando servicios de calidad a través de una gestión moderna, transparente, eficiente, inclusiva y participativa, orientada a resultados.",
    },
    {
      imagen: banner4,
      titulo: "Nuestra historia",
      subtitulo: "",
      descripcion:
        "El distrito de Sabaino fue creado mediante la Ley N° 9357 del 20 de febrero de 1941, durante el primer gobierno de Manuel Prado Ugarteche. Antes de esta fecha, Sabaino era probablemente un anexo o parte de otro distrito más grande dentro de la provincia de Antabamba.",
    },
  ];

  return (
    <div>
      <Element
        name="inicio"
        className="relative h-screen w-full flex items-center justify-items-start overflow-hidden"
      >
        <img
          src={bannerImg}
          alt="Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#022534] via-[#10384969] to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#022534] via-transparent to-transparent"></div>
        <div className="relative z-10 text-left max-w-3xl px-6 pl-50">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg -mt-50">
            MUNICIPALIDAD DISTRITAL DE SABAINO
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-6 drop-shadow">
            Bienvenido a nuestro sistema de mesa de partes, gestiona tus
            trámites de forma rápida y segura.
          </p>
          <button
            onClick={() => navigate("/search")}
            className="bg-sky-600 hover:bg-sky-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            Buscar trámite
            <span className="absolute inset-0 w-full h-full bg-white/20 rounded-lg -translate-y-full animate-translateY"></span>
          </button>
        </div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#0985b988] rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute top-10 -right-16 w-48 h-48 bg-[#0225343f] rounded-full opacity-20 animate-pulse"></div>
      </Element>
      <Element
        name="actualidad"
        className="h-full w-full pt-40 bg-gray-50 flex flex-col items-center py-20 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-gray-800 text-center">
          Actualidad
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full max-w-6xl mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="bg-sky-600 w-20 h-20 rounded-full flex items-center justify-center shadow-lg mb-4">
                {stat.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-bold text-gray-800 mb-1">
                {stat.value}
              </span>
              <span className="text-gray-600 text-sm sm:text-base">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="font-light text-gray-600 sm:text-lg">
            <h3 className="mb-4 text-3xl sm:text-4xl font-extrabold text-gray-900">
              Innovando en la <br /> gestión municipal
            </h3>
            <p className="mb-4">
              Nuestro sistema de mesa de partes permite a los ciudadanos
              gestionar sus trámites de manera rápida, transparente y segura.
              Facilitamos la comunicación entre la municipalidad y la comunidad
              para mejorar la eficiencia en cada proceso.
            </p>
            <p>
              Estamos comprometidos con la mejora continua, optimizando
              proyectos y servicios para brindar un impacto positivo en la vida
              de nuestros ciudadanos.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
            <img
              className="w-full h-96 object-cover rounded-lg"
              src={alcalde}
              alt="Office content 1"
            />
            <img
              className="w-full rounded-lg h-96 object-cover "
              src={fondoImg}
              alt="Office content 2"
            />
          </div>
        </div>
      </Element>
      <Element
        name="informacion"
        className="min-h-screen w-full pt-40 bg-gray-800 flex flex-col items-center py-20 px-4"
      >
        <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-12 text-center">
          Información
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {noticias.map((noticia, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {noticia.subtitulo}
                </p>
                <p className="text-gray-700 text-base line-clamp-10">
                  {noticia.descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Element>
      <Element
        name="participacion"
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${toro})`,
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <div className="bg-white/10 rounded-full p-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              Participación Ciudadana
            </h2>
            <p className="text-lg sm:text-xl text-white/90">
              Promovemos la colaboración activa de nuestros ciudadanos en la
              toma de decisiones, fomentando la transparencia y el trabajo
              conjunto en proyectos que beneficien a toda la comunidad.
            </p>
          </div>
        </div>
      </Element>
      <Element
        name="proyectos"
        className="w-full bg-white py-48 px-4 flex items-center justify-center"
      >
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <span className="text-sky-600 font-semibold uppercase text-sm tracking-wide">
              Proyectos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Sistema de Mesa de Partes
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Nuestro sistema de mesa de partes permite a los ciudadanos
              realizar sus trámites de manera ágil, transparente y segura.
              Centraliza la gestión de solicitudes y garantiza un seguimiento
              efectivo de cada trámite.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-6 h-6 text-sky-600" />
                <span className="text-gray-700 text-sm">Gestión rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clipboard className="w-6 h-6 text-sky-600" />
                <span className="text-gray-700 text-sm">Transparencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-sky-600" />
                <span className="text-gray-700 text-sm">Acceso ciudadano</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={proyectoImg}
              alt="Sistema de Mesa de Partes"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Home;
