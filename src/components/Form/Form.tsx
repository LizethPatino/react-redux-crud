import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Form.module.css";
import { User, FormProps, FormData } from "../../types"
import { addUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";


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

const Form = ({editingUser}: FormProps) => {

  const dispatch = useDispatch<AppDispatch>();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  useEffect(()=>{
    if (editingUser){
      reset(editingUser);
    }
  }, [editingUser, reset])

  const onSubmit = (data: FormData) => {
    const newUser: User = { id: editingUser? editingUser.id : Date.now(), ...data };
    dispatch(addUser(newUser));
    reset();
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
          {errors.name && (
            <span className={styles.form__error}>{errors.name.message}</span>
          )}
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
          {errors.email && (
            <span className={styles.form__error}>{errors.email.message}</span>
          )}
        </div>

        <button type="submit" className={styles.form__button}>
         { editingUser ?  'Actualizar' : 'Guardar' }
        </button>
      </form>
    </div>
  );
};

export default Form;