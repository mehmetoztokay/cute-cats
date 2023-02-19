'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/src/context/AuthContext'
import toast, { Toaster } from 'react-hot-toast'

import Input from '@/components/form/input'
import Loading from '@/components/loading'

import { login } from '@/src/services/firebase/auth'

function RegisterContainer() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // If user logged in
  const { user } = useAuthContext()
  const router = useRouter()
  if (user) return router.push('/profile')

  const handleLoginForm = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const user = await login(email, password)
      return router.push('/profile')
      setIsLoading(false)
    } catch (error) {
      toast.error(error?.message)
      setIsLoading(false)
    }
  }

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleLoginForm}>
        <Input
          label="E mail"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit" disabled={!email || !password}>
          {isLoading ? (
            <div>
              <Loading /> Giriş yap
            </div>
          ) : (
            <>Giriş yap</>
          )}
        </button>
      </form>
    </>
  )
}

export default RegisterContainer
