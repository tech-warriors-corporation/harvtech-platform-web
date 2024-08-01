import React from 'react'

import { Construction } from '~components/Construction'
import { Page, PageType } from '~layouts/Page'

export const Dashboard: React.FC = () => (
    <Page title={'Dashboard'} type={PageType.LOGGED}>
        <Construction />
    </Page>
)
