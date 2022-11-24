import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";

function App() {
    const [profiles, setProfiles]= useState(null);
    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const fetchProfile = async () =>{
            const response = await fetch('http://localhost:3001/getAllProfiles')
            const json = await response.json()
            if(response.ok){
                setProfiles(json)
            }
        }
        fetchProfile()
    }, [])//empty dependency array fires on first render only



    return (
        <>
            {profiles && profiles.map((profiles) => (
            <Container style={ {marginBottom: 20, marginTop: 20} }>
                <Row>
                    <Col xs lg={4}
                         className='g-0' >
                        <img className='g-0'
                             width={300}
                             height={300}
                             src={profiles.profilePictureURL}
                             alt="new"
                        />
                    </Col>

                    <Col xs lg={7}
                         style={{disply:'flex', justifyContent:'left'}}
                         className='g-0'
                         size='6'>
                        <Row>
                            <h2>
                                {profiles.fullName}
                            </h2>
                        </Row>
                        <Row style={ { marginTop: 15} }>
                            <p>
                                {profiles.bio}
                            </p>
                        </Row>
                    </Col>
                </Row>
            </Container>
            ))}
        </>
    );
}



export default App;
