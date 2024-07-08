import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { yupResolver } from '@hookform/resolvers/yup'

import { AxiosError } from 'axios'
import { object } from 'yup'

import {
    StyledActions,
    StyledCard,
    StyledForm,
    StyledLink,
    StyledSideLinesBackground,
    StyledText,
    StyledTitle,
} from './styles'
import { LoginFormData } from './types'

import { Button, ButtonType } from '~components/Button'
import { Input, InputMode, InputType } from '~components/Input'
import { Link } from '~components/Link'
import { Routes } from '~enums/Routes'
import { Target } from '~enums/Target'
import { useAccount } from '~hooks/useAccount'
import { useToast } from '~hooks/useToast'
import { Page, PageType } from '~layouts/Page'
import { login } from '~pages/Login/service'
import { ErrorModel } from '~types/ErrorModel'
import { emailSchema, FIELD_MAX_LENGTH, PASSWORD_MIN_LENGTH, passwordSchema } from '~utils/validations'

export const Login: React.FC = () => {
    const toast = useToast()
    const { setAccount } = useAccount()
    const navigate = useNavigate()
    const form = useForm<LoginFormData>({
        resolver: yupResolver(object({ email: emailSchema, password: passwordSchema }).required()),
        defaultValues: { email: '', password: '' },
        mode: 'all',
    })

    const { isSubmitting, isValid } = form.formState

    const onSubmit = async (formData: LoginFormData) => {
        if (isSubmitting) return

        try {
            const { accessToken } = await login(formData)

            setAccount(accessToken)
            navigate(Routes.DASHBOARD)
        } catch (error) {
            console.error(error)
            toast.error(
                ((error as AxiosError)?.response?.data as ErrorModel)?.error?.message ||
                    'Ocorreu um problema ao fazer login',
            )
        }
    }

    return (
        <Page title={'Login'} type={PageType.UNLOGGED}>
            <StyledCard className={'animate__animated animate__fadeIn'}>
                <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
                    <StyledTitle>Coloque os dados do login:</StyledTitle>
                    <StyledText>
                        Nossa{' '}
                        <Link
                            href={Routes.PRIVACY_POLICY_AND_DATA_PROCESSING}
                            target={Target.BLANK}
                            text={'política de privacidade e dados'}
                        />
                        .
                    </StyledText>

                    <Input
                        type={InputType.EMAIL}
                        mode={InputMode.EMAIL}
                        label={'E-mail'}
                        placeholder={'Preencha com o e-mail'}
                        name={'email'}
                        autoComplete={'username'}
                        maxLength={FIELD_MAX_LENGTH}
                        isRequired={true}
                        form={form}
                    />

                    <Input
                        type={InputType.PASSWORD}
                        label={'Senha'}
                        placeholder={'Preencha com a senha'}
                        name={'password'}
                        autoComplete={'new-password'}
                        maxLength={FIELD_MAX_LENGTH}
                        minLength={PASSWORD_MIN_LENGTH}
                        isRequired={true}
                        form={form}
                    />

                    <StyledActions>
                        <Button
                            type={ButtonType.SUBMIT}
                            text={'Entrar'}
                            isLoading={isSubmitting}
                            isDisabled={!isValid}
                        />
                    </StyledActions>
                </StyledForm>
            </StyledCard>

            <StyledLink href={Routes.HOME} text={'Voltar para home'} />

            <StyledSideLinesBackground
                aria-hidden={true}
                src={'./images/side-lines-background.svg'}
                alt={'Fundo com linhas laterais verdes'}
            />
        </Page>
    )
}
