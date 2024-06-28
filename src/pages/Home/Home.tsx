import React from 'react'

import {
    StyledActions,
    StyledBranding,
    StyledCard,
    StyledContent,
    StyledHeader,
    StyledLogo,
    StyledSubText,
    StyledSubTitle,
    StyledText,
    StyledTitle,
} from './styles'

import { Button, ButtonLayout } from '~components/Button'
import { Routes } from '~enums/Routes'
import { Page } from '~layouts/Page'

export const Home: React.FC = () => (
    <Page>
        <StyledContent data-cy={'home'}>
            <StyledBranding>
                <StyledHeader>
                    <StyledLogo data-cy={'home-logo'} src={'./images/logo.svg'} alt={'Logo do HarvTech'} />
                    <StyledTitle data-cy={'home-title'}>HarvTech</StyledTitle>
                    <StyledText data-cy={'home-text'}>
                        Juntos criando <br />
                        um mundo melhor.
                    </StyledText>
                </StyledHeader>
            </StyledBranding>
            <StyledActions>
                <StyledCard>
                    <StyledSubTitle data-cy={'home-sub-title'}>Home</StyledSubTitle>
                    <StyledSubText data-cy={'home-sub-text'}>
                        Bem-vindo ao HarvTech, ajudamos sua empresa a ter um cultivo mais produtivo, rápido, saudável e
                        econômico através da identificação de doenças e pragas. Para continuar, escolha:
                    </StyledSubText>
                    <Button cyId={'home-login-button'} text={'Entrar'} href={Routes.LOGIN} />
                    <Button
                        cyId={'home-register-button'}
                        layout={ButtonLayout.SECONDARY}
                        text={'Criar conta'}
                        href={Routes.REGISTER}
                    />
                </StyledCard>
            </StyledActions>
        </StyledContent>
    </Page>
)
