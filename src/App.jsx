import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mgejdlqa");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <h1 className='text-center text-3xl font-medium py-5'>Products Adding :</h1>
      <form onSubmit={handleSubmit} className='flex flex-col md:w-max bg-gray-400 mx-5 my-5 md:mx-auto py-5 px-2 rounded-lg '>
        <p>Store Name :</p>
        <input
          type="text"
          name="store"
          required
          className='rounded px-2 py-1 mt-1 mb-5'
        />

        <p>Product Name :</p>
        <input
          type="text"
          name="productName"
          required
          className='rounded px-2 py-1 mt-1 mb-5'
        />

        <p>Description :</p>
        <textarea
          type="text"
          name="Description"
          required
          className='rounded px-2 py-1 mt-1 mb-5'
        />

        <p>Prix (Dhs):</p>
        <input
          type="number"
          name="Price"
          required
          className='rounded px-2 py-1 mt-1 mb-5'
        />

        <p>Main Image :</p>
        <input type="file" name="upload"
          className='rounded px-2 py-1 mt-1 mb-5' />

        <button type="submit" disabled={state.submitting} className='mt-5 bg-white py-1 rounded-md'>
          Submit
        </button>
      </form>
    </div>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;