import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { MdStarOutline } from 'react-icons/md'

import {
    StyledBullet,
    StyledDetails,
    StyledFieldset,
    StyledHeader,
    StyledInput,
    StyledLabel,
    StyledLegend,
    StyledText,
    StyledTitle,
} from './styles'

import { Tooltip } from '~components/Tooltip'
import { AccountPlan } from '~enums/AccountPlan'
import { capitalize } from '~utils/strings'

const plans = [
    {
        value: AccountPlan.STANDARD,
        text: 'R$ 800,00 + \nR$ 75,00 por hectare',
        disclaimer: ['Limite de 2 cultivos', 'Limite de 1 usuário'],
    },
    {
        value: AccountPlan.PREMIUM,
        text: 'R$ 1.200,00 + \nR$ 60,00 por hectare',
        disclaimer: ['Limite de 5 cultivos', 'Limite de 5 usuários'],
    },
    {
        value: AccountPlan.DELUXE,
        text: 'R$ 2.500,00 + \nR$ 50,00 por hectare',
        disclaimer: ['Cultivos ilimitados', 'Usuários ilimitados'],
    },
]

type Props = {
    name: string
    form: UseFormReturn<any>
}

export const Plan: React.FC<Props> = ({ name, form }) => {
    const nameAsAny = name as any
    const selectedValue = form.watch(nameAsAny)

    return (
        <StyledFieldset>
            <StyledLegend>Escolha o plano de mensalidade *</StyledLegend>
            {plans.map(({ value, text, disclaimer }, index) => (
                <StyledLabel key={value}>
                    <StyledInput type={'radio'} value={value} {...form.register(nameAsAny)} />
                    <StyledHeader>
                        <StyledBullet aria-hidden={true} isSelected={value === selectedValue} />
                        <StyledTitle>{capitalize(value)}</StyledTitle>
                        {new Array(index + 1).fill(null).map((_, internalIndex) => (
                            <MdStarOutline key={internalIndex} aria-hidden={true} />
                        ))}
                    </StyledHeader>
                    <StyledText>{text}</StyledText>
                    <Tooltip text={disclaimer.map((text) => `• ${text}`).join('\n')} textAlign={'left'}>
                        <StyledDetails>Ver detalhes</StyledDetails>
                    </Tooltip>
                </StyledLabel>
            ))}
        </StyledFieldset>
    )
}
