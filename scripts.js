
// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initHeroSection();
    initSocialProofBar();
    initCTASections();
    initStatsSection();
    initWhoWeHelpSection();
    initTestimonialsSection();
    initTrustSection();
    initContentPreview();
    initNewsletterSection();
    initContactForm();
    initFinalCTA();
    initFooter();
    initProgressTracker();
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Navigation Component
function initNavigation() {
    const navHTML = `
        <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
            <div class="container mx-auto px-4">
                <div class="flex items-center justify-between h-14 md:h-16">
                    <!-- Logo -->
                    <div class="flex items-center">
                        <div class="flex items-center space-x-2">
                            <div class="w-6 md:w-8 h-6 md:h-8 bg-flint-maroon transform rotate-45 rounded-sm"></div>
                            <span class="font-montserrat text-xl md:text-2xl font-bold text-flint-maroon">Flint</span>
                        </div>
                    </div>

                    <!-- Desktop Navigation -->
                    <div class="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <a href="#services" class="nav-link font-montserrat text-sm xl:text-base text-gray-700 hover:text-flint-maroon transition-colors duration-300">Our Services</a>
                        <a href="#who-we-help" class="nav-link font-montserrat text-sm xl:text-base text-gray-700 hover:text-flint-maroon transition-colors duration-300">Who We Help</a>
                        <a href="#calculators" class="nav-link font-montserrat text-sm xl:text-base text-gray-700 hover:text-flint-maroon transition-colors duration-300">Calculators</a>
                        <a href="#learn" class="nav-link font-montserrat text-sm xl:text-base text-gray-700 hover:text-flint-maroon transition-colors duration-300">Learn</a>
                        <a href="#about" class="nav-link font-montserrat text-sm xl:text-base text-gray-700 hover:text-flint-maroon transition-colors duration-300">About</a>
                        <a href="#commercial" class="nav-link font-montserrat text-sm xl:text-base text-gray-700 hover:text-flint-maroon transition-colors duration-300">Commercial Investment</a>
                    </div>

                    <!-- Contact Button -->
                    <div class="hidden md:block">
                        <button onclick="scrollToContact()" class="btn-hover-scale bg-flint-coral hover:bg-flint-coral/90 text-white px-4 md:px-6 py-2 font-montserrat font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base">
                            CONTACT US
                        </button>
                    </div>

                    <!-- Mobile Menu Button -->
                    <div class="md:hidden">
                        <button onclick="toggleMobileMenu()" class="text-flint-maroon hover:text-flint-coral transition-colors duration-300 p-2">
                            <svg id="menu-icon" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <svg id="close-icon" class="w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="mobile-menu md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 absolute top-full left-0 right-0">
                    <div class="px-4 py-6 space-y-4">
                        <a href="#services" class="block font-montserrat text-gray-700 hover:text-flint-maroon transition-colors duration-300 py-2 text-base" onclick="closeMobileMenu()">Our Services</a>
                        <a href="#who-we-help" class="block font-montserrat text-gray-700 hover:text-flint-maroon transition-colors duration-300 py-2 text-base" onclick="closeMobileMenu()">Who We Help</a>
                        <a href="#calculators" class="block font-montserrat text-gray-700 hover:text-flint-maroon transition-colors duration-300 py-2 text-base" onclick="closeMobileMenu()">Calculators</a>
                        <a href="#learn" class="block font-montserrat text-gray-700 hover:text-flint-maroon transition-colors duration-300 py-2 text-base" onclick="closeMobileMenu()">Learn</a>
                        <a href="#about" class="block font-montserrat text-gray-700 hover:text-flint-maroon transition-colors duration-300 py-2 text-base" onclick="closeMobileMenu()">About</a>
                        <a href="#commercial" class="block font-montserrat text-gray-700 hover:text-flint-maroon transition-colors duration-300 py-2 text-base" onclick="closeMobileMenu()">Commercial Investment</a>
                        <button onclick="scrollToContact(); closeMobileMenu();" class="w-full bg-flint-coral hover:bg-flint-coral/90 text-white py-3 font-montserrat font-semibold rounded-full transition-all duration-300 hover:scale-105 mt-4">
                            CONTACT US
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    `;
    
    document.getElementById('navigation').innerHTML = navHTML;
}

// Hero Section Component
function initHeroSection() {
    const heroHTML = `
        <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
            <!-- Background Animation -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute top-10 left-20 w-32 h-32 rounded-full bg-white animate-float"></div>
                <div class="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-flint-coral animate-float" style="animation-delay: 1s;"></div>
                <div class="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-white animate-float" style="animation-delay: 2s;"></div>
            </div>
            
            <div class="container mx-auto px-6 text-center relative z-10">
                <div class="animate-fade-in">
                    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Ignite Your Business
                        <span class="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent block">
                            With Flint
                        </span>
                    </h1>
                    
                    <p class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                        The all-in-one platform that sparks innovation and accelerates growth. 
                        Transform your ideas into reality with cutting-edge tools and seamless integration.
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button class="btn-hover-scale bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg">
                            Start Free Trial
                            <svg class="ml-2 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </button>
                        
                        <button class="btn-hover-scale border border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-lg">
                            <svg class="mr-2 h-5 w-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            Watch Demo
                        </button>
                    </div>
                    
                    <div class="mt-12 text-gray-400">
                        <p class="mb-4">Trusted by 10,000+ companies worldwide</p>
                        <div class="flex justify-center items-center space-x-8 opacity-60">
                            <div class="w-24 h-8 bg-white/10 rounded"></div>
                            <div class="w-24 h-8 bg-white/10 rounded"></div>
                            <div class="w-24 h-8 bg-white/10 rounded"></div>
                            <div class="w-24 h-8 bg-white/10 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('hero-section').innerHTML = heroHTML;
}

// Social Proof Bar Component
function initSocialProofBar() {
    const socialProofHTML = `
        <section class="py-12 bg-white border-b border-gray-200">
            <div class="container mx-auto px-4">
                <p class="text-center text-gray-600 font-montserrat mb-8 text-lg">
                    Trusted by Australia's leading financial institutions
                </p>
                <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                    <div class="flex items-center justify-center h-16 w-24 text-gray-400 font-montserrat font-bold text-lg hover:text-flint-maroon transition-colors duration-300">CBA</div>
                    <div class="flex items-center justify-center h-16 w-24 text-gray-400 font-montserrat font-bold text-lg hover:text-flint-maroon transition-colors duration-300">ANZ</div>
                    <div class="flex items-center justify-center h-16 w-24 text-gray-400 font-montserrat font-bold text-lg hover:text-flint-maroon transition-colors duration-300">NAB</div>
                    <div class="flex items-center justify-center h-16 w-24 text-gray-400 font-montserrat font-bold text-lg hover:text-flint-maroon transition-colors duration-300">WBC</div>
                    <div class="flex items-center justify-center h-16 w-24 text-gray-400 font-montserrat font-bold text-lg hover:text-flint-maroon transition-colors duration-300">MQG</div>
                    <div class="flex items-center justify-center h-16 w-24 text-gray-400 font-montserrat font-bold text-lg hover:text-flint-maroon transition-colors duration-300">ING</div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('social-proof-bar').innerHTML = socialProofHTML;
}

// CTA Sections Component
function initCTASections() {
    const ctaHTML1 = `
        <section class="py-8 bg-flint-cream-alt border-t border-gray-200">
            <div class="container mx-auto px-4 text-center">
                <h3 class="font-montserrat text-2xl font-bold text-flint-maroon mb-2">
                    Get Free Advice
                </h3>
                <p class="font-montserrat text-gray-700 mb-6">
                    Ready to take the next step? Our expert advisers are here to help.
                </p>
                <div class="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <button onclick="scrollToContact()" class="btn-hover-scale bg-flint-coral hover:bg-flint-coral/90 text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                        Get Free Advice
                    </button>
                    <button onclick="callAdviser()" class="btn-hover-scale border border-flint-maroon text-flint-maroon hover:bg-flint-maroon hover:text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                        Talk to an Adviser Today
                    </button>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('cta-section-1').innerHTML = ctaHTML1;
    
    // Add other CTA sections with different content
    const ctaHTML2 = `
        <section class="py-8 bg-flint-cream-alt border-t border-gray-200">
            <div class="container mx-auto px-4 text-center">
                <h3 class="font-montserrat text-2xl font-bold text-flint-maroon mb-2">
                    Check Your Borrowing Power
                </h3>
                <p class="font-montserrat text-gray-700 mb-6">
                    Discover how much you could borrow with our free assessment.
                </p>
                <div class="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <button onclick="scrollToContact()" class="btn-hover-scale bg-flint-coral hover:bg-flint-coral/90 text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                        Check Your Borrowing Power
                    </button>
                    <button onclick="callAdviser()" class="btn-hover-scale border border-flint-maroon text-flint-maroon hover:bg-flint-maroon hover:text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                        Talk to an Adviser Today
                    </button>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('cta-section-2').innerHTML = ctaHTML2;
    
    // Continue with other CTA sections...
    const ctaHTML3 = `
        <section class="py-8 bg-flint-cream-alt border-t border-gray-200">
            <div class="container mx-auto px-4 text-center">
                <h3 class="font-montserrat text-2xl font-bold text-flint-maroon mb-2">
                    Talk to an Adviser Today
                </h3>
                <p class="font-montserrat text-gray-700 mb-6">
                    Get personalized advice tailored to your unique situation.
                </p>
                <div class="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <button onclick="callAdviser()" class="btn-hover-scale bg-flint-coral hover:bg-flint-coral/90 text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                        Talk to an Adviser Today
                    </button>
                    <button onclick="scrollToContact()" class="btn-hover-scale border border-flint-maroon text-flint-maroon hover:bg-flint-maroon hover:text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                        Get Free Advice
                    </button>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('cta-section-3').innerHTML = ctaHTML3;
    
    const ctaHTML4 = `
        <section class="py-8 bg-flint-cream-alt border-t border-gray-200">
            <div class="container mx-auto px-4 text-center">
                <h3 class="font-montserrat text-2xl font-bold text-flint-maroon mb-2">
                    Get Free Advice
                </h3>
                <p class="font-montserrat text-gray-700 mb-6">
                    Join thousands of satisfied clients who've achieved their property dreams.
                </p>
                <div class="space-y-3 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                    <button onclick="scrollToContact()" class="btn-hover-scale bg-flint-coral hover:bg-flint-coral/90 text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                        Get Free Advice
                    </button>
                    <button onclick="scrollToContact()" class="btn-hover-scale border border-flint-maroon text-flint-maroon hover:bg-flint-maroon hover:text-white px-6 py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                        Check Your Borrowing Power
                    </button>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('cta-section-4').innerHTML = ctaHTML4;
}

// Stats Section Component
function initStatsSection() {
    const statsHTML = `
        <section class="py-20 bg-gradient-to-r from-flint-maroon to-flint-maroon/90">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="text-center text-white animate-fade-in-up">
                        <div class="text-4xl mb-4 animate-float">💰</div>
                        <div class="font-montserrat text-4xl lg:text-5xl font-bold mb-2">$4B+</div>
                        <div class="font-montserrat text-lg text-white/90">Loans Settled</div>
                    </div>
                    <div class="text-center text-white animate-fade-in-up" style="animation-delay: 0.2s;">
                        <div class="text-4xl mb-4 animate-float" style="animation-delay: 0.5s;">😊</div>
                        <div class="font-montserrat text-4xl lg:text-5xl font-bold mb-2">5000+</div>
                        <div class="font-montserrat text-lg text-white/90">Happy Clients</div>
                    </div>
                    <div class="text-center text-white animate-fade-in-up" style="animation-delay: 0.4s;">
                        <div class="text-4xl mb-4 animate-float" style="animation-delay: 1s;">📈</div>
                        <div class="font-montserrat text-4xl lg:text-5xl font-bold mb-2">$120M+</div>
                        <div class="font-montserrat text-lg text-white/90">Interest Saved</div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('stats-section').innerHTML = statsHTML;
}

// Who We Help Section Component
function initWhoWeHelpSection() {
    const whoWeHelpHTML = `
        <section id="who-we-help" class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16 animate-fade-in-up">
                    <h2 class="font-montserrat text-4xl lg:text-5xl font-bold text-flint-maroon mb-6">
                        Who We Help
                    </h2>
                    <p class="font-montserrat text-xl text-gray-700">
                        Tailored finance solutions for every stage of your journey.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="card-hover bg-white border border-gray-200 rounded-lg p-6 text-center">
                        <div class="text-5xl mb-4">🏠</div>
                        <h3 class="font-montserrat font-semibold text-xl text-flint-maroon mb-3">
                            First Home Buyers
                        </h3>
                        <p class="font-montserrat text-gray-600">
                            Navigate the property market with confidence. We'll guide you through every step of your first home purchase.
                        </p>
                    </div>
                    
                    <div class="card-hover bg-white border border-gray-200 rounded-lg p-6 text-center">
                        <div class="text-5xl mb-4">📊</div>
                        <h3 class="font-montserrat font-semibold text-xl text-flint-maroon mb-3">
                            Property Investors
                        </h3>
                        <p class="font-montserrat text-gray-600">
                            Build your property portfolio with strategic financing solutions tailored to maximize your investment returns.
                        </p>
                    </div>
                    
                    <div class="card-hover bg-white border border-gray-200 rounded-lg p-6 text-center">
                        <div class="text-5xl mb-4">🔄</div>
                        <h3 class="font-montserrat font-semibold text-xl text-flint-maroon mb-3">
                            Refinancing
                        </h3>
                        <p class="font-montserrat text-gray-600">
                            Save thousands with better rates and terms. Let us find you a mortgage that works harder for your money.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('who-we-help-section').innerHTML = whoWeHelpHTML;
}

// Testimonials Section Component
function initTestimonialsSection() {
    const testimonialsHTML = `
        <section class="py-20 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="text-center mb-16">
                    <h2 class="text-4xl font-bold text-gray-900 mb-4">
                        Loved by Thousands
                    </h2>
                    <p class="text-xl text-gray-600">
                        See what our customers are saying about Flint
                    </p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <div class="card-hover bg-white border-0 shadow-lg rounded-lg p-8">
                        <div class="flex mb-4">
                            <span class="text-yellow-400">★★★★★</span>
                        </div>
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            "Flint transformed our development process. We're shipping features 3x faster than before."
                        </p>
                        <div>
                            <p class="font-semibold text-gray-900">Sarah Chen</p>
                            <p class="text-gray-600">CTO, TechFlow</p>
                        </div>
                    </div>
                    
                    <div class="card-hover bg-white border-0 shadow-lg rounded-lg p-8">
                        <div class="flex mb-4">
                            <span class="text-yellow-400">★★★★★</span>
                        </div>
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            "The analytics insights helped us increase our conversion rate by 250%. Incredible platform."
                        </p>
                        <div>
                            <p class="font-semibold text-gray-900">Marcus Rodriguez</p>
                            <p class="text-gray-600">Founder, GrowthLab</p>
                        </div>
                    </div>
                    
                    <div class="card-hover bg-white border-0 shadow-lg rounded-lg p-8">
                        <div class="flex mb-4">
                            <span class="text-yellow-400">★★★★★</span>
                        </div>
                        <p class="text-gray-700 mb-6 leading-relaxed">
                            "Best investment we've made. The team collaboration features alone saved us months of work."
                        </p>
                        <div>
                            <p class="font-semibold text-gray-900">Emily Watson</p>
                            <p class="text-gray-600">VP Engineering, DataCorp</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('testimonials-section').innerHTML = testimonialsHTML;
}

// Trust Section Component
function initTrustSection() {
    const trustHTML = `
        <section class="py-16 bg-flint-cream">
            <div class="container mx-auto px-4">
                <div class="text-center mb-12 animate-fade-in-up">
                    <h2 class="font-montserrat text-3xl lg:text-4xl font-bold text-flint-maroon mb-4">
                        Award-Winning Excellence
                    </h2>
                    <p class="font-montserrat text-lg text-gray-700">
                        Recognized for our commitment to exceptional service and results.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div class="card-hover text-center bg-white border-0 shadow-lg rounded-lg p-6">
                        <div class="text-3xl mb-4">🏆</div>
                        <h3 class="font-montserrat font-semibold text-lg text-flint-maroon mb-2">
                            Best Broker of the Year
                        </h3>
                        <p class="font-montserrat text-sm text-gray-600">
                            Australian Mortgage Awards • 2024
                        </p>
                    </div>
                    
                    <div class="card-hover text-center bg-white border-0 shadow-lg rounded-lg p-6">
                        <div class="text-3xl mb-4">🏆</div>
                        <h3 class="font-montserrat font-semibold text-lg text-flint-maroon mb-2">
                            Excellence in Customer Service
                        </h3>
                        <p class="font-montserrat text-sm text-gray-600">
                            Finance Industry Awards • 2023
                        </p>
                    </div>
                    
                    <div class="card-hover text-center bg-white border-0 shadow-lg rounded-lg p-6">
                        <div class="text-3xl mb-4">🏆</div>
                        <h3 class="font-montserrat font-semibold text-lg text-flint-maroon mb-2">
                            Top Performing Broker
                        </h3>
                        <p class="font-montserrat text-sm text-gray-600">
                            Mortgage Professional Australia • 2023
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('trust-section').innerHTML = trustHTML;
}

// Content Preview Component
function initContentPreview() {
    const contentHTML = `
        <section class="py-20 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16 animate-fade-in-up">
                    <h2 class="font-montserrat text-4xl lg:text-5xl font-bold text-flint-maroon mb-6">
                        Latest Insights
                    </h2>
                    <p class="font-montserrat text-xl text-gray-700">
                        Stay informed with our expert analysis and property market updates.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="card-hover bg-white border-0 shadow-lg rounded-lg overflow-hidden">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=250&fit=crop" alt="First Home Buyer's Guide" class="w-full h-48 object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="bg-flint-coral text-white px-2 py-1 rounded text-sm font-montserrat font-medium">Guide</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-montserrat font-semibold text-xl text-flint-maroon mb-3">
                                First Home Buyer's Guide 2024
                            </h3>
                            <p class="font-montserrat text-gray-600 mb-4">
                                Everything you need to know about purchasing your first property in Australia.
                            </p>
                            <button class="btn-hover-scale border border-flint-coral text-flint-coral hover:bg-flint-coral hover:text-white font-montserrat px-4 py-2 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                    
                    <div class="card-hover bg-white border-0 shadow-lg rounded-lg overflow-hidden">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop" alt="Investment Property Strategies" class="w-full h-48 object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="bg-flint-coral text-white px-2 py-1 rounded text-sm font-montserrat font-medium">Investment</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-montserrat font-semibold text-xl text-flint-maroon mb-3">
                                Investment Property Strategies
                            </h3>
                            <p class="font-montserrat text-gray-600 mb-4">
                                Maximize your property investment returns with expert insights and tips.
                            </p>
                            <button class="btn-hover-scale border border-flint-coral text-flint-coral hover:bg-flint-coral hover:text-white font-montserrat px-4 py-2 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                    
                    <div class="card-hover bg-white border-0 shadow-lg rounded-lg overflow-hidden">
                        <div class="relative">
                            <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop" alt="Interest Rate Outlook" class="w-full h-48 object-cover">
                            <div class="absolute top-4 left-4">
                                <span class="bg-flint-coral text-white px-2 py-1 rounded text-sm font-montserrat font-medium">Market Update</span>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="font-montserrat font-semibold text-xl text-flint-maroon mb-3">
                                Interest Rate Outlook
                            </h3>
                            <p class="font-montserrat text-gray-600 mb-4">
                                What the latest RBA decisions mean for your mortgage and refinancing options.
                            </p>
                            <button class="btn-hover-scale border border-flint-coral text-flint-coral hover:bg-flint-coral hover:text-white font-montserrat px-4 py-2 rounded">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('content-preview').innerHTML = contentHTML;
}

// Newsletter Section Component
function initNewsletterSection() {
    const newsletterHTML = `
        <section class="py-16 bg-gradient-to-r from-flint-maroon to-flint-maroon/95">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto text-center">
                    <div class="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
                        <h2 class="font-montserrat text-3xl font-bold text-white mb-4">
                            Stay Ahead of the Market
                        </h2>
                        <p class="font-montserrat text-white/90 text-lg mb-6">
                            Get weekly insights, rate updates, and expert tips delivered straight to your inbox.
                        </p>
                        <form onsubmit="handleNewsletterSubmit(event)" class="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                class="form-input flex-1 bg-white/20 border border-white/30 text-white placeholder-white/70 font-montserrat px-4 py-2 rounded"
                                required
                            />
                            <button 
                                type="submit"
                                class="btn-hover-scale bg-flint-coral hover:bg-flint-coral/90 text-white px-8 py-2 font-montserrat font-semibold rounded"
                            >
                                Subscribe Free
                            </button>
                        </form>
                        <p class="text-white/70 text-sm mt-4">
                            No spam, unsubscribe anytime. We respect your privacy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('newsletter-section').innerHTML = newsletterHTML;
}

// Contact Form Component
function initContactForm() {
    const contactHTML = `
        <section id="contact-form" class="py-20 bg-gray-50">
            <div class="container mx-auto px-4">
                <div class="max-w-2xl mx-auto text-center mb-12">
                    <h2 class="font-montserrat text-4xl font-bold text-flint-maroon mb-4">
                        Get Your Free Consultation
                    </h2>
                    <p class="font-montserrat text-lg text-gray-700">
                        Ready to take the next step? Fill out the form below and we'll be in touch within 24 hours.
                    </p>
                </div>
                
                <div class="max-w-lg mx-auto">
                    <form onsubmit="handleContactSubmit(event)" class="bg-white rounded-lg shadow-lg p-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label class="block text-gray-700 font-montserrat font-medium mb-2">First Name</label>
                                <input type="text" name="firstName" class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-flint-coral" required>
                            </div>
                            <div>
                                <label class="block text-gray-700 font-montserrat font-medium mb-2">Last Name</label>
                                <input type="text" name="lastName" class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-flint-coral" required>
                            </div>
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-gray-700 font-montserrat font-medium mb-2">Email</label>
                            <input type="email" name="email" class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-flint-coral" required>
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-gray-700 font-montserrat font-medium mb-2">Phone</label>
                            <input type="tel" name="phone" class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-flint-coral" required>
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-gray-700 font-montserrat font-medium mb-2">How can we help?</label>
                            <select name="service" class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-flint-coral" required>
                                <option value="">Select a service</option>
                                <option value="first-home">First Home Loan</option>
                                <option value="investment">Investment Property</option>
                                <option value="refinancing">Refinancing</option>
                                <option value="construction">Construction Loan</option>
                                <option value="commercial">Commercial Loan</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div class="mb-6">
                            <label class="block text-gray-700 font-montserrat font-medium mb-2">Message (Optional)</label>
                            <textarea name="message" rows="4" class="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-flint-coral" placeholder="Tell us more about your situation..."></textarea>
                        </div>
                        
                        <button type="submit" class="btn-hover-scale w-full bg-flint-coral hover:bg-flint-coral/90 text-white py-3 font-montserrat font-semibold rounded-lg transition-all duration-300">
                            Get My Free Consultation
                        </button>
                        
                        <p class="text-sm text-gray-600 text-center mt-4">
                            By submitting this form, you agree to our Privacy Policy and Terms of Service.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('contact-form').innerHTML = contactHTML;
}

// Final CTA Component
function initFinalCTA() {
    const finalCTAHTML = `
        <section class="py-20 bg-gradient-to-r from-flint-maroon via-flint-maroon/95 to-flint-maroon relative overflow-hidden">
            <!-- Abstract Background Shapes -->
            <div class="absolute inset-0">
                <div class="absolute top-10 left-20 w-32 h-32 rounded-full bg-white/10 animate-float"></div>
                <div class="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-flint-coral/30 animate-float" style="animation-delay: 1s;"></div>
                <div class="absolute top-1/2 right-1/3 w-16 h-16 rounded-full bg-white/5 animate-float" style="animation-delay: 2s;"></div>
            </div>
            
            <div class="container mx-auto px-4 text-center relative">
                <div class="max-w-4xl mx-auto animate-fade-in-up">
                    <h2 class="font-montserrat text-4xl lg:text-6xl font-bold text-white mb-6">
                        Tailored solutions for 
                        <span class="text-flint-coral">every scenario</span>
                    </h2>
                    <p class="font-montserrat text-xl text-white/90 mb-8 leading-relaxed">
                        Whether you're buying your first home, expanding your investment portfolio, or refinancing for better rates, we're here to make it happen.
                    </p>
                    <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                        <button onclick="scrollToContact()" class="btn-hover-scale bg-flint-coral hover:bg-flint-coral/90 text-white px-8 py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-300">
                            Start Your Journey Today
                        </button>
                        <button onclick="callAdviser()" class="btn-hover-scale border border-white text-white hover:bg-white hover:text-flint-maroon px-8 py-4 text-lg font-montserrat font-semibold rounded-lg transition-all duration-300">
                            Call (02) 1234 5678
                        </button>
                    </div>
                </div>
            </div>
        </section>
    `;
    
    document.getElementById('final-cta').innerHTML = finalCTAHTML;
}

// Footer Component
function initFooter() {
    const footerHTML = `
        <footer class="bg-gray-900 text-white py-16">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <!-- Company Info -->
                    <div>
                        <h3 class="font-montserrat text-2xl font-bold text-flint-coral mb-4">
                            Flint Group
                        </h3>
                        <p class="font-montserrat text-gray-300 mb-4">
                            Australia's trusted mortgage brokers, delivering tailored finance solutions with heart.
                        </p>
                        <div class="space-y-2 text-sm text-gray-400">
                            <p>📍 123 Finance Street, Sydney NSW 2000</p>
                            <p>📞 (02) 1234 5678</p>
                            <p>✉️ hello@flintgroup.au</p>
                        </div>
                    </div>
                    
                    <!-- Quick Links -->
                    <div>
                        <h4 class="font-montserrat font-semibold mb-4">Services</h4>
                        <ul class="space-y-2 text-sm text-gray-300">
                            <li><a href="#" class="hover:text-flint-coral transition-colors">First Home Loans</a></li>
                            <li><a href="#" class="hover:text-flint-coral transition-colors">Investment Loans</a></li>
                            <li><a href="#" class="hover:text-flint-coral transition-colors">Refinancing</a></li>
                            <li><a href="#" class="hover:text-flint-coral transition-colors">Construction Loans</a></li>
                            <li><a href="#" class="hover:text-flint-coral transition-colors">Commercial Loans</a></li>
                        </ul>
                    </div>
                    
                    <!-- Resources -->
                    <div>
                        <h4 class="font-montserrat font-semibold mb-4">Resources</h4>
                        <ul class="space-y-2 text-sm text-gray-300">
                            <li><a href="#" class="hover:text-flint-coral transition-colors">Mortgage Calculator</a></li>
                            <li><a href="#" class="hover:text-flint-coral transition-colors">First Home Buyer Guide</a></li>
                            <li><a href="#" class="hover:text-flint-coral transition-colors">Market Updates</a></li>
                            <li><a href="#" class="hover:text-flint-coral transition-colors">Podcast</a></li>
                            <li><a href="#" class="hover:text-flint-coral transition-colors">FAQs</a></li>
                        </ul>
                    </div>
                    
                    <!-- Newsletter -->
                    <div>
                        <h4 class="font-montserrat font-semibold mb-4">Stay Updated</h4>
                        <p class="text-sm text-gray-300 mb-4">
                            Get weekly market insights and finance tips delivered to your inbox.
                        </p>
                        <div class="space-y-2">
                            <input type="email" placeholder="Your email address" class="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-white font-montserrat rounded">
                            <button class="btn-hover-scale w-full bg-flint-coral hover:bg-flint-coral/90 font-montserrat py-2 rounded">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Bottom Bar -->
                <div class="border-t border-gray-800 pt-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <p class="text-sm text-gray-400 font-montserrat">
                            © 2024 Flint Group. All rights reserved. Australian Credit Licence #123456
                        </p>
                        <div class="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" class="text-gray-400 hover:text-flint-coral transition-colors text-sm">Privacy Policy</a>
                            <a href="#" class="text-gray-400 hover:text-flint-coral transition-colors text-sm">Terms of Service</a>
                            <a href="#" class="text-gray-400 hover:text-flint-coral transition-colors text-sm">Credit Guide</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
    
    document.getElementById('footer').innerHTML = footerHTML;
}

// Progress Tracker Component
function initProgressTracker() {
    const progressHTML = `
        <div class="fixed bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 z-50 max-w-md mx-auto">
            <div class="flex items-center justify-between mb-2">
                <span id="progress-step" class="font-montserrat text-sm font-semibold text-flint-maroon">
                    Step 1 of 4
                </span>
                <span id="progress-percent" class="font-montserrat text-xs text-gray-600">
                    25% Complete
                </span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div id="progress-bar" class="progress-bar h-2 rounded-full" style="width: 25%"></div>
            </div>
            <p id="progress-text" class="font-montserrat text-xs text-gray-700">
                Learn About Us • You're 3 steps away from expert advice
            </p>
        </div>
    `;
    
    document.getElementById('progress-tracker').innerHTML = progressHTML;
    
    // Progress tracking logic
    let currentStep = 1;
    let progress = 25;
    
    const steps = [
        { id: 1, title: "Learn About Us", completed: true },
        { id: 2, title: "See What We Offer", completed: false },
        { id: 3, title: "Read Reviews", completed: false },
        { id: 4, title: "Book a Free Call", completed: false }
    ];
    
    function updateProgress() {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        
        if (scrollPercent > 25) {
            currentStep = 2;
            progress = 50;
        }
        if (scrollPercent > 50) {
            currentStep = 3;
            progress = 75;
        }
        if (scrollPercent > 75) {
            currentStep = 4;
            progress = 100;
        }
        
        document.getElementById('progress-step').textContent = `Step ${currentStep} of 4`;
        document.getElementById('progress-percent').textContent = `${progress}% Complete`;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        document.getElementById('progress-text').textContent = `${steps[currentStep - 1]?.title} • You're ${4 - currentStep} step${4 - currentStep !== 1 ? 's' : ''} away from expert advice`;
    }
    
    window.addEventListener('scroll', updateProgress);
}

// Utility Functions
function scrollToContact() {
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
}

function callAdviser() {
    window.open('tel:+61212345678', '_self');
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.toggle('active');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    
    mobileMenu.classList.remove('active');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
}

function handleNewsletterSubmit(event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    
    // Here you would typically send the email to your backend
    alert('Thank you for subscribing! You\'ll receive weekly market insights.');
    event.target.reset();
}

function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the form data to your backend
    console.log('Contact form submitted:', data);
    alert('Thank you for your inquiry! We\'ll be in touch within 24 hours.');
    event.target.reset();
}

// Toast notification system (simple implementation)
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-montserrat ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}
