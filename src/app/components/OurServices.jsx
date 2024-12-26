"use client"
import Button from './Button';
import { FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

export default function Services() {
  return (
    <section className="bg-white py-16">
      {/* Intro Section */}
      <div className="container mx-auto px-6 text-center mb-16">
        <h1 className="text-5xl md:text-6xl tracking-wide font-semibold text-charcoal mb-4">Our Services</h1>
        <p className="text-2xl max-w-[500px] mx-auto text-gray-600 mb-8">
          Explore our tailored catering services, crafted to make your events unforgettable.
          Whether you're planning a wedding, birthday, or corporate event, we’ve got you covered.
        </p>
        <Button
            label="Book Now"
            variant="primary"
            size="large"
            icon={<FiArrowRight />}
            onClick={() => console.log("Button Clicked!")}
          />
      </div>

      {/* Cards Section */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Service Card 1 - Weddings */}
        <div className="card-brutalism border-2 border-charcoal shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-3xl tracking-wider font-semibold">Weddings</h2>
          </div>
          <div className="h-40 w-full overflow-hidden relative">
            <Image
              src="/assets/img/wedding.jpg"
              alt="birhday"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4 text-2xl">
              Our wedding catering services are designed to match your dream celebration, offering exquisite meals and professional service.
            </p>
            {/* <a href="#" className="inline-block px-6 py-2 bg-yellow text-black font-semibold rounded-md">
              Learn More
            </a> */}
          </div>
        </div>

        {/* Service Card 2 - Birthdays */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-3xl tracking-wider font-semibold">Birthdays</h2>
          </div>
          <div className="h-40 w-full overflow-hidden relative">
            <Image
                src="/assets/img/bday.webp"
                alt="birhday"
                layout="fill"
                objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4 text-2xl">
              Celebrate in style with a birthday catering package tailored to your preferences, featuring delicious food and cake.
            </p>
            {/* <a href="#" className="inline-block px-6 py-2 bg-yellow text-black font-semibold rounded-md">
              Learn More
            </a> */}
          </div>
        </div>

        {/* Service Card 3 - Corporate Meetings */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-3xl tracking-wider font-semibold">Corporate Events</h2>
          </div>
          <div className="h-40 w-full overflow-hidden relative">
          <Image
              src="/assets/img/office.jpg"
              alt="birhday"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4 text-2xl">
              Our corporate catering service ensures that your meetings, conferences, and business events are a success.
            </p>
            {/* <a href="#" className="inline-block px-6 py-2 bg-yellow text-black font-semibold rounded-md">
              Learn More
            </a> */}
          </div>
        </div>

        {/* Service Card 4 - Picnics */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-3xl tracking-wider font-semibold">Picnics</h2>
          </div>
          <div className="h-40 w-full overflow-hidden relative">
          <Image
                src="/assets/img/picnic.jpg"
                alt="birhday"
                layout="fill"
                objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4 text-2xl">
              Experience gourmet outdoor dining with our picnic catering, perfect for families, friends, and corporate outings.
            </p>
            {/* <a href="#" className="inline-block px-6 py-2 bg-yellow text-black font-semibold rounded-md">
              Learn More
            </a> */}
          </div>
        </div>

        {/* Service Card 5 - Gala Dinners */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-3xl tracking-wider font-semibold">Gala Dinners</h2>
          </div>
          <div className="h-40 w-full overflow-hidden relative">
            <Image
              src="/assets/img/picnic.jpg"
              alt="gala dinner service"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4 text-2xl">
              Host a grand gala with our luxurious dinner service, offering a refined experience for formal events and charity fundraisers.
            </p>
            {/* <a href="#" className="inline-block px-6 py-2 bg-yellow text-black font-semibold rounded-md">
              Learn More
            </a> */}
          </div>
        </div>

        {/* Service Card 6 - Themed Parties */}
        <div className="card-brutalism border-2 border-black shadow-xl rounded-lg overflow-hidden">
          <div className="bg-charcoal text-white p-4">
            <h2 className="text-3xl tracking-wider font-semibold">Themed Parties</h2>
          </div>
          <div className="h-40 w-full overflow-hidden relative">
            <Image
              src="/assets/img/picnic.jpg"
              alt="themed party service"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4">
            <p className="text-gray-700 mb-4 text-2xl">
              Our themed party catering service is designed to bring your event to life with fun, creative food experiences.
            </p>
            {/* <a href="#" className="inline-block px-6 py-2 bg-yellow text-black font-semibold rounded-md">
              Learn More
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
