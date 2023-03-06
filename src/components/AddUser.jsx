import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

export const AddUser = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post(
      "http://ccnayt.dnsalias.com:9095/api/v1/persons/many",
      user
    );
    navigate("/");
  };

  const validate = Yup.object({
    name: Yup.string()
      .min(4, "Must be 4 charecters or more")
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    username: Yup.string()
      .min(4, "Must be 4 charecters or more")
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    email: Yup.string()
      .email("Enter valid Email")
      .required("Email is required"),
    phone: Yup.string()
      .min(6, "Number must be at least 6 charaters")
      .required("Number is required"),
    website: Yup.string()
      .min(6, "Number must be at least 6 charaters")
      .required("Number is required"),
  });
  return (
    <div>
      <h2>Add User</h2>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          phone: "",
          website: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => (
          <div className="container">
            <div className="w-75 mx-auto shadow p-5">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Nombre"
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Apelldio Paterno"
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Apellido Materno"
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Correo"
                    name="phone"
                    value={phone}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Telefono Movil"
                    name="website"
                    value={website}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div>
                  <br />
                  <button className="btn btn-primary btn-block">
                    Agregar Usuario
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
