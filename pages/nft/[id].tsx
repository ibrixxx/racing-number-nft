import React from 'react';

const CollectionPage = () => {
    return(
    <div className={'flex h-screen flex-col'}>
        <div className={'bg-gradient-to-br from-cyan-700 to-yellow-300'}>
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

        <div>

        </div>

    </div>
)
;
}

export default CollectionPage;
