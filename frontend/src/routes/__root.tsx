import { createRootRoute } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import AppLayout from './AppLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <>
      <QueryClientProvider client={queryClient}>
        <AppLayout />
        {/* <TanStackRouterDevtools /> */}
      </QueryClientProvider>
    </>
  ),
})
