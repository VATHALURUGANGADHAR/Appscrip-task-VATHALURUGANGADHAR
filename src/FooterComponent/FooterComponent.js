import './footer.css'
const FooterComponent = () => {
    return (

        <div className='mainFooterContainer'>
                <div className='contactContainer'>
                    <div className='leftContainer'>
                    <div className='leftheadingContainer'>
                    <h1 className='leftheading'>BE THE FIRST TO KNOW</h1>
                    </div>
                    <div className='leftparaContainer'>
                    <p className='leftpara'>Sign up for updates form metta muse</p>
                    </div>
                    <div className='subscribeContainer'>
                        <input type = 'text' placeholder='Enter your e-mail ...' className='inputContainer'></input>
                        <button type ='button' className='buttonContainer'>SUBSCRIBE</button>
                    </div>
                </div>
                <div className='rightContainer'>
                    <h1 className='leftheading'>CONTACT US</h1>
                    <p className='rightpara'> +44 221 133 5360</p>
                    <p className='rightpara'>customercare@mettamuse.com</p>
                    <h1 className='leftheading'>CURRENCY</h1>
                    <p className='rightpara'>Trancations will be completed in Euros and a currency references is available hover.</p>
                </div>
            </div>
            <hr style = {{
                color: "#ffffff",
                backgroundColor: "#ffffff",
                height: "1px",
                width: '100%',
                 borderColor: "#ffffff"
            }} />
        <div className='detailsContainer'>
            <div className='sectionA'>
                <h1 className='detailsHeader'>metta muse</h1>
                <p className='unorderList'>About Us</p>
                <p className='unorderList'>Stories</p>
                <p className='unorderList'>Artisans</p>
                <p className='unorderList'>Boutiques</p>
                <p className='unorderList'>Contact Us</p>
                <p className='unorderList'>EU Compliances Docs</p>
            </div>
            <div className='sectionA'>
                <h1 className='detailsHeader'>
                    QUICK LINKS
                </h1>
                <p className='unorderList'>Orders & Shipping</p>
                <p className='unorderList'>Join/Login as a Seller</p>
                <p className='unorderList'>Payment & Pricing</p>
                <p className='unorderList'>Return & Refund</p>
                <p className='unorderList'>FAQs</p>
                <p className='unorderList'>Privacy Policy</p>
            </div>
            <div className='sectionA'>
                <h1 className='detailsHeader'>FOLLOW US</h1>
                <h1 className='detailsHeader'>metta muse ACCEPTS</h1>
            </div>
        </div>
        <div className='lastContainer'>
            <p className='unorderList'>Copyright @ 2023 mettamuse. All rights reserved</p>
        </div>
        </div>


    )

}
export default FooterComponent