import axios, { CreateAxiosDefaults } from 'axios'

import { Header } from '~enums/Header'
import { storageKeys } from '~utils/storage-keys'

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
} as CreateAxiosDefaults)

const requestInterceptor = (config: any) => {
    const accessToken = JSON.parse(localStorage.getItem(storageKeys.ACCESS_TOKEN) ?? '""')

    if (accessToken) config.headers[Header.X_ACCESS_TOKEN] = `Bearer ${accessToken}`

    return config
}

api.interceptors.request.use(requestInterceptor)
