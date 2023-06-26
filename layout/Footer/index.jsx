import "./styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="footer container-fluid">
      <div className="container">
        <div className="footer-container d-flex flex-column-reverse align-items-center flex-md-row  gap-3 gap-md-5 p-3">
          <img src="/svg/logo-01.svg" alt="logo" className="col" />
          <p className="col col-md-3">
            Sweet goodbyes from Ben & Jud's Ice Cream Shop! Thank you for
            savoring our delectable treats. Until we meet again, may your days
            be filled with happiness and a scoop of delight. Stay sweet!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
