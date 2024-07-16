import React, { useMemo } from 'react'

import { StyledCard, StyledContent, StyledLink, StyledList, StyledListItem, StyledStrong, StyledTitle } from './styles'

import { Routes } from '~enums/Routes'
import { useAccount } from '~hooks/useAccount'
import { Page, PageType } from '~layouts/Page'

export const PrivacyPolicyAndDataProcessing: React.FC = () => {
    const { accessToken } = useAccount()
    const hasNoAccessToken = useMemo(() => !accessToken, [accessToken])

    return (
        <Page title={'Política de privacidade e dados'} type={hasNoAccessToken ? PageType.UNLOGGED : PageType.LOGGED}>
            <StyledContent data-cy={'privacy-policy-and-data-processing'}>
                <StyledCard>
                    <StyledList data-cy={'privacy-policy-and-data-processing-list'}>
                        <StyledListItem isParent={true}>
                            <StyledTitle>Introdução</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    A HarvTech reconhece a importância da privacidade e proteção dos dados dos usuários
                                    de seus serviços e produtos todas as informações de cuidados passados pelo sistema
                                    são apenas recomendações.
                                </StyledListItem>
                                <StyledListItem>
                                    Esta política descreve como a HarvTech coleta, usa, armazena e protege os dados dos
                                    usuários, bem como os direitos dos usuários em relação aos seus dados pessoais.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>

                        <StyledListItem isParent={true}>
                            <StyledTitle>Coleta de dados</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    A HarvTech coleta dados pessoais dos usuários e dados corporativos, incluindo
                                    informações como nome, endereço de e-mail, e informações relacionadas{' '}
                                    <StyledStrong>à propriedade agrícola</StyledStrong> como as coordenadas dela.
                                </StyledListItem>
                                <StyledListItem>
                                    Além disso, a HarvTech pode coletar dados agrícolas específicos, como{' '}
                                    <StyledStrong>localização geográfica</StyledStrong>, imagens de{' '}
                                    <StyledStrong>plantações</StyledStrong> e informações sobre o{' '}
                                    <StyledStrong>solo e clima</StyledStrong>.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>

                        <StyledListItem isParent={true}>
                            <StyledTitle>Uso dos dados</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    Os dados coletados pela HarvTech são utilizados para fornecer e melhorar os serviços
                                    e produtos <StyledStrong>oferecidos aos usuários</StyledStrong>, incluindo a
                                    identificação de fungos, agressores e ervas daninhas nas plantações de arroz,
                                    batata, tomate e feijão.
                                </StyledListItem>
                                <StyledListItem>
                                    Além disso, os dados podem ser utilizados para gerar relatórios de boas práticas
                                    agrícolas e sugestões de melhorias para resolver problemas identificados nas
                                    plantações.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>

                        <StyledListItem isParent={true}>
                            <StyledTitle>Armazenamento e segurança dos dados</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    A HarvTech armazena os dados dos usuários em servidores seguros, protegidos por
                                    medidas técnicas e organizacionais adequadas, para garantir a{' '}
                                    <StyledStrong>segurança dos dados</StyledStrong> e os dados sensíveis são{' '}
                                    <StyledStrong>criptografados</StyledStrong>
                                    controle de acesso e armazenamento seguro.
                                </StyledListItem>
                                <StyledListItem>
                                    A HarvTech adota práticas de segurança da informação para proteger os dados contra
                                    acesso não autorizado, uso indevido, alteração ou destruição utilizamos tecnologias
                                    modernas para ter uma melhor uma garantia maior.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>

                        <StyledListItem isParent={true}>
                            <StyledTitle>Compartilhamento de dados</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    A HarvTech pode compartilhar os dados dos usuários com terceiros apenas quando
                                    necessário para fornecer os <StyledStrong>serviços contratados</StyledStrong> pelos
                                    usuários ou quando exigido por lei.
                                </StyledListItem>
                                <StyledListItem>
                                    Os dados dos usuários <StyledStrong>não serão vendidos</StyledStrong>, alugados ou
                                    compartilhados com terceiros para fins de marketing sem o consentimento expresso dos
                                    usuários.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>

                        <StyledListItem isParent={true}>
                            <StyledTitle>Direitos dos usuários</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    Os usuários têm o direito de acessar, corrigir, atualizar ou excluir seus dados{' '}
                                    <StyledStrong>pessoais</StyledStrong>a qualquer momento quando for solicitado.
                                </StyledListItem>
                                <StyledListItem>
                                    Os usuários podem exercer seus direitos entrando em contato com a HarvTech através
                                    dos
                                    <StyledStrong>canais de comunicação</StyledStrong> fornecidos pela empresa como
                                    e-mail ou WhatsApp.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>

                        <StyledListItem isParent={true}>
                            <StyledTitle>Consentimento</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    Ao utilizar os serviços e produtos da HarvTech, os usuários consentem com a coleta,
                                    uso, armazenamento e compartilhamento de seus{' '}
                                    <StyledStrong>dados pessoais</StyledStrong> conforme descrito nesta política.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>

                        <StyledListItem isParent={true}>
                            <StyledTitle>Alterações na política</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    A HarvTech reserva-se o direito de alterar esta política de privacidade e{' '}
                                    <StyledStrong>tratamento de dados</StyledStrong> a qualquer momento, mediante aviso
                                    prévio aos usuários.
                                </StyledListItem>
                                <StyledListItem>
                                    As alterações nesta política entrarão em vigor na data de sua publicação no
                                    ecossistema da HarvTech ou mediante aviso aos usuários, o que ocorrer primeiro.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>

                        <StyledListItem isParent={true}>
                            <StyledTitle>Contato</StyledTitle>
                            <StyledList>
                                <StyledListItem>
                                    Se os usuários tiverem dúvidas, preocupações ou solicitações relacionadas a esta
                                    política, podem entrar em contato com a <StyledStrong>HarvTech</StyledStrong>{' '}
                                    através dos canais de comunicação fornecidos pela empresa.
                                </StyledListItem>
                            </StyledList>
                        </StyledListItem>
                    </StyledList>
                </StyledCard>

                {hasNoAccessToken && <StyledLink href={Routes.HOME} text={'Ir para home'} />}
            </StyledContent>
        </Page>
    )
}
