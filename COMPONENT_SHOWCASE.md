# Aether AI Components - Feature Showcase

## 🎯 Component Overview

A comprehensive breakdown of each component's features, data structure, and interactive capabilities.

---

## 1️⃣ Navbar Component

### File: `src/components/navbar.tsx`

**Purpose**: Sticky header with navigation, logo, and mobile menu

**Key Features**:
- ✓ Fixed positioning with glassmorphic backdrop blur
- ✓ Responsive logo with gradient icon (A)
- ✓ Desktop navigation links (Features, Pricing, FAQ)
- ✓ Mobile hamburger menu (hidden on md+)
- ✓ CTA button with gradient and glow effects
- ✓ Smooth transitions on all interactions

**State Management**:
```typescript
const [isOpen, setIsOpen] = useState(false);  // Mobile menu toggle
```

**Design Elements**:
- Background: `bg-black/40 backdrop-blur-md` (glassmorphism)
- Logo: Gradient background `from-purple-500 to-blue-500`
- Links: `text-gray-300 hover:text-white` transitions
- Button: Gradient with shadow glow `hover:shadow-purple-500/50`

**Responsive Behavior**:
- Mobile: Shows hamburger menu
- Tablet (sm+): Shows full navigation
- Desktop (md+): Shows desktop layout with full nav

---

## 2️⃣ Hero Component

### File: `src/components/hero.tsx`

**Purpose**: Full-screen hero section with headline, subtitle, and CTA buttons

**Key Features**:
- ✓ Min-height screen (100vh)
- ✓ Animated background gradient orbs (3 layered circles)
- ✓ Gradient text effect on main heading
- ✓ Badge with Sparkles icon
- ✓ Dual CTA buttons (primary + secondary)
- ✓ Trust indicators section
- ✓ Center-aligned responsive layout

**Design Elements**:
```css
/* Background Orbs */
- top: purple-500/20, w-96 h-96
- top-right: blue-500/20, w-80 h-80
- bottom: purple-500/10, w-96 h-96
```

**Typography**:
- Main heading: `text-7xl md:text-6xl lg:text-7xl` (responsive clamp)
- Gradient text: `from-purple-400 via-blue-400 to-purple-400`
- Subtitle: `text-lg md:text-xl` with gray-400 color

**Button Styles**:
- Primary: Gradient background with glow shadow
- Secondary: Border-only with hover background

**Responsive Sizes**:
- Mobile: `text-4xl`
- Tablet: `text-5xl`
- Desktop: `text-6xl lg:text-7xl`

---

## 3️⃣ Bento Grid Component

### File: `src/components/bento-grid.tsx`

**Purpose**: Showcase 6 key features in a masonry-style grid layout

**Data Structure**:
```typescript
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: string;      // e.g., "md:col-span-2"
  rowSpan: string;      // e.g., "md:row-span-2"
}

const features: Feature[] = [
  { id: '1', title: 'Advanced Neural Processing', ... },
  { id: '2', title: 'Lightning Fast', ... },
  // ... 6 total features
];
```

**Features**:
1. Advanced Neural Processing (2x2 span)
2. Lightning Fast (1x1 span)
3. Enterprise Security (1x1 span)
4. Real-Time Analytics (1x1 span)
5. Developer Friendly (1x1 span)
6. Workflow Automation (2x1 span)

**Design Elements**:
- Cards: `bg-gradient-to-br from-white/5 to-white/[0.02]`
- Border: `border border-white/10 hover:border-purple-500/50`
- Icon Backgrounds: Individual colors (purple, yellow, blue, green, pink, cyan)
- Hover Effect: Gradient overlay `from-purple-500/20 to-blue-500/20`

**Responsive Grid**:
- Mobile: 1 column
- Tablet: 2 columns (sm:grid-cols-2)
- Desktop: 4 columns (md:grid-cols-4)

---

## 4️⃣ Pricing Component

### File: `src/components/pricing.tsx`

**Purpose**: Display pricing tiers with monthly/yearly toggle

**Data Structure**:
```typescript
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  { id: 'starter', name: 'Starter', monthlyPrice: 29, yearlyPrice: 290, ... },
  { id: 'professional', name: 'Professional', monthlyPrice: 99, yearlyPrice: 990, isPopular: true, ... },
  { id: 'enterprise', name: 'Enterprise', monthlyPrice: 299, yearlyPrice: 2990, ... },
];
```

**Pricing Plans**:

| Plan | Monthly | Yearly | API Calls | Support | Popular |
|------|---------|--------|-----------|---------|---------|
| Starter | $29 | $290 | 10K | Email | ✗ |
| Professional | $99 | $990 | 100K | Priority | ✓ |
| Enterprise | $299 | $2990 | Unlimited | 24/7 | ✗ |

**State Management**:
```typescript
const [isYearly, setIsYearly] = useState(false);
```

**Features**:
- ✓ Toggle switch for monthly/yearly pricing
- ✓ Dynamic price calculation
- ✓ Yearly savings badge (17% discount)
- ✓ Popular badge on Professional plan
- ✓ Feature lists with checkmark icons
- ✓ Responsive grid layout

**Design Elements**:
- Popular Plan: `ring-2 ring-purple-500/50 lg:scale-105`
- Cards: Hover effects with shadow transitions
- Buttons: Gradient for popular, border for others
- Features: Green checkmarks, organized list

---

## 5️⃣ FAQ Component

### File: `src/components/faq.tsx`

**Purpose**: Accordion-style frequently asked questions

**Data Structure**:
```typescript
interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  { id: '1', question: 'What is Aether AI...?', answer: '...' },
  // ... 8 total items
];
```

**FAQ Topics**:
1. What is Aether AI and how does it work?
2. Can I cancel my subscription anytime?
3. Is there a free trial available?
4. How secure is my data?
5. What kind of support do you offer?
6. Can I integrate Aether AI with my existing tools?
7. How do I get started?
8. What happens if I exceed my API call limits?

**State Management**:
```typescript
const [openId, setOpenId] = useState<string | null>(null);
```

**Interactive Features**:
- ✓ Accordion expand/collapse on click
- ✓ ChevronDown icon rotation animation
- ✓ Smooth transitions between states
- ✓ Only one item open at a time
- ✓ CTA section at bottom for more support

**Design Elements**:
- Container: `border border-white/10 hover:border-purple-500/50`
- Open State: Gradient background `from-purple-500/10 to-blue-500/10`
- Icon Rotation: `group-hover:opacity-100 transition-opacity`
- Answers: `text-gray-400` with readable line height

---

## 6️⃣ Footer Component

### File: `src/components/footer.tsx`

**Purpose**: Multi-column footer with links, branding, and social icons

**Data Structures**:
```typescript
interface FooterSection {
  title: string;
  links: Array<{ label: string; href: string }>;
}

const footerSections: FooterSection[] = [
  { title: 'Product', links: [...] },
  { title: 'Company', links: [...] },
  { title: 'Resources', links: [...] },
  { title: 'Legal', links: [...] },
];

const socialLinks = [
  { icon: MessageCircle, href: '#', label: 'Twitter' },
  { icon: Code2, href: '#', label: 'GitHub' },
  { icon: ExternalLink, href: '#', label: 'LinkedIn' },
  { icon: Mail, href: '#', label: 'Email' },
];
```

**Footer Sections**:

| Product | Company | Resources | Legal |
|---------|---------|-----------|-------|
| Features | About | Documentation | Privacy |
| Pricing | Blog | API Reference | Terms |
| Security | Careers | Community | Cookie Policy |
| Roadmap | Contact | Status | Compliance |

**Design Elements**:
- Border: `border-t border-white/10`
- Background: `bg-black/40 backdrop-blur-md`
- Section Titles: `text-white font-semibold text-sm`
- Links: `text-gray-400 hover:text-white` transitions
- Social Icons: `hover:bg-white/10 hover:text-white`

**Responsive Layout**:
- Mobile: 2 columns + logo
- Tablet: 2-3 columns (sm:)
- Desktop: 5 columns (md:) - logo + 4 sections

---

## 🎨 Shared Design Patterns

### Button Styles
```typescript
// Primary CTA
className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 
  text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 
  transition-all duration-300"

// Secondary Button
className="px-8 py-4 border border-white/20 text-white font-semibold 
  hover:bg-white/5 hover:border-white/40 transition-all duration-300"
```

### Card Styles
```typescript
className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] 
  border border-white/10 hover:border-purple-500/50 
  transition-all duration-300 group"
```

### Icon Containers
```typescript
className="p-3 w-fit rounded-lg bg-white/5 
  group-hover:bg-white/10 transition-all duration-300"
```

### Hover Effects
```typescript
// Gradient Overlay
"absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 
  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
```

---

## 📱 Responsive Utilities

### Mobile-First Approach
```typescript
// Example: Text sizing
className="text-sm sm:text-base md:text-lg lg:text-xl"

// Example: Padding
className="px-4 sm:px-6 lg:px-8"

// Example: Grid
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
```

### Visibility Helpers
```typescript
// Hidden on mobile, shown on desktop
className="hidden md:block"

// Shown on mobile, hidden on desktop
className="md:hidden"
```

---

## 🔄 State Management Summary

| Component | State | Purpose |
|-----------|-------|---------|
| Navbar | `isOpen` | Mobile menu toggle |
| Pricing | `isYearly` | Monthly/yearly pricing toggle |
| FAQ | `openId` | Accordion active item |

---

## 🎯 Icon Library (Lucide React)

**Imported Icons**:
- `Navbar`: Menu, X
- `Hero`: ArrowRight, Sparkles
- `BentoGrid`: Brain, Zap, Shield, BarChart3, Code2, Workflow
- `Pricing`: Check
- `FAQ`: ChevronDown
- `Footer`: Mail, Code2, MessageCircle, ExternalLink

---

## ✨ Animation Effects

### Transitions
- **Duration**: 300ms (standard)
- **Easing**: ease-in-out
- **Properties**: color, background, border, shadow, transform

### Specific Animations
- **Buttons**: Hover glow shadow + scale
- **Cards**: Border color + background opacity
- **Icons**: Rotation (accordion chevron)
- **Toggle**: Smooth slide transition
- **Gradients**: Pulse animation on hero text

---

## 🚀 Performance Considerations

- **Code Splitting**: Each component is a separate module
- **Tree Shaking**: Unused exports removed at build time
- **CSS Optimization**: Tailwind purges unused styles
- **Icon Optimization**: Only loaded icons are bundled
- **Static Rendering**: No dynamic data at build time (except interactions)

---

## 📖 Code Quality

- **TypeScript**: 100% type-safe
- **Interfaces**: Defined for all data structures
- **No Magic Strings**: Constants used for configuration
- **Accessibility**: Semantic HTML, ARIA labels where needed
- **Responsive**: Mobile-first approach with breakpoints

---

This component showcase demonstrates professional, production-ready code following industry best practices and modern React patterns.
