import React from 'react';
    import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
    import { Button } from '@/components/ui/button';

    const heroSlides = [
      {
        image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Premium Wedding Suits',
        headline: 'Premium Wedding Suits',
        subheadline: 'Exquisite attire for the modern groom',
        cta: 'Shop Now',
      },
      {
        image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'New Collection',
        headline: 'Discover Our New Collection',
        subheadline: 'Elegance redefined for every occasion',
        cta: 'Explore More',
      },
      {
        image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        alt: 'Luxury Accessories',
        headline: 'Luxury Accessories',
        subheadline: 'Complete your look with our finest selections',
        cta: 'View Accessories',
      },
    ];

    const Hero: React.FC = () => {
      return (
        <section className="relative w-full h-[calc(100vh-80px)] lg:h-[calc(100vh-96px)] overflow-hidden">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="relative h-full">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-start p-8 md:p-16 lg:p-24">
                    <div className="max-w-2xl text-bandhvi-off-white animate-fade-in">
                      <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-4">
                        {slide.headline}
                      </h1>
                      <p className="text-lg md:text-xl font-light mb-8">
                        {slide.subheadline}
                      </p>
                      <Button
                        className="bg-bandhvi-gold-button text-bandhvi-dark-brown hover:bg-bandhvi-gold-button/90 px-8 py-6 text-lg font-semibold rounded-none transition-all duration-300 hover:scale-105"
                      >
                        {slide.cta}
                      </Button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-bandhvi-medium-brown text-bandhvi-off-white hover:bg-bandhvi-gold-button hover:text-bandhvi-dark-brown" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-bandhvi-medium-brown text-bandhvi-off-white hover:bg-bandhvi-gold-button hover:text-bandhvi-dark-brown" />
          </Carousel>
        </section>
      );
    };

    export default Hero;
