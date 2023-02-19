'use client'
import React, { useState, useTransition } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// Import styles
import styles from './styles.module.scss'
import OverviewFooter from './overview-footer'

// Import icons
import { FaCat } from 'react-icons/fa'
import Loading from '@/components/loading'

function CatOverview({ cat }) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [isFetching, setIsFetching] = useState(false)

  // isLoading
  const isMutating = isFetching || isPending

  const handleRandomClick = async () => {
    setIsFetching(true)

    startTransition(() => {
      router.refresh()
    })

    setIsFetching(false)
  }

  return (
    <>
      <div className={styles.catOverview}>
        <div className={styles.catPic}>
          <img width={cat.width} height={cat.height} src={cat.url} />
        </div>
        <OverviewFooter cat={cat} />
      </div>
      <div>
        <button
          className="btn btn-primary d-flex align-items-center mx-auto gap-05"
          title="Rastgele Kedi"
          onClick={handleRandomClick}
          disabled={isMutating}
        >
          {isMutating ? (
            <div>
              <Loading /> Yükleniyor
            </div>
          ) : (
            <>
              <FaCat /> Rastgele Kedi
            </>
          )}
        </button>
      </div>
    </>
  )
}

export default CatOverview
