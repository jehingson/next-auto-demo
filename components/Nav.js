
import { useSession, signOut } from 'next-auth/client'
import Image from 'next/image'
import Logo from '../images/logo-sm.png'

export default function Nav() {
    const [session, loading] = useSession()
    console.log('ddd', session, loading)
    if (!session) return null
    return (
        <nav className="h-14 mx-auto max-w-4xl flex items-center justify-between px-5">
            <div className="flex items-center">
                <Image src={Logo} alt="logo" width={40} height={40} />
                <span>Next Auth</span>
            </div>
            <div className="flex items-center gap-4">
                <img className="rounded-full" src={session.user.image} width={40} height={40} rounded-fill />
                <h5>{session.user.name}</h5>
                <button className="border p-1 rounded-md border-orange-500 text-orange-500" onClick={() => signOut()}> Cerrar sesión </button>
            </div>

        </nav>
    )
}
