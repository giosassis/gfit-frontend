import React from "react";
import axios from "axios";
import * as yup from "yup"; // Importe o yup
import { useFormik } from "formik"; // Importe o useFormik para gerenciar o formulário
import './style.css';

function PersonalRegistrationForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cref: "",
      description: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Nome é obrigatório"),
      email: yup.string().email("Email inválido").required("Email é obrigatório"),
      password: yup
        .string()
        .required("Senha é obrigatória")
        .min(8, "Senha deve conter pelo menos 8 caracteres, letras, números e caracteres especiais.")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]+$/,
          "Senha deve conter pelo menos 8 caracteres, letras, números e caracteres especiais."
        ),
      cref: yup.string().required("CREF é obrigatório"),
      description: yup.string().required("Descrição é obrigatória"),
    }),
    
    onSubmit: async (values) => {
      try {
        const response = await axios.post(
          "https://localhost:7187/api/Personal",
          values,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.status === 201) {
          alert("Cadastro realizado com sucesso");
        } else {
          console.error("Erro no cadastro");
        }
      } catch (error) {
        console.error("Erro na requisição:", error.response.data);
      }
    },
  });

  return (
    <div className="registration-form">
      <img className="picture-container" src={require("./Assets/Personal/personal-01.jpeg")} alt=""/>  
      <form onSubmit={formik.handleSubmit} className="form-container">
      <h2 className="main-title">Cadastro de Personal</h2>
        <div className="form-group">
          <input
            type="text"
            id="name"
            placeholder="Nome"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            placeholder="Senha"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
        </div>
        <div className="form-group">
          <input
            type="cref"
            id="cref"
            placeholder="CREF"
            {...formik.getFieldProps("cref")}
          />
          {formik.touched.cref && formik.errors.cref ? (
            <div className="error">{formik.errors.cref}</div>
          ) : null}
        </div>
        <div className="form-group">
          <textarea
            id="description"
            placeholder="Sobre você"
            {...formik.getFieldProps("description")}
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="error">{formik.errors.description}</div>
          ) : null}
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default PersonalRegistrationForm;
