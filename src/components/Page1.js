import React from 'react';

const Page1 = (props) => {
    return (
        <div>
            <h1>Page 1</h1>
            <p><button onClick={props.previousStep}>Previous Step</button></p>
            <p><button onClick={props.nextStep}>Next Step</button></p>
        </div>
    );
};

export default Page1;