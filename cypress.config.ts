import { defineConfig } from 'cypress'
import dotenv from 'dotenv'
import path from 'path'

export default defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            const environmentVariables = dotenv.config({ path: path.resolve('./.env') }).parsed

            config.baseUrl = environmentVariables.VITE_BASE_URL

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
