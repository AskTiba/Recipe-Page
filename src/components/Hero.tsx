import hero from "../assets/images/image-omelette.jpeg";

const Hero = () => {
  return (
    <div className="rounded-[20px]">
      <img className=" mx-auto p-6 rounded-[35px]" src={hero} alt="" />
    </div>
  );
};

export default Hero;
