import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

//const UKPostCodeReg = `([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})`;
const UKPostCodeReg = `([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?)))) ?[0-9][A-Za-z]{2})`;


const PostcodeSchema = Yup.object().shape({
  postCode: Yup.string()
     .min(2, 'Too Short!')
     .max(12, 'Too Long!')
     .required('Required')
     .matches(UKPostCodeReg, "Invalid UK postcode")
});



const PostcodeSelector = (props) => {
    return (
        <>
            <h2>Please select postcode:</h2>
            <p>Best to remove from wizard for more flexibility, and pass values to different selections</p>
            <Formik
      initialValues={{
        postCode: ''
      }}
      validationSchema={PostcodeSchema}
      onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        //alert(JSON.stringify(values, null, 2));
        props.GoTo(2);
      }}

    >
      
    {({ errors, touched }) => (
      <Form>
        <label htmlFor="postCode">Postcode: </label>
        <Field id="postCode" name="postCode" placeholder="Enter Postcode" />
        {errors.postCode && touched.postCode ? (
             <div>{errors.postCode}</div>
           ) : null}
        {/* <label htmlFor="lastName">Last Name</label>
        <Field id="lastName" name="lastName" placeholder="Doe" />
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        /> */}
        
        <button type="submit">Submit</button>
      </Form>
      )}
    </Formik>
    <p><button onClick={props.previousStep}>Previous Step</button></p>
            <p><button onClick={props.nextStep}>Next Step</button></p>
        </>
    );
};

export default PostcodeSelector;