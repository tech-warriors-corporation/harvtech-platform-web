import React from 'react'
import { MdOutlineConstruction } from 'react-icons/md'

import { StyledConstruction } from './styles'

export const Construction: React.FC = () => (
    <StyledConstruction data-cy={'construction'}>
        <MdOutlineConstruction aria-hidden={true} size={'48px'} /> Em construção
    </StyledConstruction>
)
