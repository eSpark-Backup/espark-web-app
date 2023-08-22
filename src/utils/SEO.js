import React from "react";
import { Helmet } from "react-helmet-async";
import { seoData } from "./../helper/seodata";
import { useLocation } from "react-router-dom";

export default function SEO() {
  const location = useLocation();

  const currentData = seoData.filter((item) => item.url === location.pathname);

  return (
    <>
      {currentData.map((item, index) => {
        return (
          <Helmet
            prioritizeSeoTags
            htmlAttributes={{ lang: "en" }}
            key={index + "seo"}
          >
            <title>{item.title}</title>
            <link rel="preload" as="style" href="" />
            <link rel="stylesheet" href={item.url} />
            <meta name="description" content={item.description} />
            <meta name="keywords" content={item.keywords} />
            <meta
              name="robots"
              content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
            />
            <link rel="canonical" href={item.canonical} />

            <meta property="og:locale" content={item.ogLocale} />
            <meta property="og:type" content={item.ogType} />
            <meta property="og:title" content={item.ogTitle} />
            <meta property="og:description" content={item.ogDescription} />
            <meta property="og:url" content={item.ogUrl} />
            <meta property="og:site_name" content={item.ogSite_name} />
            <meta property="og:updated_time" content={item.ogUpdated_time} />
            <meta property="og:image" content={item.ogImage} />
            <meta
              property="og:image:secure_url"
              content={item.ogImageSecure_url}
            />
            <meta property="og:image:width" content={item.ogImageWidth} />
            <meta property="og:image:height" content={item.ogImageHeight} />
            <meta property="og:image:alt" content={item.ogImageAlt} />
            <meta property="og:image:type" content={item.ogImageType} />
            <meta
              property="article:published_time"
              content={item.articlePublished_time}
            />
            <meta
              property="article:modified_time"
              content={item.articleModified_time}
            />
            <meta name="twitter:card" content={item.twitterCard} />
            <meta name="twitter:title" content={item.twitterTitle} />
            <meta
              name="twitter:description"
              content={item.twitterDescription}
            />
            <meta name="twitter:site" content={item.twitterSite} />
            <meta name="twitter:creator" content={item.twitterCreator} />
            <meta name="twitter:image" content={item.twitterImage} />
            <meta name="twitter:label1" content={item.twitterLabel1} />
            <meta name="twitter:data1" content={item.twitterData1} />
            <meta name="twitter:label2" content={item.twitterLabel2} />
            <meta name="twitter:data2" content={item.twitterData2} />
          </Helmet>
        );
      })}
    </>
  );
}
