import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.log("API Error:", error);
    return Promise.reject(error);
  }
);

export default apiClient;