"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface FormData {
  fullName: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    countryCode: "+234",
    phoneNumber: "",
    message: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <div className="bg-[#F9FAFB] rounded-lg shadow-sm max-w-[562px] w-full p-8 lg:p-12">
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label
              htmlFor="fullName"
              className="text-sm font-medium text-gray-700"
            >
              Full Name
            </Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter Full Name"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 "
            />
          </div>

          {/* Email Address */}
          <div className="space-y-2">
            <Label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Email Address"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number
            </Label>
            <div className="flex gap-2">
              <Select
                value={formData.countryCode}
                onValueChange={(value) =>
                  handleInputChange("countryCode", value)
                }
              >
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+234">+234</SelectItem>
                  <SelectItem value="+1">+1</SelectItem>
                  <SelectItem value="+44">+44</SelectItem>
                  <SelectItem value="+91">+91</SelectItem>
                  <SelectItem value="+86">+86</SelectItem>
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter Phone Number"
                value={formData.phoneNumber}
                onChange={(e) =>
                  handleInputChange("phoneNumber", e.target.value)
                }
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-gray-700"
            >
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type here..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#74B601] hover:bg-green-600 text-white px-8 py-2 rounded-full font-medium transition-colors duration-200"
            >
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
