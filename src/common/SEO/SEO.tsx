import Head from 'next/head';
import React from 'react';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
  return (
    <Head>
      {/* General SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph Protocol */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
