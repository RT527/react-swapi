import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getAllStarships } from "../../services/sw-api"

function StarshipList() {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    async function fetchStarships() {
      const data = await getAllStarships()
      setStarshipList(data.results)
    }
    fetchStarships()
  }, [])

  if (!starshipList.length) {
    return <h3>Loading your ships...</h3>
  }

  return (
    <main>
      <h1>You'll need a pilot</h1>
      <div className="starship-container">
        {starshipList.map((starship, index) => (
          <Link
            key={index}
            className="starship-card"
            to={`/starships/${starship.url.split("/")[5]}/`}
          >
            {starship.name}
          </Link>
        ))}
      </div>
    </main>
  )
}

export default StarshipList

