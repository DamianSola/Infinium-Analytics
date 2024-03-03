'use client'
import style from "./style.module.css"
import emailjs from '@emailjs/browser';
import Image from "next/image";
import React, { useState } from 'react';
import foto from "src/Components/Contact/picontact.png"

const Contact = () => {

    // const form = useRef()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone:'',
        message: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send("service_ydywbmc","template_pkjvyor",{
            name: formData.name,
            company: formData.company, 
            phone: formData.phone,
            message: formData.message,
            email: formData.email,
            },"a_mj9GG3z_rUB1m7F"
        )
        .then((result) => {
            // console.log(result);
            alert("el mensaje se envió correctamente")
        }, (error) => {
            // console.log(error.text);
            alert("algo salio mal. intente de nuevo")
        });
        setFormData({
            name: '',
            email: '', 
            company: '',
            phone:'',
            message: ''
        })
    }

    return(
        <div className={style.container} id="contact">
            <h1 className={style.title}>Contacto</h1>
            <div className={style.contact}>
                <section className={style.contactUs}>
                    <h1>¿Tenés alguna duda?</h1>
                    <p>Podés contactarnos completando el siguente formulario</p>
                    <Image src={foto} className={style.foto} width="180" alt="contact-img"/>
                </section>
                <form className={style.form} onSubmit={sendEmail}>

                    <input
                        type="text" 
                        id="name"
                        name="name" 
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Nombre*" 
                        required/>
                    <br/>
                    <input 
                        type="email" 
                        name="email" 
                        onChange={handleChange}
                        value={formData.email}
                        id="email" 
                        placeholder="Email*" 
                        required/>
                    <br/>
                    <input 
                        type="text" 
                        name="phone" 
                        id="phone" 
                        onChange={handleChange}
                        value={formData.phone}
                        placeholder="Teléfono" 
                        />
                    <br/>
                    <input 
                        name="company" 
                        onChange={handleChange}
                        value={formData.company}
                        type="text" 
                        id="company" 
                        placeholder="Companía*" 
                        required/>
                    <br/>
                    <textarea 
                        name="message" 
                        type="text" 
                        id="message" 
                        onChange={handleChange}
                        value={formData.message}
                        placeholder="Consulta*" 
                        rows="7" 
                        required/>
                    <br/>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;