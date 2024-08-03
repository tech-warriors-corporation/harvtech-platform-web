import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { yupResolver } from '@hookform/resolvers/yup'

import { AxiosError } from 'axios'
import { boolean, object, string } from 'yup'

import { register } from './service'
import {
    StyledAcceptedTermsLink,
    StyledActions,
    StyledCard,
    StyledContainer,
    StyledForm,
    StyledImage,
    StyledLink,
    StyledText,
    StyledTitle,
} from './styles'
import { RegisterFormData } from './types'

import { Button, ButtonType } from '~components/Button'
import { Checkbox } from '~components/Checkbox'
import { Input, InputMode, InputType } from '~components/Input'
import { Plan } from '~components/Plan'
import { AccountPlan } from '~enums/AccountPlan'
import { Routes } from '~enums/Routes'
import { Target } from '~enums/Target'
import { useAccount } from '~hooks/useAccount'
import { useToast } from '~hooks/useToast'
import { Page, PageType } from '~layouts/Page'
import { ErrorModel } from '~types/ErrorModel'
import {
    compareTest,
    emailSchema,
    EXCEEDED_MAX_LENGTH,
    FIELD_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    passwordSchema,
    planSchema,
    REQUIRED_FIELD,
} from '~utils/validations'

export const Register: React.FC = () => {
    const toast = useToast()
    const { setAccessToken } = useAccount()
    const navigate = useNavigate()
    const form = useForm<RegisterFormData>({
        resolver: yupResolver(
            object({
                name: string().required(REQUIRED_FIELD).max(FIELD_MAX_LENGTH, EXCEEDED_MAX_LENGTH),
                email: emailSchema,
                emailConfirmation: emailSchema.test(
                    compareTest('email', 'Confirmação de e-mail deve ser igual ao e-mail'),
                ),
                password: passwordSchema,
                passwordConfirmation: passwordSchema.test(
                    compareTest('password', 'Confirmação de senha deve ser igual à senha'),
                ),
                plan: planSchema,
                acceptedTerms: boolean().required().isTrue(),
            }).required(),
        ),
        defaultValues: {
            name: '',
            email: '',
            emailConfirmation: '',
            password: '',
            passwordConfirmation: '',
            plan: AccountPlan.STANDARD,
        },
        mode: 'all',
    })

    const { isSubmitting, isValid } = form.formState

    const onSubmit = async (formData: RegisterFormData) => {
        if (isSubmitting) return

        try {
            const { accessToken } = await register(formData)

            setAccessToken(accessToken)
            navigate(Routes.DASHBOARD)
        } catch (error) {
            console.error(error)
            toast.error(
                ((error as AxiosError)?.response?.data as ErrorModel)?.error?.message ||
                    'Ocorreu um problema ao criar conta',
            )
        }
    }

    return (
        <Page title={'Criação de conta'} type={PageType.UNLOGGED}>
            <StyledContainer>
                <StyledImage src={'./images/cultivations.webp'} alt={'Imagem de GIF de lavouras'} />

                <StyledCard className={'animate__animated animate__fadeIn'}>
                    <StyledForm onSubmit={form.handleSubmit(onSubmit)}>
                        <StyledTitle>Faça seu cadastro para utilizar o ecossistema:</StyledTitle>
                        <StyledText>
                            Para criar uma conta, use o seu e-mail ou de sua empresa, essa será a conta principal,
                            preste atenção se você deseja usar de forma pessoal ou corporativa. Não esqueça de colocar
                            uma senha forte.
                        </StyledText>

                        <Input
                            label={'Nome'}
                            placeholder={'Preencha com o nome'}
                            name={'name'}
                            maxLength={FIELD_MAX_LENGTH}
                            isRequired={true}
                            form={form}
                        />

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
                            type={InputType.EMAIL}
                            mode={InputMode.EMAIL}
                            label={'Confirmação de e-mail'}
                            placeholder={'Preencha com a confirmação de e-mail'}
                            name={'emailConfirmation'}
                            autoComplete={'username'}
                            maxLength={FIELD_MAX_LENGTH}
                            isRequired={true}
                            noPaste={true}
                            watchFields={['email']}
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

                        <Input
                            type={InputType.PASSWORD}
                            label={'Confirmação de senha'}
                            placeholder={'Preencha com a confirmação de senha'}
                            name={'passwordConfirmation'}
                            autoComplete={'new-password'}
                            maxLength={FIELD_MAX_LENGTH}
                            minLength={PASSWORD_MIN_LENGTH}
                            isRequired={true}
                            noPaste={true}
                            watchFields={['password']}
                            form={form}
                        />

                        <Plan name={'plan'} form={form} />

                        <Checkbox name={'acceptedTerms'} form={form}>
                            Aceito a{' '}
                            <StyledAcceptedTermsLink
                                href={Routes.PRIVACY_POLICY_AND_DATA_PROCESSING}
                                text={'política de privacidade e dados'}
                                target={Target.BLANK}
                            />
                        </Checkbox>

                        <StyledActions>
                            <Button
                                type={ButtonType.SUBMIT}
                                text={'Criar conta'}
                                isLoading={isSubmitting}
                                isDisabled={!isValid}
                            />

                            <StyledLink href={Routes.HOME} text={'Voltar para home'} />
                        </StyledActions>
                    </StyledForm>
                </StyledCard>
            </StyledContainer>
        </Page>
    )
}
