import Hero from "./components/Hero";
import Introduction from "./components/Introduction";

const App = () => {
  return (
    <>
      <div className="flex flex-col bg-white justify-center items-center rounded-2xl my-[5rem] w-[50%] mx-auto">
        <Hero />
        <Introduction />
      </div>
    </>
  );
};

export default App;
