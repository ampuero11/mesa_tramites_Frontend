import Logo from "../assets/icon/logo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-[#022534] text-white">
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3">
            <img src={Logo} className="h-10" alt="Logo Municipalidad" />
            <span className="text-2xl font-semibold">
              Municipalidad de Sabaino
            </span>
          </a>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/municipalidaddistritaldesabaino?rdid=oiLDjOIxN12U9CpQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1CN47VjdvL%2F"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <hr className="my-6 border-sky-700" />

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Ubicación</h3>
            <p className="flex items-center gap-2 text-sm text-gray-200">
              <MapPin className="w-4 h-4" /> Plaza de Armas, Sabaino - Antabamba
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Contacto</h3>
            <p className="flex items-center gap-2 text-sm text-gray-200">
              <Phone className="w-4 h-4" /> (+51) 987 555 1212
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-200">
              <Phone className="w-4 h-4" /> (+51) 987 555 0100
            </p>
            <p className="flex items-center gap-2 text-sm text-gray-200">
              <Mail className="w-4 h-4" /> municipalidadsabaino@gmail.com
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Gestión</h3>
            <p className="text-sm text-gray-200">2023 - 2026</p>
            <p className="text-sm text-gray-200">Municipalidad de Sabaino</p>
          </div>
        </div>

        <hr className="my-6 border-sky-700" />

        <p className="text-center text-sm text-gray-300">
          © 2025 Municipalidad de Sabaino. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;
