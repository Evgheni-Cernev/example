import Button from '../../elements/Button/Button'

const FooterForm = () => { 
    return (
        <div className="subscribe">
                <p className="subscribe-title mb-8 text-lg">Subscribe to newsletter</p>
                <form action="">
                  <input type="text" className="subscribe-input p-3 mr-1" />
                  <Button type='submit' className="subscribe-bnt border-solid border-2 border-gray p-3 rounded hover:bg-white hover:text-black" content='SUBSCRIBE' />
                </form>
              </div>
    )
}

export default FooterForm