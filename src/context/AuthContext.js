'use client'
import React, { useEffect, useState, createContext, useContext } from 'react'
import { onAuthStateChanged, getAuth } from 'firebase/auth'
import { firebase_app } from '@/src/services/firebase/config'

// Import Loading component
import Loading from '@/components/loading'

const auth = getAuth(firebase_app)

export const AuthContext = createContext({})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user)
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center h-100">
          <Loading width={50} height={50} />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  )
}
