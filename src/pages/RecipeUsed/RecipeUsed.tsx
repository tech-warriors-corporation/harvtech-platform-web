import React from 'react'

import { Construction } from '~components/Construction'
import { Page, PageType } from '~layouts/Page'

export const RecipeUsed: React.FC = () => (
    <Page title={'Receita usada'} type={PageType.LOGGED}>
        <Construction />
    </Page>
)
