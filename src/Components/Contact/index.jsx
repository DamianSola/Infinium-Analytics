'use client'
import style from "./style.module.css"
import emailjs from '@emailjs/browser';
import Image from "next/image";
import React, { useState } from 'react';
import foto from "./picontact.png"
import useReveal from "@/hooks/useReveal";

const EMPTY_FORM = {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
}

const Contact = () => {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [sending, setSending] = useState(false);
    const [aboutRef, animation] = useReveal()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        if (sending) return

        const payload = {
            name: formData.name.trim(),
            name_company: formData.company.trim(),
            phone: formData.phone.trim(),
            comment: formData.message.trim(),
            email: formData.email.trim(),
        }

        if (!payload.name || !payload.email || !payload.name_company || !payload.comment) {
            alert("Completá los campos obligatorios")
            return
        }

        setSending(true)
        try {
            await emailjs.send("service_ydywbmc", "template_pkjvyor", payload, "a_mj9GG3z_rUB1m7F")
            alert("El mensaje se envió correctamente")
            setFormData(EMPTY_FORM)
        } catch {
            alert("Algo salió mal. Intentá de nuevo")
        } finally {
            setSending(false)
        }
    }

    return(
        <div className={`${style.container} ${animation}`} ref={aboutRef} id="contact">
            <h1 className={style.title}>Contacto</h1>
            <div className={style.contact}>
                <section className={style.contactUs}>
                    <h1>¿Tenés alguna duda?</h1>
                    <p>Podés contactarnos completando el siguiente formulario</p>
                    <Image src={foto} className={style.foto} width="180" alt="contact-img"/>
                </section>
                <form className={style.form} onSubmit={sendEmail}>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        onChange={handleChange}
                        value={formData.name}
                        placeholder="Nombre*"
                        required/>
                    <br/>
                    <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                        value={formData.email}
                        id="email"
                        placeholder="Email*"
                        required/>
                    <br/>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        onChange={handleChange}
                        value={formData.phone}
                        placeholder="Teléfono"
                        />
                    <br/>
                    <input
                        name="company"
                        autoComplete="organization"
                        onChange={handleChange}
                        value={formData.company}
                        type="text"
                        id="company"
                        placeholder="Compañía*"
                        required/>
                    <br/>
                    <textarea
                        name="message"
                        id="message"
                        onChange={handleChange}
                        value={formData.message}
                        placeholder="Consulta*"
                        rows="7"
                        required/>
                    <br/>

                    <button type="submit" disabled={sending} aria-busy={sending}>Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
