import React from 'react'

// Import styles
import styles from '../styles.module.scss'

function OverviewFooter({ cat }) {
  return (
    <>
      <p className={styles.overviewFooter}>
        <small>#{cat.id}</small>
      </p>
    </>
  )
}

export default OverviewFooter
