import React from "react";
import {
  Column,
  Flex,
  Heading,  
  Text,
} from "@/once-ui/components";

import { baseURL } from "@/app/resources";
import { home, person } from "@/app/resources/content";
import styles from "@/components/about/about.module.scss";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {          
          alt: title,
        },
      ],
    },
    
  };
}

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />    
      
    </Column>
  );
}
