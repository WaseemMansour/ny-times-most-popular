import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import NyTimesLogo from './assets/new-york-times-logo.svg';
import Router from './router';

const queryClient = new QueryClient()

function App() {

  return (
    <div>
        <h1>
        <img
            src={NyTimesLogo}
            alt="The New York Times Logo"
            width={50}
            height={40}
          />
          NY Times
        </h1>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  )
}

export default App
