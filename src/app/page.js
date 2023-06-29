import Adbanner from '../../components/Adbanner'
import Hottopic from '../../components/Hottopic'
import Latestnews from '../../components/Latestnews'
import Mukhya from '../../components/Mukhya'
import Navbar from '../../components/Navbar'
import Topheader from '../../components/Topheader'
import './globals.css'

export default function Home() {
  return (
    <>
    <Topheader/>
    <Navbar/>
    <Hottopic/>
    <Adbanner/>
    <Latestnews/>
    <Adbanner/>
    <Mukhya/>
    </>
  )
}
