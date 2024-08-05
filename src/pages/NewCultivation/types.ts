import { ModelType } from '~enums/ModelType'
import { Base64File } from '~types/Base64File'

export type NewCultivationFormData = {
    modelType: ModelType
    base64Images: Base64File[]
}

type PredictedImage = {
    id: string
    content: string
    text: string
    probability: number
}

export type PredictedImages = PredictedImage[]
