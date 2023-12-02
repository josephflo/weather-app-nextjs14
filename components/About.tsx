import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white shadow-md rounded-md p-8 ">
      <h1 className="text-4xl font-bold text-center">ABOUT ME</h1>
      <div className="flex flex-col md:flex-row p-20">
        <div className="md:w-2/4 md:mb-0">
          <Image
            src="/perfil.png"
            alt="Descripción de la imagen"
            className="w-full h-auto rounded-2xl bg-purple-400"
            width={200}
            height={400}
          />
        </div>

        {/* Texto descriptivo a la derecha */}
        <div className="md:w-full md:ml-8 md:px-8">
          <p className="text-gray-700 mt-4 md:mt-0 text-lg">
            My name is Franco and I am a Fullstack Web Developer. Although I
            enjoy working on both sides, Frontend and Backend, I feel a bit more
            comfortable on the Frontend side. I am fascinated by the world of
            programming, I am a proactive person who is always looking to learn
            and grow, both professionally and personally. I feel identified with
            a phrase that I read and share: "Nothing in the world can take the
            place of perseverance." I characterize myself for always being
            responsible, well predisposed and committed to my tasks, and easy to
            adapt to new work teams.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
