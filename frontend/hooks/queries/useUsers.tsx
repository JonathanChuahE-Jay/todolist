import { useQuery } from "@tanstack/react-query"
import { getUser } from "../../services/userServices";

export const useRetrieveUserQuery = (id: number) => {
    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            try {
                const response = await getUser({ id })
                return response.data;
            } catch (e) {
                console.error(error.response.data);
            }
        }
    })
}