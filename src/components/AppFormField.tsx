import React from 'react';
import {useFormikContext} from 'formik';

import AppTextInput from './AppTextInput';
import ErrorMessage from './ErrorMessage';

import theme from '../config/theme';

const AppFormField = ({name, ...otherProps}) => {
  const {handleChange, setFieldTouched, touched, errors} = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        placeholderTextColor={theme.colors.white}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
