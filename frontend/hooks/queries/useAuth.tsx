import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/authServices";
import authStore from "../../src/store/store";

export const useLogin = () => {
    return useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            authStore.setState((state) => ({
                ...state,
                isAuthenticated: true,
                username: data.username,
                email: data.email,
            }));
            localStorage.setItem("access_token", data.tokens.access);
            localStorage.setItem("refresh_token", data.tokens.refresh);
            localStorage.setItem("user_id", data.user_id);
        },
        onError: (error) => {
            console.error(error.message);
        },
    });
};
