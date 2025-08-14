import ProfileCard from "../components/ProfileCard";

export default function About() {
  return (
    <>
      <div className=" h-fit flex bg-gray-800 py-24 sm:py-32">
        <section className="ml-20 ">
          <ProfileCard
            name="Arsalan Farooq"
            title="Web Designer"
            handle="arsalanfarooq"
            status="Online"
            contactText="Contact Me"
            avatarUrl="src\assets\card.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            // onContactClick={() => console.log('Contact clicked')}
          />
        </section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              About ME
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-300">
              <i className="text-3xl">Arsalan Farooq</i>
              <br />
              <br />
              Aspiring Front End Developer, currently pursuing B.Tech in
              Computer Science. Seeking to leverage strong foundation in web
              development and training experience to deliver high-quality work
              as a Front End Developer.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
