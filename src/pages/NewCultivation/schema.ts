import { array, object, string } from 'yup'

import { modelTypes } from '../../constants/model-types'

import { REQUIRED_FIELD } from '~utils/validations'

export const schema = object({
    modelType: string().typeError(REQUIRED_FIELD).oneOf(modelTypes, REQUIRED_FIELD).required(REQUIRED_FIELD),
    base64Images: array()
        .of(object({ id: string().required(), content: string().required(), type: string().required() }).required())
        .min(1)
        .required(),
}).required()
