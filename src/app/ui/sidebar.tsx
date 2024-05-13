import { MdHome, MdSearch, MdLibraryMusic, MdPlaylistAdd, MdFavorite } from "react-icons/md"
import NextImage from 'next/image'
import Link from 'next/link'


const navMenu = [
  {
    name: "Home",
    href: "/",
    icon: MdHome
  },
  {
    name: "Search",
    href: "/search",
    icon: MdSearch
  },
  {
    name: "Your Library",
    href: "/library",
    icon: MdLibraryMusic
  }
]
const Sidebar = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] px-1.5">
      <div className="py-5 " >
        <div className="w-48 px-5 mb-5 ">
          <NextImage src="/lofi_light.png" width={1440} height={2880} alt="Lofi Flow Logo" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
