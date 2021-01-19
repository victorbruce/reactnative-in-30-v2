import React from 'react';
import {useFormikContext} from 'formik';

import AppButton from './AppButton';

import theme from '../config/theme';

interface SubmitButtonProps {
  title: string;
}

const SubmitButton = ({title}: SubmitButtonProps) => {
  const {handleSubmit} = useFormikContext();

  return (
    <AppButton
      title={title}
      btnTextColor={theme.colors.black}
      onPress={handleSubmit}
    />
  );
};

export default SubmitButton;
