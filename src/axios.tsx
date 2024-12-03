import axios from "axios";

const getAuthToken = () => localStorage.getItem("auth-token");

export const setAuthToken = (token: string) => {
  localStorage.setItem("auth-token", token);
};

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000, // 10 seconds timeout
});

instance.interceptors.request.use((config) => {
  if (!config.headers.Authorization) {
    const token = getAuthToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers["X-Brand"] = "DD"; // Custom header for branding
  return config;
});

instance.interceptors.response.use(
  async (response) => {
    if (response.data?.token) {
      setAuthToken(response.data.token);
    }
    return response;
  },
  (error) => {
    if (!error.response) {
      return Promise.reject(
        new Error(
          "We are facing some technical difficulty, please try after some time."
        )
      );
    }
    const { status, data } = error.response;

    if (status === 401 || status === 403) {
      setAuthToken(""); // Clear token for unauthorized access
    }
    if (status === 400 && !data.error) return Promise.reject(data);
    if ([422, 404].includes(status)) return Promise.reject(data);

    return Promise.reject(data?.error || new Error("Unknown error occurred"));
  }
);

export default instance;
export { getAuthToken };
