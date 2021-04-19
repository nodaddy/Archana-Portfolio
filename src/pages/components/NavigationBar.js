import {Row, Col, Button, Modal} from 'antd';
import './NavigationBar.css'
import {NavLink} from 'react-router-dom';
import { useState } from 'react';

export default function NavigationBar(props){

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Row id="navbar" style={{backgroundColor:props.bgColor}}> 
            <Col span={2}></Col>
            <Col span={3}> 
                    <NavLink to="/archanaPortfolio">
                    <img
                    style={{width:'50px'}}
                    src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/708D202C-EFBC-4A32-94AF-1FBC448FFFDB.svg"/>
               </NavLink>
            </Col>
            <Col span={17} align="right">
                <NavLink className="showInDesktop" to="/">
                <span style={{ borderBottom: props.currentComponent == "work" ? '2px solid #15204e' : '0px', marginRight:'40px', fontSize:'16px', color:'#796b6d', position:'absolute',right:'50px', top:'5px'}}>
                    Work 
                </span>
                </NavLink>
                <NavLink className="showInDesktop" to="/about">
                <span style={{ borderBottom: props.currentComponent == "about" ? '2px solid #15204e' : '0px', fontSize:'16px', color:'#796b6d', position:'absolute', right:'14px', top:'5px'}} >
                     About 
                </span>
                </NavLink>
                <img onClick={()=>{
                    setModalVisible(true);
                }} className="showInMobile" style={{display:'none', position:'absolute',right:'10px', top:'10px'}} src="https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/D2F9915A-087B-4C1E-8479-80714FB56369.svg"/>
                <Modal
                
          visible={modalVisible}
          title=""
          onOk={()=>{

          }} 
          onCancel={()=>{
            setModalVisible(false);
          }}
          footer={[]}
        >
            <div style={{height:'50vh', paddingTop:'60px', paddingLeft:'30px'}}>
            <NavLink 
            onClick={()=>{
            setModalVisible(false);
          }}
           to="/archanaPortfolio">
                <h2 style={{fontFamily:'Palatino-Roman', fontWeight: props.currentComponent == "work" ? '900' : '500'}} >
                     Work
                </h2>
                </NavLink>
                <br/> 
         <NavLink 
         onClick={()=>{
            setModalVisible(false);
          }}
         to="/about">
                <h2 style={{fontFamily:'Palatino-Roman', fontWeight: props.currentComponent == "about" ? '900' : '500'}} >
                     About 
                </h2>
                </NavLink>
            </div>
        </Modal>
            </Col>
            <Col span={2}></Col>

        </Row>
    )
}