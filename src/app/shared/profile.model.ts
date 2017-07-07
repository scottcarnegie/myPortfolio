import { AcademicProgram } from "../shared/academicprogram.model";
import { Course } from "../shared/course.model";
import { Job } from "../shared/job.model";

export class Profile {

    // Basic Information
    firstName:string;
    lastName:string;
    city:string;
    province:string;
    email:string;
    phone:string;
    profileText:string;
    profilePicture:string;
    
    // Academic
    schoolList:AcademicProgram[];
    courseList:Course[];

    // Experience
    experienceList:Job[];
    
    // Skills Section   
    skillList:{skill:string, rating:number}[];
        
    // Social
    socialLinkList:{link:string, icon:string}[];

    // Languages
    languageList:{name:string, rating:number}[];

    // Interests
    interestList:{name:string, url:string}[];

    constructor(){
        
        // Basic Information
        this.firstName = "Scott";
        this.lastName = "Carnegie";
        this.city = "Vancouver";
        this.province = "BC";
        this.email = "scott@carnegie.today";
        this.phone = "905-520-9121"
        this.profileText = `
            Digital transformation of business processes, customer interactions and business models
            will define whether organizations sink or swim in the connected world. I am looking for
            the opportunity to innovate, educate and motivate as part of a dynamic team leading in cloud
            technologies to help others unlock potential and increase productivity. 
        `;
        this.profilePicture = "../../assets/images/scott-profile.png";
        
        // Education Section
        this.schoolList = [
            {
                institutionName:"Queen's University",
                institutionLocation:"Kingston, Ontario",
                programName: "B. Sc. Engineering Physics",
                endDate: "2013",
                certificate: "Overall GPA of 3.9",
                imageUrl:"../../../assets/images/queens.png",
                documentUrl:"../../../assets/documents/ScottCarnegie_Transcript.pdf"   
            }
        ];

        this.courseList = [
                {
                    name:"Angular 4 - The Complete Guide",
                    completeDate:"IP",
                    imageUrl:"../../../assets/images/udemy.png",
                    documentUrl:"https://www.udemy.com/the-complete-guide-to-angular-2/",
                    provider:"Udemy"
                },
                {
                    name:"The Complete ASP.NET MVC 5 Course",
                    completeDate:"2016",
                    imageUrl:"../../../assets/images/udemy.png",
                    documentUrl:"https://www.udemy.com/certificate/UC-Z2B2VKRE/",
                    provider:"Udemy"
                },
                {
                    name:"Customer Immersion Experience Facilitator",
                    completeDate:"2016",
                    imageUrl:"../../../assets/images/microsoft.ico",
                    documentUrl:"http://cie.brainstorminc.com/",
                    provider:"Microsoft"
                },
                {
                    name:"Front End Development Course",
                    completeDate:"2016",
                    imageUrl:"../../../assets/images/freecodecamp.png",
                    documentUrl:"http://freecodecamp.com/scottcarnegie/front-end-certification",
                    provider:"Free Code Camp"
                }
            ];
        
        // Job Section

        this.experienceList = [
            {
                companyName:"Orangutech Ltd.",
                companyWeb:"http://www.orangutech.com",
                jobTitle:"Director, Project Delivery and Operations",
                companyLocation:"Ottawa, Ontario",
                duration:"10/2015 - 05/2017",
                jobSummary:`
                    I have had the opportunity to work as a Dynamics CRM and SharePoint 
                    developer, as well as work as a technical representative for our partners: 
                    Nintex, Harmon.ie and Connecting-Software. I was responsible for leading the 
                    development team, with responsibilities such as managing our clients, 
                    project planning and co-ordinating development.
                `,
                jobDetails:[
                    `
                    As a member of the leadership team, I was accountable on a weekly 
                    basis for the output of the development team while working closely with 
                    our clients to ensure projects were delivered to their satisfaction and 
                    within budget. My job required a high level of engagement with both clients
                    and developers from inception through to solution support. On a daily basis,
                    I lead team scrums to discuss project status, share achievements and
                    eliminate roadblocks.
                    `,
                    `
                    In parallel with my Director role, I developed plug-ins and web resources for Dynamics CRM 
                    using JavaScript and C#, as well as the native customization and configuration tools. 
                    I worked closely with a large turbine testing company to implement an optimized system
                    to manage their sales prospects and internal service support tickets.
                    `,
                    `
                    Through the duration of my time at Orangutech, I have been managing our most 
                    valued client to support and enhance their highly-customized survey collection 
                    system as both a business analyst and SharePoint developer. The solution is 
                    centralized in SharePoint, and uses Dynamics CRM to manage contacts and issue 
                    bulk emails. Visual Studio workflows and web services are used to parse survey 
                    data and transform it to an SQL table. To support the project, I am required 
                    to perform .Net development, web development, SQL development as well configuration 
                    of each system.
                    `
                ],
                reference:{
                    name: "Barry Doucette",
                    title: "Chief Executive Officer",
                    email: "barry.doucette@orangutech.com",
                    phone: "613-288-2840 ext. 239"
                }
            },
            {
                companyName:"Hatch Ltd.",
                companyWeb:"http://www.hatch.ca",
                jobTitle:"Intermediate Mechanical Engineer",
                companyLocation:"Toronto, Ontario",
                duration:"6/2013 - 9/2015",
                jobSummary:`
                    At Hatch, I started in the Project Delivery Group where I worked on the 
                    engineering team for a number of metal processing projects, with key 
                    tasks including equipment sizing, writing RFPs and managing vendors. I 
                    later transferred to the Furnace Technologies Group where I developed 
                    heat transfer models for a smelting furnace redesign based on site data.
                `,
                jobDetails:[
                    `
                    On the Project Delivery team, I worked in both high-level design and 
                    detailed engineering roles. I was able to work with many clients and 
                    vendors, and had the opportunity to gain technical experience while also 
                    becoming experienced with contracts and the tendering process. During time 
                    between projects, I performed software testing for document management 
                    systems, as well as first level IT support for project database setup.
                    `,
                    `
                    After two years, I was promoted to an Intermediate role and transferred 
                    to the Furnace Technologies Group, where I worked with a smaller, more 
                    specialized team on the redesign of a failed furnace where I produced 
                    finite element models, advanced calculus solutions to predict theoretical 
                    dome stresses, as well as installation drawings and material lists for 
                    installation at site.
                    `,
                    `
                    After two years, I was promoted to an Intermediate role and transferred
                    to the Furnace Technologies Group, where I worked with a smaller, more 
                    specialized team on the redesign of a failed furnace where I produced 
                    finite element models, advanced calculus solutions to predict theoretical 
                    dome stresses, as well as installation drawings and material lists for 
                    installation at site.
                    `
                ],
                reference:{
                    name: "Bruce MacKay",
                    title: "Managing Director",
                    email: "bruce.mackay@hatch.com",
                    phone: "905-491-7092"
                }
            }
        ]

        // Skills Section
        
        this.skillList = [
            {skill:"Agile Project Management", rating:80},
            {skill:"Client Engagement", rating:85},
            {skill:"Project/Work Planning", rating:80},
            {skill:"Public Speaking", rating:70},
            {skill:"Problem Solving/Debugging", rating:90},
            {skill:"CRM Customization", rating:70},
            {skill:"Business Analytics",rating:85},
            {skill:"Technical Sales",rating:80},
            {skill:"SOW/Proposal Writing",rating:75}
        ];

        // Social Links

        this.socialLinkList = [            
            {link:"mailto:" + this.email, icon:"../../assets/icons/envelope.png"},
            {link:"tel:" + this.phone, icon:"../../assets/icons/phone.png"},
            {link:"https://ca.linkedin.com/in/scottjcarnegie",icon:"../../assets/icons/linkedin.png"},
            {link:"https://www.facebook.com/scottjcarnegie",icon:"../../assets/icons/facebook.png"},
            {link:"https://twitter.com/findScarns",icon:"../../assets/icons/twitter.png"},
            {link:"https://www.instagram.com/findscarns/",icon:"../../assets/icons/instagram.png"}
        ];

        // Languages

        this.languageList = [
            {name:"ASP.NET",rating:6},
            {name:"C",rating:4},
            {name:"C#",rating:10},
            {name:"CSS",rating:8},
            {name:"HTML",rating:10},
            {name:"Java",rating:3},
            {name:"JavaScript",rating:8},
            {name:"MATLAB",rating:3},
            {name:"PowerShell",rating:4},
            {name:"SQL",rating:10},
            {name:"TypeScript",rating:6},
            {name:"VB",rating:5}
        ];

        // Interests

        this.interestList = [
            {name:"Swimming",url:"../../assets/icons/interests/swimming.png"},
            {name:"Biking",url:"../../assets/icons/interests/biking.png"},
            {name:"Running",url:"../../assets/icons/interests/running.png"},
            {name:"Guitar",url:"../../assets/icons/interests/guitar.png"},
            {name:"Podcasts",url:"../../assets/icons/interests/microphone.png"},
            {name:"Reading",url:"../../assets/icons/interests/reading.png"}
        ]

    }

}