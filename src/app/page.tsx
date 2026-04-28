"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import BlogCardTwo from '@/components/sections/blog/BlogCardTwo';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardMedia from '@/components/sections/feature/FeatureCardMedia';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="compact"
        sizing="largeSmall"
        background="noiseDiagonalGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="flat"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Vertex Accounting"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="VERTEX ACCOUNTING"
      description="Your trusted partner in navigating financial complexity and ensuring business success through expert accounting services."
      buttons={[
        {
          text: "Get Started",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-very-concentrated_1098-2517.jpg",
          imageAlt: "Professional Office",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-women-leaders-corporate-meeting-driving-business-growth_482257-119653.jpg",
          imageAlt: "Team Meeting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/business-person-hand-holding-financial-statistics-displayed-t_1150-773.jpg",
          imageAlt: "Financial Charts",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-man-working-his-office_1301-6548.jpg",
          imageAlt: "Clean Workspace",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-charming-woman-having-notepad-pen-hands-planning-expertising-analyzing-isolated_231208-10439.jpg",
          imageAlt: "Expert Advice",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/asian-manager-holding-tablet-computer-checking-management-statistics-working-company-strategy-startup-office-businesswoman-analyzing-papers-with-graph-planning-partnership-project_482257-40398.jpg",
          imageAlt: "Document Review",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="Decades of Financial Integrity"
      description="We specialize in delivering comprehensive tax planning, audit support, and strategic advisory services to help your business grow and thrive."
      metrics={[
        {
          value: "15+",
          title: "Years Experience",
        },
        {
          value: "500+",
          title: "Happy Clients",
        },
        {
          value: "99%",
          title: "Audit Success",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/empty-luxurious-corporate-high-end-office-designed-ceo-leader_482257-101437.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardMedia
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Tax Consulting",
          description: "Strategic planning to optimize your tax liabilities annually.",
          tag: "Essential",
          imageSrc: "http://img.b2bpic.net/free-photo/business-objects-workplace_1098-2522.jpg",
          imageAlt: "Business objects at workplace",
        },
        {
          id: "2",
          title: "Audit Services",
          description: "Rigorous internal and external audits to ensure complete compliance.",
          tag: "Trust",
          imageSrc: "http://img.b2bpic.net/free-photo/employee-working-very-concentrated_1098-2517.jpg",
          imageAlt: "Business objects at workplace",
        },
        {
          id: "3",
          title: "Bookkeeping",
          description: "Accurate, real-time tracking of all your financial transactions.",
          tag: "Efficient",
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-women-leaders-corporate-meeting-driving-business-growth_482257-119653.jpg",
          imageAlt: "Business objects at workplace",
        },
      ]}
      title="Comprehensive Solutions"
      description="Our suite of professional services is designed to manage the complexities of modern business finances."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "$50M+",
          description: "Tax Savings Generated",
        },
        {
          id: "m2",
          value: "120+",
          description: "Audits Managed",
        },
        {
          id: "m3",
          value: "45+",
          description: "Professional Experts",
        },
      ]}
      title="Our Impact"
      description="Tangible results for our clients across various industries."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="Vertex Accounting transformed our financial operations. Professional, thorough, and highly responsive."
      rating={5}
      author="Sarah Miller, CEO"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/smiling-senior-businessman-pointing-with-finger_1262-3108.jpg",
          alt: "Client 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-couple-celebrating-giving-highfive-each-other-while-being-meeting-with-real-estate-agent_637285-6877.jpg",
          alt: "Client 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-business-woman-white-shirt_23-2148095748.jpg",
          alt: "Client 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-mature-business-man-standing-office-cafe-leaning-counter-holding-jacket-shoulder-showing-thumb-up-like_74855-10007.jpg",
          alt: "Client 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-businessman-analyzing-reports-while-working-late-office_637285-2640.jpg",
          alt: "Client 5",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "f1",
          title: "What is the initial consultation process?",
          content: "We offer a complimentary session to analyze your current situation.",
        },
        {
          id: "f2",
          title: "Do you provide remote services?",
          content: "Yes, our digital systems allow us to work with clients globally.",
        },
        {
          id: "f3",
          title: "How is billing handled?",
          content: "We offer flat-rate packages and hourly options based on your needs.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/customer-service-workers-dark-office_74855-2733.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Answers to help you navigate our services."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="blog" data-section="blog">
      <BlogCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Financial Insights"
      description="Stay informed with the latest updates from our expert team."
      blogs={[
        {
          id: "b1",
          category: "Tax",
          title: "New Tax Laws 2025",
          excerpt: "What you need to know about the new filings.",
          imageSrc: "http://img.b2bpic.net/free-photo/where-invest-entrepreneur-investment-financial-risk-assessment-concept_53876-124935.jpg",
          authorName: "Jane Doe",
          authorAvatar: "http://img.b2bpic.net/free-photo/aged-middle-expression-calling-business_1262-2838.jpg",
          date: "Jan 15, 2025",
        },
        {
          id: "b2",
          category: "Advice",
          title: "Small Biz Tips",
          excerpt: "Scaling your business operations effectively.",
          imageSrc: "http://img.b2bpic.net/free-photo/xsmas-mood-with-shocked-beautiful-lady-suit-wearing-medical-mask-holding-calculator-office-yellow_179666-20520.jpg",
          authorName: "John Smith",
          authorAvatar: "http://img.b2bpic.net/free-photo/businesswomen-discussing-having-fun_53876-13577.jpg",
          date: "Feb 02, 2025",
        },
        {
          id: "b3",
          category: "Audit",
          title: "Audit Readiness",
          excerpt: "Preparing your records for yearly assessments.",
          imageSrc: "http://img.b2bpic.net/free-photo/executive-manager-modern-office-engaged-infographics-analysis_482257-122660.jpg",
          authorName: "Alex Lee",
          authorAvatar: "http://img.b2bpic.net/free-photo/portrait-smiling-waitress_107420-12307.jpg",
          date: "Feb 10, 2025",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Contact Us"
      title="Ready to get started?"
      description="Let's discuss how Vertex Accounting can support your business goals today."
      buttons={[
        {
          text: "Book Consultation",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Vertex Accounting"
      copyrightText="© 2025 Vertex Accounting Services. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
