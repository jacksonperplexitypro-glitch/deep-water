import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ROUTE_PATHS, CONTACT_INFO, scrollToSection, getWhatsAppLink } from '@/lib/index';
import { motion, AnimatePresence } from 'framer-motion';
import { springPresets } from '@/lib/motion';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };

    updateHeight();
    const resizeObserver = new ResizeObserver(updateHeight);
    if (headerRef.current) {
      resizeObserver.observe(headerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '項目簡介', href: '#hero' },
    { label: '電子樓書', href: '#brochure' },
    { label: '價單', href: '#pricelist' },
    { label: '位置', href: '#location' },
    { label: '相冊', href: '#gallery' },
    { label: '聯絡我們', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      >
        <div
          className={`transition-all duration-300 ${
            isScrolled
              ? 'bg-background/95 backdrop-blur-md shadow-lg'
              : 'bg-transparent'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-20">
              <NavLink
                to={ROUTE_PATHS.HOME}
                className="flex flex-col leading-tight"
              >
                <span className="text-2xl font-bold tracking-tight text-primary">
                  DEEP WATER SOUTH
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">
                  第6B期 GRANDE BLANC
                </span>
              </NavLink>

              <nav className="hidden lg:flex items-center gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={springPresets.gentle}
              className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border overflow-hidden"
            >
              <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-base font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main style={{ paddingTop: `${headerHeight}px` }}>{children}</main>

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ...springPresets.bouncy, delay: 0.5 }}
        >
          <Button
            size="lg"
            className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow"
            asChild
          >
            <a href={`tel:${CONTACT_INFO.phone}`} aria-label="致電查詢">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ...springPresets.bouncy, delay: 0.6 }}
        >
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full w-14 h-14 shadow-lg hover:shadow-xl transition-shadow bg-[#25D366] hover:bg-[#20BA5A] text-white"
            asChild
          >
            <a
              href={getWhatsAppLink(
                CONTACT_INFO.whatsapp,
                '您好，我想查詢 DEEP WATER SOUTH 第6B期 GRANDE BLANC 的詳情。'
              )}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp查詢"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
