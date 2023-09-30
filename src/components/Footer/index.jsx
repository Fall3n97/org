import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
    <div className='Mis redes sociales'>
        <a href='https://www.facebook.com/Ian.BadilloV97' target="_blank">
            <img src="/img/facebook.png" alt='Facebook' />
        </a>
        <a href='https://www.linkedin.com/in/ian-badillo97' target="_blank">
            <img src="/img/linkedin.png" alt='LikedIn' style={{width: "22px"}}/>
        </a>
        <a href='https://www.instagram.com/ian.badillo97' target="_blank">
            <img src="/img/instagram.png" alt='instagram' />
        </a>
    </div>
    <img src='/img/Logo.png' alt='org' />
    <strong>Developed by Ian Badillo</strong>
</footer>
}

export default Footer;