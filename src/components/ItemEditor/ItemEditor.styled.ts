import styled, { css } from 'styled-components';

export const Card = styled.div`
  max-width: 600px;
  padding: 24px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 12px;
  * + * {
    margin-top: 12px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-top: 20px;
`;

export const Label = styled.label<{ htmlFor: string }>`
  width: 120px;
  margin: 0 20px 0 0;
`;

export const LabelBold = styled.p`
  margin-top: 0;
  font-weight: bold;
`;

const inputStyles = css`
  padding: 6px;
  border-radius: 6px;
  margin-top: 0;
`;

export const NumberInput = styled.input.attrs({
  type: 'number',
})`
  ${inputStyles};
`;

export const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  ${inputStyles};
`;

export const DateInput = styled.input.attrs({
  type: 'date',
})`
  ${inputStyles};
`;

export const TextInput = styled.input.attrs({
  type: 'text',
})`
  ${inputStyles};
`;

export const EmailInput = styled.input.attrs({
  type: 'email',
})`
  ${inputStyles};
`;

export const Textarea = styled.textarea.attrs({
  rows: 6,
  cols: 50,
})`
  ${inputStyles};
`;
