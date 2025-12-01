// SeaStar - النظام المتكامل المتقدم
// JavaScript الكامل مع جميع الميزات

// تهيئة النظام
class SeaStarSystem {
    constructor() {
        this.init();
    }

    init() {
        // تهيئة جميع الأنظمة
        this.initCursor();
        this.initParticles();
        this.initTheme();
        this.initVoiceCommands();
        this.initAudio();
        this.initAnimations();
        this.initGamification();
        this.initAnalytics();
        this.initTouchGestures();
        this.initNotifications();
        this.initLoading();
        this.initParallax();
        this.initDynamicColors();
        this.initMouseTracking();
        this.initScrollEffects();
        this.init3DEffects();
        this.initFluidElements();
        this.initHologramEffects();
        this.initHUDElements();
        this.initTypingEffects();
        this.initMorphing();
        this.initSkillsSystem();
        this.initTimeline();
        this.initSearch();
        this.initFilters();
        this.initRating();
        this.initProgressBars();
        this.initLazyLoading();
        this.initPrintMode();
        this.initPerformance();
        this.initMobileOptimizations();
        this.initARFeatures();
        this.initChatSystem();
        this.initAIFeatures();
        this.initWeatherIntegration();
        this.initTimeBasedEffects();
        this.initUserPreferences();
        this.initOfflineMode();
        this.initPWA();
        this.initWebGL();
        this.initPhysics();
        this.initProceduralGeneration();
        this.initNeuralNetwork();
        this.initBlockchain();
        this.initQuantumEffects();
    }

    // 1. نظام المؤشر المتقدم
    initCursor() {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        const follower = document.createElement('div');
        follower.className = 'cursor-follower';
        document.body.appendChild(follower);

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
            
            setTimeout(() => {
                follower.style.left = `${e.clientX}px`;
                follower.style.top = `${e.clientY}px`;
            }, 100);

            // تحديث متغيرات CSS
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        });

        // تأثيرات عند hover العناصر
        const interactiveElements = document.querySelectorAll('a, button, .card, .interactive-element');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(1.5)';
                cursor.style.borderColor = 'var(--cyber-pink)';
                follower.style.transform = 'scale(1.2)';
                follower.style.borderColor = 'var(--cyber-pink)';
            });

            element.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = 'var(--cyber-green)';
                follower.style.transform = 'scale(1)';
                follower.style.borderColor = 'rgba(0, 168, 255, 0.3)';
            });
        });

        // تأثيرات النقر
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'scale(0.8)';
            follower.style.transform = 'scale(0.9)';
        });

        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'scale(1)';
            follower.style.transform = 'scale(1)';
        });
    }

    // 2. نظام الجسيمات المتقدم
    initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 150,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: ["#00a8ff", "#0be881", "#9c88ff", "#ff3cac", "#ff9a3c"]
                    },
                    shape: {
                        type: ["circle", "triangle", "polygon"],
                        polygon: {
                            nb_sides: 6
                        }
                    },
                    opacity: {
                        value: 0.7,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.1,
                            sync: false
                        }
                    },
                    size: {
                        value: 3,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 4,
                            size_min: 0.3,
                            sync: false
                        }
                    },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#0be881",
                        opacity: 0.4,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false,
                        attract: {
                            enable: true,
                            rotateX: 600,
                            rotateY: 1200
                        }
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: {
                            enable: true,
                            mode: ["grab", "bubble"]
                        },
                        onclick: {
                            enable: true,
                            mode: ["push", "remove", "repulse"]
                        },
                        resize: true
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        bubble: {
                            distance: 250,
                            size: 8,
                            duration: 2,
                            opacity: 0.8,
                            speed: 3
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4
                        },
                        push: {
                            particles_nb: 4
                        },
                        remove: {
                            particles_nb: 2
                        }
                    }
                },
                retina_detect: true
            });
        }
    }

    // 3. نظام الثيمات الديناميكي
    initTheme() {
        const themes = {
            cyber: {
                primary: '#00a8ff',
                secondary: '#0be881',
                bg: '#001a33'
            },
            matrix: {
                primary: '#00ff41',
                secondary: '#00f3ff',
                bg: '#000'
            },
            sunset: {
                primary: '#ff6b6b',
                secondary: '#ffd93d',
                bg: '#2d3436'
            },
            ocean: {
                primary: '#00b4d8',
                secondary: '#90e0ef',
                bg: '#0077b6'
            }
        };

        // تحميل الثيم المحفوظ
        const savedTheme = localStorage.getItem('seastar-theme') || 'cyber';
        this.applyTheme(themes[savedTheme]);

        // إنشاء واجهة تبديل الثيمات
        this.createThemeSelector(themes);

        // الثيم الآلي حسب الوقت
        this.initAutoTheme();
    }

    createThemeSelector(themes) {
        const container = document.createElement('div');
        container.className = 'theme-toggle';
        
        Object.keys(themes).forEach(themeName => {
            const btn = document.createElement('button');
            btn.className = 'theme-btn';
            btn.style.background = `linear-gradient(135deg, ${themes[themeName].primary}, ${themes[themeName].secondary})`;
            btn.dataset.theme = themeName;
            
            btn.addEventListener('click', () => {
                this.applyTheme(themes[themeName]);
                localStorage.setItem('seastar-theme', themeName);
                this.showNotification(`تم تغيير الثيم إلى ${themeName}`, 'success');
                
                // تحديث الأزرار النشطة
                document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
            
            container.appendChild(btn);
        });
        
        document.body.appendChild(container);
        
        // تحديد الزر النشط
        const savedTheme = localStorage.getItem('seastar-theme') || 'cyber';
        document.querySelector(`.theme-btn[data-theme="${savedTheme}"]`)?.classList.add('active');
    }

    applyTheme(theme) {
        document.documentElement.style.setProperty('--cyber-blue', theme.primary);
        document.documentElement.style.setProperty('--cyber-green', theme.secondary);
        document.documentElement.style.setProperty('--dark-blue', theme.bg);
    }

    initAutoTheme() {
        const hour = new Date().getHours();
        
        if (hour >= 6 && hour < 18) {
            // تلقائي خلال النهار
            if (!localStorage.getItem('seastar-theme')) {
                this.applyTheme({
                    primary: '#0066cc',
                    secondary: '#00cc88',
                    bg: '#f0f8ff'
                });
            }
        }
    }

    // 4. نظام الأوامر الصوتية
    initVoiceCommands() {
        if (annyang) {
            const commands = {
                'انتقل إلى الرئيسية': () => this.scrollToSection('home'),
                'اذهب إلى الخدمات': () => this.scrollToSection('services'),
                'عرض الأعمال': () => this.scrollToSection('portfolio'),
                'اتصل بنا': () => this.scrollToSection('contact'),
                'افتح المدونة': () => window.open('blog.html', '_self'),
                'غير الثيم': () => this.cycleTheme(),
                'تفعيل الوضع الليلي': () => this.setTheme('matrix'),
                'تفعيل الوضع النهاري': () => this.setTheme('ocean'),
                'تشغيل الموسيقى': () => this.playMusic(),
                'إيقاف الموسيقى': () => this.pauseMusic(),
                'فتح نظام سستار': () => window.open('mom/index.html', '_self'),
                'إظهار الإحصائيات': () => this.showAnalytics(),
                'إخفاء جميع العناصر': () => this.toggleElements()
            };

            annyang.addCommands(commands);

            // زر التحكم الصوتي
            this.createVoiceControlButton();

            // التلقائي للكشف عن اللغة
            annyang.setLanguage('ar-SA');
        }
    }

    createVoiceControlButton() {
        const button = document.createElement('div');
        button.className = 'voice-command-indicator';
        button.innerHTML = '<i class="fas fa-microphone"></i>';
        
        const feedback = document.createElement('div');
        feedback.className = 'voice-feedback';
        
        document.body.appendChild(button);
        document.body.appendChild(feedback);

        let isListening = false;

        button.addEventListener('click', () => {
            if (!isListening) {
                annyang.start();
                button.classList.add('listening');
                button.innerHTML = '<i class="fas fa-microphone-slash"></i>';
                this.showVoiceFeedback('أنا أستمع... قل "مساعدة" للتعرف على الأوامر');
                isListening = true;
            } else {
                annyang.abort();
                button.classList.remove('listening');
                button.innerHTML = '<i class="fas fa-microphone"></i>';
                this.hideVoiceFeedback();
                isListening = false;
            }
        });

        // إضافة أمر المساعدة
        annyang.addCallback('result', (phrases) => {
            const command = phrases[0];
            this.showVoiceFeedback(`تم تنفيذ: ${command}`);
            
            setTimeout(() => {
                this.hideVoiceFeedback();
            }, 2000);
        });
    }

    showVoiceFeedback(message) {
        const feedback = document.querySelector('.voice-feedback');
        feedback.textContent = message;
        feedback.classList.add('show');
    }

    hideVoiceFeedback() {
        const feedback = document.querySelector('.voice-feedback');
        feedback.classList.remove('show');
    }

    // 5. نظام الصوتيات المتقدم
    initAudio() {
        // إنشاء سياق الصوت
        if (typeof Tone !== 'undefined') {
            this.audioContext = new Tone.Context();
            
            // إنشاء وحدة التحكم بالموسيقى
            this.createMusicControls();
            
            // تأثيرات صوتية للنقر
            this.initClickSounds();
            
            // مؤثرات صوتية للتمرير
            this.initScrollSounds();
        }
    }

    createMusicControls() {
        const controls = document.createElement('div');
        controls.className = 'music-controls';
        
        controls.innerHTML = `
            <button class="music-btn" id="playMusic">
                <i class="fas fa-play"></i>
            </button>
            <button class="music-btn" id="pauseMusic">
                <i class="fas fa-pause"></i>
            </button>
            <button class="music-btn" id="nextTrack">
                <i class="fas fa-forward"></i>
            </button>
            <div class="sound-wave">
                ${Array(10).fill().map(() => '<div class="wave-bar"></div>').join('')}
            </div>
            <input type="range" id="volumeControl" min="0" max="1" step="0.1" value="0.5">
        `;
        
        document.body.appendChild(controls);

        // إضافة المؤثرات
        this.createSoundWave();
        
        // أحداث التحكم
        document.getElementById('playMusic').addEventListener('click', () => this.playMusic());
        document.getElementById('pauseMusic').addEventListener('click', () => this.pauseMusic());
        document.getElementById('volumeControl').addEventListener('input', (e) => {
            this.setVolume(e.target.value);
        });
    }

    createSoundWave() {
        const bars = document.querySelectorAll('.wave-bar');
        bars.forEach((bar, index) => {
            bar.style.animationDelay = `${index * 0.1}s`;
        });
    }

    playMusic() {
        if (this.synth) {
            this.synth.triggerAttackRelease("C4", "8n");
        }
        this.showNotification('الموسيقى قيد التشغيل', 'info');
    }

    pauseMusic() {
        if (this.synth) {
            this.synth.triggerRelease();
        }
        this.showNotification('تم إيقاف الموسيقى', 'info');
    }

    setVolume(level) {
        document.documentElement.style.setProperty('--sound-level', level);
        if (this.synth) {
            this.synth.volume.value = level - 1;
        }
    }

    initClickSounds() {
        const clickSound = new Tone.Synth({
            oscillator: {
                type: 'sine'
            },
            envelope: {
                attack: 0.001,
                decay: 0.1,
                sustain: 0.1,
                release: 0.1
            }
        }).toDestination();

        document.addEventListener('click', (e) => {
            if (e.target.matches('a, button, .interactive-element')) {
                clickSound.triggerAttackRelease("C6", "16n");
            }
        });
    }

    // 6. نظام التحريك المتقدم مع GSAP
    initAnimations() {
        // تهيئة GSAP
        gsap.registerPlugin(ScrollTrigger, TextPlugin);

        // تأثيرات الظهور
        this.initRevealAnimations();
        
        // تأثيرات النص
        this.initTextAnimations();
        
        // تأثيرات 3D
        this.init3DAnimations();
        
        // تأثيرات الحروف
        this.initLetterAnimations();
    }

    initRevealAnimations() {
        // تأثيرات الظهور عند التمرير
        gsap.utils.toArray('.reveal').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse'
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });
        });

        // تأثيرات التكبير
        gsap.utils.toArray('.scale-in').forEach(element => {
            gsap.from(element, {
                scrollTrigger: {
                    trigger: element,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse'
                },
                scale: 0.8,
                opacity: 0,
                duration: 1,
                ease: 'back.out(1.7)'
            });
        });
    }

    initTextAnimations() {
        // تأثير الكتابة للنصوص
        gsap.utils.toArray('.typing-animation').forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            gsap.to(element, {
                duration: 2,
                text: {
                    value: text,
                    delimiter: ''
                },
                ease: 'none'
            });
        });

        // تأثير تغيير النصوص
        gsap.utils.toArray('.morph-text').forEach(element => {
            const texts = element.dataset.texts.split('|');
            let index = 0;
            
            setInterval(() => {
                gsap.to(element, {
                    duration: 0.5,
                    opacity: 0,
                    onComplete: () => {
                        element.textContent = texts[index];
                        index = (index + 1) % texts.length;
                        
                        gsap.to(element, {
                            duration: 0.5,
                            opacity: 1
                        });
                    }
                });
            }, 3000);
        });
    }

    // 7. نظام Gamification
    initGamification() {
        this.achievements = {
            firstVisit: { unlocked: false, points: 10 },
            scrollMaster: { unlocked: false, points: 20 },
            themeChanger: { unlocked: false, points: 15 },
            musicLover: { unlocked: false, points: 10 },
            voiceCommander: { unlocked: false, points: 25 }
        };

        this.userPoints = parseInt(localStorage.getItem('seastar-points')) || 0;

        // فتح الإنجازات
        this.checkAchievements();
        
        // تتبع الإجراءات
        this.trackUserActions();
    }

    checkAchievements() {
        // أول زيارة
        if (!localStorage.getItem('seastar-first-visit')) {
            this.unlockAchievement('firstVisit', 'مرحباً بك!', 'زيارة الموقع للمرة الأولى');
            localStorage.setItem('seastar-first-visit', 'true');
        }

        // تغيير الثيم
        const themeChanges = parseInt(localStorage.getItem('seastar-theme-changes')) || 0;
        if (themeChanges >= 3 && !this.achievements.themeChanger.unlocked) {
            this.unlockAchievement('themeChanger', 'فنان الألوان', 'تغيير الثيم 3 مرات');
        }
    }

    unlockAchievement(id, title, description) {
        this.achievements[id].unlocked = true;
        this.userPoints += this.achievements[id].points;
        
        localStorage.setItem('seastar-points', this.userPoints.toString());
        localStorage.setItem(`seastar-achievement-${id}`, 'unlocked');
        
        this.showAchievementBadge(title, description, this.achievements[id].points);
    }

    showAchievementBadge(title, description, points) {
        const badge = document.createElement('div');
        badge.className = 'achievement-badge';
        badge.innerHTML = `
            <div class="achievement-icon">
                <i class="fas fa-trophy"></i>
            </div>
            <h3>${title}</h3>
            <p>${description}</p>
            <div class="achievement-points">+${points} نقطة</div>
        `;
        
        document.body.appendChild(badge);
        
        setTimeout(() => {
            badge.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            badge.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(badge);
            }, 500);
        }, 3000);
    }

    trackUserActions() {
        // تتبع التمرير
        let maxScroll = 0;
        window.addEventListener('scroll', () => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            
            if (scrollPercentage > 90 && scrollPercentage > maxScroll) {
                maxScroll = scrollPercentage;
                
                if (scrollPercentage >= 90 && !this.achievements.scrollMaster.unlocked) {
                    this.unlockAchievement('scrollMaster', 'مستكشف المحتوى', 'التمرير عبر 90% من الصفحة');
                }
            }
        });

        // تتبع تغيير الثيم
        document.addEventListener('themeChanged', () => {
            let changes = parseInt(localStorage.getItem('seastar-theme-changes')) || 0;
            changes++;
            localStorage.setItem('seastar-theme-changes', changes.toString());
        });
    }

    // 8. نظام التحليلات
    initAnalytics() {
        this.analyticsData = {
            pageViews: 0,
            clickEvents: [],
            scrollDepth: [],
            timeSpent: 0,
            interactions: []
        };

        // جمع البيانات
        this.collectAnalytics();
        
        // عرض لوحة التحليلات
        this.createAnalyticsPanel();
    }

    collectAnalytics() {
        // عدد المشاهدات
        this.analyticsData.pageViews = parseInt(localStorage.getItem('seastar-page-views')) || 0;
        this.analyticsData.pageViews++;
        localStorage.setItem('seastar-page-views', this.analyticsData.pageViews.toString());

        // تتبع النقرات
        document.addEventListener('click', (e) => {
            const target = e.target.tagName.toLowerCase();
            this.analyticsData.clickEvents.push({
                element: target,
                timestamp: new Date().toISOString(),
                position: { x: e.clientX, y: e.clientY }
            });
        });

        // تتبع الوقت
        const startTime = Date.now();
        window.addEventListener('beforeunload', () => {
            const timeSpent = Date.now() - startTime;
            this.analyticsData.timeSpent += timeSpent;
            localStorage.setItem('seastar-time-spent', this.analyticsData.timeSpent.toString());
        });
    }

    createAnalyticsPanel() {
        const panel = document.createElement('div');
        panel.className = 'analytics-panel';
        panel.innerHTML = `
            <h3 class="hud-element">
                <span class="hud-border"></span>
                التحليلات الحية
            </h3>
            <div class="analytics-grid">
                <div class="analytics-item">
                    <div class="analytics-number" id="pageViews">0</div>
                    <div class="analytics-label">مشاهدات الصفحة</div>
                </div>
                <div class="analytics-item">
                    <div class="analytics-number" id="userPoints">0</div>
                    <div class="analytics-label">النقاط</div>
                </div>
                <div class="analytics-item">
                    <div class="analytics-number" id="timeSpent">0</div>
                    <div class="analytics-label">ثانية</div>
                </div>
                <div class="analytics-item">
                    <div class="analytics-number" id="interactions">0</div>
                    <div class="analytics-label">تفاعل</div>
                </div>
            </div>
        `;
        
        // تحديث البيانات
        setInterval(() => {
            document.getElementById('pageViews').textContent = this.analyticsData.pageViews;
            document.getElementById('userPoints').textContent = this.userPoints;
            document.getElementById('timeSpent').textContent = Math.floor(this.analyticsData.timeSpent / 1000);
            document.getElementById('interactions').textContent = this.analyticsData.clickEvents.length;
        }, 1000);
    }

    // 9. نظام إيماءات اللمس
    initTouchGestures() {
        if (typeof Hammer !== 'undefined') {
            const body = document.body;
            const hammer = new Hammer(body);
            
            // Swipe للأعلى/لأسفل
            hammer.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
            
            hammer.on('swipeup', () => {
                this.scrollToSection('next');
            });
            
            hammer.on('swipedown', () => {
                this.scrollToSection('previous');
            });
            
            // Double tap
            hammer.on('doubletap', (e) => {
                this.toggleTheme();
            });
            
            // Pinch to zoom
            hammer.get('pinch').set({ enable: true });
            
            hammer.on('pinchin', () => {
                document.body.style.transform = `scale(${Math.max(0.5, parseFloat(document.body.style.transform?.replace('scale(', '') || 1) - 0.1)})`;
            });
            
            hammer.on('pinchout', () => {
                document.body.style.transform = `scale(${Math.min(2, parseFloat(document.body.style.transform?.replace('scale(', '') || 1) + 0.1)})`;
            });
        }
    }

    // 10. نظام الإشعارات
    initNotifications() {
        this.notificationQueue = [];
        this.isShowingNotification = false;
        
        // إنشاء مركز الإشعارات
        this.createNotificationCenter();
    }

    createNotificationCenter() {
        const center = document.createElement('div');
        center.className = 'notification-center';
        document.body.appendChild(center);
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-${this.getNotificationIcon(type)}"></i>
            </div>
            <div class="notification-content">${message}</div>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        const center = document.querySelector('.notification-center');
        center.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // زر الإغلاق
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.hideNotification(notification);
        });
        
        // إغلاق تلقائي بعد 5 ثوانٍ
        setTimeout(() => {
            this.hideNotification(notification);
        }, 5000);
    }

    hideNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }

    getNotificationIcon(type) {
        const icons = {
            info: 'info-circle',
            success: 'check-circle',
            warning: 'exclamation-triangle',
            error: 'times-circle'
        };
        return icons[type] || 'info-circle';
    }

    // 11. نظام التحميل
    initLoading() {
        this.createLoadingScreen();
        this.simulateLoading();
    }

    createLoadingScreen() {
        const loading = document.createElement('div');
        loading.className = 'loading-system';
        loading.innerHTML = `
            <div class="loading-ring"></div>
            <div class="loading-text typing-text">جاري تحميل النظام المتقدم...</div>
            <div class="loading-progress">
                <div class="progress-bar"></div>
            </div>
            <div class="loading-stats">
                <div class="loading-stat">تهيئة الواجهة...</div>
                <div class="loading-stat">تحميل المؤثرات...</div>
                <div class="loading-stat">تشغيل الأنظمة...</div>
            </div>
        `;
        
        document.body.appendChild(loading);
        this.loadingScreen = loading;
    }

    simulateLoading() {
        let progress = 0;
        const progressBar = this.loadingScreen.querySelector('.progress-bar');
        const stats = this.loadingScreen.querySelectorAll('.loading-stat');
        
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress > 100) progress = 100;
            
            progressBar.style.width = `${progress}%`;
            
            // تحديث النصوص
            if (progress > 33) stats[0].classList.add('complete');
            if (progress > 66) stats[1].classList.add('complete');
            if (progress > 99) stats[2].classList.add('complete');
            
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    this.loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        this.loadingScreen.remove();
                        this.showNotification('النظام جاهز!', 'success');
                    }, 500);
                }, 500);
            }
        }, 200);
    }

    // 12. نظام Parallax المتقدم
    initParallax() {
        const layers = document.querySelectorAll('.parallax-layer');
        
        window.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            
            layers.forEach((layer, index) => {
                const depth = (index + 1) * 0.05;
                const moveX = x * 100 * depth;
                const moveY = y * 100 * depth;
                
                gsap.to(layer, {
                    x: moveX,
                    y: moveY,
                    duration: 1,
                    ease: 'power2.out'
                });
            });
        });
    }

    // 13. نظام الألوان الديناميكي
    initDynamicColors() {
        // تغيير الألوان حسب الوقت
        setInterval(() => {
            const hour = new Date().getHours();
            document.documentElement.style.setProperty('--time-hour', hour);
            
            if (hour >= 18 || hour < 6) {
                // الليل
                document.documentElement.style.setProperty('--cyber-blue', '#00a8ff');
                document.documentElement.style.setProperty('--cyber-green', '#0be881');
            } else {
                // النهار
                document.documentElement.style.setProperty('--cyber-blue', '#0066cc');
                document.documentElement.style.setProperty('--cyber-green', '#00cc88');
            }
        }, 60000); // كل دقيقة
    }

    // 14. تتبع الماوس المتقدم
    initMouseTracking() {
        const lighting = document.createElement('div');
        lighting.className = 'dynamic-lighting';
        document.body.appendChild(lighting);
        
        window.addEventListener('mousemove', (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${(e.clientX / window.innerWidth) * 100}%`);
            document.documentElement.style.setProperty('--mouse-y', `${(e.clientY / window.innerHeight) * 100}%`);
        });
    }

    // 15. تأثيرات التمرير
    initScrollEffects() {
        // شريط التقدم
        const progressBar = document.createElement('div');
        progressBar.className = 'progress-container';
        progressBar.innerHTML = '<div class="progress-bar"></div>';
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            
            document.querySelector('.progress-bar').style.width = `${scrolled}%`;
        });
        
        // تأثيرات على العناصر عند التمرير
        this.initScrollAnimations();
    }

    initScrollAnimations() {
        // كشف العناصر
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // تأثيرات صوتية
                    if (entry.target.classList.contains('important')) {
                        this.playScrollSound();
                    }
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.lazy-load').forEach(el => observer.observe(el));
    }

    // 16. تأثيرات 3D
    init3DEffects() {
        // تحويل الكروت إلى 3D
        document.querySelectorAll('.card-3d').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateY = ((x - centerX) / centerX) * 10;
                const rotateX = ((centerY - y) / centerY) * 10;
                
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // 17. تأثيرات السوائل
    initFluidElements() {
        // إنشاء عناصر سائلة عشوائية
        for (let i = 0; i < 5; i++) {
            const fluid = document.createElement('div');
            fluid.className = 'fluid-element';
            
            const size = Math.random() * 200 + 100;
            fluid.style.width = `${size}px`;
            fluid.style.height = `${size}px`;
            fluid.style.position = 'fixed';
            fluid.style.top = `${Math.random() * 100}vh`;
            fluid.style.left = `${Math.random() * 100}vw`;
            fluid.style.zIndex = '-1';
            
            document.body.appendChild(fluid);
        }
    }

    // 18. تأثيرات الهولوجرام
    initHologramEffects() {
        document.querySelectorAll('.hologram-container').forEach(container => {
            const effect = document.createElement('div');
            effect.className = 'hologram-effect';
            container.appendChild(effect);
        });
    }

    // 19. عناصر HUD
    initHUDElements() {
        // إنشاء عناصر HUD ديناميكية
        this.createHUD('time', 'الوقت');
        this.createHUD('date', 'التاريخ');
        this.createHUD('fps', 'معدل الإطارات');
        
        // تحديث HUD
        this.updateHUD();
    }

    createHUD(id, label) {
        const hud = document.createElement('div');
        hud.className = 'hud-element';
        hud.innerHTML = `
            <span class="hud-border"></span>
            <div class="hud-label">${label}</div>
            <div class="hud-value" id="hud-${id}">--</div>
        `;
        
        hud.style.position = 'fixed';
        hud.style.top = `${50 + (['time', 'date', 'fps'].indexOf(id) * 80)}px`;
        hud.style.right = '30px';
        hud.style.zIndex = '100';
        
        document.body.appendChild(hud);
    }

    updateHUD() {
        // الوقت
        const updateTime = () => {
            const now = new Date();
            document.getElementById('hud-time').textContent = 
                now.toLocaleTimeString('ar-SA');
            document.getElementById('hud-date').textContent = 
                now.toLocaleDateString('ar-SA');
        };
        
        setInterval(updateTime, 1000);
        updateTime();
        
        // معدل الإطارات
        let lastTime = performance.now();
        let frameCount = 0;
        
        const updateFPS = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime >= lastTime + 1000) {
                const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
                document.getElementById('hud-fps').textContent = `${fps} FPS`;
                frameCount = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(updateFPS);
        };
        
        requestAnimationFrame(updateFPS);
    }

    // 20. تأثيرات الكتابة
    initTypingEffects() {
        document.querySelectorAll('.typing-text').forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 50);
                }
            };
            
            // بدء الكتابة عند الظهور
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    typeWriter();
                    observer.unobserve(element);
                }
            });
            
            observer.observe(element);
        });
    }

    // 21. تأثيرات المورف
    initMorphing() {
        // مورف للنصوص
        gsap.utils.toArray('.morph-element').forEach(element => {
            gsap.to(element, {
                duration: 2,
                scale: 1.1,
                rotation: 360,
                ease: 'power2.inOut',
                repeat: -1,
                yoyo: true
            });
        });
    }

    // 22. نظام المهارات
    initSkillsSystem() {
        document.querySelectorAll('.skill-level').forEach(skill => {
            const targetWidth = skill.dataset.level || '80';
            
            // بدء الرسوم المتحركة عند الظهور
            const observer = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    setTimeout(() => {
                        skill.style.width = `${targetWidth}%`;
                    }, 500);
                    observer.unobserve(skill);
                }
            });
            
            observer.observe(skill);
        });
    }

    // 23. نظام الجدول الزمني
    initTimeline() {
        // تفعيل عناصر الجدول الزمني عند التمرير
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    
                    // تأثير صوتي
                    this.playTimelineSound();
                }
            });
        }, { threshold: 0.3 });
        
        timelineItems.forEach(item => observer.observe(item));
    }

    // 24. نظام البحث
    initSearch() {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                this.filterContent(query);
            });
        }
    }

    filterContent(query) {
        // تصفية المحتوى حسب الاستعلام
        const items = document.querySelectorAll('.searchable');
        
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (text.includes(query)) {
                item.style.display = 'block';
                gsap.to(item, { opacity: 1, duration: 0.3 });
            } else {
                gsap.to(item, { 
                    opacity: 0, 
                    duration: 0.3,
                    onComplete: () => {
                        item.style.display = 'none';
                    }
                });
            }
        });
    }

    // 25. نظام التصفية
    initFilters() {
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                // إزالة النشط من جميع الأزرار
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // إضافة النشط للزر المحدد
                button.classList.add('active');
                
                // تصفية المحتوى
                const filter = button.dataset.filter;
                this.applyFilter(filter);
            });
        });
    }

    applyFilter(filter) {
        const items = document.querySelectorAll('.filter-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
                gsap.to(item, { opacity: 1, duration: 0.3 });
            } else {
                gsap.to(item, { 
                    opacity: 0, 
                    duration: 0.3,
                    onComplete: () => {
                        item.style.display = 'none';
                    }
                });
            }
        });
    }

    // 26. نظام التقييم
    initRating() {
        document.querySelectorAll('.star').forEach((star, index, stars) => {
            star.addEventListener('click', () => {
                const rating = index + 1;
                
                // تحديث النجوم
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('active');
                        s.classList.remove('fa-star');
                        s.classList.add('fa-star');
                    } else {
                        s.classList.remove('active');
                        s.classList.remove('fa-star');
                        s.classList.add('fa-star');
                    }
                });
                
                // حفظ التقييم
                localStorage.setItem('seastar-rating', rating);
                this.showNotification(`تم التقييم بـ ${rating} نجوم`, 'success');
            });
            
            star.addEventListener('mouseover', () => {
                stars.forEach((s, i) => {
                    if (i <= index) {
                        s.classList.add('hover');
                    } else {
                        s.classList.remove('hover');
                    }
                });
            });
            
            star.addEventListener('mouseout', () => {
                stars.forEach(s => s.classList.remove('hover'));
            });
        });
    }

    // 27. أشرطة التقدم
    initProgressBars() {
        // تحديث أشرطة التقدم عند التمرير
        const progressBars = document.querySelectorAll('.progress-bar:not(.global)');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progress = entry.target;
                    const width = progress.dataset.progress || '100';
                    
                    setTimeout(() => {
                        progress.style.width = `${width}%`;
                    }, 300);
                    
                    observer.unobserve(progress);
                }
            });
        }, { threshold: 0.5 });
        
        progressBars.forEach(bar => observer.observe(bar));
    }

    // 28. التحميل البطيء
    initLazyLoading() {
        // صور Lazy loading
        const images = document.querySelectorAll('.lazy-image');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.dataset.src;
                    
                    if (src) {
                        img.src = src;
                        img.classList.add('loaded');
                    }
                    
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
        
        // Lazy loading للنصوص
        const texts = document.querySelectorAll('.lazy-text');
        
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const content = element.dataset.content;
                    
                    if (content) {
                        element.textContent = content;
                        element.classList.add('loaded');
                    }
                    
                    textObserver.unobserve(element);
                }
            });
        });
        
        texts.forEach(text => textObserver.observe(text));
    }

    // 29. وضع الطباعة
    initPrintMode() {
        window.addEventListener('beforeprint', () => {
            document.body.classList.add('print-mode');
            this.showNotification('جاري التحضير للطباعة...', 'info');
        });
        
        window.addEventListener('afterprint', () => {
            document.body.classList.remove('print-mode');
            this.showNotification('تمت الطباعة بنجاح', 'success');
        });
    }

    // 30. تحسينات الأداء
    initPerformance() {
        // إدارة الذاكرة
        this.performanceMonitor();
        
        // Debounce للحركات
        this.debounceEvents();
        
        // Throttle للتمرير
        this.throttleScroll();
    }

    performanceMonitor() {
        const monitor = () => {
            const memory = performance.memory;
            if (memory) {
                const used = Math.round(memory.usedJSHeapSize / 1048576);
                const total = Math.round(memory.totalJSHeapSize / 1048576);
                
                if (used > total * 0.8) {
                    this.cleanupMemory();
                }
            }
            
            setTimeout(monitor, 10000);
        };
        
        monitor();
    }

    cleanupMemory() {
        // تنظيف المؤقتات
        this.clearOldData();
        
        // إزالة العناصر المخفية
        document.querySelectorAll('.hidden-element').forEach(el => {
            if (!el.classList.contains('important')) {
                el.remove();
            }
        });
        
        this.showNotification('تم تنظيف الذاكرة لتحسين الأداء', 'info');
    }

    debounceEvents() {
        // Debounce لحدث resize
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.onResize();
            }, 250);
        });
    }

    onResize() {
        // تحديث المتغيرات عند تغيير الحجم
        document.documentElement.style.setProperty('--window-width', `${window.innerWidth}px`);
        document.documentElement.style.setProperty('--window-height', `${window.innerHeight}px`);
    }

    throttleScroll() {
        let ticking = false;
        
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    // 31. تحسينات الجوال
    initMobileOptimizations() {
        // كشف الجهاز
        this.detectDevice();
        
        // تحسين اللمس
        this.optimizeTouch();
        
        // تقليل الحركات على الجوال
        this.reduceMotionOnMobile();
    }

    detectDevice() {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            document.body.classList.add('mobile-device');
            
            // تقليل عدد الجسيمات
            document.documentElement.style.setProperty('--particle-count', '40');
        }
    }

    optimizeTouch() {
        // زيادة حجم الأزرار على الجوال
        if ('ontouchstart' in window) {
            document.querySelectorAll('button, a').forEach(element => {
                element.style.minHeight = '44px';
                element.style.minWidth = '44px';
            });
        }
    }

    reduceMotionOnMobile() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
        
        if (prefersReducedMotion.matches) {
            document.body.classList.add('reduce-motion');
            
            // إيقاف الرسوم المتحركة الثقيلة
            gsap.globalTimeline.pause();
        }
    }

    // 32. ميزات الواقع المعزز (AR)
    initARFeatures() {
        // كشف دعم AR
        if ('xr' in navigator) {
            this.createARButton();
        }
    }

    createARButton() {
        const arButton = document.createElement('button');
        arButton.className = 'ar-button hud-element';
        arButton.innerHTML = '<i class="fas fa-vr-cardboard"></i> تجربة AR';
        
        arButton.style.position = 'fixed';
        arButton.style.bottom = '100px';
        arButton.style.right = '30px';
        arButton.style.zIndex = '100';
        
        arButton.addEventListener('click', () => {
            this.launchARExperience();
        });
        
        document.body.appendChild(arButton);
    }

    launchARExperience() {
        this.showNotification('جاري تحميل تجربة الواقع المعزز...', 'info');
        // هنا يمكن إضافة كود AR فعلي
    }

    // 33. نظام الدردشة الذكي
    initChatSystem() {
        this.createChatWidget();
    }

    createChatWidget() {
        const chat = document.createElement('div');
        chat.className = 'chat-widget';
        chat.innerHTML = `
            <div class="chat-header">
                <div class="chat-title">
                    <i class="fas fa-robot"></i>
                    مساعد SeaStar الذكي
                </div>
                <button class="chat-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="chat-messages"></div>
            <div class="chat-input-container">
                <input type="text" class="chat-input" placeholder="اكتب رسالتك...">
                <button class="chat-send">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        `;
        
        chat.style.position = 'fixed';
        chat.style.bottom = '30px';
        chat.style.left = '30px';
        chat.style.width = '300px';
        chat.style.zIndex = '1000';
        
        document.body.appendChild(chat);
        
        // أحداث الدردشة
        this.initChatEvents(chat);
    }

    initChatEvents(chat) {
        const messages = chat.querySelector('.chat-messages');
        const input = chat.querySelector('.chat-input');
        const sendBtn = chat.querySelector('.chat-send');
        const closeBtn = chat.querySelector('.chat-close');
        
        // إرسال الرسالة
        const sendMessage = () => {
            const text = input.value.trim();
            if (text) {
                this.addMessage(messages, text, 'user');
                input.value = '';
                
                // رد الذكاء الاصطناعي
                setTimeout(() => {
                    this.aiResponse(text, messages);
                }, 1000);
            }
        };
        
        sendBtn.addEventListener('click', sendMessage);
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
        
        // إغلاق الدردشة
        closeBtn.addEventListener('click', () => {
            chat.style.display = 'none';
        });
        
        // رسالة ترحيبية
        setTimeout(() => {
            this.addMessage(messages, 'مرحباً! أنا مساعد SeaStar الذكي. كيف يمكنني مساعدتك؟', 'ai');
        }, 2000);
    }

    addMessage(container, text, sender) {
        const message = document.createElement('div');
        message.className = `chat-message ${sender}`;
        message.textContent = text;
        
        container.appendChild(message);
        container.scrollTop = container.scrollHeight;
        
        // تأثير الكتابة للذكاء الاصطناعي
        if (sender === 'ai') {
            message.textContent = '';
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    message.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 30);
                }
            };
            typeWriter();
        }
    }

    aiResponse(userMessage, container) {
        const responses = {
            'مرحبا': 'مرحباً بك! كيف يمكنني مساعدتك اليوم؟',
            'خدمات': 'نقدم خدمات متعددة: تصميم مواقع، برمجة، تسويق رقمي، وأمن سيبراني.',
            'سعر': 'يمكنك طلب عرض سعر من صفحة "اتصل بنا" وسنرد عليك فوراً.',
            'شكرا': 'العفو! نحن هنا لخدمتك دائماً.',
            'default': 'أنا أفهم أنك تقول: "' + userMessage + '". هل تريد معرفة المزيد عن خدماتنا؟'
        };
        
        const lowerMsg = userMessage.toLowerCase();
        let response = responses.default;
        
        for (const key in responses) {
            if (lowerMsg.includes(key)) {
                response = responses[key];
                break;
            }
        }
        
        this.addMessage(container, response, 'ai');
    }

    // 34. ميزات الذكاء الاصطناعي
    initAIFeatures() {
        // تحليل المشاعر
        this.initSentimentAnalysis();
        
        // توصيات ذكية
        this.initSmartRecommendations();
    }

    initSentimentAnalysis() {
        // تحليل مشاعر النص
        document.addEventListener('click', (e) => {
            if (e.target.matches('.user-content')) {
                const text = e.target.textContent;
                this.analyzeSentiment(text);
            }
        });
    }

    analyzeSentiment(text) {
        // محاكاة تحليل المشاعر
        const positiveWords = ['جيد', 'رائع', 'ممتاز', 'شكراً', 'جميل'];
        const negativeWords = ['سيء', 'مشكلة', 'خطأ', 'لا يعمل'];
        
        let score = 0;
        positiveWords.forEach(word => {
            if (text.includes(word)) score++;
        });
        negativeWords.forEach(word => {
            if (text.includes(word)) score--;
        });
        
        const sentiment = score > 0 ? 'إيجابي' : score < 0 ? 'سلبي' : 'محايد';
        console.log(`تحليل المشاعر: ${sentiment} (درجة: ${score})`);
    }

    initSmartRecommendations() {
        // توصيات بناءً على سلوك المستخدم
        const recommendations = {
            scroll: 'services',
            click: 'portfolio',
            time: 'contact'
        };
        
        // إظهار التوصيات
        setTimeout(() => {
            this.showRecommendation('services');
        }, 10000);
    }

    showRecommendation(type) {
        const messages = {
            services: 'هل تريد استكشاف خدماتنا المتقدمة؟',
            portfolio: 'شاهد أحدث أعمالنا في معرض الصور',
            contact: 'تواصل معنا لبدء مشروعك الجديد'
        };
        
        if (messages[type]) {
            this.showNotification(messages[type], 'info');
        }
    }

    // 35. تكامل الطقس
    initWeatherIntegration() {
        // محاكاة بيانات الطقس
        setInterval(() => {
            const temp = 20 + Math.random() * 15;
            const conditions = ['☀️', '⛅', '🌧️', '⚡'];
            const condition = conditions[Math.floor(Math.random() * conditions.length)];
            
            this.updateWeather(temp, condition);
        }, 60000); // كل دقيقة
    }

    updateWeather(temp, condition) {
        const weatherElement = document.querySelector('.weather-display');
        if (weatherElement) {
            weatherElement.innerHTML = `${condition} ${Math.round(temp)}°C`;
        }
    }

    // 36. تأثيرات قائمة على الوقت
    initTimeBasedEffects() {
        // تغيير الخلفية حسب الوقت
        const updateBackground = () => {
            const hour = new Date().getHours();
            let gradient;
            
            if (hour < 6) {
                gradient = 'linear-gradient(135deg, #0a1425, #001a33)'; // ليل
            } else if (hour < 12) {
                gradient = 'linear-gradient(135deg, #0066cc, #00cc88)'; // صباح
            } else if (hour < 18) {
                gradient = 'linear-gradient(135deg, #00a8ff, #0be881)'; // ظهيرة
            } else {
                gradient = 'linear-gradient(135deg, #9c88ff, #ff3cac)'; // مساء
            }
            
            document.body.style.background = gradient;
        };
        
        updateBackground();
        setInterval(updateBackground, 60000); // تحديث كل دقيقة
    }

    // 37. تفضيلات المستخدم
    initUserPreferences() {
        // تحميل التفضيلات
        this.loadPreferences();
        
        // حفظ التفضيلات
        this.savePreferences();
    }

    loadPreferences() {
        const prefs = JSON.parse(localStorage.getItem('seastar-prefs')) || {};
        
        // تطبيق التفضيلات
        if (prefs.theme) this.applyTheme(prefs.theme);
        if (prefs.volume) this.setVolume(prefs.volume);
        if (prefs.animations === false) document.body.classList.add('no-animations');
    }

    savePreferences() {
        // حفظ التفضيلات عند الخروج
        window.addEventListener('beforeunload', () => {
            const prefs = {
                theme: localStorage.getItem('seastar-theme'),
                volume: document.getElementById('volumeControl')?.value || 0.5,
                animations: !document.body.classList.contains('no-animations')
            };
            
            localStorage.setItem('seastar-prefs', JSON.stringify(prefs));
        });
    }

    // 38. وضع عدم الاتصال
    initOfflineMode() {
        // كشف حالة الاتصال
        window.addEventListener('online', () => {
            this.showNotification('تم استعادة الاتصال بالإنترنت', 'success');
            document.body.classList.remove('offline');
        });
        
        window.addEventListener('offline', () => {
            this.showNotification('أنت غير متصل بالإنترنت', 'warning');
            document.body.classList.add('offline');
        });
        
        // خدمة Worker للتخزين المؤقت
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js')
                .then(() => console.log('Service Worker registered'))
                .catch(err => console.log('Service Worker registration failed:', err));
        }
    }

    // 39. تطبيق ويب تقدمي (PWA)
    initPWA() {
        // إضافة زر تثبيت التطبيق
        let deferredPrompt;
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            
            this.showInstallButton();
        });
        
        // تثبيت التطبيق
        window.installApp = () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        this.showNotification('تم تثبيت التطبيق بنجاح!', 'success');
                    }
                    deferredPrompt = null;
                });
            }
        };
    }

    showInstallButton() {
        const installBtn = document.createElement('button');
        installBtn.className = 'install-btn hud-element';
        installBtn.innerHTML = '<i class="fas fa-download"></i> تثبيت التطبيق';
        installBtn.onclick = window.installApp;
        
        installBtn.style.position = 'fixed';
        installBtn.style.top = '180px';
        installBtn.style.right = '30px';
        installBtn.style.zIndex = '100';
        
        document.body.appendChild(installBtn);
    }

    // 40. WebGL Effects
    initWebGL() {
        // تهيئة WebGL إذا كان متاحاً
        if (typeof THREE !== 'undefined') {
            this.createWebGLBackground();
        }
    }

    createWebGLBackground() {
        const canvas = document.createElement('canvas');
        canvas.id = 'webgl-canvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '-3';
        document.body.appendChild(canvas);
        
        // هنا يمكن إضافة كود Three.js
    }

    // 41. تأثيرات الفيزياء
    initPhysics() {
        // تأثيرات سقوط العناصر
        document.querySelectorAll('.physics-element').forEach(element => {
            element.addEventListener('click', () => {
                this.applyPhysics(element);
            });
        });
    }

    applyPhysics(element) {
        gsap.to(element, {
            y: 100,
            rotation: 360,
            duration: 1,
            ease: 'bounce.out'
        });
    }

    // 42. التوليد الإجرائي
    initProceduralGeneration() {
        // توليد عناصر عشوائية
        this.generateProceduralElements();
    }

    generateProceduralElements() {
        const container = document.querySelector('.procedural-container');
        if (container) {
            for (let i = 0; i < 10; i++) {
                const element = document.createElement('div');
                element.className = 'procedural-element';
                element.style.left = `${Math.random() * 100}%`;
                element.style.top = `${Math.random() * 100}%`;
                element.style.background = this.getRandomColor();
                element.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
                
                container.appendChild(element);
            }
        }
    }

    getRandomColor() {
        const colors = ['#00a8ff', '#0be881', '#9c88ff', '#ff3cac', '#ff9a3c'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // 43. الشبكة العصبية (محاكاة)
    initNeuralNetwork() {
        // محاكاة شبكة عصبية بسيطة
        this.neuralNetwork = {
            inputs: [0, 0, 0],
            weights: [0.3, 0.5, 0.2],
            bias: 0.1,
            
            predict: function() {
                let sum = this.bias;
                this.inputs.forEach((input, i) => {
                    sum += input * this.weights[i];
                });
                return this.activate(sum);
            },
            
            activate: function(x) {
                return 1 / (1 + Math.exp(-x));
            }
        };
        
        // تحديث بناءً على تفاعل المستخدم
        document.addEventListener('click', () => {
            this.neuralNetwork.inputs[0] = Math.random();
            const prediction = this.neuralNetwork.predict();
            
            if (prediction > 0.7) {
                this.showSmartSuggestion();
            }
        });
    }

    showSmartSuggestion() {
        const suggestions = [
            'جرب تغيير الثيم لمشاهدة واجهة جديدة!',
            'هل تعلم أن بإمكانك استخدام الأوامر الصوتية؟',
            'شاهد إنجازاتك في لوحة التحليلات',
            'جرب نظام الدردشة الذكي للحصول على المساعدة'
        ];
        
        const suggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
        this.showNotification(suggestion, 'info');
    }

    // 44. تقنية البلوكشين (محاكاة)
    initBlockchain() {
        // محاكاة نظام البلوكشين
        this.blockchain = {
            chain: [],
            difficulty: 2,
            
            createBlock: function(data) {
                const block = {
                    index: this.chain.length,
                    timestamp: Date.now(),
                    data: data,
                    previousHash: this.chain.length > 0 ? this.chain[this.chain.length - 1].hash : '0',
                    hash: '',
                    nonce: 0
                };
                
                block.hash = this.calculateHash(block);
                return block;
            },
            
            calculateHash: function(block) {
                return btoa(JSON.stringify(block)).slice(0, 64);
            },
            
            addBlock: function(block) {
                this.chain.push(block);
                return block;
            },
            
            isValid: function() {
                for (let i = 1; i < this.chain.length; i++) {
                    const current = this.chain[i];
                    const previous = this.chain[i - 1];
                    
                    if (current.previousHash !== previous.hash) {
                        return false;
                    }
                }
                return true;
            }
        };
        
        // تسجيل الأحداث في البلوكشين
        this.logToBlockchain = (event) => {
            const block = this.blockchain.createBlock({
                event: event,
                userAgent: navigator.userAgent,
                timestamp: new Date().toISOString()
            });
            
            this.blockchain.addBlock(block);
            console.log('Event logged to blockchain:', block);
        };
        
        // تسجيل الأحداث المهمة
        document.addEventListener('click', (e) => {
            if (e.target.matches('.important-event')) {
                this.logToBlockchain('important_click');
            }
        });
    }

    // 45. تأثيرات الكوانتوم (محاكاة)
    initQuantumEffects() {
        // محاكاة تأثيرات الكوانتوم
        this.quantumStates = [
            { state: 'superposition', probability: 0.5 },
            { state: 'entanglement', probability: 0.3 },
            { state: 'tunneling', probability: 0.2 }
        ];
        
        // تأثير عشوائي كل دقيقة
        setInterval(() => {
            this.applyQuantumEffect();
        }, 60000);
    }

    applyQuantumEffect() {
        const random = Math.random();
        let cumulative = 0;
        
        for (const qState of this.quantumStates) {
            cumulative += qState.probability;
            if (random <= cumulative) {
                this.triggerQuantumEffect(qState.state);
                break;
            }
        }
    }

    triggerQuantumEffect(effect) {
        switch(effect) {
            case 'superposition':
                // تأثير التراكب
                document.querySelectorAll('.quantum-element').forEach(el => {
                    gsap.to(el, {
                        opacity: 0.5,
                        scale: 1.2,
                        duration: 1,
                        yoyo: true,
                        repeat: 1
                    });
                });
                break;
                
            case 'entanglement':
                // تأثير التشابك
                const elements = document.querySelectorAll('.quantum-element');
                if (elements.length >= 2) {
                    gsap.to(elements, {
                        x: 'random(-50, 50)',
                        y: 'random(-50, 50)',
                        duration: 1,
                        stagger: 0.1
                    });
                }
                break;
                
            case 'tunneling':
                // تأثير النفق
                document.querySelectorAll('.quantum-element').forEach(el => {
                    el.style.opacity = '0';
                    setTimeout(() => {
                        el.style.opacity = '1';
                    }, 500);
                });
                break;
        }
    }

    // الوظائف المساعدة
    scrollToSection(section) {
        let target;
        
        if (section === 'home') {
            target = 0;
        } else if (section === 'next') {
            const sections = document.querySelectorAll('section');
            const current = window.scrollY;
            let nextSection = sections[0];
            
            sections.forEach(sec => {
                if (sec.offsetTop > current + 100) {
                    if (!nextSection || sec.offsetTop < nextSection.offsetTop) {
                        nextSection = sec;
                    }
                }
            });
            
            target = nextSection.offsetTop;
        } else if (section === 'previous') {
            const sections = document.querySelectorAll('section');
            const current = window.scrollY;
            let prevSection = sections[sections.length - 1];
            
            sections.forEach(sec => {
                if (sec.offsetTop < current - 100) {
                    if (!prevSection || sec.offsetTop > prevSection.offsetTop) {
                        prevSection = sec;
                    }
                }
            });
            
            target = prevSection.offsetTop;
        } else {
            const element = document.getElementById(section);
            if (element) {
                target = element.offsetTop;
            } else {
                target = 0;
            }
        }
        
        window.scrollTo({
            top: target - 80,
            behavior: 'smooth'
        });
    }

    cycleTheme() {
        const themes = ['cyber', 'matrix', 'sunset', 'ocean'];
        const current = localStorage.getItem('seastar-theme') || 'cyber';
        const index = themes.indexOf(current);
        const next = themes[(index + 1) % themes.length];
        
        const themeData = {
            cyber: { primary: '#00a8ff', secondary: '#0be881', bg: '#001a33' },
            matrix: { primary: '#00ff41', secondary: '#00f3ff', bg: '#000' },
            sunset: { primary: '#ff6b6b', secondary: '#ffd93d', bg: '#2d3436' },
            ocean: { primary: '#00b4d8', secondary: '#90e0ef', bg: '#0077b6' }
        };
        
        this.applyTheme(themeData[next]);
        localStorage.setItem('seastar-theme', next);
        this.showNotification(`تم تغيير الثيم إلى ${next}`, 'success');
    }

    setTheme(theme) {
        const themes = {
            cyber: { primary: '#00a8ff', secondary: '#0be881', bg: '#001a33' },
            matrix: { primary: '#00ff41', secondary: '#00f3ff', bg: '#000' },
            sunset: { primary: '#ff6b6b', secondary: '#ffd93d', bg: '#2d3436' },
            ocean: { primary: '#00b4d8', secondary: '#90e0ef', bg: '#0077b6' }
        };
        
        if (themes[theme]) {
            this.applyTheme(themes[theme]);
            localStorage.setItem('seastar-theme', theme);
            this.showNotification(`تم تفعيل ${theme === 'matrix' ? 'الوضع الليلي' : 'الوضع النهاري'}`, 'success');
        }
    }

    toggleTheme() {
        const current = localStorage.getItem('seastar-theme') || 'cyber';
        const next = current === 'matrix' ? 'ocean' : 'matrix';
        this.setTheme(next);
    }

    playScrollSound() {
        if (typeof Tone !== 'undefined') {
            const synth = new Tone.Synth({
                oscillator: { type: 'sine' }
            }).toDestination();
            
            synth.triggerAttackRelease("C5", "16n");
        }
    }

    playTimelineSound() {
        if (typeof Tone !== 'undefined') {
            const synth = new Tone.Synth({
                oscillator: { type: 'triangle' }
            }).toDestination();
            
            synth.triggerAttackRelease("E4", "8n");
        }
    }

    clearOldData() {
        // تنظيف البيانات القديمة
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        
        // تنظيف الأحداث القديمة
        this.analyticsData.clickEvents = this.analyticsData.clickEvents.filter(event => {
            const eventTime = new Date(event.timestamp).getTime();
            return now - eventTime < oneDay;
        });
        
        // تنظيف localStorage
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith('temp-')) {
                const data = JSON.parse(localStorage.getItem(key));
                if (data && now - data.timestamp > oneDay) {
                    localStorage.removeItem(key);
                }
            }
        });
    }

    showAnalytics() {
        const analytics = {
            الصفحات: this.analyticsData.pageViews,
            النقاط: this.userPoints,
            التفاعلات: this.analyticsData.clickEvents.length,
            الوقت: `${Math.floor(this.analyticsData.timeSpent / 60000)} دقيقة`
        };
        
        let message = 'الإحصائيات الحية:\n';
        for (const [key, value] of Object.entries(analytics)) {
            message += `${key}: ${value}\n`;
        }
        
        this.showNotification(message, 'info');
    }

    toggleElements() {
        document.body.classList.toggle('elements-hidden');
        const isHidden = document.body.classList.contains('elements-hidden');
        
        this.showNotification(
            isHidden ? 'تم إخفاء العناصر المساعدة' : 'تم إظهار العناصر المساعدة',
            'info'
        );
    }
}

// تشغيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    // إنشاء النظام
    window.seaStar = new SeaStarSystem();
    
    // إضافة التأثيرات بعد التحميل
    setTimeout(() => {
        // تحريك عناصر الواجهة
        gsap.from('nav', {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
        
        gsap.from('.hero-section', {
            y: 50,
            opacity: 0,
            duration: 1.5,
            delay: 0.5,
            ease: 'power3.out'
        });
        
        // تأثيرات على العناصر المهمة
        gsap.utils.toArray('.feature-item').forEach((item, i) => {
            gsap.from(item, {
                scale: 0,
                rotation: 360,
                duration: 1,
                delay: 0.2 * i,
                ease: 'back.out(1.7)'
            });
        });
        
        // بدء الجسيمات
        if (typeof particlesJS !== 'undefined') {
            particlesJS.load('particles-js', 'particles.json', function() {
                console.log('callback - particles.js config loaded');
            });
        }
    }, 100);
});

// دعم المتصفحات القديمة
if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function() {
        return window.webkitRequestAnimationFrame ||
               window.mozRequestAnimationFrame ||
               function(callback) {
                   window.setTimeout(callback, 1000 / 60);
               };
    })();
}

// Handle errors gracefully
window.addEventListener('error', (e) => {
    console.error('SeaStar System Error:', e.error);
    
    // إظهار رسالة خطأ ودية
    const errorMsg = document.createElement('div');
    errorMsg.className = 'error-message';
    errorMsg.innerHTML = `
        <div class="error-content">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>عذراً، حدث خطأ تقني</h3>
            <p>جاري إصلاح المشكلة تلقائياً...</p>
            <button onclick="location.reload()">إعادة تحميل الصفحة</button>
        </div>
    `;
    
    errorMsg.style.position = 'fixed';
    errorMsg.style.top = '0';
    errorMsg.style.left = '0';
    errorMsg.style.width = '100%';
    errorMsg.style.height = '100%';
    errorMsg.style.background = 'rgba(0, 0, 0, 0.9)';
    errorMsg.style.display = 'flex';
    errorMsg.style.justifyContent = 'center';
    errorMsg.style.alignItems = 'center';
    errorMsg.style.zIndex = '99999';
    
    document.body.appendChild(errorMsg);
});

// Service Worker للتخزين المؤقت
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

// PWA Install Prompt
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showInstallPromotion();
});

function showInstallPromotion() {
    const installBtn = document.createElement('button');
    installBtn.textContent = '📲 تثبيت التطبيق';
    installBtn.className = 'install-promotion';
    installBtn.onclick = installApp;
    
    document.body.appendChild(installBtn);
}

function installApp() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    }
}
