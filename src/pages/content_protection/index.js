import React from 'react';

import {Input} from 'antd';
import { useEffect } from 'react';
export const lockIcon = "https://cdn.zeplin.io/6061ed0fe3392716f0cc504a/assets/373D7483-4A00-449A-96E4-6899204BBE2D.svg";
export default function ContentProtection(props){

    useEffect(()=>{
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div style={{paddingTop:'150px', backgroundColor:'#f5f5f5', height:'100vh'}} align="center">
                <img src={lockIcon} style={{width:'39px'}}/>
                <br/>
                <h3 style={{color:'#5e5a5a', fontFamily:'Raleway', marginTop:'32px', marginBottom:'32px'}}>
                    <b>
                        To comply with my non-disclosure agreement. 
                    <br/>
                    This content is protected. 
                    </b>
                </h3>
                <p style={{marginBottom:'89px', color:'#5e5a5a', fontFamily:'Raleway'}}>To view please enter password.</p>
                <Input type="text" placeholder="Enter Password" style={{fontSize:'15px', width:'230px'}}></Input>
            </div>
        </>
    )
}