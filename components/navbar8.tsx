"use client";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import type { Dispatch, SetStateAction } from "react";
import { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  url?: string;
  className?: string;
  links?: {
    label: string;
    description?: string;
    url: string;
    image?: string;
  }[];
}

interface MobileNavigationMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

interface DesktopMenuItemProps {
  item: MenuItem;
  index: number;
}

const LOGO = {
  url: "/",
  src: "/images/eye_ball.jpg",
  alt: "Stuart Montgomery",
  title: "Stuart Montgomery",
};

const NAVIGATION: MenuItem[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Portfolio",
    links: [
      {
        label: "Commercial",
        url: "/portfolio/commercial",
        image: "/images/portfolio/commercial/StuartPaintings/commercial02.jpg",
      },
      {
        label: "Residential",
        url: "/portfolio/residential",
        image: "/images/portfolio/residential/Living room.jpg",
      },
      {
        label: "Boys Room",
        url: "/portfolio/boys-room",
        image: "/images/portfolio/boys-room/space room copy.jpg",
      },
      {
        label: "Girls Room",
        url: "/portfolio/girls-room",
        image: "/images/portfolio/girls room/faeries - Copy.jpg",
      },
      {
        label: "Creche",
        url: "/portfolio/creche",
        image: "/images/portfolio/creche/underwater.jpg",
      },
      {
        label: "Play Area",
        url: "/portfolio/play-area",
        image: "/images/portfolio/play-area/jungle.jpg",
      },
      {
        label: "Hand Painted Furniture",
        url: "/portfolio/hand-painted-furniture",
        image: "/images/portfolio/hand-painted-furniture/Hand painted piano.jpg",
      },
    ],
  },
  {
    title: "Testimonials",
    url: "/testimonials",
  },
  {
    title: "FAQs",
    url: "/faqs",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

const MOBILE_NAVIGATION: MenuItem[] = [
  {
    title: "Navigation",
    className: "col-span-2",
    links: [
      { label: "Home", url: "/" },
      { label: "About", url: "/about" },
      { label: "Testimonials", url: "/testimonials" },
      { label: "FAQs", url: "/faqs" },
      { label: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Portfolio",
    className: "col-span-2",
    links: [
      { label: "Commercial", url: "/portfolio/commercial" },
      { label: "Residential", url: "/portfolio/residential" },
      { label: "Boys Room", url: "/portfolio/boys-room" },
      { label: "Girls Room", url: "/portfolio/girls-room" },
      { label: "Creche", url: "/portfolio/creche" },
      { label: "Play Area", url: "/portfolio/play-area" },
      { label: "Hand Painted Furniture", url: "/portfolio/hand-painted-furniture" },
    ],
  },
];

const NAV_BUTTONS: {
  label: string;
  url: string;
  variant:
    | "ghost"
    | "default"
    | "link"
    | "destructive"
    | "outline"
    | "secondary";
}[] = [
  {
    label: "Call Me",
    url: "tel:0834802446",
    variant: "default",
  },
];

const MOBILE_BREAKPOINT = 1024;

interface Navbar8Props {
  className?: string;
}

const Navbar8 = ({ className }: Navbar8Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setOpen(false);
      }
    };

    const handleScroll = () => {
      navRef.current?.classList.toggle("bg-background", window.scrollY > 50);
      navRef.current?.classList.toggle(
        "bg-transparent",
        !(window.scrollY > 50),
      );
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const handleMobileMenu = () => {
    const nextOpen = !open;
    setOpen(nextOpen);
  };

  return (
    <section className={cn("", className)}>
      <div
        className="fixed top-0 z-40 w-full bg-transparent transition-colors duration-200 px-6"
        ref={navRef}
      >
        <div className="container mx-auto border-b">
          <div className="flex items-center justify-between gap-3.5 py-5">
            <a
              href={LOGO.url}
              className="flex max-h-8 items-center gap-2 text-lg font-semibold tracking-tighter"
            >
              <img
                src={LOGO.src}
                alt={LOGO.alt}
                className="inline-block size-8 rounded-full object-cover"
              />
              <span className="hidden md:inline-block">{LOGO.title}</span>
            </a>
            <NavigationMenu className="hidden lg:flex [&>div:nth-child(2)]:left-1/2 [&>div:nth-child(2)]:-translate-x-1/2">
              <NavigationMenuList>
                {NAVIGATION.map((item, index) => (
                  <DesktopMenuItem
                    key={`desktop-link-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <div className="flex items-center gap-3.5">
              {NAV_BUTTONS.map((button, index) => (
                <Button
                  key={`nav-button-${index}`}
                  variant={button.variant}
                  asChild
                >
                  <a href={button.url}>{button.label}</a>
                </Button>
              ))}
              <div className="lg:hidden">
                <Button variant="ghost" size="icon" onClick={handleMobileMenu} aria-label="Open navigation menu" aria-expanded={open} aria-controls="mobile-nav">
                  <Menu className="size-5.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileNavigationMenu open={open} setOpen={setOpen} />
    </section>
  );
};

const DesktopMenuItem = ({ item, index }: DesktopMenuItemProps) => {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const pathname = usePathname();
  const isActive = item.url ? pathname === item.url : false;

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    const index = Number(event.currentTarget.getAttribute("data-index"));
    if (item.links && imagesRef.current[index]) {
      imagesRef.current.forEach((img, i) => {
        img.classList.toggle("opacity-100", i === index);
        img.classList.toggle("opacity-0", i !== index);
      });
    }
  };

  const handleMouseLeave = () => {
    imagesRef.current.forEach((img) => {
      img.classList.remove("opacity-100");
      img.classList.add("opacity-0");
    });
    imagesRef.current[0].classList.add("opacity-100");
  };

  if (item.links) {
    return (
      <NavigationMenuItem key={`desktop-menu-item-${index}`} value={`${index}`}>
        <NavigationMenuTrigger className="bg-transparent">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="!rounded-2xl !p-0">
          <div className="grid min-h-[18.75rem] w-[45.25rem] grid-cols-[22.5rem_1fr] gap-4 p-3">
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              {item.links.map((link, index) => (
                <img
                  key={index}
                  ref={(el) => {
                    if (el) {
                      imagesRef.current[index] = el;
                    }
                  }}
                  src={link.image}
                  alt={link.label}
                  className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-300 ${index === 0 ? "opacity-100" : "opacity-0"}`}
                />
              ))}
            </div>
            <div>
              <div className="p-4 leading-normal font-bold">{item.title}</div>
              <ul>
                {item.links.map((link, index) => (
                  <li key={`desktop-nav-sublink-${index}`}>
                    <a
                      href={link.url}
                      className="flex items-center gap-4 rounded-lg px-4 py-3 hover:bg-muted"
                      data-index={index}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div>
                        <h3 className="leading-normal font-medium">
                          {link.label}
                        </h3>
                        <p className="leading-normal text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem
      key={`desktop-menu-item-${index}`}
      value={`${index}`}
      className={`${navigationMenuTriggerStyle()} bg-transparent`}
    >
      <NavigationMenuLink
        href={item.url}
        className={isActive ? "text-primary font-semibold" : ""}
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const MobileNavigationMenu = ({ open, setOpen }: MobileNavigationMenuProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        aria-describedby={undefined}
        side="top"
        className="inset-0 z-600 h-dvh w-full bg-primary text-primary-foreground [&>button]:hidden"
      >
        <div className="flex-1 overflow-y-auto">
          <div className="container pb-12">
            <div className="absolute -m-px h-px w-px overflow-hidden border-0 mask-clip-border p-0 text-nowrap whitespace-nowrap">
              <SheetTitle className="text-primary">
                Mobile Navigation
              </SheetTitle>
            </div>
            <div className="flex justify-end pt-5 pr-4">
              <SheetClose asChild>
                <Button
                  size="icon"
                  aria-label="Close navigation menu"
                  className="size-9 rounded-full bg-muted/20 hover:bg-muted/20"
                >
                  <X className="size-5.5" />
                </Button>
              </SheetClose>
            </div>
            <div className="flex h-full flex-col justify-between gap-30 pt-6">
              <div className="grid w-full grid-cols-2 gap-x-4 gap-y-10 pl-4">
                {MOBILE_NAVIGATION.map((item, index) =>
                  renderMobileMenuItem(item, index),
                )}
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

const MobileNavLink = ({
  link,
  index,
}: {
  link: { label: string; url: string };
  index: number;
}) => {
  const pathname = usePathname();
  const isActive = pathname === link.url;
  return (
    <a
      href={link.url}
      className={cn(
        index === 0 ? "text-2xl" : "text-base",
        "leading-normal font-medium",
        isActive ? "text-secondary" : "text-primary-foreground",
      )}
    >
      {link.label}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem, index: number) => {
  return (
    <div
      className={`flex flex-col gap-4 text-primary-foreground ${item.className}`}
      key={`mobile-menu-item-${index}`}
    >
      <div className="text-xl text-card uppercase border-b-2 w-fit border-secondary pb-2">{item.title}</div>
      <ul className="flex flex-col gap-3">
        {item.links?.map((link, i) => (
          <li key={`mobile-nav-link-${i}`}>
            <MobileNavLink link={link} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Navbar8 };
