import { defineConfig } from 'cypress'
import dotenv from 'dotenv'
import path from 'path'

export default defineConfig({
    e2e: {
        setupNodeEvents(_, config) {
            const environmentVariables = dotenv.config({ path: path.resolve('./.env') }).parsed

            if (environmentVariables) config.baseUrl = environmentVariables.VITE_BASE_URL

            return config
        },
    },
    component: {
        devServer: {
            framework: 'react',
            bundler: 'vite',
        },
    },
})
