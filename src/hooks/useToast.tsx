import { MdWarning } from 'react-icons/md'
import { toast } from 'react-toastify'

export const useToast = () => {
    const error = (message: string) => {
        toast(message, {
            type: 'error',
            icon: () => <MdWarning color={'var(--toastify-icon-color-error)'} />,
        })
    }

    return { error }
}
