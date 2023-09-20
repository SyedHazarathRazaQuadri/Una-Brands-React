import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ServiceStyles from './OurServices.module.scss'

function OurServices() {
  return (
    <div>
        <h3 className={ServiceStyles.service_heading}>Una will help <b>accelerate your brand’s growth and build upon your legacy.</b></h3>
        <Container className={ServiceStyles.main_container}>
            <Row className={ServiceStyles.logo_text_row}>
                <Col xs={12} md={6} className={ServiceStyles.logo_with_content}>
                    <Image src="../images/hand-shake.png" alt="Right Side Image" fluid />
                    <p>We give you a fair valuation, working closely with you every step of the way for a fast and fuss-free settlement.</p>
                </Col>
                <Col xs={12} md={6} className={ServiceStyles.logo_with_content}>
                    <Image src="../images/Expand Internationally_1.png" alt="Right Side Image" fluid />
                    <p>We give you a fair valuation, working closely with you every step of the way for a fast and fuss-free settlement.</p>
                </Col>
            </Row>
            <Row className={ServiceStyles.logo_text_row}>
                <Col xs={12} md={6} className={ServiceStyles.logo_with_content}>
                    <Image src="../images/In House Team Icon New.png" alt="Right Side Image" fluid />
                    <p>We give you a fair valuation, working closely with you every step of the way for a fast and fuss-free settlement.</p>
                </Col>
                <Col xs={12} md={6} className={ServiceStyles.logo_with_content}>
                    <Image src="../images/analytics-image.png" alt="Right Side Image" fluid />
                    <p>We give you a fair valuation, working closely with you every step of the way for a fast and fuss-free settlement.</p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OurServices;