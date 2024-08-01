import React from 'react'
import { MdOutlinePowerSettingsNew } from 'react-icons/md'
import { useNavigate } from 'react-router'

import { StyledButton } from './styles'

import { Routes } from '~enums/Routes'
import { useAccount } from '~hooks/useAccount'

export const PageMenuLogout: React.FC = () => {
    const navigate = useNavigate()
    const { setAccessToken } = useAccount()

    return (
        <StyledButton
            data-cy={'page-menu-logout'}
            onClick={() => {
                setAccessToken('')
                navigate(Routes.HOME)
            }}
        >
            <MdOutlinePowerSettingsNew size={'20px'} aria-hidden={true} /> Sair
        </StyledButton>
    )
}
