const contactForm=document.getElementById('contact-form'),
   contactMessage= document.getElementById('contact-message')

const sendEmail  = (e) =>{
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_zgmxvl3','template_ui0xbwp','#contact-form','RxZr0G8j_Sn_PPsqk')
    .then(() =>{
    // Show sent message
      contactMessage.textContent="Message sent successfully ✅"
     
    //Remove message after five seconds
    setTimeout(() =>{
        contactMessage.textContent =""
    },5000)   
    
    // Clear input fields
    contactForm.reset()

},()=>{
    //Show error message
    contactMessage.textCOntent='Message not sent (service error) ❌'
})


}

contactForm.addEventListener('submit',sendEmail)