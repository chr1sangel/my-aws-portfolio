import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Mail className="w-8 h-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
              Get In Touch
            </h2>
          </div>

          <div className="text-center mb-10">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              I'm always interested in hearing about new opportunities, 
              challenging projects, or just connecting with fellow IT professionals. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <a
              href="mailto:angelovskik64@gmail.com"
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium text-foreground text-sm">
                  angelovskik64@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+38971225318"
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-medium text-foreground">+389 71 225318</p>
              </div>
            </a>

            <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-medium text-foreground">
                  Skopje, North Macedonia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
