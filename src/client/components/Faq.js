import React from 'react';

const Faq = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-3 color-pale-green">FAQ</h1>
      <hr className="col-lg-1 mb-4" />
      <div className="row">
        <div className="col-10 mx-auto mb-5">
          <div className="accordion" id="faqExample">
            <div className="card">
              <div className="card-header p-2" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn bg-pale-green btn-lg btn-block text-left text-white"
                    Type="button"
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
                <div className="card-body">
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
              <div className="card-header p-2 text-center" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn bg-pale-green btn-lg btn-block text-left text-white"
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
                <div className="card-body">
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
              <div className="card-header p-2 text-center" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn bg-pale-green btn-lg btn-block text-left text-white"
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
                <div className="card-body">
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
              <div className="card-heade p-2 text-center" id="headingFour">
                <h5 className="mb-0">
                  <button
                    className="btn bg-pale-green btn-lg btn-block text-left text-white"
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
                <div className="card-body">
                  <p>
                    Our convenient online classroom lets you tutor from your
                    home, office, dorm or from any computer with a stable
                    internet connection. No travel expenses necessary!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-heade p-2 text-center" id="headingFive">
                <h5 className="mb-0">
                  <button
                    className="btn bg-pale-green btn-lg btn-block text-left text-white"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Are you retarded ?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseFive"
                aria-labelledby="Five"
                data-parent="#faqExample"
              >
                <div className="card-body">
                  <p>Yes, yes you are.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-heade p-2 text-center" id="headingSix">
                <h5 className="mb-0">
                  <button
                    className="btn bg-pale-green btn-lg btn-block text-left text-white"
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
                <div className="card-body">
                  <p>
                    Our convenient online classroom lets you tutor from your
                    home, office, dorm or from any computer with a stable
                    internet connection. No travel expenses necessary!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-heade p-2 text-center" id="headingSeven">
                <h5 className="mb-0">
                  <button
                    className="btn bg-pale-green btn-lg btn-block text-left text-white"
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
                <div className="card-body">
                  <p>
                    Our convenient online classroom lets you tutor from your
                    home, office, dorm or from any computer with a stable
                    internet connection. No travel expenses necessary!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
