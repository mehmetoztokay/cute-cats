'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/src/context/AuthContext'

// Import styles
import styles from './styles.module.scss'

// Import services
import { logout } from '@/src/services/firebase/auth'

// Import icons
import { IoLogoOctocat } from 'react-icons/io'

// Import components
import toast from 'react-hot-toast'
import Loading from '@/components/loading'

function Header() {
  const { user } = useAuthContext()
  const router = useRouter()

  const [isLoading, setIsLoading] = useState(false)

  const handleSignControl = async () => {
    if (user) {
      setIsLoading(true)
      try {
        const userLogout = await logout()
        setIsLoading(false)
        return router.push('/')
      } catch (error) {
        toast.error(error)
        router.push('/')
        setIsLoading(false)
      }
    } else {
      return router.push('/auth/login')
    }
  }

  return (
    <header>
      <div className={styles.header}>
        <Link href="/" className={styles.header_brand}>
          <IoLogoOctocat />
          CuteCats
        </Link>
        <div className={styles.header_navigation}>
          {user ? (
            <Link
              className="btn btn-primary btn-outline d-flex align-items-center"
              href="/profile"
            >
              Profil
            </Link>
          ) : (
            <Link
              className="btn btn-primary btn-outline d-flex align-items-center"
              href="/auth/register"
            >
              Kayıt ol
            </Link>
          )}
          <button
            onClick={handleSignControl}
            className="btn btn-primary d-flex align-items-center gap-05"
          >
            {user ? (
              <div>{isLoading && <Loading />} Çıkış yap</div>
            ) : (
              <>Giriş yap</>
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
