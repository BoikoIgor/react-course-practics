import styled from 'styled-components';
import { Form as FormikForm, ErrorMessage as FormikErrorMessage } from 'formik';

export const Form = styled(FormikForm)`
  width: 25rem;
  padding: 0.5rem;
  border: 0.05rem solid ${p => p.theme.colors.black};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 0.5rem;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 0.75rem;
  color: ${p => p.theme.colors.error};
`;
