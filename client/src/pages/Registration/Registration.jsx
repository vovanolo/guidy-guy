import styles from "./Registration.module.css";
import Sidebar from "../../components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "auto",
    maxWidth: 525,
    minHeight: 470,
    marginTop: 20,
    position: "relative",
    font: "400 16px/18px 'Open Sans',sans-serif",
    background:
      "url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat bottom",
    //fontWeight: 800,
  },
  formCenter: {
    textAlign: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    position: "absolute",
    background: "rgba(40, 57, 101, 0.9)",
    boxShadow: "0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)",
  },
  input: {
    height: 30,
    border: "none",
    borderRadius: 25,
    background: "rgba(255,255,255,.1)",
  },
  label: {
    color: "white",
  },
  textCenter: {
    marginBottom: 50,
    color: "#fff",
    fontSize: 23,
    display: "block",
    textAlign: "center",
  },
  Errorscolor: { color: "red" },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <div>
      <Sidebar />
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          } else if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } else if (!values.password) {
            errors.password = "Required";
          } else if (!values.confirmPassword) {
            errors.confirmPassword = "Required";
          } else if (values.password == values.confirmPassword) {
            return;
          } else {
            errors.confirmPassword = "Invalid confirmPassword";
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
            <form className={classes.formCenter} onSubmit={handleSubmit}>
              <h1 className={classes.textCenter}>Registration</h1>
              <label className={classes.label} htmlFor="firstName">
                Username
              </label>
              <br />
              <input
                className={classes.input}
                type="name"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder={
                  errors.username && touched.username && errors.username
                }
              />
              <br />
              <div className={classes.Errorscolor}>
                {errors.username && touched.username && errors.username}
              </div>
              <br />
              <label className={classes.label} htmlFor="firstName">
                Email
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
              <div className={classes.Errorscolor}>
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
                placeholder={
                  errors.password && touched.password && errors.password
                }
              />
              <br />
              <div className={classes.Errorscolor}>
                {errors.password && touched.password && errors.password}
              </div>
              <br />
              <label className={classes.label} htmlFor="firstName">
                Confirm password
              </label>
              <br />
              <input
                className={classes.input}
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmPassword}
                placeholder={
                  errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword
                }
              />
              <br />
              <div className={classes.Errorscolor}>
                {errors.confirmPassword &&
                  touched.confirmPassword &&
                  errors.confirmPassword}
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
              <br />
              <br />
              <Divider variant="middle" />
              <Divider variant="middle" />
              <Divider variant="middle" />
              <Divider variant="middle" />
              <Button>Forgot password?</Button>
              <br />
              <br />
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
