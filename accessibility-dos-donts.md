# Accessibility Dos & Don'ts

> **Kiara Design System Accessibility Guidelines**  
> This guide provides practical, actionable dos and don'ts for building accessible interfaces with the Kiara Design System.

---

## Table of Contents

- [Color & Contrast](#-color--contrast)
- [Keyboard & Navigation](#️-keyboard--navigation)
- [Content & Structure](#-content--structure)
- [Forms & Inputs](#-forms--inputs)
- [Images & Media](#️-images--media)
- [Interactive Components](#-interactive-components)
- [Motion & Animations](#-motion--animations)
- [Testing & Documentation](#-testing--documentation)
- [Responsive & Zoom](#-responsive--zoom)
- [Development Practices](#️-development-practices)
- [Resources](#resources)

---

## 🎨 Color & Contrast

| ✅ DO | ❌ DON'T |
|-------|----------|
| Ensure text has **4.5:1** contrast ratio (3:1 for large text ≥24px) | Use low contrast color combinations like light gray on white |
| Use color **AND** another indicator (icon, text, pattern, underline) | Rely on color alone to convey information (e.g., red for errors) |
| Provide high contrast mode support with CSS custom properties | Assume all users see colors the same way or have full color vision |
| Test contrast for **all UI states** (default, hover, focus, active, disabled) | Forget to check contrast on interactive states |
| Use Kiara's semantic color tokens (`--color-text-primary`, `--color-bg-danger`) | Hard-code color values like `#333` or `rgba(0,0,0,0.6)` |
| Design with colorblind users in mind (use patterns, shapes) | Use red/green as the only differentiator |

**Example:**
```jsx
// ✅ Good - Uses icon AND color
<div className="error-message">
  <AlertIcon /> Error: Invalid email format
</div>

// ❌ Bad - Color only
<div className="text-red-500">Error: Invalid email format</div>
```

---

## ⌨️ Keyboard & Navigation

| ✅ DO | ❌ DON'T |
|-------|----------|
| Make **all interactive elements** keyboard accessible (Tab, Enter, Space) | Create keyboard traps users can't escape from |
| Provide **visible focus indicators** with clear contrast (3:1 minimum) | Hide or remove focus outlines for "clean" aesthetics |
| Maintain **logical tab order** (left-to-right, top-to-bottom) | Let tab order jump randomly across the page |
| Include **skip navigation links** for bypass blocks | Force users to tab through entire navigation every time |
| Use **native HTML** buttons (`<button>`) and links (`<a>`) | Use `<div>` or `<span>` with onClick as clickable elements |
| Support **keyboard shortcuts** with visible documentation | Implement shortcuts that conflict with browser/screen reader keys |
| Implement **focus management** in modals, dropdowns, and menus | Leave focus on closed/hidden elements |

**Example:**
```jsx
// ✅ Good - Native button, keyboard accessible
<button onClick={handleClick}>Submit</button>

// ❌ Bad - Div with onClick, not keyboard accessible
<div onClick={handleClick}>Submit</div>

// ✅ Better - If you must use div, add proper ARIA
<div role="button" tabIndex={0} onClick={handleClick} onKeyDown={handleKeyDown}>
  Submit
</div>
```

---

## 📝 Content & Structure

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use **semantic HTML** (`<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<aside>`) | Use `<div>` for everything |
| Follow **proper heading hierarchy** (h1→h2→h3, no skipping) | Skip heading levels (h1→h3) or use headings for styling |
| Write **clear, descriptive link text** that makes sense out of context | Use "click here", "read more", or "learn more" without context |
| Keep content **simple and scannable** with short paragraphs | Write overly complex, jargon-heavy walls of text |
| Provide **text alternatives** for all meaningful images | Leave alt attributes empty on meaningful images |
| Use **lists** (`<ul>`, `<ol>`) for related items | Use `<div>` or `<br>` to simulate lists |
| Define **acronyms** on first use with `<abbr>` | Use unexplained jargon or acronyms |

**Example:**
```html
<!-- ✅ Good - Descriptive link text -->
<a href="/docs/button">Read the Button component documentation</a>

<!-- ❌ Bad - Generic link text -->
<a href="/docs/button">Click here</a>

<!-- ✅ Good - Proper heading hierarchy -->
<h1>Design System</h1>
  <h2>Components</h2>
    <h3>Button</h3>

<!-- ❌ Bad - Skipped heading level -->
<h1>Design System</h1>
  <h3>Button</h3>
```

---

## 🔤 Forms & Inputs

| ✅ DO | ❌ DON'T |
|-------|----------|
| Associate **labels** with every input using `<label>` with `for`/`htmlFor` | Use placeholder text as labels |
| Provide **clear error messages** with suggestions for fixing | Show vague errors like "Invalid input" or "Error" |
| Group related inputs with `<fieldset>` and `<legend>` | Scatter form fields without logical grouping |
| Indicate **required fields** clearly with text (`(required)`) | Only use color or asterisks to show required fields |
| Support **autofill** with proper `autocomplete` attributes | Use generic `type="text"` for everything |
| Show **inline validation** with helpful messages | Only validate on form submit |
| Use **appropriate input types** (`email`, `tel`, `number`, `date`) | Use `type="text"` for all inputs |
| Make error messages **programmatically associated** with inputs (`aria-describedby`) | Display errors that aren't connected to the input |

**Example:**
```jsx
// ✅ Good - Proper label, error handling, autocomplete
<div>
  <label htmlFor="email">Email (required)</label>
  <input
    id="email"
    type="email"
    autocomplete="email"
    aria-describedby="email-error"
    aria-invalid={hasError}
  />
  {hasError && <span id="email-error">Please enter a valid email address</span>}
</div>

// ❌ Bad - No label, placeholder as label
<input type="text" placeholder="Email" />
```

---

## 🖼️ Images & Media

| ✅ DO | ❌ DON'T |
|-------|----------|
| Write **descriptive alt text** that conveys meaning and context | Write "image of..." or repeat the filename |
| Use **empty alt** (`alt=""`) for decorative images | Leave alt attribute missing entirely |
| Provide **captions and transcripts** for videos and audio | Embed videos without text alternatives |
| Make **SVG icons accessible** with `<title>`, `role`, and `aria-label` | Assume screen readers interpret icons visually |
| Use **figure and figcaption** for complex images needing description | Rely only on alt text for complex infographics |
| Provide **text alternatives** for charts, graphs, data visualizations | Display data only visually |
| Ensure **images of text** are avoided; use actual text | Use images for text content |

**Example:**
```jsx
// ✅ Good - Descriptive alt text
<img src="chart.png" alt="Bar chart showing 60% increase in user engagement from Q1 to Q2 2026" />

// ❌ Bad - Generic alt text
<img src="chart.png" alt="Chart" />

// ✅ Good - Decorative image
<img src="decorative-pattern.svg" alt="" role="presentation" />

// ✅ Good - Accessible SVG icon
<svg role="img" aria-label="Close">
  <title>Close</title>
  <path d="..." />
</svg>
```

---

## 🎯 Interactive Components

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use **ARIA attributes correctly** and sparingly (HTML-first) | Overuse ARIA when semantic HTML exists |
| Provide **accessible names** for all controls (visible or aria-label) | Leave buttons, links, or controls unlabeled |
| Make **clickable areas** at least **44×44px** (or 24×24px with spacing) | Create tiny touch targets under 24px |
| Announce **dynamic content changes** to screen readers (`aria-live`) | Update content silently without announcements |
| Ensure **modals trap focus** appropriately and return focus on close | Let focus escape open modal dialogs |
| Use **proper roles** for custom components (`role="dialog"`, `role="menu"`) | Build custom widgets without ARIA roles |
| Implement **roving tabindex** for complex widgets (tabs, menus) | Make users tab through every item in a menu |
| Support **Escape key** to close modals, dropdowns, tooltips | Require clicking X button to close |

**Example:**
```jsx
// ✅ Good - Accessible modal with focus trap
<div role="dialog" aria-labelledby="modal-title" aria-modal="true">
  <h2 id="modal-title">Confirm Action</h2>
  <button onClick={handleClose}>Close</button>
</div>

// ❌ Bad - Icon button without accessible name
<button onClick={handleDelete}>
  <TrashIcon />
</button>

// ✅ Good - Icon button with accessible name
<button onClick={handleDelete} aria-label="Delete item">
  <TrashIcon aria-hidden="true" />
</button>
```

---

## ⚡ Motion & Animations

| ✅ DO | ❌ DON'T |
|-------|----------|
| Respect **`prefers-reduced-motion`** setting and reduce/eliminate animations | Force animations on all users |
| Provide **pause/stop controls** for auto-playing content | Auto-play videos with sound |
| Use **subtle, purposeful** animations for feedback and transitions | Create flashy, distracting, or excessive effects |
| Keep animations **under 5 seconds** or allow dismissal | Create infinite auto-scrolling carousels |
| Use **safe animation properties** (opacity, transform) for performance | Animate layout properties (width, height, top, left) |
| Disable **parallax** and complex motion for users with motion sensitivity | Implement jarring parallax effects for everyone |

**Example:**
```css
/* ✅ Good - Respects prefers-reduced-motion */
.button {
  transition: transform 0.2s ease;
}

@media (prefers-reduced-motion: reduce) {
  .button {
    transition: none;
  }
}

/* ✅ Good - Subtle, purposeful animation */
.toast {
  animation: slide-in 0.3s ease-out;
}

/* ❌ Bad - Forced, excessive animation */
.card {
  animation: spin 2s infinite;
}
```

---

## 🔍 Testing & Documentation

| ✅ DO | ❌ DON'T |
|-------|----------|
| Test with **keyboard only** (unplug your mouse!) | Assume mouse-only testing is sufficient |
| Use **multiple screen readers** (NVDA, JAWS, VoiceOver, Narrator, TalkBack) | Test with only one assistive technology |
| Include **users with disabilities** in user testing | Skip user testing with actual disabled users |
| Document **accessibility features** in component docs | Assume developers know how to implement accessibly |
| Run **automated tools** (axe DevTools, Lighthouse, WAVE, Pa11y) | Rely solely on automated testing |
| Test with **real devices** (mobile, tablet, different browsers) | Only test on desktop Chrome |
| Create **accessibility acceptance criteria** for every feature | Add accessibility as an afterthought |
| Conduct **regular accessibility audits** (quarterly or bi-annually) | Only test once at launch |

**Testing Checklist:**
```markdown
- [ ] Keyboard navigation works for all interactive elements
- [ ] Screen reader announces all content correctly
- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)
- [ ] Focus indicators are visible and clear
- [ ] Form errors are announced and associated with inputs
- [ ] Images have appropriate alt text
- [ ] Videos have captions/transcripts
- [ ] Content is responsive and works at 200% zoom
- [ ] No motion for users with prefers-reduced-motion
- [ ] Automated tools (axe, Lighthouse) pass
```

---

## 📱 Responsive & Zoom

| ✅ DO | ❌ DON'T |
|-------|----------|
| Support **text resizing** up to **200%** without loss of functionality | Set fixed font sizes that can't scale |
| Maintain **functionality when zoomed** (no horizontal scroll at 200%) | Break layouts or hide content when zoomed |
| Design **mobile-first** with touch in mind | Assume all users have precise mouse control |
| Provide **adequate spacing** between tap targets (8px minimum) | Cluster buttons too close together |
| Use **relative units** (`rem`, `em`, `%`) instead of pixels | Use fixed `px` units for all sizing |
| Test on **real devices** with different screen sizes | Only test in desktop browser's device mode |
| Support **landscape and portrait** orientations | Lock orientation or break layouts |

**Example:**
```css
/* ✅ Good - Responsive, scalable */
.button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  min-height: 44px;
  min-width: 44px;
}

/* ❌ Bad - Fixed sizes */
.button {
  padding: 12px 24px;
  font-size:  16px;
  width: 100px;
}
```

---

## 🛠️ Development Practices

| ✅ DO | ❌ DON'T |
|-------|----------|
| **Validate HTML markup** regularly with W3C validator | Ship with HTML validation errors |
| Set **proper language attributes** (`lang="en"`, `lang="es"`) | Leave language undefined or incorrect |
| Use **progressive enhancement** (HTML → CSS → JS) | Require JavaScript for basic functionality |
| Provide **fallbacks** for new technologies (WebP → JPG, CSS Grid → Flexbox) | Use cutting-edge features without fallbacks |
| Keep **accessibility in mind from design phase** | Treat accessibility as a post-launch fix |
| Use **semantic HTML first**, ARIA second | Reach for ARIA before considering HTML elements |
| Build **reusable, accessible components** | Copy-paste code without accessibility review |
| Set up **automated accessibility testing** in CI/CD | Only manually test accessibility |

**Component Checklist:**
```markdown
## Accessibility Checklist for Components

- [ ] Uses semantic HTML where possible
- [ ] Has proper ARIA roles, states, and properties
- [ ] Keyboard accessible (Tab, Enter, Space, Arrow keys, Escape)
- [ ] Focus management is correct
- [ ] Has visible focus indicators
- [ ] Screen reader tested (announces correctly)
- [ ] Color contrast meets WCAG AA
- [ ] Works at 200% zoom
- [ ] Respects prefers-reduced-motion
- [ ] Has accessible name/label
- [ ] Error states are announced
- [ ] Documented with accessibility examples
```

---

## 📚 Resources

### WCAG Guidelines & Standards
- **[WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)** - Complete guidelines
- **[WCAG 2.1 at a Glance](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)** - Quick overview
- **[Section 508](https://www.section508.gov/)** - US federal accessibility requirements

### Accessibility Guides & Best Practices
- **[A11Y Project](https://www.a11yproject.com/)** - Practical accessibility tips
- **[MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)** - Comprehensive documentation
- **[Inclusive Components](https://inclusive-components.design/)** - Accessible component patterns
- **[ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)** - ARIA patterns and widgets

### Testing Tools

#### Automated Testing
- **[axe DevTools](https://www.deque.com/axe/devtools/)** - Browser extension for accessibility testing
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)** - Built into Chrome DevTools
- **[WAVE](https://wave.webaim.org/)** - Web accessibility evaluation tool
- **[Pa11y](https://pa11y.org/)** - Automated accessibility testing CLI/CI tool
- **[jest-axe](https://github.com/nickcolley/jest-axe)** - Jest matcher for axe-core

#### Manual Testing
- **Screen Readers:**
  - [NVDA](https://www.nvaccess.org/) (Windows, free)
  - [JAWS](https://www.freedomscientific.com/products/software/jaws/) (Windows, paid)
  - [VoiceOver](https://www.apple.com/accessibility/voiceover/) (macOS/iOS, built-in)
  - [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows, built-in)
  - [TalkBack](https://support.google.com/accessibility/android/answer/6283677) (Android, built-in)
- **Keyboard Testing:** Unplug your mouse and navigate with Tab, Enter, Space, Arrow keys, Escape
- **Color Contrast:** [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)
- **Color Blindness Simulators:** [Color Oracle](https://colororacle.org/)

#### Browser Extensions
- [axe DevTools](https://www.deque.com/axe/browser-extensions/)
- [WAVE](https://wave.webaim.org/extension/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Accessibility Insights](https://accessibilityinsights.io/)

### Learning Resources
- **[Web Accessibility by Google](https://www.udacity.com/course/web-accessibility--ud891)** - Free course
- **[Deque University](https://dequeuniversity.com/)** - Paid accessibility courses
- **[WebAIM](https://webaim.org/)** - Articles, resources, training

### Kiara Design System Specific
- [Accessibility Audit Report](./accessibility-audit-report.md)
- Component Documentation (coming soon)
- Accessibility Testing Guide (coming soon)

---

## 🎯 Quick Reference

### WCAG 2.1 Levels
- **Level A**: Basic accessibility (minimum)
- **Level AA**: Recommended standard (target for most sites)
- **Level AAA**: Enhanced accessibility (gold standard)

**Kiara Design System targets WCAG 2.1 Level AA compliance.**

### Key Contrast Ratios
- **4.5:1** - Normal text (under 24px or under 18.5px bold)
- **3:1** - Large text (24px+ or 18.5px+ bold)
- **3:1** - UI components and graphical objects

### Common WCAG Success Criteria
| Criterion | Level | Description |
|-----------|-------|-------------|
| 1.1.1 Non-text Content | A | Provide text alternatives |
| 1.4.3 Contrast (Minimum) | AA | 4.5:1 for text, 3:1 for large text |
| 2.1.1 Keyboard | A | All functionality via keyboard |
| 2.4.7 Focus Visible | AA | Visible keyboard focus indicator |
| 3.3.2 Labels or Instructions | A | Provide labels for inputs |
| 4.1.2 Name, Role, Value | A | Proper semantics and ARIA |

---

## 🤝 Contributing

Help us improve accessibility in the Kiara Design System: 

1. **Report Issues**: Found an accessibility issue? [Open an issue](https://github.com/Kiara-Dev-Team/kiara-design-system/issues/new)
2. **Submit Improvements**: Have a suggestion?  Create a pull request
3. **Share Knowledge**: Contribute to this guide or component documentation

---

**Last Updated**:  January 2026  
**Maintained by**: Kiara Dev Team  
**Questions?**: Open an issue or discussion on GitHub