import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import LoadingButton from "../../components/LoadingButton";
import { UserCircle2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Correo inválido")
    .required("El correo es obligatorio"),
  password: yup.string().required("La contraseña es obligatoria"),
});

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { login, loading, error } = useAuth();

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const onSubmit = async (data: { email: string; password: string }) => {
    try {
      await login(data);
      toast.success("Inicio de sesión exitoso");
      navigate("/admin/dashboard");
    } catch {
      // el hook ya maneja el error y dispara toast.error
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center
        bg-gradient-to-br from-[#022534] to-[#094f6e] p-6"
    >
      <div className="max-w-md w-full bg-white bg-opacity-90 shadow-xl rounded-xl p-8">
        <div className="flex justify-center mb-4">
          <UserCircle2 className="w-16 h-16 text-sky-700" />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Iniciar Sesión
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block font-medium text-gray-700">Correo</label>
            <input
              type="email"
              {...register("email")}
              placeholder="Ingrese su correo"
              className="w-full border border-gray-300 rounded px-3 py-2
                focus:outline-none focus:ring-2 focus:ring-sky-700"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>
          <div>
            <label className="block font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              {...register("password")}
              placeholder="Ingrese su contraseña"
              className="w-full border border-gray-300 rounded px-3 py-2
                focus:outline-none focus:ring-2 focus:ring-sky-700"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>
          <LoadingButton loading={loading} text="Ingresar" type="submit" />
        </form>
      </div>
    </div>
  );
}

export default Login;
