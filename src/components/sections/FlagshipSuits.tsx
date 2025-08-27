import React from 'react';
    import { Button } from '@/components/ui/button'; // Import the Button component

    interface SuitCardProps {
      image: string;
      alt: string;
      title: string;
    }

    const SuitCard: React.FC<SuitCardProps> = ({ image, alt, title }) => {
      return (
        <div className="relative group overflow-hidden rounded-lg shadow-lg">
          <img
            src={image}
            alt={alt}
            className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h3 className="text-2xl font-serif font-semibold text-bandhvi-off-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-100 mb-4">
              {title}
            </h3>
            <Button
              variant="default"
              className="bg-white text-black hover:bg-gray-200 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 delay-200 px-8 py-2 rounded-md"
            >
              View More
            </Button>
          </div>
        </div>
      );
    };

    const FlagshipSuits: React.FC = () => {
      const suits = [
        {
          image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Navy Blue Suit',
          title: 'The Classic Navy',
        },
        {
          image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Black Tuxedo',
          title: 'Midnight Tuxedo',
        },
        {
          image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Olive Green Bandhgala',
          title: 'Regal Bandhgala',
        },
        {
          image: 'https://images.pexels.com/photos/1043472/pexels-photo-1043472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
          alt: 'Beige Sherwani',
          title: 'Ivory Sherwani',
        },
      ];

      return (
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-serif font-bold text-bandhvi-off-white text-center mb-12">
            Flagship Suits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {suits.map((suit, index) => (
              <SuitCard key={index} {...suit} />
            ))}
          </div>
        </section>
      );
    };

    export default FlagshipSuits;
