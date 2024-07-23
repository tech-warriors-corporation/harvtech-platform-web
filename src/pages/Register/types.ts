import { AccountPlan } from '~enums/AccountPlan'

export type RegisterFormData = {
    name: string
    email: string
    password: string
    passwordConfirmation: string
    plan: AccountPlan
    acceptedTerms: boolean
}

export type RegisterResponse = {
    accessToken: string
}
