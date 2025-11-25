import { Mail, Phone, MapPin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Contact() {
  const contactInfo = [
    { icon: MapPin, label: 'Location', value: profile.location, href: null },
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Interested in collaborating or learning more about my work? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300 hover:shadow-lg h-full">
                  <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{item.label}</h3>
                  <p className="text-slate-600">{item.value}</p>
                </div>
              );

              return item.href ? (
                <a key={index} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={index}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
