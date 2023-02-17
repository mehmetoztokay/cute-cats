import React from 'react'
import Link from 'next/link'

// Import styles
import styles from './styles.module.scss'

// Import icons
import { IoLogoOctocat } from 'react-icons/io'

function Header() {
  return (
    <header>
      <div className={styles.header}>
        <Link href="/" className={styles.header_brand}>
          <IoLogoOctocat />
          CuteCats
        </Link>
        <div className={styles.header_navigation}>
          <Link href="/">Çıkış yap</Link>
          <Link
            href="/"
            className="btn btn-primary d-flex align-items-center gap-05"
          >
            Giriş yap
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
