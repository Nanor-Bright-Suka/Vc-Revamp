'use client';

import Image from 'next/image';
import { GraduationCap, ScrollText, BadgeCheck } from 'lucide-react';
import AcademicCard from '@/components/education/AcademicCard';


export default function AcademicQualificationsPage() {
  return (
    <div className="mx-auto p-6 space-y-12 mt-10">
      <h1 className="text-3xl md:text-4xl font-bold -mt-10  max-md:mt-5 p-5 text-center ">Academic Qualifications</h1>


{/* flex max-[1000px]:flex-col gap-8 */}
      {/* Academic Section (Image Left) */}
      <div className="flex max-[1000px]:flex-col flex-wrap gap-6 items-start w-full">
        {/* Image */}
        <div className="max-[1000px]:w-full">
          <Image
            src="/img/edu1.jpg" // Replace with your actual image
            alt="Graduation Image"
            width={400}
            height={400}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Cards */}
        <div className="flex-1 w-full space-y-4">
          <AcademicCard
            title="Ph.D. in Food Science"
            institution="University of Strathclyde, Glasgow, UK"
            date="November 2008"
            icon={<GraduationCap size={24} />}
          />
          <AcademicCard
            title="M.Phil. in Food Science"
            institution="University of Ghana"
            date="June 2000"
            icon={<GraduationCap size={24} />}
          />
          <AcademicCard
            title="B.Sc. (Hons) in Food Science"
            institution="University of Ghana"
            date="June 1996"
            icon={<GraduationCap size={24} />}
          />
          <AcademicCard
            title="GCE Advanced Level Certificate"
            institution="St. Augustine’s College, Cape Coast"
            date="June 1991"
            icon={<GraduationCap size={24} />}
          />
          <AcademicCard
            title="GCE Ordinary Level Certificate"
            institution="St. Augustine’s College, Cape Coast"
            date="June 1989"
            icon={<GraduationCap size={24} />}
          />
        </div>
      </div>

      {/* Certifications Section (Image Right) */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Professional Certifications</h2>

        <div className="flex max-[1000px]:flex-col flex-wrap gap-6 items-start w-full">
          {/* Image */}
          <div className="max-[1000px]:w-full">
            <Image
              src="/img/edu2.jpg" // Replace with your actual image
              alt="Professional Certifications Image"
              width={400}
              height={400}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Cards */}
          <div className="flex-1 space-y-4 w-full">
            <AcademicCard
              title="Certificate in International Food Laws and Regulations"
              institution="Michigan State University"
              location="East Lansing, Michigan, USA"
              icon={<ScrollText size={24} />}
            />
            <AcademicCard
              title="Certificate in Food Quality Management Systems (ISO 9000)"
              institution="Wageningen University"
              location="The Netherlands"
              icon={<ScrollText size={24} />}
            />
            <AcademicCard
              title="Certificate in Food Safety Management Systems (ISO 22000)"
              institution="Wageningen University"
              location="The Netherlands"
              icon={<ScrollText size={24} />}
            />
            <AcademicCard
              title="Trained and Licensed Food Auditor"
              institution="World Food Safety Organization"
              location="UK"
              icon={<BadgeCheck size={24} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
