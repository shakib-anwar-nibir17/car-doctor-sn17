import logo from "../../assets/footer_logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#151515] lg:h-[447px] lg:flex lg:items-center">
      <footer className="footer  p-10  text-white">
        <aside>
          <div>
            <img src={logo} alt="" />
            <h4 className="text-center">Car Doctor</h4>
          </div>
          <p>
            <br />
            Edwin Diaz is a software and web technologies engineer,
            <br />a life coach trainer who is also a serial .
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
