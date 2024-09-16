"use client";

import { Fragment } from "react";
import React, { useState } from "react";

import { toast } from "sonner";
import Header from "@/components/header";

import { Bebas_Neue } from "next/font/google";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const HomePage = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(
      "https://api.sheetmonkey.io/form/6HEBpMVkkNCqWcun1SJQrK",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );

    if (response.ok) {
      toast.success("Email successfully added to Waitlist", {
        action: {
          label: "Close",
          onClick: () => toast.dismiss(),
        },
      });
      setEmail("");
    } else {
      toast.error("Error adding email to Waitlist", {
        action: {
          label: "Close",
          onClick: () => toast.dismiss(),
        },
      });
    }

    setLoading(false);
  };

  return (
    <Fragment>
      <Header />
      <div className="bg relative min-h-screen w-full mx-auto px-6 xl:px-12 py-5 flex items-center">
        <div className="text-white">
          <div>
            <div
              className={`${bebasNeue.className} mt-60 antialiased text-[35px] lg:text-[70px]  max-w-[700px] leading-none tracking-tight word-spacing`}>
              RE-THINKING AGRICULTURE WITHOUT BOUNDARIES IN AFRICA
            </div>
          </div>
          <div className="max-w-[700px] mt-2 text-[14px] lg:text-[16px] tracking-tighter word-spacing">
            A unified digital ecosystem harnessing the power of FinTech and
            Blockchain to break barriers in African agriculture, empowering
            farmers, investors, and communities for a prosperous future.
          </div>

          <form
            onSubmit={handleSubmit}
            className="max-w-[450px] mt-[50px] flex justify-between bg-white w-full pl-4 p-1.5 rounded-full">
            <input
              required
              onChange={handleChange}
              name="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              className="flex-1 outline-none text-black px-2 py-1 max-w-[60%] block"
            />
            <button
              type="submit"
              disabled={loading}
              className={`py-[2px] lg:py-[6px] px-[10px] lg:px-[22px] rounded-full text-[12px] lg:text-[14px] max-w-[40%] block hover:bg-[#496912] ${
                loading ? "bg-[#496912]" : "bg-[#74B700]"
              }`}>
              {loading ? "Processing..." : "Join Waitlist"}{" "}
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
