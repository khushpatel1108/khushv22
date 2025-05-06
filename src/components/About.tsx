
import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import { useInView } from '@/utils/Animations';
import { TECH_I_HAVE_BEEN_WORKING_WITH } from './logic';

const About: React.FC = () => {
  const { ref: imageRef, isInView: imageInView } = useInView();
  const { ref: contentRef, isInView: contentInView } = useInView();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container-pad">
        <SectionHeading title="About Me" subtitle="Background" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className={`relative transition-all duration-1000 ease-out-expo ${imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <img
                src="/assets/Profile Picture.jpg"
                alt="Khush Patel"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl transform translate-x-4 translate-y-4 -z-10"></div>
          </div>

          <div
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-1000 ease-out-expo ${contentInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
          >
            <div className="space-y-6">
              <p className="body-lg">
                Hello! I'm Khush, a passionate software engineer with a love for creating elegant, efficient digital solutions. My journey in tech began in 2019, and since then, I've been on a continuous learning path, exploring various technologies and methodologies.
              </p>

              <p className="body-md">
              Experienced in React, Angular, TypeScript, and Tailwind CSS for frontend development and Node.js and Express for the backend. I have hands-on experience with AWS services such as IAM, EC2, VPC, S3, and, Lambda, enabling scalable cloud integrations and utilizing CloudFormation for efficient infrastructure provisioning.
              </p>

              <p className="body-md">
                I'm passionate about clean code, performance optimization, and creating seamless user experiences.
              </p>

              <div>
                <h3 className="text-lg font-semibold mb-3">Technologies I've been working with:</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TECH_I_HAVE_BEEN_WORKING_WITH.map((tech, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
