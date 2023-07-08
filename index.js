let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
    console.log("aaaaaaaaaaã");
    contrastToggle = !contrastToggle;
    if(!contrastToggle) {
        document.body.classList.remove("dark-theme");
    } else {
        document.body.classList += " dark-theme";
    }
}

function contact(event) {
    event.preventDefault();
    
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');

    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_yfyzsu4', 
            'template_dz7amrh',
            event.target,
            'd4SZ2ZOXaq1P-tDN8'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert("The email service is temporarily unavailable. Please contact me directly via email: ibrahim.syedshah@gmail.com");
        })
}

function toggleModal() {
    if(!isModalOpen) {
        document.body.classList += " modal--open";
    } else {
        document.body.classList.remove("modal--open");
    }
    isModalOpen = !isModalOpen;
}