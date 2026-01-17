import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Crown, Shield, Star } from "lucide-react";

const admins = [
  {
    id: 1,
    name: "PARZY",
    role: "Owner",
    icon: Crown,
    color: "from-yellow-500 to-amber-600"
  },
  {
    id: 2,
    name: "KUCING",
    role: "Wakil",
    icon: Shield,
    color: "from-primary to-crimson-dark"
  },
  {
    id: 3,
    name: "LAN",
    role: "Admin",
    icon: Star,
    color: "from-primary/80 to-crimson-dark/80"
  },
  {
    id: 4,
    name: "DITZY",
    role: "Admin",
    icon: Star,
    color: "from-primary/80 to-crimson-dark/80"
  },
  {
    id: 5,
    name: "RIZZ",
    role: "Admin",
    icon: Star,
    color: "from-primary/80 to-crimson-dark/80"
  },
  {
    id: 6,
    name: "ICAN",
    role: "Admin",
    icon: Star,
    color: "from-primary/80 to-crimson-dark/80"
  },
  {
    id: 7,
    name: "JULIO",
    role: "Admin",
    icon: Star,
    color: "from-primary/80 to-crimson-dark/80"
  },
  {
    id: 8,
    name: "JAMAL",
    role: "Admin",
    icon: Star,
    color: "from-primary/80 to-crimson-dark/80"
  }
];

const AdminCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 280;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="admin-section" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Shield className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Yang Jaga Marga</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-glow-sm text-primary mb-4">
            ADMIN TEAM
          </h2>
          <p className="text-muted-foreground text-lg">
            Tim yang menjaga Marga Zyoran'7
          </p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center transition-all duration-300 ${
              canScrollLeft 
                ? 'opacity-100 hover:bg-primary/20 hover:box-glow-sm cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center transition-all duration-300 ${
              canScrollRight 
                ? 'opacity-100 hover:bg-primary/20 hover:box-glow-sm cursor-pointer' 
                : 'opacity-30 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-14 py-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {admins.map((admin) => {
              const Icon = admin.icon;
              return (
                <div
                  key={admin.id}
                  className="flex-shrink-0 w-56 snap-center"
                >
                  <div className="gradient-card gradient-border rounded-2xl p-6 h-full hover:box-glow transition-all duration-300 group hover:-translate-y-2">
                    {/* Avatar */}
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${admin.color} flex items-center justify-center mb-4 group-hover:animate-pulse-glow`}>
                      <Icon className="w-10 h-10 text-foreground" />
                    </div>

                    {/* Info */}
                    <div className="text-center">
                      <h3 className="font-display text-lg font-bold text-foreground mb-1">
                        {admin.name}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        admin.role === 'Owner' 
                          ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                          : admin.role === 'Wakil'
                            ? 'bg-primary/20 text-primary border border-primary/30'
                            : 'bg-muted text-muted-foreground border border-muted'
                      }`}>
                        {admin.role}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Gradient overlays for scroll indication */}
          <div className="absolute left-12 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute right-12 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

        {/* Swipe hint for mobile */}
        <p className="text-center text-muted-foreground text-sm mt-6 md:hidden">
          ← Geser untuk melihat lebih banyak →
        </p>
      </div>
    </section>
  );
};

export default AdminCarousel;
