import React from 'react'

import { useTheme } from 'styled-components'

import { PageContentLimiter } from '../PageContentLimiter'

import { StyledFooter } from './styles'

import { Link } from '~components/Link'
import { Target } from '~enums/Target'

export const PageFooter: React.FC = () => {
    const { colors } = useTheme()

    return (
        <StyledFooter data-cy={'page-footer'}>
            <PageContentLimiter>
                Um ecossistema{' '}
                <Link
                    cyId={'page-footer-github-link'}
                    href={'https://github.com/tech-warriors-corporation'}
                    target={Target.BLANK}
                    text={'Tech Warriors'}
                    color={colors.background}
                />
            </PageContentLimiter>
        </StyledFooter>
    )
}
