import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../form-style.scss';
import '../../../index.css';

const ProductForm: React.FC = () => {
  const initialProduct: TProduct = {
    id: Math.floor(Math.random() * 1000),
    name: '',
    price: null,
    description: '',
    imageUrl: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Product name is required'),
    price: Yup.number().required('Price is required').min(0, 'Price must be greater than 0'),
    description: Yup.string().required('Description is required'),
    imageUrl: Yup.string().url('Invalid URL'),
  });

  return (
    <Formik
      initialValues={initialProduct}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        resetForm();
      }}
    >
      {() => (
        <Form className="form-container">
          <div>
            <label htmlFor="name">Product Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="p" />
          </div>

          <div>
            <label htmlFor="price">Price</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" component="p" />
          </div>

          <div>
            <label htmlFor="description">Description</label>
            <Field name="description" type="textarea" />
            <ErrorMessage name="description" component="p" />
          </div>

          <div>
            <label htmlFor="imageUrl">Image URL</label>
            <Field name="imageUrl" type="url" />
            <ErrorMessage name="imageUrl" component="p" />
          </div>

          <button type="submit">Add Product</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
