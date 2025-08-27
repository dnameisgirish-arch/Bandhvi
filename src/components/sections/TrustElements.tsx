import React from 'react';
    import { ShieldCheck, Users } from 'lucide-react';

    interface TrustElementProps {
      icon: React.ElementType;
      title: string;
      description: string;
    }

    const TrustElement: React.FC<TrustElementProps> = ({ icon: Icon, title, description }) => {
      return (
        <div className="flex flex-col items-center text-center p-6">
          <Icon className="h-16 w-16 text-bandhvi-gold-button mb-4" />
          <h3 className="text-2xl font-serif font-semibold text-bandhvi-off-white mb-2">
            {title}
          </h3>
          <p className="text-bandhvi-off-white/80 max-w-md">
            {description}
          </p>
        </div>
      );
    };

    const TrustElements: React.FC = () => {
      return (
        <section className="bg-bandhvi-medium-brown py-16">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
            <TrustElement
              icon={ShieldCheck}
              title="Superior Quality"
              description="Every garment is crafted with the finest materials and meticulous attention to detail, ensuring unparalleled quality and durability."
            />
            <TrustElement
              icon={Users}
              title="Trusted by Thousands"
              description="Join our community of satisfied customers who choose Bandhvi for their most important moments and everyday elegance."
            />
          </div>
        </section>
      );
    };

    export default TrustElements;
