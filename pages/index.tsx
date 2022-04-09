import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Racing Number Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={'text-red-400'}>ASDasda</h1>
      <a href={'http://localhost:3000/nft/rnc'}>See Collection</a>
    </div>
  )
}

export default Home
