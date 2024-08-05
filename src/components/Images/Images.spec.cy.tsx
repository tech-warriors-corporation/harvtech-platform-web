import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { array, object, string } from 'yup'

import { Images } from './Images'

const ImagesTest = () => {
    const name = 'images'
    const form = useForm({
        resolver: yupResolver(
            object({
                [name]: array()
                    .of(
                        object({
                            id: string().required(),
                            content: string().required(),
                            type: string().required(),
                        }).required(),
                    )
                    .min(1)
                    .required(),
            }).required(),
        ),
        defaultValues: { [name]: [] },
        mode: 'all',
    })

    return <Images name={name} form={form} isRequired={true} isDisabled={false} />
}

// TODO: add more tests
describe('<Images />', () => {
    const selector = '[data-cy="images"]'

    beforeEach(() => {
        cy.mount(<ImagesTest />)
    })

    it('Should render the component', () => {
        cy.get(selector).should('exist')
    })
})
