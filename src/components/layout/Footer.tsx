'use client';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  FileText,
} from 'lucide-react';

export default function Footer() {
  const router = useRouter();

  const footerSections = [
    {
      title: 'Invoice Management',
      links: [
        { name: 'Create Invoices', href: '/features' },
        { name: 'Payment Tracking', href: '/features' },
        { name: 'Invoice Templates', href: '/features' },
        { name: 'Recurring Billing', href: '/features' },
        { name: 'Multi-Currency', href: '/features' },
        { name: 'Tax Calculations', href: '/features' },
      ],
    },
    {
      title: 'Business Tools',
      links: [
        { name: 'Client Management', href: '/features' },
        { name: 'Expense Tracking', href: '/features' },
        { name: 'Financial Reports', href: '/features' },
        { name: 'Time Tracking', href: '/features' },
        { name: 'Project Billing', href: '/features' },
        { name: 'Payment Gateway', href: '/features' },
      ],
    },
    {
      title: 'Support & Resources',
      links: [
        { name: 'Invoice Guide', href: '/features' },
        { name: 'Billing Best Practices', href: '/features' },
        { name: 'Tax Compliance', href: '/features' },
        { name: 'API Documentation', href: '/features' },
        { name: 'Video Tutorials', href: '/features' },
        { name: 'Customer Success', href: '/features' },
      ],
    },
    {
      title: 'Account & Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Data Security', href: '/security' },
        { name: 'GDPR Compliance', href: '/gdpr' },
        { name: 'Billing Terms', href: '/billing-terms' },
        { name: 'Refund Policy', href: '/refunds' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/invoiceflow' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/invoiceflow' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/invoiceflow' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/invoiceflow' },
    { name: 'GitHub', icon: Github, href: 'https://github.com/invoiceflow' },
  ];

  // ACTION_PLACEHOLDER_START
  const handleNewsletterSignup = () => {
    router.push('/features');
  };
  // ACTION_PLACEHOLDER_END

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <FileText className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">InvoiceFlow</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Streamline your billing process with professional invoicing software. Trusted by
                over 50,000 businesses worldwide for faster payments and better cash flow
                management.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">support@invoiceflow.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (888) 456-7890</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">456 Finance Street, Business District</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Invoice Tips & Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3" onClick={handleNewsletterSignup}>
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get billing insights and feature updates. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 InvoiceFlow. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Built with <Heart className="size-3 text-red-500 fill-current" /> for business
                success
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect with us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookie-settings"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Settings
            </Link>
            <Link
              href="/business-support"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Business Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
