'use client'
import style from "./style.module.css"
import emailjs from '@emailjs/browser';
import Image from "next/image";
import React, { useRef } from 'react';
import foto from "src/Components/Contact/picontact.png"

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_i0g2eus', 'template_pkjvyor', form.current, "a_mj9GG3z_rUB1m7F")
        .then((result) => {
            console.log(result.text);
            alert("el mensaje se envió correctamente")
        }, (error) => {
            console.log(error.text);
            alert("algo salio mal. intente de nuevo")
        });
        form.current.reset()
    }

    return(
        <div className={style.container} id="contact">
            <h1 className={style.title}>Contacto</h1>
            <div className={style.contact}>
                <section className={style.contactUs}>
                    <h1>¿Tenes alguna duda?</h1>
                    <p>Podes contactarnos completando el siguente formulario</p>
                    {/* <Image src={foto} className={style.foto} width="40" height="60" /> */}
                </section>
                <form className={style.form} ref={form} onSubmit={sendEmail}>

                    <input type="text" id="name" placeholder="Nombre*" required/><br/>
                    <input type="email" id="email" placeholder="Email*" required/><br/>
                    <input type="text" id="phone" placeholder="telefono" /><br/>
                    <input type="text" id="company" placeholder="Companía*" required/><br/>
                    <textarea type="text" id="message" placeholder="Consulta*" rows="5" required/><br/>

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;