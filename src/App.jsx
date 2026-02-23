import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import {useAppContext} from "../context/AppContext"
// import Header from '../components/Header';
// import Profile from '../components/Profile'
// import SearchBar from '../components/SearchBar'
// import { SearchProvider } from '../context/SearchContext'
import useUsers from './hooks/useUser'
import {showError,showInfo,showSuccess} from "./utils/toast";
import {Toaster} from "react-hot-toast";
import Shimmer from './components/Shimmer'

function App() {
  const [count, setCount] = useState(0)
  const {users,isLoading} = useUsers();
    // const users=useUsers();

  return (
    <>
    {/* <SearchProvider>
      <Header/>
      <Profile/>
      <SearchBar/>
      </SearchProvider> */}

        <div style={{padding: 40}}>
          <Toaster  position = "top-right"/>
            <h1>Axios Instance Demo</h1>
            <h3>User List:</h3>

            {isLoading? (<Shimmer/>):(<ul>
                {users.map((user)=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>)}

        </div>


    </>
  )
}

export default App
