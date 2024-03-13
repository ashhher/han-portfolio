import { owner } from "@/configs";
import { MotionDiv, MotionText, ContactList } from ".";

const titleList = ["Developer 👩🏻‍💻", "Creative Foodie 👩🏻‍🍳"];

const titleAnimTime = titleList.length * 0.2;

const Hero = () => {
  return (
    <section className="py-8 flex flex-col items-center justify-center ">
      {/* Greeting */}
      <h1 className="mb-4 text-[1.4rem] md:text-[2rem]">
        <MotionText delayOffset={0}>{`Hi, I'm ${owner}! 👋`}</MotionText>
      </h1>
      {/* Video */}
      <div className="overflow-hidden rounded-full p-3 md:p-4">
        <MotionDiv>
          <video
            className="h-[200px] w-[200px] md:h-[200px] md:w-[200px]"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src={"/animoji.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </MotionDiv>
      </div>
      {/* title */}
      <div>
        {titleList.map((title, index) => (
          <h1 key={index}>
            <MotionDiv delayOffset={0.8 + 0.2 * index}>{title}</MotionDiv>
          </h1>
        ))}
      </div>
      {/* Subtitle */}
      <div className="my-12 flex w-full flex-col gap-2 text-center lg:w-[50%]">
        <MotionDiv delayOffset={0.8 + titleAnimTime}>
          <p>Welcome to my website!</p>
        </MotionDiv>
        <MotionDiv delayOffset={1 + titleAnimTime}>
          <p>
            A <b>Full Stack Developer</b> who loves to build something looks
            good ✨
          </p>
        </MotionDiv>
      </div>
      {/* Contact List */}
      <div className="my-8">
        <ContactList delayOffset={1.45} showWhenInView={false} />
      </div>
    </section>
  );
};

export default Hero;
