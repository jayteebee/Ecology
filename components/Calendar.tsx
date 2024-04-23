"use client"

import React from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { CALENDAR_HEADER } from '@/public/content/content';
import { sendGTMEvent } from '@next/third-parties/google'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  dates: Yup.string().required('Dates are required'),
  cameras: Yup.number().required('Number of cameras is required').min(1, 'Must be at least 1').max(6, 'Cannot be more than 6'),
  project: Yup.string().required('Project is required'),
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
});

const initialValues = {
  dates: '',
  cameras: 0,
  project: '',
  fullName: '',
  email: '',
};

interface FormValues {
  dates: string;
  cameras: number;
  project: string;
  fullName: string;
  email: string;
}

const onSubmit = async (values: FormValues) => {
  // axios.defaults.baseURL = 'http://localhost:3001'; 
  axios.defaults.baseURL = 'https://www.thermalvisionecology.co.uk'; 
  try {
    await axios.post('/send-email', values);
    console.log('Email sent successfully');
    // You can add any success handling here, like showing a success message to the user
  } catch (error) {
    console.error('Error sending email:', error);
    // You can add error handling here, like showing an error message to the user
  }
  console.log('Form submitted with values:', values);
};



const CalendlyForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen"> {/* Center the form vertically */}
      <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:max-w-none"> {/* Set maximum width for the form */}
        <h1 className="h2 text-center mb-4" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>
          {CALENDAR_HEADER.HEADER}
        </h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mx-auto pb-6"> {/* Center the form horizontally and set width */}
              <div className="mb-4">
                <label htmlFor="fullName" className="block mb-1">Full Name</label>
                <Field type="text" id="fullName" name="fullName" className="w-full border-gray-300 rounded-md p-2  placeholder-black-500" placeholder="Full Name here.." />
                <ErrorMessage name="fullName" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">Email</label>
                <Field type="email" id="email" name="email" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" placeholder="Email Address here.." />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="dates" className="block mb-1">Dates Needed</label>
                <Field type="text" id="dates" name="dates" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" placeholder="Select dates. Can be a single day, 2+ consecutive days, or multiple individual days..." />
                <ErrorMessage name="dates" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="cameras" className="block mb-1">How many cameras will you need? </label>
                <Field type="number" id="cameras" name="cameras" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" />
                <ErrorMessage name="cameras" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="project" className="block mb-1">Some details about the project you'll be using the Ecology Kit for</label>
                <Field as="textarea" id="project" name="project" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" rows="3" placeholder="Enter your details and any further questions you may have here. We will answer them as soon as possible." />
                <ErrorMessage name="project" component="div" className="text-red-600" />
              </div>
              <div className="flex justify-center w-full"> {/* Add this wrapper div */}
        <button type="submit" className="bg-green-300 text-white px-4 py-2 rounded-md flex justify-center items-center">Check Availability</button>
      </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CalendlyForm;
