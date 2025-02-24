import React from "react";
import {
  Button,
  Column,
  Flex,
  Heading,  
  IconButton,
  SmartImage,
  Text,
} from "@/once-ui/components";
import TableOfContents from "@/components/about/TableOfContents";

import { baseURL } from "@/app/resources";
import { home, about, person, social } from "@/app/resources/content";
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
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.ourServices.title,
      display: about.ourServices.display,
      items: about.ourServices.institutions.map((institution) => institution.name),
    },
    {
      title: about.chooseUs.title,
      display: about.chooseUs.display,
      items: about.chooseUs.institutions.map((institution) => institution.name),
    },
    {
      title: about.contact.title,
      display: about.contact.display,
      items: about.contact.institutions.map((institution) => institution.name),
    },        
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
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">        
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >            
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
              marginTop="s"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                {social.map(
                  (item) =>
                    item.link && (
                        <>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {about.intro.description}
            </Column>
          )}
          
          {about.ourServices.display && (
            <>
              <Heading as="h2" id={about.ourServices.title} variant="display-strong-s" marginBottom="m">
                {about.ourServices.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.ourServices.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.chooseUs.display && (
            <>
              <Heading as="h2" id={about.chooseUs.title} variant="display-strong-s" marginBottom="m" marginTop="l">
                {about.chooseUs.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.chooseUs.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.contact.display && (
            <>
              <Heading as="h2" id={about.contact.title} variant="display-strong-s" marginBottom="m" marginTop="l">
                {about.contact.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.contact.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}          
        </Column>
      </Flex>
    </Column>
  );
}
