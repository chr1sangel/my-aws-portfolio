import { Cloud, Container, Server, MapPin, Mail, Phone } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>
          
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-lg border border-border">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">I'm an IT Coordinator and System Administrator based in Skopje, North Macedonia. With a strong hands-on experience across various IT roles, I specialize in managing IT infrastructure, optimizing system operations, and implementing efficient technological solutions.<strong className="text-foreground">Skopje, North Macedonia</strong>. 
              With a strong foundation in software engineering and hands-on experience across various IT roles, 
              I specialize in managing IT infrastructure, optimizing system operations, and implementing 
              efficient technological solutions.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">My journey in IT has taken me through diverse roles, from system engineering and network administration to drone operations and product development. This varied experience has equipped me with a unique perspective on solving complex technical challenges and driving innovation in IT environments.</p>

            {/* Tech Stack Banner */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex gap-2">
                  <Cloud className="w-5 h-5 text-primary" />
                  <Container className="w-5 h-5 text-primary" />
                  <Server className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Hosted Infrastructure
                </span>
              </div>
              <p className="text-muted-foreground">
                This portfolio is hosted on <strong className="text-foreground">AWS EC2</strong> with{" "}
                <strong className="text-foreground">Docker</strong> containers, a testament to my 
                hands-on cloud infrastructure experience and commitment to modern deployment practices.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Skopje, North Macedonia</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:angelovskik64@gmail.com" className="hover:text-primary transition-colors">
                  angelovskik64@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+38971225318" className="hover:text-primary transition-colors">
                  +389 71 225318
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;