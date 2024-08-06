import { AutocompleteOptions } from '~components/Autocomplete/types'
import { ModelType } from '~enums/ModelType'

export const modelTypeAutocompleteOptions: AutocompleteOptions = [
    {
        value: ModelType.RICE_LEAF,
        text: 'Arroz',
        imageUrl: './images/rice.png',
    },
    {
        value: ModelType.POTATO_LEAF,
        text: 'Batata',
        imageUrl: './images/potato.png',
    },
    {
        value: ModelType.BEAN_LEAF,
        text: 'Feijão',
        imageUrl: './images/bean.png',
    },
    {
        value: ModelType.TOMATO_LEAF,
        text: 'Tomate',
        imageUrl: './images/tomato.webp',
    },
]
