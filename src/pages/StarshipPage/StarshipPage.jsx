import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getStarship } from "../../services/sw-api"
import PilotList from "../../components/PilotList/PilotList"

const StarshipPage = () => {
  const [starshipDetails, setStarshipDetails] = useState([])
  const { starshipId } = useParams()
  const tableHeight = 40

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getStarship(starshipId)
      setStarshipDetails(starshipData)
    }
    fetchDetails()
  }, [starshipId])

  if(!starshipDetails.name) return <h1>Loading Starship Details...</h1>

  return ( 
    <main className="starship-detail-page">
      <div className="starship-info-card">
        <h4>NAME: {starshipDetails.name}</h4>
        <h4>MODEL: {starshipDetails.model}</h4>
        <PilotList pilotUrls={starshipDetails.pilots}/>
        <div className="btn-container">
          <div className="return-btn">
            <Link to={'/'}>RETURN</Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default StarshipPage