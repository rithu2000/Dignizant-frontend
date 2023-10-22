import React, { useState } from 'react'
import { createForm } from '../axios/axios';

const Admin = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fields: [],
  });

  const handleAddField = () => {
    setFormData({
      ...formData,
      fields: [...formData.fields, { name: '', type: 'text', required: false }],
    });
  };

  const handleCreateForm = async () => {
    try {
      const response = await createForm(formData);
      if (response.status === 200) {
        alert('Form created successfully');
      } else {
        alert('Error creating the form');
      }
    } catch (error) {
      console.error(error);
      alert('Error creating the form');
    }
  };

  return (
    <div>
      <h1>Create a Form</h1>
      <input
        type="text"
        placeholder="Form Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Form Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      <button onClick={handleAddField}>Add Field</button>
      {formData.fields.map((field, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Field Name"
            value={field.name}
            onChange={(e) => {
              const newFields = [...formData.fields];
              newFields[index].name = e.target.value;
              setFormData({ ...formData, fields: newFields });
            }}
          />
          <select
            value={field.type}
            onChange={(e) => {
              const newFields = [...formData.fields];
              newFields[index].type = e.target.value;
              setFormData({ ...formData, fields: newFields });
            }}
          >
            <option value="text">Text</option>
            <option value="radio">Radio</option>
            <option value="checkbox">Checkbox</option>
            <option value="dropdown">Dropdown</option>
          </select>
          <label>
            Required:
            <input
              type="checkbox"
              checked={field.required}
              onChange={() => {
                const newFields = [...formData.fields];
                newFields[index].required = !field.required;
                setFormData({ ...formData, fields: newFields });
              }}
            />
          </label>
        </div>
      ))}
      <button onClick={handleCreateForm}>Create Form</button>
    </div>
  )
}

export default Admin;