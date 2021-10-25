import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/collection/animal"><a>Klikk meg</a></Link>
    </div>
  )
}
