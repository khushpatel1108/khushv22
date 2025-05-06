
import React, { useState } from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useInView } from '@/utils/Animations';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact: React.FC = () => {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success('Message sent successfully!', {
        description: "I'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24">
      <div className="container-pad">
        <SectionHeading title="Get In Touch" subtitle="Contact" centered />

        <div className="max-w-2xl mx-auto">
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className={`glass-panel p-8 transition-all duration-700 ease-out-expo ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full min-h-[150px]"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="text-lg font-medium mb-4">Or reach out directly:</h3>

              <div className="space-y-3">
                <a
                  href="mailto:KhushPatel2883@gmail.com"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="mr-3 h-5 w-5" />
                  <span>KhushPatel2883@gmail.com</span>
                </a>

                <div className="flex items-center text-muted-foreground">
                  <MessageSquare className="mr-3 h-5 w-5" />
                  <span>Available for freelance opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
