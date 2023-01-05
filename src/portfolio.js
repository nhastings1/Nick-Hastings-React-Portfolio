

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Nick Hastings",
  title: "Hello, I'm Nick",
  subTitle: emoji(
    "A full stack developer who loves to build things that live on the internet. I specialize in building and designing exceptional digital experiences. "
  ),
  resumeLink:
    "https://docs.google.com/document/d/1b7tkpWBWkv0OhlBU2csmlqtDjCOtX96N3brOEONt73Y/edit", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nhastings1",
  linkedin: "https://www.linkedin.com/in/nicholas-hastings-4445b9236/",
  gmail: "nickh.code@gmail.com",
  
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces and Back end databases for your web and mobile applications."
    ),
    emoji("⚡ Progressive Web Applications ( PWA )."),
    emoji(
      "⚡ Integration of third party services and web API's."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript and Typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "MongoDB", 
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Kansas",
      logo: require("./assets/images/ku.png"),
      subHeader: "Full Stack Flex Bootcamp",
      duration: "January 2022 - November 2022",
      desc: "Graduated with a certificate in Full Stack Web Development with a 4.0 GPA.",
      descBullets: [
       
      ]
    },
  ]
};



const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "MERN Stack",
      progressPercentage: "80%"
    },
    {
      Stack: "Scrum",
      progressPercentage: "50%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: []
};



const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME APPS AND APPLICATIONS I HAVE BUILT",
  projects: [
    {
      image: require("./assets/images/Sweet.png"),
      projectName: "Sweet Beats Product Page",
      projectDesc: "Sample product page",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nhastings1.github.io/Sweet-Beats-Product-Page/"
        }
        
      ]
    },
    {
      image: require("./assets/images/Movie.png"),
      projectName: "Movie Choice App.",
      projectDesc: "Real time movie choices with info and rating",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nhastings1.github.io/Movie-Choice-Application/"
        }
        
      ]
    },
    {
      image: require("./assets/images/PG.png"),
      projectName: "Generate Thy Password",
      projectDesc: "Randomized secure password generator",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nhastings1.github.io/Generate-Thy-Password/"
        }
      
      ]
    },
    {
      image: require("./assets/images/Quiz.png"),
      projectName: "Quiz Me or Else",
      projectDesc: "Timed Javascript Quiz that also records high scores",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nhastings1.github.io/Quiz-Me-Or-Else-Final/"
        }
      
      ]
    },
    {
      image: require("./assets/images/WeatherAPI.png"),
      projectName: "Weather Dashboard API",
      projectDesc: "Realtime weather dashboard API with search and save functions",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nhastings1.github.io/Weather-Dashboard-API/"
        }
      
      ]
    },
    {
      image: require("./assets/images/Concert.png"),
      projectName: "Concert ClimaGuide",
      projectDesc: "Find concerts and events happening in your city, along with the weather conditions for your day of fun and excitement",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nhastings1.github.io/Concert-Weather-Connection/"
        }
      ]
    },
    {
      image: require("./assets/images/HackChat.png"),
      projectName: "Crypto Counter 2",
      projectDesc: "Search and view real time crypto coins and their prices, market cap, and daily change percentage",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://sensational-meerkat-55269f.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/flash.png"),
      projectName: "Flash Data",
      projectDesc: "A flashcard creation app that allows users to create flashcards and quiz themselves or others on them. A user will be able to create a deck of flashcards, add or delete cards to the deck",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://nameless-hamlet-43462.herokuapp.com/dashboard"
        }
      ]
    },
    {
      image: require("./assets/images/texteditor.png"),
      projectName: "Text Editor",
      projectDesc: "Installable text editor",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mod-19-text-editor.herokuapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certifications",

  achievementsCards: [


    {
      title: "University of Kansas Full Stack Flex Bootcamp Graduate",
      subtitle: "Completed Certification from KU with a 4.0 GPA",
      image: require("./assets/images/ku.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", 
          url: "https://drive.google.com/file/d/1_QmkE6cLU_ELMagQFpPerZaOQ4pBuQv_/view?usp=sharing"},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "TAKE A PEEK.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all. After finishing my certifications, I am actively looking for employment and a new place to call home.",
  number: "(816)819-0607",
  email_address: "nickh.code@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
