import profilePhoto from "@/assets/profile-photo.jpeg";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail } from "lucide-react";
const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 relative">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Photo */}
          <div className="relative">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
              <img src={profilePhoto} alt="Kristijan Angelovski" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground text-xs font-semibold text-center leading-tight">
                IT Admin 
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p className="text-primary font-medium mb-2 tracking-wide uppercase text-sm">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight">
              Kristijan Angelovski
            </h1>
            <h2 className="text-xl lg:text-2xl text-muted-foreground mb-6">System Administrator & System Engineer</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Passionate IT professional with expertise in system administration, 
              network infrastructure, and cloud technologies. Dedicated to optimizing 
              IT operations and driving technological excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" onClick={() => scrollToSection("experience")} className="gap-2">
                View Experience
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")} className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>;
};
export default Hero;