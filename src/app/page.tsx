import React from "react";
import {
  Column,
  Heading,  
  Text,
  RevealFx,
  InlineCode,
} from "@/once-ui/components";
import {title, description} from "@/app/resources/content"

import { ProjectCard } from "@/components";
import { baseURL } from "@/app/resources";

export async function generateMetadata() {    
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
            name: title,
            description: description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(title)}`,
            publisher: {
              "@type": "Person",
              name: title,              
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <Heading wrap="balance" variant="display-strong-l">
              Qore Tech
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
            <>
              We craft powerful software <InlineCode>solutions</InlineCode>, <InlineCode>automate processes</InlineCode>, and bring  technology into your home and business.      
            </>
            </Text>
          </RevealFx>          
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <ProjectCard
          key={1}
          images={[
            "/images/1.jpg" ,
            "/images/2.jpg" ,
            "/images/3.jpg" ,
            "/images/4.jpg" ,
            "/images/5.jpg"
          ]}
          title={
            [
              "AI Mobile Aplications", 
              "AI Automation", 
              "AI-Powered Chatbots & Virtual Assistants",
              "Predictive Analytics & Data Science",
              "AI Safety"
            ]}
          description={
            [
              "Building intelligent mobile applications with AI-powered features", 
              "Automating repetitive tasks and business processes using AI-powered workflows to improve efficiency and reduce operational costs", 
              "Developing intelligent chatbots and AI-driven customer support systems for 24/7 engagement and automated assistance",
              "Leveraging AI to analyze historical data and provide actionable insights for better decision-making and business forecasting",
              "Ensuring the responsible and secure deployment of AI systems by implementing robust safety measures, ethical AI practices, and risk mitigation strategies"
            ]}
        />
      </RevealFx>            
      <RevealFx translateY="16" delay={0.6}>
        <ProjectCard
          key={1}
          images={[
            "/images/6.jpg" ,            
          ]}
          title={
            [
              "Internet of Things (IoT)",               
            ]}
          description={
            [
              "Connecting smart devices with cloud-based solutions to enable real-time monitoring, automation, and data-driven decision-making",               
            ]}
        />
      </RevealFx>   
      <RevealFx translateY="16" delay={0.6}>
        <ProjectCard
          key={1}
          images={[
            "/images/7.jpg" ,            
          ]}
          title={
            [
              "Mobile App Development",
            ]}
          description={
            [
              "Creating high-performance native and cross-platform mobile applications tailored to user needs and business goals",
            ]}
        />
      </RevealFx>           
      <RevealFx translateY="16" delay={0.6}>
        <ProjectCard
          key={1}
          images={[
            "/images/8.jpg" ,            
          ]}
          title={
            [
              "Web Development",
            ]}
          description={
            [
              "Designing and developing scalable, responsive, and dynamic websites and web applications with a seamless user experience",
            ]}
        />
      </RevealFx>            
    </Column>
  );
}