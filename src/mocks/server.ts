import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// This configures a request mocking server with the request handlers
export const server = setupServer(...handlers)
