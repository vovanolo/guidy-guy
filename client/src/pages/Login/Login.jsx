import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import User from "../User";
import Sidebar from "../../components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import { Formik } from "formik";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import urls from "../../urls";

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

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short!")
    .max(25, "Too Long!")
    .required("Required"),
});

export default function Login() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [jwt, setJwt] = useState(null);
  const [сheckTransition, setCheckTransition] = useState(false); // Перевірка на перехід сторінка User

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://alin-ua-api.herokuapp.com/auth/local",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password,
        }),
      }
    );

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("token", data.jwt);
      setJwt(localStorage.getItem("token"));
      setCheckTransition(true);
      console.log(data);
    } else {
      alert("Помилка HTTP: " + response.status);
      setCheckTransition(false);
    }
  };
  console.log(сheckTransition);
  if (jwt !== null && сheckTransition === true) {
    return <User />;
  }

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
        validationSchema={SignupSchema}
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
          isSubmitting,
          /* and other goodies */
        }) => (
          <div className={classes.root}>
            <form className={classes.formCenter} onSubmit={handleSubmit}>
              <h1 className={classes.textCenter}>{t("LogIn.login")}</h1>
              <label className={classes.label} htmlFor="firstName">
                {t("LogIn.email")}
              </label>
              <br />
              <input
                className={classes.input}
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={setEmail(values.email)}
                placeholder={errors.email && touched.email && errors.email}
              />
              <br />
              <div className={classes.Errorscolor}>
                {errors.email && touched.email && errors.email}
              </div>
              <br />
              <label className={classes.label} htmlFor="password">
                {t("LogIn.password")}
              </label>
              <br />
              <input
                className={classes.input}
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={setPassword(values.password)}
                placeholder={
                  errors.password && touched.password && errors.password
                }
              />
              <br />
              <div className={classes.Errorscolor}>
                {errors.password && touched.password && errors.password}
              </div>
              <br />
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                disabled={
                  !(values.email &&
                  values.password &&
                  !errors.email &&
                  !errors.password
                    ? true
                    : false)
                }
              >
                {t("LogIn.submit")}
              </Button>
              <br />
              <br />
              <Divider variant="middle" />
              <Divider variant="middle" />
              <Divider variant="middle" />
              <Divider variant="middle" />
              <Button>{t("LogIn.forgotpassword")}</Button>
              <br />
              <br />
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
}
