import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from './Header';
import "../style.css";

function Profile() {

    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="profile-maindiv">
                            <div className="profile-image">
                                <img style={{width:"200px", margin:"20% auto", height:"200px", borderRadius:"50%"}} src="https://newevolutiondesigns.com/images/freebies/flowers-facebook-cover-preview-2.jpg"/>
                            </div>
                            <div style={{margin:"9% 0"}}>
                                <h4>XXXXXXXXXXXXX</h4>
                                <div style={{maxWidth:"300px", margin:"7% 0 0 0"}}>
                                    <h6>About</h6>
                                    <p>hiii, I am a full stack MERN developer, you can follow me see more about full stack especially about react</p>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Profile
