import { useRouter } from 'next/router'
import Head from 'next/head'

export default function AnimalProfile() {
  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>Adopt {id} | Spandan</title>
      </Head>
      <main className="min-h-screen p-6">
        <h1 className="text-3xl font-bold">Adopt {id}</h1>
        <p className="mt-4 text-gray-600">
          Detailed profile for the animal named {id}. Include photo, breed, age, health, vaccination status, etc.
        </p>
      </main>
    </>
  )
}
