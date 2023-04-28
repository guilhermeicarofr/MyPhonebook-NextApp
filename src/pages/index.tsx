import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <h1>Index</h1>
      <h2>Go to login page <Link href='/login'>here</Link></h2>
    </main>
  )
}
