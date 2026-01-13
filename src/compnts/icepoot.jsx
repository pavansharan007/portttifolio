import React from "react";
import { useForm } from "react-hook-form";
import { Send, Loader2 } from "lucide-react";
import Input from "./Input";
import Textarea from "./Textarea";
import Icepooting from "../appwrite/Icepoot";

function Icepoot() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const subm = async (data) => {
    try {
      await Icepooting.createData(data);
      alert("✅ Block Added to the Inventory!");
      reset();
    } catch (err) {
      alert("❌ Failed to craft message.");
    }
  };

  // Modern SaaS styling using your existing palette
  const inputBase =
    "bg-orange-50 border-2 border-black rounded-xl text-dirtt placeholder:text-stone-400 focus:bg-orange-50 focus:ring-2 focus:ring-[#f1902f] transition-all duration-200 py-3 px-4";

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(subm)} className="space-y-5">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase mb-1 ml-1 text-dirtt opacity-70">
              Your Name
            </label>
            <Input
              placeholder="Steve / Alex"
              className={inputBase}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-600 text-xs mt-1 font-medium">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase mb-1 ml-1 text-dirtt opacity-70">
              Mail-Id
            </label>
            <Input
              type="email"
              placeholder="hello@world.com"
              className={inputBase}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1 font-medium">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-xs font-bold uppercase mb-1 ml-1 text-dirtt opacity-70">
            Phone Number
          </label>
          <Input
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className={inputBase}
            {...register("phone", {
              required: "Phone number required",
              pattern: { value: /^[0-9]+$/, message: "Digits only" },
              minLength: { value: 10, message: "Min 10 digits" },
            })}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1 font-medium">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message Content */}
        <div className="flex flex-col">
          <label className="text-xs font-bold uppercase mb-1 ml-1 text-dirtt opacity-70">
            Your Content
          </label>
          <Textarea
            placeholder="What's on your mind?"
            className={`${inputBase} min-h-[120px] resize-none`}
            {...register("msg")}
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto min-w-[200px] flex items-center justify-center gap-3 bg-[#f1902f] border-2 border-black text-black font-bold py-3 px-8 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all active:scale-95 disabled:opacity-50"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span className="text-lg" style={{ fontFamily: "Minecraft" }}>
                  Submit 
                </span>
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Icepoot;
