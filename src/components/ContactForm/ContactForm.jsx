import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
// import * as Yup from "yup";
import css from "./ContactForm.module.css";

const initialValues = {
  name: "",
  phone: "",
};

export default function ContactForm() {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            htmlFor={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div>
          <label htmlFor={phoneFieldId}>Number</label>
          <Field
            className={css.field}
            type="phone"
            name="name"
            htmlFor={phoneFieldId}
          />
          <ErrorMessage
            className={css.error}
            name="number"
            htmlFor={phoneFieldId}
          />
          <button className={css.btn} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
}
