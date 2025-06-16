'use client';

import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

type Props = {
  title: string;
  link: string;
};

export default function ResearchCard({ title, link }: Props) {
  return (
    <div className="border border-gray-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-all">
      <Link
        href={link} 
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start gap-3 text-blue-700 hover:underline"
      >
        <ExternalLink className="mt-1" size={20} />
        <span className="font-medium">{title}</span>
      </Link>
    </div>
  );
}
