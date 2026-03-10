import apiClient from "../../services/apiClient";

export const loginUser = async (email, password) => {

  try {

    const response = await apiClient.post("/login", {
      email,
      password
    });

    return response.data;

  } catch (error) {

    console.log("Login error:", error);
    return null;

  }

};