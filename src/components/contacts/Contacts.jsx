import React, { useRef, useEffect, useContext } from "react";
import "./contacts.scss";
import contactsInfo from "./constants";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import FormError from "../shared/FormError/FormError";
import { Formik, Form, Field } from "formik";
import emailjs from "emailjs-com";
import { useInView } from "react-intersection-observer";
import { InViewIDContext } from "../../context/InViewIDContext";
import classNames from "classnames";
import Button from "../shared/Button/Button";
import * as yup from "yup";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { isReadyToSubmit } from "./utils";
import useWindowSize from "@rooks/use-window-size";
import { getThreshold } from "../shared/utils";
import Reveal from "../shared/Reveal/Reveal";

const validationSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid email address"),
  message: yup.string().required("Required"),
});

const Contacts = () => {
  const { innerHeight, innerWidth } = useWindowSize();
  const form = useRef();

  const { ref, inView } = useInView({
    threshold: getThreshold(innerHeight, innerWidth),
  });

  const { changeInViewID } = useContext(InViewIDContext);

  useEffect(
    () => changeInViewID(inView ? "contacts" : ""),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inView]
  );

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setTimeout(handleClose, 10000);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <section id="contacts" ref={ref}>
      <SectionTitle>
        <Reveal>
          <span>Get In Touch</span>
        </Reveal>
        <br />
        <Reveal>
          <div>Contact Me</div>
        </Reveal>
      </SectionTitle>

      <div className="container contacts__container">
        <ul className="contacts__options">
          {contactsInfo.contacts.map(
            ({ icon, title, content, href, action }) => {
              return (
                <Reveal width="100%">
                  <li key={title} className="contacts__option">
                    {icon}
                    <h3>{title}</h3>
                    <p className="contacts__option__content">{content}</p>
                    <a href={href} target="_blank" rel="noreferrer">
                      {action}
                    </a>
                  </li>
                </Reveal>
              );
            }
          )}
        </ul>

        <Formik
          validationSchema={validationSchema}
          initialValues={{
            name: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, { resetForm }) => {
            emailjs.sendForm(
              "service_sddmczb",
              "1",
              form.current,
              "s3BmCrgK5WCJIT4cG"
            );
            resetForm();
          }}
        >
          {({ errors, touched }) => (
            <Form ref={form}>
              {contactsInfo.form.map(
                ({ id, placeholder, type, component, rows }, index) => {
                  return (
                    <Reveal width="100%" key={id}>
                      <div>
                        <Field
                          id={id}
                          name={id}
                          placeholder={placeholder}
                          type={type}
                          className={classNames({
                            error__border: errors[`${id}`] && touched[`${id}`],
                          })}
                          component={component}
                          rows={rows}
                        />

                        <FormError>
                          {errors[`${id}`] && touched[`${id}`] ? (
                            errors[`${id}`]
                          ) : (
                            <br />
                          )}
                        </FormError>
                      </div>
                    </Reveal>
                  );
                }
              )}

              <Reveal>
                <Button
                  primary
                  type="submit"
                  onClick={
                    isReadyToSubmit(errors, touched) ? handleClick : null
                  }
                >
                  Send Message
                </Button>
              </Reveal>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }} className="popover">
                  THANK YOU <br />
                  Your message has been sent. <br />I will get back to you as
                  soon as possible.
                  <br />
                  May the force be with you!
                </Typography>
              </Popover>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default Contacts;
