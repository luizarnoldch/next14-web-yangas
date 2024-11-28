import About from './(components)/About'
import Contact from './(components)/contact/Contact'
import FamiliaCarousel from './(components)/FamiliaCarousel'
import GaleriaCarousel from './(components)/GaleriaCarousel'
import PlacesCousel from './(components)/PlacesCarousel'

export default function Home() {
  return (
    <main className="">
      <Contact />
      <PlacesCousel />
      <About />
      <GaleriaCarousel />
      <FamiliaCarousel />
    </main>
  )
}
