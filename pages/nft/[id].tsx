import React from 'react';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";
import Link from "next/link";

const CollectionPage = () => {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    return(
    <div className={'flex h-screen flex-col lg:grid lg:grid-cols-10 '}>

        <div className={'bg-gradient-to-br from-cyan-700 to-yellow-300 lg:col-span-4'}>
            <div className={'flex flex-col items-center justify-center py-3 lg:min-h-screen'}>

                <div className={'bg-gradient-to-br from-purple-600 to-orange-500 p-2 rounded-full'}>
                    <img
                        className={'w-44 rounded-full object-cover lg:h-96 lg:w-96'}
                        src={'https://lh3.googleusercontent.com/gICBQfNYd7154Fim1fCbluJ7Qf0-Ru90sq0g9VTdV1kUfx90-WhDeqD478meUQubeFw5HHalRb05kxAPFMajkXeFAH1XZwrqV7xOFg=w600'}
                        alt={'NFT Racing Number #99 '}
                    />
                </div>

                <div className={'text-center p-5 space-y-2'}>
                    <h1 className={'text-4xl text-white font-bold hFont'}>Racing Number Club</h1>
                    <h2 className={'text-xl text-gray-200 pFont'}>NFT collection of unique racing numbers inspired by motorsport legends</h2>
                </div>

            </div>
        </div>

        <div className={'flex flex-1 flex-col p-12 col-span-6 bg-gray-700 rightSide'}>

            <header className={`flex items-center ${address?  'justify-between':'justify-end'} mb-6`}>
                {address && <p className={'text-sm text-yellow-200 font-bold italic mr-1'}>connected with <span className={'font-extrabold underline cursor-pointer'}>{address.substring(0,5)+'...'+address.substring(address.length-4)}</span></p>}

                <button onClick={() => (address? disconnect() : connectWithMetamask())}
                        className={`rounded-full buttonConnectFont shadow-md shadow-amber-200 ${address? 'bg-red-500':'bg-amber-500'} text-gray-200 text-xs px-4 py-2 lg:px-5 lg:py-2 lg:text-base`}
                >
                    {address? 'Disconnect':'Connect Wallet'}
                </button>
            </header>

            <div className={'flex flex-1 flex-col items-center text-center space-y-0 justify-center mb-6'}>
                <img className={'object-cover w-80 pb-10 h-40'} src='https://pbs.twimg.com/media/FPsdFARXEAAgkID?format=jpg&name=900x900' />
                <h1 className={'text-3xl font-bold lg:text-5xl lg:font-extrabold text-white'}>Racing Number Club NFT Collection Mint</h1>
                {/*<p className={'py-2 text-xl text-green-300 claimedFont'}>4 / 1999 Free NFT's claimed</p>*/}
                <p className={'py-2 text-xl text-green-300 claimedFont'}>FREE NFT MINT Coming soon</p>
            </div>

            <Link href={'https://opensea.io/collection/racing-number-club'}>
                <button className={'rounded-full shadow-lg shadow-red-400 h-16 w-full bg-emerald-400 text-white font-bold'}>VIEW COLLECTION</button>
            </Link>

        </div>

    </div>
    )
}

export default CollectionPage;
