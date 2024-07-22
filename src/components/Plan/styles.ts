import styled from 'styled-components'

import { fixSize, opacityStyles } from '~utils/css-toolkit'

export const StyledFieldset = styled.fieldset`
    display: flex;
    gap: ${({ theme }) => theme.spaces.four};
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        flex-direction: column;
    }
`

export const StyledLegend = styled.legend`
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: ${({ theme }) => theme.spaces.three};
`

export const StyledInput = styled.input`
    position: absolute;
    top: ${({ theme }) => theme.spaces.three};
    left: ${({ theme }) => theme.spaces.three};
    padding: 0;
    margin: 0;
    opacity: 0;

    ${fixSize('1px')};
`

export const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    line-height: 1;
`

export const StyledBullet = styled.span<{ isSelected: boolean }>`
    background-color: ${({ theme }) => theme.colors.darkerGray};
    border: ${({ theme }) => `${theme.spaces.one} solid ${theme.colors.background}`};
    border-radius: 50%;
    margin-right: ${({ theme }) => theme.spaces.two};
    transition: background-color ${({ theme }) => theme.times.short};

    ${fixSize('14px')};

    ${({ isSelected, theme }) => isSelected && `background-color: ${theme.colors.text}`};
`

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spaces.three};
    position: relative;
    border-radius: ${({ theme }) => theme.spaces.one};
    padding: ${({ theme }) => theme.spaces.three};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.purple};
    transition: opacity ${({ theme }) => theme.times.short};
    width: 100%;

    ${opacityStyles};
`

export const StyledTitle = styled.span`
    flex-grow: 1;
    font-weight: 600;
    font-size: 0.875rem;
    padding-right: ${({ theme }) => theme.spaces.three};
`

export const StyledText = styled.span`
    text-align: center;
    font-style: italic;
    font-weight: 700;
    flex-grow: 1;
    padding-bottom: ${({ theme }) => theme.spaces.two};
    white-space: break-spaces;
`

export const StyledDetails = styled.span`
    background-color: ${({ theme }) => theme.colors.darkerGray};
    border-radius: ${({ theme }) => `${theme.spaces.five} ${theme.spaces.five} 0 0`};
    margin: ${({ theme }) => `0 -${theme.spaces.three} -${theme.spaces.three} -${theme.spaces.three}`};
    width: calc(100% + ${({ theme }) => theme.spaces.four});
    text-align: center;
    font-size: 0.75rem;
    font-weight: 500;
    padding: ${({ theme }) => `6px ${theme.spaces.three}`};
`
