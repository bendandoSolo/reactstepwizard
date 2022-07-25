import React from 'react';
import { Formik, Field, Form } from 'formik';
// eslint-disable-next-line
import * as Yup from 'yup';




const SelectService = ({GoTo}) => {

    const isDisabled = (values) => {
        return Object.values(values).every(values => values === false) ? true : false;
    }


    return (
        <div>
            <h2>Select which of the following services you wish to use</h2>
            <p>BH all codes-DT1,2,11 -SP 1,2,5,6, SO 40,41,42,43,45 (glass and DMR needs checking)</p>

            <Formik
      initialValues={{
        generalWaste: false,
        DMR: false,
        paperAndCard: false,
        foodWaste: false,
        glass: false,
      }}
      onSubmit={values => {
        GoTo(2,values);
      }}
    >
      {({ values }) => (
        <Form>
          {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}
          <label htmlFor="generalWaste">General Waste</label>
            <Field type="checkbox" name="generalWaste"/>
            {`${values.generalWaste}`}
          <br/>
          <label htmlFor="DMR">DMR</label>
            <Field type="checkbox" name="DMR"/>
            {`${values.DMR}`}
          <br/>
          <label htmlFor="paperAndCard">Paper and Card</label>
            <Field type="checkbox" name="paperAndCard"/>
            {`${values.paperAndCard}`}
          <br/>
          <label htmlFor="foodWaste">Food</label>
            <Field type="checkbox" name="foodWaste"/>
            {`${values.foodWaste}`}
          <br/>
          <label htmlFor="glass">Glass</label>
            <Field type="checkbox" name="glass"/>
            {`${values.glass}`}
          <br/>


          {/* <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label> */}


          {/* 
            Multiple checkboxes with the same name attribute, but different
            value attributes will be considered a "checkbox group". Formik will automagically
            bind the checked values to a single array for your benefit. All the add and remove
            logic will be taken care of for you.
          */}
          {/* <div id="checkbox-group">Checked</div>
          <div role="group" aria-labelledby="checkbox-group">
            <label>
              <Field type="checkbox" name="checked" value="One" />
              One
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Two" />
              Two
            </label>
            <label>
              <Field type="checkbox" name="checked" value="Three" />
              Three
            </label>
          </div> */}

          <button type="submit" disabled={isDisabled(values)}>next</button>
        </Form>
      )}
    </Formik>
        </div>
    );
};

export default SelectService;