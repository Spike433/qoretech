export const title = "Qore Tech";
export const description = "Automation & Software Experts";

const about = {  
  work: {
    display: true, // set to false to hide this section
    title: "Projects",
    experiences: [
      // {
      //   company: "KidCareAI",
      //   timeframe: "2024 - 2025",
      //   role: "Stealth d.o.o.",
      //   achievements: [
      //     "Developed a mobile application using React Native to provide real-time insights into children's health and safety.",
      //   ],
      //   images: [],
      // },
      {
        company: "Autoklav",
        timeframe: "2022 - Present",
        role: "Dr. Skrobic d.o.o.",
        achievements: [
          "Engineered a Next.js web platform for live monitoring and automated process control.",
          "Built a Qt-based backend to ensure seamless data exchange between systems.",
          "Implemented TCP Modbus communication for precise PLC-based automation."       
        ],
        images: [
          {
            src: "/images/1.jpeg",
            alt: "Autoklav",
            width: 16,
            height: 9,
          },
          {
            src: "/images/2.jpeg",
            alt: "Autoklav",
            width: 16,
            height: 9,
          },          
          {
            src: "/images/4a.jpeg",
            alt: "Autoklav",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "On-To-Go Parcel Lockers",
        timeframe: "2021 - 2022",
        role: "Piklean d.o.o.",
        achievements: [
          "Developed a smart parcel locker system to enable secure, contactless deliveries.",
          "Established robust MQTT and API-driven communication between lockers and backend infrastructure.",
          "Integrated IoT-powered smart locks with a centralized management system for enhanced security and efficiency."          
        ],
        images: [
          {
            src: "/images/3a.jpeg",
            alt: "Autoklav",
            width: 16,
            height: 9,
          },
          {
            src: "/images/1c.jpeg",
            alt: "Autoklav",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },  
};

export { about };
