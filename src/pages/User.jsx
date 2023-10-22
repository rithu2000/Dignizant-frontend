import React, { useState } from 'react'
import { submitForm } from '../axios/axios';

const User = ({ formId, formFields }) => {
  const [formResponse, setFormResponse] = useState({});

  const handleSubmitForm = async () => {
    try {
      const response = await submitForm(formResponse);
      if (response.status === 200) {
        alert('Form submitted successfully');
      } else {
        alert('Error submitting the form');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting the form');
    }
  }

  return (
    <div>
      <h1>Submit Form</h1>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>{field.name}</label>
          {field.type === 'text' ? (
            <input
              type="text"
              value={formResponse[field._id] || ''}
              onChange={(e) => {
                const updatedResponse = { ...formResponse };
                updatedResponse[field._id] = e.target.value;
                setFormResponse(updatedResponse);
              }}
            />
          ) : (
            <div>
              <h1>r</h1>
            </div>
          )}
        </div>
      ))}
      <button onClick={handleSubmitForm}>Submit Form</button>
    </div>
  );
}

export default User;