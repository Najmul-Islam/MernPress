import Image from "next/image";

const Hero = () => {
  return (
    <Image
      src="/hero-bg.jpg"
      width="1280"
      height="720"
      className="w-full h-[calc(100vh-63)]"
      alt="banner img"
    />
  );
};
export default Hero;
