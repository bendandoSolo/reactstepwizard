import React from 'react';
import { Formik, Field, Form, Label } from 'formik';
import * as Yup from 'yup';




const SelectService = () => {
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
        // eslint-disable-next-line no-undef
        //await sleep(500);
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ generalWaste, DMR, paperAndCard, foodWaste, glass }) => (
        <Form>
          {/* 
            This first checkbox will result in a boolean value being stored. Note that the `value` prop
            on the <Field/> is omitted
          */}
          <label htmlFor="generalWaste">General Waste</label>
            <Field type="checkbox" name="General Waste"/>
            {`${generalWaste.toggle}`}
          <br/>
          <label htmlFor="DMR">DMR</label>
            <Field type="checkbox" name="General Waste"/>
            {`${DMR.toggle}`}
          <br/>
          <label htmlFor="paperAndCard">Paper and Card</label>
            <Field type="checkbox" name="General Waste"/>
            {`${paperAndCard.toggle}`}
          <br/>
          <label htmlFor="foodWaste">Food</label>
            <Field type="checkbox" name="General Waste"/>
            {`${foodWaste.toggle}`}
          <br/>
          <label htmlFor="glass">Glass</label>
            <Field type="checkbox" name="General Waste"/>
            {`${glass.toggle}`}
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

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
        </div>
    );
};

export default SelectService;