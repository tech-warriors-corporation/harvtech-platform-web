import { string } from 'yup'

import { AccountPlan } from '~enums/AccountPlan'

export const REQUIRED_FIELD = 'Campo obrigatório'
const INVALID_EMAIL = 'E-mail inválido'
export const FIELD_MAX_LENGTH = 250
export const PASSWORD_MIN_LENGTH = 8
export const EXCEEDED_MAX_LENGTH = 'Máximo de caracteres excedido'
export const INVALID_FIELD = 'Campo inválido'

export const emailSchema = string()
    .required(REQUIRED_FIELD)
    .max(FIELD_MAX_LENGTH, EXCEEDED_MAX_LENGTH)
    .email(INVALID_EMAIL)

export const passwordSchema = string()
    .required(REQUIRED_FIELD)
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Necessário pelo menos um caractere especial')
    .matches(/[a-z]/, 'Necessário pelo menos uma letra minúscula')
    .matches(/[A-Z]/, 'Necessário pelo menos uma letra maiúscula')
    .min(PASSWORD_MIN_LENGTH, 'Mínimo de 8 caracteres')
    .max(FIELD_MAX_LENGTH, EXCEEDED_MAX_LENGTH)

export const planSchema = string().required().oneOf(Object.values(AccountPlan))
