import React from 'react';
import { Link } from 'react-router-dom';

const Faq = () => {
  return (
    <div className="container fix-height bg-sub-50 pt-5">
      <p className="text-center text-light display-4">
        Frequently asked Questions
      </p>
      <p className="lead text-light text-center mb-4">How can we help you ?</p>
      <div className="row">
        <div className="col-12 col-sm-12 col-lg-10 col-xl-8 mx-auto mb-5">
          <div className="accordion" id="faqExample">
            <div className="card">
              <div className="card-header pt-1 px-1 pb-0" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    What are an online tutor’s responsibilities?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseOne"
                aria-labelledby="headingOne"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <ul>
                    <li>
                      Connecting online with students to privide help and
                      tutoring in the subjects.
                    </li>
                    <li>
                      Guiding students to understand the topics they bring to
                      each tutoring session.
                    </li>
                    <li>
                      Encouraging students to engage actively with their topics
                      to build deeper understanding.
                    </li>
                    <li>
                      Helping build student confidence in their ability to learn
                      and to understand challenging concepts.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingTwo"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Am I qualified to become a tutor
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseTwo"
                aria-labelledby="headingTwo"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <ul>
                    <li>
                      Are available to tutor at least five hours per week.
                    </li>
                    <li>Are an expert in your subject.</li>
                    <li>Currently studying at the Leibniz university.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingThree"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Do I have to tutor certain hours?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseThree"
                aria-labelledby="headingThree"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>
                    Tutor.com allows you to create a flexible schedule that fits
                    your needs. Our service is available 24 hours a day, 7 days
                    a week, which means you can create a new schedule on a
                    week-to-week basis. There are three ways to tutor:
                  </p>
                  <ul>
                    <li>Create a schedule each week</li>
                    <li>Log on unscheduled and pick up sessions</li>
                    <li>Set availability for scheduled appointments</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingFour"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Where does tutoring take place?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseFour"
                aria-labelledby="headingFour"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>
                    Our convenient online classroom lets you tutor from your
                    home, office, dorm or from any computer with a stable
                    internet connection. No travel expenses necessary!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingFive"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How do I sign in ?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseFive"
                aria-labelledby="Five"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>Click on Sign up line on the Login page</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingSix"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    How do you feel hungry
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseSix"
                aria-labelledby="headingFSix"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>
                    Our convenient online classroom lets you tutor from your
                    home, office, dorm or from any computer with a stable
                    internet connection. No travel expenses necessary!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingSeven"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    What to eat today ?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseSeven"
                aria-labelledby="headingSeven"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>
                    Our convenient online classroom lets you tutor from your
                    home, office, dorm or from any computer with a stable
                    internet connection. No travel expenses necessary!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="containButton d-sm-flex d-lg-flex justify-content-between mt-4">
            <Link to="/">
              <button
                className="col-12 btLandingPage btn bg-main rounded text-light px-4 pt-3 mb-3"
                type="button"
              >
                <p className="lead">Go to Landing Page</p>
              </button>
            </Link>
            <Link to="/profile">
              <button
                className="btn btn-danger col-12 rounded pt-3 px-5"
                type="button"
              >
                <p className="lead">Go to Lounge</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
