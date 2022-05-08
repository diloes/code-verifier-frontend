import { AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSessionStorage } from '../hooks/useSessionStorage'
import { getAllKatas } from '../services/kataService'
import { Kata } from '../utils/types/Kata.type'


const KatasPage = () => {

  const loggedIn = useSessionStorage('sessionToken')
  const navigate = useNavigate()
  // State of component:
  const [katas, setKatas] = useState([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    if(!loggedIn){
      return navigate('/login')
    }else {
      getAllKatas(loggedIn, 2, 1)
        .then((response: AxiosResponse) => {
          if(response.status === 200 
            && response.data.katas 
            && response.data.totalPages 
            && response.data.currentPage){
              console.table(response.data)
              let { katas, totalPages, currentPage } = response.data
              setKatas(katas)
              setTotalPages(totalPages)
              setCurrentPage(currentPage)
            }else {
              throw new Error(`Error obtaining katas: ${response.data}`)
            }
        }).catch(error => console.error(`[Get All Katas Error]: ${error}`))
    }
  }, [loggedIn, navigate])
  

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
      {
        katas.length > 0 ? 
        <div>
            {
              katas.map((kata: Kata) => (
                <div key={kata._id}>
                  <h3 onClick={() => navigateToKataDetail(kata._id)} >{kata.name}</h3>
                  <h4>{kata.description}</h4>
                  <h5>Creator: {kata.creator}</h5>
                  <p>Rating: {kata.stars}/5</p>
                </div>
              ))
            } 
        </div>
        :
        <div>
          <h5>No katas found</h5>
        </div>
      }
    </div>
  )
}

export default KatasPage

