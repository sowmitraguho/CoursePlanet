
import { RouterProvider } from 'react-router-dom'
import { Routes } from './Routers/Routes/Routes'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={Routes}></RouterProvider>
    </>
  )
}

export default App
