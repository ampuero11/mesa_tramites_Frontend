import { useParams } from "react-router-dom";
import { FileText, Info, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { useAdminTramites } from "../../hooks/useAdminTramites";
import { Document, Page } from "react-pdf";
import { STATUS_LABELS } from "../../constants/states";

function TramiteDetail() {
  const { id } = useParams<{ id: string }>();
  const { tramiteDetail, sendTramiteResponse, changeTramiteStatus } =
    useAdminTramites();

  const [status, setStatus] = useState("in_process");
  const [comment, setComment] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    tramiteDetail.fetchData(id || "");
  }, [id]);

  useEffect(() => {
    if (tramiteDetail.data?.files?.length) {
      setFileUrl(`${tramiteDetail.data.files[0].file.file_path}`);
      setStatus(tramiteDetail.data.status);
    }
  }, [tramiteDetail.data]);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as keyof typeof STATUS_LABELS;
    setStatus(newStatus);

    if (!id) return;
    changeTramiteStatus(id, newStatus);
  };

  const handleSendComment = () => {
    if (!comment.trim()) return;
    if (!id) return;
    sendTramiteResponse(id, comment);
    setComment("");
  };

  const handleDownload = () => {
    if (fileUrl) {
      const fullUrl = `${fileUrl}`;
      window.open(fullUrl, "_blank");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      <div className="flex-1 border border-gray-200 rounded-2xl p-4 bg-white">
        <h2 className="flex items-center gap-2 text-xl font-semibold mb-3 text-gray-700">
          <FileText className="w-5 h-5 text-gray-500" />
          Documento principal
        </h2>
        <div className="flex justify-center overflow-hidden rounded-lg border max-h-[680px] overflow-y-auto border-gray-200">
          {fileUrl && fileUrl.endsWith(".pdf") && (
            <Document file={fileUrl}>
              <Page pageNumber={1} />
            </Document>
          )}
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
              {Object.entries(STATUS_LABELS).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>
              <span className="font-medium">Código:</span>{" "}
              {tramiteDetail.data?.code}
            </p>
            <p>
              <span className="font-medium">Nombre:</span>{" "}
              {tramiteDetail.data?.full_name}
            </p>
            <p>
              <span className="font-medium">Documento:</span>{" "}
              {tramiteDetail.data?.document}
            </p>
            <p>
              <span className="font-medium">Correo:</span>{" "}
              {tramiteDetail.data?.email}
            </p>
            <p>
              <span className="font-medium">Teléfono:</span>{" "}
              {tramiteDetail.data?.phone}
            </p>
            <p>
              <span className="font-medium">Concepto:</span>{" "}
              {tramiteDetail.data?.concept}
            </p>
            <p>
              <span className="font-medium">Fecha:</span>{" "}
              {tramiteDetail.data?.created_at}
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

          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-sky-600 text-white text-sm rounded-lg hover:bg-sky-700 transition"
          >
            Ver completo
          </button>
        </div>
      </div>
    </div>
  );
}

export default TramiteDetail;
