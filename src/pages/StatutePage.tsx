import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Shield, FileText, Users, ArrowLeft, AlertTriangle, CheckCircle, BookOpen } from 'lucide-react';

const StatutePage = () => {
  const statuteTypes = [
    {
      title: 'Statuti i Shoqërisë (SHPK/SHA)',
      description: 'Rregullat e brendshme që qeverisin funksionimin e shoqërisë suaj',
      icon: <BookOpen className="w-6 h-6" />,
      details: [
        'Struktura dhe përgjegjësitë e organeve drejtuese',
        'Të drejtat e ortakëve/aksionarëve dhe procedurat e mbledhjeve',
        'Rolet e administratorëve dhe procesi i emërimit',
        'Procedurat e votimit dhe kërkesat e kuorumit'
      ]
    },
    {
      title: 'Marrëveshja e Ortakërisë',
      description: 'Kontrata midis ortakëve që përcakton marrëdhëniet e biznesit',
      icon: <Users className="w-6 h-6" />,
      details: [
        'Përqindjet e pronësisë dhe kontributet kapitale të ortakëve',
        'Struktura e menaxhimit dhe autoriteti vendimmarrës',
        'Metodat e shpërndarjes së fitimeve dhe humbjeve',
        'Procedurat e daljes së ortakëve dhe shpërbërjes'
      ]
    },
    {
      title: 'Rregullorja e Brendshme',
      description: 'Rregulla të detajuara për operacionet e përditshme të biznesit',
      icon: <FileText className="w-6 h-6" />,
      details: [
        'Politikat e burimeve njerëzore dhe procedurat e punësimit',
        'Rregullat e sigurisë dhe shëndetit në punë',
        'Procedurat financiare dhe kontrollet e brendshme',
        'Politikat e etikës dhe sjelljës profesionale'
      ]
    }
  ];

  const complianceAreas = [
    {
      area: 'Ligji i Punës',
      requirements: [
        'Përputhshmëria me Kodin e Punës të Shqipërisë',
        'Rregullat e orarit të punës dhe pushimeve',
        'Standardet e sigurisë dhe shëndetit në punë (ISHP)',
        'Politikat e përfitimeve dhe lejeve të punonjësve'
      ],
      icon: <Users className="w-6 h-6" />
    },
    {
      area: 'Përputhshmëria Tatimore',
      requirements: [
        'Deklarimi i tatimit mbi fitimin dhe TVSH',
        'Detyrimet e tatimit të punës dhe sigurimeve shoqërore',
        'Mbledhja dhe dërgesa e tatimit në burim',
        'Pagesat e tatimeve të parashikuara tremujore'
      ],
      icon: <FileText className="w-6 h-6" />
    },
    {
      area: 'Rregulloret Sektoriale',
      requirements: [
        'Kërkesat për licencim profesional',
        'Standardet specifike të industrisë',
        'Rregulloret mjedisore dhe lejet',
        'Ligjet e mbrojtjes së konsumatorit'
      ],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const governanceSteps = [
    {
      title: 'Themeloni Strukturën Drejtuese',
      description: 'Krijoni një bord funksional drejtuesish ose këshilltar',
      actions: [
        'Përcaktoni përbërjen dhe madhësinë e bordit',
        'Rekrutoni anëtarë të kualifikuar të bordit',
        'Vendosni oraret e mbledhjeve dhe procedurat',
        'Krijoni komitete të bordit nëse është e nevojshme'
      ]
    },
    {
      title: 'Sistemet e Menaxhimit të Dokumenteve',
      description: 'Mbani evidenca dhe dokumentacion të duhur',
      actions: [
        'Rezolutat korporative dhe procesverbalet e mbledhjeve',
        'Çertifikatat e aksioneve dhe menaxhimi i tabelës së kapitalit',
        'Ruajtja e kontratave dhe marrëveshjeve',
        'Evidencat financiare dhe gjurmët e auditimit'
      ]
    },
    {
      title: 'Monitorimi i Përputhshmërisë',
      description: 'Rishikim dhe përditësim i rregullt i kërkesave ligjore',
      actions: [
        'Kalendari vjetor i përputhshmërisë',
        'Konsultime të rregullta me këshilltar ligjor',
        'Përditësime të politikave dhe trajnim të punonjësve',
        'Monitorimi i rregullores së industrisë'
      ]
    }
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-float"></div>
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
                <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg animate-pulse-glow">
                  <Scale className="w-8 h-8 text-purple-600 animate-float" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                  Statuti
                </h1>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up animate-delay-200">
                Kuptoni kornizën ligjore, qeverisjen korporative dhe kërkesat statutore 
                thelbësore për drejtimin e një biznesi të përputhshëm dhe të strukturuar mirë në Shqipëri.
              </p>
            </div>
            
            <div className="animate-fade-in-up animate-delay-400">
              <img 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Libra ligjorë dhe peshore drejtësie" 
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Legal Framework Overview */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Mbledhje qeverisje korporative" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Pse Është e Rëndësishme Struktura Ligjore</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Struktura dhe qeverisja e duhur ligjore mbrojnë biznesin tuaj, sigurojnë përputhshmëri 
                  me ligjet shqiptare, dhe krijojnë themelimin për rritje të qëndrueshme dhe besim të investitorëve.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Shield className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-slate-700 font-medium">Mbrojtje ligjore dhe përputhshmëri</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Users className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-slate-700 font-medium">Strukturë e qartë qeverisje</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <FileText className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="text-slate-700 font-medium">Besim investitorësh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statutory Documents */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Dokumentet Kryesore Statutore</h2>
          <div className="space-y-8">
            {statuteTypes.map((statute, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover-lift glow-border animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-lg animate-pulse-glow">
                      <div className="text-purple-600 transform hover:scale-110 transition-transform duration-300">{statute.icon}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 hover:text-purple-600 transition-colors duration-300">
                      {statute.title}
                    </h3>
                    <p className="text-slate-600 mb-6 text-lg leading-relaxed">{statute.description}</p>
                    <ul className="space-y-3">
                      {statute.details.map((detail, detailIndex) => (
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

        {/* Compliance Visualization */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Lista kontrolli përputhshmërie biznesi" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Përputhshmëria Nuk Është Negociueshme</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Qëndrimi në përputhshmëri me rregulloret federale, shtetërore dhe lokale mbron biznesin tuaj 
                nga gjobat e kushtueshme dhe problemet ligjore. Auditimet e rregullta të përputhshmërisë 
                dhe rishikimet ligjore janë thelbësore.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-red-50 rounded-xl">
                  <div className="text-2xl font-bold text-red-600">500K+</div>
                  <div className="text-sm text-red-700">Lekë gjobë mesatare</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-xl">
                  <div className="text-2xl font-bold text-yellow-600">40%</div>
                  <div className="text-sm text-yellow-700">Biznese me shkelje</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl font-bold text-green-600">90%</div>
                  <div className="text-sm text-green-700">Të parandalueshme me planifikim</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Areas */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Fushat Kryesore të Përputhshmërisë</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {complianceAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-purple-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">{area.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {area.area}
                </h3>
                <ul className="space-y-3">
                  {area.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="text-sm text-slate-600 flex items-start group">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300"></span>
                      <span className="group-hover:text-slate-800 transition-colors duration-300">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Governance */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Korniza e Qeverisjes Korporative</h2>
          <div className="space-y-8">
            {governanceSteps.map((step, index) => (
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
                      {step.actions.map((action, actionIndex) => (
                        <li key={actionIndex} className="flex items-start group">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-slate-700 group-hover:text-slate-900 transition-colors duration-300">{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Governance Best Practices Visual */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-slate-50 to-purple-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Praktikat më të Mira të Qeverisjes</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Qeverisja e fortë krijon transparencë, llogaridhënie dhe besim me palët e interesuara. 
                  Është thelbësore për shkallëzimin e biznesit tuaj dhe tërheqjen e investimeve.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-slate-700">Dokumentimi</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-slate-700">Struktura e Bordit</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <Shield className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-slate-700">Përputhshmëria</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <Scale className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-slate-700">Transparenca</div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Mbledhje bordi korporativ" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Important Warnings */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-8 rounded-2xl mb-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-4 mt-1 animate-pulse" />
            <div>
              <h3 className="font-bold text-red-800 mb-4 text-xl">Kujtesa Kritike Përputhshmërie</h3>
              <ul className="text-red-700 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mospërputhshmëria mund të rezultojë në gjoba, penalitete ose mbyllje biznesi
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Rishikimi i rregullt ligjor është thelbësor pasi ligjet ndryshojnë shpesh
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Dokumentoni gjithçka - evidencat e duhura mbrojnë biznesin tuaj
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Konsideroni sigurimin e përgjegjësisë për drejtuesit dhe zyrtarët
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Disa industri kërkojnë licenca ose çertifikime specifike
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Praktikat më të Mira</h2>
          <div className="bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-2xl shadow-lg border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 mb-4 text-xl flex items-center">
                  <FileText className="w-6 h-6 text-purple-600 mr-2" />
                  Dokumentimi
                </h3>
                <ul className="text-slate-700 space-y-3">
                  <li className="flex items-start group">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-slate-900 transition-colors duration-300">Mbani procesverbale të detajuara mbledhjesh</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-slate-900 transition-colors duration-300">Mbani evidenca të sakta financiare</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-slate-900 transition-colors duration-300">Dokumentoni të gjitha vendimet e rëndësishme të biznesit</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-slate-900 transition-colors duration-300">Ruani dokumentet në mënyrë të sigurt dhe të aksesueshme</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-slate-900 mb-4 text-xl flex items-center">
                  <Users className="w-6 h-6 text-purple-600 mr-2" />
                  Mbështetja Profesionale
                </h3>
                <ul className="text-slate-700 space-y-3">
                  <li className="flex items-start group">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-slate-900 transition-colors duration-300">Vendosni marrëdhënie me avokat biznesi</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-slate-900 transition-colors duration-300">Punoni me kontabilist ose ekspert kontabël të kualifikuar</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-slate-900 transition-colors duration-300">Konsideroni konsulent HR për çështjet e punësimit</span>
                  </li>
                  <li className="flex items-start group">
                    <CheckCircle className="w-4 h-4 text-purple-500 mr-3 mt-1 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                    <span className="group-hover:text-slate-900 transition-colors duration-300">Bashkohuni me shoqata industriale për udhëzim</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="text-center animate-on-scroll opacity-0">
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Gati të Prezantoni Biznesin Tuaj?</h2>
            <p className="text-slate-600 mb-8 text-lg">
              Mësoni si të krijoni pitch deck bindës që tërheqin investitorë dhe partnerë.
            </p>
            <Link
              to="/pitch-deck"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ripple group"
            >
              <span>Mësoni për Pitch Deck</span>
              <ArrowLeft className="w-5 h-5 ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatutePage;