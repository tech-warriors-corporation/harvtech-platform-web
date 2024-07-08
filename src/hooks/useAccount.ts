import { useLocalStorage } from '@uidotdev/usehooks'

import { jwtDecode, JwtPayload } from 'jwt-decode'

import { Account } from '~types/Account'

type Payload = JwtPayload & { account: Account }

export const useAccount = () => {
    const [internalAccount, setInternalAccount] = useLocalStorage<Account | null>(
        `${import.meta.env.VITE_STORAGE_PREFIX}/account`,
        null,
    )

    const setAccount = (accessToken: string) => {
        const decoded = jwtDecode<Payload>(accessToken)

        setInternalAccount(decoded.account)
    }

    return {
        setAccount,
        account: internalAccount,
    }
}
