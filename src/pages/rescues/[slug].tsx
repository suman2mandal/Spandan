import { useRouter } from 'next/router'
import Head from 'next/head'

export default function RescueStory() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <>
      <Head>
        <title>Rescue: {slug} | Spandan</title>
      </Head>
      <main className="min-h-screen p-6">
        <h1 className="text-3xl font-bold capitalize">{slug?.toString().replace(/-/g, ' ')}</h1>
        <p className="mt-4 text-gray-600">
          This is a placeholder for the rescue story of {slug}.
        </p>
      </main>
    </>
  )
}
