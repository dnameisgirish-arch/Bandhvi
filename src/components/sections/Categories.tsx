import React from 'react';
    import { Button } from '@/components/ui/button';
    import { Shirt, Briefcase, Gem } from 'lucide-react'; // Changed Bowtie to Briefcase

    interface CategoryCardProps {
      icon: React.ElementType;
      title: string;
      description: string;
      href: string;
    }

    const CategoryCard: React.FC<CategoryCardProps> = ({ icon: Icon, title, description, href }) => {
      return (
        <div className="group relative bg-bandhvi-medium-brown p-8 rounded-lg shadow-lg text-center overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <div className="absolute inset-0 bg-bandhvi-deep-teal opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <Icon className="h-12 w-12 text-bandhvi-gold-button group-hover:text-bandhvi-off-white transition-colors duration-300" />
            </div>
            <h3 className="text-2xl font-serif font-semibold text-bandhvi-off-white mb-2">
              {title}
            </h3>
            <p className="text-bandhvi-off-white/80 mb-6">
              {description}
            </p>
            <Button
              asChild
              className="bg-bandhvi-gold-button text-bandhvi-dark-brown hover:bg-bandhvi-gold-button-hover px-6 py-3 text-md font-medium rounded-none transition-all duration-300"
            >
              <a href={href}>Shop Now</a>
            </Button>
          </div>
        </div>
      );
    };

    const Categories: React.FC = () => {
      const categories = [
        {
          icon: Shirt,
          title: 'Bandhgalas',
          description: 'Traditional elegance for grand occasions.',
          href: '#',
        },
        {
          icon: Briefcase, // Changed Bowtie to Briefcase
          title: 'Tuxedos',
          description: 'Sophisticated formal wear for the discerning.',
          href: '#',
        },
        {
          icon: Gem,
          title: 'Indo-Western',
          description: 'A fusion of classic and contemporary styles.',
          href: '#',
        },
      ];

      return (
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </section>
      );
    };

    export default Categories;
