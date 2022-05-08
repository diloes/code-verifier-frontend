import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Editor from '../components/editor/Editor'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { getKataByID } from '../services/kataService'
import { Kata } from '../utils/types/Kata.type'


const KataDetailPage = () => {

  const loggedIn = useSessionStorage('sessionToken')
  const navigate = useNavigate()

  // Find id from params
  const { id } = useParams()
  const [kata, setKata] = useState<Kata | undefined>(undefined)
  const [showSolution, setShowSolution] = useState(false)
  useEffect(() => {
    if(!loggedIn){
      return navigate('/login')
    }else {
      if(id){
        getKataByID(loggedIn, id)
        .then((response: AxiosResponse) => {
          if(response.status === 200 && response.data){
            let kataData: Kata = {
              _id: response.data._id,
              name: response.data.name,
              description: response.data.description,
              stars: response.data.stars,
              level: response.data.level,
              intents: response.data.intents,
              creator: response.data.creator,
              solution: response.data.solution,
              participants: response.data.participants
            }
            setKata(kataData)
            console.table(kataData)
            
          }
        }).catch(error => console.error(`[getKatabyID ERROR]: ${error}`))
      }else {
        return navigate('/katas')
      }
    }
  }, [loggedIn])


  return (
    <div>
      <h1>Kata Detail Page: { id }</h1>
      {
        kata ? 
          <div className='kata-data'>
            <h2>{kata?.description}</h2>
            <h3>Rating: {kata.stars}/5</h3>
            <button onClick={() => setShowSolution(!showSolution)}>
              {showSolution ? 'Show Solution' : 'Hide Solution'}
            </button>

      { showSolution ? null : <Editor>{ kata.solution }</Editor> }
          </div>
          :
          <div>
            <h2>Loading data...</h2>
          </div>
      }
    </div>
  )
}

export default KataDetailPage