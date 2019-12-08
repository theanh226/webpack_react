import React from 'react';

const Footer = () => {
  return (
    <div className="footer bg-pale-green">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-xs-12 pt-4 about">
            <h2 className="text-white pt-3">About us</h2>
            <p className="text-white-50 pr-5">
              A group of students who want to make presentation before 16
              January ¯\_(ツ)_/¯
            </p>
          </div>
          <div className="col-lg-3 col-xs-12 pt-5 icon">
            <a
              href="https://www.facebook.com/unihannover/"
              className="text-white-50"
            >
              <i className="fab fa-facebook fa-2x mt-3" />
            </a>
            <a
              href="https://twitter.com/unihannover?lang=en"
              className="text-white-50"
            >
              <i className="fab fa-twitter fa-2x mt-3t ml-3" />
            </a>
            <a
              href="https://www.youtube.com/user/LeibnizUniHannover"
              className="text-white-50"
            >
              <i className="fab fa-youtube fa-2x ml-3" />
            </a>
            <a
              href="https://www.instagram.com/uni_hannover/"
              className="text-white-50"
            >
              <i className="fab fa-instagram fa-2x ml-3" />
            </a>
            <a href="https://www.uni-hannover.de/en/" className="text-white-50">
              <i className="fas fa-university fa-2x ml-3" />
            </a>
          </div>
          <div className="Location pt-4 pl-5">
            <h4 className="text-white pt-3">Location</h4>
            <p className="text-white-50 mb-2">Welfengarten 1, 30167 Hannover</p>
            <p className="text-white-50 mb-2">
              <a href="tel:+49-511-762-0" className="text-white-50">
                <i href="tel:" className="fa fa-phone mr-3" />
                0511 7620
              </a>
            </p>
            <p className="text-white-50">
              <a
                href="mailto:studium@uni-hannover.de"
                target="_top"
                className="text-white-50"
              >
                <i className="fa fa-envelope mr-3" />
                studium@uni-hannover.de
              </a>
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright border-top border-white-50">
            <p>
              <small className="text-white-50">
                © 2019. All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
