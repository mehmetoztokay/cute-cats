'use client'
import React from 'react'

// Import components
import CatOverview from '@/components/home/cat-overvieww'

function HomeContainer({ cat }) {
  return (
    <div>
      <CatOverview cat={cat} />
    </div>
  )
}

export default HomeContainer
