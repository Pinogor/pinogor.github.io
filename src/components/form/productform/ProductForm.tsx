import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import '../form-style.scss';
import '../../../index.css';

const ProductForm: React.FC = () => {
  const { t } = useTranslation();

  const initialProduct: TProduct = {
    id: Math.floor(Math.random() * 1000),
    name: '',
    price: null,
    description: '',
    imageUrl: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(t('productForm.nameRequired')),
    price: Yup.number().required(t('productForm.priceRequired')).min(0, 'Price must be greater than 0'),
    description: Yup.string().required(t('productForm.descriptionRequired')),
    imageUrl: Yup.string().url(t('productForm.invalidUrl')),
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
            <label htmlFor="name">{t('productForm.productName')}</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" component="p" />
          </div>

          <div>
            <label htmlFor="price">{t('productForm.price')}</label>
            <Field name="price" type="number" />
            <ErrorMessage name="price" component="p" />
          </div>

          <div>
            <label htmlFor="description">{t('productForm.description')}</label>
            <Field name="description" type="textarea" />
            <ErrorMessage name="description" component="p" />
          </div>

          <div>
            <label htmlFor="imageUrl">{t('productForm.imageUrl')}</label>
            <Field name="imageUrl" type="url" />
            <ErrorMessage name="imageUrl" component="p" />
          </div>

          <button type="submit">{t('addProductButton')}</button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
