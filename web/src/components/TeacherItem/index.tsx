import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container } from './styles';

const TeacherItem: React.FC = () => {
  return (
    <Container>
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/48302018?s=460&v=4"
          alt="Ebert Mota"
        />
        <div>
          <strong>Ebert Mota</strong>
          <span>Quimica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de quimica avançada.
        <br />
        Apaixonado por explodir coisas em laboratorio e por mudar a vidade de
        pessoas através de experiências explosivas.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </Container>
  );
};

export default TeacherItem;
