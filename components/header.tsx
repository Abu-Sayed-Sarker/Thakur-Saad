import logo from "@/assets/logo.png";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "testimonials") {
      const testimonialSection = document.querySelector(".animate-marquee");
      if (testimonialSection) {
        const yOffset = -100; // Offset to account for the fixed header
        const y =
          testimonialSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else if (sectionId === "cta") {
      const ctaSection = document.querySelector(".button-gradient");
      if (ctaSection) {
        const yOffset = -100;
        const y =
          ctaSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { name: "home" },
    { name: "services" },
    { name: "portfolio" },
    { name: "team" },
    { name: "reviews" },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full border border-transparent ${
        isScrolled
          ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl  border-gray-300/30  scale-95 w-[90%] max-w-5xl"
          : "h-14 bg-[#1B1B1B] w-[95%] max-w-7xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Image src={logo} alt="Logo" className="h-16 w-auto object-contain p-4" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={`#${item.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.name);
                }}
                className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                {item.name}
              </a>
            ))}
            <Link
              href="https://www.fiverr.com/thakur_saad"
              className={buttonVariants({
                size: "sm",
                className:
                  "bg-gradient-to-r from-main-secondary to-teal-500 text-lg text-white hover:from-main-secondary/60 hover:to-teal-600  bg-green-600/40 ",
              })}
              target="_blank"
            >
              Fiverr Profile
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden ">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="border border-gray-400/40"
                >
                  <Menu className="h-5 w-5 " />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      className="text-lg text-gray-300 hover:text-gray-400 transition-all duration-300"
                      href={`#${item.name}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.name);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                  <Link
                    href="https://www.fiverr.com/thakur_saad"
                    className={buttonVariants({
                      size: "sm",
                      className:
                        "bg-gradient-to-r from-main-secondary to-teal-500 text-lg text-white hover:from-main-secondary/60 hover:to-teal-600  bg-green-600/40 ",
                    })}
                    target="_blank"
                  >
                    Fiverr Profile
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};
