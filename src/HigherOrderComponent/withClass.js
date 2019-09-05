import React from 'react';

const WithClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};

export default WithClass;
//...props ==> props is a JS object and ... is a spread operator that imports all items of the JS object
