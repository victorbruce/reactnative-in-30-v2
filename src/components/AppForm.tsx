import React from 'react';
import {Formik} from 'formik';

const AppForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
}: any) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
