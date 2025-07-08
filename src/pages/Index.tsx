
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SocialProofBar from "@/components/SocialProofBar";
import CTASection from "@/components/CTASection";
import StatsSection from "@/components/StatsSection";
import WhoWeHelpSection from "@/components/WhoWeHelpSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactForm from "@/components/ContactForm";
import TrustSection from "@/components/TrustSection";
import ContentPreview from "@/components/ContentPreview";
import NewsletterSection from "@/components/NewsletterSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ProgressTracker from "@/components/ProgressTracker";

const Index = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const callAdviser = () => {
    window.open('tel:+61212345678', '_self');
  };

  return (
    <div className="min-h-screen font-montserrat">
      <Navigation />
      <HeroSection />
      <SocialProofBar />
      
      <CTASection
        title="Get Free Advice"
        description="Ready to take the next step? Our expert advisers are here to help."
        primaryButton={{
          text: "Get Free Advice",
          action: scrollToContact
        }}
        secondaryButton={{
          text: "Talk to an Adviser Today",
          action: callAdviser
        }}
      />
      
      <StatsSection />
      
      <CTASection
        title="Check Your Borrowing Power"
        description="Discover how much you could borrow with our free assessment."
        primaryButton={{
          text: "Check Your Borrowing Power",
          action: scrollToContact
        }}
        secondaryButton={{
          text: "Talk to an Adviser Today",
          action: callAdviser
        }}
      />
      
      <WhoWeHelpSection />
      
      <CTASection
        title="Talk to an Adviser Today"
        description="Get personalized advice tailored to your unique situation."
        primaryButton={{
          text: "Talk to an Adviser Today",
          action: callAdviser
        }}
        secondaryButton={{
          text: "Get Free Advice",
          action: scrollToContact
        }}
      />
      
      <TestimonialsSection />
      <TrustSection />
      
      <CTASection
        title="Get Free Advice"
        description="Join thousands of satisfied clients who've achieved their property dreams."
        primaryButton={{
          text: "Get Free Advice",
          action: scrollToContact
        }}
        secondaryButton={{
          text: "Check Your Borrowing Power",
          action: scrollToContact
        }}
      />
      
      <ContentPreview />
      <NewsletterSection />
      <ContactForm />
      <FinalCTA />
      <Footer />
      <ProgressTracker />
    </div>
  );
};

export default Index;
