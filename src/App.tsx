import React from 'react'

import { Link } from '~/components/Link'
import { Setup } from '~/Setup'

export const App: React.FC = () => (
    <Setup>
        <h1>HarvTech</h1>
        <Link href={'https://github.com/tech-warriors-corporation'} text={'Tech Warriors'} />
    </Setup>
)
