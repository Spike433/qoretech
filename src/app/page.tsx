import React from "react";
import {
  Column,
  Heading,  
  Text,
  RevealFx,
} from "@/once-ui/components";

import { ProjectCard } from "@/components";
import { baseURL } from "@/app/resources";
import { home, person } from "@/app/resources/content";

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

  const images = [
      "/images/1.jpg" ,
      "/images/2.jpg" ,
      "/images/3.jpg" 
  ];
  
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
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>          
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <ProjectCard
          key={1}
          images={images}
          title={["AI Automation", "Data Science", "Web Development"]}
          description={["Automate your business processes with AI", "Get insights from your data", "Build your website"]}
        />
      </RevealFx>
            
    </Column>
  );
}
