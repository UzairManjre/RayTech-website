import Image from 'next/image';

const ProjectShowcase = () => (
  <section className="py-20">
    <div className="container flex justify-center">
      <Image
        src="/Images/Home/Laptop.avif"
        alt="Project Showcase - Website Mockup on Laptop"
        width={900}
        height={500}
        className="rounded-lg shadow-xl object-cover"
      />
    </div>
  </section>
);

export default ProjectShowcase;
