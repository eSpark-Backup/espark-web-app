import StrategyLogo from "../assets/images/how-it-works/StrategyLogo.svg";
import InterviewLogo from "../assets/images/how-it-works/InterviewLogo.svg";
import OnboardingLogo from "../assets/images/how-it-works/OnboardingLogo.svg";
import GrowthLogo from "../assets/images/how-it-works/GrowthLogo.svg";
import Number1 from "../assets/images/how-it-works/Number1.svg";
import Number2 from "../assets/images/how-it-works/Number2.svg";
import Number3 from "../assets/images/how-it-works/Number3.svg";
import Number4 from "../assets/images/how-it-works/Number4.svg";

export const howitworkspoints = [
    {
        _id: 1,
        name: "Strategy Session",
        pointImage: Number1,
        content:
            "Our screening process is automatically started from gathering your applications and providing you a job description that is tailored according to your needs.",
        image: StrategyLogo,
        image_alt: "StrategyLogo",
        type: 'odd'
    },
    {
        _id: 2,
        name: "Interview",
        pointImage: Number2,
        content:
            "After getting short listed from our management you will be called for an interview.",
        image: InterviewLogo,
        image_alt: "InterviewLogo",
        type: 'even'

    },
    {
        _id: 3,
        name: "On-Boarding",
        pointImage: Number3,
        content:
            "Our world-class onboarding procedure includes meeting your very own customer support specialist.",
        image: OnboardingLogo,
        image_alt: "OnboardingLogo",
        type: 'odd'
    },
    {
        _id: 4,
        name: "Step back & Grow",
        pointImage: Number4,
        content:
            "Your future begins to meet the expectations you've set for yourself.",
        image: GrowthLogo,
        image_alt: "GrowthLogo",
        type: 'even'
    },
];
