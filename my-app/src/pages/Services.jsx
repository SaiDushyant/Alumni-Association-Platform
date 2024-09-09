import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function Services() {
  return (
    <>
      <NavBar />
      <section className="mx-auto mt-10 max-w-4xl px-4 py-6">
        <h2 className="border-t-10 my-4 border-t-gray-400 bg-black py-4 text-center text-2xl text-white">
          <span>Our Services</span>
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">🎓</span>
              Alumni Registration
            </h3>
            <p className="font-sans text-sm">
              Easy and user-friendly registration and profile management for
              alumni to stay connected with the institution and fellow
              graduates.
            </p>
          </li>
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">💵</span>
              Donation Portal
            </h3>
            <p className="font-sans text-sm">
              Secure and convenient donation options to support various college
              initiatives, scholarships, and projects.
            </p>
          </li>
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">🤝</span>
              Networking Hub
            </h3>
            <p className="font-sans text-sm">
              Connect with alumni based on shared interests and professions,
              facilitating networking and mentorship opportunities.
            </p>
          </li>
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">💼</span>
              Job Portal
            </h3>
            <p className="font-sans text-sm">
              Search for job opportunities, post job openings, and connect with
              potential employers within the alumni network.
            </p>
          </li>
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">📚</span>
              Alumni Directory
            </h3>
            <p className="font-sans text-sm">
              A searchable directory to find alumni by graduation year, field of
              study, industry, and location to enhance networking.
            </p>
          </li>
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">🌟</span>
              Success Story Tracking
            </h3>
            <p className="font-sans text-sm">
              Feature to showcase and track alumni achievements and success
              stories to inspire current students and celebrate alumni
              contributions.
            </p>
          </li>
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">🎉</span>
              Events and Reunions
            </h3>
            <p className="font-sans text-sm">
              Discover and participate in exciting alumni events, reunions, and
              workshops designed to foster engagement and networking.
            </p>
          </li>
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">📝</span>
              Feedback and Surveys
            </h3>
            <p className="font-sans text-sm">
              Share your thoughts and suggestions through our feedback channels
              and surveys to help shape the future of the alumni association.
            </p>
          </li>
          <li className="relative rounded border border-gray-300 bg-white p-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            <h3 className="relative flex items-center py-4 text-xl">
              <span className="mr-3 text-3xl">🧩</span>
              Resource Library
            </h3>
            <p className="font-sans text-sm">
              Access a comprehensive library of resources, including educational
              materials, articles, and tools to aid in personal and professional
              growth.
            </p>
          </li>
        </ul>
      </section>
      <Footer />
    </>
  );
}

export default Services;
