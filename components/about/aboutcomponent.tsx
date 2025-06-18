"use client";
import React from 'react';
import Image from 'next/image';


//file imports
import Navbar from '@/components/Navbar';
import AboutHighlights from './aboutHighlight';
import YouTubeThumbnail from './youtubeThumbnail';
import Footer from '@/components/footer';


export default function AboutComponent() {
    return (

 <section className="relative w-full min-h-screen flex flex-col justify-between px-0.5 py-5 overflow-hidden">
            {/* Navbar */}
            <div className='w-full mb-20'>
                <h2 className="text-lg font-bold text-gray-700 text-center">
                    PROFESSOR EMMANUEL  OHENE-AFOAKWA
                </h2>
                    <Navbar variant='dark'/>
            </div>

                {/* Hero Section */}
            <div className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[450px] mb-20">
                    <Image
                        src="/img/construction.jpg"
                        alt="About Header"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">About</h1>
                    </div>
                </div>



           {/* Image and text section */}

            <div className='flex justify-between items-center gap-5 px-4 md:px-20 max-[1000px]:flex-col mb-20'>

                    <div className='flex-[1_1_50%]'>
                        <Image
                        src="/img/awards.jpg"
                        alt="Award"
                        width={600} 
                        height={800} />
                    </div>

                    <div className='flex flex-col items-center flex-[1_1_45%]'>
                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-8">
                            Professor Emmanuel Ohene Afoakwa
                        </h2>
                        
                                <p className="px-4 sm:px-2 lg:px-5 text-gray-800 max-md:leading-relaxed text-lg md:text-xl">
                                    Professor Emmanuel Ohene Afoakwa is the Vice-Chancellor of Ghana Communication Technology University and Chief of the Fiapre Traditional Area.
                                    He is a Professor of Food Science and Technology with leadership experience at GCTU and the University of Ghana.
                                He holds a Ph.D. from the University of Strathclyde, UK, and other degrees from the University of Ghana. 
                                </p>

                                <p className="px-4 sm:px-2 lg:px-5  text-gray-800 max-md:leading-relaxed text-lg md:text-xl"> 
                                    Prof. Afoakwa is a Fellow of the African Scientific Institute and belongs to several professional bodies.
                                    He has published over 200 works, mainly in food science and cocoa research.
                                    He serves on key boards and committees like Ghana Cocoa Board, WHO, and FAO.
                                    As Editor-in-Chief of the Journal of Food Technology Research, he leads global academic efforts.
                                   
                                </p>
                    </div>
            </div>

            {/* Highlights Section */}
            <AboutHighlights />


             {/* Quote Section */}
          <section className="py-10 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 max-w-5xl mx-auto rounded-2xl shadow-2xl my-10 max-sm:mx-3 max-[850px]:mx-5">
                    <blockquote className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl italic text-gray-700 leading-relaxed">
                        “The heights by great men reached and kept were not attained by sudden flight,
                        but they, while their companions slept, were toiling upward in the night.”
                    </blockquote>
                            <footer className="mt-6 text-right text-gray-600 font-semibold text-sm sm:text-base">
                                – Henry Wadsworth Longfellow
                            </footer>
            </section>

                {/* Video Section */}
             {/* https://youtu.be/LhhOAva54hA?si=6pfy8Kv8zGJzT3WS */}
            
                 <YouTubeThumbnail url="https://youtu.be/LhhOAva54hA?si=6pfy8Kv8zGJzT3WS" />

            {/* Footer Section */}
            <Footer variant='altitude'/>
             
         </section>


    );
}





