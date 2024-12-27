"use client";
import Image from 'next/image';
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';

export default function Services() {
  return (
    <section className="bg-[#f9f9f9] py-16">
      {/* Intro Section */}
      <div className="container mx-auto px-6 mb-12">
        <div className="text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-coolvetica text-charcoal mb-4">
            Discover Our Exceptional Catering Services
          </h1>
          <p className="text-gray-700 font-satoshi text-lg leading-relaxed mb-6">
            From intimate gatherings to grand celebrations, our catering services are designed to make your events unforgettable. Explore a wide range of tailored options, each crafted with attention to detail and exquisite taste.
          </p>
          <div className="flex justify-start">
            <Button
              label="Explore Services"
              variant="primary"
              size="large"
              icon={<FiArrowRight />}
              onClick={() => console.log("Explore Services Clicked!")}
            />
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service Card 1 - Weddings */}
        <div className="card-brutalism border-2 border-charcoal shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Weddings</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <Image
              src="/assets/img/wedding.jpg"
              alt="wedding service"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Our wedding catering services are designed to match your dream celebration, offering exquisite meals and professional service.
            </p>
          </div>
        </div>

        {/* Service Card 2 - Birthdays */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Birthdays</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <Image
              src="/assets/img/bday.webp"
              alt="birthday service"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Celebrate in style with a birthday catering package tailored to your preferences, featuring delicious food and cake.
            </p>
          </div>
        </div>

        {/* Service Card 3 - Corporate Meetings */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Corporate Events</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <Image
              src="/assets/img/office.png"
              alt="corporate meeting service"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Our corporate catering service ensures that your meetings, conferences, and business events are a success.
            </p>
          </div>
        </div>

        {/* Service Card 4 - Picnics */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Picnics / Get-togethers</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <Image
              src="/assets/img/picnic.jpg"
              alt="picnic service"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Experience gourmet outdoor dining with our picnic catering, perfect for families, friends, and corporate outings.
            </p>
          </div>
        </div>

        {/* Service Card 5 - Gala Dinners */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Gala Dinners / Buffets</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <Image
              src="/assets/img/buffet.jpg"
              alt="gala dinner service"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Host a grand gala with our luxurious dinner service, offering a refined experience for formal events and charity fundraisers.
            </p>
          </div>
        </div>

        {/* Service Card 6 - Themed Parties */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-2xl font-coolvetica">Special Orders / Deliveries</h2>
          </div>
          <div className="h-48 w-full overflow-hidden relative">
            <Image
              src="/assets/img/pack.png"
              alt="themed party service"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mt-4 font-satoshi leading-normal">
              Our themed party catering service is designed to bring your event to life with fun, creative food experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
