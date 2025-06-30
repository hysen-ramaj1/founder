import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Presentation, Target, TrendingUp, Users, ArrowLeft, Lightbulb, DollarSign, BarChart3 } from 'lucide-react';

const PitchDeckPage = () => {
  const slideStructure = [
    {
      slide: 'Title Slide',
      purpose: 'First impression and basic company info',
      content: ['Company name and tagline', 'Your name and title', 'Contact information', 'Company logo'],
      tips: 'Keep it clean and professional'
    },
    {
      slide: 'Problem',
      purpose: 'Define the pain point you\'re solving',
      content: ['Clear problem statement', 'Market size affected', 'Current solutions\' limitations', 'Why this matters now'],
      tips: 'Make it relatable and urgent'
    },
    {
      slide: 'Solution',
      purpose: 'Present your unique value proposition',
      content: ['How you solve the problem', 'Key features and benefits', 'Unique differentiators', 'Demo or screenshots'],
      tips: 'Show, don\'t just tell'
    },
    {
      slide: 'Market Opportunity',
      purpose: 'Demonstrate market size and potential',
      content: ['Total Addressable Market (TAM)', 'Serviceable Addressable Market (SAM)', 'Market trends and growth', 'Target customer segments'],
      tips: 'Use credible data sources'
    },
    {
      slide: 'Business Model',
      purpose: 'Explain how you make money',
      content: ['Revenue streams', 'Pricing strategy', 'Customer acquisition cost', 'Lifetime value'],
      tips: 'Be specific about numbers'
    },
    {
      slide: 'Traction',
      purpose: 'Prove market validation and momentum',
      content: ['Key metrics and KPIs', 'Customer testimonials', 'Partnerships', 'Revenue growth'],
      tips: 'Show growth trajectory'
    },
    {
      slide: 'Competition',
      purpose: 'Position yourself in the market',
      content: ['Direct and indirect competitors', 'Competitive advantages', 'Market positioning', 'Barriers to entry'],
      tips: 'Be honest but confident'
    },
    {
      slide: 'Team',
      purpose: 'Establish credibility and expertise',
      content: ['Key team members', 'Relevant experience', 'Advisory board', 'Why this team wins'],
      tips: 'Highlight relevant achievements'
    },
    {
      slide: 'Financial Projections',
      purpose: 'Show growth potential and unit economics',
      content: ['5-year revenue forecast', 'Key assumptions', 'Path to profitability', 'Unit economics'],
      tips: 'Be realistic but ambitious'
    },
    {
      slide: 'Funding Ask',
      purpose: 'Specify investment needs and use of funds',
      content: ['Amount needed', 'Use of funds breakdown', 'Milestones to achieve', 'Expected runway'],
      tips: 'Be clear and specific'
    }
  ];

  const designPrinciples = [
    {
      principle: 'Visual Hierarchy',
      description: 'Guide attention with size, color, and positioning',
      icon: <Target className="w-6 h-6" />
    },
    {
      principle: 'Consistent Design',
      description: 'Use consistent fonts, colors, and layouts throughout',
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      principle: 'Minimal Text',
      description: 'Use bullet points and avoid paragraph text',
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      principle: 'Strong Visuals',
      description: 'Include charts, graphs, and compelling images',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const presentationTips = [
    'Practice your pitch until it flows naturally',
    'Prepare for common investor questions',
    'Tell a compelling story, not just present facts',
    'Keep slides simple - they support your narrative',
    'Have backup slides for detailed questions',
    'Time your presentation to fit the allocated slot',
    'Bring energy and passion to your delivery',
    'End with a clear call to action'
  ];

  const commonMistakes = [
    'Too much text on slides',
    'Unrealistic financial projections',
    'Ignoring or underestimating competition',
    'Unclear value proposition',
    'Not addressing the market size adequately',
    'Weak team presentation',
    'Vague funding ask',
    'Poor presentation skills'
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
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl animate-float"></div>
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
              Back to Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow-lg animate-pulse-glow">
                  <Presentation className="w-8 h-8 text-orange-600 animate-float" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text">
                  Pitch Deck
                </h1>
              </div>
              <p className="text-xl text-slate-600 leading-relaxed animate-fade-in-up animate-delay-200">
                Master the art of creating compelling presentations that attract investors, 
                partners, and stakeholders to support your vision and business goals.
              </p>
            </div>
            
            <div className="animate-fade-in-up animate-delay-400">
              <img 
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Business presentation and pitch deck" 
                className="rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Pitch Deck Importance */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-orange-50 to-purple-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Investor presentation meeting" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Your Pitch Deck Matters</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Your pitch deck is often the first impression investors have of your business. 
                  A compelling presentation can open doors to funding, partnerships, and growth opportunities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-orange-600">10-15</div>
                    <div className="text-sm text-slate-600">Optimal slide count</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                    <div className="text-2xl font-bold text-purple-600">3 min</div>
                    <div className="text-sm text-slate-600">Per slide average</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Structure */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Essential Slide Structure</h2>
          <div className="space-y-6">
            {slideStructure.map((slide, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 hover-lift glow-border animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl mr-4 shadow-lg animate-pulse-glow">
                      <span className="text-orange-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 hover:text-orange-600 transition-colors duration-300">
                        {slide.slide}
                      </h3>
                      <p className="text-sm text-slate-600">{slide.purpose}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 rounded-full text-xs font-medium shadow-sm">
                    {slide.tips}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3 flex items-center">
                      <Lightbulb className="w-4 h-4 text-orange-500 mr-2" />
                      Key Content:
                    </h4>
                    <ul className="space-y-2">
                      {slide.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start group">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300"></span>
                          <span className="text-slate-700 text-sm group-hover:text-slate-900 transition-colors duration-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pitch Deck Examples Visual */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <img 
              src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200" 
              alt="Professional pitch deck slides" 
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Design That Converts</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Great pitch decks combine compelling storytelling with clean, professional design. 
                Every slide should support your narrative and guide investors toward your ask.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <Target className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-orange-900">Clear Focus</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <BarChart3 className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-blue-900">Data-Driven</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-green-900">Growth Story</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-purple-900">Team Strength</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Principles */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Design Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {designPrinciples.map((principle, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-orange-600 mr-3 transform group-hover:scale-110 transition-transform duration-300">{principle.icon}</div>
                  <h3 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                    {principle.principle}
                  </h3>
                </div>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Presentation Skills Visual */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Presentation Excellence</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-6">
                  Your delivery is just as important as your slides. Practice storytelling, 
                  maintain eye contact, and be prepared to answer tough questions with confidence.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Presentation className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-700 font-medium">Confident delivery</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Target className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-700 font-medium">Clear messaging</span>
                  </div>
                  <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
                    <Users className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="text-slate-700 font-medium">Audience engagement</span>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Confident business presentation" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Presentation Tips */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Presentation Tips</h2>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {presentationTips.map((tip, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Lightbulb className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-green-800 group-hover:text-green-900 transition-colors duration-300 font-medium">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Common Mistakes to Avoid</h2>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl shadow-lg border border-red-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonMistakes.map((mistake, index) => (
                <div 
                  key={index} 
                  className="flex items-start p-3 rounded-lg hover:bg-white/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0 transform group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="text-red-800 group-hover:text-red-900 transition-colors duration-300 font-medium">{mistake}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="mb-12 animate-on-scroll opacity-0">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Key Metrics to Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group">
              <Users className="w-10 h-10 text-blue-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-blue-600 transition-colors duration-300">Customer Metrics</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Monthly Active Users (MAU)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Customer Acquisition Cost (CAC)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Customer Lifetime Value (LTV)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Churn Rate
                </li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group animate-delay-100">
              <DollarSign className="w-10 h-10 text-green-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-green-600 transition-colors duration-300">Financial Metrics</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Monthly Recurring Revenue (MRR)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Gross Margin
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Burn Rate
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Runway
                </li>
              </ul>
            </div>
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-lift group animate-delay-200">
              <TrendingUp className="w-10 h-10 text-purple-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-purple-600 transition-colors duration-300">Growth Metrics</h3>
              <ul className="text-slate-600 text-sm space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Month-over-Month Growth
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Market Share
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Product-Market Fit Score
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Net Promoter Score (NPS)
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center min-h-screen">
  <a
    href="/Startup.pdf"
    download
    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-purple-600 text-white font-semibold rounded-full hover:from-orange-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ripple group"
  >
    <span>Pitch Deck Example</span>
    <ArrowLeft className="w-5 h-5 ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform duration-300" />
  </a>
</div>


        {/* Success Story */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 animate-gradient p-8 rounded-2xl text-white mb-8 shadow-2xl hover:shadow-3xl transition-all duration-300 animate-on-scroll opacity-0">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center">
              <Target className="w-8 h-8 mr-3 animate-pulse" />
              Success Story
            </h2>
            <p className="text-blue-100 leading-relaxed text-lg mb-4">
              "Our pitch deck helped us secure $2M in Series A funding. The key was focusing on our 
              traction slide - showing 300% month-over-month growth grabbed investors' attention immediately. 
              We spent weeks perfecting our story and practicing our delivery."
            </p>
            <p className="text-blue-200 font-semibold text-lg">- Sarah Chen, CEO of TechFlow</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center animate-on-scroll opacity-0 -mt-40">
  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-slate-100">
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
      Ready to Start Your Founder Journey?
    </h2>
    <p className="text-slate-600 mb-8 text-lg">
      You now have all the essential knowledge to begin your entrepreneurial adventure.
    </p>
    <Link
      to="/"
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-purple-600 text-white font-semibold rounded-full hover:from-orange-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 ripple group"
    >
      <span>Return to Home</span>
      <ArrowLeft className="w-5 h-5 ml-2 rotate-180 transform group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  </div>
</div>

      </div>
    </div>
  );
};

export default PitchDeckPage;