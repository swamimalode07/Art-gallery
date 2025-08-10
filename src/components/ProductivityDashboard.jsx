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

                            <p className={`text-sm ${robotoCondensed.className} text-[15px] text-[#9B9B9B]`}>
                                Track your progress, sspot patterns, and stay on top of your goals.
                            </p>

                        </div>
                        <div className='flex center items-center align-bottom  ml-8'>
                            <img src="/img1.png" alt="" className=" object-contain" />
                        </div>

                    </div>


                    {/* Box 1 */}
                    <div className="relative bg-[#111111] rounded-md p-10 overflow-hidden
      col-start-1 row-start-4 
      md:col-start-1 md:row-start-4 md:col-span-2 md:row-span-1">


                        {/* Text */}
                        <div className='ml-4'>
                            <p className={`${instrumentSerif.className} text-[37px]`}>AI-Powered Suggestions</p>
                            <p className={`${robotoCondensed.className} text-[15px] text-[#9B9B9B]`}>Let AI prioritize what matters most.</p>
                        </div>

                        {/* SVG in top-right corner */}
                        <div className="absolute top-2 left-100 w-10 h-10">
                            <svg width="202" height="202" viewBox="0 0 202 202" fill="none" xmlns="http://www.w3.org/2000/svg" className='hover:animate-spin transition-transform duration-500 'style={{ animationDuration: '4s' }}>
                                <g filter="url(#filter0_d_92_18)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M77.5256 1.53469C69.9824 3.61467 62.7113 7.68082 56.514 13.2849C51.9022 17.4563 49.5068 20.7579 45.7993 28.0547L42.9109 33.7399L38.4179 35.1378C17.9127 41.5172 4.10551 59.9804 4.00216 81.16C3.96815 88.1467 4.31989 90.6407 6.146 96.3405C7.85273 101.669 9.95677 105.81 13.5538 110.921L16.4538 115.041L15.6315 117.894C15.1797 119.464 14.6719 124.193 14.5051 128.404C14.1591 137.095 15.387 143.452 18.8049 150.666C27.861 169.78 48.1178 181.096 69.0561 178.737L74.3407 178.142L77.24 180.866C81.4192 184.791 84.1317 186.62 89.845 189.364C101.11 194.774 117.203 195.603 128.842 191.038C141.877 185.925 151.889 176.614 156.857 164.983C157.793 162.792 158.734 160.826 158.948 160.614C159.162 160.403 161.592 159.477 164.348 158.556C179.696 153.43 190.952 142.074 195.854 126.77C197.68 121.07 198.032 118.576 197.998 111.59C197.948 101.433 194.736 91.7837 188.558 83.2336L185.633 79.1839L186.643 74.7996C188.082 68.5482 187.962 58.4323 186.374 52.3013C182.089 35.7559 170.125 23.0947 153.312 17.3118C142.938 14.0218 133.859 14.9905 127.424 15.3865L124.001 12.3968C119.685 8.62731 113.529 4.97196 107.74 2.73919C99.414 -0.470336 86.1487 -0.842917 77.5256 1.53469ZM98.5063 13.5702C103.781 14.6746 114.844 20.1569 113.791 21.1446C113.412 21.499 97.1558 30.8555 83.9905 38.2955C77.989 41.6871 72.58 45.08 71.9696 45.8357C70.9574 47.0903 70.8598 49.6483 70.8463 75.2617C70.838 92.0157 70.5928 103.314 70.2385 103.314C69.4458 103.314 56.0525 95.8264 54.625 94.5851C53.5935 93.6881 53.5037 91.7406 53.5242 70.7258C53.5499 44.4448 53.9921 40.4953 57.7516 32.9824C60.9102 26.6701 68.0689 19.5287 74.202 16.5707C81.8749 12.8703 90.2352 11.8383 98.5063 13.5702ZM146.277 28.8344C155.2 31.0748 163.58 36.7005 168.322 43.6346C172.424 49.6305 174.319 55.1788 174.674 62.2264C174.844 65.6048 174.813 68.8056 174.605 69.34C174.195 70.3949 171.767 69.0991 146.313 54.2393C139.286 50.137 132.642 46.6471 131.55 46.4836C129.402 46.1622 131.257 45.1859 97.256 64.534C87.9598 69.8243 80.233 74.1523 80.086 74.1523C79.939 74.1523 79.8183 69.9416 79.8183 64.7958C79.8183 55.956 79.8934 55.3925 81.1759 54.6013C81.9224 54.1411 91.2911 48.7981 101.995 42.7281C120.801 32.0631 125.57 29.6871 130.469 28.5403C134.238 27.6585 142.182 27.8062 146.277 28.8344ZM41.3063 72.2149V96.2695L42.7505 97.8265C43.5445 98.6823 48.094 101.593 52.8599 104.295C85.0181 122.525 91.0324 126.043 90.8816 126.535C90.6807 127.189 76.0904 135.645 75.1622 135.645C74.8111 135.645 66.4001 131.028 56.471 125.384C46.5413 119.74 37.1643 114.424 35.6328 113.57C31.5685 111.305 25.3982 105.446 22.6215 101.216C18.5783 95.0568 17.2439 90.2286 17.2445 81.7597C17.2452 70.9001 19.9712 64.2151 27.4515 56.7276C31.0344 53.1413 38.5809 48.1933 40.5039 48.1699C41.1317 48.1623 41.3063 53.3886 41.3063 72.2149ZM128.939 59.179C129.635 59.6602 137.426 64.1201 146.252 69.0889C167.588 81.1023 171.608 83.7154 175.812 88.3039C186.027 99.4519 188.026 115.852 180.823 129.391C177.294 136.023 169.958 142.881 163.575 145.515L161.336 146.44L161.333 122.816C161.331 100.822 161.248 99.0621 160.128 97.2914C159.358 96.0749 156.41 93.981 151.946 91.4807C140.509 85.0746 112.969 69.2227 111.655 68.2895C110.535 67.4939 111.087 67.0521 118.395 62.894C122.772 60.4032 126.65 58.3511 127.013 58.3346C127.376 58.3175 128.243 58.6972 128.939 59.179ZM111.591 78.801L121.861 84.6923L122.024 97.0144L122.186 109.336L111.772 115.286L101.359 121.236L97.3137 119.09C95.0884 117.909 90.3142 115.222 86.7037 113.117L80.1393 109.291L79.9653 97.1469L79.7907 85.0023L84.4584 82.3042C87.0252 80.8202 91.7231 78.0936 94.8977 76.245C98.0731 74.397 100.817 72.8901 100.995 72.8971C101.175 72.904 105.942 75.5609 111.591 78.801ZM139.565 94.8108C143.736 97.107 147.474 99.3721 147.87 99.8431C148.385 100.456 148.523 107.9 148.353 125.939C148.127 150.092 148.055 151.362 146.671 155.477C140.347 174.28 121.623 184.803 102.438 180.335C98.2323 179.356 92.1454 176.602 89.4875 174.477L87.9277 173.23L89.4894 172.269C91.8219 170.834 109.742 160.576 119.614 155.025C124.38 152.345 128.929 149.44 129.724 148.569L131.168 146.985V118.81C131.168 103.314 131.351 90.635 131.573 90.635C131.797 90.635 135.393 92.514 139.565 94.8108ZM121.712 138.898C120.388 140.206 79.3016 163.008 76.0962 164.214C71.537 165.93 62.1625 166.551 56.7393 165.497C44.3333 163.086 33.9947 154.257 29.3014 142.063C27.4515 137.257 26.3231 124.234 27.7564 124.234C28.5023 124.234 33.3054 126.913 57.1322 140.618C64.6459 144.94 70.1107 147.69 71.1833 147.69C72.9215 147.69 75.4697 146.313 106.777 128.451L121.861 119.845L122.039 129.123C122.137 134.225 121.99 138.624 121.712 138.898Z" fill="#FBFBFB" fillOpacity="0.82" shapeRendering="crispEdges" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_92_18" x="0" y="0" width="202" height="202" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="4" />
                                        <feGaussianBlur stdDeviation="2" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_92_18" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_92_18" result="shape" />
                                    </filter>
                                </defs>
                            </svg>

                        </div>

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
