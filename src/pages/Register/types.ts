import { AccountPlan } from '~enums/AccountPlan'

export type RegisterFormData = {
    name: string
    email: string
    emailConfirmation: string
    password: string
    passwordConfirmation: string
    plan: AccountPlan
    acceptedTerms: true
}

export type RegisterResponse = {
    accessToken: string
}
