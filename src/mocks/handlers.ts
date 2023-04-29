import { rest } from 'msw'

export const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          name: 'Bruce Wayne',
        },
        {
          name: 'Clark Kent',
        },
        {
          name: 'Princess Diana',
        },
      ])
    )
  ),
]
