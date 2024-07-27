import { VscArrowSmallRight } from "react-icons/vsc";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

import "./index.css";

const Counsellor = () => (
  <div className="counsellor">
    <h2>COUNSELLORS</h2>
    <div className="counsellor-card-container">
      <div className="counsellors-card">
        <div className="counsellors-card-items">
          <div className="card-items">
            <img
              src="https://cdn.onelifehealth.care/uploads/psychologists/profile/665b68b865ddd45162eb2235.jpg"
              alt="Neha Gupta"
              className="profile-pic"
            />
          </div>
          <div className="card-items">
            <h3 className="counsellors-title">Neha Gupta</h3>
            <p className="counsellors-description">
              Counselling Psychologist, Crisis Counsellor, Suicide Prevention
              Gatekeeper
            </p>
            <p className="counsellors-description">2 Years Experience</p>
          </div>
          <div className="card-items">
            <VscArrowSmallRight className="counsellors-right-arrow " />
          </div>
        </div>
        <div className="price-tags">
          <p className="likes">
            <BsFillHandThumbsUpFill />
            99%
          </p>
          <p className="language">Hindi | English</p>
          <p className="price">₹899</p>
        </div>
      </div>
    </div>
  </div>
);
export default Counsellor;
