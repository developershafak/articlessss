import React from 'react'

const Save = () => {
    return (
        <>
            <article className='flex flex-col h-auto w-full'>
                <div className="w-full h-auto ">
                    <header className=" text-black p-4 m-5">
                        <h1 className="text-[15px] ">✨Member-only story</h1>

                        <h1 className="text-4xl font-extrabold text-center "> At Skywalker Ranch We Were </h1>
                        <h1 className="text-xl font-semibold text-center  ">A Photoshoot with George Lucas & Yoda</h1>
                    </header>
                    <center>
                        <img
                            src="https://miro.medium.com/v2/resize:fit:3840/format:webp/1*C44Wg-1vd1TerVeCqu4MXw.jpeg"
                            alt="Article Cover"
                            className="w-full object-cover "
                        />
                    </center>
                    <div className="w-full  h-auto flex justify-center">
                        <h1 className="text-6xl font-semibold ">T</h1>
                        <div className="w-[50%] h-auto  text-[18px] font-[500] font-">
                            <h1 className='mb-[20px] p-[10px]'>he 1989 Mill Valley Film Festival, in association with the Hanson Gallery in neighboring Sausalito, installed an exhibition of my portraits, including movie directors, actors, and writers. I was billed as a “Featured Artist” along with director Tony Richardson and actor James Woods, who both made a public appearance with me on opening night. Those were heady days.
                                I even met the woman who would become my ex-wife at that auspicious event.</h1>
                            <p className='pb-[30px] mt-[20px]'>A week or so earlier, I was in the gallery with the staff, putting our heads together about how to hang the installation, when it dawned on us that I’d never photographed either Woods or Richardson. Unfortunately, they weren’t available to sit for portraits before the festival kicked off. But it might seem downright negligent to gallery visitors, we thought, that I’d never photographed one of the most illustrious cinemagicians of them all, a practically home-grown hero who lived and worked not so far, far away: George Lucas. Skywalker Ranch,
                                the Lucasfilm production facility, was a short drive from the gallery.</p>
                            <h1 className='mb-[20px] p-[10px]'>It usually takes the clout of a major magazine to get a famous face in front of a lens; none of that paparazzi stuff but a private, exclusive photo session. I had never been assigned to photograph Lucas. But I had photographed Francis Coppola, the godfather of Napa County, the county right next door. So it would be the right thing to do if I could round out the exhibition with a portrait of the biggest movie mogul in Marin County, too. But that put me in a bind because once the idea went up the flagpole, it was hard to miss an unspoken imperative; all eyes in the gallery were on me. Okay, okay.
                                No way to talk them out of it. I grabbed a telephone and called Information: 411.</h1>
                            <p className='pb-[30px] mt-[20px]'>The operator answered, “What listing, please?”</p>
                            <p className='pb-[30px] mt-[20px] opacity-70'>“Skywalker Ranch,” I said.</p>
                            <p className='pb-[30px] mt-[20px] opacity-50'>
                                I heard the rustle of pages turning. I half-hoped the number was unlisted. 
                                Oh! She found it. I thanked her, got a new dial tone, and tapped out the seven digits she gave me. 
                                I was still being stared at. A moment’s pause, silence on the line. Then, two rings. A receptionist picked up.
                                 “Skywalker Ranch,” she said.
                            </p>
                        </div>
                    </div>
                    <div className="w-full  h-auto flex justify-center ">
                        <div className="w-[50%] h-auto  text-[16px] font-[200] font-serif">
                            <h1 className='text-4xl font-extrabold text-center  mb-6 mt-10'>Create an account to read the full story.</h1>
                            <p>The author made this story available to Medium members only.
                                If you're new to Medium, create a new account to read this story on us.</p>

                            <div className="max-w-md mx-auto mt-8 p-6 rounded-md ">
                                <form >
                                    <input  className="w-full px-3 py-3 m-3 border rounded-md " type="text" placeholder='Signup With Google' />
                                    <input className="w-full px-3 py-2 m-3  border rounded-md  " type="text" placeholder='Signup With Facebook' />
                                    <input className="w-full px-3 py-2  m-3 border rounded-md  " type="text" placeholder='📧  Signup With Mail' />
                                    <h1 className='p-3'>Already have an account? Sign in</h1>
                                </form>
                            </div>
                        </div >
                    </div >

                    <div className="w-full  h-auto flex justify-center">
                        <div className="w-[50%] h-auto  text-[18px] font-[500] font-serif">
                            <img src="https://ryanholiday.medium.com/?source=post_page-----3cf185518568--------------------------------" alt="" className='rounded-full' />
                            <h1 className='text-2xl font-extrabold text-center  mb-6 mt-4'>Written by Ryan Holiday
                            </h1>
                        </div>
                    </div>
                </div >
            </article >
        </>
    )
}

export default Save