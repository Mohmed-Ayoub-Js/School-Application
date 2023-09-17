import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

const Create = () => {
  const [user, setUser] = useState('');
  const navigate = useNavigate();
  const admin = localStorage.getItem('admin');

  // تحقق من قيمة admin وقم بإعادة التوجيه في حالة وجودها
  if (admin) {
    navigate('../home');
  }

  const handleClick = () => {
    localStorage.setItem('admin', user);
    navigate('../Home')
  };

  return (
    <div className='flex justify-center items-center flex-col mt-[200px]'>
      <div className='m-[20px] text-[30px]'>
        <h1>انشاء مستخدم جديد</h1>
      </div>
      <div>
        <p class="form-title">انشاء حساب محلي ، سيحفظ في جهازك</p>
        <div class="input-container">
          <input
            placeholder="قم بادخال اسمك"
            type='text'
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />

        </div>
        <button class="submit" type="submit" onClick={handleClick}>
          <p>انشاء حساب</p>
        </button>

      </div>
    </div>
  );
};

export default Create;
