import React from 'react'

import { Construction } from '~components/Construction'
import { Page, PageType } from '~layouts/Page'

export const Cultivations: React.FC = () => (
    <Page title={'Cultivos'} type={PageType.LOGGED}>
        <Construction />
    </Page>
)
