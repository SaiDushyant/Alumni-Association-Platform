import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function Contact() {
  return (
    <>
      <NavBar />
      <section className="bg-gray-100 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 text-center">
            <div className="mb-2 inline-block text-lg font-bold capitalize text-orange-500">
              Contact Us
            </div>
            <h2 className="text-4xl font-bold text-black">
              Let&apos;s Get in Touch.
            </h2>
          </div>
          <div className="overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="flex flex-wrap">
              {/* Form Column */}
              <div className="form-column w-full p-6 md:w-2/3">
                <div className="inner-column">
                  {/* Contact Form */}
                  <div className="contact-form">
                    <form
                      method="post"
                      action="sendemail.php"
                      id="contact-form"
                    >
                      <div className="-mx-3 flex flex-wrap">
                        <div className="form-group mb-4 w-full px-3 md:w-1/2">
                          <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="h-15 w-full rounded-lg border border-gray-300 px-6 py-3 transition duration-300"
                            required
                          />
                        </div>
                        <div className="form-group mb-4 w-full px-3 md:w-1/2">
                          <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="h-15 w-full rounded-lg border border-gray-300 px-6 py-3 transition duration-300"
                            required
                          />
                        </div>
                        <div className="form-group mb-4 w-full px-3 md:w-1/2">
                          <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="h-15 w-full rounded-lg border border-gray-300 px-6 py-3 transition duration-300"
                            required
                          />
                        </div>
                        <div className="form-group mb-4 w-full px-3 md:w-1/2">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            className="h-15 w-full rounded-lg border border-gray-300 px-6 py-3 transition duration-300"
                            required
                          />
                        </div>
                        <div className="form-group mb-4 w-full px-3">
                          <textarea
                            name="message"
                            placeholder="Message"
                            className="h-64 w-full rounded-lg border border-gray-300 px-6 py-3 transition duration-300"
                          ></textarea>
                        </div>
                        <div className="form-group w-full px-3">
                          <button
                            type="submit"
                            className="w-full rounded-lg border border-orange-500 bg-orange-500 px-8 py-4 font-bold text-white transition duration-300 hover:bg-white hover:text-orange-500"
                          >
                            Send Now
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* End Contact Form */}
                </div>
              </div>
              {/* Info Column */}
              <div className="info-column w-full bg-orange-600 p-6 text-white md:w-1/3">
                <div className="inner-column">
                  <h2 className="mb-6 text-2xl font-bold">Contact Info</h2>
                  <ul className="mb-12 list-none">
                    <li className="mb-6 flex items-start text-lg">
                      <i className="fas fa-globe mr-3 text-2xl"></i>
                      <span>123 lorem ispum Abc, Street Chandigarh.</span>
                    </li>
                    <li className="mb-6 flex items-start text-lg">
                      <i className="far fa-envelope mr-3 text-2xl"></i>
                      <span>example@test</span>
                    </li>
                    <li className="mb-6 flex items-start text-lg">
                      <i className="fas fa-phone mr-3 text-2xl"></i>
                      <span>
                        1-234-567-890
                        <br />
                        1-234-567-890
                      </span>
                    </li>
                  </ul>
                  <ul className="mb-0 flex list-none">
                    <li className="mr-3 text-lg font-semibold">Follow on:</li>
                    <li className="mr-3">
                      <a
                        href="#"
                        className="text-white transition duration-300 hover:text-gray-300"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        href="#"
                        className="text-white transition duration-300 hover:text-gray-300"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        href="#"
                        className="text-white transition duration-300 hover:text-gray-300"
                      >
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        href="#"
                        className="text-white transition duration-300 hover:text-gray-300"
                      >
                        <i className="fab fa-dribbble"></i>
                      </a>
                    </li>
                    <li className="mr-3">
                      <a
                        href="#"
                        className="text-white transition duration-300 hover:text-gray-300"
                      >
                        <i className="fab fa-pinterest-p"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* End Info Column */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
