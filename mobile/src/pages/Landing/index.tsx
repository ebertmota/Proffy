import React, { useCallback, useState, useEffect } from 'react';

import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import {
  Container,
  Image,
  Title,
  TitleBold,
  ButtonsContainer,
  Button,
  ButtonImage,
  ButtonText,
  TotalConnections,
} from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

const Landing: React.FC = () => {
  const { navigate } = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/connections');

      const { total } = response.data;

      setTotalConnections(total);
    }

    loadData();
  }, []);

  const handleNavigateToGiveClassesPage = useCallback(() => {
    navigate('GiveClasses');
  }, [navigate]);

  const handleNavigateToStudyPage = useCallback(() => {
    navigate('Study');
  }, [navigate]);

  return (
    <Container>
      <Image source={landingImg} />

      <Title>
        Seja bem-vindo,
        {'\n'}
        <TitleBold>O que deseja fazer?</TitleBold>
      </Title>

      <ButtonsContainer>
        <Button onPress={handleNavigateToStudyPage}>
          <ButtonImage source={studyIcon} />

          <ButtonText>Estudar</ButtonText>
        </Button>

        <Button secondary onPress={handleNavigateToGiveClassesPage}>
          <ButtonImage source={giveClassIcon} />

          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>

      <TotalConnections>
        {`Total de ${totalConnections} conexões já realizadas `}
        <ButtonImage source={heartIcon} />
      </TotalConnections>
    </Container>
  );
};

export default Landing;
