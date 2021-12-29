import { getSession } from 'next-auth/client'
import Nav from '../components/Nav'

export default function Home({ session }) {
  return (
    <>
      <div className="border bg-slate-50">
        <Nav />
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  console.log('session', session)
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}