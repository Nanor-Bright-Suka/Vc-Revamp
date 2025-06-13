'use client';

import Image from 'next/image';
import AboutAccordion from './aboutAccordion';


export default function AboutHighlights() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
      {/* Left: Image */}

        <Image
          src="/img/exp1.jpg" // place this in your public/images folder
          alt="Award"
            width={500}
            height={600}
            className='mx-10'
        />
      {/* </div> */}

      {/* Right: Highlights */}
            <div className="flex flex-col justify-center">
                <AboutAccordion />
            </div>
    </div>
  );
}
