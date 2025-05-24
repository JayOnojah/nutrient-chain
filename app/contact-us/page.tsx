import Banner from "@/components/contact-us/banner";
import Footer from "@/components/footer";
import NewsletterSubscription from "@/components/home/news-letter";
import React from "react";

const Page = () => {
  return (
    <div>
      <Banner />
      <NewsletterSubscription />
      <Footer />
    </div>
  );
};

export default Page;
