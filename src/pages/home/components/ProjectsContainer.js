import './ProjectsContainer.css';
import {NavLink} from 'react-router-dom';

const projects = [
    {
        id:1,
        title: 'Rapido’s Booking Experience',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/F66D9C84-6C43-42BA-8290-A7408B4B96E5.svg',
        isPrivate: false,
        route:"/rapido"
    },
    {
        id:2,
        title: 'Breast- Self Examination App',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/64661C8F-13A9-4568-968A-CB4C384F8DE6.svg',
        isPrivate: true,
        route:"/selfi"
    },
    {
        id:3,
        title: 'Website Redesign ',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/9A679E98-267D-480B-8FDE-6D6D68931F6D.svg',
        isPrivate: false,
        route:"/aid"
    },
    {
        id:4,
        title: 'Meeting Room Platform',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/65B2DAD7-B40D-402F-BE1F-9D8AAF57EF77.png',
        isPrivate: true,
        route:"/ving"
    },
    {
        id:5,
        title: 'Event Website',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/7BEEFA44-A402-441E-AD9E-466922704D0D.png',
        isPrivate: false,
        route:"/innaz"
    },
    {
        id:6,
        title: 'Branding + Illustrations',
        image: 'https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/ABA3248F-A35C-4970-89B5-502FE9AC03C8.svg',
        isPrivate: null,
        route:"/branding_illustrations"
    },
]

export function ProjectCard(props){
    return (
        
        <div 
        align="center"
        id="projectCard"
        style={{ 
            textAlign:'left',
            position:'relative', 
            marginBottom:'30px',
            margin:'auto'
            }}> 
            <img align="center" src={props.image} style={{width:'100%'}}/>
            <h1 style={{position:'absolute', top:'20px', left:'35px', marginBottom:'30px'}}>
             {props.title} 
             <br/> 
             
            <NavLink to={props.route} align="center" style={{fontSize:'18px',backgroundColor:'', opacity:'1', borderRadius:'5px', paddingTop:'0px',marginTop:'20px'}}>
                {props.isPrivate == null ? "View Projects" : props.isPrivate == true ? "Enter Password" : "View Case Study" }
                <span style={{position:'relative', top:'3px', marginLeft:'10px'}}>
                    &#10141;
                </span>
            </NavLink>
             
            </h1>
            
            <br/><br/>
            <br/><br/>
            <br/><br/>
        </div>
    )
}

export default function ProjectsContainer(){
    return (
        <div id="projectsContainer" align="center">
            {
            projects.map((project)=>{
                return (
                    <ProjectCard image={project.image}
                    title={project.title}
                    isPrivate={project.isPrivate}
                    route={project.route}
            />
                )
            })
            }
            
              
        </div>
    )
} 