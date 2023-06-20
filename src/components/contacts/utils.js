export const isReadyToSubmit = (errors, touched) => {
  return !errors.email &&
    !errors.name &&
    !errors.message &&
    touched.email &&
    touched.message &&
    touched.name
    ? true
    : false;
};
