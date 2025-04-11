import { Store } from "@tanstack/store";
import { jwtDecode } from "jwt-decode";
import { useRetrieveUserQuery } from "../../hooks/queries/useUsers";
import type { JWTType } from "../types/JWTType";

const authStore = new Store({
    isAuthenticated: false,
    username: null,
    email: null,
});

export const handleVerifyToken = () => {
    const token = localStorage.getItem("access_token");
    if (!token) return ;4

    const decodedUser: JWTType = jwtDecode(token);
    const userId = decodedUser.user_id;
    if(userId) {
        const { data } = useRetrieveUserQuery(userId);
        authStore.setState((state) => ({
            ...state,
            isAuthenticated: true,
            username: data.username,
            email: data.email,
        }));
    }
}

export const logout = () => {
    authStore.setState((state) => ({
        ...state,
        isAuthenticated: false,
        username: null,
        email: null,
    }));
};

// export const useAuth = () => authStore.useStore((state) => state.isAuthenticated);

export default authStore;
