import { providers, getSession } from "next-auth/client"
import Router from "next/router"
import { useEffect } from "react"
import BtnLogin from "../components/BtnLogin"


const Login = ({ providers, session }) => {
    useEffect(() => {
        if (session) return Router.push('/')
    }, [session])

    if (session) return null

    return (
        <div className="
            flex 
            justify-center 
            items-center 
            min-h-screen
            ">
            <div className="
             w-screen  
             max-w-md
             border
             rounded-md
             shadow
             p-4
             text-gray-600
            ">
                <h2 className="text-center font-semibold  tracking-wider uppercase">Iniciar session</h2>
                <p className="text-center">next auth demo</p>
                <BtnLogin
                    provider={providers.google}
                    bgColor='#f2573f'
                />
                <BtnLogin
                    provider={providers.facebook}
                    bgColor='#0404be'
                />
                <BtnLogin
                    provider={providers.github}
                    bgColor='#444'
                />
            </div>
        </div>
    )
}

Login.getInitialProps = async (context) => {
    return {
        providers: await providers(context),
        session: await getSession(context)
    }
}


export default Login