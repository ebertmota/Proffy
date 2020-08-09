import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #f0f0f7;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
})`
  margin-top: -40px;
`;

export const SearchForm = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-family: Poppins_400Regular;
  color: #d4c2ff;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#c1bccc',
})`
  height: 54px;
  background: #fff;
  border-radius: 8px;
  justify-content: center;
  padding: 0 16px;
  margin-top: 4px;
  margin-bottom: 16px;
`;

export const InputGroup = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputBlock = styled.View`
  width: 48%;
`;

export const FilterButton = styled(BorderlessButton)``;

export const SubmitButton = styled(RectButton)`
  background: #04d361;
  flex-direction: row;
  height: 56px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const SubmitButtonText = styled.Text`
  font-family: Archivo_700Bold;
  font-size: 16px;
  color: #fff;
`;
