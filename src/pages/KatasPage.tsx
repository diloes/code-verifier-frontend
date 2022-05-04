import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage'


const KatasPage = () => {

  const loggedIn = useSessionStorage('sessionToken')
  const navigate = useNavigate()

  useEffect(() => {
    if(!loggedIn){
      return navigate('/login')
    }
  }, [loggedIn])
  

  /**
   * Method to navigate to kata details
   * @param {string} id of kata to navigate
   */
  const navigateToKataDetail = ( id: number ) => {
    navigate(`/katas/${id}`)
  }

  return (
    <div>
      <h1>Katas Page</h1>
      <ul>
        <li onClick={ () => navigateToKataDetail(1) }>
          First Kata
        </li>
        <li onClick={ () => navigateToKataDetail(2) }>
          Second Kata
        </li>
      </ul>
    </div>
  )
}

export default KatasPage