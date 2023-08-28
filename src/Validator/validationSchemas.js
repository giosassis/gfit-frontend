import * as yup from "yup";

export const personalValidationSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().email("Email inválido").required("Email é obrigatório"),
  password: yup
    .string()
    .required("Senha é obrigatória")
    .min(
      8,
      "Senha deve conter pelo menos 8 caracteres, letras, números e caracteres especiais."
    )
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&^_-]+$/,
      "Senha deve conter pelo menos 8 caracteres, letras, números e caracteres especiais."
    ),
  cref: yup.string().required("CREF é obrigatório"),
  description: yup.string().required("Descrição é obrigatória"),
});
