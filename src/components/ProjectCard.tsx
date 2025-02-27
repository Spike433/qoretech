"use client";

import {
  Carousel,
  Column,
  Flex,
  Heading,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  images: string[];
  title: string[];
  description: string[];  
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  images = [],
  title,  
  description,  
}) => {
  
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image, i) => ({
          src: image, 
          alt: title[i]
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5} direction="column" gap="s">
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title[0]}
            </Heading>
            {description[0]?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description[0]}
              </Text>
            )}
          </Flex>
        )}        
      </Flex>
    </Column>
  );
};
