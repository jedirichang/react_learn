import { useMutation } from "@tanstack/react-query"
import { updateSetting } from "../../services/apiSettings"
import { toast } from "react-hot-toast"

export const useUpdateSettings = () => {
    const { isLoading: updatingSettings, mutate: updateSettings } = useMutation({
        mutationFn: updateSetting,
        onSuccess: () => {
            toast.success('Setting updated')
        },
        onError: _ => toast.error('Setting couln\'t be updated')
    });

    return { updatingSettings, updateSettings };
}