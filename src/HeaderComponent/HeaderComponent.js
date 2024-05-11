import './header.css'
const HeaderComponent = () => {
return (
    <div className='mainContainer'>
        <div className='containerMain'>
        <div className='headerContainer'>
            <div className='greyStrip'>
                <div className='greyFrame'>
                    <div className='greyText'>
                        <p className='greyTextPara'>Lorem ipsum dolor</p>
                    </div>
                </div>
                <div className='greyFrame'>
                    <div className='greyText'>
                        <p className='greyTextPara'>Lorem ipsum dolor</p>
                    </div>
                </div>
                <div className='greyFrame'>
                    <div className='greyText'>
                        <p className='greyTextPara'>Lorem ipsum dolor</p>
                    </div>
                </div>
            </div>
            <div className='descriptionContainer'>
                <div className='logoDescriptionContainer'>
                    <h1 className='logoDescription'>
                        LOGO
                    </h1>
                </div>
                <div className='tabsContainer'>
                    <div className='frame'>
                        <div className='tab'>
                            <p className='tabDescription'>
                                SHOP
                            </p>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className='tab'>
                            <p className='tabDescription'>
                                SKILLS
                            </p>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className='tab'>
                            <p className='tabDescription'>
                                STORIES
                            </p>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className='tab'>
                            <p className='tabDescription'>
                                ABOUTS
                            </p>
                        </div>
                    </div>
                    <div className='frame'>
                        <div className='tab'>
                            <p className='tabDescription'>
                                CONTACT US
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='subHeaderContainer'>
            <div className='subHeadingContainer'>
                <h1 className='subHeadingDescription'>DISCOVER OUR PRODUCTS</h1>
            </div>
            <div className='subParaContainer'>
                <p className='subParaDescription'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus <br />
                scelerisque. Dolor integer scelerisque nibn amet mi ut elementum dolor.</p>
            </div>
        </div>
        </div>

    </div>
)
}
export default HeaderComponent