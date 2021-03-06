import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, LogoContainer, ButtonsContainer } from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import api from '../../services/api';

const Landing: React.FC = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/connections');

      const { total } = response.data;

      setTotalConnections(total);
    }
    loadData();
  });

  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </LogoContainer>

        <img src={landingImg} alt="Plataforma de estudos" />

        <ButtonsContainer>
          <Link to="/study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>

          <Link to="/give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </Link>
        </ButtonsContainer>

        <span>
          Total de
{' '}
{totalConnections} conexõesjá realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </Content>
    </Container>
  );
};

export default Landing;
