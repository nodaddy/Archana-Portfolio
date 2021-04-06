import {Row, Col, Button} from 'antd';
import './NavigationBar.css'
import {NavLink} from 'react-router-dom';

export default function NavigationBar(props){
    return (
        <Row id="navbar" style={{backgroundColor:props.bgColor}}> 
            <Col span={2}></Col>
            <Col span={3}> 
                    <img
                    style={{width:'50px'}}
                    src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/708D202C-EFBC-4A32-94AF-1FBC448FFFDB.svg"/>
               
            </Col>
            <Col span={17} align="right">
                <NavLink to="/">
                <span style={{ borderBottom: props.currentComponent == "work" ? '2px solid #15204e' : '0px', marginRight:'40px', fontSize:'16px', color:'#796b6d', position:'absolute',right:'50px', top:'5px'}}>
                    Work 
                </span>
                </NavLink>
                <NavLink to="/about">
                <span style={{ borderBottom: props.currentComponent == "about" ? '2px solid #15204e' : '0px', fontSize:'16px', color:'#796b6d', position:'absolute', right:'14px', top:'5px'}} >
                     About 
                </span>
                </NavLink>
            </Col>
            <Col span={2}></Col>

        </Row>
    )
}