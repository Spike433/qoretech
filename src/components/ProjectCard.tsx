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
  title: string;
  content: string;
  description: string;  
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  images = [],
  title,
  content,
  description,  
}) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
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
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}            
          </Column>
        )}
      </Flex>
    </Column>
  );
};
