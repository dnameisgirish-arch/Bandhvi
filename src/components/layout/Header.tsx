import React, { useState, useEffect } from 'react';
    import {
      Menu,
      Search,
      User,
      Heart,
      ShoppingCart,
    } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
    import Logo from '@/components/layout/Logo'; // Import the new Logo component

    const Header: React.FC = () => {
      const [isSticky, setIsSticky] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const navItems = [
        { name: 'New Arrivals', href: '#' },
        { name: 'Suits', href: '#' },
        { name: 'Sherwanis', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Sale', href: '#' },
      ];

      return (
        <header
          className={`w-full z-50 transition-all duration-300 ${
            isSticky ? 'fixed top-0 bg-bandhvi-dark-brown shadow-lg' : 'relative bg-transparent'
          }`}
        >
          <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
            {/* Mobile Menu Trigger */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-bandhvi-off-white hover:bg-bandhvi-medium-brown">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-bandhvi-dark-brown text-bandhvi-off-white border-bandhvi-medium-brown">
                  <div className="flex flex-col space-y-6 p-4">
                    <div className="flex items-center justify-center mb-6">
                      {/* Use Logo component for mobile menu */}
                      <Logo iconClassName="h-8 w-8" textClassName="text-2xl" />
                    </div>
                    {navItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-lg font-medium hover:text-bandhvi-gold-button transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                    <div className="pt-8 border-t border-bandhvi-medium-brown flex flex-col space-y-4">
                      <a href="#" className="flex items-center text-lg hover:text-bandhvi-gold-button">
                        <User className="h-5 w-5 mr-2" /> Account
                      </a>
                      <a href="#" className="flex items-center text-lg hover:text-bandhvi-gold-button">
                        <Heart className="h-5 w-5 mr-2" /> Wishlist
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start flex-grow lg:flex-grow-0">
              {/* Use Logo component for main header */}
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-grow justify-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-bandhvi-off-white hover:text-bandhvi-gold-button transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-bandhvi-gold-button scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-bandhvi-off-white hover:bg-bandhvi-medium-brown">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden lg:inline-flex text-bandhvi-off-white hover:bg-bandhvi-medium-brown">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden lg:inline-flex text-bandhvi-off-white hover:bg-bandhvi-medium-brown">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-bandhvi-off-white hover:bg-bandhvi-medium-brown">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </div>
          </nav>
        </header>
      );
    };

    export default Header;
