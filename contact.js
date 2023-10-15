import React from 'react';
import Twitter from "../resources/twitter-svgrepo-com.svg";
import Facebook from "../resources/facebook-1-svgrepo-com.svg";
import LinkedIn from "../resources/linkedin-1-svgrepo-com.svg";
import Instagram from "../resources/instagram-1-svgrepo-com.svg";

function contact(){
    return(
        <>
        <div className='flex mx-20'>
            <div className='m-[115px]'>
                <h1 className='font-bold text-7xl text-zinc-800 '>Contact.</h1>
                <p class="mt-5  mb-5 text-2xl text-neutral-400">Get in touch with me via social media or email.</p>

                <div className='flex' >
                    <div className="flex items-center mt-10 mr-20">
                        <img src={Twitter} className="w-auto h-[3.5rem] mr-3" />
                        <p className='text-xl font-bold text-sky-500/75'>Twitter</p>
                    </div>
                    
                    <div className="flex items-center mt-10 ml-20">
                        <img src={Facebook} className="w-auto h-[3.5rem] mr-3"></img>
                        <p className="text-xl font-bold text-blue-800/75">Facebook</p>
                    </div>
                    
                </div>
                
                <div className='flex mb-2'>
                    <div className="flex items-center mt-10 mr-16">
                        <img src={LinkedIn} className="w-auto h-[3.5rem] mr-3"></img>
                        <p className='text-xl font-bold text-blue-500/75'>LinkedIn</p>
                    </div>

                    <div className="flex items-center mt-10 ml-20 ">
                        <img src={Instagram} className="w-auto h-[3.5rem] mr-3"></img>
                        <p className='text-xl font-bold text-rose-500/75'>Instagram</p>
                    </div>
                </div>
                
            </div>
            <div>img</div>
        </div>

        <div>
        <p className='ml-20 text-2xl '>Send me an email</p>
                <div className="mx-auto mzx-w-md">
                    <form className="flex px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
                        <div >
                            <div className="mb-4 ml-20">
                            <label 
                                className="block text-gray-700 text-sm font-bold mb-2 htmlFor=name">
                               Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="px-20 py-2 leading-tight text-gray-700 border rounded shadow appearance-none bg-lime-50 focus:outline-none focus:shadow-outline" />
                            <br />
                        </div>
                        
                        <div className="mb-8 ml-20">
                            <label 
                                className="block  text-sm font-bold text-gray-700" htmlFor="email">
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                className="px-20 py-2  leading-tight text-gray-700 border rounded shadow appearance-none bg-lime-50 focus:outline-none focus:shadow-outline" />
                            <br />
                        </div>
                        </div>
                        
                        
                        <div className="mb-20 ml-20 ">
                            <label 
                                className="block py-10 text-sm font-bold text-gray-700" htmlFor="email">
                                    Message</label>
                            <textarea 
                                name="message" 
                                rows="4" 
                                className="px-20 py-2 leading-tight text-gray-700 border rounded shadow appearance-none bg-lime-50 focus:outline-none focus:shadow-outline" />
                            <br />
                        </div>
                        
                        <div className="flex items-center justify-between mb-5 ml-20">
                            <button 
                                type="submit" 
                                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                            Send Email
                            </button>
                        </div>
                        
                    </form>
                    
                </div>
        <div>
        </div>

        </div>
                
        </>
    );
    
}


export default contact;