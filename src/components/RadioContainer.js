import React from 'react';

const RadioContainer = () =>{

    return (
        <div className="radio-container">
      <input type="radio" value="Male" name="gender" /> Male
        <input type="radio" value="Female" name="gender" /> Female
        <input type="radio" value="Other" name="gender" /> Other
        </div>
    )
}

export default RadioContainer;