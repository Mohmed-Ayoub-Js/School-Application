import React , {useState} from 'react'
import './Button.css';
import { useNavigate } from 'react-router-dom';
import './LogOut.css';
const Home = () => {
    const navigate = useNavigate();
    const admin = localStorage.getItem('admin');
    const [show, setShow] = useState('hidden');
    const [q, setQ] = useState('');
    const [j, setJ] = useState('');
    const [k1, setK1] = useState('');
    const [k2, setK2] = useState('');
    const [k3, setK3] = useState('');
    
    const handelSubmit = () => {
      if (j === k1 || j === k2 || j === k3) {
        const data = {
          qu: q,
          jawab: j,
          ki1: k1,
          ki2: k2,
          ki3: k3
        };
    
        const isf = localStorage.getItem('data');
        if (isf === null) {
          localStorage.setItem('data', JSON.stringify(data));
          navigate('../user');
        } else {
          const how = alert('سيتم حذف السؤال السابق');
          localStorage.setItem('data', JSON.stringify(data));
          navigate('../user');
        }
      } else {
        alert('يجب أن تكون قيمة الجواب نفس قيمة أحد خيارات الإجابات');
      }
    };
    
    const handelShow = () => {
      setShow(show === 'block' ? 'hidden' : 'block');
    };
    const remove = () => {
        localStorage.removeItem('admin');
        navigate('../');
    }
  return (
    <div className='flex justify-center items-center p-[20px] flex-col'>
        <h1 className='text-[30px] '>
            مرحبا <span className='text-blue-600'>{admin}</span>
        </h1>
        <h1 className='text-[20px]'>يمكنك الان انشاء اسألة لطلابك</h1>
        <div className='mt-[50px]'>
        <button class="btn-class-name" onClick={handelShow}>
  <span class="back"></span>
  <span class="front"></span>
</button>
        </div>

<div className={`${show}`} >
    <div className='form'>
    <p class="title">انشاء سؤال </p>
    <p class="message"> قم بملئ حقول الادخال لأنشاء سؤال جديد </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input" onChange={(e) => {setQ(e.target.value)}}/>
            <span>السؤال</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input" onChange={(e) => {setJ(e.target.value)}}/>
            <span>الجواب</span>
        </label>
    </div>  
            
    <label>
        <input required="" placeholder="" type="text" class="input" onChange={(e) => {setK1(e.target.value)}}/>
        <span>الخيار الاول</span>
    </label> 
        
    <label>
        <input required="" placeholder="" type="text" class="input" onChange={((e) => {setK2(e.target.value)})}/>
        <span>الخيار الثاني</span>
    </label>
    <label>
        <input required placeholder="" type="text" class="input" onChange={(e) => {setK3(e.target.value)}}/>
        <span>الخيار الثالث</span>
    </label>
    <button class="submit" onClick={handelSubmit}>انشاء</button>
    <p class="signin">اكتب الجواب بنفس القيم الموجودة في الخيار</p>
    <div />
</div>
</div>
<button class="Btn" style={{position:'fixed',bottom:0}} onClick={remove}>
  
  <div class="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
  <div class="text"><p>Log out</p></div>
</button>



</div>
  ) 
}

export default Home