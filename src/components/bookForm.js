import React, { useState } from 'react';

const BookForm = () => {
  const [formData, setFormData] = useState({ title: '', author: '', genre: '', status: 'Pending' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    }).then(() => {
      setFormData({ title: '', author: '', genre: '', status: 'Pending' });
    });
  };

  return (
    <form className="Book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={formData.author}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="genre"
        placeholder="Genre"
        value={formData.genre}
        onChange={handleChange}
      />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Reading">Reading</option>
        <option value="Finished">Finished</option>
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BookForm;