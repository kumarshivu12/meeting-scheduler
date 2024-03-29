import Image from "next/image";
import profile1 from "../../../public/profile1.png";
import profile2 from "../../../public/profile2.png";
import profile3 from "../../../public/profile3.png";
import profile4 from "../../../public/profile4.png";
import facebook from "../../../public/facebook.png";
import google from "../../../public/google.png";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="hidden lg:block">
        <Image
          src={profile1}
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-36"
        />
        <Image
          src={profile3}
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute top-48 left-16"
        />
        <Image
          src={profile2}
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute bottom-20 left-36"
        />
        <Image
          src={profile4}
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-16 bottom-32"
        />
      </div>
      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700">
          Easy scheduling ahead
        </h2>
        <h2 className="text-xl mt-5 text-slate-500">
          Scheduly is your scheduling automation platform for eliminating the
          back-and-forth emails to find the perfect time — and so much more.
        </h2>
        <div className="flex flex-col gap-4 mt-5">
          <h3 className="text-sm">Sign Up free with Google and Facebook</h3>
          <div className="flex justify-center gap-8">
            <Button className="p-7 flex gap-4">
              <Image src={google} alt="google" width={40} height={40} />
              Sign up with Google
            </Button>
            <Button className="p-7 flex gap-4">
              <Image src={facebook} alt="facebook" width={40} height={40} />
              Sign up with Facebook
            </Button>
          </div>
          <hr />
          <h2>
            <span className="text-primary">Sign up Free with Email. </span> No
            Credit card required
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
