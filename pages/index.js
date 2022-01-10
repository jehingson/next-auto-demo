import { getSession } from 'next-auth/client'
import Nav from '../components/Nav'
import TodoInput from '../components/TodoInput'

export default function Home({ session }) {
  return (
    <>
      <div className="border bg-gray-900">
        <Nav />
      </div>
      <main className="mx-auto max-w-4xl px-5">
        <TodoInput />
      </main>
    </>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context)
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