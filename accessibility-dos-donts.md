# Accessibility Dos vs Don'ts

## 🎨 Color & Contrast

| ✅ DO | ❌ DON'T |
|-------|----------|
| Ensure text has 4.5:1 contrast ratio (3:1 for large text) | Use low contrast color combinations |
| Use color AND another indicator (icon, text, pattern) | Rely on color alone to convey information |
| Provide high contrast mode support | Assume all users see colors the same way |
| Test contrast for all UI states (hover, focus, disabled) | Forget to check contrast on interactive states |

## ⌨️ Keyboard & Navigation

| ✅ DO | ❌ DON'T |
|-------|----------|
| Make all interactive elements keyboard accessible | Create keyboard traps users can't escape |
| Provide visible focus indicators | Hide or remove focus outlines for aesthetics |
| Maintain logical tab order | Let tab order jump randomly across the page |
| Include skip navigation links | Force users to tab through entire navigation every time |
| Use native HTML buttons and links | Use `<div>` or `<span>` as clickable elements |

## 📝 Content & Structure

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use semantic HTML (header, nav, main, footer) | Use `<div>` for everything |
| Follow proper heading hierarchy (h1→h2→h3) | Skip heading levels or use headings for styling |
| Write clear, descriptive link text | Use "click here" or "read more" without context |
| Keep content simple and scannable | Write overly complex, jargon-heavy text |
| Provide text alternatives for images | Leave alt attributes empty on meaningful images |

## 🔤 Forms & Inputs

| ✅ DO | ❌ DON'T |
|-------|----------|
| Associate labels with every input using `<label>` | Use placeholder text as labels |
| Provide clear error messages with suggestions | Show vague errors like "Invalid input" |
| Group related inputs with `<fieldset>` and `<legend>` | Scatter form fields without logical grouping |
| Indicate required fields clearly | Only use color or asterisks to show required fields |
| Support autofill with proper input types | Use generic `type="text"` for everything |

## 🖼️ Images & Media

| ✅ DO | ❌ DON'T |
|-------|----------|
| Write descriptive alt text for meaningful images | Write "image of..." or repeat the filename |
| Use `alt=""` for decorative images | Leave alt attribute missing entirely |
| Provide captions and transcripts for videos | Embed videos without text alternatives |
| Make SVG icons accessible with titles/roles | Assume screen readers interpret icons visually |

## 🎯 Interactive Components

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use ARIA attributes correctly and sparingly | Overuse ARIA when semantic HTML exists |
| Provide accessible names for all controls | Leave buttons, links, or controls unlabeled |
| Make clickable areas at least 44×44px | Create tiny touch targets |
| Announce dynamic content changes to screen readers | Update content silently without announcements |
| Ensure modals trap focus appropriately | Let focus escape open modal dialogs |

## ⚡ Motion & Animations

| ✅ DO | ❌ DON'T |
|-------|----------|
| Respect `prefers-reduced-motion` setting | Force animations on all users |
| Provide pause/stop controls for auto-playing content | Auto-play videos with sound |
| Use subtle, purposeful animations | Create flashy, distracting effects |
| Keep animations under 5 seconds or allow dismissal | Create infinite auto-scrolling carousels |

## 🔍 Testing & Documentation

| ✅ DO | ❌ DON'T |
|-------|----------|
| Test with keyboard only | Assume mouse-only testing is sufficient |
| Use multiple screen readers (NVDA, JAWS, VoiceOver) | Test with only one assistive technology |
| Include users with disabilities in testing | Skip user testing with actual disabled users |
| Document accessibility features in components | Assume developers know how to implement accessibly |
| Run automated tools (axe, Lighthouse, WAVE) | Rely solely on automated testing |

## 📱 Responsive & Zoom

| ✅ DO | ❌ DON'T |
|-------|----------|
| Support text resizing up to 200% | Set fixed font sizes that can't scale |
| Maintain functionality when zoomed | Break layouts or hide content when zoomed |
| Design mobile-first with touch in mind | Assume all users have precise mouse control |
| Provide adequate spacing between tap targets | Cluster buttons too close together |

## 🛠️ Development Practices

| ✅ DO | ❌ DON'T |
|-------|----------|
| Validate HTML markup | Ship with HTML errors |
| Set proper language attributes (`lang="en"`) | Leave language undefined |
| Use progressive enhancement | Require JavaScript for basic functionality |
| Provide fallbacks for new technologies | Use cutting-edge features without fallbacks |
| Keep accessibility in mind from design phase | Treat accessibility as a post-launch fix |

---

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11Y Project Checklist](https://www.a11yproject.com/checklist/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

## Testing Tools

- **Automated**: axe DevTools, Lighthouse, WAVE
- **Manual**: Keyboard testing, screen reader testing
- **User Testing**: Include people with disabilities in testing