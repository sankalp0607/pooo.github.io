// DOM तत्वों को पकड़ना
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const navClose = document.querySelector('.nav-close');

    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.add('active');
        navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    navClose.addEventListener('click', () => {
        mainNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    navOverlay.addEventListener('click', () => {
        mainNav.classList.remove('active');
        navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu
            mainNav.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '20';
            
            // Smooth scroll
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Language switcher functionality
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableElements = document.querySelectorAll('[data-translate]');
    let currentLang = 'hi'; 
// भाषा डेटा
const translations = {
    'hi': {
        'header_title': 'त्र्यंबकेश्वर पूजा',
        'header_subtitle': 'ज्योतिर्लिंग - नासिक, महाराष्ट्र',
        'search_placeholder': 'खोजें...',
        'menu_home': 'होम',
        'menu_about': 'मंदिर के बारे में',
        'menu_services': 'पूजा सेवाएँ',
        'menu_booking': 'पूजा बुकिंग',
        'menu_gallery': 'गैलरी',
        'menu_contact': 'संपर्क करें',
        'hero_title': 'श्री त्र्यंबकेश्वर ज्योतिर्लिंग',
        'hero_text': 'भारत के बारह ज्योतिर्लिंगों में से एक पवित्र तीर्थस्थल। यहाँ भगवान शिव की विशेष पूजा एवं आराधना का अनूठा अवसर प्राप्त करें।',
        'hero_button': 'पूजा बुक करें',
        'services_title': 'पूजा सेवाएँ',
        'service1_title': 'कावेरी स्नान पूजा',
        'service1_desc': 'पवित्र कावेरी नदी में स्नान के साथ विशेष पूजा। यह पूजा पूर्वजों की आत्मा की शांति और मोक्ष प्राप्ति के लिए की जाती है।',
        'service2_title': 'रुद्राभिषेक',
        'service2_desc': 'भगवान शिव को प्रसन्न करने के लिए रुद्राभिषेक पूजा। इस पूजा से जीवन की सभी समस्याओं का निवारण होता है।',
        'service3_title': 'त्रिपिंडी श्राद्ध',
        'service3_desc': 'पितृ दोष निवारण और पूर्वजों की आत्मा की शांति के लिए विशेष श्राद्ध कर्म। इससे पितृ प्रसन्न होकर आशीर्वाद देते हैं।',
        'service4_title': 'महामृत्युंजय जप',
        'service4_desc': 'आयु वृद्धि, स्वास्थ्य लाभ और अकाल मृत्यु से बचाव के लिए महामृत्युंजय मंत्र का जाप। इसका विशेष महत्व है।',
        'book_button': 'बुक करें',
        'booking_title': 'पूजा बुकिंग',
        'booking_info_title': 'ऑनलाइन पूजा बुकिंग सुविधा',
        'booking_info_text': 'अब आप घर बैठे ही त्र्यंबकेश्वर मंदिर में अपनी पसंद की पूजा बुक कर सकते हैं। हमारे विशेषज्ञ पुजारी आपकी ओर से पूरी श्रद्धा के साथ पूजा संपन्न करवाएंगे।',
        'feature1': 'प्रामाणिक वैदिक विधि से पूजा',
        'feature2': 'अनुभवी पंडितों द्वारा संपन्न',
        'feature3': 'पूजा की वीडियो रिकॉर्डिंग',
        'feature4': 'प्रसाद घर पहुँच सेवा',
        'feature5': 'ऑनलाइन भुगतान सुरक्षित',
        'contact_button': 'संपर्क करें',
        'form_title': 'पूजा बुक करने के लिए फॉर्म भरें',
        'form_name': 'आपका पूरा नाम',
        'form_email': 'ईमेल पता',
        'form_phone': 'मोबाइल नंबर',
        'form_puja': 'पूजा का प्रकार',
        'form_select': 'चुनें...',
        'puja1': 'कावेरी स्नान पूजा',
        'puja2': 'रुद्राभिषेक',
        'puja3': 'त्रिपिंडी श्राद्ध',
        'puja4': 'महामृत्युंजय जप',
        'puja5': 'अन्य पूजा',
        'form_date': 'पूजा की तिथि',
        'form_message': 'विशेष निर्देश (यदि कोई हो)',
        'form_submit': 'पूजा सबमिट करें',
        'about_title': 'मंदिर के बारे में',
        'about_content_title': 'श्री त्र्यंबकेश्वर ज्योतिर्लिंग',
        'about_content_p1': 'त्र्यंबकेश्वर मंदिर महाराष्ट्र के नासिक जिले में स्थित भगवान शिव के बारह ज्योतिर्लिंगों में से एक है। यह मंदिर गोदावरी नदी के तट पर स्थित है और हिन्दुओं का एक प्रमुख तीर्थस्थल है।',
        'about_content_p2': 'मान्यता है कि इस मंदिर की स्थापना समुद्र मंथन के समय निकले विष का पान करने के बाद भगवान शिव के गले की जलन शांत करने के लिए देवताओं ने गोदावरी नदी का उद्गम किया था। त्र्यंबकेश्वर ज्योतिर्लिंग के तीन मुख हैं जो ब्रह्मा, विष्णु और महेश के प्रतीक हैं।',
        'feature1_title': 'प्राचीन इतिहास',
        'feature1_text': '1000+ वर्ष पुराना मंदिर',
        'feature2_title': 'ब्रह्मगिरि पर्वत',
        'feature2_text': 'पवित्र पर्वत पर स्थित',
        'feature3_title': 'गोदावरी उद्गम',
        'feature3_text': 'पवित्र नदी का उद्गम स्थल',
        'feature4_title': 'वास्तुकला',
        'feature4_text': 'अद्भुत हेमाडपंथी शैली',
        'gallery_title': 'मंदिर गैलरी',
        'gallery1_title': 'गर्भगृह',
        'gallery1_desc': 'ज्योतिर्लिंग दर्शन',
        'gallery2_title': 'नंदी दर्शन',
        'gallery2_desc': 'विशाल नंदी की मूर्ति',
        'gallery3_title': 'मंदिर परिसर',
        'gallery3_desc': 'पवित्र स्थल',
        'gallery4_title': 'कावेरी स्नान',
        'gallery4_desc': 'पवित्र स्नान स्थल',
        'footer_title': 'त्र्यंबकेश्वर पूजा',
        'footer_text': 'भारत के बारह ज्योतिर्लिंगों में से एक पवित्र तीर्थस्थल। यहाँ भगवान शिव की विशेष पूजा एवं आराधना का अनूठा अवसर प्राप्त करें।',
        'quick_links': 'त्वरित लिंक',
        'services_links': 'पूजा सेवाएँ',
        'contact_title': 'संपर्क करें',
        'contact_address': 'त्र्यंबकेश्वर मंदिर, नासिक, महाराष्ट्र 422202',
        'contact_timing': 'प्रतिदिन: सुबह 5:30 - रात 9:00',
        'copyright_text': '© 2023 त्र्यंबकेश्वर पूजा सेवा। सर्वाधिकार सुरक्षित।'
    },
    'mr': {
        'header_title': 'त्र्यंबकेश्वर पूजा',
        'header_subtitle': 'ज्योतिर्लिंग - नाशिक, महाराष्ट्र',
        'search_placeholder': 'शोधा...',
        'menu_home': 'मुख्यपृष्ठ',
        'menu_about': 'मंदिराबद्दल',
        'menu_services': 'पूजा सेवा',
        'menu_booking': 'पूजा बुकिंग',
        'menu_gallery': 'गॅलरी',
        'menu_contact': 'संपर्क साधा',
        'hero_title': 'श्री त्र्यंबकेश्वर ज्योतिर्लिंग',
        'hero_text': 'भारतातील बारा ज्योतिर्लिंगांपैकी एक पवित्र तीर्थक्षेत्र. येथे भगवान शिवाची विशेष पूजा आणि आराधना करण्याची अनोखी संधी मिळते.',
        'hero_button': 'पूजा बुक करा',
        'services_title': 'पूजा सेवा',
        'service1_title': 'कावेरी स्नान पूजा',
        'service1_desc': 'पवित्र कावेरी नदीत स्नानासह विशेष पूजा. ही पूजा पूर्वजांच्या आत्म्याच्या शांतीसाठी आणि मोक्षप्राप्तीसाठी केली जाते.',
        'service2_title': 'रुद्राभिषेक',
        'service2_desc': 'भगवान शिवाला प्रसन्न करण्यासाठी रुद्राभिषेक पूजा. या पूजेमुळे जीवनातील सर्व समस्यांचे निराकरण होते.',
        'service3_title': 'त्रिपिंडी श्राद्ध',
        'service3_desc': 'पितृ दोष निवारण आणि पूर्वजांच्या आत्म्याच्या शांतीसाठी विशेष श्राद्ध कर्म. यामुळे पितृ प्रसन्न होऊन आशीर्वाद देतात.',
        'service4_title': 'महामृत्युंजय जप',
        'service4_desc': 'आयुवृद्धी, आरोग्यलाभ आणि अकालमृत्यूपासून संरक्षणासाठी महामृत्युंजय मंत्राचा जप. याचे विशेष महत्त्व आहे.',
        'book_button': 'बुक करा',
        'booking_title': 'पूजा बुकिंग',
        'booking_info_title': 'ऑनलाइन पूजा बुकिंग सुविधा',
        'booking_info_text': 'आता आपण घर बसल्यास त्र्यंबकेश्वर मंदिरात आपल्या आवडीची पूजा बुक करू शकता. आमचे तज्ञ पुजारी आपल्या वतीने पूर्ण श्रद्धेने पूजा संपन्न करतील.',
        'feature1': 'प्रामाणिक वैदिक पद्धतीने पूजा',
        'feature2': 'अनुभवी पंडितांकडून संपन्न',
        'feature3': 'पूजेची व्हिडिओ रेकॉर्डिंग',
        'feature4': 'प्रसाद घरी पोहोच सेवा',
        'feature5': 'ऑनलाइन पेमेंट सुरक्षित',
        'contact_button': 'संपर्क साधा',
        'form_title': 'पूजा बुक करण्यासाठी फॉर्म भरा',
        'form_name': 'आपले पूर्ण नाव',
        'form_email': 'ईमेल पत्ता',
        'form_phone': 'मोबाईल नंबर',
        'form_puja': 'पूजेचा प्रकार',
        'form_select': 'निवडा...',
        'puja1': 'कावेरी स्नान पूजा',
        'puja2': 'रुद्राभिषेक',
        'puja3': 'त्रिपिंडी श्राद्ध',
        'puja4': 'महामृत्युंजय जप',
        'puja5': 'इतर पूजा',
        'form_date': 'पूजेची तारीख',
        'form_message': 'विशेष सूचना (असल्यास)',
        'form_submit': 'पूजा सबमिट करा',
        'about_title': 'मंदिराबद्दल',
        'about_content_title': 'श्री त्र्यंबकेश्वर ज्योतिर्लिंग',
        'about_content_p1': 'त्र्यंबकेश्वर मंदिर महाराष्ट्रातील नाशिक जिल्ह्यात स्थित भगवान शिवाच्या बारा ज्योतिर्लिंगांपैकी एक आहे. हे मंदिर गोदावरी नदीच्या काठावर स्थित आहे आणि हिंदूंचे एक प्रमुख तीर्थक्षेत्र आहे.',
        'about_content_p2': 'मान्यतेनुसार, समुद्रमंथनाच्या वेळी बाहेर पडलेले विष प्यायल्यानंतर भगवान शिवाच्या घशातील जळजळ शांत करण्यासाठी देवांनी गोदावरी नदीचा उगम केला. त्र्यंबकेश्वर ज्योतिर्लिंगाचे तीन तोंड आहेत जे ब्रह्मा, विष्णू आणि महेश यांचे प्रतीक आहेत.',
        'feature1_title': 'प्राचीन इतिहास',
        'feature1_text': '1000+ वर्ष जुने मंदिर',
        'feature2_title': 'ब्रह्मगिरी पर्वत',
        'feature2_text': 'पवित्र पर्वतावर स्थित',
        'feature3_title': 'गोदावरी उगम',
        'feature3_text': 'पवित्र नदीचा उगम स्थळ',
        'feature4_title': 'वास्तुकला',
        'feature4_text': 'अद्भुत हेमाडपंथी शैली',
        'gallery_title': 'मंदिर गॅलरी',
        'gallery1_title': 'गर्भगृह',
        'gallery1_desc': 'ज्योतिर्लिंग दर्शन',
        'gallery2_title': 'नंदी दर्शन',
        'gallery2_desc': 'विशाल नंदीची मूर्ती',
        'gallery3_title': 'मंदिर परिसर',
        'gallery3_desc': 'पवित्र स्थळ',
        'gallery4_title': 'कावेरी स्नान',
        'gallery4_desc': 'पवित्र स्नान स्थळ',
        'footer_title': 'त्र्यंबकेश्वर पूजा',
        'footer_text': 'भारतातील बारा ज्योतिर्लिंगांपैकी एक पवित्र तीर्थक्षेत्र. येथे भगवान शिवाची विशेष पूजा आणि आराधना करण्याची अनोखी संधी.',
        'quick_links': 'द्रुत दुवे',
        'services_links': 'पूजा सेवा',
        'contact_title': 'संपर्क साधा',
        'contact_address': 'त्र्यंबकेश्वर मंदिर, नाशिक, महाराष्ट्र 422202',
        'contact_timing': 'दररोज: सकाळी 5:30 - रात्री 9:00',
        'copyright_text': '© 2023 त्र्यंबकेश्वर पूजा सेवा. सर्व हक्क राखीव.'
    },
    'en': {
        'header_title': 'Trimbakeshwar Pooja',
        'header_subtitle': 'Jyotirlinga - Nashik, Maharashtra',
        'search_placeholder': 'Search...',
        'menu_home': 'Home',
        'menu_about': 'About Temple',
        'menu_services': 'Pooja Services',
        'menu_booking': 'Pooja Booking',
        'menu_gallery': 'Gallery',
        'menu_contact': 'Contact Us',
        'hero_title': 'Shri Trimbakeshwar Jyotirlinga',
        'hero_text': 'One of the twelve Jyotirlingas of India. Get a unique opportunity to worship Lord Shiva here with special rituals.',
        'hero_button': 'Book Pooja',
        'services_title': 'Pooja Services',
        'service1_title': 'Kaveri Snan Pooja',
        'service1_desc': 'Special pooja with bath in holy Kaveri river. This pooja is performed for peace of ancestors and salvation.',
        'service2_title': 'Rudrabhishek',
        'service2_desc': 'Rudrabhishek pooja to please Lord Shiva. This pooja removes all problems of life.',
        'service3_title': 'Tripindi Shradh',
        'service3_desc': 'Special shradh karma for pitra dosh nivaran and peace of ancestors. This pleases ancestors who bless you.',
        'service4_title': 'Mahamrityunjay Jap',
        'service4_desc': 'Chanting of Mahamrityunjay mantra for long life, health and protection from untimely death. It has special significance.',
        'book_button': 'Book Now',
        'booking_title': 'Pooja Booking',
        'booking_info_title': 'Online Pooja Booking Facility',
        'booking_info_text': 'Now you can book your preferred pooja at Trimbakeshwar temple from home. Our expert priests will perform the pooja on your behalf with full devotion.',
        'feature1': 'Authentic Vedic rituals',
        'feature2': 'Performed by experienced priests',
        'feature3': 'Pooja video recording',
        'feature4': 'Prasad home delivery',
        'feature5': 'Secure online payment',
        'contact_button': 'Contact Us',
        'form_title': 'Fill Form to Book Pooja',
        'form_name': 'Your Full Name',
        'form_email': 'Email Address',
        'form_phone': 'Mobile Number',
        'form_puja': 'Pooja Type',
        'form_select': 'Select...',
        'puja1': 'Kaveri Snan Pooja',
        'puja2': 'Rudrabhishek',
        'puja3': 'Tripindi Shradh',
        'puja4': 'Mahamrityunjay Jap',
        'puja5': 'Other Pooja',
        'form_date': 'Pooja Date',
        'form_message': 'Special Instructions (if any)',
        'form_submit': 'Submit Pooja',
        'about_title': 'About Temple',
        'about_content_title': 'Shri Trimbakeshwar Jyotirlinga',
        'about_content_p1': 'Trimbakeshwar temple is one of the twelve Jyotirlingas of Lord Shiva located in Nashik district of Maharashtra. This temple is situated on the banks of Godavari river and is a major pilgrimage site for Hindus.',
        'about_content_p2': 'It is believed that the temple was established when the gods originated the Godavari river to cool Lord Shiva\'s throat after he drank the poison that emerged during Samudra Manthan. The Trimbakeshwar Jyotirlinga has three faces representing Brahma, Vishnu and Mahesh.',
        'feature1_title': 'Ancient History',
        'feature1_text': '1000+ years old temple',
        'feature2_title': 'Brahmagiri Mountain',
        'feature2_text': 'Located on sacred mountain',
        'feature3_title': 'Godavari Origin',
        'feature3_text': 'Origin place of holy river',
        'feature4_title': 'Architecture',
        'feature4_text': 'Amazing Hemadpanthi style',
        'gallery_title': 'Temple Gallery',
        'gallery1_title': 'Sanctum Sanctorum',
        'gallery1_desc': 'Jyotirlinga Darshan',
        'gallery2_title': 'Nandi Statue',
        'gallery2_desc': 'Giant Nandi idol',
        'gallery3_title': 'Temple Premises',
        'gallery3_desc': 'Holy place',
        'gallery4_title': 'Kaveri Snan',
        'gallery4_desc': 'Sacred bathing place',
        'footer_title': 'Trimbakeshwar Pooja',
        'footer_text': 'One of the twelve Jyotirlingas of India. Get a unique opportunity to worship Lord Shiva here with special rituals.',
        'quick_links': 'Quick Links',
        'services_links': 'Pooja Services',
        'contact_title': 'Contact Us',
        'contact_address': 'Trimbakeshwar Temple, Nashik, Maharashtra 422202',
        'contact_timing': 'Daily: 5:30 AM - 9:00 PM',
        'copyright_text': '© 2023 Trimbakeshwar Pooja Service. All Rights Reserved.'
    }
};
 function updateButtonVisibility() {
        langButtons.forEach(btn => {
            // Show all buttons first
            btn.style.display = 'inline-block';
            
            // Hide the current language button
            if (btn.dataset.lang === currentLang) {
                btn.style.display = 'none';
            }
        });
    }

    // Function to change language
    function changeLanguage(lang) {
        currentLang = lang;
        
        // Update button visibility
        updateButtonVisibility();
        
        // Update active state
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            }
        });

        // Apply translations
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Store language preference
        localStorage.setItem('preferredLanguage', lang);
    }

    // Event listeners for language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            changeLanguage(lang);
        });
    });

    // Initialize with saved preference or default
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    changeLanguage(savedLang);

    // Form submission
    const bookingForm = document.getElementById('pujaBookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted successfully!');
            this.reset();
        });
    }

    // Sticky header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 0);
    });
});
// WhatsApp & Call Buttons - Add to your script.js
function createFloatingButtons() {
    // Create container
    const floatContainer = document.createElement('div');
    floatContainer.className = 'float-buttons';
    
    // WhatsApp Button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/917581033738'; // Replace with your number
    whatsappBtn.className = 'float-btn whatsapp-btn';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.target = '_blank';
    
    // Call Button (different for mobile/desktop)
    const callBtn = document.createElement('a');
    const isMobile = window.innerWidth <= 768;
    callBtn.href = isMobile ? 'tel:+917581033738' : 'telprompt:+917581033738';
    callBtn.className = 'float-btn call-btn';
    callBtn.innerHTML = '<i class="fas fa-phone"></i>';
    
    floatContainer.appendChild(whatsappBtn);
    floatContainer.appendChild(callBtn);
    document.body.appendChild(floatContainer);
    
    // Update call link on window resize
    window.addEventListener('resize', () => {
        const isMobileNow = window.innerWidth <= 768;
        callBtn.href = isMobileNow ? 'tel:+917581033738' : 'telprompt:+917581033738';
    });
}

// Call this function in your DOMContentLoaded
document.addEventListener('DOMContentLoaded', createFloatingButtons);
// Add this to your JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });
  
  // Smooth scroll to top when clicked
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});