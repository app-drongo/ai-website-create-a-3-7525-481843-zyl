'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap, FileText, Clock, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  // ACTION_PLACEHOLDER_START
  const handleStartTrial = () => {
    router.push('/pricing');
  };

  const handleContactSales = () => {
    router.push('/features');
  };

  const handleScheduleDemo = () => {
    router.push('/features');
  };
  // ACTION_PLACEHOLDER_END

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for freelancers and small businesses',
      price: 'Free',
      period: '',
      badge: null,
      features: [
        'Up to 5 invoices per month',
        'Basic invoice templates',
        'Email support',
        'Payment tracking',
        'Client management',
      ],
      cta: 'Start Free Forever',
      popular: false,
      action: handleStartTrial,
    },
    {
      name: 'Professional',
      description: 'Best for growing businesses with regular invoicing',
      price: '$19',
      period: '/month',
      originalPrice: '$38',
      badge: 'Most Popular',
      features: [
        'Unlimited invoices',
        '150+ professional templates',
        'Multi-currency support (150+ currencies)',
        'Automated recurring billing',
        'Payment processing integration',
        'Advanced reporting & analytics',
        'Custom branding',
        'Priority support',
      ],
      cta: 'Start 14-Day Free Trial',
      popular: true,
      action: handleStartTrial,
    },
    {
      name: 'Enterprise',
      description: 'For large organizations with advanced needs',
      price: 'Custom',
      period: '',
      badge: 'Contact Sales',
      features: [
        'Everything in Professional',
        'White-label solution',
        'API access & integrations',
        'Advanced user permissions',
        'Dedicated account manager',
        'Custom invoice workflows',
        'Bank-level security (SOC 2)',
        '24/7 phone support',
      ],
      cta: 'Contact Sales Team',
      popular: false,
      action: handleContactSales,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <FileText className="size-3 mr-2" />
            InvoiceFlow Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Invoice Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Choose the perfect plan for your invoicing needs. Join 5,000+ businesses already using
            InvoiceFlow. No hidden fees, cancel anytime.
          </p>

          {/* Launch Special Banner */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="size-4" />
            Launch Special: 50% off your first year!
          </div>

          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 50%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                plan.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {plan.badge && !plan.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {plan.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription className="text-base mb-6">{plan.description}</CardDescription>

                <div className="flex items-end justify-center gap-1">
                  {plan.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through mr-2">
                      {plan.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground mb-1">{plan.period}</span>}
                </div>
                {plan.originalPrice && (
                  <p className="text-sm text-primary font-medium mt-2">
                    50% off first year - Limited time!
                  </p>
                )}
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  onClick={plan.action}
                  className={cn(
                    'w-full text-base py-6',
                    plan.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.popular && <Zap className="size-4 mr-2" />}
                  {plan.cta}
                </Button>

                {plan.name === 'Professional' && (
                  <p className="text-center text-sm text-muted-foreground">
                    14-day free trial • No credit card required
                  </p>
                )}

                {plan.name === 'Starter' && (
                  <p className="text-center text-sm text-muted-foreground">
                    No credit card required • Upgrade anytime
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="size-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">2-Minute Setup</h3>
            <p className="text-sm text-muted-foreground">
              Get started instantly with our quick setup process
            </p>
          </div>
          <div className="text-center">
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="size-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Bank-Level Security</h3>
            <p className="text-sm text-muted-foreground">
              Your data is protected with enterprise-grade security
            </p>
          </div>
          <div className="text-center">
            <div className="size-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="size-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">4.8/5 Rating</h3>
            <p className="text-sm text-muted-foreground">Trusted by 5,000+ businesses worldwide</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Need a custom invoicing solution?</h3>
          <p className="text-muted-foreground mb-6">
            We offer tailored invoicing solutions for enterprises with specific requirements. Let's
            discuss how InvoiceFlow can streamline your billing process.
          </p>
          <Button onClick={handleScheduleDemo} variant="outline" size="lg">
            <FileText className="size-4 mr-2" />
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
