import { Outfit } from "next/font/google";
import React from "react";
import BlogCard from "./blog-card";

const outFit = Outfit({
  weight: "700",
  subsets: ["latin"],
});
const AllArticle = () => {
  return (
    <div className="my-20 app-width">
      <div className={`${outFit.className} text-[34px]`}>All Articles</div>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[...Array(12)].map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default AllArticle;
