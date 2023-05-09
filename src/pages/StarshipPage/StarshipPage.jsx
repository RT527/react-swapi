import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { getStarship } from "../../services/sw-api"

const StarshipPage = () => {
  const [starship, setStarship] = useState(null)
  const { starshipId } = useParams()

  useEffect(() => {
    const fetchStarship = async () => {
      const data = await getStarship(starshipId)
      setStarship(data)
    }
    fetchStarship()
  }, [starshipId])

  return starship ? (
    <main className="starship-page">
      <div className="starship-info-container">
        <div className="starship-info-item">
          <h4 className="starship-info-label">NAME</h4>
          <p className="starship-info-value">{starship.name}</p>
        </div>
        <div className="starship-info-item">
          <h4 className="starship-info-label">MODEL</h4>
          <p className="starship-info-value">{starship.model}</p>
        </div>
        <div className="starship-info-item">
          <Link className="return-link" to="/">
            RETURN TO FLEET
          </Link>
        </div>
      </div>
    </main>
  ) : (
    <h1>Loading Starship Details...</h1>
  )
}

export default StarshipPage
