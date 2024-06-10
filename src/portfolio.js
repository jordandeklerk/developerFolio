/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import pytorchIcon from "./assets/images/pytorch.svg"; // Import the PyTorch SVG icon
import tensorflowIcon from "./assets/images/tensorflow.svg"; // Import the Tensorflow SVG icon
import scikitIcon from "./assets/images/scikit.svg"; // Import the Scikit SVG icon
import huggingIcon from "./assets/images/hugging.svg"; // Import the Hugging SVG icon
import pythonIcon from "./assets/images/python.svg"; // Import the Python SVG icon
import rstudioIcon from "./assets/images/rstudio.svg"; // Import the RStudio SVG icon
import htmlIcon from "./assets/images/html5.svg"; // Import the HTML SVG icon
import nodejsIcon from "./assets/images/nodejs.svg"; // Import the Node.js SVG icon
import reactIcon from "./assets/images/reactjs.svg"; // Import the React SVG icon
import npmIcon from "./assets/images/npm.svg"; // Import the NPM SVG icon
import sqlIcon from "./assets/images/sql.svg"; // Import the SQL SVG icon
import awsIcon from "./assets/images/aws.svg"; // Import the AWS SVG icon
import dockerIcon from "./assets/images/docker.svg"; // Import the Docker SVG icon
import jsIcon from "./assets/images/javascript.svg"; // Import the JS SVG icon
// import devAnimation from "./assets/lottie/dev.json"; // Import the dev.json animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 4190  // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jordan Deklerk",
  title: "Hi, I'm Jordan",
  subTitle: emoji(
    "I am a Data Scientist with 5 years of experience in the healthcare industry 🏥 with a proven track record in developing advanced deep learning and causal inference models, driving innovation and improving outcomes."
  ),
  resumeLink: "https://drive.google.com/file/d/1b2J8mCwRaTkGgqCMdho7W14ttAldGmia/view?usp=share_link", // Assuming resume.pdf is in the public directory
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/jordandeklerk",
  blog: "https://zingy-taffy-d2a183.netlify.app",
  linkedin: "https://www.linkedin.com/in/jordandeklerk/",
  gmail: "jdeklerk10@gmail.com",
  kaggle: "https://www.kaggle.com/deepproblem", 
  // huggingface: "https://huggingface.co/jdeklerk10", // Replace with your Hugging Face profile URL
  facebook: "https://www.facebook.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Programming Skills",
  subTitle: "DEEP LEARNING AND DATA SCIENCE PRACTIONER DRIVEN BY CURIOSITY",
  skills: [
    emoji(
      "⚡ Develop cutting-edge deep learning and machine learning models to solve complex problems"
    ),
    emoji("⚡ Create scalable and efficient machine learning pipelines for seamless deployment"),
    emoji(
      "⚡ Leverage powerful cloud-based services such as AWS SageMaker, Google Cloud AI Platform, and Azure ML for enhanced model performance and scalability"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      icon: pythonIcon // Use the imported SVG icon
    },
    {
      skillName: "R",
      icon: rstudioIcon // Use the imported SVG icon
    },
    {
      skillName: "pytorch",
      icon: pytorchIcon // Use the imported SVG icon
    },
    {
      skillName: "tensorflow",
      icon: tensorflowIcon // Use the imported SVG icon
    },
    {
      skillName: "scikit-learn",
      icon: scikitIcon // Use the imported SVG icon
    },
    {
      skillName: "huggingface",
      icon: huggingIcon // Use the imported SVG icon
    },
    {
      skillName: "html-5",
      icon: htmlIcon // Use the imported SVG icon
    },
    {
      skillName: "JavaScript",
      icon: jsIcon // Use the imported SVG icon
    },
    {
      skillName: "reactjs",
      icon: reactIcon // Use the imported SVG icon
    },
    {
      skillName: "nodejs",
      icon: nodejsIcon // Use the imported SVG icon
    },
    {
      skillName: "npm",
      icon: npmIcon // Use the imported SVG icon
    },
    {
      skillName: "sql-database",
      icon: sqlIcon // Use the imported SVG icon
    },
    {
      skillName: "aws",
      icon: awsIcon // Use the imported SVG icon
    },
    {
      skillName: "docker",
      icon: dockerIcon // Use the imported SVG icon
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Urbana-Champaign",
      logo: require("./assets/images/uiuc2.png"),
      subHeader: "Master of Science in Statistics",
      duration: "August 2022 - May 2024",
      // desc: "Relevant Coursework",
      // descBullets: [
      //   "Deep Learning",
      //   "Computer Vision",
      //   "Natural Language Processing",
      //   "Bayesian Machine Learning"
      // ]
    },
    {
      schoolName: "University of Wisconsin-Madison",
      logo: require("./assets/images/wisconsin3.png"),
      subHeader: "Master of Science in Economics",
      duration: "August 2016 - May 2018",
      // desc: "Relevant Coursework",
      // descBullets: [
      //   "Applied Econometrics",
      //   "Time Series Forecasting",
      //   "Causal Inference",
      //   "Bayesian Statistics"
      // ]
    },
    {
      schoolName: "University of Central Florida",
      logo: require("./assets/images/ucf2.png"),
      subHeader: "Bachelor of Arts in Economics and Mathematics",
      duration: "August 2013 - May 2016",
      // desc: "Relevant Coursework",
      // descBullets: [
      //   "Mathematical Economics",
      //   "Probability and Random Processes",
      //   "Econometrics",
      //   "Mathematical Finance"
      // ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "UPMC Health Plan",
      companylogo: require("./assets/images/upmc.png"),
      date: "June 2020 – Jan 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Developed a BERT-style transformer model on EHR claims data, reducing 30-day re-admissions by 14% and saving $1.3M",
        "Created a CNN and autoencoder unsupervised model to cluster patients by disease sub-types, saving $345k",
        "Transitioned existing models to production using AWS Sagemaker, enhancing real-time prediction capabilities"
      ]
    },
    {
      role: "Data Scientist",
      company: "Health First Health Plans",
      companylogo: require("./assets/images/hf.png"),
      date: "Dec 2019 – June 2020",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Constructed an ensemble gradient boosted tree model to retain 31% of at-risk members, saving $230k annually",
        "Designed an instrumental variables causal model to estimate price elasticity of Medicare Part D cancer drugs",
        "Utilized Apache Spark to preprocess EHR data, enhancing machine learning model training and insights"
      ]
    },
    {
      role: "Associate Data Scientist",
      company: "Health First Health Plans",
      companylogo: require("./assets/images/hf.png"),
      date: "July 2018 – Dec 2019",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Formulated a Bayesian Gaussian process model for forecasting healthcare utilization, saving $115k quarterly",
        "Produced and presented quarterly chronic disease analytics reports with financial recommendations to executives",
        "Established and maintained SAS financial reporting processes for strategic accounts and Medicare lines of business"
      ]
    }

    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true,
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Deep Learning", //Insert stack or technology you have experience in
      progressPercentage: "95%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Time Series Forecasting",
      progressPercentage: "95%"
    },
    {
      Stack: "Causal Inference",
      progressPercentage: "90%"
    },
    {
      Stack: "Bayesian Inference",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};
// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Tutorials",
  subtitle:
    "",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://zingy-taffy-d2a183.netlify.app/amortized-bayes/",
      title: "Closing the Amortization Gap in Bayesian Deep Generative Models",
      description:
        "Integrating A-VI with Bayesian VAEs: theory, implementation, and numerical experiments"
    },
    {
      url: "https://zingy-taffy-d2a183.netlify.app/open-code/",
      title: "Fine-Tuning OpenCodeInterpreter-6.7B for SQL Code Generation",
      description:
        "Fine-tuning a code-generating LLM for text-to-SQL tasks using the QLoRA+ method"
    },
    // {
    //   url: "",
    //   title: "Forecasting with Bayesian Gaussian Processes",
    //   description:
    //     "A guide on how to forecast with Bayesian Gaussian processes on competition time series datasets"
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Want to discuss a project or just say hi? My inbox is open to everyone.",
  number: "321-624-1004",
  email_address: "jdeklerk10@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
