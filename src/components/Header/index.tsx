import React from "react";
import { Picker } from '@react-native-picker/picker';

import { Container, Title } from './styles';

import { SENSORES } from '../../utils/sensores';

export type SensoresProps = "Sensor-Oxigênio" | "Sensor-Temperatura";

type Props = {
  selectedValue: SensoresProps;
  onValueChange: (value: SensoresProps) => void;
}

export function Header({ selectedValue, onValueChange }: Props) {
  return (
    <Container>
      <Title>Fish-Care</Title>

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue: SensoresProps) => onValueChange(itemValue)}
        style={{
          backgroundColor: '#FFF',
          height: 50,
          flex: 1,
          marginLeft: 50
        }}
      >
        {
          SENSORES?.map(item => (
            <Picker.Item
              key={item?.label}
              label={item?.label}
              value={item?.label}
            />
          ))
        }
      </Picker>
    </Container>
  );
}
