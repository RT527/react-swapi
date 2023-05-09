const baseUrl = 'https://swapi.dev/api'

async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}

async function getStarship(starshipId) {
  const res = await fetch(`${baseUrl}/starships/${starshipId}`)
  return res.json()
}

async function getPilots(urls) {
  const promises = urls.map(url => fetch(url).then(res => res.json()))
  const pilotObjects = await Promise.all(promises)
  return pilotObjects
}

export {
  getAllStarships,
  getStarship,
  getPilots
}


