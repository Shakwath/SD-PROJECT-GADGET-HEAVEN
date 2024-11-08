const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div class="text-center mb-8">
          <h2 class="text-2xl font-bold text-black">Gadget Heaven</h2>
          <p>
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
    <footer className="footer bg-white text-black justify-around  border-t-[1px] pt-4">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Trac                                                              king</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover"></a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
  </footer>
    </div>
  );
};

export default Footer;