import Link from "next/link"
import Login from "./Login"
import Logged from "./Logged"
import {getServerSession} from 'next-auth/next'
import {authOptions} from "../../pages/api/auth/[...nextauth]"
import Image from "next/image"
import byteitImg from "../img/byteit.png"



export default async function Nav() {
  const session = await getServerSession(authOptions)

  const Example = () => (
    <div className="grid-element">
<Image
    src={byteitImg}
    width={100}
        height={100}
        className="object-contain"
    alt="ByteIt Logo"
/>

    </div>
  )
  return (
   <nav className="flex justify-between items-center py-8">
    <Link href="/">
   <Example/>
        
    </Link>

    <ul  className="flex items-center gap-6" >
        
        {!session?.user && <Login/>}
        {session?.user && <Logged image={session.user?.image || ""}/>}

    </ul>
   </nav>
  )
}

