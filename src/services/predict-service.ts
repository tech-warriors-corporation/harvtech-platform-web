import { ApiPrefix } from '~enums/ApiPrefix'
import { ModelType } from '~enums/ModelType'
import { Base64File } from '~types/Base64File'
import { api } from '~utils/api'

type PredictImageParams = {
    modelType: ModelType
    base64Image: Base64File
}

type PredictImageResponse = {
    text: string
    probability: number
}

export const predictImage = async ({ base64Image: { content, type }, ...params }: PredictImageParams) => {
    const { data } = await api.post<PredictImageResponse>(`${ApiPrefix.PREDICT}/image`, {
        file: { content, type },
        ...params,
    })

    return data as PredictImageResponse
}
