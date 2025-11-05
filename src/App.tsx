import { useQuery } from '@tanstack/react-query'
import getUsers from './api/user';

function App() {
  const { data, isPending, error } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(5),
  })


  if (isPending) return <span>Loading...</span>
  if (error) return <span>Oops!</span>
  console.log(data);
  return <ul>{data.name}</ul>
}

export default App