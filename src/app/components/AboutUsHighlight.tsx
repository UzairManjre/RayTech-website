import Image from 'next/image';
import Link from 'next/link';

const AboutUsHighlight = () => (
  <section className="py-20">
    <div className="container flex flex-col md:flex-row gap-12 items-center">
      {/* Left: Image */}
      <div className="flex-1 w-full flex justify-center order-2 md:order-1">
        <Image
          src="/Images/Home/Grp.avif"
          alt="About RayTech Team"
          width={600}
          height={400}
          className="rounded-lg w-full object-cover"
        />
      </div>
      {/* Right: Content */}
      <div className="flex-1 flex flex-col justify-center order-1 md:order-none">
        <p className="text-sm font-semibold text-green-600 uppercase mb-2">About Us</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Simplifying tech for your business</h2>
        <p className="text-gray-600 mt-4">
          We help businesses modernize and automate with tailored digital solutions. Our mission is to make technology accessible, efficient, and easy to manage for every client.
        </p>
        <div className="flex items-center mt-6">
          <Image
            src="/Images/Home/placeholder.avif"
            alt="Tahir Brooks"
            width={40}
            height={40}
            className="rounded-full object-cover mr-3"
          />
          <div>
            <div className="font-semibold text-gray-900">Uzair Manjre</div>
          </div>
        </div>
        <Link
          href="/about"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md mt-6 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </div>
  </section>
);

export default AboutUsHighlight;
