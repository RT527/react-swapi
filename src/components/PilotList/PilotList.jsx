import { getPilots } from "../../services/sw-api"
import { useState, useEffect } from "react"

const PilotList = (props) => {
  const [pilots, setPilots] = useState([])

  useEffect(() => {
    const fetchPilotList = async () => {
      const pilotData = await getPilots(props.pilotUrls).then((pilots) => pilots)
      setPilots(pilotData)
    }
    fetchPilotList()
  }, [])

  if (!pilots.length) return <h3>Loading...</h3>

  return (
    <div>
      <h1>Pilots</h1>
      <ul>
        {pilots.map((pilot) => (
          <li key={pilot.name}>{pilot.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default PilotList


