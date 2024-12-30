import React from "react";

function Footer() {
  return (
    <footer>
      <hr />
      <section className="container">
        <div className="footer-container">
          <div className="footer-part-one">
            {/* <div>
              <svg
                width="35"
                height="35"
                viewBox="0 0 54 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.2"
                  x="0.5"
                  y="0.973633"
                  width="53.2632"
                  height="53.2632"
                  rx="10.6526"
                  fill="#19D47B"
                />
                <path
                  d="M42.507 13.3534C41.9619 12.8961 41.1056 12.8306 40.2204 13.1823H40.2189C39.2878 13.5519 13.8628 24.3406 12.8278 24.7813C12.6396 24.8461 10.9955 25.4529 11.1648 26.8048C11.316 28.0236 12.6374 28.5283 12.7987 28.5866L19.2626 30.7761C19.6914 32.1883 21.2723 37.3986 21.6219 38.5117C21.8399 39.2056 22.1954 40.1173 22.8183 40.305C23.3649 40.5135 23.9085 40.323 24.2603 40.0497L28.2122 36.4236L34.5917 41.3455L34.7436 41.4354C35.1768 41.6252 35.5918 41.7201 35.9879 41.7201C36.2939 41.7201 36.5876 41.6633 36.8682 41.5497C37.824 41.1614 38.2063 40.2604 38.2462 40.1583L43.0114 15.6551C43.3022 14.3464 42.898 13.6806 42.507 13.3534ZM24.9632 31.6519L22.7827 37.4043L20.6021 30.2138L37.3195 17.9899L24.9632 31.6519Z"
                  fill="white"
                />
              </svg>
            </div> */}
            <div>
              <h3>Join the Community</h3>
              <p>
                Follow us on Telegram for updates, insights, and smarter trading
                solutions.
              </p>
            </div>
          </div>
          <div className="footer-part-two">
            <div className="flex">
              <h3>Contact Us</h3>
              <p>For inquiries or assistance:</p>
            </div>
            <div>
              <h3>Email: support@soltradingbot.co</h3>
            </div>
            <div>
              <h3>
                Telegram :{" "}
                <a href="link" target="_blank">
                  @bakid1
                </a>{" "}
              </h3>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
