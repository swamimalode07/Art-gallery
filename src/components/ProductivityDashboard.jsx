import React from 'react';
import { Instrument_Serif } from 'next/font/google'
import { Roboto_Condensed } from 'next/font/google'


const instrumentSerif = Instrument_Serif({
    weight: '400', // or '700' if you want bold
    subsets: ['latin'],
});
const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['400', '700']
})

const ProductivityDashboard = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="border-2 border-white p-4 w-[900px] max-w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-4 md:grid-rows-4 gap-2 m-4">
                    {/* Box 0 */}
                    <div className="bg-[#111111] rounded-md p-10 flex flex-col justify-between items-center
             col-start-1 row-start-1 row-span-3 
             md:col-start-1 md:row-start-1 md:col-span-2 md:row-span-3"
                    >
                        <div className="text-left -ml-14">
                            <p className={`text-lg font-bold instrument-serif text-[38px] ${instrumentSerif.className}`}>
                                Productivity Dashboard
                            </p>

                            <p className={`text-sm ${robotoCondensed.className}`}>
                                Track your progress, spot patterns, and stay on top of your goals.
                            </p>

                        </div>
                        <div className='flex center items-center align-bottom  ml-8'>
                            <img src="/img1.png" alt="" className=" object-contain" />
                        </div>

                    </div>


                    {/* Box 1 */}
                    <div className="bg-gray-300 rounded-md p-10 
                          col-start-1 row-start-4 
                          md:col-start-1 md:row-start-4 md:col-span-2 md:row-span-1">
                        1
                    </div>

                    {/* Box 2 */}
                    <div className="bg-gray-300 rounded-md p-10 
                          col-start-2 row-start-1 row-span-2 
                          md:col-start-3 md:row-start-1 md:col-span-1 md:row-span-2">
                        2
                    </div>

                    {/* Box 3 */}
                    <div className="bg-gray-300 rounded-md p-10 
                          col-start-2 row-start-3 row-span-2 
                          md:col-start-3 md:row-start-3 md:col-span-1 md:row-span-2">
                        3
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductivityDashboard;
