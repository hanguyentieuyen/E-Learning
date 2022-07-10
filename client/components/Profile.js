import { useState } from "react";
import Image from "next/image";
import Ava4 from "../images/Avatar4.png";
import {
  FaMedal,
  FaTrophy,
  FaCrown,
  FaAward,
  FaPhoneAlt,
  FaTrashAlt,
  FaUserTie,
  FaUsers,
} from "react-icons/fa";

const Profile = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="profile-wrapper">
      <div className="row profile-content">
        <div className="profile-info col-lg-4">
          <div className="profile-info-header">
            <div className="profile-info-user">
              <div>
                <Image src={Ava4} width="100px" height="100px" />
              </div>
              <h5>Ha Nguyen</h5>
              <span className="profile-info-vip">Vip</span>
            </div>
            <div className="profile-info-courses">
              <div className="profile-info-courses-progress">
                <div className="courses-number">
                  <span>10</span>
                </div>
                <span className="profile-courses-text">Course in progress</span>
              </div>
              <div className="profile-info-courses-complete">
                <div className="courses-number">
                  <span>5</span>
                </div>
                <span className="profile-courses-text">Couse Complete</span>
              </div>
            </div>
          </div>
          <div className="profile-achive">
            <h4>Last Achievement</h4>
            <div className="profile-achive-list">
              <div className="profile-achive-item">
                <FaCrown />
              </div>
              <div className="profile-achive-item">
                <FaAward />
              </div>
              <div className="profile-achive-item">
                <FaTrophy />
              </div>
              <div className="profile-achive-item">
                <FaMedal />
              </div>
            </div>
          </div>
          <div className="profile-support">
            <h4>Support</h4>
            <div className="profile-support-item">
              <div className="profile-support-icon">
                <FaUserTie />
              </div>
              <span>Become a mentor</span>
            </div>
            <div className="profile-support-item">
              <div className="profile-support-icon">
                <FaPhoneAlt />
              </div>
              <span>Support</span>
            </div>
            <div className="profile-support-item">
              <div className="profile-support-icon">
                <FaUsers />
              </div>
              <span>Invite Friends</span>
            </div>
            <div className="profile-support-item">
              <div className="profile-support-icon">
                <FaTrashAlt />
              </div>
              <span>Delete account</span>
            </div>
          </div>
        </div>
        <div className="profile-setting col-lg-8">
          <h4>Profile Settings</h4>
          <div className="profile-tabs">
            <div
              className={
                toggleState === 1
                  ? "profile-tab-item active"
                  : "profile-tab-item"
              }
              onClick={() => toggleTab(1)}
            >
              Personal Details
            </div>
            <div
              className={
                toggleState === 2
                  ? "profile-tab-item active"
                  : "profile-tab-item"
              }
              onClick={() => toggleTab(2)}
            >
              Notifications
            </div>
            <div
              className={
                toggleState === 3
                  ? "profile-tab-item active"
                  : "profile-tab-item"
              }
              onClick={() => toggleTab(3)}
            >
              Payment
            </div>
            <div
              className={
                toggleState === 4
                  ? "profile-tab-item active"
                  : "profile-tab-item"
              }
              onClick={() => toggleTab(4)}
            >
              Privacy
            </div>
            <div class="line"></div>
          </div>
          <div className="profile-tab-content">
            <div className={toggleState === 1 ? "tab-pane active" : "tab-pane"}>
              <div className="profile-setting-edit">
                <div className="profile-personal">
                  <div className="profile-personal-img">
                    <Image src={Ava4} width="150" height="150" />
                  </div>
                </div>
                <form>
                  <div class="form row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="inputPassword4"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="inputAddress">Address</label>
                    <input
                      type="text"
                      class="form-control"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>

                  <div class="form row">
                    <div class="form-group col-md-6">
                      <label for="inputCity">City</label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputState">State</label>
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    </div>
                    <div class="form-group col-md-2">
                      <label for="inputZip">Zip</label>
                      <input type="text" class="form-control" id="inputZip" />
                    </div>
                  </div>
                  {/* <div class="form-group">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div> */}
                  <button type="submit" class="btn btn-save">
                    Save Profile
                  </button>
                  <button type="submit" class="btn btn-save">
                    Cancel
                  </button>
                </form>
              </div>
            </div>
            <div className={toggleState === 2 ? "tab-pane active" : "tab-pane"}>
              123
            </div>
            <div className={toggleState === 3 ? "tab-pane active" : "tab-pane"}>
              456
            </div>
            <div className={toggleState === 4 ? "tab-pane active" : "tab-pane"}>
              789
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
