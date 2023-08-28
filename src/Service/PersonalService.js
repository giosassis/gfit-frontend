import axios from "axios";

const API_URL = "https://localhost:7187/api";

export const registerPersonal = async (personalData) => {
  try {
    const response = await axios.post(`${API_URL}/Personal`, personalData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 201) {
      return true;
    } else {
      console.error("Erro no cadastro");
      return false;
    }
  } catch (error) {
    console.error("Erro na requisição:", error.response.data);
    return false;
  }
};
