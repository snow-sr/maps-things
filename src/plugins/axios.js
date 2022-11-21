import axios from "axios";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/stores/auth";

axios.interceptors.request.use(
  (config) => {
    const store = useAuthStore();
    const { access } = storeToRefs(store);
    if (access.value !== "")
      config.headers.Authorization = `Bearer ${access.value}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// export default api;
