import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaSpotify,
  FaSnapchatGhost,
} from "react-icons/fa";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
import gpayLogo from "./Images/gpaylogo1.png";
import paypalLogo from "./Images/paypal.png";
import alipayLogo from "./Images/alipay.png";
import amazonLogo from "./Images/amazon.png";
import americanexpLogo from "./Images/amaericanexpj.png";
import apayLogo from "./Images/apay.png";
import bitcoinLogo from "./Images/bitcoin.png";
import bitpayLogo from "./Images/bitpay.jpg";
import discoverLogo from "./Images/discover.jpg";
import ebayLogo from "./Images/ebay.png";
import mastercardLogo from "./Images/mastercard.jpg";
import monobankLogo from "./Images/monobank.jpg";
import pioneerLogo from "./Images/pioneer.png";
import westernunionLogo from "./Images/westerunion.png";

function Footer() {
  return (
    <footer style={{ background: "#f5f4f2", padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {/* Company info */}
        <div>
          <h4>COMPANY INFO</h4>
          <p style={{ color: "#847375ff" }}>About</p>
          <p style={{ color: "#847375ff" }}>Social Responsibility</p>
          <p style={{ color: "#847375ff" }}>Affiliate</p>
          <p style={{ color: "#847375ff" }}>Fashion Blogger</p>
        </div>

        {/* Help & support */}
        <div>
          <h4>HELP & SUPPORT</h4>
          <p style={{ color: "#847375ff" }}>Shipping Info</p>
          <p style={{ color: "#847375ff" }}>Returns</p>
          <p style={{ color: "#847375ff" }}>How to Order</p>
          <p style={{ color: "#847375ff" }}>How to Track</p>
          <p style={{ color: "#847375ff" }}>Size Chart</p>
        </div>

        {/* Customer care */}
        <div>
          <h4>CUSTOMER CARE</h4>
          <p style={{ color: "#847375ff" }}>Payment</p>
          <p style={{ color: "#847375ff" }}>Bonus Point</p>
          <p style={{ color: "#847375ff" }}>Notices</p>
        </div>

        {/* Social icons */}
        <div>
          <h4>FOLLOW US</h4>
          <div>
            <FaFacebook
              style={{
                marginRight: "10px",
                cursor: "pointer",
                width: "24px",
                height: "24px",
              }}
            />
            <FaTwitter
              style={{
                marginRight: "10px",
                cursor: "pointer",
                width: "24px",
                height: "24px",
              }}
            />
            <FaInstagram
              style={{
                marginRight: "10px",
                cursor: "pointer",
                width: "24px",
                height: "24px",
              }}
            />
            <FaSpotify
              style={{
                marginRight: "10px",
                cursor: "pointer",
                width: "24px",
                height: "24px",
              }}
            />
            <FaSnapchatGhost
              style={{
                marginRight: "10px",
                cursor: "pointer",
                width: "24px",
                height: "24px",
              }}
            />
          </div>
        </div>
        <div>
          <h4>PLATFORMS</h4>
          <AiFillAndroid
            style={{
              marginRight: "10px",
              cursor: "pointer",
              width: "32px",
              height: "32px",
            }}
          />
          <AiFillApple
            style={{
              marginRight: "10px",
              cursor: "pointer",
              width: "32px",
              height: "32px",
            }}
          />
        </div>
      </div>

      {/* Signup input field with search button */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "65%",
        }}
      >
        <div>
          <h4 style={{ color: "#847375ff" }}>SIGN UP</h4>
          <input
            className="fieldcss"
            type="text"
            placeholder="Your email"
            style={{
              marginRight: "10px",
              padding: "5px",
              width: "79%",
              color: "#847375ff",
            }}
          />
          <button
            style={{
              padding: "5px",
              background: "rgb(47 46 44)",
              color: "white",
              height: "32px",
            }}
          >
            SUBSCRIBE
          </button>
          <p style={{ color: "#847375ff" }}>
            By clicking the SUBSCRIBE button, you are agreeing to our &nbsp;
            <a href="">Privacy & Cookie Policy</a>
          </p>
        </div>
      </div>

      <div
        className="footercontent"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>
          {/* Disclaimer */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p style={{ color: "#847375ff" }}>
              &copy; 2010-2022 All Rights Reserved.
            </p>
            <a style={{ color: "#847375ff" }} href="">
              Privacy Center
            </a>{" "}
            &nbsp;
            <a style={{ color: "#847375ff" }} href="">
              Privacy & Cookie Policy
            </a>{" "}
            &nbsp;
            <a style={{ color: "#847375ff" }} href="">
              Manage Cookies
            </a>
            &nbsp;
          </div>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <a style={{ color: "#847375ff" }} href="">
              Terms & Conditions
            </a>
            &nbsp;
            <a style={{ color: "#847375ff" }} href="">
              Copyright Notice
            </a>
            &nbsp;
            <a style={{ color: "#847375ff" }} href="">
              Imprint
            </a>
            &nbsp;
          </div>
        </div>
        {/* Payment icons */}
        <div className="footeraccepticon">
          <div>
            <h4>We Accept</h4>
            <div>
              <img
                src={mastercardLogo}
                alt="Mastercard Pay"
                style={{
                  marginRight: "10px",
                  width: "50px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={paypalLogo}
                alt="PayPal"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={ebayLogo}
                alt="Ebay Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={gpayLogo}
                alt="Google Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={monobankLogo}
                alt="Monobank Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={discoverLogo}
                alt="Discover Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={westernunionLogo}
                alt="WesternUnion Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={pioneerLogo}
                alt="Pioneer Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
            </div>
            <div>
              <img
                src={apayLogo}
                alt="Apple Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={americanexpLogo}
                alt="American Express Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={amazonLogo}
                alt="Amazon Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={alipayLogo}
                alt="Ali Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={bitpayLogo}
                alt="Bit Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
              <img
                src={bitcoinLogo}
                alt="Bitcoin Pay"
                style={{
                  width: "50px",
                  marginRight: "10px",
                  cursor: "pointer",
                  height: "30px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
