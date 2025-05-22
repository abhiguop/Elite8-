import React, { useState } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { toast } from "sonner";
import Button from "@/components/ui-custom/Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Contact Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get In Touch</h1>
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Have a project in mind or just want to say hello? I'd love to hear from you.
              </p>

              <div className="space-y-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <ContactItem
                  icon={<Mail size={24} />}
                  title="Email"
                  content="example@email.com"
                  href="mailto:example@email.com"
                />

                <h3 className="text-xl font-semibold pt-4">Connect on Social</h3>
                <div className="flex space-x-4">
                  <SocialLink icon={<Github size={24} />} href="https://github.com" />
                  <SocialLink icon={<Linkedin size={24} />} href="https://linkedin.com" />
                  <SocialLink icon={<Twitter size={24} />} href="https://twitter.com" />
                </div>
              </div>
            </div>

            <div className="bg-card border rounded-lg p-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Where to Find Me</h2>
            <p className="text-muted-foreground">Based in San Francisco, CA but working with clients worldwide.</p>
          </div>
          <div className="h-96 bg-card rounded-lg shadow-lg overflow-hidden">
            <div className="w-full h-full">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019426831799!2d-122.42177852426825!3d37.77492917975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5bc63b55%3A0xa8b6053e7a7c8c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactItem = ({ icon, title, content, href }: { icon: React.ReactNode, title: string, content: string, href: string }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="bg-secondary p-3 rounded-full">
        {icon}
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <a href={href} className="text-primary hover:underline">
          {content}
        </a>
      </div>
    </div>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      {icon}
    </a>
  );
};

export default Contact;
