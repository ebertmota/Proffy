import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Content,
  Title,
  Description,
  Button,
  ButtonText,
} from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

const GiveClasses: React.FC = () => {
  const { goBack } = useNavigation();

  const handleNavigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  return (
    <Container>
      <Content source={giveClassesBgImage}>
        <Title>Quer ser um Proffy?</Title>
        <Description>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web.
        </Description>
      </Content>
      <Button onPress={handleNavigateBack}>
        <ButtonText>Tudo bem</ButtonText>
      </Button>
    </Container>
  );
};

export default GiveClasses;
