import axiosInstance from "..";
 
export const loginApi = (request) => {
    axiosInstance.post("/api/login", {request})
}

