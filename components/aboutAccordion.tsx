'use client';

import { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

const items: AccordionItem[] = [
  {
    title: 'Current Leadership Roles',
    content: `Professor Emmanuel Ohene Afoakwa is the Vice-Chancellor of Ghana Communication Technology University (GCTU), Tesano-Accra, previously known as Ghana Technology University College (GTUC). He is also the Chief of Fiapre Traditional Area in the Bono Region of Ghana `,
  },
  {
    title: 'Academic and Administrative Leadership',
    content: `He has held key administrative positions such as Head of the Department of Nutrition and Food Science at the University of Ghana. He has served on numerous boards and committees at institutions including the University of Ghana, Ghana Cocoa Board, Ghana Standards Authority, and GCTU.`,
  },
  {
    title: 'Global Engagements and Consultancy',
    content: `Prof. Afoakwa has consulted for international organizations such as the WHO, FAO, GIZ, USAID, and others on food systems, nutrition, cocoa value chains, and school feeding programmes. His expertise is recognized globally.`,
  },
  {
    title: 'Academic Publications and Editorial Work',
    content: `He has authored or co-authored over 200 publications including 102 peer-reviewed journal articles, 5 books, 4 book chapters, and 91 conference presentations. He is Editor-in-Chief of the Journal of Food Technology Research and serves on editorial boards of several international journals.`,
  },
  {
    title: 'Professional Affiliations and Recognition',
    content: `He is a Fellow of the African Scientific Institute (ASI) and a member of professional bodies including the Ghana Science Association, African Society of Food Science and Technology (ASoFoST), Institute of Food Technologists (IFT), and the American Chemical Society (ACS).`,
  },
  {
    title: 'Public Speaking and Capacity Building',
    content: `An experienced keynote speaker and trainer, Prof. Afoakwa regularly speaks at national and international conferences, facilitates workshops, and contributes to academic and professional capacity building across Africa.`,
  },
  {
    title: 'Contributions to Sustainable Food Systems',
    content: `His research in cocoa and chocolate technology supports sustainable agriculture and food systems in Africa. As a licensed food auditor and university examiner, he plays a key role in quality assurance and academic development.`,
  },
];


export default function AboutAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="p-8 space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b pb-6 lg:pb-10 cursor-pointer"
          onClick={() => toggle(index)}
        >
            <div className="flex items-start gap-2 text-lg font-medium">
                <span className="text-xl font-bold text-gray-700">
                    {activeIndex === index ? '–' : '+'}
              </span>
            <span className='text-gray-700 text-lg md:text-xl'>{item.title}</span>
          </div>
         
                <div
        className={`overflow-hidden transition-all duration-700 ease-linear ${
            activeIndex === index ? 'max-h-96' : 'max-h-0'
        }`}
        >
        <p className="text-gray-700 text-lg md:xl leading-relaxed mt-3.5">
            {item.content}
        </p>
        </div>

                </div>
            ))}
    </div>
  );
}
