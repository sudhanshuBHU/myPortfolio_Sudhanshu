function sendMail() {
    let params ={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        subject: document.getElementById('subject').value
    }
    emailjs.send('service_ygwl1pl','template_nftjmfb',params).then(alert("message sent"));
}