import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile-image.jpg";
import resume from "@/assets/BALU resume.pdf";

const Hero = () => {
  const handleDownloadCV = () => {
    window.open(resume, '_blank');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 fade-in">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                Hello, I'm Sai Balaji,{" "}
                <span className="gradient-text block">Frontend Developer</span>
              </h1>
              <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              I'm a passionate Frontend Developer specializing in web development, app development, 
              SEO analysis, and marketing. Successfully contributed to the launch of multiple products 
              that enhanced clients' digital experiences at NetMaxin. I have strong leadership, 
              communication, and problem-solving skills that help me deliver exceptional results.
            </p>

            <Button
              onClick={handleDownloadCV}
              className="gradient-button text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-lg w-full sm:w-auto"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Right Column - Profile Image */}
          <div className="flex justify-center lg:justify-end fade-in">
            <div className="relative">
              {/* Gradient Border Container */}
              <div className="gradient-border p-2 animate-float">
                <div className="w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-card mx-auto">
                  <img
                    src={profileImage}
                    alt="Sai Balaji - Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;