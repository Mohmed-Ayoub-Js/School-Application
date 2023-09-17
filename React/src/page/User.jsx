import React, { useEffect, useState } from 'react';
import './Q.css';
import { useNavigate } from 'react-router-dom';
const User = () => {
    const Navigate = useNavigate();

    const [data, setData] = useState([])
    const [color , setColor] = useState('black');
    const [color1 , setColor1] = useState('black');
    const [color3 , setColor3] = useState('black');
    
    useEffect(() => {
        const storedData = localStorage.getItem('data');
        const parsedData = JSON.parse(storedData);
        setData(parsedData);
    }, []); 
    const handel1 = () => {
        if(data.jawab == data.ki1){
            setColor('green');
            Navigate('../home')
           alert('جواب صحيح')

        } else {
            setColor('red');
        }
    }        

    
    const handel2 = () => {
        if(data.jawab == data.ki2){
           setColor1('green');
           Navigate('../home');
           alert('جواب صحيح')

        } else {
            setColor1('red');
        }
    }
    
    const handel3 = () => {
        const jawabSa7 = data.jawab;
        if(data.jawab == data.ki3){
           setColor3('green');
           Navigate('../home')
           alert('جواب صحيح')


        } else {
            setColor3('red');

        }
    }
    return (
        <div>
            <div class="like-dislike-container">
	<p class="text-content">{data.qu}</p>				
	<div class="icons-box">
		<div class="icons" >
			<label class="btn-label" for="like-checkbox">
				<span class="like-text-content" onClick={handel1} style={{color:color}} className={`text-${color}-500`}>{data.ki1}</span>
				<input class="input-box" id="like-checkbox" type="checkbox" />
			</label>
		</div>
        <div class="icons">
			<label class="btn-label" for="like-checkbox">
				<span class="like-text-content"  onClick={handel2}  style={{color:color1}} className={`text-${color1}-500`}>{data.ki2}</span>
				<input class="input-box" id="like-checkbox" type="checkbox" />
			</label>
		</div>
        <div class="icons">
			<label class="btn-label" for="like-checkbox">
				<span class="like-text-content" onClick={handel3}  style={{color:color3}} className={`text-${color3}-500`}>{data.ki3}</span>
				<input class="input-box" id="like-checkbox" type="checkbox" />
			</label>
		</div>
	</div>
</div>
        </div>
    );
}

export default User;
