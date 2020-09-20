import React from 'react'
const withClass = (wrapperComponent, clasName) =>{
    return (
        <div className = {className}>
            <wrapperComponent/>
        </div>
    )
}

export default withClass;
