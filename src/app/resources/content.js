import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Qore Tech",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Automation & Software Experts", 
};

const social = [
  // Links are automatically displayed.  
  {
    name: "Email",
    icon: "email",
    link: "mailto:mateo@qoretech.eu",
  },
];

const home = {
  label: "Welcome",
  title: `Qore Tech`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>You imagine, <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;we deliver</>,
  subline: (
    <>
      I'm Selene, a design engineer at <InlineCode>FLY</InlineCode>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {  
  title: "Home",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  intro: {
    display: true,
    title: "Welcome",
    description: (
      <>
        We craft powerful software solutions, automate processes, and bring smart technology 
        into your home and business. Let’s create something amazing together.
      </>
    ),
  },
  projects: {
    display: true, // set to false to hide this section
    title: "Projects",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  ourServices: {
    display: true, // set to false to hide this section
    title: "Our Services",
    institutions: [
      {
        name: "🌐 Web Development",
        description: <>Create stunning and responsive websites tailored to your business needs.</>,
      },
      {
        name: "📱 Mobile App Development",
        description: <>Develop user-friendly mobile applications for both Android and iOS platforms.</>,
      },
      {
        name: "🛠️ Process Automation",
        description: <>We control your machines with intelligent automation to enhance efficiency.</>,
      },
      {
        name: "🏠 Smart Home Automation",
        description: <>Control your home remotely with intuitive web and mobile interfaces for ultimate convenience.</>,
      },
      {
        name: "☁️ Cloud Computing",
        description: <>Leverage the power of the cloud to scale your applications and services.</>,
      },
      {
        name: "🔒 Cybersecurity",
        description: <>Protect your digital assets with our comprehensive cybersecurity solutions.</>,
      },
      {
        name: "🧠 Artificial Intelligence",
        description: <>Implement AI solutions to automate tasks and enhance decision-making processes.</>,
      },      
    ],
  },  
  contact: {
    display: true, // set to false to hide this section
    title: "Contact",
    institutions: [      
      {
        name: "WhatsApp 📞",
        description: <>+1234567890</>,
      },
      {
        name: "Email 📨",
        description: <>mateo@qoretech.eu</>,
      },
    ],
  },  
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, work };
