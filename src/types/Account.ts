import { AccountPlan } from '~enums/AccountPlan'
import { AccountType } from '~enums/AccountType'

export type Account = {
    id: string
    name: string
    email: string
    type: AccountType
    plan: AccountPlan
}
