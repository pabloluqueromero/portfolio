export const home: string[] = [
  "Hi there 👋🏼, I am",
  "Pablo Luque.",
  "Software Engineer with a passion for Artificial Intelligence!",
  "I am computer science graduate currently working as a Software Engineer at a large consulting coorporation. I have a passion for data science, machine learning, deep learning and I am currently doing a master to acquire more knowledge!"
]

export const languages: { language: string, icon: string }[] = [
  { language: "Spanish", icon: "languages/spanish.png" },
  { language: "French", icon: "languages/french.png" },
  { language: "English", icon: "languages/english.png" },
  { language: "Italian", icon: "languages/italian.png" },
]
export const education: { school: string, year: string, title: string, grade: string, description: string }[] = [
  { school: "Universidad Menéndez Pelayo", year: "2021 - 2023", title: "Master's degree in AI Research", grade: "In progres...", description: "Deep Learning, Supervised & Unsupervised Learning, NLP, Recommendation Systems..." },
  { school: "Universidad de Castilla La Mancha", year: "2017 - 2021", title: "Bachelor's degree in Computer Science", grade: "9.52/10", description: "Concurrent Systems, Data Mining, Intelligent Systems, Databases, Calculus, Algebra, Statistics, Operating Systems, Software Engineering, Distributed Systems..." },
  { school: "Centre International de Valbonne", year: "2012 - 2015", title: "Baccalauréat Économique et Scientifique", grade: "17.5/20", description: "Mathematics, Statistics, Economics..." }
]

export const about: string = `
Hi, my name is Pablo. After successfully completing a Bachelor's degree in Computer Science, I am now pursuing a Masters in Artificial Intelligence Research while I work as a Software Engineer.
Although I have only been working for a year, I have worked in Agile teams, built web services (REST & SOAP), created batch processes, worked with a cloud-based application (AWS) and many more...
<br/>
<br/>
As a kid I moved  abroad and spent 6 years studying, training and living in different countries for which I can speak 4 languages fluently (and a bit of German). I would define myself as a very open-minded person with a great ability to solve problems and, most importantly, with great curiosity (especially when it comes to technologies and algorithms).
<br/>
<br/>
During my Bachelor's degree I specialised in Artificial Intelligence, focusing on algorithms designs, Machine Learning, Metaheuristics, Knowledge-based Systems among others. For my
<a target="_blank" rel="noreferrer" href="https://github.com/pabloluqueromero/TFG" class="paragraph-link" >bachelor's degree final degree project</a> I studied, proposed and coded algorithms to automate feature engineering for the construction of logical features. 
`

export const skills: { tool: string, level:string }[] = [
  { tool: "Python", level:'95%' },
  { tool: "Java", level:'90%' },
  { tool: "C", level:'70%' },
  { tool: "Tensorflow", level:'70%' },
  { tool: "Sklearn", level:'90%' },
  { tool: "Spring", level:'80%' },
  { tool: "SQL", level:'85%' }
]



export const projects: {
  title: string,
  description: string,
  image: string,
  link: string,
  code: string,
  status: string,
  alt: string,
}[] = [
    {
      title: "Snake AI",
      description:
        "Classic Snake Game with different players using search algorithms, naive approaches, and Neural Nets!",
      image: "projects/snake.jpg",
      alt: "Snake Game",
      link: "https://pabloluqueromero.github.io/ia-snake-react",
      code: "https://github.com/pabloluqueromero/ia-snake-react",
      status: "In progress",
    },
    {
      title: "ML Feature Engineering",
      description:
        "Feature Engineering automation for constructing Logical Features targeting the accuracy of the Naive Bayes Classifier",
      image: "projects/genetic.jpg",
      alt: "ML Feature Engineer Genetic Algorithm ",
      link: "",
      code: "https://github.com/pabloluqueromero/TFG",
      status: "Completed",
    },
    {
      title: "Portfolio React",
      description:
        "Responsive portfolio built from scratch using React Native, Hooks and SASS! ",
      image: "projects/portfolio.png",
      alt: "Portfolio image react",
      link: "https://pabloluqueromero.github.io/portfolio",
      code:"https://github.com/pabloluqueromero/portfolio",
      status: "Completed",
    },
    {
      title: "Single Page App Commerce",
      description:
        "Responsive single-page application developed using Nodejs, Bootstrap and MongoDB.",
      image: "projects/mtracing.png",
      alt: "Home page shop",
      link: "",
      code:"https://github.com/pabloluqueromero/mtracing",
      status: "Completed",
    },
  ];




export const socialLink = {
  mail: "pabloluqueromero3@gmail.com",
  linkedin: "https://www.linkedin.com/in/pluquer/",
  github: "https://github.com/pabloluqueromero",
  cv: "CV_PABLO_LUQUE.pdf"
}


//Modify nTabs in scss
export const jobs: { title: string, logo: string, description: string, from:string, to:string}[] = [
  
  {
    title: "Junior Software Engineer",
    logo: "Sopra Steria",
    description: "Currently working here as Junior Software Engineer, engaging with clients for technical advice, international teams and 100% French. Java developement with strict code review and CD/CI pipelines",
    from: "02.2021",
    to: "present"
  },
  {
    title: "Software Engineer Intern",
    logo: "OPINATOR",
    description: "This was my first professional experience back in 2020. I learned a huge deal about web development, APIs, cloud infrastructure, real client requirements and needs and teamwork.",    from: "07.2020",
    to: "10.2020"

  }
]