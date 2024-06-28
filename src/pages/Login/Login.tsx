import React from 'react'

import { StyledSideLinesBackground } from './styles'

import { Page, PageType } from '~layouts/Page'

// TODO: create Login page
export const Login: React.FC = () => (
    <Page title={'Login'} type={PageType.UNLOGGED}>
        <StyledSideLinesBackground
            aria-hidden={true}
            src={'./images/side-lines-background.svg'}
            alt={'Fundo com linhas laterais verdes'}
        />
    </Page>
)
