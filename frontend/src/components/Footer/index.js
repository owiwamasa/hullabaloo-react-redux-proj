import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-name'>Created By Owen Iwamasa</div>
            <a className='portfolio-site' href='http://www.oweniwamasa.com'>oweniwamasa.com</a>
            <div className='footer-info-container'>
                <a href='owiwamasa@gmail.com'>
                    <img src="https://i.imgur.com/jLLwTjh.png" width="35" height="35" alt='email'/>
                </a>
                <a href='https://www.linkedin.com/in/owen-iwamasa-6ab3a9166/'>
                    <img src="https://logodix.com/logo/91031.png" width="35" height="35" alt='linkedin'/>
                </a>
                <a href='https://github.com/owiwamasa'>
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="35" height="35" alt='github'/>
                </a>
            </div>
        </div>
    )
}

export default Footer
