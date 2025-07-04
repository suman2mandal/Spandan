import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head><title>Contact | Spandan</title></Head>
      <main className="min-h-screen p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-700">Reach out for support, volunteering, or general queries.</p>
      </main>
    </>
  );
}