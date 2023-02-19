import React from 'react'

// Import components
import HomeContainer from '@/containers/home'

const getCat = async () => {
  const data = await fetch(
    `${process.env.CAT_BASE_URL}/images/search?limit=1&api_key=${process.env.CAT_API_KEY}`,
    { cache: 'no-store' },
  )

  return data.json()
}
async function HomePage() {
  const cat = await getCat()

  return <HomeContainer cat={cat[0]} />
}

export default HomePage
