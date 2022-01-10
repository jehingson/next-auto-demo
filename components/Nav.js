
import { useSession, signOut } from 'next-auth/client'

export default function Nav() {
    const [session, loading] = useSession()
    console.log('ddd', session, loading)
    if (!session) return null
    return (
        <nav className="h-14 mx-auto max-w-4xl flex items-center justify-between px-5">
            <div className="flex items-center">
                <h3 className="text-md font-bold text-blue-400">Next Auth</h3>
            </div>
            <div className="flex items-center space-x-3">
                {session.user.image && <img className="rounded-full border-2" src={session.user.image} width={40} height={40} rounded-fill />}
                <h5 className="text-gray-300">{session.user.name}</h5>
                <button className="border-none p-1 bg-blue-600 rounded-md hover:opacity-80 text-white" onClick={() => signOut()}> Cerrar sesión </button>
            </div>

        </nav>
    )
}
