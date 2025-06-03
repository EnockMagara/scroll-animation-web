# UP. DOWN. REPEAT. — Enock's Day at Campus

A brutalist, scroll-animated webpage showcasing the gritty, bold moments from Enock's routine at NYUAD. This immersive experience uses harsh typography, limited color palette, oversized elements, and jarring animations to create an intentionally intense but expressive journey through a typical day.

## 🎨 Design Philosophy

**Brutalist Web Design Features:**
- Bold, hard-edged typography (Oswald + JetBrains Mono)
- Limited color palette: Black (#000000), White (#ffffff), Deep Maroon (#800020), Dusty Beige (#c8b99c)
- Harsh grid layouts and grid-snapping
- Intentional UX tension and jarring transitions
- Oversized elements and minimal striking interactivity

## 🎬 Scene Breakdown

### [1] 08:00 AM — Reality Hits
- **Visual:** Three alarm blocks shaking violently
- **Effect:** Screen shake + harsh beep sound
- **Interaction:** Scroll triggers alarm chaos

### [2] 08:30 AM — D2 Feeds Me  
- **Visual:** Food grid with pancakes, coffee, and regret
- **Effect:** Flickering GIF-style animation
- **Interaction:** Food blocks appear with elastic bounce

### [3] 09:00 AM — Lines of Logic
- **Visual:** Monospaced code block with console errors
- **Effect:** Typewriter animation + error line blinking
- **Interaction:** Code appears line by line

### [4] 1:00 PM — Into the Quiet Zone
- **Visual:** Silence bars + tired eyes
- **Effect:** Shrinking bars + eye blinking animation
- **Interaction:** Ambient visualization of library silence

### [5] 4:00 PM — To Lift or To Nap
- **Visual:** Two opposing choice blocks (LIFT vs NAP)
- **Effect:** Hover triggers shake + click creates flash effect
- **Interaction:** Click for dramatic choice reaction with screen flash

### [6] 6:00 PM — D2 Again?
- **Visual:** Same plate from breakfast, somehow sadder
- **Effect:** Hover shows plate sadness animation
- **Interaction:** Plate rotates and scales down on hover

### [7] 10:00 PM — Chrome Tabs > Pillow
- **Visual:** Floating browser tabs (YouTube, Reddit, Instagram, etc.)
- **Effect:** Chaotic tab entrance + restart button
- **Interaction:** "REPEAT CYCLE" button scrolls back to top with distortion

## 🔧 Technical Features

### Scroll Animations (GSAP ScrollTrigger)
- Progressive scene revealing with clip-path masking
- Parallax background effects
- Staggered entrance animations
- Scene-specific trigger animations

### Interactive Elements
- **Sound Toggle:** Top-right corner (SOUND: ON/OFF)
- **Hover Effects:** All major elements have harsh hover states
- **Click Interactions:** Gym choices, restart button, tabs
- **Brutal Cursor:** Random screen inversions (1% chance on mouse move)

### Easter Eggs
- **Konami Code:** ↑↑↓↓←→←→BA for MAXIMUM BRUTALISM mode
- **Random Glitches:** Occasional screen effects during interaction

## 🎵 Audio Experience
- Embedded alarm sound (base64 encoded for instant load)
- Sound can be toggled on/off via top-right button
- Alarm sound triggers during Scene 1 wake-up sequence

## 📱 Responsive Design
- Mobile-optimized typography scaling
- Grid adaptations for smaller screens
- Touch-friendly interaction zones
- Maintains brutalist aesthetic across devices

## 🚀 Getting Started

1. **Clone or download** the repository
2. **Open `index.html`** in any modern browser
3. **Scroll down** to begin Enock's day
4. **Interact** with elements for additional effects
5. **Toggle sound** in top-right corner if desired

## 🛠️ Dependencies

- **GSAP 3.12.2** (ScrollTrigger plugin)
- **Google Fonts:** Oswald + JetBrains Mono
- **Modern Browser:** Chrome, Firefox, Safari, Edge

## 💻 File Structure

```
scroll-animation/
├── index.html          # Main HTML structure
├── style.css           # Brutalist CSS styling
├── script.js           # GSAP animations & interactions
└── README.md           # This documentation
```

## 🎯 Design Principles Applied

1. **Harsh Typography:** Large, uppercase, skewed text
2. **Limited Color Palette:** Strictly black, white, maroon, beige
3. **Grid Snapping:** All elements align to strict grid system
4. **Intentional Tension:** Jarring transitions and uncomfortable spacing
5. **Bold Interactions:** Oversized hover effects and dramatic feedback
6. **Minimal Color Usage:** Monochrome dominance with strategic color accents

## 🔥 Performance Optimizations

- GSAP for hardware-accelerated animations
- CSS transforms for smooth transitions
- Embedded base64 audio to avoid HTTP requests
- Optimized font loading with preconnect
- Efficient ScrollTrigger implementation

---

**Experience the brutalist web.** Scroll to enter Enock's relentless daily cycle.

*Built with intentional harshness. Designed to make you feel something.* 