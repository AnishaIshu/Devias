import Image from 'next/image'
import Overveiw from './components/Overveiw'
import SideBar from './components/SideBar'

export default function Home() {
  return (
    <main>
      <Overveiw />
      <SideBar />
    </main>
  )
}
