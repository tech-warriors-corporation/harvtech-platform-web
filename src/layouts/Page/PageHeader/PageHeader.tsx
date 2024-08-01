import React from 'react'
import { MdMenu } from 'react-icons/md'

import { PageType } from '../enums'
import { usePage } from '../hook'
import { PageContentLimiter } from '../PageContentLimiter'
import { PageIconButton } from '../PageIconButton'

import { StyledContent, StyledHeader, StyledLogo, StyledTitle } from './styles'

type Props = {
    title?: string
    pageType?: PageType
    removeMenu?: boolean
}

export const PageHeader: React.FC<Props> = ({ title, pageType, removeMenu }) => {
    const { isMenuOpened, openMenu } = usePage()

    return title || pageType ? (
        <StyledHeader data-cy={'page-header'} pageType={pageType!} removeMenu={removeMenu!}>
            <PageContentLimiter>
                <StyledContent>
                    {pageType === PageType.LOGGED && !removeMenu && (
                        <PageIconButton
                            id={'page-header-open-menu'}
                            text={'Abrir menu'}
                            isDisabled={isMenuOpened}
                            icon={MdMenu}
                            onClick={openMenu}
                        />
                    )}
                    {pageType === PageType.UNLOGGED && (
                        <StyledLogo data-cy={'page-header-logo'} src={'./images/logo.svg'} alt={'Logo do HarvTech'} />
                    )}
                    {title && <StyledTitle data-cy={'page-header-title'}>{title}</StyledTitle>}
                </StyledContent>
            </PageContentLimiter>
        </StyledHeader>
    ) : null
}
