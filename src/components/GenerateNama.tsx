import { useState, useRef } from "react";
import { Sparkles, RefreshCw, Copy, Check } from "lucide-react";

const MARGA = "Zyoran'7";

const toBold = (text: string) => {
  const boldA = "𝐚".charCodeAt(0);
  const boldAUpper = "𝐀".charCodeAt(0);
  const normalA = "a".charCodeAt(0);
  const normalAUpper = "A".charCodeAt(0);

  return text
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0);

      // a-z
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(boldA + (code - normalA));
      }

      // A-Z
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(boldAUpper + (code - normalAUpper));
      }

      // 0-9
      if (code >= 48 && code <= 57) {
        return String.fromCharCode("𝟎".charCodeAt(0) + (code - 48));
      }

      return ch;
    })
    .join("");
};

const patterns = [
  (name: string) => `${toBold(name)} ${toBold(MARGA)}`,
  (name: string) => `${toBold(name)} | ${toBold(MARGA)}`,
  (name: string) => `${toBold(MARGA)} | ${toBold(name)}`,
  (name: string) => `${toBold(name)} ${toBold("Ft")} ${toBold(MARGA)}`,
];

const GenerateNama = () => {
  const [inputName, setInputName] = useState("");
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const resultRef = useRef<HTMLDivElement>(null);

  const generateNames = () => {
    if (!inputName.trim()) return;

    const name = inputName.trim();
    const results = patterns.map((p) => p(name));

    setGeneratedNames(results);

    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const copyToClipboard = (name: string, index: number) => {
    navigator.clipboard.writeText(name);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="generate-nama" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[180px] -translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary">Generator</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-glow-sm text-primary mb-4">
            GENERATE NAMA
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Buat nama keren untuk karakter Zyoran'7 kamu
          </p>
        </div>

        {/* Generator Card */}
        <div className="gradient-card gradient-border rounded-3xl p-8 md:p-12">
          {/* Input */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-muted-foreground mb-3 uppercase tracking-wider">
              Masukkan Nama Kamu
            </label>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                ref={inputRef}
                type="text"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && generateNames()}
                placeholder="Contoh: Ditzy"
                className="flex-1 px-6 py-4 bg-background border-2 border-primary/30 rounded-xl text-foreground font-semibold text-lg focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                maxLength={15}
              />
              <button
                onClick={generateNames}
                disabled={!inputName.trim()}
                className="w-full sm:w-auto px-6 sm:px-8 py-4 bg-gradient-to-r from-primary to-crimson-dark rounded-xl font-bold text-foreground box-glow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span className="text-sm sm:text-base">Generate</span>
              </button>
            </div>
          </div>

          {/* Generated Names */}
          {generatedNames.length > 0 && (
            <div ref={resultRef} className="animate-fade-in">
              <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                Hasil Generate
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {generatedNames.map((name, index) => (
                  <div
                    key={index}
                    className="group flex items-center justify-between p-4 bg-background/50 rounded-xl border border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="font-display font-bold text-lg text-foreground">
                      {name}
                    </span>
                    <button
                      onClick={() => copyToClipboard(name, index)}
                      className="p-2 rounded-lg bg-primary/20 hover:bg-primary/30 transition-colors"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-primary" />
                      )}
                    </button>
                  </div>
                ))}
              </div>

              {/* Regenerate button */}
              <button
                onClick={generateNames}
                className="w-full mt-6 py-3 border-2 border-dashed border-primary/30 rounded-xl text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Generate Ulang
              </button>
            </div>
          )}

          {/* Empty State */}
          {generatedNames.length === 0 && (
            <div className="text-center py-12 border-2 border-dashed border-primary/20 rounded-xl">
              <Sparkles className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-muted-foreground">
                Masukkan nama dan klik Generate untuk membuat nama Zyoran'7
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GenerateNama;