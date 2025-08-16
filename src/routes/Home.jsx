import ProfileCard from "../components/ProfileCard";
import TextType from "../components/TextType";

export default function Home() {
  return (
    <>
      <div className=" h-fit w-full flex flex-col items-center justify-center md:flex-row bg-transparent   ">
        <section className="  ">
          <ProfileCard
            // name="Arsalan Farooq"
            // title="Web Designer"
            handle="arsalanfarooq"
            status="Online"
            contactText="Contact Me"
            avatarUrl="/assets/card.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            // onContactClick={() => {}}
          />
        </section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-6 text-lg leading-8 text-gray-300">
              <i className="text-3xl">Arsalan Farooq</i>
              <br />
              <br />
            </p>

            <TextType
              text={[
                " Aspiring Front End Developer",
                "Currently pursuing B.Tech in Computer Science",
                " Seeking to leverage strong foundation in web development ",
                "And training experience to deliver high-quality work ",
                " As a Front End Developer.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              className="text-2xl w-48 "
            />
          </div>
        </div>
      </div>
    </>
  );
}
