import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../components/editor/Editor'
import { useSessionStorage } from '../hooks/useSessionStorage'


const KataDetailPage = () => {

  const loggedIn = useSessionStorage('sessionToken')
  const navigate = useNavigate()

  // Find id from params
  const { id } = useParams()

  useEffect(() => {
    if(!loggedIn){
      return navigate('/login')
    }
  }, [loggedIn])


  return (
    <div>
      <h1>Kata Detail Page: { id }</h1>
      <Editor />
    </div>
  )
}

export default KataDetailPage