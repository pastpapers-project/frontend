import SentimentNeutralIcon from "@mui/icons-material/SentimentNeutral";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

export const Value = () => {
  return (
    <div className="mt-32 h-screen flex flex-col justify-center items-center bg-[url('./public/img2.png')] bg-cover">
      <div className="text-xs text-white rounded-xl h-8 w-16 border border-gray-600 flex items-center justify-center">
        Value
      </div>
      <div className="text-white text-5xl mt-10 mb-4">Pricing Models</div>
      <div className="flex mt-2 gap-x-10 justify-center">
        <div className="flex flex-col h-72 w-72 bg-gray-900 rounded-xl opacity-70 p-3">
          <SentimentNeutralIcon className="h-16 w-16 text-gray-500 border rounded-[20px] border-gray-500" />
          <p className="text-4xl">Basic</p>
          <div className="pl-2 rounded-xl bg-gray-950 h-32 w-full flex flex-col justify-center">
            <p>🗹 Limited access to core features</p>
            <p>🗹 Basic analytics and reporting</p>
            <p>🗹 No additional add-ons</p>
            <p>🗹 Live Chat Support</p>
          </div>
          <button className="rounded-full bg-black opacity-100 h-10 mt-2">Continue</button>
        </div>
        <div className="flex flex-col h-auto w-72 bg-gray-900 rounded-xl opacity-70 p-3">
          <SentimentVerySatisfiedIcon className="h-16 w-16 text-gray-500 border rounded-[20px] border-gray-500" />
          <p className="text-4xl">Prep Ai Pro</p>
          <div className="pl-2 rounded-xl bg-gray-950 h-32 w-full flex flex-col justify-center">
            <p>🗹 Limited access to core features</p>
            <p>🗹 Basic analytics and reporting</p>
            <p>🗹 No additional add-ons</p>
            <p>🗹 Live Chat Support</p>
            <p>🗹 Customizable feature bundles</p>
          </div>
          <div className="flex items-end"><p className="text-3xl font-bold">$49</p>/month</div>
          <button className="rounded-full bg-gradient-to-r from-cyan-500 via-indigo-700 to-purple-700 opacity-100 h-10 mt-2">Get Started Now</button>
        </div>
      </div>
    </div>
  );
};
