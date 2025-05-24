"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

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
    <section className="w-full bg-[#1a4a0f] py-8 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="space-y-2">
          <h2 className="text-white text-2xl font-medium">Stay Informed</h2>
          <p className="text-white/90 text-sm md:text-base">
            Get the latest updates, insights, and opportunities from
            NutrientChain.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full md:w-auto flex flex-col sm:flex-row gap-2"
        >
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white h-10 min-w-[240px]"
          />
          <Button
            disabled={loading}
            type="submit"
            className="bg-[#8bc34a] hover:bg-[#7cb342] text-white font-medium h-10"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}
