import React from 'react'

import packageJson from '../../../../../package.json'

import { StyledImage, StyledVersion } from './styles'

export const PageMenuVersion: React.FC = () => (
    <StyledVersion data-cy={'page-menu-version'}>
        {packageJson.version}
        <StyledImage src={'./images/logo.svg'} alt={'Logo do HarvTech'} />
    </StyledVersion>
)
