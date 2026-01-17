import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Masuk Marga",
    description: "Bergabung dengan keluarga besar Zyoran'7"
  },
  {
    number: 2,
    title: "Intro",
    description: "Perkenalkan diri kamu ke member lain"
  },
  {
    number: 3,
    title: "CN Nama",
    description: "Daftarkan Character Name kamu"
  },
  {
    number: 4,
    title: "Selamat!",
    description: "Kamu sudah resmi jadi member Zyoran'7"
  }
];

const JoinSection = () => {
  return (
    <section id="join-section" className="py-24 px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-glow-sm text-primary mb-4">
            CARA JOIN
          </h2>
          <p className="text-muted-foreground text-lg">
            Ikuti langkah-langkah berikut untuk bergabung
          </p>
        </div>
        

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Step card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="gradient-card gradient-border rounded-xl p-6 box-glow-sm hover:box-glow transition-all duration-300 group">
                    <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 group-hover:bg-primary/30 transition-colors">
                        <span className="font-display font-bold text-xl text-primary">{step.number}</span>
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                    {step.number === 4 && (
                      <div className="mt-4 flex items-center gap-2 text-primary">
                        <CheckCircle2 className="w-5 h-5" />
                        <span className="text-sm font-medium">Welcome to the family!</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center dot for desktop */}
                <div className="hidden md:flex w-4 h-4 rounded-full bg-primary box-glow-sm flex-shrink-0" />

                {/* Empty space for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
          {/* Join Final Action */}
<div className="mt-20 flex flex-col items-center gap-6 text-center">

  <h3 className="font-display text-2xl font-bold text-primary">
    Siap Bergabung?
  </h3>

  <p className="text-muted-foreground max-w-md">
    Setelah mengikuti semua langkah di atas, klik tombol di bawah untuk masuk ke grup resmi Marga Zyorant'7.
  </p>

  <a
    href="https://chat.whatsapp.com/DD3RHz2c8qP2287Xz2LYur"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold
               hover:scale-105 transition-all duration-300 box-glow"
  >
    Join WhatsApp Marga
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
