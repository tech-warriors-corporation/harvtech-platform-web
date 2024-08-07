import { MdWarning } from 'react-icons/md'
import { toast } from 'react-toastify'

export const useToast = () => {
    const error = (message: string, ms = 0) => {
        setTimeout(
            () =>
                toast(message, {
                    type: 'error',
                    icon: () => <MdWarning aria-hidden={true} color={'var(--toastify-icon-color-error)'} />,
                }),
            ms,
        )
    }

    return { error }
}
