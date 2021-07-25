/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false, // set to false to use static SVG
};

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Anh Nguyen",
  title: "Hi, I'm Anh (Jessie) Nguyen",
  subTitle: emoji(
    "A senior studying Computer Science at the University of Rochester 👩‍💻. I'm passionate in Open Source projects, Software Development and community activities 🤩."
  ),
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jessieAnhNguyen",
  linkedin: "https://www.linkedin.com/in/jessieanh/",
  twitter: "https://twitter.com/jessie_anh_ng",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DEVELOP SOFTWARE, COLLABORATE WITH OTHERS AND LEARN NEW THINGS EVERY DAY",
  skills: [
    emoji("⚡ Develop back-end and front-end for web applications"),
    emoji("⚡ Build open source tools and contribute to OSS community"),
    emoji("⚡ Lead organizations/ activities for tech community on campus"),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android",
    },
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Rochester",
      logo: require("./assets/images/URLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - May 2022",
      desc: "",
      descBullets: [
        "Some courses: Databases Systems, Web Development, Android App Development, Human-Computer Interaction, Artificial Intelligence, Data Structures and Algorithms",
        "Teaching Assistant for Artificial Intelligence",
        "Member of Phi Beta Kappa Honor Society",
      ],
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/Microsoft_logo.png"),
      date: "June 2021 - August 2021",
      desc:
        "Azure Identity Security Infrastructure team",
      descBullets: [
        "Built a multiple-page web application that displayed Token Signing Key Metadata for internal use",
        "Created user-friendly visualization of the data which enabled timely rollover in case of outages",
        "Technologies used are React, Redux-Saga, and TypeScript",
      ],
    },
    {
      role: "Open Source Contributor",
      company: "Major League Hacking (MLH) Fellowship",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2020 - August 2020",
      desc:
        "Contributed to Facebook’s React Native and Hermes (an engine optimized for running React Native apps on Android).",
      descBullets: [
        "Developed a transformer tool to convert Hermes JavaScript runtime sampling profile to Chrome DevTools format using TypeScript, enabling thousands of OSS community users to profile React Native Android applications",
        "Implemented a new command on React Native CLI (command line interface) to automate the process of profiling",
        "Documented how the Hermes sampling profiler works and its usage on React Native’s website",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "FPT.AI",
      companylogo: require("./assets/images/fptLogo.png"),
      date: "June 2019 – August 2019",
      desc:
        "Member of Big Data team doing ‘Credit Scoring’ project for consumer finance company Home Credit",
      descBullets: [
        "Built a Machine Learning model with accuracy 94% to predict the creditworthiness of borrowers using Python",
        "Deployed a RESTful API from the above machine learning model using Flask",
        "Built an Influence-Scoring model that calculates the popularity and impact of social media (posts, comments, replies) by applying Google PageRank algorithm",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "jessieAnhNguyen", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to false
  display: true,
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "How UR Feeling",
      projectDesc: "A web application that detects students' moods during online lectures using Facial recognition",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sites.google.com/view/ur-stressed"
        },
        {
          name: "GitHub Link",
          url: "https://github.com/amnshrestha/UR-Stressed"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Stack Attack",
      projectDesc: "An open-source CLI tool that divides and stacks small Pull Requests on GitHub",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/taneliang/stack-attack"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "React Native Hermes Profile Transformer",
      projectDesc: "An open-source tool that converts Hermes sampling profiles to Chrome DevTools compatible format",
      footerLink: [
        {
          name: "npm Package",
          url: "https://www.npmjs.com/package/hermes-profile-transformer"
        },
        {
          name: "GitHub Link",
          url: "https://github.com/react-native-community/hermes-profile-transformer"
        }
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "MakeUp Browser",
      projectDesc: "An Android mobile app for users to search information about make-up products by brands or types",
      footerLink: [
        {
          name: "GitHub Link",
          url: "https://github.com/jessieAnhNguyen/MakeUpBrowser"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Object-Oriented Programming", //Insert stack or technology you have experience in
      progressPercentage: "85%", //Insert relative proficiency in percentage
    },

    {
      Stack: "Databases and APIs",
      progressPercentage: "75%",
    },

    {
      Stack: "Front-end Web Development",
      progressPercentage: "75%",
    },

    {
      Stack: "Android App Development",
      progressPercentage: "65%",
    },
  ],
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Leadership Experience 🚀 "),
  achievementsCards: [
    {
      title: "Google Developer Student Club",
      subtitle:
        "Founder and President of University of Rochester's DSC chapter.",
      image: require("./assets/images/DSCPhoto2.jpg"),
      footerLink: [
        {
          name: "About DSC",
          url: "https://developers.google.com/community/dsc",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/dsc.uofr/",
        },
      ],
    },
    {
      title: "Computer Science Undergraduate Council",
      subtitle:
        "Vice President of University of Rochester's largest computer science organization",
      image: require("./assets/images/CSUG_group_photo.jpeg"),
      footerLink: [
        {
          name: "Website",
          url: "https://ur-csug.org/#/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/ur.csug/",
        },
      ],
    },

    {
      title: "DandyHacks Hackathon",
      subtitle:
        "Organized DandyHacks - University of Rochester's biggest hackathon",
      image: require("./assets/images/DHPhoto.jpg"),
      footerLink: [
        {
          name: "Website",
          url: "https://dandyhacks.net/",
        },
        {
          name: "Instagram",
          url: "https://www.instagram.com/dandyhacks/",
        },
      ],
    },
  ],
  display: true,
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write about my experiences and projects that I am proud of.",

  blogs: [
    {
      url:
        "https://www.g2i.co/blog/profiling-react-native-apps-runtime-performance-using-hermes",
      title: "Profiling React Native App's Runtime Performance Using Hermes",
      description:
        "An npm tool I developed that makes profiling React Native App easily using Hermes",
    },
    {
      url:
        "https://dev.to/jessie_anh_nguyen/growing-as-a-developer-through-the-mlh-fellowship-eb2",
      title: "Growing as a developer through the MLH Fellowship",
      description:
        "My experience being in the inaugural class of MLH Fellows in Summer 2020",
    },
  ],
  display: true,
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY KNOWLEDGE AND TALK ABOUT WHAT I'VE BUILT!"
  ),

  talks: [
    {
      title: "Making React Native Fast With Hermes",
      subtitle: "A discussion about Hermes at React Wednesdays",
      url: "https://www.youtube.com/watch?v=JDct3Hsh4m8&ab_channel=KendoUI",
    },
  ],
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you want to discuss anything, contact me at one of these social media below",
};

// Twitter Section

const twitterDetails = {
  userName: "jessie_anh_ng", //Replace "twitter" with your twitter username without @
  display: true,
};
export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  bigProjects,
};
