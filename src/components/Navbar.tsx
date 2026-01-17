import { useState, useRef, useEffect } from "react";
import { Menu, X, Home, Users, Sparkles, Volume2, VolumeX } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio elements
    hoverSoundRef.current = new Audio("data:audio/wav;base64,UklGRl9vT19teleAtdWktbmF2aWdhdGlvbi1ob3Zlci53YXYAAAAABAABAAAAAAAAAAAAAAAAAAEAVQBuAHQAaQB0AGwAZQBkAAAA");
    clickSoundRef.current = new Audio("data:audio/wav;base64,UklGRl9vT19teleAtdWktbmF2aWdhdGlvbi1jbGljay53YXYAAAAABAABAAAAAAAAAAAAAAAAAAEAVQBuAHQAaQB0AGwAZQBkAAAA");
  }, []);

  const playHoverSound = () => {
    if (soundEnabled && hoverSoundRef.current) {
      hoverSoundRef.current.currentTime = 0;
      hoverSoundRef.current.volume = 0.1;
      hoverSoundRef.current.play().catch(() => {});
    }
  };

  const playClickSound = () => {
    if (soundEnabled && clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.volume = 0.2;
      clickSoundRef.current.play().catch(() => {});
    }
  };

  const scrollToSection = (id: string) => {
    playClickSound();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { id: "beranda", label: "Beranda", icon: Home },
    { id: "admin-section", label: "Contact All Admin", icon: Users },
    { id: "generate-nama", label: "Generate Nama", icon: Sparkles },
  ];
  
  const adminList = [
  {
    name: "Admin Zyoran",
    phone: "6281234567890",
  },
  {
    name: "Admin Kedua",
    phone: "6289876543210",
  },
];

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="font-display text-xl font-bold text-primary text-glow-sm">
              ZYORAN'7
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
  playClickSound();
  if (item.id === "admin-section") {
    setShowAdminModal(true);
  } else {
    scrollToSection(item.id);
  }
}}
                    onMouseEnter={playHoverSound}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                  >
                    <Icon className="w-4 h-4 group-hover:animate-pulse" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              {/* Sound Toggle */}
              <button
                onClick={() => {
                  playClickSound();
                  setSoundEnabled(!soundEnabled);
                }}
                className="p-2 rounded-full bg-card border border-primary/30 hover:bg-primary/20 transition-all duration-300"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-primary" />
                ) : (
                  <VolumeX className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => {
                  playClickSound();
                  setSoundEnabled(!soundEnabled);
                }}
                className="p-2 rounded-full bg-card border border-primary/30"
              >
                {soundEnabled ? (
                  <Volume2 className="w-4 h-4 text-primary" />
                ) : (
                  <VolumeX className="w-4 h-4 text-muted-foreground" />
                )}
              </button>
              
              <button
                onClick={() => {
                  playClickSound();
                  setIsOpen(!isOpen);
                }}
                className="p-2 rounded-lg bg-card border border-primary/30 hover:bg-primary/20 transition-all duration-300"
              >
                {isOpen ? (
                  <X className="w-6 h-6 text-primary" />
                ) : (
                  <Menu className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/90 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`absolute top-16 right-0 bottom-0 w-72 bg-card border-l border-primary/30 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 space-y-4">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
  playClickSound();
  if (item.id === "admin-section") {
    setShowAdminModal(true);
  } else {
    scrollToSection(item.id);
  }
}}
                  onMouseEnter={playHoverSound}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sidebar Footer */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="p-4 rounded-xl gradient-border bg-card">
              <p className="text-xs text-muted-foreground text-center">
                Marga Editing
              </p>
              <p className="text-sm font-semibold text-primary text-center mt-1">
                L2D • GFX • MANIP • JJ
              </p>
            </div>
          </div>
        </div>
      </div>
      {showAdminModal && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center">
    {/* Backdrop */}
    <div
      className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      onClick={() => setShowAdminModal(false)}
    />

    {/* Modal */}
    <div className="relative w-[90%] max-w-md bg-card border border-primary/30 rounded-2xl p-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-primary">
          Contact All Admin
        </h2>
        <button
          onClick={() => setShowAdminModal(false)}
          className="p-2 rounded-full hover:bg-primary/20"
        >
          <X className="w-5 h-5 text-primary" />
        </button>
      </div>

      {/* Admin List */}
      <div className="space-y-4">
        {adminList.map((admin, index) => (
          <a
            key={index}
            href={`https://wa.me/${admin.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-xl bg-background/60 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
          >
            <p className="font-semibold text-foreground">
              {admin.name}
            </p>
            <p className="text-sm text-muted-foreground">
              +{admin.phone}
            </p>
          </a>
        ))}
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;
