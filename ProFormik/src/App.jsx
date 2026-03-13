import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const App = () => {

  const initialValues = {
    productName: "",
    price: "",
    category: "",
    quantity: ""
  };

  const validationSchema = Yup.object({
    productName: Yup.string()
      .required("Product name is required"),

    price: Yup.number()
      .typeError("Price must be a number")
      .positive("Price must be greater than 0")
      .required("Price is required"),

    category: Yup.string()
      .required("Category must be selected"),

    quantity: Yup.number()
      .min(1, "Quantity must be minimum 1")
      .required("Quantity is required")
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h2>Product Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>

          <div>
            <label>Product Name</label>
            <Field name="productName" type="text" />
            <ErrorMessage name="productName" component="div" />
          </div>

          <div>
            <label>Price</label>
            <Field name="price" type="text" />
            <ErrorMessage name="price" component="div" />
          </div>

          <div>
            <label>Category</label>
            <Field as="select" name="category">
              <option value="">Select Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
              <option value="Food">Food</option>
            </Field>
            <ErrorMessage name="category" component="div" />
          </div>

          <div>
            <label>Stock Quantity</label>
            <Field name="quantity" type="number" />
            <ErrorMessage name="quantity" component="div" />
          </div>

          <button type="submit">Submit</button>

        </Form>
      </Formik>
    </div>
  );
};

export default App;