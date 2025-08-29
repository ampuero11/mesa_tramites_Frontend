import { Link } from "react-scroll";
import Logo from "../assets/icon/logo.png";
import { useNavigate } from "react-router-dom";

const LandingHeader: React.FC = () => {
  const navigate = useNavigate();

  const handleTramite = () => {
    navigate("/tramite");
  };

  return (
    <header className="bg-[#022534] sticky top-0 z-50 shadow-md">
      <nav className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-4 lg:px-6 py-3">
        <a href="/" className="flex items-center">
          <img src={Logo} className="h-10 mr-3" alt="Logo Municipal" />
          <span className="self-center text-xl font-semibold text-white whitespace-nowrap">
            Municipalidad Distrital de Sabaino
          </span>
        </a>
        <div className="lg:hidden">
          <button
            type="button"
            className="text-white hover:bg-sky-800 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-700"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Abrir menú</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5h14M3 10h14M3 15h14"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className="hidden w-full lg:flex lg:items-center lg:w-auto justify-between"
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 font-medium">
            <li>
              <Link
                to="inicio"
                smooth={true}
                duration={600}
                className="cursor-pointer block py-2 px-3 text-white hover:text-sky-300"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="actualidad"
                smooth={true}
                duration={600}
                className="cursor-pointer block py-2 px-3 text-white hover:text-sky-300"
              >
                Actualidad
              </Link>
            </li>
            <li>
              <Link
                to="informacion"
                smooth={true}
                duration={600}
                className="cursor-pointer block py-2 px-3 text-white hover:text-sky-300"
              >
                Información
              </Link>
            </li>
            <li>
              <Link
                to="participacion"
                smooth={true}
                duration={600}
                className="cursor-pointer block py-2 px-3 text-white hover:text-sky-300"
              >
                Participación
              </Link>
            </li>
            <li>
              <Link
                to="proyectos"
                smooth={true}
                duration={600}
                className="cursor-pointer block py-2 px-3 text-white hover:text-sky-300"
              >
                Proyectos
              </Link>
            </li>
          </ul>
          <div className="ml-4">
            <button
              onClick={handleTramite}
              className="px-4 py-2 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition ml-96"
            >
              Iniciar Trámite
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default LandingHeader;
