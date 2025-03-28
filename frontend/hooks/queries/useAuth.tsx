import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/authServices";
import authStore from "../../src/store/store";

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            console.log("Login successful!", data);
            authStore.setState((state) => ({
                ...state,
                isAuthenticated: true,
                username: data.username,
                email: data.email,
              }));
        },
        onError: (error) => {
            console.error("Login failed:", error.message);
        },
    });
};
