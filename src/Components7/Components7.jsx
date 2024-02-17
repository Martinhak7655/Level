import React from 'react'
import "./Components7.css"
import { useForm } from 'react-hook-form';

const Components7 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
          // Handle the form data
          console.log(data);
    };


  return (
    <div>
        <div className='footer'>
           <div className='footer-flex'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12112.10377066234!2d44.952986161278275!3d40.6293098424952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40404f93dbc184b7%3A0xa064ad508450454c!2z0KbQvtCy0LDQs9GO0YU!5e0!3m2!1sru!2sam!4v1708161239799!5m2!1sru!2sam" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <form onSubmit={handleSubmit(onSubmit)}>
               <input {...register("name", {required: "Please Enter Your Name"})} placeholder='Name' />
               {errors.name && <p>{errors.name.message}</p>}
               <input {...register("email", {required: "Please Enter Your Email"})} placeholder='Email' />
               {errors.email && <p>{errors.email.message}</p>}
               <input placeholder='Subject' />
               <textarea placeholder='Message'></textarea>
               <button className='fot-btn'>Click</button>
            </form>
           </div>
        </div>
    </div>
  )
}

export default Components7