import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import HomeTopStyles from './HomepageTop.module.scss';
import { useTranslation } from 'react-i18next';

function HomepageTop() {
  const { t } = useTranslation();

  return (
    <div>
      <Container className={HomeTopStyles.main_container}>
        <Row>
          <Col xs={12} md={6}>
            <h1>{t('We buy and build brands')}</h1>
            <p className={HomeTopStyles.left_para}>{t('We offer you attractive and flexible terms for your business. Continue to profit as we grow your brand for you.')}</p>
            <div className={HomeTopStyles.two_buttons}>
              <button>{t('Get A Valuation')}</button>
              <button>{t('Partner With Us')}</button>
            </div>
          </Col>
          <Col xs={12} md={6} style={{ position: 'relative' }}>
            <Image src="../images/Spiral Pattern.png" alt="Right Side Image" fluid />
            <div className={HomeTopStyles.right_revenue_content}>
              <h6>{t('Latest Deal')}</h6>
              <p className={HomeTopStyles.catefory}>{t('Category: Beauty & Personal Care')}</p>
              <span>{t('7SKUs')}</span>
              <h3>{t('$5,700,000')}</h3>
              <p>{t('Malaysia-based brand offering premium, dermatologist-formulated and muslim-friendly Japanese skincare for sensitive skin.')}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomepageTop;