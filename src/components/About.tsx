import { FadeInDiv } from "@/components";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <FadeInDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </FadeInDiv>
        <article className="flex flex-col gap-4">
          <FadeInDiv delayOffset={0.4}>
            <p>
              Hi, I'm Han Xiao, a passionate <b>Software Engineer</b> based in
              <b> Melbourne, Australia</b>. My role involves designing and
              implementing scalable solutions that ensure optimal performance
              and user experience. I am also a collaborative team player with a
              passion for learning.
            </p>
          </FadeInDiv>
          <FadeInDiv delayOffset={0.5}>
            <p>
              Beyond the realm of technology, I am a home foodie, finding joy
              and inspiration in the culinary arts. Experimenting with flavours,
              exploring diverse cuisines, and honing my culinary skills are
              endeavours that bring me immense satisfaction. Much like in
              software development, I approach cooking with creativity and
              precision, delighting in the process of crafting delicious dishes
              that bring people together and create memorable experiences.
            </p>
          </FadeInDiv>
          <FadeInDiv delayOffset={0.6}>
            <div className="w-full">
              <p>
                If you want to know more about me, I also like hiking ⛰️,
                swimming 🏊‍♂️ and indie music 🎵
              </p>
              <p>
                My favourite movie is <i> Chungking Express</i> 🌃
              </p>
              <p>
                My favourite animes are <i> Ghost in the Shell</i> 🤖 and
                <i> Cowboy Bebop</i> 🚀
              </p>
              <p>
                My favourite video games are <i> Alice Madness Return </i> 🕰️
                and
                <i> Hollow Knight</i> 🐞
              </p>
            </div>
          </FadeInDiv>
          <FadeInDiv delayOffset={0.7}>
            <p className="w-full">
              Feel free to reach out if you feel like having a chat about
              anything :)
            </p>
          </FadeInDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <FadeInDiv delayOffset={0.4}>
          <img
            src="/photo_1.jpg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all"
          />
        </FadeInDiv>
      </div>
    </section>
  );
}
