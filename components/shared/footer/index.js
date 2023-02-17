import React from 'react'
import Link from 'next/link'

// Import styles
import styles from './styles.module.scss'

function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://nextjs.org/docs" target="_blank">
        Made with ❤️ <strong>NextJS</strong>
      </Link>
    </div>
  )
}

export default Footer
