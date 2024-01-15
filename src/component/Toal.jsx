import React from 'react'

const Toal = () => {
    return (
        <>
            <article className='flex flex-col h-auto w-full'>
                <div className="w-full h-auto ">
                    <header className=" text-black p-2 m-3">
                        <h1 className="text-[15px] ">✨Member-only story</h1>
                        <h1 className="text-4xl font-extrabold text-center "> How I Won Singapore’s GPT-4
                        </h1>
                        <h1 className="text-4xl font-extrabold text-center p-1"> Prompt  Engineering Competition
                        </h1>
                        <h1 className="text-xl font-semibold text-center  p-2 ">A deep dive into the strategies I learned for harnessing the power of</h1>
                        <h1 className="text-xl font-semibold text-center   "> Large Language Models</h1>
                    </header>
                    <center>
                        <img
                            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*RAI4cBXe1_zaxVykHz79oA.jpeg"
                            alt="Article Cover"
                            className="w-700 h-700 object-cover "
                        />
                    </center>
                    <div className="w-full  h-auto flex justify-center">
                        <div className="w-[50%] h-auto  text-[18px] font-[500] font-source-serif-pro, Georgia, Cambria">
                            <p className='pb-[30px] mt-[20px]'>Last month, I had the incredible honor of winning Singapore’s first ever GPT-4 Prompt Engineering competition, which brought together over 400 prompt-ly brilliant participants, organised by the Government Technology Agency of Singapore (GovTech).</p>
                            <p className='pb-[30px] mt-[20px]'>Prompt engineering is a discipline that blends both art and science — it is as much technical understanding as it is of creativity and strategic thinking. This is a compilation of the prompt engineering strategies I learned along the way, that push any LLM to do exactly what you need and more!</p>
                            <h1 className='mb-[10px] p-[10px]'>Author’s Note:.</h1>
                            <p className='pb-[30px] mt-[20px] '>
                                In writing this, I sought to steer away from the traditional prompt engineering techniques that
                                have already been extensively discussed and documented online. Instead, my aim is to bring fresh insights that I learned through experimentation, and a different, personal take in understanding and approaching certain techniques.
                                I hope you’ll enjoy reading this piece!

                            </p>
                            <p className='pb-[30px] mt-[20px] '>
                                This article covers the following, with 🔵 referring to beginner-friendly prompting techniques while 🔴 refers to advanced strategies:
                            </p>
                            <p className='pb-[30px] mt-[20px] '> 1. [🔵] Structuring prompts using the CO-STAR framework</p>

                            <p className='pb-[30px] mt-[20px] '>     2. [🔵] Sectioning prompts using delimiters</p>

                            <p className='pb-[30px] mt-[20px] '>  3. [🔴] Creating system prompts with LLM guardrails</p>

                            <p className='pb-[30px] mt-[20px] '>   4. [🔴] Analyzing datasets using only LLMs, without plugins or code —
                                With a hands-on example of analyzing a real-world Kaggle dataset using</p>

                            <p className='pb-[5px] mt-[5px] '>  With a hands-on example of analyzing a real-world Kaggle dataset using GPT-4</p>
                            <h1 className='mb-[20px] p-[10px] opacity-50 font-extrabold text-3xl'>1. [🔵] Structuring Prompts using the CO-STAR framework</h1>
                            <p className='pb-[30px] mt-[20px] opacity-50'>
                                Effective prompt structuring is crucial for eliciting optimal responses from an LLM. The CO-STAR framework, a brainchild of GovTech Singapore’s Data Science & AI team, is a handy template for structuring prompts. It considers all the key aspects that influence the effectiveness and relevance of an LLM’s response, leading to more optimal responses.

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
                                    <input className="w-full px-3 py-3 m-3 border rounded-md " type="text" placeholder='Signup With Google' />
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

export default Toal
