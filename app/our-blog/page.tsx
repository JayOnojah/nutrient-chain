import Footer from "@/components/footer";
import NewsletterSubscription from "@/components/home/news-letter";
import AllArticle from "@/components/our-blog/all-articles";
import Banner from "@/components/our-blog/banner";
import React from "react";

const Page = () => {
  return (
    <div>
      <Banner />
      <AllArticle />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Page;
