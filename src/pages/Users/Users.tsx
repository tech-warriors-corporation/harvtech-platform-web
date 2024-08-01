import React from 'react'

import { Construction } from '~components/Construction'
import { Page, PageType } from '~layouts/Page'

export const Users: React.FC = () => (
    <Page title={'Usuários'} type={PageType.LOGGED}>
        <Construction />
    </Page>
)
