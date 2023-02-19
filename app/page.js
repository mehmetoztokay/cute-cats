import React from 'react'
import axios from 'axios'

// Import components
import HomeContainer from '@/containers/home'

const getCat = async () => {
  const { data: cat } = await axios
    .get(
      `${process.env.CAT_BASE_URL}/images/search?limit=1&api_key=${process.env.CAT_API_KEY}`,
    )
    .catch((err) => console.log(err))
  return cat[0]
}
async function HomePage() {
  const cat = await getCat()

  return <HomeContainer cat={cat} />
}

export default HomePage
