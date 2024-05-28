import { QueryClient, QueryClientProvider } from "react-query"
import AddUser from './components/AddUser'
import UsersList from './components/UsersList'
import { useFetchAndUpdateUsers } from "./hook/fetchAndUpdateUsers"
const queryClient = new QueryClient()
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  )
}

const AppContent: React.FC = () => {
  useFetchAndUpdateUsers()
  return (
    <div className='container'>
      <div className='row' style={{ paddingTop: 50 }}>
        <div className='col-lg-3'>
          <AddUser />
        </div>
        <div className='col-lg-9'>
          <UsersList />
        </div>
      </div>
    </div>
  )
}

export default App