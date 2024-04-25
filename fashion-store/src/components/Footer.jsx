const Footer = () => {
  return (
    <div className="h-[40vh] ">
      <div className="mt-12 border-t-2 border-solid border-black mx-9 flex justify-between px-12 pt-9">
        <div className="footer-nav">
          <div className="nav-links flex flex-col gap-4 text-center">
            <h1 className="font-bold">HOT LINKS</h1>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="more-info">
          <div className="nav-links flex flex-col gap-4 text-center">
            <h1 className="font-bold">MORE INFO</h1>
            <a href="/">How it works</a>
            <a href="/shop">Decline rules</a>
            <a href="/about">Terms & Conditions</a>
          </div>
        </div>
        <div className="customer-care">
          <div className="nav-links flex flex-col gap-4 text-center">
            <h1 className="font-bold">CUSTOMER CARE</h1>
            <a href="/">FAQ</a>
            <a href="/shop">Terms of use</a>
            <a href="/about">Privacy Policy</a>
            <a href="/contact">Discount system</a>
          </div>
        </div>
        <div className="newsletter">
          <div className="nav-links flex flex-col gap-4 text-center">
            <h1 className="font-bold">GET NEWSLETTER</h1>
            <p>Get more updates from us</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
