import React from 'react';
    import { Crown, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

    const Footer: React.FC = () => {
      return (
        <footer className="bg-bandhvi-dark-brown text-bandhvi-off-white py-12 border-t border-bandhvi-medium-brown">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Info */}
            <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
              <a href="#" className="flex items-center mb-4">
                <Crown className="h-8 w-8 text-bandhvi-gold-button mr-2" />
                <span className="text-3xl font-serif font-bold text-bandhvi-off-white">Bandhvi</span>
              </a>
              <p className="text-center md:text-left text-bandhvi-off-white/80 text-sm">
                Crafting timeless elegance for the modern gentleman. Experience luxury, tradition, and impeccable style.
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h3 className="text-xl font-serif font-semibold text-bandhvi-gold-button mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">New Arrivals</a></li>
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">Suits</a></li>
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">Sherwanis</a></li>
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">Accessories</a></li>
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">Sale</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h3 className="text-xl font-serif font-semibold text-bandhvi-gold-button mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">Contact Us</a></li>
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">FAQs</a></li>
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-bandhvi-gold-button transition-colors text-bandhvi-off-white/80">Terms of Service</a></li>
              </ul>
            </div>

            {/* Social Media & Contact */}
            <div className="col-span-1 md:col-span-1 text-center md:text-left">
              <h3 className="text-xl font-serif font-semibold text-bandhvi-gold-button mb-4">Connect With Us</h3>
              <div className="flex justify-center md:justify-start space-x-4 mb-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-bandhvi-off-white hover:text-bandhvi-gold-button transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-bandhvi-off-white hover:text-bandhvi-gold-button transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-bandhvi-off-white hover:text-bandhvi-gold-button transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-bandhvi-off-white hover:text-bandhvi-gold-button transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
              <p className="text-bandhvi-off-white/80 text-sm">
                Email: <a href="mailto:info@bandhvi.com" className="hover:text-bandhvi-gold-button transition-colors">info@bandhvi.com</a>
              </p>
              <p className="text-bandhvi-off-white/80 text-sm">
                Phone: <a href="tel:+1234567890" className="hover:text-bandhvi-gold-button transition-colors">+1 (234) 567-890</a>
              </p>
            </div>
          </div>

          <div className="container mx-auto px-4 mt-8 pt-8 border-t border-bandhvi-medium-brown text-center text-bandhvi-off-white/60 text-sm">
            &copy; {new Date().getFullYear()} Bandhvi. All rights reserved.
          </div>
        </footer>
      );
    };

    export default Footer;
