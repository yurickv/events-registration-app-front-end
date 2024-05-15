import { useFetchEventID } from "../../hooks/useFetchEventID";
import { useParams } from "react-router-dom";
import "../Home/home.css";
import "./newMember.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { changeEvent } from "../../service/events-serviceAPI";
import { Loader } from "../../components/Loader/loader";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  birthDate: Yup.date()
    .max(new Date(), "Birth date must be in the past")
    .required("Birth date is required"),
  radioOption: Yup.string().required("Please select an option"),
});
const initValue = { fullName: "", email: "", birthDate: "", radioOption: "" };

const NewMember = () => {
  const { eventInfo, error, isLoading } = useFetchEventID();

  const { id } = useParams();

  const addNewMember = async (newMember) => {
    const controller = new AbortController();
    try {
      const addedNewMember = await changeEvent(id, controller, newMember);
      if (addedNewMember) {
        window.alert("You successfully added to event members");
      }
    } catch (error) {
      window.alert("Something went wrong, reload page and try again", error);
    } finally {
      controller.abort();
    }
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    addNewMember({
      title: eventInfo.title,
      description: eventInfo.description,
      eventDate: eventInfo.eventDate,
      organizer: eventInfo.organizer,
      members: [...eventInfo.members, values],
    });
    resetForm();
    setSubmitting(false);
  };

  return (
    <section>
      <h1 className="title">Register to event</h1>
      <h2 className="event-title">{eventInfo.title}</h2>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}

      {!error && (
        <Formik
          initialValues={initValue}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <Field type="text" name="fullName" />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div className="form-group">
                <label htmlFor="birthDate">Birth Date</label>
                <Field
                  type="date"
                  name="birthDate"
                  max={new Date().toISOString().split("T")[0]}
                />
                <ErrorMessage
                  name="birthDate"
                  component="div"
                  className="error"
                />
              </div>
              <div className="form-group">
                <label>Where did you hear about this event?</label>
                <div className="radio-group">
                  <label>
                    <Field type="radio" name="radioOption" value="LinkedIn" />
                    LinkedIn
                  </label>

                  <label>
                    <Field type="radio" name="radioOption" value="Dou" />
                    Dou
                  </label>

                  <label>
                    <Field type="radio" name="radioOption" value="Friends" />
                    Friends
                  </label>
                </div>

                <ErrorMessage
                  name="radioOption"
                  component="div"
                  className="error"
                />
              </div>
              <button type="submit" disabled={isSubmitting || isLoading}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      )}
    </section>
  );
};

export default NewMember;
