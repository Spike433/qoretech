import {
  Column,
  Flex,
  Input,
  Textarea,
  Button,
  Text
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import styles from "@/components/about/about.module.scss";
import { person } from "@/app/resources/content";

const title = 'Contact';
const description = 'Contact me for any questions or collaborations.';

export async function generateMetadata() {
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

export default function Contact() {
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
            description: description,
            url: `https://${baseURL}/about`,
            image: `${baseURL}/images/${person.avatar}`,            
            worksFor: {
              "@type": "Organization",
              name: "Contact",
            },
          }),
        }}
      />
      <Flex fillWidth mobileDirection="column" horizontal="center">        
        <Column className={styles.blockAlign} flex={9} maxWidth={30} gap="m">
          <Text variant="heading-strong-xl" align="left">Have any questions? <br/>Feel free to send us an email!</Text>          
          <Input id="name" label="Name" />
          <Input id="email" label="Email" />
          <Textarea id="message" label="Your Message" lines={11} />
          <Button variant="secondary" fillWidth>Send</Button>
        </Column>
      </Flex>
    </Column>
  );
}
