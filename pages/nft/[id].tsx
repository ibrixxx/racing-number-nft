import React from 'react';
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

const CollectionPage = () => {
    const connectWithMetamask = useMetamask();
    const address = useAddress();
    const disconnect = useDisconnect();

    return(
    <div className={'flex h-screen flex-col lg:grid lg:grid-cols-10 '}>

        <div className={'bg-gradient-to-br from-cyan-700 to-yellow-300 lg:col-span-4'}>
            <div className={'flex flex-col items-center justify-center py-3 lg:min-h-screen'}>

                <div className={'bg-gradient-to-br from-purple-600 to-orange-500 p-2 rounded-xl'}>
                    <img
                        className={'w-44 rounded-xl object-cover lg:h-96 lg:w-96'}
                        src={'https://lh3.googleusercontent.com/gICBQfNYd7154Fim1fCbluJ7Qf0-Ru90sq0g9VTdV1kUfx90-WhDeqD478meUQubeFw5HHalRb05kxAPFMajkXeFAH1XZwrqV7xOFg=w600'}
                        alt={'NFT Racing Number #99 '}
                    />
                </div>

                <div className={'text-center p-5 space-y-2'}>
                    <h1 className={'text-4xl text-white font-bold'}>Racing Number Club</h1>
                    <h2 className={'text-xl text-gray-300 '}>A NFT collection of unique racing numbers inspired by motorsport legends</h2>
                </div>

            </div>
        </div>

        <div className={'flex flex-1 flex-col p-12 col-span-6'}>

            <header className={'flex items-center justify-between'}>
                <h1 className={'w-52 cursor-pointer text-xl font-extralight sm:w-80'}>
                    {' '}<span className={'font-extrabold underline decoration-amber-500/50'}>Racing Number Club</span> NFT Collection Market Place
                </h1>
                <button onClick={() => (address? disconnect() : connectWithMetamask())}
                        className={`rounded-full ${address? 'bg-red-700':'bg-amber-500'} text-gray-300 text-xs px-4 py-2 lg:px-5 lg:py-2 lg:text-base`}
                >
                    {address? 'Disconnect':'Sign in'}
                </button>
            </header>
            <hr className={'my-2 border'}/>

            {address && <p className={'text-sm text-center text-yellow-200'}>You're logged in with <span className={'font-bold underline '}>{address.substring(0,5)+'...'+address.substring(address.length-5)}</span></p>}

            <div className={'flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'}>
                <img className={'object-cover w-80 pb-10 lg:h-40'} src='https://pbs.twimg.com/media/FPsdFARXEAAgkID?format=jpg&name=900x900' />
                <h1 className={'text-3xl font-bold lg:text-5xl lg:font-extrabold'}>Racing Number Club NFT Collection Mint</h1>
                <p className={'py-2 text-xl text-green-300'}>4 / 1999 Free NFT's claimed</p>
            </div>

            <button className={'rounded-full h-16 w-full bg-emerald-400 text-white font-bold'}>MINT FREE NFT</button>

        </div>

    </div>
    )
}

export default CollectionPage;
