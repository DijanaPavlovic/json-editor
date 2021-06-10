import { ChangeEvent } from 'react';

import { PropertyValue } from 'shared/types';
import { isDate, isEmail } from 'shared/utils';
import {
  Card,
  Row,
  Label,
  LabelBold,
  NumberInput,
  Checkbox,
  DateInput,
  Textarea,
  TextInput,
  EmailInput,
} from './ItemEditor.styled';

interface EditorProps {
  data: Record<string, PropertyValue>;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const getInputField = (value: PropertyValue): React.ElementType | null => {
  switch (typeof value) {
    case 'number':
      return NumberInput;
    case 'boolean':
      return Checkbox;
    case 'string':
      if (isEmail(value)) return EmailInput;
      if (isDate(value)) return DateInput;
      if (value.length > 50) return Textarea;
      return TextInput;
    default:
      return null;
  }
};

const ItemEditor = ({ data, onChange }: EditorProps): React.ReactElement => {
  const { id } = data;

  return (
    <Card>
      {Object.entries(data).map(([key, value]) => {
        if (key === 'id')
          return (
            <Row key={key}>
              <LabelBold>{key}:</LabelBold>
              <LabelBold>{value}</LabelBold>
            </Row>
          );

        const Input = getInputField(value);
        if (!Input) return null;

        return (
          <Row key={key}>
            <Label htmlFor={`${id}-${key}`}>{key}:</Label>
            <Input
              name={key}
              id={`${id}-${key}`}
              onChange={onChange}
              value={value}
              checked={value}
            />
          </Row>
        );
      })}
    </Card>
  );
};

export default ItemEditor;
