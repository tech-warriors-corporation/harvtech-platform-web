import { LoginFormData, LoginResponse } from './types'

import { api } from '~utils/api'

export const login = async (formData: LoginFormData): Promise<LoginResponse> => {
    const { data } = await api.post<LoginResponse>('/accounts/login', formData)

    return data
}
