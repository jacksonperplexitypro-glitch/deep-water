// 全局變數
const contactInfo = {
    phone: '+85294085969',
    whatsapp: '+85294085969',
    message: '您好，我對Deep Water South項目感興趣，希望了解更多詳情'
};

// DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化應用
function initializeApp() {
    setupMobileMenu();
    setupSmoothScrolling();
    setupHeaderScroll();
    setupScrollAnimations();
}

// 移動端選單設置
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // 切換圖標
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });

        // 點擊選單項時關閉移動端選單
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            });
        });
    }
}

// 平滑滾動設置
function setupSmoothScrolling() {
    // 導航連結平滑滾動
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// 滾動到指定部分
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

// 頭部滾動效果
function setupHeaderScroll() {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 添加/移除滾動樣式
        if (scrollTop > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(30, 58, 138, 0.1)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// 滾動動畫設置
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    const animatedElements = document.querySelectorAll('.brochure-card, .location-card, .gallery-item, .contact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// WhatsApp 連結生成
function getWhatsAppLink(phone, message) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

// 拨打電話
function makeCall() {
    window.open(`tel:${contactInfo.phone}`, '_self');
}

// 打開 WhatsApp
function openWhatsApp() {
    const whatsappLink = getWhatsAppLink(contactInfo.whatsapp, contactInfo.message);
    window.open(whatsappLink, '_blank');
}

// 錯誤處理
window.addEventListener('error', function(e) {
    console.error('頁面錯誤:', e.error);
});

// 添加鍵盤導航支持
function addKeyboardNavigation() {
    document.addEventListener('keydown', function(e) {
        // ESC 鍵關閉移動端選單
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('navMenu');
            const mobileMenuToggle = document.getElementById('mobileMenuToggle');
            
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.querySelector('i').className = 'fas fa-bars';
            }
        }
    });
}

// 頁面可見性 API - 優化性能
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 頁面不可見時暫停動畫
        document.body.style.animationPlayState = 'paused';
    } else {
        // 頁面可見時恢復動畫
        document.body.style.animationPlayState = 'running';
    }
});

// 初始化所有功能
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    addKeyboardNavigation();
});


// 在原有JavaScript基礎上添加以下功能
 const navActions = document.getElementById('navActions');

navActions.addEventListener('click', function (event) {
 const navMenu = document.querySelector('#navMenu');
 

const currentDisplay = window.getComputedStyle(navMenu).display;

if (currentDisplay === 'none') {
  navMenu.style.display = 'flex';
}else{
    navMenu.style.display = 'none';
}
});