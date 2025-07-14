'use client';

import React from 'react';

interface YouTubeEmbedProps {
  url: string;
  title?: string;
}

function getYouTubeEmbedUrl(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}?rel=0` : null;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ url, title = 'YouTube video' }) => {
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="text-red-600 bg-red-50 p-4 rounded">
        Invalid YouTube URL: <code className="text-sm">{url}</code>
      </div>
    );
  }

  return (
    <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
      <iframe
        src={embedUrl}
        title={title}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
};

export default YouTubeEmbed;
