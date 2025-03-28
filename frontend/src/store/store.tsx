import { Store } from "@tanstack/store";

const authStore = new Store({
    isAuthenticated: false,
    username: null,
    email: null,
});

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
