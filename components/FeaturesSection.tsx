import type React from "react";
import { ArrowRight, CircleDot } from "lucide-react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ChainIMG from "@/public/images/svgs/chain.svg";
import LockIMG from "@/public/images/svgs/lock.svg";
import MicroscopeIMG from "@/public/images/svgs/microscope.svg";
import WalletIMG from "@/public/images/svgs/wallet.svg";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  learnMoreLink: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  learnMoreLink,
}: FeatureCardProps) => {
  return (
    <Card className="bg-slate-50 border-none">
      <CardHeader className="pb-2">
        <div className="bg-[#74B601] rounded-full w-10 h-10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-base font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-6">
        <CardDescription className="text-sm text-gray-600 mb-4">
          {description}
        </CardDescription>
        <Link
          href={learnMoreLink}
          className="text-[#74B601] text-sm font-medium flex items-center hover:underline"
        >
          Learn more <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      title: "Blockchain-Backed Transparency",
      description:
        "Track every step of the farming process with blockchain technology, bringing full visibility and trust to agriculture.",
      icon: <Image src={ChainIMG} width={20} height={20} alt="" />,
      learnMoreLink: "/features/transparency",
    },
    {
      title: "Satellite-Powered Precision Farming",
      description:
        "We use satellite data to help farmers optimize their planting, watering, harvest, yields, and resources.",
      icon: <Image src={MicroscopeIMG} width={20} height={20} alt="" />,
      learnMoreLink: "/features/precision-farming",
    },
    {
      title: "Integrated Financial Services",
      description:
        "Secure payments, smart wallets, and microloans that help farmers build on their operations flexibly.",
      icon: <Image src={WalletIMG} width={20} height={20} alt="" />,
      learnMoreLink: "/features/financial-services",
    },
    {
      title: "Tokenized Agricultural Investment",
      description:
        "Farmers can raise funds to expand their operations through tokenized investments in their production.",
      icon: <Image src={LockIMG} width={20} height={20} alt="" />,
      learnMoreLink: "/features/investment",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-3">What Makes Us Different</h2>
        <p className="text-gray-600 max-w-2xl">
          We bring innovation, transparency, & finance together to help African
          farmers thrive.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            learnMoreLink={feature.learnMoreLink}
          />
        ))}
      </div>
    </section>
  );
}
