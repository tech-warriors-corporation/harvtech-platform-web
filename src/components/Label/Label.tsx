import React from 'react'

import { StyledLabel } from './styles'

import { REQUIRED_FIELD } from '~utils/validations'

type Props = {
    label: string
    htmlFor: string
    isRequired: boolean
}

export const Label: React.FC<Props> = ({ label, htmlFor, isRequired }) => (
    <StyledLabel data-cy={'label'} htmlFor={htmlFor}>
        {label} {isRequired ? <span aria-label={REQUIRED_FIELD}>*</span> : ''}
    </StyledLabel>
)
