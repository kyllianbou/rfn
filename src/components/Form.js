import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("mzbookqd");
  if (state.succeeded) {
      return <p className='merci'>Merci de nous avoir contactés ! Nous vous répondrons dans les plus brefs délais.</p>;
  }
  return (
      
      <form onSubmit={handleSubmit} className='fomulaire-contact contact'>
            <input className='prenom' type="text" placeholder="Prénom" />
            <input className='nom' type="text" placeholder="Nom" />
            <input className='tel' type="tel" placeholder="N° de téléphone" />
            
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Adresse@mail.com"
        className='mail'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="Message"
        className='commentaire'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='envoi'>
        Envoyer
      </button>
      
    </form>
  );
}


export default Form;