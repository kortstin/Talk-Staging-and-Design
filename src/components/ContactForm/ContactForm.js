import React from 'react'
import { useForm } from "react-hook-form";
import './ContactForm.css'

function ContactForm() {

    const { register, handleSubmit, errors } = useForm()

    const onSubmit = () => {}

    return (
        <>
        <div className="container">
        <div className="form">
            <form name="Talk Staging Contact Form" method="post" onSubmit={handleSubmit(onSubmit)} data-netlify="true" data-netlify-honeypot="bot-field">
                <label htmlFor="name">
                    <input 
                    type="text" 
                    name="full-name" 
                    placeholder="Full Name"
                    ref={register}/>
                </label>
                <label htmlFor="email">
                    <input 
                    type="email" 
                    name="email" 
                    placeholder="Email Address"
                    ref={register({ 
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address. Format - 'johndoe@gmail.com'"
                        }
                     })}/>
                     {errors.email && <p className="error">{errors.email.message}</p>}
                </label>
                <label htmlFor="phn">
                    <input 
                    type="tel" 
                    name="phn" 
                    placeholder="Phone Number"
                    ref={register({ 
                        required: true,
                        pattern: {
                            value: /^[2-9]\d{2}-\d{3}-\d{4}$/i,
                            message: "Invalid phone number. Format - '111-111-1111'"
                        }
                     })}/>
                     {errors.phn && <p className="error">{errors.phn.message}</p>}
                </label>
                <label htmlFor="subject">
                    <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject"
                    ref={register({ required: true })}/>
                </label>
                <label htmlFor="">
                <textarea name="message" id="" cols="30" rows="10" placeholder="Message">
                </textarea>
                </label>
                
                <button type="submit">Submit</button>
               
            </form>
            
        </div>
        </div>
        </>
    )
}

export default ContactForm
