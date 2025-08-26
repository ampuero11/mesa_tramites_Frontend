import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useTramite } from "../hooks/useTramite";
import type { TramitePayload } from "../types/tramite";
import LoadingButton from "../components/LoadingButton";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  full_name: yup.string().required("El nombre completo es obligatorio"),
  document: yup.string().required("El documento es obligatorio"),
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
  phone: yup
    .string()
    .matches(/^\+?\d{7,15}$/, "Teléfono inválido")
    .required("El teléfono es obligatorio"),
  concept: yup.string().required("El concepto es obligatorio"),
});

function FormularioTramite() {
  const { crearTramite, loading, error, success } = useTramite();
  const [files, setFiles] = useState<File[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (error) toast.error(error);
    if (success) {
      toast.success("Se envió su trámite...");
      reset();
      setFiles([]);
    }
  }, [error, success, reset]);

  const onSubmit = async (
    data: Pick<
      TramitePayload,
      "full_name" | "document" | "email" | "phone" | "concept"
    >
  ) => {
    const tramitePayload: TramitePayload = {
      ...data,
      uploaded_files: files,
    };
    await crearTramite(tramitePayload);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files);
      setFiles((prev) => [...prev, ...selectedFiles]);
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
    bg-gradient-to-br from-[#022534] to-[#094f6e]
    p-6"
    >
      <div className="max-w-7xl w-full bg-white bg-opacity-90 shadow-xl rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Formulario de Trámite
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block font-medium">Nombre completo</label>
                <input
                  {...register("full_name")}
                  placeholder="Ingrese su nombre completo"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
                {errors.full_name && (
                  <p className="text-red-500 text-sm">
                    {errors.full_name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-medium">Documento</label>
                <input
                  {...register("document")}
                  placeholder="Ingrese su número de documento"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
                {errors.document && (
                  <p className="text-red-500 text-sm">
                    {errors.document.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-medium">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block font-medium">Teléfono</label>
                <input
                  {...register("phone")}
                  placeholder="Ingrese su número de teléfono"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label className="block font-medium">Concepto</label>
                <textarea
                  {...register("concept")}
                  rows={4}
                  placeholder="Describa el concepto aquí"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-700"
                />
                {errors.concept && (
                  <p className="text-red-500 text-sm">
                    {errors.concept.message}
                  </p>
                )}
              </div>
              <LoadingButton loading={loading} text="Enviar" type="submit" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-sky-900 mb-6">
                Subir Archivos del Trámite
              </h2>
              <div className="flex items-center justify-center w-full">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-sky-300 border-dashed rounded-xl cursor-pointer bg-sky-50 hover:bg-sky-100 transition"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-10 h-10 mb-4 text-sky-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 
                   5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 
                   5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 
                   15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-600">
                      <span className="font-semibold">
                        Haz click para subir
                      </span>{" "}
                      o arrastra aquí
                    </p>
                    <p className="text-xs text-gray-500">
                      PDF, DOCX, XLSX (máx. 5MB)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx"
                    multiple
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {files.length > 0 && (
                <div className="mt-4 bg-sky-50 rounded-lg p-4 shadow-inner">
                  <h3 className="text-lg font-semibold text-sky-800 mb-2">
                    Archivos cargados:
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {files.map((file, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-between p-2 bg-sky-100 rounded-lg text-sm text-sky-900"
                      >
                        <span>{file.name}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setFiles((prev) =>
                              prev.filter((_, i) => i !== index)
                            )
                          }
                          className="ml-3 text-red-600 hover:text-red-800 font-medium"
                        >
                          Quitar
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormularioTramite;
