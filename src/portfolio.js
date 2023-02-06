/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Parminder's Portfolio",
  description:
    "A passionate individual who always thrives to solve new and exciting problems.",
  og: {
    title: "Parminder Singh Portfolio",
    type: "website",
    url: "http://parmindersingh.com/",
  },
};

//Home Page
const greeting = {
  title: "Parminder Singh",
  logo_name: "ParminderSingh",
  nickname: "Parm",
  subTitle:
    "A passionate individual who always love to solve new and challenging problems to create an impact in society.",
  resumeLink:
    "https://docs.google.com/document/d/1StJBx7Y2lLkRTz-tSVK11np9C4ekGrhgyRZNkIxIuMo/edit?usp=sharing",
  portfolio_repository: "https://github.com/daydreamer-parminder/portfolio",
  githubProfile: "https://github.com/daydreamer-parminder",
};

const socialMediaLinks = [
  /* Your Social Media Link */

  {
    name: "Github",
    link: "https://github.com/daydreamer-parminder",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://in.linkedin.com/in/parminder-singh-11187b71/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:parmsoftech@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Game Developer",
      fileName: "game_developer_guy",
      skills: [
        "⚡ Developing highly scalable and reusable solutions for Gaming and mulimedia applications for different platform",
        "⚡ Experience of working with OpenCV, AI, AR applications",
        "⚡ Experience of working with Multiplayer/Photon Engine for multiplayer application"
      ],
      softwareSkills: [
        {
          skillName: "Unity3D",
          fontAwesomeClassname: "logos-unity",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Visual Studio",
          fontAwesomeClassname: "logos-visual-studio",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "mdi-android-studio",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C#",
          fontAwesomeClassname: "logos-c-sharp",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        }
      ],
    },
    {
      title: "Backend Development",
      fileName: "backend_developer_guy",
      skills: [
        "⚡ Building responsive website front end using Angular",
        "⚡ Having good knowledge of JPA, Hibernate(ORM), Security and Databases like H2/MySQL",
        "⚡ Creating application backend in Spring Boot Java",
      ],
      softwareSkills: [
        {
          skillName: "HTML",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#61DAFB",
          },
        },
      ],
    },
    {
      title: "Cloud Associate",
      fileName: "google_cloud_developer",
      skills: [
        "⚡ Experience working on Google cloud platform",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/parminder_singh",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/BeLikeCompiler",
    }
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chandigarh Engineering College, Mohali",
      subtitle: "B.Tech. in Computer Sciences and Engineering",
      logo_path: "cec-logo-2023.png",
      alt_name: "CEC Mohali",
      duration: "2011 - 2015",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, OOPs, Java, C++ etc.",
        "⚡ Apart from this, I have done courses and certification of GCP and Asp.Net .",
      ],
      website_link: "https://www.cecmohali.org/",
    }
  ],
};

const certifications = {
  certifications: [
    {
      title: "GCP ACE",
      subtitle: "- GCP",
      logo_path: "GCP-ACE.png",
      certificate_link:
        "https://www.credential.net/06a32878-88c0-4f11-bc2a-e68fb2d52bdc?key=b83ee71b49b270749098f91c4d54c7241f7794bd593109618bff505481d094a9",
      alt_name: "GCP ACE",
      color_code: "#8C151599",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving organizations. My main area of experties is Game development but i also worked in backend for sometime to become full stack",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Technical Specialist",
          company: "Maven Wave, Atos",
          company_url: "https://www.mavenwave.com/",
          logo_path: "atos-maven-wave-logo.png",
          duration: "Feb 2021 - Present",
          location: "Chandigarh, India",
          description:
            "I am working as a backend developer mainly in java, sometimes in Asp.Net. Our focus is to modernize the legacy applications to Spring boot framework Jsava or asp.net C# and bring them on cloud.",
          color: "#0879bf",
        },
        {
          title: "Unity3D Developer",
          company: "Mobile Programming LLC",
          company_url: "https://www.mobileprogramming.com/",
          logo_path: "mpllc.jpg",
          duration: "June 2020 - Feb 2021",
          location: "Mohali, Punjab, India",
          description:
            "I have created/Participated in various buisness related multimedia applications maily related to VR.",
          color: "#9b1578",
        },
        {
          title: "Game Developer",
          company: "WebZool Inc.",
          company_url: "https://webzool.io/",
          logo_path: "webzool.png",
          duration: "Dec 2019 - June 2020",
          location: "Mohali, Punjab, India",
          description:
            "I was in the core team to Develop Slot gameplay.",
          color: "#fc1f20",
        },
        {
          title: "Game Developer",
          company: "BigBee Studio",
          company_url: "https://www.bigbeestudios.com/",
          logo_path: "bigbeestudio.jpg",
          duration: "April 2019 - Nov 2019",
          location: "Mohali, Punjab, India",
          description:
            "I have worked upon massive multiplayer battle strategy game. I made the project from scratch and effectively communicate with the requirements from frontend and backend team",
          color: "#fc1f20",
        },
        {
          title: "Game Developer",
          company: "ChicMic",
          company_url: "https://www.bigbeestudios.com/",
          logo_path: "chicmic.jpg",
          duration: "Feb 2018 - March 2019",
          location: "Mohali, Punjab, India",
          description:
            "I have worked upon hyper casual games.",
          color: "#fc1f20",
        },
        {
          title: "Game Developer",
          company: "Ommzi",
          company_url: "https://www.ommzi.com/",
          logo_path: "ommzi.jpg",
          duration: "Dec 2015 - April 2017",
          location: "Mohali, Punjab, India",
          description:
            "I have worked as a Casino game developer. I build the projects single handedly from scratch.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Trainee",
          company: "HCL",
          company_url: "https://hcl.com/",
          logo_path: "hcl_logo.png",
          duration: "April 2014 - Aug 2014",
          location: "Mohali, India",
          description:
            "Learning about compiler and languages working.",
          color: "#000000",
        }
      ],
    }
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked upon the projects mainly related to the field of Game development in Unity3D.",
  avatar_image_path: "projects_image.svg",
};

// const publicationsHeader = {
//   title: "Publications",
//   description:
//     "I have worked on and published a few research papers and publications of my own.",
//   avatar_image_path: "projects_image.svg",
// };

// const publications = {
//   data: [
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//     {
//       id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
//       name: "Artificial Intelligence Paper",
//       createdAt: "2020-03-06T16:26:54Z",
//       description: "Paper Written on Artificial Intelligence published in xyz ",
//       url:
//         "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profilePic.jpg",
    description:
      "I am available on my email address. You can message me, I will reply within 24 hours. I can help you with 2D/3D Game or Spring boot Backend Development.",
  },
  // blogSection: {
  //   title: "Blogs",
  //   subtitle:
  //     "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  //   link: "https://blogs.ashutoshhathidara.com/",
  //   avatar_image_path: "blogs_image.svg",
  // },
  addressSection: {
    title: "Address",
    subtitle:
      "MC Colony, Dist.-Fazilka, Punjab - 152123, India",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  // publicationsHeader,
  // publications,
  contactPageData,
};
