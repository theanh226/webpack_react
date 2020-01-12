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
              <div className="card-header pt-1 px-1 pb-0" id="headingZero">
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseZero"
                    aria-expanded="false"
                    aria-controls="collapseZero"
                  >
                    What is InfoLouge?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseZero"
                aria-labelledby="headingZero"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p className="mb-0">
                    InfoLounge is a web-based online tutoring system that allows
                    LUIH-students to discuss their programming assignments with
                    tutors online.
                  </p>
                </div>
              </div>
            </div>
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
                  <p>
                    Connecting online with students to privide help and tutoring
                    in the subjects.
                  </p>
                  <p>
                    Guiding students to understand the topics they bring to each
                    tutoring session.
                  </p>
                  <p>
                    Encouraging students to engage actively with their topics to
                    build deeper understanding.
                  </p>
                  <p className="mb-0">
                    Helping build student confidence in their ability to learn
                    and to understand challenging concepts.
                  </p>
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
                  <ul className="mb-0">
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
                  <p className="mb-0">
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
                    How do I register?
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
                  <p>
                    To sign up an account for the system, you will need to
                    provide your name, your LUIH email adress and your new
                    password for the account.
                  </p>
                  <p>
                    As a tutor, you also need a tutor code, which is provided by
                    professors. As a student, you don&apos;t need this code to
                    sign in.
                  </p>
                  <p className="mb-0">
                    Once you fill in all of the needed information, the website
                    will lead you back to sign in page and indicate a
                    notification, that the registration is successful. You can
                    then log in to the system using your email and password that
                    you have created.
                  </p>
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
                    Do I need to pay any fee?
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
                  <p className="mb-0">
                    As a student or tutor of LUIH, you don&apos;t have to pay
                    any fee for the service. Just sign up and get use to it :)
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
                    As a tutor, how can I manage waiting list of students?
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
                    You have right to modify the waiting queue, once you are
                    logged in as a tutor. You can always kick a student out of
                    the queue, but please do it only in 2 cases:
                  </p>
                  <ul>
                    <li>
                      You can kick a student, when he/she can&apos;t choose a
                      tutor when he&apos;s at top of the queue
                    </li>
                    <li>
                      You can kick a student, when he/she doesn&apos;t ask
                      anything or can&apos;t ask a proper question
                    </li>
                  </ul>
                  <p className="mb-0">
                    Although this is a needed feature, it&apos;s always not nice
                    to kick student out... So please use it wisely!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingEight"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    As a student, how do I get help from a tutor?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseEight"
                aria-labelledby="headingEight"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>
                    After logging in as a student, you can click &quot;Join
                    Queue&quot; to join the waiting queue. You will become a
                    waiting number, which shows where you are at in the queue.
                    The waiting number will decrease through time, and once
                    it&apos;s equal 0, it&apos;s your turn!
                  </p>
                  <p>
                    You will have right to choose which tutor you like, but
                    please do it quickly, because there might be a lot of people
                    who are waiting for you behind. Once you choose a tutor, you
                    will be directed to the chat room with that tutor. Here you
                    are allowed to ask anything you want, if it&apos;s relevant
                    to programming.
                  </p>
                  <p className="mb-0">
                    Be careful: Tutors can always kick you out of the chat room
                    or waiting queue, so please behave nicely!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingNine"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    Can I chat with several students/tutors at once?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseNine"
                aria-labelledby="headingNine"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p className="mb-0">
                    You can only chat with one person at a time. Multi-tasking
                    is not possible at the moment.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingTen"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    What materials and resources can I use?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseTen"
                aria-labelledby="headingTen"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>
                    Our system&apos;s chat room provides a code snippet windows,
                    where you and the other person in the chat room can share
                    code to each other from file or text. Of course you guys can
                    chat with each other, too. Once the conversation is
                    finished, the chat room view will be remained there. You can
                    leave it there as long as you want, before you click
                    &quot;Leave Room&quot; to exit.
                  </p>
                  <p className="mb-0">
                    Note: Once you exit the chat room, all chat history will be
                    deleted!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingEleven"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                  >
                    How long is a tutoring session?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseEleven"
                aria-labelledby="headingEleven"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>
                    As long as the tutor allows it to be. You can always ask
                    once you are in the chat room.
                  </p>
                  <p className="mb-0">
                    Be careful: Tutors can always kick you out of the chat room,
                    so please behave nicely!
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingTwelve"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwelve"
                    aria-expanded="false"
                    aria-controls="collapseTwelve"
                  >
                    Will my tutor just give me the answers?
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseTwelve"
                aria-labelledby="headingTwelve"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <p>
                    Tutor.com&apos;s philosophy is to help students understand
                    the concepts behind what they are working on, so that our
                    students can learn how to solve the problem and reach the
                    answer on their own.
                  </p>
                  <p className="mb-0">
                    Tutor.com is not an answer-giving service.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div
                className="card-header pt-1 px-1 pb-0 text-center"
                id="headingThirdteen"
              >
                <h5 className="mb-0">
                  <button
                    className="btn bg-main btn-lg btn-block text-left text-white rounded-0"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThirdteen"
                    aria-expanded="false"
                    aria-controls="collapseThirdteen"
                  >
                    These links may help you to understand more quickly
                  </button>
                </h5>
              </div>
              <div
                className="collapse"
                id="collapseThirdteen"
                aria-labelledby="headingThirdteene"
                data-parent="#faqExample"
              >
                <div className="card-body text-white">
                  <ul className="mb-0">
                    <li>
                      <a
                        href="https://www.w3schools.com/"
                        className="text-light"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        w3schools.
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.w3resource.com/"
                        className="text-light"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        w3resource.
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udemy.com/"
                        className="text-light"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Udemy.
                      </a>
                    </li>
                  </ul>
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
