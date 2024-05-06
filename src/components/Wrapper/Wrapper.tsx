import React, { ChangeEvent, PropsWithChildren, useState } from 'react'

import axios from 'axios'
import { ThemeProvider } from 'styled-components'

import 'reset-css'
import 'animate.css/animate.min.css'

import { Button } from '~/components/Button'
import { Link } from '~/components/Link'
import { StyledWrapper } from '~/components/Wrapper/styles'
import { Routes } from '~/routes'
import { StyledGlobal } from '~/styles'
import { theme } from '~/theme'

type Props = {
    isCypressMode?: boolean
} & PropsWithChildren

export const Wrapper: React.FC<Props> = ({ isCypressMode = false, children }) => {
    const [fileContent, setFileContent] = useState('')
    const [fileType, setFileType] = useState('')

    const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event?.target?.files?.[0]

        if (!file) return

        const reader = new FileReader()
        const fileNameParts = file.name.split('.')

        setFileType(fileNameParts.pop())

        reader.readAsDataURL(file)

        reader.onload = () => setFileContent(reader.result as string)
    }

    const uploadFile = () => {
        if (!fileContent || !fileType) return

        axios.post(`${import.meta.env.VITE_API_URL}/upload-file`, {
            file: { content: fileContent, type: fileType },
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <div hidden data-cy={'wrapper'} />

            <StyledGlobal isCypressMode={isCypressMode as boolean} />

            {isCypressMode ? (
                children
            ) : (
                <StyledWrapper>
                    <header>
                        <h1>HarvTech</h1>
                    </header>
                    <main>
                        <input type={'file'} onChange={onChangeFile} accept='.jpg, .jpeg, .png' />
                        <Button text={'Upload file'} onClick={uploadFile} />
                        {children}
                    </main>
                    <footer>
                        <Link href={Routes.HOME} text={'Home'} />
                        <Link href={Routes.LOGIN} text={'Login'} />
                        <Link href={'https://github.com/tech-warriors-corporation'} text={'Tech Warriors'} />
                    </footer>
                </StyledWrapper>
            )}
        </ThemeProvider>
    )
}
