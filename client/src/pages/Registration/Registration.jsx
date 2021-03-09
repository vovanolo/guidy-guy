import styles from "./Registration.module.css";
import Sidebar from "../../components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "auto",
    width: "auto",
    backgroundColor: "rgba(0, 0, 0, 0.89)",
    borderadius: 3,
    padding: 70,
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -50%)",
    fontFamily: "'Times New Roman', Times, serif",
    fontWeight: 800,
  },
  input: { height: 30, border: "2px solid white" },
  label: { color: "white" },
  textCenter: {
    color: "#fff",
    fontSize: 23,
    display: "block",
    textAlign: "center",
  },
  color: { color: "red" },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className={classes.root}>
            <h1 className={classes.textCenter}>Registration</h1>
            <form onSubmit={handleSubmit}>
              <label className={classes.label} htmlFor="firstName">
                First Name
              </label>
              <br />
              <input
                className={classes.input}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder={errors.email && touched.email && errors.email}
              />
              <br />
              <div className={classes.color}>
                {errors.email && touched.email && errors.email}
              </div>
              <br />
              <label className={classes.label} htmlFor="password">
                Password
              </label>
              <br />
              <input
                className={classes.input}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <br />
              <div className={classes.color}>
                {errors.password && touched.password && errors.password}
              </div>
              <br />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
