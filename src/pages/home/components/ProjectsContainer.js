import './ProjectsContainer.css';
import {NavLink} from 'react-router-dom';
import {Row, Col} from 'antd';
import group29 from './../../../assets/group-29.svg';
import group19 from './../../../assets/group-19.svg';
import group30 from './../../../assets/group-30.svg';
import group31 from './../../../assets/group-31.png';
import group32 from './../../../assets/group-32.jpg';
import group33 from './../../../assets/group-33.svg';

const projects = [
    {
        id:1,
        title: 'Rapido’s Booking Experience',
        image: group19,
        isPrivate: false,
        route:"/rapido"
    },
    {
        id:2,
        title: 'Breast- Self Examination App',
        image: group29,
        isPrivate: true,
        route:"/selfi"
    },
    {
        id:3,
        title: 'Website Redesign ',
        image: group30,
        isPrivate: false,
        route:"/aid"
    },
    {
        id:4,
        title: 'Meeting Room Platform',
        image: group31,
        isPrivate: true,
        route:"/ving"
    },
    {
        id:5,
        title: 'Event Website',
        image: group32,
        isPrivate: false,
        route:"/innaz"
    },
    {
        id:6,
        title: 'Branding + Illustrations',
        image: group33,
        isPrivate: null,
        route:"/branding_illustrations"
    },
]

export function ProjectCard(props){
    return (
        
        <div  
        align="center" 
        className="projectCard"
        style={{  
            position:'relative', 
            marginBottom:'30px',  
            }}> 
            <img className="projectCardImg" align="center" src={props.image} style={{width:'70%'}}/>
               
            <br/><br/>
        </div>
    )
}

export default function ProjectsContainer(){
    return (
        
        <div id="projectsContainer">
            <Row>
                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[0].route}>
                <ProjectCard image={projects[0].image}
                    title={projects[0].title}
                    isPrivate={projects[0].isPrivate}
                    route={projects[0].route}
            />
            </NavLink>
                </Col>
                <Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[1].route}>
                <ProjectCard image={projects[1].image}
                    title={projects[1].title}
                    isPrivate={projects[1].isPrivate}
                    route={projects[1].route}
            />
            </NavLink>

                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[2].route}>
                <ProjectCard image={projects[2].image}
                    title={projects[2].title}
                    isPrivate={projects[2].isPrivate}
                    route={projects[2].route}
            />
            </NavLink>
                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[3].route}>
                <ProjectCard image={projects[3].image}
                    title={projects[3].title}
                    isPrivate={projects[3].isPrivate}
                    route={projects[3].route}
            />
            </NavLink>
                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[4].route}>
                <ProjectCard image={projects[4].image}
                    title={projects[4].title}
                    isPrivate={projects[4].isPrivate}
                    route={projects[4].route}
            />
            </NavLink>
                </Col><Col xs={{span:24}} lg={{span:12}} align="center">
                <NavLink to={projects[5].route}>
                <ProjectCard image={projects[5].image}
                    title={projects[5].title}
                    isPrivate={projects[5].isPrivate}
                    route={projects[5].route}
            />
            </NavLink>
                </Col>
            </Row>
             
            
              
        </div>
    )
} 