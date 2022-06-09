import type { NextPage } from 'next'
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/Footer";
import Splash from "../components/Splash";
import Pricing from "../components/Pricing";

const Home: NextPage = () => {
  return (
    <div>
        <Navigation />
        <Splash />
        <Pricing />
        <div style={{height: '30vh'}}></div>
        <Footer />
    </div>
  )
}

export default Home
