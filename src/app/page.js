import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '../Components/Navbar/page'
import Intro from '@/Components/Introduction/page'
import About from '@/Components/About/page'
import Footer from '@/Components/Footer/Footer'
import Contact from '@/Components/Contact/page'
import Portfolio from '@/Components/Portfolio/page'

export default function Home() {
  return (
    <main className={styles.main}>
       <NavBar/>
       <Intro />
      <div className={styles.description}>
        <About/>
        <Portfolio/>
        <Contact/>
      </div>
        <Footer/>
    </main>
  )
}
