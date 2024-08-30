import { useState } from 'react';
import React from 'react';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
  };
  return (
    <section id='contact' className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form
        action='https://formspree.io/f/xzzpojoe'
        method='post'
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <div className='formGroup'>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            required
            value={formData.name}
            onChange={handleFormChange}
            autoComplete='off'
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            placeholder='Email'
            required
            value={formData.email}
            onChange={handleFormChange}
            autoComplete='off'
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='message' hidden>
            Message
          </label>
          <textarea
            type='text'
            name='message'
            id='message'
            placeholder='Message'
            required
            value={formData.message}
            onChange={handleFormChange}
            autoComplete='off'
          />
        </div>
        <input className='hover btn' type='submit' value='Submit' />
      </form>
    </section>
  );
}

export default Contact;
