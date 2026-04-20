import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronDown, 
  Menu, 
  X,
  LineChart,
  Landmark,
  TrendingDown,
  Clock,
  Check,
  Building,
  Globe,
  Award
} from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problem', href: '#problem' },
    { name: 'Opportunity', href: '#opportunity' },
    { name: 'Why Vietnam', href: '#vietnam' },
    { name: 'The Trip', href: '#trip' },
    { name: 'Factories', href: '#factories' },
    { name: 'Hosts', href: '#hosts' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-bg-dark/95 backdrop-blur-md border-b border-border-subtle py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/logos/100B%20-%20TACH%20NEN%20-1.png" alt="100B" className="h-8 md:h-9 w-auto object-contain" />
          <img src="/logos/LOGO%20LT%20COMMERCIAL.png" alt="LT Commercial Group" className="h-8 md:h-9 w-auto object-contain" />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <a key={link.name} href={link.href} className={`text-xs uppercase tracking-widest transition-colors font-medium ${isScrolled ? 'text-text-body hover:text-text-heading' : 'text-white/80 hover:text-white'}`}>
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a href="#apply" className={`px-6 py-3 text-xs transition-colors duration-200 ${isScrolled ? 'btn-silver-gradient rounded-full' : 'bg-white hover:bg-brand-gold text-bg-dark hover:text-white rounded-full uppercase tracking-widest font-semibold'}`}>
            Request Invite
          </a>
        </div>

        <button 
          className={`lg:hidden transition-colors ${isScrolled ? 'text-text-heading' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-bg-card border-b border-border-subtle p-6 flex flex-col gap-4 shadow-xl">
          {navLinks.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest text-text-heading hover:text-brand-gold transition-colors font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#apply" 
            className="mt-4 px-6 py-3 btn-silver-gradient rounded-full text-center text-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Request Invite
          </a>
        </div>
      )}
    </nav>
  );
};

const renderWithDisplayDigits = (text: string) =>
  text.split(/(\d+)/).map((chunk, i) =>
    /^\d+$/.test(chunk)
      ? <span key={i} className="font-display">{chunk}</span>
      : <React.Fragment key={i}>{chunk}</React.Fragment>
  );

const SectionHeader = ({ subtitle, title, titleAccent }: { subtitle: string, title: string, titleAccent?: string }) => (
  <div className="mb-10 lg:mb-14">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-8 h-px bg-border-subtle"></div>
      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold">{subtitle}</span>
    </div>
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight text-text-heading max-w-3xl">
      {title.split(titleAccent || '').map((part, i, arr) => (
        <React.Fragment key={i}>
          {renderWithDisplayDigits(part)}
          {i < arr.length - 1 && titleAccent && (
            <em className="font-serif italic text-gradient-gold pr-1">{renderWithDisplayDigits(titleAccent)}</em>
          )}
        </React.Fragment>
      ))}
    </h2>
  </div>
);

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black">
    {/* Full Screen Background Video */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-[0.35] mix-blend-luminosity"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-welder-working-on-a-large-piece-of-metal-43034-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 bg-black/50" /> {/* Dark wash to guarantee text contrast */}
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div className="max-w-4xl relative z-10 w-full mt-10 md:mt-0">
        <div className="flex flex-wrap items-center justify-start gap-3 mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] px-3 py-1 border border-white/20 text-white font-medium rounded-full">
            Build Better Series
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] px-3 py-1 border border-brand-gold text-brand-gold font-medium rounded-full">
            By Invitation Only
          </span>
        </div>
        
        <div className="flex items-center justify-start gap-4 mb-6">
          <div className="w-12 h-px bg-brand-gold"></div>
          <p className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase text-brand-gold">May 30 – June 6, 2026</p>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[120px] font-display leading-[0.85] tracking-tight text-white mb-6">
          VIETNAM<br />
          <span className="text-gradient-gold">DIRECT</span><br />
          <em className="font-display italic font-light opacity-[0.15] block mt-2 text-6xl md:text-8xl lg:text-[120px] leading-[0.7]">2026</em>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl font-light text-white mb-8 leading-snug max-w-2xl">
          Source materials <strong className="font-medium text-gradient-gold">straight from the factory.</strong><br />
          <span className="text-white/80">Cut 20–25% off your cost sheet. No middlemen.</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_2.5fr] gap-3 md:gap-4 text-left items-stretch">
        <div className="flex items-center gap-3 lg:gap-4 p-4 bg-bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-colors h-full text-white/80">
          <Calendar className="text-brand-gold shrink-0" size={20} />
          <div className="text-xs xl:text-sm"><strong className="text-white font-semibold">7 Days</strong></div>
        </div>
        <div className="flex items-center gap-3 lg:gap-4 p-4 bg-bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-colors h-full text-white/80">
          <Building className="text-brand-gold shrink-0" size={20} />
          <div className="text-xs xl:text-sm"><strong className="text-white font-semibold">12</strong> Factories</div>
        </div>
        <div className="flex items-center gap-3 lg:gap-4 p-4 bg-bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-colors h-full text-white/80">
          <Users className="text-brand-gold shrink-0" size={20} />
          <div className="text-xs xl:text-sm"><strong className="text-white font-semibold">Limited Seats</strong></div>
        </div>
        <div className="flex items-center gap-3 lg:gap-4 p-4 bg-bg-card/80 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-gold/50 transition-colors h-full text-white/80">
          <Award className="text-brand-gold shrink-0" size={20} />
          <div className="text-xs xl:text-sm whitespace-nowrap">Hosted by <strong className="text-white font-semibold">100B</strong></div>
        </div>

        <a href="#apply" className="flex items-center justify-center gap-2 p-4 w-full h-full btn-silver-gradient rounded-2xl text-[13px] xl:text-sm group sm:col-span-2 lg:col-span-1">
          <span className="font-bold whitespace-nowrap">Request Invitation</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform shrink-0" />
        </a>
      </div>
    </div>
  </header>
);

const Problem = () => (
  <section id="problem" className="py-16 md:py-24 border-t border-border-subtle bg-bg-alt flex flex-col justify-center min-h-[90vh]">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <SectionHeader 
        subtitle="The Reality Right Now" 
        title="Your margins are getting squeezed from every angle."
        titleAccent="squeezed from every angle."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: <LineChart className="text-white" size={32} strokeWidth={1.5} />, title: "Costs Up 40-50%", body: "Labor, materials, financing — all elevated. Little room to pass it through to buyers who are already stretched." },
          { icon: <Landmark className="text-white" size={32} strokeWidth={1.5} />, title: "Capital Sidelined", body: "Domestic investors are pausing. Lenders are tighter. Deals that penciled in 2021 don't work today." },
          { icon: <TrendingDown className="text-white" size={32} strokeWidth={1.5} />, title: "Margins Gone", body: "When 8–10% is \"good\" and exits are soft, projects don't ink. The industry needs a structural fix." },
          { icon: <Clock className="text-white" size={32} strokeWidth={1.5} />, title: "Winners Restructure", body: "Those who fix their cost base today will move fast when the market opens back up." }
        ].map((prob, idx) => (
          <article key={idx} className="bg-bg-card hover:bg-bg-card-hover transition-colors rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center shadow-lg">
            <div className="w-20 h-20 rounded-full bg-gradient-to-b from-[#4A4A4A] to-[#1A1A1A] flex items-center justify-center mb-6 shadow-inner border border-white/5 mx-auto">
              {prob.icon}
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-2 font-sans tracking-tight">{prob.title}</h3>
            <p className="text-sm lg:text-base font-light text-text-body leading-relaxed">
              {prob.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Opportunity = () => (
  <section id="opportunity" className="py-16 lg:py-24 border-t border-border-subtle bg-bg-dark">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        subtitle="The Opportunity" 
        title="Materials are the one cost you can actually control."
        titleAccent="control."
      />
      
      <p className="text-lg lg:text-xl text-text-body font-light leading-relaxed max-w-4xl mb-12">
        Flooring, tile, cabinets, windows, doors, panels, roofing, steel — typically 25–35% of total construction cost. You're paying 3–4× the factory price through domestic distributors. That stops here.
      </p>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { n: "20–25%", l: "Savings going direct vs.\nD2C" },
          { n: "$17.5B", l: "Vietnam's annual exports\n2024" },
          { n: "D2C", l: "Factory to job site.\nNo markup." },
          { n: "3–4×", l: "Domestic markup\nbeing paid" },
        ].map((stat, i) => (
          <div key={i} className="bg-bg-card rounded-3xl p-8 flex flex-col justify-center text-center items-center shadow-lg">
            <span className="text-[48px] md:text-[64px] font-display text-gradient-gold mb-2 lining-nums tracking-tight font-light leading-none">{stat.n}</span>
            <span className="text-sm lg:text-base text-text-body font-light leading-relaxed whitespace-pre-line">{stat.l}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4 mb-8">
        <span className="text-xs lg:text-sm uppercase tracking-[0.2em] font-semibold text-brand-gold">How we make it work</span>
        <div className="flex-1 h-px bg-border-subtle"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {[
          { h: "Factory Audit & Vetting", b: "Pre-screened manufacturers. You visit knowing it's already approved." },
          { h: "Quality Control", b: "Ground QC before shipment. Pre-production & mid-run checks." },
          { h: "Logistics & Freight", b: "Container loading, customs, freight forwarding, to your site." },
          { h: "Our Procurement Team", b: "No overseas team needed. We are your team — spec to delivery." },
          { h: "Savings Across Stack", b: "The 20–25% flows to GCs & investors — improving returns." },
          { h: "Access to Capital", b: "Connect US projects with Vietnamese HNWIs seeking US exposure." },
        ].map((s, idx) => (
          <article className="bg-bg-card rounded-3xl p-6 lg:p-8 flex flex-col shadow-lg" key={idx}>
            <div className="text-[40px] font-display text-gradient-gold mb-2 leading-none font-medium">0{idx + 1}</div>
            <h3 className="text-gradient-gold text-base lg:text-lg font-sans font-medium uppercase tracking-[0.1em] mb-4">
              {s.h}
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 icon-silver-gradient">
                <Check className="text-[#111]" size={14} strokeWidth={3} />
              </div>
              <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">{s.b}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const Vietnam = () => (
  <section id="vietnam" className="py-16 lg:py-24 border-t border-border-subtle bg-bg-alt">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        subtitle="Why Vietnam, Why Now" 
        title="The timing has never been more strategic."
        titleAccent="more strategic."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        {[
          { n: "2nd", l: "Largest furniture exporter globally" },
          { n: "$124B", l: "US trade deficit with Vietnam (2024)" },
          { n: "$25B", l: "Record FDI into Vietnam in 2024" },
          { n: "60-70%", l: "Lower manufacturing cost vs. China" },
        ].map((stat, i) => (
          <div key={i} className="bg-bg-card hover:bg-bg-card-hover transition-colors rounded-3xl p-6 lg:p-8 flex flex-col items-center text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#4A4A4A] to-[#1A1A1A] flex items-center justify-center mb-6 shadow-inner border border-white/5">
              <span className="text-xl font-display text-white font-bold">{stat.n}</span>
            </div>
            <h3 className="text-sm lg:text-base font-bold text-white mb-2 font-sans tracking-tight leading-snug">{stat.l}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {[
          { n: "01", t: "US–China Trade War", b: "Tariffs of 25–145% permanently shifted supply chains. Vietnam is the #1 beneficiary." },
          { n: "02", t: "World-Class Quality", b: "Factories hold ASTM, LEED, ISO, FSC. Suppliers for CA's tallest building & US Marriotts." },
          { n: "03", t: "Mature Export Routes", b: "Vietnam exported $405B in goods in 2024. Port infra & freight to US are established." },
          { n: "04", t: "Durable Advantage", b: "60–70% lower labor and land costs create a structural price advantage." },
          { n: "05", t: "Strategic Partner", b: "Comprehensive Strategic Partnership with US established 2023. Backed stability." },
          { n: "06", t: "Early Movers Win", b: "Best factories are selective. Early relationships get better pricing & capacity." },
        ].map((v, i) => (
          <article className="bg-bg-card rounded-3xl p-6 lg:p-8 flex flex-col shadow-lg" key={i}>
            <div className="text-[40px] font-display text-gradient-gold mb-2 leading-none font-medium">{v.n}</div>
            <h3 className="text-gradient-gold text-base lg:text-lg font-sans font-medium uppercase tracking-[0.1em] mb-4">{v.t}</h3>
            <div className="flex items-start gap-4">
              <div className="w-6 h-6 flex items-center justify-center shrink-0 mt-0.5 icon-silver-gradient">
                <Check className="text-[#111]" size={14} strokeWidth={3} />
              </div>
              <p className="text-sm lg:text-base text-text-heading font-light leading-relaxed">{v.b}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const TripSection = () => (
  <section id="trip" className="py-16 lg:py-24 border-t border-border-subtle bg-bg-dark">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        subtitle="The Experience" 
        title="7 days. 12 factories. Zero fluff."
        titleAccent="Zero fluff."
      />

      <p className="text-lg lg:text-xl font-light text-text-body leading-relaxed mb-12 max-w-4xl">
        Decision-makers only — GC principals, development partners, architects who actually spec materials. Every stop is pre-negotiated. Every meeting is worth your time.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16">
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-3">
            {[
              ["Dates", "May 30 – June 6, 2026"],
              ["Fly Into", "Ho Chi Minh City (SGN)"],
              ["Fly Out", "Hanoi (HAN)"],
              ["Stops", "12 curated factories"],
              ["Format", "Private · Hand-picked"],
              ["Hosts", "100B × LT Commercial Group"],
            ].map(([l, v], i) => (
              <div className="flex bg-bg-card rounded-2xl p-6 items-center" key={i}>
                <span className="w-1/3 text-xs lg:text-sm uppercase tracking-[0.15em] font-medium text-brand-gold">{l}</span>
                <span className="w-2/3 text-text-heading font-medium text-base lg:text-lg">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-8 lg:p-10 rounded-3xl relative overflow-hidden bg-bg-card border border-border-subtle">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold"></div>
            <span className="text-[11px] lg:text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-3 block">Cost</span>
            <div className="text-text-body text-base lg:text-lg leading-relaxed">
              <strong className="text-text-heading text-lg lg:text-xl block mb-2">$3,550 per person.</strong>
              Includes domestic flights, ground transportation, meals, hotels (7 nights) and miscellaneous expenses. International flights are not included.
            </div>
          </div>

          <div className="mt-auto pt-8">
            <p className="text-xs italic text-brand-gold leading-relaxed border-l border-brand-gold/20 pl-4 py-1">
              ★ Detailed itinerary in development. All factory stops subject to final confirmation and may change based on group demand.
            </p>
          </div>
        </div>

        <div>
          <div className="bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-2xl md:rounded-[20px] overflow-hidden relative shadow-2xl">
            {/* The vertical accent line from the screenshot */}
            <div className="absolute top-0 left-0 bottom-0 w-1 md:w-[5px] bg-brand-gold opacity-90"></div>
            
            <div className="flex flex-col">
              {[
                { day: "Day 1", date: "May 30", loc: "HCMC — Arrive", chips: [["Arrival + Orientation dinner", true]] },
                { day: "Day 2", date: "May 31", loc: "Binh Duong", chips: [["An Cuong Wood", true], ["BM Windows", true]] },
                { day: "Day 3", date: "Jun 1", loc: "Binh Duong + Long An", chips: [["Phu Tai / Vina G7", true], ["Dai Dung", true], ["Tan Thanh", false]] },
                { day: "Day 4", date: "Jun 2", loc: "HCMC — Flex", chips: [["AA Corporation", false], ["Evening flight north", true]] },
                { day: "Day 5", date: "Jun 3", loc: "Fly → Hanoi", chips: [["AM arrival", false], ["Hoa Phat briefing", true]] },
                { day: "Day 6", date: "Jun 4", loc: "Bac Ninh + Vinh Phuc + Hanoi", chips: [["Tonmat", true], ["Amy Grupo", true], ["Eurowindow", true]] },
                { day: "Day 7", date: "Jun 5", loc: "Hai Phong", chips: [["An Phat Holdings", true], ["Tien Phong", false]] },
                { day: "Day 8", date: "Jun 6", loc: "Hanoi — Depart / Optional Ha Long Bay", chips: [["Departure", false], ["Optional: GAACC add-on Jun 6–7", true]] },
              ].map((r, i, arr) => (
                <div 
                  key={i} 
                  className={`flex flex-col md:flex-row group transition-colors hover:bg-white/[0.03] ${i !== arr.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  {/* Left Column: Day and Date */}
                  <div className="md:w-[130px] lg:w-[150px] shrink-0 pt-4 pb-1 md:py-[22px] pl-6 pr-4 md:border-r border-white/5 flex flex-row md:flex-col items-baseline md:items-start gap-2 md:gap-1.5 focus:outline-none">
                    <div className="text-text-heading font-bold text-base lg:text-lg">{r.day}</div>
                    <div className="text-[11px] lg:text-xs text-text-muted font-medium">{r.date}</div>
                  </div>
                  
                  {/* Right Column: Location and Events */}
                  <div className="flex-1 pb-4 pt-1 md:py-[22px] pl-6 md:pl-7 pr-4 lg:pr-6 flex flex-col xl:flex-row xl:items-center justify-between gap-3 xl:gap-8 w-full">
                    <div className="text-text-heading font-medium text-[15px] lg:text-[17px] leading-snug xl:w-auto shrink-0">{r.loc}</div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {r.chips.map(([label, gold], j) => (
                        <span className={`text-[11px] lg:text-[12px] px-3 py-1.5 border transition-colors whitespace-nowrap rounded ${gold ? "border-brand-gold/30 text-brand-gold bg-brand-gold/5 group-hover:bg-brand-gold/10 group-hover:border-brand-gold/40" : "border-white/10 text-white/50 bg-white/5 group-hover:bg-white/10 group-hover:text-white/70"}`} key={j}>
                          {label as string}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-border-subtle max-w-3xl mx-auto text-center flex flex-col justify-center items-center">
        <span className="text-[11px] lg:text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-4 inline-block px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/5">Optional Add-On</span>
        <p className="text-text-body text-base lg:text-lg leading-relaxed">
          Extend <strong className="text-text-heading font-medium">1–2 days of sightseeing</strong> and hang out with the <strong className="text-text-heading font-medium">Greater Austin Asian Chamber of Commerce</strong> on <strong className="text-text-heading font-medium">Jun 6–7</strong> in Hanoi and Ha Long Bay.
        </p>
        <a href="https://austin2vietnam.100b.co/" target="_blank" rel="noopener noreferrer" className="group mt-6 inline-flex items-center gap-2 text-text-heading hover:text-brand-gold uppercase tracking-[0.15em] text-[12px] lg:text-[13px] font-bold transition-colors">
          <span className="border-b border-transparent group-hover:border-brand-gold/50 transition-colors pb-0.5">View GAACC trip</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </section>
);

const Factories = () => {
  const [openId, setOpenId] = useState<string | null>("01");

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const factories = [
    { id: "01", name: "An Cuong Wood", loc: "Binh Duong", type: "Interior Panels · SPC Flooring · Wall Panels · Doors", rating: 5, hub: "SOUTH — HO CHI MINH CITY · MAY 31 – JUN 2", estRev: "~$145M", size: "240,000 m²", mkt: "50%+ Vietnam", inv: "Sumitomo · DEG · VinaCapital", us: "Rep office · exports live", details: [
      "Vietnam's #1 interior materials company. Publicly listed, 50%+ domestic market share.",
      "Full ecosystem: panels, SPC/laminate flooring, wall panels, acoustic panels, doors — genuine one-stop shop.",
      "Backed by Sumitomo (Japan) + DEG (German dev bank). Already ships to USA, Australia, Japan, Canada."
    ] },
    { id: "02", name: "BM Windows", loc: "Binh Duong", type: "Aluminum-Glass Facades · Curtain Walls · Unitized Panels", rating: 5, hub: "SOUTH", details: ["Leading facade contractor in Vietnam.", "Strong track record with major international developers.", "State-of-the-art manufacturing facilities."] },
    { id: "03", name: "Phu Tai + Vina G7", loc: "Binh Duong / Dong Nai", type: "Kitchen Cabinets · Wood Furniture · Quartz Stone", rating: 5, hub: "SOUTH", details: ["Major supplier to US big box retailers.", "Vertically integrated from stone quarrying to finished cabinets.", "Huge capacity and proven export reliability."] },
    { id: "04", name: "Dai Dung Corporation", loc: "Long An", type: "Prefab Steel Structures · Fabrication · EPC", rating: 5, hub: "SOUTH", details: ["Leading heavy steel fabricator.", "Supplied steel for world cup stadiums and major infrastructure.", "Expertise in complex structural steel exports."] },
    { id: "05", name: "Tan Thanh Container", loc: "HCMC", type: "ISO Containers · Modified / Prefab Units", rating: 3, hub: "SOUTH", details: ["Vietnam's largest container manufacturer.", "Specializes in modified container housing and modular units.", "Strong potential for cost-effective prefab developments."] },
    { id: "06", name: "AA Corporation", loc: "HCMC / Long An", type: "Luxury FF&E · Custom Furniture · Interior Fit-Out", rating: 4, hub: "SOUTH", details: ["Premium interior fit-out company.", "Furnished top luxury hotels globally (Marriott, Four Seasons).", "Ideal partner for high-end hospitality and custom millwork."] },
    
    { id: "07", name: "Eurowindow", loc: "Hanoi", type: "Aluminum + uPVC Windows/Doors · Curtain Walls · Timber Doors", rating: 4, hub: "NORTH — HANOI HUB · JUN 3 – JUN 6", details: ["Vietnam's pioneer in modern window solutions.", "Massive scale and diverse product lines.", "Strong international quality certifications."] },
    { id: "08", name: "Tonmat Group", loc: "Bac Ninh", type: "Insulated Roof + Wall Panels · Metal Roofing · Color-Coated Steel", rating: 5, hub: "NORTH", details: ["Leader in insulated sandwich panels (PU, PIR, Rockwool).", "Essential for modern, energy-efficient building envelopes.", "High automated production capacity."] },
    { id: "09", name: "Amy Grupo", loc: "Vinh Phuc", type: "Tile · SPC/LVT Flooring · WPC Decking · Wall Panels", rating: 5, hub: "NORTH", details: ["Rapidly growing manufacturer of advanced flooring.", "High-tech production lines producing world-class SPC.", "Strong focus on US export market standards."] },
    { id: "10", name: "An Phat Holdings", loc: "Hai Phong", type: "SPC/LVT Flooring · PVC Wall Panels · Wall Cladding", rating: 4, hub: "NORTH", details: ["Major plastics conglomerate with dedicated high-tech building materials division.", "Huge scale and raw material integration advantage.", "Reliable OEM partner for global brands."] },
    { id: "11", name: "Tien Phong Plastic", loc: "Hai Phong", type: "PVC + HDPE Pipes · Pipe Fittings · Plumbing Systems", rating: 2, hub: "NORTH", details: ["Vietnam's oldest and largest pipe manufacturer.", "Supplies major infrastructure and residential projects domestically.", "Exploring OEM and export opportunities."] },
    { id: "12", name: "Hoa Phat Group", loc: "Hanoi · Meeting Format", type: "Construction Steel · Galvanized + Color-Coated Steel · Metal Roofing", rating: 4, hub: "NORTH", details: ["Vietnam's largest steelmaker and top industrial conglomerate.", "World-class blast furnace technology.", "Supplies raw materials that drive construction costs globally."] },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className={`text-sm ${s <= rating ? 'text-brand-gold' : 'text-border-subtle'} font-serif`}>★</span>
        ))}
      </div>
    );
  };

  return (
    <section id="factories" className="py-16 lg:py-24 border-t border-border-subtle bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader 
          subtitle="The Manufacturers" 
          title="12 factories. All vetted. All relevant."
          titleAccent="All vetted. All relevant."
        />
        
        <p className="text-base lg:text-lg text-text-body font-light mb-8 max-w-4xl">
          We know them all. <span className="text-brand-gold">★</span> = non-negotiable. Click any row for details.
        </p>

        <div className="flex flex-wrap gap-8 mb-10 pb-6 border-b border-border-subtle text-sm">
          <div className="flex items-center gap-3">
            {renderStars(5)}
            <span className="text-text-heading font-medium">Perfect US fit</span>
          </div>
          <div className="flex items-center gap-3">
            {renderStars(4)}
            <span className="text-text-heading font-medium">Strong fit</span>
          </div>
          <div className="flex items-center gap-3">
            {renderStars(3)}
            <span className="text-text-heading font-medium">Selective</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {factories.map((f, i, arr) => {
            const showHub = i === 0 || f.hub !== arr[i-1].hub;
            const isOpen = openId === f.id;
            
            return (
              <React.Fragment key={f.id}>
                {showHub && f.hub.includes("—") && (
                  <div className="mt-8 mb-4 px-2">
                    <span className="text-[11px] lg:text-xs uppercase tracking-[0.2em] font-medium text-brand-gold">{f.hub}</span>
                  </div>
                )}
                
                <div 
                  className={`group cursor-pointer rounded-3xl transition-colors overflow-hidden ${isOpen ? 'bg-bg-card border border-brand-gold/30' : 'bg-bg-card hover:bg-bg-card-hover border border-border-subtle'}`}
                  onClick={() => toggleOpen(f.id)}
                >
                  <div className="grid grid-cols-[60px_1fr] lg:grid-cols-[80px_2.5fr_3fr_1fr_100px] gap-4 p-8 lg:p-10 items-center">
                    <div className="text-sm lg:text-base uppercase font-display font-bold tracking-widest text-[#a3a3a3] group-hover:text-brand-gold transition-colors">{f.id}</div>
                    
                    <div>
                      <h4 className="text-xl lg:text-2xl font-bold text-text-heading mb-2 group-hover:text-brand-gold transition-colors">{f.name}</h4>
                      <div className="text-sm lg:text-base text-text-body flex items-center gap-2">
                        {f.loc} {f.rating >= 4 && <span className="text-brand-gold">★</span>}
                      </div>
                    </div>
                    
                    <div className="hidden lg:block text-base text-text-body font-medium">{f.type}</div>
                    
                    <div className="hidden lg:block">{renderStars(f.rating)}</div>
                    
                    <div className="flex justify-end lg:col-start-5 col-start-2">
                      <div className={`flex items-center gap-2 text-xs lg:text-sm uppercase tracking-widest font-bold transition-colors ${isOpen ? 'text-brand-gold' : 'text-text-body group-hover:text-text-heading'}`}>
                        Details
                        <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${isOpen ? 'border-brand-gold rotate-180 bg-brand-gold/10' : 'border-border-subtle group-hover:border-text-heading'}`}>
                          <ChevronDown size={14} />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Content */}
                  {isOpen && (
                    <div className="p-8 lg:p-10 pt-0 lg:ml-[80px] border-t border-border-subtle lg:border-t-0 lg:grid lg:grid-cols-[1fr_2.5fr] gap-12 mt-4 lg:mt-0">
                      {f.estRev ? (
                        <div className="grid grid-cols-2 gap-4 mb-8 lg:mb-0">
                          {[
                            ["EST. REVENUE", f.estRev],
                            ["FACTORY", f.size],
                            ["MKT SHARE", f.mkt],
                            ["INVESTORS", f.inv],
                            ["US PRESENCE", f.us]
                          ].filter(x => x[1]).map(([label, val], idx) => (
                            <div className={`${idx === 4 ? 'col-span-2' : ''} bg-bg-dark rounded-2xl p-6 flex flex-col justify-center`} key={label}>
                              <span className="text-[10px] lg:text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold/80 mb-2">{label}</span>
                              <span className="text-base font-medium text-text-heading">{val}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="hidden lg:block"></div>
                      )}
                      
                      <div className="lg:py-4">
                        <span className="text-[11px] lg:text-xs uppercase tracking-[0.2em] font-semibold text-brand-gold mb-5 block">Why Visit</span>
                        <ul className="space-y-4">
                          {f.details.map((d, j) => (
                            <li className="flex gap-4 text-base lg:text-lg text-text-body leading-relaxed" key={j}>
                              <span className="text-brand-gold mt-1">→</span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Hosts = () => (
  <section id="hosts" className="py-16 lg:py-24 border-t border-border-subtle bg-bg-dark">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeader 
        subtitle="Your Hosts" 
        title="Two founders. One shared mission."
        titleAccent="One shared mission."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {[
          {
            name: "Minh Mac",
            role: "Founder · 100B",
            email: "global@100b.co",
            img: "/logos/Minh%20Mac%20CEO.jpeg"
          },
          {
            name: "Lezlie Tram",
            role: "CEO · LT Commercial Group",
            email: "lezlie@ltcommercialgroup.com",
            img: "/logos/Lezlie.jpg"
          }
        ].map((h, i) => (
          <article className="bg-bg-card rounded-3xl p-16 flex flex-col items-center text-center group hover:bg-bg-card-hover transition-colors" key={i}>
            <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-2 border-brand-gold/30 group-hover:border-brand-gold transition-colors p-1">
              <img src={h.img} alt={h.name} className="w-full h-full object-cover rounded-full filter grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
            </div>
            <h3 className="text-4xl font-serif font-medium text-text-heading mb-4">{h.name}</h3>
            <div className="text-sm lg:text-base uppercase tracking-[0.2em] font-medium text-brand-gold mb-6">{h.role}</div>
            <a href={`mailto:${h.email}`} className="text-text-body hover:text-text-heading transition-colors text-base font-medium">{h.email}</a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section id="apply" className="py-20 lg:py-28 border-t border-border-subtle bg-bg-alt relative overflow-hidden min-h-[70vh] flex flex-col justify-center">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-gold/10 via-transparent to-transparent" />
    
    <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-gold mb-6 block">By Invitation Only</span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-text-heading mb-6 leading-tight">
        Seats are limited.<br />
        <em className="font-serif italic text-gradient-gold">Attendees are vetted.</em>
      </h2>
      <p className="text-base lg:text-lg text-text-body font-light mb-10 max-w-2xl mx-auto">
        Decision-maker level only. Express interest and we'll follow up personally.
      </p>
      
      <a 
        href="mailto:global@100b.co?subject=Vietnam Direct 2026 — Invitation Request" 
        className="inline-flex items-center justify-center gap-3 px-12 py-6 btn-silver-gradient rounded-2xl text-base lg:text-lg group mb-8"
      >
        Request Your Invitation 
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </a>
      
      <p className="text-sm lg:text-base italic text-text-body opacity-70">
        Reviewed personally. Acceptance is selective. Details shared upon qualification.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-border-subtle bg-bg-dark">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex flex-col items-center md:items-start gap-3">
        <div className="flex items-center gap-3">
          <img src="/logos/100B%20-%20TACH%20NEN%20-1.png" alt="100B" className="h-8 w-auto object-contain" />
          <span className="text-brand-gold text-sm opacity-60">×</span>
          <img src="/logos/LOGO%20LT%20COMMERCIAL.png" alt="LT Commercial Group" className="h-8 w-auto object-contain" />
        </div>
        <div className="font-serif font-bold text-text-heading text-xl">Vietnam Direct 2026</div>
        <div className="text-xs uppercase tracking-[0.15em] text-text-body">Build Better Series</div>
      </div>
      <div className="text-center md:text-right text-xs text-text-body leading-relaxed opacity-60">
        Made in Vietnam, Consumed Worldwide<br />
        100b.co
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark font-sans text-text-body selection:bg-brand-gold/30 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Opportunity />
        <Vietnam />
        <TripSection />
        <Factories />
        <Hosts />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

