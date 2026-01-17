import { Users, ArrowRight, Eye } from "lucide-react";

const HeroSection = () => {
  const totalMembers = 333;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-crimson-dark/10 rounded-full blur-[150px]" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--crimson) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--crimson) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
{/* Logo Marga */}
<div className="flex justify-center mb-10 animate-slide-up">
  <div className="relative">
    <div className="w-36 h-36 md:w-44 md:h-44 rounded-full
                    border-4 border-primary box-glow
                    overflow-hidden animate-float">
      <img
        src="/public/marga-logo.jpg"
        alt="Logo Marga Zyoran'7"
        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
      />
    </div>

    {/* Glow ring */}
    <div className="absolute inset-0 rounded-full border-2 border-primary/40 blur-md animate-pulse" />
  </div>
</div>

        {/* Welcome Message */}
        <div className="animate-slide-up mb-6">
          <p className="text-lg md:text-xl text-primary/80 font-medium tracking-wider uppercase mb-2">
            Selamat Datang di
          </p>
        </div>

        {/* Logo/Title */}
        <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black
               text-primary/80 mb-4 tracking-wider
               drop-shadow-[0_0_12px_rgba(255,0,0,0.25)]">
  ZYORAN'7
</h1>
          <p className="font-display text-xl md:text-2xl text-muted-foreground tracking-[0.3em] uppercase mb-2">
            Marga Edit
          </p>
          {/* Specialty Tags */}
          <div className="flex items-center justify-center gap-3 flex-wrap mt-4">
            {['L2D', 'GFX', 'MANIP', 'JJ'].map((tag, index) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full text-sm font-bold bg-primary/20 text-primary border border-primary/30 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 animate-slide-up"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={() => scrollToSection('join-section')}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-crimson-dark rounded-xl font-bold text-lg text-foreground box-glow hover:scale-105 transition-all duration-300"
          >
            Cara Join
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('admin-section')}
            className="group flex items-center gap-2 px-8 py-4 bg-card border-2 border-primary/50 rounded-xl font-bold text-lg text-foreground hover:bg-primary/10 hover:border-primary transition-all duration-300"
          >
            <Eye className="w-5 h-5" />
            Lihat Selengkapnya
          </button>
        </div>

        {/* Member Count with dotted line style */}
        <div 
          className="mt-16 inline-flex flex-col items-center animate-float"
          style={{ animationDelay: '0.5s' }}
        >
          <div className="flex items-center gap-4">
            {/* Left dotted line */}
            <div className="flex items-center gap-1">
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <div className="w-12 h-[2px] bg-gradient-to-r from-primary/60 to-primary/20" />
            </div>

            {/* Member count box */}
            <div className="flex items-center gap-3 px-6 py-3 gradient-border rounded-xl box-glow-sm">
              <Users className="w-6 h-6 text-primary" />
              <div className="text-center">
                <p className="text-3xl font-display font-bold text-foreground text-glow-sm">{totalMembers}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Members</p>
              </div>
            </div>

            {/* Right dotted line */}
            <div className="flex items-center gap-1">
              <div className="w-12 h-[2px] bg-gradient-to-l from-primary/60 to-primary/20" />
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
              <span className="text-primary/60">•</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
