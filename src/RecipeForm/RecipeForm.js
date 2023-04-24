import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { FormField, Form, ErrorMessage } from './RecipeForm.styled';
import { nanoid } from 'nanoid';

const RecipeSchema = Yup.object().shape({
  name: Yup.string('Must be in string format').required('Required field!'),
  image: Yup.string('URL to image')
    .url('URL waiting')
    .required('Required field!'),
  time: Yup.number().positive('Must be > 0!').required('Required field!'),
  servings: Yup.number().positive('Must be > 0!').required('Required field!'),
  calories: Yup.number().positive('Must be > 0!').required('Required field!'),
  difficulty: Yup.string('Choose one of the following')
    .oneOf(['easy', 'medium', 'hard'])
    .required('Required field!'),
});

export const RecipeForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
      }}
      validationSchema={RecipeSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid(5) });
        actions.resetForm();
      }}
    >
      <Form autoComplete="on">
        <FormField>
          Name
          <Field name="name" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Image
          <Field name="image" />
          <ErrorMessage name="image" component="span" />
        </FormField>
        <FormField>
          Time
          <Field type="number" name="time" />
          <ErrorMessage name="time" component="span" />
        </FormField>
        <FormField>
          Servings
          <Field type="number" name="servings" />
          <ErrorMessage name="servings" component="span" />
        </FormField>
        <FormField>
          Calories
          <Field type="number" name="calories" />
          <ErrorMessage name="calories" component="span" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
          <ErrorMessage name="difficulty" component="span" />
        </FormField>
        <button type="submit">Add recipe</button>
      </Form>
    </Formik>
  );
};
