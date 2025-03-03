import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./Form.css";

interface FormData {
  name: string;
  email: string;
}

const schema = yup.object({
  name: yup
    .string()
    .required("El nombre es obligatorio")
    .min(3, "Mínimo 3 caracteres")
    .matches(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/, "Solo se permiten letras y espacios"),
  email: yup
    .string()
    .email("Email inválido")
    .required("El email es obligatorio"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const onSubmit = (data: FormData) => {
    console.log(data, "info a enviar");
    reset();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)} className="form__body">
        <div className="form__group">
          <label htmlFor="name" className="form__label">
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`form__input ${errors.name ? "form__input--error" : ""}`}
          />
          {errors.name && (
            <span className="form__error">{errors.name.message}</span>
          )}
        </div>
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email:
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className={`form__input ${errors.name ? "form__input--error" : ""}`}
          />
          {errors.email && (
            <span className="form__error">{errors.email.message}</span>
          )}
        </div>
        <button type="submit" className="form__button">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Form;
