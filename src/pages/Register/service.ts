import { RegisterFormData, RegisterResponse } from './types'

import { ApiPrefix } from '~enums/ApiPrefix'
import { api } from '~utils/api'

export const register = async (formData: RegisterFormData): Promise<RegisterResponse> => {
    const { data } = await api.post<RegisterResponse>(`${ApiPrefix.ACCOUNTS}/register`, formData)

    return data as RegisterResponse
}
