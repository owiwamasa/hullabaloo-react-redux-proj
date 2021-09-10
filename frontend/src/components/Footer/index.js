import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-name'>Created By Owen Iwamasa</div>
            <div className='footer-info-container'>
                <a href='owiwamasa@gmail.com'>
                    <img src="https://i.imgur.com/jLLwTjh.png" width="25" height="25" />
                </a>
                <a href='https://www.linkedin.com/in/owen-iwamasa-6ab3a9166/'>
                    <img src="https://logodix.com/logo/91031.png" width="25" height="25" />
                </a>
                <a href='https://github.com/owiwamasa'>
                    <img src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="25" height="25" />
                </a>
            </div>
        </div>
    )
}

export default Footer