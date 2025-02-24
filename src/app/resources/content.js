import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "qoreTech",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Automation & Software Experts",
  avatar: "/images/avatar.jpg",
  location: "Europe/Zagreb", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts  
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
  },  
  {
    name: "Email",
    icon: "email",
    link: "mailto:mateo@qoretech.eu",
  },
];

const home = {
  label: "Home",
  title: `Portfolio`,
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
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
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
  work: {
    display: true, // set to false to hide this section
    title: "Work",
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
  chooseUs: {
    display: true, // set to false to hide this section
    title: "What Sets Us Apart",
    institutions: [      
      {
        name: "Tailored Solutions",
        description: <>We develop software that fits your exact needs.</>,
      },
      {
        name: "Cutting-Edge Technology",
        description: <>We use the latest tools and frameworks.</>,
      },
      {
        name: "Seamless Integration",
        description: <>Our solutions work with your existing systems.</>,
      },
      {
        name: "Innovative Approach",
        description: <>We combine creativity with technical expertise.</>,
      }, 
      {
        name: "Contact Information",
        description: (
          <>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;WhatsApp: +1234567890
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email: contact@example.com
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone: +0987654321
          </>
        ),
      },
    ],
  },  
  contact: {
    display: true, // set to false to hide this section
    title: "Contact",
    institutions: [      
      {
        name: "Contact",
        description: <>Phone.</>,
      },      
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, home, about, blog, work };
