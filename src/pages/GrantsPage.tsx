import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Search, FileText, CheckCircle, ArrowLeft, Target, Calendar, Award } from 'lucide-react';

const GrantsPage = () => {
  const grantTypes = [
    {
      title: 'Grantet Qeveritare',
      description: 'Programe financimi nga Ministria e Ekonomisë dhe institucionet shtetërore',
      examples: ['AIDA - Agjencia Shqiptare e Zhvillimit të Investimeve', 'Fondi Shqiptar i Zhvillimit', 'Programi i Mbështetjes për NVM', 'Grantet për Inovacionin'],
      amount: '500,000 - 5,000,000 lekë',
      difficulty: 'E lartë',
      icon: <Award className="w-6 h-6" />
    },
    {
      title: 'Grantet e BE-së',
      description: 'Financime nga Bashkimi Evropian për bizneset në Shqipëri',
      examples: ['IPA - Instrumenti i Para-anëtarësimit', 'COSME - Program për NVM', 'Horizon Europe', 'INTERREG'],
      amount: '1,000,000 - 10,000,000 lekë',
      difficulty: 'E lartë',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Grantet Private dhe Ndërkombëtare',
      description: 'Financime nga organizata private dhe ndërkombëtare',
      examples: ['USAID', 'GIZ', 'Fondacioni Soros', 'British Council'],
      amount: '200,000 - 2,000,000 lekë',
      difficulty: 'E mesme',
      icon: <DollarSign className="w-6 h-6" />
    }
  ];

  const applicationSteps = [
    {
      title: 'Kërkoni dhe Identifikoni Mundësitë',
      description: 'Gjeni grante që përputhen me modelin dhe misionin tuaj të biznesit',
      details: [
        'Përdorni faqen e AIDA-s dhe Ministrisë së Ekonomisë',
        'Regjistrohuni në portalin e-Albania për njoftimet',
        'Ndiqni organizatat financuese në rrjetet sociale',
        'Bashkohuni me Dhomën e Tregtisë dhe Industrisë'
      ]
    },
    {
      title: 'Përgatitni Materialet e Aplikimit',
      description: 'Mblidhni të gjitha dokumentet dhe informacionet e nevojshme',
      details: [
        'Plani i biznesit dhe projeksionet financiare',
        'Përshkrimi i detajuar i projektit dhe afatet kohore',
        'Buxheti i detajuar dhe justifikimi i kostove',
        'CV-të e ekipit dhe eksperienca relevante'
      ]
    },
    {
      title: 'Shkruani një Propozim Bindës',
      description: 'Krijoni një narrativë bindëse që demonstron ndikimin',
      details: [
        'Filloni me një përmbledhje ekzekutive tërheqëse',
        'Përcaktoni qartë problemin që po zgjidhni',
        'Shpjegoni zgjidhjen tuaj dhe unikalitetin e saj',
        'Demonstroni rezultatet dhe ndikimin e matshëm'
      ]
    },
    {
      title: 'Paraqitni dhe Ndiqni',
      description: 'Përfundoni aplikimin tuaj dhe mbani komunikimin',
      details: [
        'Paraqitni mirë para afatit të fundit',
        'Mbani evidenca të detajuara të të gjitha aplikimeve',
        'Ndiqni në mënyrë të përshtatshme pa qenë shumë insistues',
        'Jini të përgatitur për pyetje shtesë ose prezantime'
      ]
    }
  ];

  const tips = [
    'Filloni kërkimin tuaj herët - aplikimi për grante kërkon kohë',
    'Lexoni të gjitha udhëzimet me kujdes dhe ndiqini ato saktësisht',
    'Përshtatni çdo aplikim për kërkesat specifike të grantit',
    'Keni të tjerë që të rishikojnë aplikimin tuaj para paraqitjes',
    'Mbani evidenca të detajuara të të gjitha aplikimeve dhe rezultateve',
    'Ndërtoni marrëdhënie me zyrtarët e programeve kur është e mundur'
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
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
                <div className="p-3 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg animate-pulse-glow">
                  <DollarSign className="w-8 h-8 text-green-600 animate-float" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                  Grantet & Financimi
                </h1>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up animate-delay-200">
                Zbuloni mundësitë e financimit në Shqipëri dhe mësoni si të aplikoni 
                me sukses për grante që do të ndihmojnë rritjen dhe inovacionin e startup-it tuaj.
              </p>
            </div>
            
            <div className="animate-fade-in-up animate-delay-400">
              <img 
                src="https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Koncepti i parave dhe financimit" 
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Funding Landscape */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Procesi i aplikimit për grant" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Peizazhi i Financimit në Shqipëri</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Qeveria shqiptare dhe partnerët ndërkombëtarë ofrojnë mbi 2 miliardë lekë në grante 
                  çdo vit për bizneset e vogla dhe startup-et. Çelësi është të dini ku të kërkoni 
                  dhe si ta poziciononi aplikimin tuaj për sukses.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-green-600">2B+</div>
                    <div className="text-sm text-slate-600">Lekë në dispozicion vjetore</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">25%</div>
                    <div className="text-sm text-slate-600">Shkalla e suksesit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Grant Types */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Llojet e Granteve të Disponueshme</h2>
          <div className="space-y-6">
            {grantTypes.map((grant, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover-lift glow-border animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg animate-pulse-glow">
                      <div className="text-green-600 transform hover:scale-110 transition-transform duration-300">{grant.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 hover:text-green-600 transition-colors duration-300">
                      {grant.title}
                    </h3>
                    <p className="text-slate-600 mb-4 text-lg leading-relaxed">{grant.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <span className="text-sm font-semibold text-slate-700">Shuma Tipike:</span>
                        <p className="text-green-600 font-bold text-lg">{grant.amount}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-lg">
                        <span className="text-sm font-semibold text-slate-700">Vështirësia:</span>
                        <p className={`font-bold text-lg ${grant.difficulty === 'E lartë' ? 'text-red-600' : 'text-yellow-600'}`}>
                          {grant.difficulty}
                        </p>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm font-semibold text-slate-700 mb-3 block">Shembuj:</span>
                      <div className="flex flex-wrap gap-2">
                        {grant.examples.map((example, exampleIndex) => (
                          <span
                            key={exampleIndex}
                            className="px-4 py-2 bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 rounded-full text-sm font-medium hover:from-green-100 hover:to-green-200 hover:text-green-700 transition-all duration-300 transform hover:scale-105"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story Visual */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Ekip startup-i duke festuar financimin" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Historia e Suksesit: Udhëtimi i TechAlb për 15 Milionë Lekë Grant</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                "Siguruam grantin tonë të parë nga AIDA prej 3 milionë lekësh duke u fokusuar në teknologjinë 
                tonë unike të AI për bujqësinë. Kjo na çoi në runde shtesë financimi që arritën në 15 milionë lekë. 
                Çelësi ishte demonstrimi i nevojës së qartë të tregut dhe ekspertizës teknike të ekipit tonë."
              </p>
              <p className="text-green-600 font-semibold">- Andi Hoxha, CEO i TechAlb</p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Procesi i Aplikimit</h2>
          <div className="space-y-8">
            {applicationSteps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover-lift glow-border animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg animate-pulse-glow">
                      <span className="text-blue-600 font-bold text-xl">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
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

        {/* Grant Writing Tips Visual */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Shkrim Grantesh me Cilësi</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Një propozim granti i shkruar mirë tregon një histori bindëse duke adresuar 
                  të gjitha kërkesat teknike. Fokusohuni në ndikimin, realizueshmërinë dhe 
                  kualifikimet unike të ekipit tuaj.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Target className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-slate-700 font-medium">Përkufizim i qartë i problemit</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Award className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-slate-700 font-medium">Qasje inovative e zgjidhjes</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-slate-700 font-medium">Afat kohor dhe buxhet realist</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Shkrim grantesh dhe procesi i aplikimit" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Këshilla Profesionale për Sukses</h2>
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-blue-200">
            <div className="space-y-4">
              {tips.map((tip, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-blue-800 group-hover:text-blue-900 transition-colors duration-300 font-medium">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Burime të Dobishme</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group">
              <Search className="w-10 h-10 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-blue-600 transition-colors duration-300">Baza të Dhënash Grantesh</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  AIDA.gov.al - Agjencia Shqiptare e Zhvillimit të Investimeve
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Ministria e Ekonomisë dhe Financave
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  e-Albania - Portali qeveritar
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  EU4Business - Programet e BE-së
                </li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group animate-delay-100">
              <FileText className="w-10 h-10 text-green-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-green-600 transition-colors duration-300">Mjete Aplikimi</h3>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Software dhe template për shkrim grantesh
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Spreadsheet për ndjekjen e buxhetit
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Lista kontrolli për rishikim propozimi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Kalendar afatesh aplikimi
                </li>
              </ul>
    
            </div>
          </div>
      <a
  href="/dokument.pdf"
  download
  className="flex justify-center mx-auto mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ripple group max-w-max"
>
  <span>Shkarko Dokumentin</span>
  <ArrowLeft className="w-5 h-5 ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform duration-300" />
</a>

        </div>
       

        {/* Next Steps */}
        <div className="text-center animate-on-scroll opacity-0">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Gati të Mësoni për Strukturën Ligjore?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Kuptimi i statuteve dhe kërkesave ligjore është thelbësor për përputhshmëri dhe rritje.
            </p>
            <Link
              to="/statute"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ripple group"
            >
              <span>Mësoni për Statutet</span>
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
     
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrantsPage;