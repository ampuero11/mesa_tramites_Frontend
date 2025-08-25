import { useParams } from "react-router-dom";
import { FileText, Info, MessageSquare } from "lucide-react";
import { useState } from "react";

function TramiteDetail() {
  const { id } = useParams<{ id: string }>();
  const pdfUrl = "https://www.ugr.es/~fmartin/dvi/derivadas.pdf";

  const [status, setStatus] = useState("in_process");
  const [comment, setComment] = useState("");

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSendComment = () => {
    if (!comment.trim()) return;
    console.log("Comentario enviado:", comment);
    setComment("");
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <div className="flex-1 border border-gray-200 rounded-2xl p-4 bg-white">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-3 text-gray-700">
          <FileText className="w-5 h-5 text-gray-500" />
          Documento principal
        </h2>
        <div className="flex justify-center overflow-hidden rounded-lg border border-gray-200">
          <iframe
            src={pdfUrl}
            title="Documento PDF"
            width="100%"
            height="680px"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
      <div className="w-full lg:w-1/3 border border-gray-200 rounded-2xl p-4 bg-white flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700">
              <Info className="w-5 h-5 text-gray-500" />
              Detalles del trámite
            </h2>
            <select
              value={status}
              onChange={handleStatusChange}
              className="text-sm border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="received">Recibido</option>
              <option value="in_process">En Proceso</option>
              <option value="attended">Atendido</option>
              <option value="rejected">Rechazado</option>
            </select>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-medium">ID:</span> {id}
            </p>
            <p>
              <span className="font-medium">Código:</span> TRM-2025-0001
            </p>
            <p>
              <span className="font-medium">Nombre:</span> Luis Fernando
            </p>
            <p>
              <span className="font-medium">Documento:</span> 12345678
            </p>
            <p>
              <span className="font-medium">Correo:</span>{" "}
              luisfernando3chr@gmail.com
            </p>
            <p>
              <span className="font-medium">Teléfono:</span> 904479320
            </p>
            <p>
              <span className="font-medium">Concepto:</span> Solicitud de prueba
            </p>
            <p>
              <span className="font-medium">Fecha:</span> 24/08/2025
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <MessageSquare className="w-4 h-4 text-gray-500" />
            Responder al trámite
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={6} // más líneas por defecto
            placeholder="Escribe un comentario o respuesta..."
            className="flex-1 h-80 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
          />
          <button
            onClick={handleSendComment}
            className="px-4 py-2 bg-sky-600 text-white text-sm rounded-lg hover:bg-sky-700 transition"
          >
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TramiteDetail;
