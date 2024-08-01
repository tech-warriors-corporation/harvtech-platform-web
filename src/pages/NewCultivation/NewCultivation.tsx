import React from 'react'

import { Construction } from '~components/Construction'
import { Page, PageType } from '~layouts/Page'

export const NewCultivation: React.FC = () => (
    <Page title={'Novo cultivo'} type={PageType.LOGGED}>
        <Construction />
    </Page>
)
