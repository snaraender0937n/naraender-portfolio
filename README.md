# Naraender S. — Engineering Portfolio Website

This repository contains the source code for the personal engineering portfolio website of Naraender S., designed for seamless deployment via GitHub Pages.

The website presents verified engineering work across printed circuit board design, switched-mode power electronics, analog circuits, embedded microcontroller firmware, industrial fleet condition monitoring, and behavioral fraud risk analytics.

---

## 1. Architecture and Design Principles

- **Technology Stack:** Clean semantic HTML5, Vanilla CSS3 (custom design system), and lightweight JavaScript.
- **Dependency-Free:** No build steps, bundlers, external CSS frameworks, or runtime dependencies.
- **Accessibility:** Conforms to WCAG 2.1 AA guidelines, featuring skip-to-content navigation, semantic landmarks, aria attributes, visible `:focus-visible` outlines, and responsive keyboard controls.
- **Styling:** Engineering-oriented dark design system featuring a deep charcoal canvas, graphite surfaces, warm off-white typography, and muted copper accents, with high-contrast typography (Inter and JetBrains Mono), crisp technical alignment, and responsive layouts for desktop, tablet, and mobile displays.
- **Content Integrity:** Zero emojis, no exaggerated claims, and transparent disclosure of documented engineering limitations and prototype scopes.

---

## 2. Directory Structure

```text
naraender-portfolio-main/
├── index.html        # Main HTML5 entrypoint with complete semantic section layout
├── style.css         # Custom responsive stylesheet (Dark Charcoal, Graphite & Muted Copper)
├── script.js         # Accessible mobile menu toggle, scroll spy, and year helper
└── README.md         # Repository and project documentation
```

---

## 3. Authoritative Project Mapping

The website features six published engineering case studies, categorized into physical hardware and software/analytics domains:

### Hardware & Embedded Systems
1. **PCB Design & Manufacturing Engineering**  
   Repository: [https://github.com/NaraenderHardware/pcb-design-manufacturing-engineering](https://github.com/NaraenderHardware/pcb-design-manufacturing-engineering)  
   Scope: Four case studies covering 5V linear power supply, multi-rail SMD power distribution, ATtiny85 USB dongle, and FeCl3 chemical wet etching.

2. **Power Electronics & Analog Circuit Engineering**  
   Repository: [https://github.com/NaraenderHardware/power-electronics-analog-circuit-engineering](https://github.com/NaraenderHardware/power-electronics-analog-circuit-engineering)  
   Scope: 36V to 18V (24W, 50 kHz) DC-DC buck converter with ATmega328P Timer1 fast PWM and active analog function generator using uA741 op-amps and Wien Bridge oscillator.

3. **Embedded Control, Automation & Robotics**  
   Repository: [https://github.com/NaraenderHardware/embedded-control-automation-robotics](https://github.com/NaraenderHardware/embedded-control-automation-robotics)  
   Scope: STM32 motor controller with ESP32 gateway, ESP32 BLE RC car, closed-loop soil moisture irrigation, CD4516 CMOS counter, and ultrasonic radar scanner.

4. **VitalEdge Embedded Telemetry Monitoring**  
   Repository: [https://github.com/NaraenderHardware/vitaledge-embedded-telemetry-monitoring](https://github.com/NaraenderHardware/vitaledge-embedded-telemetry-monitoring)  
   Scope: Dual-microcontroller prototype (Seeed Studio XIAO ESP32-C3 wearable and ESP32-S3 gateway) with ESP-NOW RF, LTE Cat-1 (SIM7670G), GNSS, and multi-sensor telemetry.

### Software & Analytics Systems
5. **Industrial Fleet Condition Monitoring**  
   Repository: [https://github.com/NaraenderSoftware/industrial-fleet-condition-monitoring](https://github.com/NaraenderSoftware/industrial-fleet-condition-monitoring)  
   Scope: Time-domain vibration statistics, Radix-2 Cooley-Tukey FFT with Hann windowing, rolling dual-window Median/MAD anomaly detection, and regional conflict coordination.

6. **Behavioral Fraud Detection and Risk Analytics (FraudGuard)**  
   Repository: [https://github.com/NaraenderSoftware/behavioral-fraud-detection-risk-analytics](https://github.com/NaraenderSoftware/behavioral-fraud-detection-risk-analytics)  
   Scope: Passive client behavioral biometrics, SHA-256 environment fingerprinting, IP velocity monitoring, multi-layer score fusion, and 5-tier graduated decision engine.

---

## 4. Local Preview

To preview the website locally on your workstation:

### Option A: Using Python's built-in HTTP server (Recommended)
Open a terminal in this directory and run:
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080` in your web browser.

### Option B: Using Node.js npx
```bash
npx serve .
```

### Option C: Direct File Opening
Double-click `index.html` or open it directly in any modern browser (`file:///.../index.html`).

---

## 5. GitHub Pages Deployment Instructions

This website is structured as a static site and is ready for GitHub Pages deployment:

1. **Repository Setup**: Push this working directory to your target GitHub repository (e.g. `naraender-portfolio` or `snaraender0937n.github.io`).
2. **Configure Pages**:
   - In GitHub, go to your repository **Settings** tab.
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` (or your default branch) and folder `/ (root)`.
   - Click **Save**.
3. **URL Verification**:
   - If deploying to `snaraender0937n.github.io`, the site will be available at `https://snaraender0937n.github.io/`.
   - If deploying to a project repository (e.g., `naraender-portfolio`), the site will be available at `https://snaraender0937n.github.io/naraender-portfolio/`.
   - Relative asset paths (`style.css`, `script.js`) ensure complete compatibility in both configurations without path errors.

---

## 6. Verification and Documented Scope

- All educational details (VIT Chennai B.Tech EEE, IIT Madras BS ES) and industrial internships (TANGEDCO, Ultramax Hydrojet) are verified against institutional records.
- Prototype limitations are explicitly preserved:
  - Project 5 notes synthetic simulation data and host toolchain constraints for C/C++ agents and Python ML service.
  - Project 6 notes prototype status, distinguishing heuristic scoring from unverified live PostgreSQL and unverified Isolation Forest execution in local testing environments.
