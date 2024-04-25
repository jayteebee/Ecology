"use client"

import React, { useState } from 'react';

import { CALENDAR_HEADER } from '@/public/content/content';
import { sendGTMEvent } from '@next/third-parties/google'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const validationSchema = Yup.object().shape({
  dates: Yup.string().required('Dates are required'),
  cameras: Yup.number().required('Number of cameras is required').min(1, 'Must be at least 1').max(6, 'Cannot be more than 6'),
  project: Yup.string().required('Project is required'),
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  companyName: Yup.string().required('Company Name is required'),
  email: Yup.string().required('Email is required').email('Invalid email'),
  phoneNumber: Yup.string(),
});

const initialValues = {
  dates: '',
  cameras: 0,
  project: '',
  firstName: '',
  lastName: '',
  companyName: '',
  email: '',
  phoneNumber : ''
};

interface FormValues {
  dates: string;
  cameras: number;
  project: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
}


const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'production' 
  // ? 'https://ecology-backend-g5phtd16c-jayteebees-projects.vercel.app' 
  ? "https://ecologybackend.netlify.app/.netlify/functions"
              //: 'http://localhost:3001',
              : "http://localhost:8888/.netlify/functions",
              headers: {
      'Content-Type': 'application/json',

  },
});

const CalendlyForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  
  const onSubmit = async (values: FormValues) => {  
    try {
      const submissionWithDate = {
        ...values,
        submittedAt: new Date().toISOString() // Adds the current date and time in ISO format
      };
      await axiosInstance.post('/send-email', submissionWithDate);
      console.log('Email sent successfully');
      setSubmitSuccess(true)
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitError(true);
    }
    console.log('Form submitted');
  };

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
                <label htmlFor="firstName" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>First Name</label>
                <Field type="text" id="firstName" name="firstName" className="w-full border-gray-300 rounded-md p-2  placeholder-black-500"  />
                <ErrorMessage name="firstName" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Last Name</label>
                <Field type="text" id="lastName" name="lastName" className="w-full border-gray-300 rounded-md p-2  placeholder-black-500"  />
                <ErrorMessage name="lastName" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="companyName" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Company Name</label>
                <Field type="text" id="companyName" name="companyName" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500"  />
                <ErrorMessage name="companyName" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Email</label>
                <Field type="email" id="email" name="email" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500"  />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block mb-1" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }}>Phone Number (optional)</label>
                <Field type="tel" id="phoneNumber" name="phoneNumber" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500"  />
                <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="dates" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Dates Needed</label>
                <Field type="text" id="dates" name="dates" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" rows="2" placeholder="Single day, 2+ consecutive days, or multiple individual days..." />
                <ErrorMessage name="dates" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="cameras" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>How many cameras will you need? </label>
                <Field type="number" id="cameras" name="cameras" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" />
                <ErrorMessage name="cameras" component="div" className="text-red-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="project" className="block mb-1" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)" }}>Some details about the project you'll be using the Ecology Kit for</label>
                <Field as="textarea" id="project" name="project" className="w-full border-gray-300 rounded-md p-2 placeholder-black-500" rows="3" placeholder="Enter your details and any further questions you may have here. We will answer them as soon as possible." />
                <ErrorMessage name="project" component="div" className="text-red-600" />
              </div>
              {submitSuccess && (
                <div className="mb-4 text-black">
                  Thank you for submitting your enquiry! We'll reply to you within 24 hours.
                </div>
              )}
                            {submitError && (
                <div className="mb-4 text-black">
                  There was an error submitting your enquiry. Please email jethro@thermalvisionresearch.co.uk with your enquiry. Thank you!
                </div>
              )}

              <div className="flex justify-center w-full"> 
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
