'use client'
import React, { useEffect } from 'react'
import { useAuthContext } from '@/src/context/AuthContext'
import { useRouter } from 'next/navigation'

function Page() {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user == null) router.push('/auth/login')
  }, [user])

  return <h1>Profil sayfasina hos geldin</h1>
}

export default Page
