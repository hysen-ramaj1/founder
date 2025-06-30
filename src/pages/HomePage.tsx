import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FileText, DollarSign, Scale, Presentation, Users, Trophy, Star, ArrowRight, MapPin, Calendar, Award } from 'lucide-react';

const HomePage = () => {
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Founding Act',
      description: 'Learn the essential legal steps and documentation required to officially establish your company and begin your entrepreneurial journey.',
      path: '/founding-act',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      glowColor: 'hover:shadow-blue-500/25',
      image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Grants & Funding',
      description: 'Discover funding opportunities, grant applications, and step-by-step guidance on securing financial support for your startup.',
      path: '/grants',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      glowColor: 'hover:shadow-green-500/25',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: 'Statute',
      description: 'Understand the legal framework, corporate governance, and statutory requirements for running a compliant business.',
      path: '/statute',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      hoverColor: 'hover:from-purple-600 hover:to-purple-700',
      glowColor: 'hover:shadow-purple-500/25',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Presentation className="w-8 h-8" />,
      title: 'Pitch Deck',
      description: 'Master the art of creating compelling presentations that attract investors and communicate your vision effectively.',
      path: '/pitch-deck',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      hoverColor: 'hover:from-orange-600 hover:to-orange-700',
      glowColor: 'hover:shadow-orange-500/25',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '0k+', label: 'Founders Helped' },
    { icon: <Trophy className="w-6 h-6" />, value: '0+', label: 'Successful Startups' },
    { icon: <Star className="w-6 h-6" />, value: '0%', label: 'Success Rate' }
  ];

  const organizations = [
    {
      name: 'Protik',
      description: 'Qendër inovacioni që ofron trajnime, hackathone, dhe lidhje me rrjete ndërkombëtare.',
      icon: <Award className="w-6 h-6" />
    },
    {
      name: 'Coolab',
      description: 'Hapësirë bashkëpunimi për zhvillues, krijues dhe sipërmarrës të rinj.',
      icon: <Users className="w-6 h-6" />
    },
    {
      name: 'Yunus Social Business',
      description: 'Fokus në startup-e sociale që sjellin ndikim në komunitet.',
      icon: <Trophy className="w-6 h-6" />
    },
    {
      name: 'Ivana Foundations',
      description: 'Jep mentorim dhe grante të vogla për ide biznesi me ndikim social, veçanërisht për gra dhe të rinj nga qytete të vogla.',
      icon: <Star className="w-6 h-6" />
    }
  ];

  const events = [
    'Startup Weekend Tirana – Gara 3-ditore për ndërtimin e një ideje në ekip',
    'Women Founders Meetup – Takime për gra sipërmarrëse',
    'Protik Demo Day – Prezantim i ideve përpara jurisë dhe investitorëve',
    'Hack4Tourism – Hackathon për zgjidhje inovative në turizëm',
    'EU for Innovation Bootcamps – Trajnime intensive për të rinjtë që duan të krijojnë startup-e'
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-purple-400/5 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-fade-in-up">
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                  How to Become a
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient"> Founder</span>
                </h1>
              </div>
              
              <div className="animate-fade-in-up animate-delay-200">
                <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
                  Your comprehensive guide to entrepreneurship. From legal foundations to funding strategies, 
                  we'll help you navigate every step of your startup journey.
                </p>
              </div>

              <div className="animate-fade-in-up animate-delay-600">
                <Link
                  to="/founding-act"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ripple group"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            <div className="animate-fade-in-up animate-delay-400">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Entrepreneur working on startup" 
                  className="rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>

          <div ref={statsRef} className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in-up animate-delay-800">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 text-slate-700 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover-lift animate-scale-in"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <div className="text-blue-600 animate-pulse">{stat.icon}</div>
                <span className="font-bold text-3xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to Know
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive guides covering all aspects of founding and running a successful startup
            </p>
          </div>

          <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.path}
                className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-slate-100 hover:border-slate-200 animate-on-scroll opacity-0 hover-lift glow-border ${feature.glowColor}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 inline-flex p-3 rounded-2xl text-white ${feature.color} ${feature.hoverColor} transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-all duration-300">
                    <span className="relative">
                      Learn More
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Support in Albania Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Startupet dhe mbështetja në Shqipëri
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-on-scroll opacity-0">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <img 
                src="/image.png" 
                alt="Startup ecosystem in Albania" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="space-y-6 text-slate-700 leading-relaxed">
                  <p>
                    Ekosistemi i startup-eve në Shqipëri është në zhvillim të vazhdueshëm, me gjithnjë e më shumë hapësira që ofrojnë mbështetje për të rinjtë me ide inovative. Në qendër të kësaj lëvizjeje ndodhet Protik, një hapësirë moderne në Tiranë që ofron trajnime, mentorim, aktivitete dhe lidhje me investitorë e partnerë ndërkombëtarë.
                  </p>
                  
                  <p>
                    Protik ka organizuar dhjetëra evente dhe gara për startup-e, duke krijuar një komunitet aktiv dhe bashkëpunues.
                  </p>
                  
                  <p>
                    Përveç Protik, ekzistojnë edhe disa organizata të tjera që ndihmojnë startup-et në forma të ndryshme.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              {/* Organizations */}
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  Organizata që mbështesin startup-et në Shqipëri:
                </h3>
                <div className="space-y-4">
                  {organizations.map((org, index) => (
                    <div 
                      key={index}
                      className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <div className="flex items-start">
                        <div className="text-blue-600 mr-3 mt-1">{org.icon}</div>
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">{org.name}</h4>
                          <p className="text-sm text-slate-600">{org.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interview */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-green-600 mr-3" />
                  Intervistë e shkurtër: Si është të nisesh një startup në Shqipëri?
                </h3>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <p className="text-slate-600 leading-relaxed mb-4 italic">
                    "Në fillim kisha vetëm një ide për një aplikacion që ndihmon studentët të organizojnë mësimet. Falë një trajnimi që mora në Tiranë, mësova si të ndërtoj një plan biznesi dhe të prezantoj idenë time. Më pas u përzgjodha për një program mentorimi dhe mora edhe një ndihmë financiare të vogël për të nisur zhvillimin."
                  </p>
                  <p className="text-green-600 font-semibold">- Arian, 23 vjeç – pjesëmarrës në një trajnim startup-i</p>
                </div>
              </div>

              
{/* Events */}
<div className="flex justify-start w-full">
  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg max-w-md">
    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
      <Calendar className="w-6 h-6 text-purple-600 mr-3" />
      Disa nga eventet që janë organizuar për startup-e:
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {events.map((event, index) => (
        <div 
          key={index}
          className="flex items-start p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
        >
          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span className="text-slate-700 text-sm">{event}</span>
        </div>
      ))}
    </div>
  </div>
</div>

{/* CTA Section */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-gradient relative overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float"></div>
    <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
  </div>

  <div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll opacity-0">
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
      Ready to Start Your Journey?
    </h2>
    <p className="text-xl text-blue-100 mb-8 animate-fade-in-up animate-delay-200">
      Join thousands of successful founders who started with our comprehensive guides
    </p>
    <Link
      to="/founding-act"
      className="inline-flex items-center px-10 py-5 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 ripple group animate-fade-in-up animate-delay-400"
    >
      <span>Start with Founding Act</span>
      <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </div>
</section>


      {/* Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Animated dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;