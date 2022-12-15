import "./ContactStyling/ContactMain.scss";

const Contact = () => {
    return (
        <div className='contact'>
            <h1 className='contact__header'>Hi there!</h1>
            <div className='contact__content'>
                <p className='contact__content contact__content--text'>
                    Want to get in touch?
                </p>
                <p className='contact__content contact__content--email'>
                    Email me on:&nbsp;
                    <span className='contact__content--emailaddress'>
                        chris.wakley@nology.io
                    </span>
                </p>
                <a
                    href='https://github.com/ChrisWakley'
                    className='contact__link contact__link--github'
                >
                    Github
                </a>
                <a
                    href='https://www.linkedin.com/in/chris-wakley-6a236a241/'
                    className='contact__link contact__link--linkedin'
                >
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Contact;
