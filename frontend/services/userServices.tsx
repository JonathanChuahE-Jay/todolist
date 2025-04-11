import axiosInstance from "../src/axios/AxiosInstance";

export const getUser = async ({ id }: { id: number }) => {
    try {
        const response = await axiosInstance.post("api/user/", { id });
        return response.data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};
