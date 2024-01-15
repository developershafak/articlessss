import React from 'react'

const Abe = () => {
    return (
        <>
            <article className='flex flex-col h-auto w-full'>
                <div className="w-full h-auto ">
                    <header className=" text-black p-4 m-5">
                        <h1 className="text-[15px] ">✨Member-only story</h1>
                        <h1 className="text-4xl font-extrabold text-center ">At 40 He Told Me I Was Too Old, And </h1>
                        <h1 className="text-4xl font-extrabold  text-center ">I Agreed</h1>
                        <h1 className="text-xl font-semibold text-center ">Are there age limits for certain things?</h1>
                    </header>
                    <center>
                        <img
                            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*iokjTUKJx_PsCi1qyGz9VQ.jpeg"
                            alt="Article Cover"
                            className="w-[700px] h-[468px] object-cover "
                        />
                    </center>
                    <div className="w-full  h-auto flex justify-center">
                        <div className="w-[50%] h-auto  text-[18px] font-[500] font-serif">
                            <h1 className='mb-[20px] p-[10px] text-center'>Image by .shock on Adobe Stock Images</h1>
                            <h1 className='mb-[20px] p-[10px] '>“But you’re 40, right? Is there a point at your age?”</h1>
                            <p className='pb-[30px] mt-[20px]'>I examine his face in the light of the beach bonfire. My 20-something conversation partner isn’t trying to be rude; his open expression and kind eyes show genuine curiosity.</p>
                            <h1 className='mb-[20px] p-[10px]'>I’m completely offended.</h1>
                            <p className='pb-[30px] mt-[20px]'>I tuck my jacket tight against the cold winter air, cross my arms over my chest, break eye contact, and stare out to sea.</p>
                            <p className='pb-[30px] mt-[20px]'>And then I wonder if he’s right.</p>
                            <p className='pb-[30px] mt-[20px]'>After a tough decade — and a particularly hard year with a divorce — tired is my predominant adjective. Tired and lost.</p>
                            <p className='pb-[30px] mt-[20px]'>Lost at sea, I think. The seas here aren’t kind. No gentle waves or golden sand. It’s harsh, grey, like the reality of his comments.</p>
                            <p className='pb-[30px] mt-[20px]'>Maybe my old dreams are just that, dreams. I’d had my shot and taken the wrong path. I was starting over in every area of my life—finances, health…love. Wasn’t it too much to expect to restart my education, too?</p>
                            <p className='pb-[30px] mt-[20px]'>I’d always planned on getting my master’s degree at some point, but I’d put it off for so long. Too long?</p>
                            <p className='pb-[30px] mt-[20px]'>“You’ll be a good teacher,” everyone, especially my school careers counselor, told me as I was finishing up my high school years. But groups never suited me. I was drawn to the quiet reflection of one-on-one work—Psychology, therapy, psychological assessment.</p>
                            <p className='pb-[30px] mt-[20px]'>When I mentioned that to the careers counselor at 18, she shook her head and cut me off. “You’re too young. Get some experience teaching or nursing first.” Such out-of-date advice, even 27 years ago, but instead of trusting myself, I relied on other people’s wisdom. Making my own decisions never came easy for me. So, teaching it was.</p>
                            <p className='pb-[30px] mt-[20px] opacity-70'>In 1953, Eisenhower was entering the White House as the newly inaugurated president, having just returned from his parade. As he walked into the Executive Mansion, his chief usher
                                handed Eisenhower two letters marked “Confidential and Secret” that had been sent to him earlier in the day.</p>
                            <p className='pb-[30px] mt-[20px] opacity-80'>My love of learning flourished when I got to my final years of university. Unlike many of my schoolteachers, my university lecturers were passionate about their topics. They answered questions.They were inspiring.
                            </p>
                            <p className='pb-[30px] mt-[20px] opacity-40'> With my degree tucked under my arm, I enrolled and was accepted into a master’s program. I couldn’t imagine anything more exciting than continuing my tertiary education, but at the last minute a teaching position came up and…
                            </p>
                        </div>
                    </div>
                    <div className="w-full  h-auto flex justify-center">
                        <div className="w-[50%] h-auto  text-[16px] font-[200] font-serif">
                            <h1 className='text-4xl font-extrabold text-center  mb-6 mt-4'>Create an account to read the full story.</h1>
                            <p className='text-center justify-center m-2 p-2'>The author made this story available to Medium members only.
                                <br />
                                If you're new to Medium, create a new account to read this story on us.</p>

                            <div className="max-w-md mx-auto mt-5 p-6 rounded-md ">
                                <form >
                                    <input className="w-full px-3 py-3 m-3 border rounded-md " type="text" placeholder='Signup With Google' />
                                    <input className="w-full px-3 py-2 m-3  border rounded-md  " type="text" placeholder='Signup With Facebook' />
                                    <input className="w-full px-3 py-2  m-3 border rounded-md  " type="text" placeholder='Signup With Mail' />
                                    <h1 className='p-3'>Already have an account? Sign in</h1>
                                </form>
                            </div>
                        </div >
                    </div >

                    <div className="w-full  h-auto flex justify-center">
                        <div className="w-[50%] h-auto  text-[18px] font-[500] font-serif">
                            <h1 className='text-2xl font-extrabold text-center  mb-6 mt-4'>Written by Ryan Holiday
                            </h1>
                        </div>
                    </div>
                </div >
            </article >
            </>
    )
}

export default Abe