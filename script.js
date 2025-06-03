// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Sound management
let soundEnabled = true;
const alarmSound = document.getElementById('alarm-sound');

// Initialize the experience
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initInteractivity();
    initSoundToggle();
    
    // Hide loading and show content
    document.body.style.opacity = '1';
});

function initScrollAnimations() {
    // Hero section animation
    gsap.fromTo('.main-title', {
        scale: 0.5,
        rotation: -10,
        opacity: 0
    }, {
        scale: 1,
        rotation: -5,
        opacity: 1,
        duration: 2,
        ease: "back.out(1.7)"
    });

    gsap.fromTo('.subtitle', {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 0.8,
        duration: 1.5,
        delay: 0.5,
        ease: "power2.out"
    });

    // Scene 1: Wake Up - Alarm chaos
    ScrollTrigger.create({
        trigger: "#scene-1",
        start: "top 80%",
        onEnter: () => {
            gsap.set("#scene-1", { opacity: 1, y: 0 });
            
            // Animate alarm blocks with staggered harsh entrances
            gsap.fromTo("#scene-1 .alarm-block", {
                scale: 0,
                rotation: -45,
                opacity: 0
            }, {
                scale: 1,
                rotation: (i) => [-5, 3, -8][i],
                opacity: 1,
                duration: 0.8,
                stagger: 0.3,
                ease: "back.out(2)",
                onStart: () => playAlarmSound()
            });

            // Shake the entire scene
            gsap.to("#scene-1", {
                x: "random(-5, 5)",
                y: "random(-2, 2)",
                duration: 0.1,
                repeat: 10,
                yoyo: true
            });
        }
    });

    // Scene 2: Breakfast - Food grid animation
    ScrollTrigger.create({
        trigger: "#scene-2",
        start: "top 80%",
        onEnter: () => {
            gsap.set("#scene-2", { opacity: 1, y: 0 });
            
            gsap.fromTo("#scene-2 .food-block", {
                scale: 0,
                rotation: 0
            }, {
                scale: 1,
                rotation: "random(-10, 10)",
                duration: 0.6,
                stagger: 0.1,
                ease: "elastic.out(1, 0.5)"
            });
        }
    });

    // Scene 3: Code - Typewriter effect
    ScrollTrigger.create({
        trigger: "#scene-3",
        start: "top 80%",
        onEnter: () => {
            gsap.set("#scene-3", { opacity: 1, y: 0 });
            
            const codeLines = document.querySelectorAll("#scene-3 .code-line");
            gsap.fromTo(codeLines, {
                width: 0,
                opacity: 0
            }, {
                width: "100%",
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "none"
            });

            // Error line intense blink
            gsap.to("#scene-3 .error-line", {
                backgroundColor: "#ff0000",
                duration: 0.1,
                repeat: 5,
                yoyo: true,
                delay: 2
            });
        }
    });

    // Scene 4: Library - Silence visualization
    ScrollTrigger.create({
        trigger: "#scene-4",
        start: "top 80%",
        onEnter: () => {
            gsap.set("#scene-4", { opacity: 1, y: 0 });
            
            // Silence bars shrinking animation
            gsap.fromTo("#scene-4 .silence-bar", {
                scaleX: 1
            }, {
                scaleX: 0.1,
                duration: 2,
                stagger: 0.5,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });

            // Tired eyes blinking
            gsap.to("#scene-4 .tired-eyes", {
                opacity: 0.1,
                duration: 0.2,
                repeat: -1,
                repeatDelay: 2.8,
                ease: "power2.inOut"
            });
        }
    });

    // Scene 5: Gym - Choice animation
    ScrollTrigger.create({
        trigger: "#scene-5",
        start: "top 80%",
        onEnter: () => {
            gsap.set("#scene-5", { opacity: 1, y: 0 });
            
            gsap.fromTo("#scene-5 .choice-block", {
                scale: 0,
                rotation: 0
            }, {
                scale: 1,
                rotation: (i) => i === 0 ? -3 : 3,
                duration: 1,
                stagger: 0.3,
                ease: "bounce.out"
            });

            // VS text pulsing
            gsap.to("#scene-5 .vs", {
                scale: 1.2,
                opacity: 1,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut"
            });
        }
    });

    // Scene 6: Dinner - Sad repetition
    ScrollTrigger.create({
        trigger: "#scene-6",
        start: "top 80%",
        onEnter: () => {
            gsap.set("#scene-6", { opacity: 1, y: 0 });
            
            gsap.fromTo("#scene-6 .plate", {
                scale: 0,
                rotation: 10
            }, {
                scale: 1,
                rotation: 0,
                duration: 1,
                ease: "back.out(1.7)"
            });

            // Food items appear with regret
            gsap.fromTo("#scene-6 .food-item", {
                scale: 0,
                opacity: 0
            }, {
                scale: 1,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out"
            });
        }
    });

    // Scene 7: Sleep - Tabs chaos
    ScrollTrigger.create({
        trigger: "#scene-7",
        start: "top 80%",
        onEnter: () => {
            gsap.set("#scene-7", { opacity: 1, y: 0 });
            
            // Tabs floating in chaotically
            gsap.fromTo("#scene-7 .tab", {
                y: -100,
                rotation: "random(-45, 45)",
                opacity: 0
            }, {
                y: 0,
                rotation: (i) => i % 2 === 0 ? -1 : 1,
                opacity: 1,
                duration: 1,
                stagger: 0.15,
                ease: "bounce.out"
            });

            // Restart button dramatic entrance
            gsap.fromTo("#scene-7 .restart-button", {
                scale: 0,
                rotation: 180
            }, {
                scale: 1,
                rotation: 0,
                duration: 1.5,
                delay: 2,
                ease: "elastic.out(1, 0.3)"
            });
        }
    });

    // Parallax background effects
    gsap.utils.toArray('.scene-bg').forEach((bg, i) => {
        gsap.to(bg, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: bg.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });

    // Progressive scene revealing
    gsap.utils.toArray('.scene').forEach((scene, i) => {
        gsap.fromTo(scene, {
            clipPath: "inset(100% 0% 0% 0%)"
        }, {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: scene,
                start: "top 90%",
                end: "top 20%",
                scrub: 1
            }
        });
    });
}

function initInteractivity() {
    // Gym choice interaction
    const choiceBlocks = document.querySelectorAll('.choice-block');
    choiceBlocks.forEach(block => {
        block.addEventListener('mouseenter', () => {
            gsap.to(block, {
                scale: 1.1,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
            
            // Add shake effect
            gsap.to(block, {
                x: "random(-2, 2)",
                duration: 0.1,
                repeat: 3,
                yoyo: true
            });
        });

        block.addEventListener('mouseleave', () => {
            const originalRotation = block.classList.contains('lift') ? -3 : 3;
            gsap.to(block, {
                scale: 1,
                rotation: originalRotation,
                x: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        block.addEventListener('click', () => {
            // Dramatic choice reaction
            gsap.to(block, {
                scale: 1.3,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.inOut"
            });

            // Flash effect
            const flash = document.createElement('div');
            flash.style.position = 'fixed';
            flash.style.top = '0';
            flash.style.left = '0';
            flash.style.width = '100%';
            flash.style.height = '100%';
            flash.style.backgroundColor = block.classList.contains('lift') ? '#ffffff' : '#666666';
            flash.style.opacity = '0.8';
            flash.style.zIndex = '9999';
            flash.style.pointerEvents = 'none';
            document.body.appendChild(flash);

            gsap.to(flash, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => document.body.removeChild(flash)
            });
        });
    });

    // Restart button functionality
    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', () => {
        // Dramatic restart animation
        gsap.to(window, {
            scrollTo: { y: 0 },
            duration: 2,
            ease: "power2.inOut"
        });

        // Screen distortion effect
        gsap.to('body', {
            filter: 'hue-rotate(360deg)',
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.set('body', { filter: 'none' });
            }
        });
    });

    // Dinner plate hover sadness
    const dinnerRepeat = document.querySelector('.dinner-repeat');
    dinnerRepeat.addEventListener('mouseenter', () => {
        gsap.to('.plate', {
            rotation: -2,
            scale: 0.95,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    dinnerRepeat.addEventListener('mouseleave', () => {
        gsap.to('.plate', {
            rotation: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    // Tab interactions
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('mouseenter', () => {
            gsap.to(tab, {
                scale: 1.05,
                rotation: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        tab.addEventListener('mouseleave', () => {
            const originalRotation = Array.from(tabs).indexOf(tab) % 2 === 0 ? -1 : 1;
            gsap.to(tab, {
                scale: 1,
                rotation: originalRotation,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Brutal cursor interactions
    document.addEventListener('mousemove', (e) => {
        if (Math.random() < 0.01) { // 1% chance
            gsap.to('body', {
                filter: 'invert(1)',
                duration: 0.05,
                yoyo: true,
                repeat: 1
            });
        }
    });
}

function initSoundToggle() {
    const soundToggle = document.querySelector('.sound-toggle');
    const soundStatus = document.getElementById('sound-status');

    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        soundStatus.textContent = soundEnabled ? 'SOUND: ON' : 'SOUND: OFF';
        
        // Visual feedback
        gsap.to(soundToggle, {
            scale: 1.2,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
    });
}

function playAlarmSound() {
    if (soundEnabled && alarmSound) {
        alarmSound.currentTime = 0;
        alarmSound.play().catch(e => console.log('Audio play failed:', e));
    }
}

// Advanced scroll effects
function initAdvancedScrollEffects() {
    // Noise effect intensity based on scroll
    ScrollTrigger.create({
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
            const progress = self.progress;
            const noiseOverlay = document.querySelector('.noise-overlay');
            if (noiseOverlay) {
                noiseOverlay.style.opacity = progress * 0.1;
            }
        }
    });

    // Scene transitions with glitch effects
    gsap.utils.toArray('.scene').forEach((scene, i) => {
        ScrollTrigger.create({
            trigger: scene,
            start: "top center",
            end: "bottom center",
            onEnter: () => addGlitchEffect(scene),
            onLeave: () => removeGlitchEffect(scene),
            onEnterBack: () => addGlitchEffect(scene),
            onLeaveBack: () => removeGlitchEffect(scene)
        });
    });
}

function addGlitchEffect(element) {
    gsap.to(element, {
        filter: 'contrast(1.2) saturate(1.1)',
        duration: 0.3,
        ease: "power2.out"
    });
}

function removeGlitchEffect(element) {
    gsap.to(element, {
        filter: 'none',
        duration: 0.3,
        ease: "power2.out"
    });
}

// Initialize advanced effects
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initAdvancedScrollEffects, 1000);
});

// Konami code easter egg for extra brutalism
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    konamiCode = konamiCode.slice(-konamiSequence.length);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateBrutalMode();
    }
});

function activateBrutalMode() {
    // MAXIMUM BRUTALISM
    gsap.to('body', {
        filter: 'contrast(2) saturate(0) invert(1)',
        duration: 0.1,
        repeat: 20,
        yoyo: true
    });
    
    // All animations become more intense
    gsap.globalTimeline.timeScale(2);
    
    // Add screen shake
    gsap.to('body', {
        x: "random(-10, 10)",
        y: "random(-10, 10)",
        duration: 0.1,
        repeat: 50,
        yoyo: true,
        onComplete: () => {
            gsap.set('body', { x: 0, y: 0, filter: 'none' });
            gsap.globalTimeline.timeScale(1);
        }
    });
} 