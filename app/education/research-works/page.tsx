"use client"
import React, { useState } from "react"
import { ResearchWorks } from "@/components/lib";
import ResearchCard from "@/components/education/research-work-component";


export default function ResearchPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 30;

  const totalPages = Math.ceil(ResearchWorks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = ResearchWorks.slice(startIndex, startIndex + itemsPerPage);

  const goToPrevious = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const goToNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));

  return (
    
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-6 max-md:mt-12 ">Research Publications</h1>

      <div className="space-y-4 mb-6">
        {currentItems.map((research, index) => (
          <ResearchCard key={index} title={research.title} link={research.link} />
        ))}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600">
        <button
          onClick={goToPrevious}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}