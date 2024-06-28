import React from 'react'

import { PageType } from '../enums'
import { PageContentLimiter } from '../PageContentLimiter'

import { StyledContent, StyledHeader, StyledLogo, StyledTitle } from './styles'

type Props = {
    title?: string
    pageType?: PageType
}

export const PageHeader: React.FC<Props> = ({ title, pageType }) =>
    title || pageType ? (
        <StyledHeader data-cy={'page-header'}>
            <PageContentLimiter>
                <StyledContent>
                    {pageType === PageType.UNLOGGED && (
                        <StyledLogo data-cy={'page-header-logo'} src={'./images/logo.svg'} alt={'Logo do HarvTech'} />
                    )}
                    {title && <StyledTitle data-cy={'page-header-title'}>{title}</StyledTitle>}
                </StyledContent>
            </PageContentLimiter>
        </StyledHeader>
    ) : null
