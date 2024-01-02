import deconXImage from "../Images/DeconX.png";
import AspInterpreter from "../Images/AspInterpreter.png";
import Bewere from "../Images/Bewere.png";
import Tise from "../Images/Tise.png";
import NG from "../Images/NG.png";
import Experis from "../Images/Experis_bilde.jpg"
import CommodityApp from "../Images/CommodityApp.png" 

export const STATIC_PROJECT_DATA_tech = [
  {
    title: "Stock managment app for health organizations",
    projectText: 
    "This web app was created as a part of the IN5320 platform ecosystem development course, with a team of five students.\n\n We had the flexibility to choose features for our health commodity stock management app. The first feture is the overview page, which provides insights into commodity trends, shipment schedules, monthly dispense counts, and an in-depth stock balance chart. Additionally, the app includes a vertical navigation bar for easy access to a range of functionalities, such as a detailed commodity data table, dispensing capabilities, and other stock management tools for replenishing stock and recounting stock. All transaction records are recorded and can be accessed across different sections of the app.\n\nFor development, we used React, JavaScript, and CSS, incorporating the DHIS2 UI library and course APIs and datastores. Our design process followed established principles, with prototyping done in Figma using the provided DHIS2 UI components. We adopted an iterative development approach, with weekly sprints focusing on planning, implementation, and testing.\n\n A significant learning experience was optimizing the app's performance to minimize resource usage, particularly reducing unnecessary API calls and re-renders. This aspect was a key focus of my contributions to the project.",
    knowledgeText:
    "React, JavaScript, HTML, CSS, using another UI library, API CRUD operations, teamwork, Agile teamwork, collaboration, pair programming, version control with GitHub",
    workedOn: "Autumn 2024",
    link: "https://gitfront.io/r/AndreaHelmersen/LeC9c52Wxnms/DHIS2-Commodity-management-app/",
    image: CommodityApp,
  },
  {
    title: "Dissimilis summer internship",
    projectText:
    "During the summer of 2023, I worked at Experis, with further improving Dissimilis' color notation app. Dissimilis have developed a color-based music notation system for children facing various challenges. Our 12-member team (comprising 3 designers and 9 developers) had a primary focus of doubeling the user base and enhance user-friendliness. We introduced features such as group functions, playlists, admin user management, song favoriting, filtering of songs, and editable information pages.\n\nWe were entrusted with significant responsibility for the project, which i think further motivated us to work hard and to it well, following agile principles with one-week sprints. I worked on both frontend (React + TypeScript) and backend (ASP.NET in C# with Entity Framework). This dual-role helped me understand the entire feature implementation process, which i really liked. \n\nWorking with this exceptional team was a highlight; everyone got along great and teamwork was seamless. We also enjoyed many social afterwork-nights with 'fussball' tournaments and other activities. This job was a valuable learning opportunity, as it was my first chance to develop something used by others and it's an experience I'll carry forward.",
    knowledgeText:
    "React, TypeScript, Material for UI, .Net web API, C#, Entity Framework (EF), teamwork, Agile teamwork, collaboration, pair programming, collaborating with designers, basics of database migrations, version control with GitHub, testing (basics of end-to-end testing and unit testing).",
    companyText: "The Dissimilis project is a pro bono project run by Experis Solutions.",
    workedOn: "Summer 2023",
    image: Experis,
  },
  {
    title: "Portfolio project",
    projectText:
      "I built my portfolio with React and TypeScript, using Material-UI for the design. I created it using the experiance i gained during my summer internship in Experis. It's now hosted using GitHub Pages, and here you are :) . I had never depolyed something to be hosted before and I think that was a very good learning experience. The reason i wanted to create a website using React was that it is now much easier to add to my portfolio than it was before.",
    knowledgeText:
      "React, Typescript, Material for UI, Github, Github Pages",
    link: "https://github.com/AndreaHelmersen/PortfolioAndreaHelmersen",
    workedOn: "Autumn 2023",
  },
  {
    title: "Bewere",
    projectText:
      "The project involved creating an Android app in Android Studio that utilized information from several of the Meteorological Institute's APIs. A part of the project was to document the work and processes well in a report. The project was carried out in a team of six students.",
    IdeaText:
      "Idea: The app provides an overview of various everyday risk factors that may give cause for concern. The user selects a preferred location on the map in the app, and the hazards are then displayed.",
    knowledgeText:
      "Team software development, teamwork, agile practices, documentation of development elements (modeling, requirements specifications, evaluation, and product, test, user, and process documentation), Android Studio, Kotlin, Xml, Json, Git, Jira.",
    link: "https://gitfront.io/r/AndreaHelmersen/MsD28eJ9hebs/Bewere/",
    image: Bewere,
    workedOn: "Spring 2022",
  },
  {
    title: "ASP Interpreter",
    projectText:
      "The project involved creating an ASP interpreter in Java. The ASP programming language is a simplified version of Python. The project was divided into modules: scanner, parser, expression evaluation, and statement and function evaluation, which together built an interpreter for ASP. Projects were carried out in pairs of two.",
    knowledgeText:
      "Java, pair programming, collaboration, object-oriented programming in larger projects, use of modules in larger projects, debugging, interpreting and understanding code written by others.",
    link: "https://gitfront.io/r/AndreaHelmersen/18ef300e5e098d17360269ff8f91dba72998652a/Asp-Interpreter/",
    image: AspInterpreter,
    workedOn: "Autumn 2021",
  },
];

export const STATIC_PROJECT_DATA_bus = [
  {
    title: "Study of usage of AI in Vipps",
    projectText:
      "The project invloved getting into contact with a 'digital ecosystem' company and finding an intresting research question to study in the chosen company. We came into contact with Vipps and our reseach question became 'How can digital platform ecosystems leverage AI, to create and enhance non-economic value?' The project was for the couse IN4150 Digital Ecosystems.",
    companyText:
      "The company we worked with in this project was Vipps, which is a digital platform transaction ecosystem.",
    knowledgeText:
      "Tamwork, digital ecosystem litterature, AI ethics, conducting interview, research.",
    link: "https://drive.google.com/file/d/1v_zQ_a-02J-muj019sUP1uDttY8l-ENt/view?usp=drive_link",
    workedOn: "Autumn 2024",
  },
  {
    title: "ROAF Harvard business case",
    projectText:
      "The project invoved getting into contact with a company and finding and intresting story to tell about their business development or a current problem they where facing. The project was to be written in a harvard business case teaching style, which can be used for class discussion. The project was for the class IN4270 Digital business development.",
    companyText:
      "The company we worked with in this project was ROAF, Romerike Avfallsforedling IKS, which is a intermunicipal waste managment organization.",
    knowledgeText:
      "Teamwork, digital business development, research, conducting interviews.",
    link: "https://drive.google.com/file/d/18fT217zbqHacGP3LYlNY7GYNYnXXx7tB/view?usp=sharing",
    workedOn: "Autumn 2024",
  },
  {
    title: "Decon-X",
    projectText:
      "The project involved conducting various strategic analyses based on interviews conducted with a selected company, as well as identifying a strategic challenge. Based on the challenge, we developed three marketing strategies to 'address' the challenge and created an action plan for the best solution.",
    companyText:
      "The company we worked with for this project was Decon-X. They provide an automated disinfection robot.",
    knowledgeText:
      "Strategic analysis (PESTEL, Five Forces, VRIO, SWOT, etc.), developing strategic solutions, strategic planning, marketing strategies, interview techniques, teamwork.",
    link: "https://drive.google.com/file/d/1N3804hZsH82Cppwryx_-D2alJb-NXQZj/view?usp=sharing",
    image: deconXImage,
    workedOn: "Spring 2022",
  },
  {
    title: "Digital Transformation of NG",
    projectText:
      "The project focused on formulating measures for a digital transformation of Norsk Gjenvinning. In this project, we worked on formulating changes in NG to achieve a desired future. In this context, resistance to change is highly relevant, which I found to be one of the most interesting aspects of the task.",
    companyText:
      "In this project we worked with Norsk gjenvinning (NG), translated to Norwegian Recycling",
    knowledgeText:
      "Digital transformation, change management and resistance, assessment of organizational culture and environments, formulation of measures to achieve a desired future (measures for structure, leadership, and change strategy), teamwork.",
    link: "https://drive.google.com/file/d/1g2N-yFr5HbuWXjV8SZE50D9HpaBPupi6/view?usp=drive_link",
    image: NG,
    workedOn: "Autumn 2021",
  },
  {
    title: "Project Work Tise",
    projectText:
      "In this project, we started with a product from a Norwegian high-tech company, mainly developing a plan for the product, distribution, pricing, and marketing communication for the selected target audience in 2022. The chosen product was Tise's sharing economy platform, primarily for the used clothing market.",
    knowledgeText:
      "Analysis of microenvironments, assessment of competitive advantages ('Sweet Spot'), market segmentation, market research, marketing plan development, teamwork.",
    link: "https://drive.google.com/file/d/10cjFwEKGCuy4ey9dEXVAwo81rSXNt-Cv/view?usp=sharing",
    image: Tise,
    workedOn: "Spring 2021",
  },
];
