import { ContactList, FadeInDiv } from "@/components";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="my-4 mb-28 flex flex-col items-center gap-5 text-center md:mt-8"
    >
      <FadeInDiv>
        <h2>Contact</h2>
      </FadeInDiv>
      <FadeInDiv>
        <p>
          If you are interested in working together, please don't hesitate to
          get in touch with me.
        </p>
      </FadeInDiv>
      <ContactList />
    </section>
  );
};

export default ContactSection;
