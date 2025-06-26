import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FileText, CheckCircle, AlertCircle, ArrowLeft, Clock, Users, DollarSign } from 'lucide-react';

const FoundingActPage = () => {
  const steps = [
    {
      title: 'Zgjidhni Strukturën e Biznesit',
      description: 'Vendosni midis SHPK, SHA, Ortakërisë ose Ndërmarrjes Individuale bazuar në nevojat tuaja.',
      icon: <Users className="w-6 h-6" />,
      details: [
        'Shoqëria me Përgjegjësi të Kufizuar (SHPK) - Struktura më e përdorur për biznese të vogla',
        'Shoqëria Aksionare (SHA) - E përshtatshme për biznese të mëdha me shumë aksionarë',
        'Ortakëria e Përgjithshme - Përgjegjësi e përbashkët e ortakëve',
        'Ndërmarrja Individuale - Forma më e thjeshtë për biznese të vogla'
      ]
    },
    {
      title: 'Regjistroni Emrin e Biznesit',
      description: 'Siguroni emrin e kompanisë suaj dhe kontrolloni disponueshmërinë në QKB.',
      icon: <FileText className="w-6 h-6" />,
      details: [
        'Kontrolloni disponueshmërinë e emrit në Qendrën Kombëtare të Biznesit (QKB)',
        'Paraqisni dokumentacionin e nevojshëm për regjistrimin',
        'Merrni Numrin Unik të Identifikimit (NUIS)',
        'Regjistrohuni për TVSH nëse xhiroja vjetore tejkalon 2 milionë lekë'
      ]
    },
    {
      title: 'Hapni Llogarinë Bankare',
      description: 'Hapni llogarinë bankare të biznesit dhe depozitoni kapitalin minimal.',
      icon: <DollarSign className="w-6 h-6" />,
      details: [
        'Zgjidhni një bankë të licencuar nga Banka e Shqipërisë',
        'Sillni dokumentacionin e regjistrimit dhe NUIS',
        'Depozitoni kapitalin minimal (100,000 lekë për SHPK, 10 milionë lekë për SHA)',
        'Merrni vërtetimin e depozitimit të kapitalit'
      ]
    },
    {
      title: 'Përfundoni Procedurat Ligjore',
      description: 'Finalizoni të gjitha dokumentet ligjore dhe procedurat e regjistrimit.',
      icon: <CheckCircle className="w-6 h-6" />,
      details: [
        'Nënshkruani Aktin Themelues dhe Statutin',
        'Regjistrohuni në Gjykatën e Rrethit Gjyqësor',
        'Merrni Çertifikatën e Regjistrimit të Biznesit',
        'Regjistrohuni për sigurime shoqërore nëse keni punonjës'
      ]
    }
  ];

  const requirements = [
    'Dokument identiteti i vlefshëm (letërnjoftim ose pasaportë)',
    'Akti Themelues i nënshkruar nga të gjithë themeluesit',
    'Statuti i shoqërisë (për SHPK dhe SHA)',
    'Vërtetim për depozitimin e kapitalit minimal',
    'Adresa e seli së shoqërisë në Shqipëri',
    'Deklarata e aktivitetit ekonomik që do të ushtrohet'
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
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-8 animate-fade-in-down">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-all duration-300 hover:scale-105 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="relative">
              Kthehu në Shtëpi
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg animate-pulse-glow">
                  <FileText className="w-8 h-8 text-blue-600 animate-float" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                  Akti Themelues
                </h1>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up animate-delay-200">
                Themelimi ligjor i biznesit tuaj në Shqipëri. Mësoni si të themeloni siç duhet 
                kompaninë tuaj dhe të krijoni kornizën ligjore për udhëtimin tuaj sipërmarrës.
              </p>
            </div>
            
            <div className="animate-fade-in-up animate-delay-400">
              <img 
                src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Dokumenta ligjore dhe themelimi i biznesit" 
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-on-scroll opacity-0">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group">
            <Clock className="w-8 h-8 text-blue-600 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-slate-900 mb-2">Koha e Procesit</h3>
            <p className="text-slate-600">5-10 ditë pune</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group animate-delay-100">
            <DollarSign className="w-8 h-8 text-green-600 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-slate-900 mb-2">Kostoja</h3>
            <p className="text-slate-600">15,000 - 50,000 lekë</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group animate-delay-200">
            <AlertCircle className="w-8 h-8 text-orange-600 mb-3 transform group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-semibold text-slate-900 mb-2">Vështirësia</h3>
            <p className="text-slate-600">E mesme</p>
          </div>
        </div>

        {/* Visual Guide Section */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Pse Është e Rëndësishme Themelimi Ligjor</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Themelimi i duhur i biznesit në Shqipëri ju mbron nga përgjegjësia personale, 
                  krijon besueshmëri me klientët dhe investitorët, dhe siguron strukturën ligjore 
                  të nevojshme për rritje dhe përputhshmëri me ligjet shqiptare.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">Mbrojtje e pasurisë personale</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">Përfitime tatimore dhe fleksibilitet</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">Besueshmëri profesionale</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-slate-700">Akses më i lehtë në financime</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Dokumenta ligjore të biznesit" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Step-by-Step Process */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
            Procesi Hap pas Hapi
          </h2>
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover-lift animate-on-scroll opacity-0 glow-border"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg animate-pulse-glow">
                      <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className="text-blue-600 mr-3 transform hover:scale-110 transition-transform duration-300">{step.icon}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start group">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Structure Comparison */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Zgjidhni Strukturën e Duhur</h2>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Krahasimi i strukturave të biznesit" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-bold text-blue-900 mb-2">SHPK</h4>
                  <p className="text-sm text-blue-700">Fleksibël, e thjeshtë, mbrojtje personale</p>
                  <p className="text-xs text-blue-600 mt-2">Kapital minimal: 100,000 lekë</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <h4 className="font-bold text-green-900 mb-2">SHA</h4>
                  <p className="text-sm text-green-700">E mirë për rritje kapitali, shumë aksionarë</p>
                  <p className="text-xs text-green-600 mt-2">Kapital minimal: 10 milionë lekë</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <h4 className="font-bold text-purple-900 mb-2">Ortakëri</h4>
                  <p className="text-sm text-purple-700">Pronësi e përbashkët, tatim kalimtar</p>
                  <p className="text-xs text-purple-600 mt-2">Pa kapital minimal</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <h4 className="font-bold text-orange-900 mb-2">Individuale</h4>
                  <p className="text-sm text-orange-700">Më e thjeshtë, për biznese të vogla</p>
                  <p className="text-xs text-orange-600 mt-2">Pa kapital minimal</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Çfarë do t'ju Duhet</h2>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <div 
                  key={index} 
                  className="flex items-center p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-8 rounded-2xl mb-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0">
          <div className="flex items-start">
            <AlertCircle className="w-8 h-8 text-yellow-600 mr-4 mt-1 animate-pulse" />
            <div>
              <h3 className="font-bold text-yellow-800 mb-4 text-xl">Konsiderata të Rëndësishme</h3>
              <ul className="text-yellow-700 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Konsultohuni me një avokat biznesi për struktura komplekse
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Konsideroni kërkesat dhe tarifat specifike të Shqipërisë
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mbani të gjitha dokumentet themelues në një vend të sigurt
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Përditësoni dokumentet kur bëni ndryshime në pronësi ose strukturë
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Regjistrimi në QKB është i detyrueshëm për të gjitha bizneset
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center animate-on-scroll opacity-0">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Gati për Hapin Tjetër?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Pasi biznesi juaj të jetë themeluar ligjërisht, është koha për të siguruar financim për rritje.
            </p>
            <Link
              to="/grants"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ripple group"
            >
              <span>Mësoni për Grantet dhe Financimet</span>
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundingActPage;