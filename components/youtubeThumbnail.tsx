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


// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>