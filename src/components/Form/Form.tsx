import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Form.module.css";
import { User, FormProps, FormData } from "../../types";
import { addUser, editUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";

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

const Form = ({ editingUser }: FormProps) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    reset(editingUser || { name: "", email: "" });
  }, [editingUser, reset]);
  
  

  const onSubmit = (data: FormData) => {
    if (editingUser) {
      dispatch(editUser({ ...editingUser, ...data }));
    } else {
      const newUser: User = { ...data, id: Date.now() }; 
      dispatch(addUser(newUser));
      reset({ name: "", email: "" });
    }
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form__body}>
        <div className={styles.form__group}>
          <label htmlFor="name" className={styles.form__label}>
            Nombre:
          </label>
          <input
            type="text"
            id="name"
            {...register("name")}
            className={`${styles.form__input} ${errors.name ? styles["form__input--error"] : ""}`}
          />
          {errors.name && <span className={styles.form__error}>{errors.name.message}</span>}
        </div>

        <div className={styles.form__group}>
          <label htmlFor="email" className={styles.form__label}>
            Email:
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className={`${styles.form__input} ${errors.email ? styles["form__input--error"] : ""}`}
          />
          {errors.email && <span className={styles.form__error}>{errors.email.message}</span>}
        </div>

        <button type="submit" className={styles.form__button}>
          {editingUser ? "Actualizar" : "Guardar"}
        </button>
      </form>
    </div>
  );
};

export default Form;
