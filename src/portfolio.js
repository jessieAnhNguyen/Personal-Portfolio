/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Anh Nguyen",
  title: "Hi, I'm Anh (Jessie) Nguyen",
  subTitle: emoji(
    "A junior studying Computer Science at the University of Rochester 👩‍💻. Passionate in Open Source, Software Development and community activities 🤩."
  ),
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/jessieAnhNguyen",
  linkedin: "https://www.linkedin.com/in/jessieanh/",
  twitter: "https://twitter.com/jessie_anh_ng",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

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
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python",
    },
  ],
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "University of Rochester",
      logo: require("./assets/images/URLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2018 - May 2022",
      desc: "",
      descBullets: [
        "Some courses: Databases Systems, Web Development, Android App Development, Human-Computer Interaction, Artificial Intelligence, Data Structures and Algorithms",
        "Teaching Assistant for Computation and Formal Systems",
        "Member of Phi Beta Kappa Honor Society",
      ],
    },
  ],
};

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
      Stack: "Android App Development",
      progressPercentage: "75%",
    },

    {
      Stack: "Front-end and Design",
      progressPercentage: "60%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
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
};

// Your Achievement Section Include Your Certification Talks and More

const leadershipSection = {
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
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you want to discuss anything, contact me at one of these social media below",
};

//Twitter Section

const twitterDetails = {
  userName: "jessie_anh_ng", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  leadershipSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
};
