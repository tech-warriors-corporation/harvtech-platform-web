import { useContext } from 'react'

import { AccountContext, AccountData } from '~contexts/AccountProvider'

export const useAccount = (): AccountData => useContext(AccountContext)
