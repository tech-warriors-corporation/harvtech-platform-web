import React, { PropsWithChildren } from 'react'
import { IoFlashOutline } from 'react-icons/io5'
import {
    MdAgriculture,
    MdAttachMoney,
    MdClose,
    MdGroup,
    MdOutlineAddBox,
    MdOutlineDashboard,
    MdOutlineReceipt,
    MdOutlineSettings,
} from 'react-icons/md'
import { useLocation } from 'react-router'

import { usePage } from '../hook'
import { PageContentLimiter } from '../PageContentLimiter'
import { PageIconButton } from '../PageIconButton'

import { PageMenuLogout } from './PageMenuLogout'
import { PageMenuVersion } from './PageMenuVersion'
import {
    StyledActions,
    StyledContainer,
    StyledContent,
    StyledHeader,
    StyledInfo,
    StyledItem,
    StyledLink,
    StyledList,
    StyledMenu,
    StyledSide,
    StyledTitle,
} from './styles'
import { Menu } from './types'

import { Button, ButtonLayout } from '~components/Button'
import { Routes } from '~enums/Routes'
import { Target } from '~enums/Target'
import { PageType } from '~layouts/Page'

const menu: Menu = [
    {
        title: 'Dashboard',
        url: Routes.DASHBOARD,
        icon: MdOutlineDashboard,
    },
    {
        title: 'Novo cultivo',
        url: Routes.NEW_CULTIVATION,
        icon: MdOutlineAddBox,
    },
    {
        title: 'Cultivos',
        url: Routes.CULTIVATIONS,
        icon: MdAgriculture,
    },
    {
        title: 'Usuários',
        url: Routes.USERS,
        icon: MdGroup,
    },
    {
        title: 'Configurações',
        url: Routes.SETTINGS,
        icon: MdOutlineSettings,
    },
    {
        title: 'Receita usada',
        url: Routes.RECIPE_USED,
        icon: MdAttachMoney,
    },
    {
        title: 'Políticas',
        url: Routes.PRIVACY_POLICY_AND_DATA_PROCESSING,
        icon: MdOutlineReceipt,
        target: Target.BLANK,
    },
]

type Props = {
    pageType?: PageType
}

export const PageMenu: React.FC<PropsWithChildren<Props>> = ({ pageType, children }) => {
    const { pathname } = useLocation()
    const { isMenuOpened, closeMenu } = usePage()

    const content = (
        <StyledContainer>
            <StyledSide isOpened={isMenuOpened}>
                <StyledHeader>
                    <StyledTitle>HarvTech</StyledTitle>
                    <PageIconButton
                        text={'Fechar menu'}
                        isDisabled={!isMenuOpened}
                        icon={MdClose}
                        onClick={closeMenu}
                    />
                </StyledHeader>

                <StyledList>
                    {menu.map(({ title, url, icon, target }, index) => (
                        <StyledItem key={`${index}${url}`}>
                            <StyledLink
                                to={url}
                                isActive={pathname.startsWith(url)}
                                target={target}
                                onClick={() => (target === Target.BLANK ? null : closeMenu())}
                            >
                                {icon({ 'aria-hidden': true })} {title}
                            </StyledLink>
                        </StyledItem>
                    ))}
                </StyledList>

                <StyledActions>
                    <Button
                        text={'Atualizar plano mensal'}
                        layout={ButtonLayout.TERTIARY}
                        icon={IoFlashOutline}
                        isDisabled={true}
                    />

                    <StyledInfo>
                        <PageMenuLogout />
                        <PageMenuVersion />
                    </StyledInfo>
                </StyledActions>
            </StyledSide>
            <StyledContent>{children}</StyledContent>
        </StyledContainer>
    )

    return (
        <StyledMenu data-cy={'page-menu'}>
            {pageType ? <PageContentLimiter>{content}</PageContentLimiter> : content}
        </StyledMenu>
    )
}
