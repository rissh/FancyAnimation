import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./Assets/phone-animation.json";
import { useRef } from "react";

function App() {
  const phoneRef = useRef<LottieRefCurrentProps>(null);
  return (
    <div className="min-h-screen flex items-center justify-center lg:mx-48 ">
      <div className="text-center space-y-8">
        <h1 className=" text-5xl font-bold">
          Animations are{" "}
          <span className=" text-transparent from-yellow-400 to-orange-400 ">
            simple and fun!
          </span>
        </h1>
        <p className="text-xl font-medium ">
          Using lottie animation we can create complex SVG animation.
        </p>
        <div className="flex gap-12 justify-center py-4">
          <button className="bg-black px-6 font-medium py-2 rounded-md">
            Learn More
          </button>
          <button className="bg-yellow-400 text-black py-2 px-6 rounded-md ">
            Library
          </button>
        </div>
        <div className="m-12">
          <Lottie
            lottieRef={phoneRef}
            onComplete={() => {
              phoneRef.current?.goToAndPlay(10, true);
            }}
            loop={false}
            animationData={animationData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
