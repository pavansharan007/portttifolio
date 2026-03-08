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

  
  // Modern SaaS styling using your existing palette
  const inputBase = "py-3 px-4 cyber-input font-mono text-sm tracking-widest placeholder:text-cyber-textSecondary/50 bg-cyber-bgTertiary";

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit()} className="space-y-5">
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="cyber-label">
              &gt; Your Name
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
            <label className="cyber-label">
              &gt; Mail-Id
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
          <label className="cyber-label">
            &gt; Phone Number
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
          <label className="cyber-label">
            &gt; Your Content
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
            className="cyber-btn-primary w-full md:w-auto min-w-[200px] flex items-center justify-center gap-3 py-3 px-8 text-lg tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                <span className="tracking-widest">
                  TRANSMIT 
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
