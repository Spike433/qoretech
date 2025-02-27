"use client";

import {
  
  Column,
  Flex,
  Heading,
  Text,
} from "@/once-ui/components";
import { CustomCarousel } from "./CustomCarousel";
import { useRef, useState } from "react";
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
  
  const [index, setIndex]= useState(0);

  const handleChangeIndex = (i: number) => {
    setIndex(i);    
  };

  return (
    <Column fillWidth gap="m">
      <CustomCarousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image, i) => ({
          src: image, 
          alt: title[i]
        }))}
        onImageClick={(index) => handleChangeIndex(index)}
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
              {title[index]}
            </Heading>
            {description[0]?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description[index]}
              </Text>
            )}
          </Flex>
        )}        
      </Flex>
    </Column>
  );
};
