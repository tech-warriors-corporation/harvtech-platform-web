import { IconType } from 'react-icons'

import { Routes } from '~enums/Routes'
import { Target } from '~enums/Target'

type MenuItem = {
    title: string
    url: Routes
    icon: IconType
    target?: Target
}

export type Menu = MenuItem[]
