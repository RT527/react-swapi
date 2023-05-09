import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllStarships } from "../../services/sw-api"

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData)
    }
    fetchStarshipList()
  }, [])

  if(!starshipList.results?.length) return <h1>Loading ⭐️🚢's...</h1>

  return (  
    <main>
      {starshipList.results.map((starship, idx) => 
        <div className="ship-container" key={idx}>
          <Link to={`/${starship.url.slice(32)}`}>
            {starship.name}
          </Link>
        </div>
      )}
    </main>
  )
}

export default StarshipList




