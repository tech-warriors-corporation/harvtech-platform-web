import React from 'react'
import { MdWarning } from 'react-icons/md'

import { StyledErrorMessage } from './styles'

type Props = {
    message: string
}

export const ErrorMessage: React.FC<Props> = ({ message }) => (
    <StyledErrorMessage data-cy={'error-message'}>
        <MdWarning aria-hidden={true} /> {message}
    </StyledErrorMessage>
)
