const Footer = () => {
  return (
    <>
      <div className="md:h-[30vh] h-[40vh]">
        <div className="lg:mt-12 md:mt-9 mt-4 border-t-2 border-solid border-black lg:mx-9 md:mx-3 mx-0 lg:flex md:flex grid grid-cols-2 gap-3 justify-between lg:px-12 md:px-6 px-2 lg:pt-9 md:pt-9 pt-5 pb-5">
          <div className="footer-nav">
            <div className="nav-links flex flex-col lg:gap-4 md:gap-4 gap-1 text-center">
              <h1 className="font-bold">HOT LINKS</h1>
              <a href="/">Home</a>
              <a href="/shop">Shop</a>
              <a href="/about">About</a>
            </div>
          </div>
          <div className="more-info">
            <div className="nav-links flex flex-col lg:gap-4 md:gap-4 gap-1 text-center">
              <h1 className="font-bold">MORE INFO</h1>
              <a href="/">How it works</a>
              <a href="/shop">Decline rules</a>
              <a href="/about">Terms & Conditions</a>
            </div>
          </div>
          <div className="customer-care">
            <div className="nav-links flex flex-col lg:gap-4 md:gap-4 gap-1 text-center">
              <h1 className="font-bold">CUSTOMER CARE</h1>
              <a href="/">FAQ</a>
              <a href="/shop">Terms of use</a>
              <a href="/about">Privacy Policy</a>
            </div>
          </div>
          <div className="newsletter">
            <div className="nav-links flex flex-col lg:gap-4 md:gap-4 gap-1 text-center">
              <h1 className="font-bold">GET NEWSLETTER</h1>
              <p>Get more updates from us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
