import axiosInstance from "../src/axios/AxiosInstance";
import type { LoginUserType } from "../types/User";

export const login = async ({ email, password }: LoginUserType) => {
    try {
        const response = await axiosInstance.post("api/login/", { email, password });
        return response.data;
    } catch (error) {
        throw error;
    }
};
