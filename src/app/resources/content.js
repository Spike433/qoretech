import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Qore Tech",
  lastName: "",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Automation & Software Experts", 
};

const home = {
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>You imagine, we deliver</>,  
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, home, work };
