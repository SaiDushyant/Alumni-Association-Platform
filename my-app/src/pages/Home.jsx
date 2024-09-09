import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function Home() {
  return (
    <>
      <NavBar />
      <section className="flex h-[35rem] items-center justify-center bg-gray-200">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome to Our Alumni Platform
          </h1>
          <p className="mb-4 px-4 text-lg md:px-8">
            We provide a comprehensive solution for alumni associations to stay
            connected, support their alma mater, and advance their careers.
            Explore our services below.
          </p>
          <button className="mt-6 rounded-3xl border-2 bg-orange-500 px-5 py-2 text-2xl text-white hover:bg-orange-600">
            Learn More
          </button>
        </div>
      </section>
      <section className="mt-12 px-4">
        <h1 className="mb-6 text-center text-3xl font-semibold">
          Our Services
        </h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 text-4xl text-orange-500">📋</div>
            <h2 className="mb-2 text-xl font-semibold">Alumni Registration</h2>
            <p className="text-center">
              Seamlessly register and update your profile to stay connected and
              involved.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 text-4xl text-orange-500">💸</div>
            <h2 className="mb-2 text-xl font-semibold">Donation Portal</h2>
            <p className="text-center">
              Contribute to various initiatives and support your alma mater with
              ease.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 text-4xl text-orange-500">🤝</div>
            <h2 className="mb-2 text-xl font-semibold">Networking Hub</h2>
            <p className="text-center">
              Connect with fellow alumni based on shared interests and
              professions.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 text-4xl text-orange-500">💼</div>
            <h2 className="mb-2 text-xl font-semibold">Job Portal</h2>
            <p className="text-center">
              Explore job opportunities and post openings within the alumni
              network.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 text-4xl text-orange-500">📖</div>
            <h2 className="mb-2 text-xl font-semibold">Alumni Directory</h2>
            <p className="text-center">
              Search for alumni based on various criteria and build valuable
              connections.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 text-4xl text-orange-500">🌟</div>
            <h2 className="mb-2 text-xl font-semibold">Success Stories</h2>
            <p className="text-center">
              Highlight and celebrate notable achievements and contributions
              from alumni.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 text-4xl text-orange-500">🎉</div>
            <h2 className="mb-2 text-xl font-semibold">Events & Reunions</h2>
            <p className="text-center">
              Organize and manage alumni events, reunions, and professional
              development sessions.
            </p>
          </div>
          <div className="flex flex-col items-center rounded-lg bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-4 text-4xl text-orange-500">📋</div>
            <h2 className="mb-2 text-xl font-semibold">Feedback & Surveys</h2>
            <p className="text-center">
              Provide feedback and participate in surveys to help us improve and
              evolve.
            </p>
          </div>
        </div>
      </section>
      <section className="my-12 px-4">
        <h1 className="mb-6 text-center text-3xl font-semibold">
          Contact Us <span className="text-orange-500">!</span>
        </h1>
        <div className="mx-auto max-w-md">
          <p className="mb-4 px-4 text-center text-lg md:px-8">
            For more information or if you have any questions, feel free to
            reach out to us.
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-lg border-2 border-gray-300 px-4 py-2 text-lg focus:border-orange-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-lg border-2 border-gray-300 px-4 py-2 text-lg focus:border-orange-500 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="rounded-lg border-2 border-gray-300 px-4 py-2 text-lg focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              className="mx-auto w-[60%] rounded-3xl border-2 bg-orange-500 px-5 py-2 text-2xl text-white hover:bg-orange-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
