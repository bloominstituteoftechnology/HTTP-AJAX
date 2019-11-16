import React, { Fragment } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LandingPage = props => {
  return (
    <Fragment>
      <MainContainer className="container">
        <div className="col s12">
          <div className="card">
            <div className="card-image">
              {/* <img
                src="https://images.pexels.com/photos/1191639/pexels-photo-1191639.jpeg"
                className="responsive-img"
              /> */}
              <div className="card-stacked">
                <div className="card-content">
                  <p>
                    Here at NewMyspace we understand how important it is to put
                    a list of friends together on a fictitious database. "Why
                    fictitious?" you may be wondering... and the answer is
                    ZUCKERBOT. We know you don't want anybody selling your
                    private friends information, or using your data to train
                    artificial intelligence on human behavior. That leads to the
                    machines resentment of the human race in general. So go
                    ahead.{" "}
                    <span style={{ fontWeight: "bold" }}>
                      Add a new friend here now!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </Fragment>
  );
};

export default LandingPage;
