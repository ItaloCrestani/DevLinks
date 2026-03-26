import { BiLogOut } from "react-icons/bi"
import { Link } from "react-router"

import { auth } from "../../services/firebaseConnection"
import { signOut } from "firebase/auth"

export function Header() {

  async function handleLogout() {
    await signOut(auth);
  }

  return(
    <header className="w-full max-w-2xl mt-4 px-1">
      <nav className="w-full bg-white h-12 flex items-center justify-between rounded-md px-3">
        <div className="flex gap-2 font-medium ">
          <Link to="/" className="hover:bg-black/4 px-3 py-1 rounded-md transition duration-400 ease">
            Home
          </Link>

          <Link to="/admin" className="hover:bg-black/4 px-3 py-1 rounded-md transition duration-400 ease">
            Links
          </Link>

          <Link to="/admin/social" className="hover:bg-black/4 px-3 py-1 rounded-md transition duration-400 ease">
            Redes sociais
          </Link>
        </div>

        <button onClick={handleLogout} className="cursor-pointer text-[#db2629] hover:drop-shadow-[0_0_1px_rgba(220,38,38,0.5)] transition duration-300 ease">
          <BiLogOut size={28}/>
        </button>
      </nav>
    </header>
  )
}