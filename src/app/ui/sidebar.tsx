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

const musicMenu = [
  {
    name: "Create Playlist",
    href: "/",
    icon: MdPlaylistAdd
  }, {
    name: "Favourite",
    href: "/favourite",
    icon: MdFavorite
  }
]
const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`)

const Sidebar = () => {
  return (
    <div className="w-full h-[calc(100vh-100px)] px-1.5">
      <div className="py-5 h-full" >
        <div className="w-48 px-4 mb-4 ">
          <NextImage src="/lofi_light1.png" width={1440} height={2880} alt="Lofi Flow Logo" />
        </div>
        <div className="mb-2">
          {navMenu.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center "
              >
                <LinkIcon className="w-6 mr-4 " />
                <p>{link.name}</p>
              </Link>
            )
          })}
        </div>
        <div className="mb-5">
          {musicMenu.map((link) => {
            const LinkIcon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center">

                <LinkIcon className="w-6 mr-4" />
                <p>{link.name}</p>
              </Link>
            )
          })}
        </div>
        <div className="divider mb-0"></div>
        <div className="h-3/5 overflow-y-auto py-5 pt-1">
          <ul>

            {playlist.map((link) => (
              <li key={link}>
                {link}
              </li>
            )
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
