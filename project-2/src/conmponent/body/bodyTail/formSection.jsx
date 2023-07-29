import React, { useState } from 'react'
import Botton from './button/botton';
import Form from './form/form';
import {BiMessageDetail} from 'react-icons/bi'
import {MdPhone} from 'react-icons/md'
import "./formSection.css"

const FormSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
      setName(event.target[0].value);
      setEmail(event.target[1].value);
      setText(event.target[2].value); 
  }

  return (
    <main className='formSection container'>
      <div className='formSectionBtnField'>
        <div className='formSectionBtn'>
            <Botton text="VIA SUPPORT CHART" icon={<BiMessageDetail fontSize={"24px"} />}/>
            <Botton text="VIA CALL" icon={<MdPhone fontSize={"24px"}/>}/>
        </div>
        <Botton isLong={true} text="VIA SUPPORT CHART" icon={<BiMessageDetail fontSize={"24px"} />} />
        <form onSubmit={onSubmit} className='formSectionField'>
            <Form name="name" type="text" display="Name"/>
            <Form name="email" type="email" display="Email"/>
             <div className='formSectionTextArea'>
                <label htmlFor='textarea'>Text</label>
                <textarea type="text" name='textarea' />
            </div>
            <div className='formSelectionSubbmitBtn'>
            <Botton text="SUBMIT" />
            </div>
            <div className='details_output'>
              { name && email && <p>name:{name} email:{email} {text && `text: ${text}`}</p>}
            </div>
        </form>
      </div>
      <div className='contactUs-img'>
        <img src='./images/Service 24_7-pana 1.svg' alt='contactUs-img'/>
      </div>
    </main>
  )
}

export default FormSection;
