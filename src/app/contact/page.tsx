import {
  Column,
  Flex,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import styles from "@/components/about/about.module.scss";
import { person, about } from "@/app/resources/content";

export async function generateMetadata() {
  const title = about.title;
  const description = about.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/about`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function About() {
  return (
    <Column maxWidth="m">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            jobTitle: person.role,
            description: about.intro.description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,            
            worksFor: {
              "@type": "Organization",
              name: about.projects.experiences[0].company || "",
            },
          }),
        }}
      />
      <Flex fillWidth mobileDirection="column" horizontal="center">        
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          
          
        </Column>
      </Flex>
    </Column>
  );
}
