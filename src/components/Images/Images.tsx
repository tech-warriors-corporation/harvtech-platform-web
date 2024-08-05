import React from 'react'
import { UseFormReturn } from 'react-hook-form'
import { IoMdTrash } from 'react-icons/io'
import { MdOutlineCameraAlt } from 'react-icons/md'

import {
    StyledButton,
    StyledFieldset,
    StyledImage,
    StyledImageContainer,
    StyledInput,
    StyledLabel,
    StyledLegend,
} from './styles'

import { Tooltip } from '~components/Tooltip'
import { useToast } from '~hooks/useToast'
import { Base64File } from '~types/Base64File'
import { getBase64, getFileExtension } from '~utils/file'
import { getUUID } from '~utils/ids'
import { REQUIRED_FIELD } from '~utils/validations'

type Props = {
    name: string
    form: UseFormReturn<any>
    isRequired?: boolean
    isDisabled?: boolean
}

export const Images: React.FC<Props> = ({
    name,
    form: { setValue, watch },
    isRequired = false,
    isDisabled = false,
}) => {
    const toast = useToast()
    const nameAsAny = name as any
    const images = watch(nameAsAny) as Base64File[]
    const valueOptions = { shouldDirty: true, shouldValidate: true, shouldTouch: true }

    const openFilesManager = (event: React.MouseEvent | React.KeyboardEvent) => {
        const labelElement = event.currentTarget as HTMLLabelElement

        labelElement.querySelector('input')?.click()
    }

    const addImages = async (newImages: File[]) => {
        if (newImages.length === 0) return

        const newImagesAsBase64: Base64File[] = []

        for (const newImage of newImages) {
            try {
                newImagesAsBase64.push({
                    id: getUUID(),
                    content: await getBase64(newImage),
                    type: getFileExtension(newImage),
                })
            } catch (error) {
                console.error(error)
                toast.error('Ocorreu um problema ao adicionar uma imagem')
            }
        }

        setValue(nameAsAny, [...images, ...newImagesAsBase64] as any, valueOptions)
    }

    const deleteImage = (imageId: string) =>
        setValue(nameAsAny, images.filter(({ id }) => id !== imageId) as any, valueOptions)

    return (
        <StyledFieldset data-cy={'images'}>
            <StyledLegend>
                Imagens para análise {isRequired ? <span aria-label={REQUIRED_FIELD}>*</span> : ''}
            </StyledLegend>

            <Tooltip text={'Adicionar imagens'}>
                <StyledLabel
                    tabIndex={isDisabled ? -1 : 0}
                    isDisabled={isDisabled!}
                    onClick={(event) => {
                        if (isDisabled) return

                        openFilesManager(event)
                    }}
                    onKeyDown={(event) => {
                        if (isDisabled) return

                        const { code } = event

                        if (code !== 'Enter' && code !== 'Space') return

                        event.preventDefault()
                        openFilesManager(event)
                    }}
                >
                    <StyledInput
                        type={'file'}
                        multiple={true}
                        accept='.jpg, .jpeg, .png'
                        disabled={isDisabled}
                        onClick={(event) => {
                            if (isDisabled) return

                            event.stopPropagation()
                        }}
                        onChange={async ({ target: { files } }) => {
                            if (isDisabled) return
                            if (files) await addImages(Array.from(files))
                        }}
                    />

                    <MdOutlineCameraAlt aria-hidden={true} />
                </StyledLabel>
            </Tooltip>

            {images.map(({ id, content }, index: number) => {
                const text = `Imagem de número ${index + 1}`
                const label = `Excluir ${text.toLowerCase()}`

                return (
                    <StyledImageContainer key={id} isDisabled={isDisabled!}>
                        <StyledImage src={content} alt={text} />
                        <Tooltip text={label}>
                            <StyledButton
                                tabIndex={isDisabled ? -1 : 0}
                                aria-label={label}
                                disabled={isDisabled}
                                onClick={() => {
                                    if (isDisabled) return

                                    deleteImage(id)
                                }}
                            >
                                <IoMdTrash aria-hidden={true} />
                            </StyledButton>
                        </Tooltip>
                    </StyledImageContainer>
                )
            })}
        </StyledFieldset>
    )
}
