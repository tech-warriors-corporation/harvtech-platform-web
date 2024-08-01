import React from 'react'

import { Construction } from '~components/Construction'
import { Page, PageType } from '~layouts/Page'

export const Settings: React.FC = () => (
    <Page title={'Configurações'} type={PageType.LOGGED}>
        <Construction />
    </Page>
)
