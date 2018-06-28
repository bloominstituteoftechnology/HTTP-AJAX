import React, { Fragment } from "react";

const LandingPage = props => {
  return (
    <Fragment>
      <div className="container">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              <img
                src="https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg"
                className="responsive-img"
              />
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    Here at NewMyspace we understand how important it is to put
                    a list of friends together on a fictitious database. "Why
                    fictitious?" you may be wondering... and the answer is
                    ZUCKERBOT. We know you don't want anybody selling you'r
                    private friends information, or using you'r data to train
                    artificial intelligence on human behavior, that leads to the
                    machines resentment of the human race in general.{" "}
                    <span style={{ fontWeight: "bold" }}>
                      So go ahead, and add a new friend now!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
