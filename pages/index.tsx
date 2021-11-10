import type { NextPage } from 'next'
import Navbar from '../components/navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar loggedIn={false}/>
    </>
  )
}

export default Home