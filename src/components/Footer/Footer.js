import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    /*  // Footer Section the Website
    <div className="footer">
        <br />
      <a href="Home">Home</a>
      <a href="Friends">Faculty</a>
      <a href="About">About</a>
      <a href="Contact Us">Contact Us</a>

      <div className="socialmedia">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-facebook-messenger"></i>
        <i className="fab fa-google-plus-g"></i>
        <i className="fab fa-whatsapp"></i>
      </div>
      <h5>&copy; All Rights Reserved by LearningCare</h5>
    </div> */

    <div> <br /> <br />
      <footer class="text-white text-center text-lg-start bg-dark">
        <div class="container p-4">
          <div class="row mt-4">
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">About company</h5>

              <p>
                 adipisicing elit. Totam labore ex, quae cum pariatur molestias aspernatur facere dolores 
              </p>

              <p>
              dolores quo! Maxime nihil voluptatum aperiam obcaecati quod libero quasi aspernatur, rerum perferendis.
              </p>

              <div class="mt-4">
                <a type="button" class="btn btn-floating btn-light btn-lg">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a type="button" class="btn btn-floating btn-light btn-lg">
                  <i class="fab fa-dribbble"></i>
                </a>
                <a type="button" class="btn btn-floating btn-light btn-lg">
                  <i class="fab fa-twitter"></i>
                </a>
                <a type="button" class="btn btn-floating btn-light btn-lg">
                  <i class="fab fa-google-plus-g"></i>
                </a>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4 pb-1">Search something</h5>

              <div class="form-outline form-white mb-4">
                <input
                  type="text"
                  id="formControlLg"
                  class="form-control form-control-lg"
                />
                <label class="form-label" for="formControlLg">
                  Search
                </label>
              </div>

              <ul class="fa-ul" >
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-home"></i>
                  </span>
                  <span class="ms-2">Warsaw, 00-967, Poland</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-envelope"></i>
                  </span>
                  <span class="ms-2">contact@example.com</span>
                </li>
                <li class="mb-3">
                  <span class="fa-li">
                    <i class="fas fa-phone"></i>
                  </span>
                  <span class="ms-2">+ 48 234 567 88</span>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-4">Opening hours</h5>

              <table class="table text-center text-white">
                <tbody class="fw-normal">
                  <tr>
                    <td>Mon - Thu:</td>
                    <td>8am - 9pm</td>
                  </tr>
                  <tr>
                    <td>Fri - Sat:</td>
                    <td>8am - 1am</td>
                  </tr>
                  <tr>
                    <td>Sunday:</td>
                    <td>9am - 10pm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          class="text-center p-3"
          
        >
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">
            AfjalSharifOpu.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
