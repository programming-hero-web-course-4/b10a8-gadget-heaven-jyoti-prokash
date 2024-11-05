const Footer = () => {
  return (
    <div>
      <footer className="space-y-3 bg-base-200 border-base-300 py-4 text-center">
      <h1 className="text-3xl font-bold">Gadget Heaven</h1>
      <p className="text-gray-500">Leading the way in cutting-edge technology and innovation.</p>
</footer>
          <footer className="footer bg-base-200 text-base-content p-10 justify-evenly">
          <nav>
    <h6 className="footer-title">Product Support</h6>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

    </div>
    
  );
};

export default Footer;
