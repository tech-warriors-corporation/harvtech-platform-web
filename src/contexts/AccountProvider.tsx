import React, { createContext, PropsWithChildren, useLayoutEffect } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'

import { jwtDecode, JwtPayload } from 'jwt-decode'

import { WaitTime } from '~enums/WaitTime'
import { useToast } from '~hooks/useToast'
import { refreshToken } from '~services/account-service'
import { Account } from '~types/Account'
import { storageKeys } from '~utils/storage-keys'

type Payload = JwtPayload & { account: Account }

export type AccountData = {
    accessToken: string
    setAccessToken: (accessToken: string) => void
    getAccount: () => Account | null
    getRefreshedToken: () => Promise<boolean>
}

export const AccountContext = createContext<AccountData>({} as AccountData)

let internalAccount: Account | null = null

export const AccountProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [accessToken, setAccessToken] = useLocalStorage(storageKeys.ACCESS_TOKEN, '')
    const toast = useToast()

    const setDecodedAccount = (accessToken: string) => {
        if (!accessToken) {
            internalAccount = null

            return
        }

        const { account } = jwtDecode<Payload>(accessToken)

        internalAccount = account
    }

    const getAccount = () => internalAccount

    const getRefreshedToken = async () => {
        try {
            const { accessToken } = await refreshToken()

            setAccessToken(accessToken)

            return true
        } catch (error) {
            console.error(error)
            setAccessToken('')
            toast.error('Ocorreu um problema ao obter o token de acesso atualizado', WaitTime.SHORTLY)

            return false
        }
    }

    useLayoutEffect(() => {
        setDecodedAccount(accessToken)
    }, [accessToken])

    return (
        <AccountContext.Provider
            value={{
                accessToken,
                setAccessToken,
                getAccount,
                getRefreshedToken,
            }}
        >
            {children}
        </AccountContext.Provider>
    )
}
