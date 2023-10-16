import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios'; // Importez Axios

function MyForm() {
  const initialValues = {
    username: '', // Champs "username"
    password: '', // Champs "Mot de passe"
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Utilisez Axios pour effectuer une requête POST avec les données du formulaire
      const response = await axios.post('http://127.0.0.1:8000/api/login_check', values);

      // Faites quelque chose avec la réponse, par exemple, affichez un message de succès
      console.log('Réponse du serveur :', response.data);
    } catch (error) {
      // Gérez les erreurs, par exemple, affichez un message d'erreur
      console.error('FUCK :', error);
    }

    setSubmitting(false);
  };

  return (
    <div>
      <h1>Formulaire Axios sans Yup</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">username :</label>
            <Field type="username" id="username" name="username" /> {/* Champ "username" */}
            <ErrorMessage name="username" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="password">Mot de passe :</label>
            <Field type="password" id="password" name="password" /> {/* Champ "Mot de passe" */}
            <ErrorMessage name="password" component="div" className="error" />
          </div>

          <div>
            <button type="submit">Soumettre</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MyForm;
