import { ApiPrefix } from '~enums/ApiPrefix'
import { AccountRefreshTokenResponse } from '~types/AccountRefreshTokenResponse'
import { api } from '~utils/api'

export const refreshToken = async () => {
    const { data } = await api.get<AccountRefreshTokenResponse>(`${ApiPrefix.ACCOUNTS}/refresh-token`)

    return data as AccountRefreshTokenResponse
}
