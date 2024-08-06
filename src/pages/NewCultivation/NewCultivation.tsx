import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { MdCheck } from 'react-icons/md'
import ReactMarkdown from 'react-markdown'
import { yupResolver } from '@hookform/resolvers/yup'

import { AxiosError } from 'axios'

import { modelTypeAutocompleteOptions } from './constants'
import { schema } from './schema'
import {
    StyledActions,
    StyledForm,
    StyledIconContainer,
    StyledImage,
    StyledModelTypeContainer,
    StyledPredictedImage,
    StyledPredictedImages,
    StyledPredictedText,
    StyledText,
} from './styles'
import { NewCultivationFormData, PredictedImages } from './types'

import { Autocomplete } from '~components/Autocomplete'
import { Button, ButtonLayout, ButtonType } from '~components/Button'
import { Images } from '~components/Images'
import { Tooltip } from '~components/Tooltip'
import { useToast } from '~hooks/useToast'
import { Page, PageType } from '~layouts/Page'
import { predictImage } from '~services/predict-service'
import { Base64File } from '~types/Base64File'
import { ErrorModel } from '~types/ErrorModel'
import { removeMarkdown } from '~utils/strings'

export const NewCultivation: React.FC = () => {
    const toast = useToast()
    const form = useForm<NewCultivationFormData>({
        resolver: yupResolver(schema),
        defaultValues: { base64Images: [] },
        mode: 'all',
    })

    const {
        setValue,
        watch,
        formState: { isValid, isSubmitting },
    } = form

    const [predictedImages, setPredictedImages] = useState<PredictedImages>([])
    const base64ImagesAsAny = 'base64Images' as any
    const currentBase64Images = watch(base64ImagesAsAny) as Base64File[]

    const reset = () => {
        setPredictedImages([])
        form.reset()
    }

    const onSubmit = async ({ modelType, base64Images }: NewCultivationFormData) => {
        let oldBase64Images = currentBase64Images

        for (const base64Image of base64Images) {
            try {
                const { text, probability } = await predictImage({ modelType, base64Image })
                const base64ImageId = base64Image.id

                setPredictedImages((previousPredictedImages) => [
                    ...previousPredictedImages,
                    { id: base64ImageId, content: base64Image.content, text, probability },
                ])

                oldBase64Images = oldBase64Images.filter(({ id }) => id !== base64ImageId)

                setValue(base64ImagesAsAny, oldBase64Images as any, {
                    shouldDirty: true,
                    shouldTouch: true,
                    shouldValidate: true,
                })
            } catch (error) {
                console.error(error)
                toast.error(
                    ((error as AxiosError)?.response?.data as ErrorModel)?.error?.message ||
                        'Ocorreu um problema ao analisar uma imagem',
                )
            }
        }
    }

    return (
        <Page title={'Novo cultivo'} type={PageType.LOGGED}>
            <StyledForm data-cy={'new-cultivation'} onSubmit={form.handleSubmit(onSubmit)}>
                <StyledText>
                    O cultivo detectará pragas e doenças. Com isso, oferecemos a solução para cada tipo de lavoura.
                </StyledText>

                <StyledModelTypeContainer>
                    <Autocomplete
                        label={'Grão ou vegetal'}
                        placeholder={'Selecione o grão ou vegetal'}
                        name={'modelType'}
                        options={modelTypeAutocompleteOptions}
                        isRequired={true}
                        isDisabled={isSubmitting || predictedImages.length !== 0}
                        form={form}
                    />
                </StyledModelTypeContainer>

                <Images name={'base64Images'} form={form} isRequired={true} isDisabled={isSubmitting} />

                <StyledActions>
                    <Button
                        text={'Limpar campos'}
                        layout={ButtonLayout.SECONDARY}
                        onClick={reset}
                        isDisabled={isSubmitting}
                    />

                    <Button
                        type={ButtonType.SUBMIT}
                        text={'Analisar imagens adicionadas'}
                        isLoading={isSubmitting}
                        isDisabled={!isValid}
                    />
                </StyledActions>
            </StyledForm>

            {predictedImages.length !== 0 && (
                <StyledPredictedImages>
                    {predictedImages.map(({ content, text, probability }, index) => (
                        <StyledPredictedImage key={index}>
                            {probability >= 90 && (
                                <Tooltip text={'Probabilidade alta'}>
                                    <StyledIconContainer>
                                        <MdCheck aria-hidden={true} />
                                    </StyledIconContainer>
                                </Tooltip>
                            )}
                            <StyledImage src={content} alt={removeMarkdown(text)} />
                            <StyledPredictedText>
                                <ReactMarkdown>{text}</ReactMarkdown>
                            </StyledPredictedText>
                        </StyledPredictedImage>
                    ))}
                </StyledPredictedImages>
            )}
        </Page>
    )
}
