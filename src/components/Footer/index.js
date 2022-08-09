import React from "react";
import LogoContent from "../LogoContent";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="page-footer font-small blue  footer-container">
      <div className="container-fluid text-center text-md-left footer-content">
        <div className="row">
          <div className="col-lg-4 mb-md-0 mb-3 ">
            <LogoContent />
          </div>
          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-lg-2 col-md-6 mb-3 pt-3 ">
            <h5 className="text-uppercase">Company</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Careers</a>
              </li>
              <li>
                <a href="#!">Affiliates</a>
              </li>
              <li>
                <a href="#!">Blog</a>
              </li>
              <li>
                <a href="#!">Press</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-2  col-md-6 mb-3 pt-3">
            <h5 className="text-uppercase">Individuals</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Buy & sell</a>
              </li>
              <li>
                <a href="#!">Earn free cryto</a>
              </li>
              <li>
                <a href="#!">Stocks</a>
              </li>
              <li>
                <a href="#!">Wallet</a>
              </li>
              <li>
                <a href="#!">Card</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2  col-md-6 mb-3 pt-3 ">
            <h5 className="text-uppercase">Support</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Help center</a>
              </li>
              <li>
                <a href="#!">Contact us</a>
              </li>
              <li>
                <a href="#!">Create account</a>
              </li>
              <li>
                <a href="#!">ID verification</a>
              </li>
              <li>
                <a href="#!">Account infomation</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2  col-md-6 mb-md-0 mb-3 pt-3">
            <h5 className="text-uppercase">Follow Us On</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Facbook</a>
              </li>
              <li>
                <a href="#!">Twitter</a>
              </li>
              <li>
                <a href="#!">Pinterest</a>
              </li>
              <li>
                <a href="#!">Instahram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
