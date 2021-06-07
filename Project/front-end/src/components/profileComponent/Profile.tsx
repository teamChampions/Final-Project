import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./profile.css";

function Profile() {

    return (
        <div>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="profile-maindiv">
                            <div className="profile-image">
                                <img style={{width:"200px", margin:"20% auto", height:"200px", borderRadius:"50%"}} src="https://newevolutiondesigns.com/images/freebies/flowers-facebook-cover-preview-2.jpg"/>
                            </div>
                            <div>
                                <strong style={{fontSize:"150%"}}>XXXXXXXXXXXXX</strong>
                                <div style={{maxWidth:"300px", margin:"7% 0 0 0"}}>
                                    <p>About</p>
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
