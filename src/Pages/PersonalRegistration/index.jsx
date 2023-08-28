import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import { personalValidationSchema } from "../../Validator/validationSchemas";
import { registerPersonal } from "../../Service/PersonalService";
import ModalConfirmationComponent from "../../Components/Modal/ModalConfirmationComponent.jsx";

function PersonalRegistrationForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      cref: "",
      description: "",
    },
    validationSchema: personalValidationSchema,

    onSubmit: async (values) => {
      const isSuccess = await registerPersonal(values);
      if (isSuccess) {
        setIsModalOpen(true);
      }
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <ModalConfirmationComponent
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      <div className="bg-white w-screen sm:w-1/2 rounded-lg shadow-lg p-8 flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 sm:pr-4 mb-4 sm:mb-0">
          <img
            className="h-auto w-full object-contain"
            src={require("./Assets/Personal/personal-01.png")}
            alt=""
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            {" "}
            venha fazer parte do nosso time{" "}
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div className="form-group">
              <input
                className="w-full px-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
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
                className="w-full px-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
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
                className="w-full px-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
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
                className="w-full px-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
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
                className="w-full px-4 py-2 border border-gray-800 rounded focus:outline-none focus:ring focus:border-blue-300 text-gray-800"
                id="description"
                placeholder="Sobre você"
                {...formik.getFieldProps("description")}
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="error">{formik.errors.description}</div>
              ) : null}
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-100 ease-in-out w-80 h-500 items-center"
                style={{ backgroundColor: "#9ACD32" }}
                type="submit"
              >
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonalRegistrationForm;
