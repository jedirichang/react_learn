import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin as createCabinApi } from "../../services/apiCabins";
import { toast } from "react-hot-toast";


export const useCreateCabin = () => {
    const queryClient = useQueryClient();

    const { mutate: createCabin, isLoading: isCreating } = useMutation({
        mutationFn: createCabinApi,
        onSuccess: () => {
            toast.success('New Cabin successfully created!');
            queryClient.invalidateQueries({ queryKey: ['cabin'] });
        },
        onError: (err) => toast.error(err.message)
    });

    return { isCreating, createCabin };

}