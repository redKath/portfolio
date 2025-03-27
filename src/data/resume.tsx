import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Kathleen Jogno",
  initials: "KJ",
  url: "https://redkath.github.io/portfolio/",
  location: "Tanauan, Batangas, Philippines",
  locationLink: "https://maps.app.goo.gl/yGKsAUBBTd7cT2U67",
  description:
    "Full-Stack Software Developer, bookworm, and an astronomy nerd. When I'm not building apps, I'm hanging out with my cat and exploring the cosmos.",
  summary:
    "I've spent the past two years building web apps as a Full-Stack Software Developer, using Python and JavaScript. With a background in Computer Engineering and a major in Data Science, I'm equally at home coding and crunching numbers.",
  avatarUrl: "me.png",
  skills: [
    "AWS Lambda",
    "AWS EC2",
    "AWS DynamoDB",
    "Alpaca API",
    "Bitbucket",
    "C++",
    "Django",
    "Docker",
    "Flask",
    "Google Ads API",
    "Google Analytics API",
    "Git",
    "GitHub",
    "jQuery",
    "Koa.js",
    "Linux OS",
    "MySQL",
    "MyPy",
    "Next.js",
    "Nginx",
    "Node.js",
    "Preact",
    "Python",
    "PostgreSQL",
    "Prisma",
    "React",
    "REST API",
    "Semantic HTML5",
    "SSH",
    "Stripe API",
    "Tailwind CSS",
    "Trello",
    "WordPress"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/redKath",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kathleen-jogno/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/redkathh",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:jognokath@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Mesa County Roofs",
      href: "https://mesacountyroofs.com/",
      badges: ['Project-based'],
      location: "Remote",
      title: "Full-Stack Software Developer",
      logoUrl: "mcr-logo.png",
      start: "October 2024",
      end: "current",
      description:
        "Built map-based fantasy sports game using Node.js, React.js, Express.js, Socket.io, and AWS DynamoDB. Deployed game using AWS EC2 instances and Nginx. Configured tables to auto-scale based on traffic in the game.",
    },
    {
      company: "Answerphone of America",
      href: "https://answerphoneofamerica.com/",
      badges: ['Project-based'],
      location: "Remote",
      title: "Full-Stack Software Developer",
      logoUrl: "APOA-LOGO.png",
      start: "June 2024",
      end: "current",
      description:
        "Implemented data visualization pages for MVP using Next.js, TailwindCSS, Chakra-UI, Apex Charts and Google Ads + Google Analytics API. Deployed MVP using Digital Ocean, Nginx and Ubuntu server. Built landing page for MVP using Next.js, TailwindCSS, React Bootstrap, and HTML5.",
    },
    {
      company: "Gravitas Messaging Services",
      badges: ['Full-time'],
      href: "https://itas-solutions.com/",
      location: "Remote",
      title: "Full-Stack Software Developer",
      logoUrl: "ITAS-LOGO.png",
      start: "July 2023",
      end: "August 2024",
      description:
        "Implemented custom API endpoints using Python to fetch and display dynamic data on the website, ensuring seamless data integration and real-time updates. Developed custom reusable components using Preact, HTML, CSS, and jQuery, streamlining the creation of dynamic web pages and enhancing the overall user experience across the website.",
    },
    {
      company: "Dictel LLC",
      href: "",
      badges: ['Project-based'],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "",
      start: "October 2022",
      end: "April 2023",
      description:
        "Engineered a Python-based trading bot leveraging the Alpaca API for automated trading strategies. Developed a command-line accessible data visualization tool using Python, Pandas, Jupyter Notebook, and MATLAB to create pipeline task charts. Additionally, implemented web scraping solutions to extract, transform, and store structured data as JSON files for further processing. These projects were independently developed, showcasing my ability to execute full-cycle development—from conceptualization to deployment—across different domains like automation, data visualization, and web scraping.",
    },
    {
      company: "NeoDocto Inc.",
      href: "",
      badges: [],
      location: "Remote",
      title: "Web Development Intern",
      logoUrl: "",
      start: "July 2022",
      end: "May 2022",
      description:
        "Engaging in client consultations to analyze and identify their specific requirements for social media and chatbot implementations, while effectively communicating the features and benefits of services to underscore the value proposition of the proposed solutions. Additionally, responsible for maintaining and updating client information in CRM and project management software, as well as actively participating in virtual meetings with expert teams to ensure collaborative alignment on project objectives.",
    }
  ],
  education: [
    {
      school: "Technological Institute of the Philippines - Quezon City",
      href: "https://buildspace.so",
      degree: "Bachelor of Science in Computer Engineering, Major in Data Science - Cum Laude",
      logoUrl: "TIP-LOGO.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Maptasy (Map-based Fantasy Sports Game)",
      href: "https://maptasy.com/",
      dates: "October 2024 - current",
      active: true,
      description:
        "Maptasy is a brainchild of fantasy-sports enthusiasts who has love for geography. I was one of the developers that built it. Using Socket.io and Node.js, the players were able to play the game seamlessly. The game has a modern look and feel thanks to React.js and TailwindCSS. It was deployed using AWS EC2 and AWS DynamoDB. It was fun building this app as I also get to dive into the world of Fantasy Sports.",
      technologies: [
        "AWS DynamoDB",
        "AWS EC2",
        "Express.js",
        "Nginx",
        "Node.js",
        "React.js",
        "Socket.io",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://maptasy.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "maptasy-website.png",
      video: ""
    },
    {
      title: "Clickbacks App",
      href: "https://app.clickbacks.co/",
      dates: "June 2024 - current",
      active: true,
      description:
        "Clickbacks allows users to track the performance of their ads and detect if there are bot/fraud activities. Users are also able to export reports and potentially contest those invalid clicks for monetary credit. It was built on top of Google Ads API, Google Analytics API and Next.js. Database interaction was performed using Prisma ORM for MySQL",
      technologies: [
        "Google Ads API",
        "Google Analytics API",
        "Stripe API",
        "Next.js",
        "Nginx",
        "Prisma",
        "MySQL",
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://app.clickbacks.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "clickbacks.png",
      video: ""
    },
    {
      title: "Clickbacks Front-end App",
      href: "https://clickbacks.co/",
      dates: "June 2024 - current",
      active: true,
      description:
        "This is the marketing website for the Clickbacks App. This serves as the landing page that provides users with essential information to understand how the app works, how they can send inquiries or feedback, what are the features, how it can help them manage their ads better, etc. This is built using Next.js, React.js, and TailwindCSS.",
      technologies: [
        "Next.js",
        "Nginx",
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://clickbacks.co/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "clickbacks-frontend.png",
      video: ""
    },
    {
      title: "Plucky Words (Wordpress Blog Site)",
      href: "https://norasavir.com/",
      dates: "January 2023 - December 2023",
      active: true,
      description:
        "I created NoraSavir.com as a beautifully designed website to reflect my client's love for travel and poetry. Using WordPress, I crafted a modern aesthetic with a harmonious color palette and intuitive layout, ensuring a seamless user experience. The site features the **Astra Theme** for a responsive design and includes custom graphics made with **Canva**. Additionally, the **TranslatePress Plugin** allows for multilingual support, making the content accessible to a wider audience.",
      technologies: [
        "Wordpress",
        "Canva",
        "Astra Theme",
        "TranslatePress Plugin"
      ],
      links: [
        {
          type: "Website",
          href: "https://norasavir.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "plucky-words-wordpress-blog.png",
      video: ""
    },
    {
      title: "Hair Salon Website",
      href: "https://vigeandcosalon.netlify.app/",
      dates: "August 2022",
      active: true,
      description:
        "With the launch of Vige & Co Salon, I created a platform that offers a range of professional hair and beauty services. The salon is dedicated to providing exceptional customer experiences, featuring skilled stylists and a welcoming atmosphere. This site serves as a convenient hub for clients to explore services, book appointments, and stay updated on the latest trends in hair and beauty.",
      technologies: [
        "CSS3",
        "Semantic HTML5",
      ],
      links: [
        {
          type: "Website",
          href: "https://vigeandcosalon.netlify.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/redKath/hair-salon",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Vige-Co.png",
      video: ""
    },
    {
      title: "Space Rocket with Speedometer",
      href: "https://codepen.io/redkath/full/zYWmvRK",
      dates: "August 2022",
      active: true,
      description:
        "I developed an interactive web experience using Semantic HTML5, CSS3, JavaScript, and Three.js, showcasing a visually engaging 3D environment. The site leverages modern web technologies to provide users with an immersive experience, featuring dynamic graphics and intuitive navigation. It highlights the capabilities of Three.js to create stunning visual effects and enhance user interaction.",
      technologies: [
        'Semantic HTML5', 'CSS3', 'JavaScript', 'Three.js'
        
      ],
      links: [
        {
          type: "Website",
          href: "https://codepen.io/redkath/full/zYWmvRK",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/redKath/speedy-space-rocket",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "Space Rocket with Speedometer.png",
      video: ""
    },
    {
      title: "Django CRUD App",
      href: "",
      dates: "April 2020",
      active: true,
      description:
        "I built a CRUD web application using Bootstrap, Django, Semantic HTML5, Python, and CSS3. This app provides a user-friendly interface for creating, reading, updating, and deleting records, demonstrating the efficiency of Django for backend development. The use of Bootstrap ensures responsive design, while Semantic HTML5 enhances accessibility and SEO. The project is hosted on GitHub for easy collaboration and version control.",
      technologies: [
        "Bootstrap",
        "CSS3",
        "Django",
        "Python",
        "Semantic HTML5",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/cpe-tipqc-community/django-crud-webapp-redKath",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "django-todo-crud.png",
      video: ""
    },
    {
      title: "Django Blog App",
      href: "",
      dates: "August 2024 - current",
      active: true,
      description:
        "I am currently developing a blog application using Django, which provides a platform for users to create, share, and manage blog posts. The app features user authentication, allowing for personalized experiences, and includes functionalities for creating, editing, and commenting on posts. This project showcases the capabilities of Django for building scalable web applications and is hosted on GitHub for version control and collaboration.",
      technologies: [        
        "CSS3",
        "Django",
        "Python",
        "Semantic HTML5",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/redKath/django-blog-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      video: "",
      image: "",
    },
  ],
  organizations: [
    {
      title: "PNP ITMS Hackathon (SulyApp)",
      dates: "October 2021",
      location: "3rd Place",
      description:
        "I participated in a hackathon where our team developed an app that can detect criminal activities through CCTV footage. Our innovative project was featured in an article on OneNews, highlighting our efforts to enhance public safety using technology.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "Featured Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.onenews.ph/articles/tip-students-develop-app-that-can-detect-criminal-activities-through-cctvs"
        }
      ],
    },
    {
      title: "Department Student Council - Computer Engineering",
      dates: "June 2020 - March 2021",
      location: "Secretary",
      description:
        "As a secretary, my responsibilities include maintaining accurate student body files, preparing detailed meeting agendas, representing the student body at school district and civic functions, producing materials for officers and committee chairpersons, and recording and distributing meeting minutes to ensure effective communication and organization.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Institute of Computer Engineering - Student Edition",
      dates: "June 2019 - March 2020",
      location: "Secretary",
      description:
        "In my role as a secretary, I manage student body records, create meeting agendas, represent the student body at school district and civic events, prepare documents for officers and committee chairs, and document and distribute meeting minutes to facilitate clear communication and organization.",
      links: [],
      image:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    },
    {
      title: "Math and Physics Department (ACE-Q Club)",
      dates: "June 2019 - March 2020",
      location: "Tutor",
      description:
        "In my role as a tutor, I assess gaps in students' knowledge and comprehension, offering tailored guidance to meet their individual needs. I focus on enhancing their foundational mathematical skills, identifying and addressing misconceptions, and clarifying mathematical concepts to promote a deeper understanding.",
      links: [],
      image:
      "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
    },
  ],
} as const;
