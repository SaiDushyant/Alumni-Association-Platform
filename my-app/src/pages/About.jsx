import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function About() {
  return (
    <>
      <NavBar />
      <section className="mt-12 bg-orange-500 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-8 text-center text-4xl font-bold text-white">
            About Us
          </h1>
          <div className="rounded-lg border border-gray-300 bg-white p-8 shadow-lg">
            <p className="mb-4 text-lg leading-relaxed text-gray-700">
              Welcome to our platform! We are dedicated to providing alumni
              associations with the tools and resources they need to thrive. Our
              innovative approach combines technology with a deep understanding
              of the needs of alumni networks.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              <span className="font-semibold text-gray-800">Our Mission:</span>{' '}
              To bridge the gap between alumni and their alma mater, fostering
              lifelong connections, supporting professional growth, and
              encouraging philanthropy. We aim to create a vibrant community
              where alumni can connect, share, and grow.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Through our platform, we offer a range of services, including
              networking opportunities, job placements, donation management, and
              much more. Our user-friendly interface and comprehensive tools
              ensure that every member can make the most of their alumni
              association experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center justify-center rounded-lg border border-gray-300 bg-white p-6 shadow-lg">
            <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">
              Our Core Values
            </h2>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <span className="text-4xl text-orange-500">💡</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  Innovation
                </h3>
                <p className="mt-2 text-gray-700">
                  We embrace new ideas and technologies to continuously improve
                  our platform and services.
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl text-orange-500">🤝</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  Collaboration
                </h3>
                <p className="mt-2 text-gray-700">
                  We work together with alumni and partners to achieve common
                  goals and build a supportive community.
                </p>
              </div>
              <div className="mb-6">
                <span className="text-4xl text-orange-500">🌟</span>
                <h3 className="mt-2 text-xl font-semibold text-gray-800">
                  Excellence
                </h3>
                <p className="mt-2 text-gray-700">
                  We strive for excellence in everything we do, ensuring high
                  quality and value for our users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
