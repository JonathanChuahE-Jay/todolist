import axiosInstance from "../src/axios/AxiosInstance";
import type { AxiosError } from "axios";
import type { LoginUserType } from "../types/User";

export const login = async ({ email, password }: LoginUserType) => {
    try {
        const response = await axiosInstance.post("api/login/", { email, password });
        return response.data;
    } catch (error) {
        const axiosError = error as AxiosError;

        const errorMessage =
            axiosError.response?.data &&
                typeof axiosError.response.data === "object" &&
                "message" in axiosError.response.data
                ? (axiosError.response.data as { message: string }).message
                : "Login failed.";

        throw new Error(errorMessage);
    }
};
