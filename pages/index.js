import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
          <title>Bone List | Home</title>
          <meta name="keywords" content="bone" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p  className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sequi harum laborum itaque culpa nihil? Quod fugit, facere eum tenetur vel, ipsum sed eius ut hic veniam repudiandae accusantium officiis perferendis, quis earum sequi ullam mollitia ducimus. Facere corporis officia minima iusto et praesentium maiores eum, nihil reprehenderit iste, laboriosam veniam rem amet, veritatis quas incidunt optio quod dolorum excepturi suscipit eius labore animi. Accusamus fuga autem quia accusantium itaque esse reiciendis. Ex optio quos eum, excepturi, cumque itaque assumenda suscipit iusto corrupti nam aperiam in sequi tempore nostrum animi. Vel necessitatibus sequi ex aut placeat pariatur soluta consequatur ipsam.</p>
        <p  className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea sequi harum laborum itaque culpa nihil? Quod fugit, facere eum tenetur vel, ipsum sed eius ut hic veniam repudiandae accusantium officiis perferendis, quis earum sequi ullam mollitia ducimus. Facere corporis officia minima iusto et praesentium maiores eum, nihil reprehenderit iste, laboriosam veniam rem amet, veritatis quas incidunt optio quod dolorum excepturi suscipit eius labore animi. Accusamus fuga autem quia accusantium itaque esse reiciendis. Ex optio quos eum, excepturi, cumque itaque assumenda suscipit iusto corrupti nam aperiam in sequi tempore nostrum animi. Vel necessitatibus sequi ex aut placeat pariatur soluta consequatur ipsam.</p>
        <Link href="/bone" className={styles.btn}>Lihat Daftar</Link>
      </div>
    </>
  )
}
