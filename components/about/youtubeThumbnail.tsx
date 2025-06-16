'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play } from "lucide-react";


const getYouTubeVideoId = (url: string) => {
  const regex = /(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const YouTubeThumbnail = ({ url, quality = 'maxresdefault' }: { url: string; quality?: string }) => {
  const videoId = getYouTubeVideoId(url);
  if (!videoId) {
    return <p className="text-red-500">Invalid YouTube URL</p>;
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
    const videoLink = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <div className="relative flex justify-around items-center max-md:mx-5 mt-24 mb-16">
   <Link href={videoLink} target="_blank" rel="noopener noreferrer">
    <Image
      src={thumbnailUrl}
      alt="Thumbnail"
      width={1000}
      height={450}
      className="object-cover shadow-lg filter brightness-105 contrast-110 saturate-100"
    />
      <div className="absolute inset-0 flex items-center justify-center">
         <Play className="w-16 h-16 text-white max-md:w-12 max-md:h-12" />
      </div>
  </Link>
</div>
  );
};

export default YouTubeThumbnail;


