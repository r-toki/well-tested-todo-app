import { generatePath } from 'react-router-dom'

import TodosPage from '@/pages/todos'
import TodoPage from '@/pages/todos/[todoId]'

const routes = {
  '/': {
    url: () => generatePath('/todos'),
    Component: TodosPage,
  },
  '/todos': {
    url: () => generatePath('/todos'),
    Component: TodosPage,
  },
  '/todos/:todoId': {
    url: ({ todoId }: { todoId: string }) =>
      generatePath('/todos/:todoId', { todoId }),
    Component: TodoPage,
  },
}

export default routes
