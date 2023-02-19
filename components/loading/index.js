import React from 'react'

// Import styles
import styles from './styles.module.scss'

function Loading({ width = 15, height = 15 }) {
  return <div className={styles.loading} style={{ width, height }}></div>
}

export default Loading
