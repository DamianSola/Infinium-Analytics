import Image from 'next/image'
import styles from './page.module.css'
import NavBar from '../Components/Navbar'
import Intro from '@/Components/Introduction'
import About from '@/Components/About'
import Footer from '@/Components/Footer/Footer'
import Contact from '@/Components/Contact'
import Portfolio from '@/Components/Portfolio'

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
