// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
// Alternatively you can use CommonJS syntax:
// require('./commands')
import { MemoryRouter } from 'react-router-dom'

import { mount } from 'cypress/react18'

import './commands'

import { Routes } from '~enums/Routes'
import { Page } from '~layouts/Page/Page'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
    namespace Cypress {
        interface Chainable {
            mount: typeof mount
        }
    }
}

Cypress.Commands.add('mount', (Component) => {
    mount(
        <MemoryRouter initialEntries={[Routes.HOME]}>
            <Page isCypressMode={true}>{Component}</Page>
        </MemoryRouter>,
    )
})

// Example use:
// cy.mount(<MyComponent />)
