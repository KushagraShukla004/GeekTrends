import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  const handleCommentSubmission = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };

    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Leave a Reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          name='comment'
          placeholder='Comment'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type='text'
          ref={nameEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />
        <input
          type='text'
          ref={emailEl}
          className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div>
          <input
            ref={storeDataEl}
            type='checkbox'
            id='storeData'
            name='storeData'
            value='true'
          />
          <label
            className='text-gray-500 cursor-pointer ml-2'
            htmlFor='storeData'
          >
            Save my E-mail and name for the next time I comment
          </label>
        </div>
      </div>
      {error && (
        <p className='text-xs text-red-500'>All fields are required.</p>
      )}
      <div className='mt-8'>
        <button
          type='button'
          onClick={handleCommentSubmission}
          className='relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group'
        >
          <span className='absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-800 rounded group-hover:-mr-4 group-hover:-mt-4'>
            <span className='absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white'></span>
          </span>
          <span className='absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0'></span>
          <span className='relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white'>
            Post Comment
          </span>
        </button>
      </div>
      {showSuccessMessage && (
        <span className='text-xl float-right font-semibold mt-3 text-green-500'>
          Comment Submitted for review
        </span>
      )}
    </div>
  );
};

export default CommentsForm;
