import { LoginFormData, LoginResponse } from './types'

import { ApiPrefix } from '~enums/ApiPrefix'
import { api } from '~utils/api'

export const login = async (formData: LoginFormData): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>(`${ApiPrefix.ACCOUNTS}/login`, formData)

    return data as LoginResponse
}
