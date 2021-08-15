export const home: string[] = [
  "Hi there 👋🏼, I am",
  "Pablo Luque.",
  "Data scientist in the making.",
  "I am computer science graduate currently working as a software engineer at a medium-size coorporation. My true passion is data science, machine learning, deep learning and I am currently doing a master to keep learning!"
]

export const languages: { language: string, icon: string }[] = [
  { language: "Spanish", icon: "languages/spanish.png" },
  { language: "French", icon: "languages/french.png" },
  { language: "English", icon: "languages/english.png" },
  { language: "Italian", icon: "languages/italian.png" },
]
export const education: { school: string, year: string, title: string, grade: string, description: string }[] = [
  { school: "Universidad Menéndez Pelayo", year: "2021 - 2023", title: "Master's degree in AI Research", grade: "In progres...", description: "Lorem ipsumasdasd.amsd dsfadsf asdjfa,smnd fkjasdf asdnc kaj dva sdjk asd.cn kjsd cckas d ñaksdj kasd cksd ckad scka sdc kjasdcjsd cadkj " },
  { school: "Universidad de Castilla La Mancha", year: "2017 - 2021", title: "Bachelor's degree in Computer Science", grade: "9.52/10", description: "Lorem ipsumasdasd.amsd dsfadsf asdjfa,smnd fkjasdf asdnc kaj dva sdjk asd.cn kjsd cckas d ñaksdj kasd cksd ckad scka sdc kjasdcjsd cadkj " },
  { school: "Centre International de Valbonne", year: "2012 - 2015", title: "Baccalauréat Économique et Scientifique", grade: "17.5/20", description: "Lorem ipsumasdasd.amsd dsfadsf asdjfa,smnd fkjasdf asdnc kaj dva sdjk asd.cn kjsd cckas d ñaksdj kasd cksd ckad scka sdc kjasdcjsd cadkj " }
]

export const about: string = `
Hi, my name is Pablo. As a kid I moved  abroad and spent 6 years studying, training and living in different countries for which I can speak 4 languages fluently (and a bit of German).
<br/>
<br/>
After studying graduating from a Computer Science degree in 2021, I am now pursuing a Masters in Artificial Intelligence Research while I work as a Software Engineer.
Although I have only been working for a year  I have worked in Agile teams, building web services (REST & SOAP), batch processes, AWS and many more... 
<br/>
<br/>
<a href="#bachelorproject" class="paragraph-link" >bachelor's final degree project</a> I studied and propose algorithms to automate feature engineering for the construction of logical features. I am familiar  with the most common Machine Learning libraries and I am currently studying Hadoop!
`

export const skills: { tool: string, icon: string, level:string }[] = [
  { tool: "Python", icon: "tools/python.png",level:'90%' },
  { tool: "Spring", icon: "tools/spring.png" ,level:'100%' },
  { tool: "Node", icon: "tools/node.png",level:'10%' },
  { tool: "Aws", icon: "tools/aws.png",level:'20%' },
  { tool: "Postgres", icon: "tools/postgres.png",level:'80%' },
  { tool: "Java", icon: "tools/java.png" ,level:'30%' },
  { tool: "Gitlab", icon: "tools/gitlab.png" ,level:'40%' },
  { tool: "React", icon: "tools/react.png" ,level:'50%' }

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
      image: "snake.jpg",
      alt: "Snake Game",
      link: "#",
      code: "#",
      status: "In progress",
    },
    {
      title: "ML Feature Engineering",
      description:
        "Feature Engineering automation for constructing Logical Features targeting the accuracy of the Naive Bayes Classifier",
      image: "genetic.jpg",
      alt: "ML Feature Engineer Genetic Algorithm ",
      link: "",
      code: "https://github.com/pabloluqueromero/TFG",
      status: "Completed",
    },
    {
      title: "Porfolio React",
      description:
        "Responsive portfolio built from scratch using React Native, Hooks and SASS! ",
      image: "portfolio.png",
      alt: "Portfolio image react",
      link: "#",
      code:"#",
      status: "Completed",
    },
    {
      title: "Single Page App Commerce",
      description:
        "Responsive single-page application developped using Nodejs, Bootstrap and MongoDB.",
      image: "portfolio.png",
      alt: "Home page shop",
      link: "#",
      code:"#",
      status: "Completed",
    },
  ];




export const socialLink = {
  mail: "pabloluqueromero3@gmail.com",
  linkedin: "https://www.linkedin.com/in/pluquer/",
  github: "https://github.com/pabloluqueromero",
  cv: "PABLO_LUQUE_CV.pdf"
}


//Modify nTabs in scss
export const jobs: { title: string, logo: string, description: string, from:string, to:string}[] = [
  {
    title: "Software Engineer Intern",
    logo: "OPINATOR",
    description: "This was my first professional experience back in 2020. I learned I huge ton about web, APIs, cloud infrastructure, real client requirements and needs and team work.",
    from: "01.2020",
    to: "10.2020"

  },
  {
    title: "Junior Software Engineer",
    logo: "Sopra Steria",
    description: "Currently working here as Junior Software Engineer, engaging with clients for technical advice, international teams and 100% French. Java developpement with strict code review and CD/CI pipelines",
    from: "02.2021",
    to: "present"
  }
]