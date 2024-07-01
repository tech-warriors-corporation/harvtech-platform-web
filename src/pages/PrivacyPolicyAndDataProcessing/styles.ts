import styled from 'styled-components'

import { Card } from '~components/Card'
import { Link } from '~components/Link'
import { customScroll } from '~utils/css-toolkit'

export const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.four};
    max-width: 1000px;
    margin: 0 auto;
`

export const StyledCard = styled(Card)`
    max-height: 70vh;
    min-height: 582px;
    overflow-y: auto;

    ${customScroll};
`

export const StyledList = styled.ol`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.three};
    list-style: decimal;
    padding-left: ${({ theme }) => theme.spaces.four};
`

export const StyledListItem = styled.li<{ isParent?: boolean }>`
    &:not(:last-child) {
        margin-bottom: ${({ theme, isParent }) => (isParent ? theme.spaces.three : null)};
    }
`

export const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.text};
`

export const StyledTitle = styled.strong`
    display: inline-block;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spaces.three};
`

export const StyledStrong = styled.strong`
    font-weight: 600;
`
