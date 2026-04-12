# Homepage PRD

created by Gemini April 11, 2026

This Product Requirements Document (PRD) outlines the specifications for the **Spoonless Homepage**. It integrates the "editorial-premium" brand identity of Spoonless with the high-conversion UX patterns found in Eat Cravers and Honey Department.

---

# PRD: Spoonless Homepage (Waitlist Phase)

## 1. Project Overview

- **Brand:** Spoonless
- **Mission:** Elevating peanut butter into a premium, drizzleable condiment.
- **Primary Objective:** Drive waitlist sign-ups for the inaugural drop through high-motion visual storytelling and frictionless UX.
- **Core Aesthetic:** "Vogue Italia" editorial posture meet "clean-label" transparency. Warm, bold, and slightly surreal.

---

## 2. Design Foundations (Brand Bible Alignment)

The site must strictly adhere to the **Spoonless v2 Brand Identity System**.

| **Element**       | **Specification**                                                                                                                                                                                                                 |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Typography**    | **Headlines:** DM Serif Display (Italics for hero/emphasis). **Body/Utility:** DM Sans.                                                                                                                                     |
| **Color Palette** | **Roast (#2E1B15)** for text; **Cream (#F9F5EF)** for universal backgrounds; **Rust (#B8441D)** for primary CTAs; **Walnut (#523028)** for depth/accents; **Golden (#E8A020)** for Chocolate SKU accents. |
| **Tone of Voice** | Confident, "feral" yet premium, no-nonsense. No wellness buzzwords (avoid "mindful" or "superfood").                                                                                                                                    |

---

## 3. Section-by-Section Requirements

### 3.1. The "Drizzle Hero" (Brand Essence)

- **Visuals:** Full-bleed background. High-motion looping video or a high-res "surreal" photo collage.
  - *Action:* A thick, continuous stream of peanut butter drizzling onto a high-contrast cheese board or a halved dark chocolate bar.
- **Copy:** * *Headline:* "Peanut butter finally got its act together." (DM Serif Display, Italic).
  - *Sub-headline:* "The format upgrade you didn’t know you needed. Zero friction. Just the squeeze."
- **CTA:** Large **Rust** button centered or left-aligned.
  - *Text:* "Join the Waitlist — Squeeze Soon."
- **UX Note:** On mobile, ensure the video is optimized for vertical viewing and does not hinder load times.

### 3.2. The Value Prop Quadrant (Utility Grid)

- **Layout:** 2x2 grid (mobile) or 4-column row (desktop). Minimalist "Honey Dept" style with thin 1px Roast borders.
- **Items:**
  1. **Zero Friction:** (Icon: Stylized squeeze motion) "No jar, no knife, no mess."
  2. **Minimal Ingredients:** (Icon: Two circles overlapping) "Clean label, no 'superfood' fluff."
  3. **Pure Joy:** (Icon: Surreal star or sparkle) "Designed for delight, not just nutrition."
  4. **Premium Format:** (Icon: Squeeze bottle silhouette) "Condiment shelf energy. Recyclable & ready."

### 3.3. Drizzle Discovery (Mini-PDP Section)

- **Layout:** Two side-by-side product cards (stacked on mobile).
- **Background:** Universal **Cream**.
- **Functionality:** Emulate the Cravers "Quick Shop" feel but replace "Add to Cart" with "Join Waitlist."
- **Product Card A: The Original**
  - *Visual:* 8oz Bottle with Rust accent. Hover state shows a close-up of the texture.
  - *Labeling:* "The Original Peanut Butter Drizzle" | $TBD | 8 OZ.
  - *Copy:* "Peanuts. Salt. That’s it."
  - *CTA:* **Rust** Button "Join the Waitlist."
- **Product Card B: The Chocolate**
  - *Visual:* 8oz Bottle with Golden accent.
  - *Labeling:* "The Chocolate Peanut Butter Drizzle" | $TBD | 8 OZ.
  - *Copy:* "Dark, rich, and a little dangerous."
  - *CTA:* **Rust** Button "Join the Waitlist."
- **Navigation:** Small text link below: "View Full Product Details →"

### 3.4. "No Spoon? No Problem." (Usage Gallery)

- **Layout:** Interlocking masonry grid (as seen in Honey Department’s "Eat This" section).
- **Content:** High-gloss, editorial food photography.
  - *Image 1:* Drizzling over spicy red chicken wings (The "Feral" vibe).
  - *Image 2:* A morning waffle bowl with a precise zigzag drizzle.
  - *Image 3:* Drizzled over a luxury cheese and fruit board.
- **Overlay:** Subtle text labels on hover: *"Your morning yogurt's new best friend."* or *"Unapologetically savory."*

### 3.5. The Spoonless Society (Persona Collage)

- **Layout:** A chaotic but curated "Brand Collage" (Cravers style).
- **Visual Storytelling:** Mix of "candid" shots and stylized studio shots representing the personas.
  - *The Ritual Optimizer:* Squeezing into a blender (motion blur).
  - *The Standard-Keeper:* The bottle sitting neatly next to a $60 olive oil in a fridge.
  - *The Considered Indulger:* Squeezing directly onto a piece of dark chocolate.
- **Copy Overlay:** "Finally, peanut butter that knows it’s a topping." (DM Sans, Bold).

### 3.6. The Waitlist Closer (Footer)

- **Background:** **Rust** color block with **Walnut** or **Roast** text.
- **Content:**
  - *Large Headline:* "Be the first to squeeze."
  - *Sub-copy:* "Join the waitlist for our inaugural drop. No spam, just the goods."
- **Input Field:** Single, clean email capture field with a "Subscribe" arrow.
- **Micro-copy:** "Subscribe and forget it."

---

## 4. Technical & Functional Requirements

### 4.1. Waitlist Logic

- **Data Collection:** Email addresses must be pushed to a segmented list (e.g., Klaviyo or Mailchimp) tagged as "Waitlist_General."
- **Post-Signup State:** Upon submission, the button should change to "You're on the list." and trigger a "Thank You" toast notification or a subtle page refresh with a brand-voice confirmation: *"Check your inbox. We'll tell you when the squeeze starts."*

### 4.2. Mobile Optimization

- **Sticky CTA:** For mobile users, a subtle sticky "Join Waitlist" bar should appear once the user scrolls past the hero section.
- **Touch Targets:** Ensure all buttons have a minimum height of 48px for easy thumb-tapping.
- **Image Compression:** All "Vogue-style" assets must be WebP formatted to ensure the site remains fast on 5G/LTE.

### 4.3. Future-Proofing

- **Modular Blocks:** The "Mini-PDP" blocks must be built to swap the CTA from "Join Waitlist" to "Add to Cart" and show a "Buy with Shop Pay" option instantly once inventory is live.

---

## 5. Success Metrics

- **Waitlist Conversion Rate:** (Total sign-ups / Total unique visitors).
- **Scroll Depth:** Target >60% of users reaching the "Spoonless Society" collage.
- **Mobile Bounce Rate:** Maintaining <40% through optimized loading of the video hero.

---

**Does this PRD capture the specific "Vogue Italia" editorial feel you’re looking for, or should we lean harder into the "feral" imagery for the recipe section?**
