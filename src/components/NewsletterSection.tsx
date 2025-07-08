
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing! You'll receive weekly market insights.");
    setEmail('');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-flint-maroon to-flint-maroon/95">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <h2 className="font-montserrat text-3xl font-bold text-white mb-4">
                Stay Ahead of the Market
              </h2>
              <p className="font-montserrat text-white/90 text-lg mb-6">
                Get weekly insights, rate updates, and expert tips delivered straight to your inbox.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70 font-montserrat"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-flint-coral hover:bg-flint-coral/90 text-white px-8 py-2 font-montserrat font-semibold"
                >
                  Subscribe Free
                </Button>
              </form>
              <p className="text-white/70 text-sm mt-4">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
