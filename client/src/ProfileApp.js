import Profile from "./Profile";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import {Container} from "react-bootstrap";


function App() {
    return (
        <>
            <Container style={ {backgroundColor:"#e0e0d1", marginBottom: 30, marginTop: 30} }>
                <Row>
                    <Col style={ {marginBottom: 15, marginTop: 15} }>
                        <img style={ {marginLeft: 15, marginRight: 5} }
                             width={20} height={20} src="https://getbootstrap.com/docs/5.2/assets/img/favicons/favicon-32x32.png"  alt={"alt here"}/>
                        Media Library
                    </Col>

                </Row>
            </Container>


            <Container>
               <Profile />
            </Container>
        </>
    );
}



export default App;
