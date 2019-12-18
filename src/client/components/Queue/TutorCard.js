import React from 'react';

const TutorCard = () => {
  return (
    <div>
      <div className="row bg-main justify-content-start border-bottom-sub-light">
        <div className="col-8 py-2">
          <div className=" d-flex justify-content-start bg-main align-items-center ml-3 p-2">
            <div>
              <img
                src="https://dummyimage.com/400x400/000/fff"
                alt=""
                width="80"
                height="80"
                className="rounded-circle mr-2"
              />
            </div>
            <div className="text-light ml-4  text-truncate">
              <p className="lead mb-0">This is a very long name</p>
              <div>
                <div className="d-flex justify-content-start">
                  <div className="font-weight-light font-italic ">
                    <p className="lead mb-0">Like: &nbsp;302</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3 d-flex justify-content-end p-0 bg-main pt-2">
          <button
            className="btn h-50 btn-success rounded-0 mt-4 ml-4 px-3 pb-4"
            type="button"
            data-toggle="modal"
            data-target="#joinroom"
          >
            <p className="lead mb-0">Join Room</p>
          </button>
        </div>
      </div>
      {/* ------------- MODAL ------------- */}
      <div className="modal fade" id="joinroom">
        <div className="modal-dialog">
          <div className="modal-content bg-sub rounded-0">
            <div className="modal-body text-center lead mt-3 mb-0 text-light">
              Join this room?
            </div>
            <div className="modal-footer border-0 d-flex justify-content-around">
              <button
                type="button"
                className="btn bg-success rounded-0 text-light lead px-5 py-2"
                data-dismiss="modal"
              >
                Yes
              </button>
              <button
                type="button"
                className="btn bg-danger rounded-0 text-light lead px-5 py-2"
                data-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorCard;
