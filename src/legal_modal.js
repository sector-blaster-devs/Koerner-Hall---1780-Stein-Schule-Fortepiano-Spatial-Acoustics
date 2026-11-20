/**
 * Credits, Licenses, Terms of Use Template & Privacy Policy Template Modal
 * for Koerner Hall — 1780 Stein-Schule Fortepiano & Spatial Acoustics Simulation.
 *
 * Hidden at rest (0% resting HUD footprint) and opens cleanly from the HUD capsule.
 */

export const CREDITS_AND_LICENSES_SECTIONS = [
  {
    id: "mesh-packs",
    title: "3D Mesh Packs & CAD Reconstructions",
    items: [
      {
        name: "Koerner Hall Architectural Shell (koerner_hall.glb)",
        license: "Educational / Reference 3D Asset License",
        source: "Static 3D Asset CDN (https://www.gstatic.com/aistudio/starter-apps/koerner-hall/koerner_hall.glb)",
        details:
          "3D architectural reconstruction of Koerner Hall (TELUS Centre for Performance and Learning, Toronto): quarter-sawn white-oak stage deck, slotted Helmholtz oak surround wall, undulating charcoal acoustic plaster walls, curved grooved Lower & Upper Balcony fascias, under-balcony soffits, Choir Loft galleries, 26-strand Baillie Oak Veil canopy, catwalks, steel trusses, and bronze sconces.",
      },
      {
        name: "Custom Koerner Auditorium Chair (chair_koerner.glb)",
        license: "Educational / Reference 3D Asset License",
        source: "Static 3D Asset CDN (https://www.gstatic.com/aistudio/starter-apps/koerner-hall/chair_koerner.glb)",
        details:
          "Compound-curved molded white-oak outer shell and armrests, charcoal-espresso worsted acoustic wool cushions, cast-steel pedestal stanchions, accessible companion frames (Chair_Koerner_AccessibleFrame), and aisle-side acrylic row-plaque housings instanced across 1,135 seats.",
      },
      {
        name: "c. 1780 Stein-Schule South German Fortepiano (stein_1780_fortepiano.glb)",
        license: "Organological CAD Reconstruction · Educational / Attribution",
        source: "Static 3D Asset CDN (stein_1780_fortepiano.glb) · Modeled after Greifenberger Institut für Musikinstrumentenkunde Inv. HFH006",
        details:
          "1,449-mesh historical fortepiano featuring hand-rubbed walnut casework, fiddleback sycamore marquetry, Haselfichte alpine spruce soundboard, Gabon ebony naturals, bone accidentals, 61-key (F1–f3) Prellmechanik hammers, Auslöser escapements, overhead Keil/Püschel dampers, bichord brass/iron courses, underside Kniehebel knee-lever, and companion period walnut & madder-velvet recital bench.",
      },
    ],
  },
  {
    id: "lighting-data",
    title: "Baked Lightmaps, Environment HDRI, Textures & Spatial Datasets",
    items: [
      {
        name: "4K Cycles Global Illumination Lightmap Atlases",
        license: "Project Asset · CC BY 4.0",
        source: "public/assets/lightmaps/ (lm_fascias_soffits_4k.jpg, lm_oak_veil_4k.jpg, lm_shell_walls_4k.jpg, lm_tiers_stage_4k.jpg, bake_manifest.json)",
        details:
          "4096×4096 UV1 radiance atlases and per-atlas physical scale calibration factors (fascias_soffits, shell_walls, tiers_stage, oak_veil) for WebGL2 PBR lightmap integration.",
      },
      {
        name: "Environment HDRI, Reference Image & Per-Seat Irradiance",
        license: "Project Asset · CC BY 4.0",
        source: "public/assets/env_koerner_2k.hdr, public/assets/seat_irradiance.json, public/assets/aistudio/image_2050beed.png",
        details:
          "2K equirectangular Koerner Hall HDRI downsampled via Float32 PMREM, paired with a procedural Float32 3200K stage-canopy PMREM for the 1780 fortepiano, per-seat indirect irradiance dataset, and visual reference asset.",
      },
      {
        name: "Architectural Dimensions & 1,135-Seat Manifest",
        license: "Open Data / Reference Geometry",
        source: "public/data/koerner_dimensions.json & public/data/seat_manifest.json",
        details:
          "Measured and calibrated room geometry, riser elevations, sightline target coordinates, material PBR specifications, and 12 benchmark camera stations across Orchestra, Lower Balcony, Upper Balcony, and Choir Loft.",
      },
    ],
  },
  {
    id: "audio-recordings",
    title: "Period Fortepiano Recordings & Interactive Sample Bank",
    items: [
      {
        name: "Domenico Alberti — Sonata for the Fortepiano in A Major, Op. 1 No. 5 (Andante – Allegro)",
        license: "CC BY 4.0",
        source: "Performed by Luca Montebugnoli · 18th-Century Classical Fortepiano (Paris Conservatoire / CNSMDP)",
        details:
          "alberti_op1_no5_cc_by4.mp3 (A4 = 441.5 Hz). Licensed under Creative Commons Attribution 4.0 International (https://creativecommons.org/licenses/by/4.0/). Synchronized note-event alignment mapped to the 61-key Prellmechanik action.",
      },
      {
        name: "Karl Ditters von Dittersdorf — Sonata in A Major for Fortepiano (I. Allegro, II. Andante, III. Finale)",
        license: "CC BY-SA 3.0",
        source: "Performed by Kaila Rochelle · Anton Walter (Vienna, c. 1790) 5-Octave Fortepiano",
        details:
          "dittersdorf_walter_sonata_mvt1_cc_bysa3.mp3, mvt2, mvt3. Licensed under Creative Commons Attribution-ShareAlike 3.0 Unported (https://creativecommons.org/licenses/by-sa/3.0/).",
      },
      {
        name: "Karl Ditters von Dittersdorf — Ouverture from 'Hocus Pocus' (1790), Fortepiano Arrangement",
        license: "CC BY-SA 4.0",
        source: "Performed by Kaila Rochelle · Anton Walter (Vienna, c. 1790) 5-Octave Fortepiano",
        details:
          "dittersdorf_walter_ouverture_cc_bysa4.mp3. Licensed under Creative Commons Attribution-ShareAlike 4.0 International (https://creativecommons.org/licenses/by-sa/4.0/).",
      },
      {
        name: "Interactive 61-Key Historical Fortepiano Sample Bank (m24–m96, mp/f)",
        license: "CC BY / Historical Archive Sampling",
        source: "Schloss Kremsegg Historical Instrument Collection (public/assets/sandbox_audio/kremsegg_pleyel/)",
        details:
          "32 multi-velocity (mezzo-piano and forte) acoustic samples across 16 reference pitches (MIDI 24–96) recorded at A4 ≈ 430 Hz, pitch-shifted in real time to Augsburg/Viennese Kammerton and routed through the Web Audio room acoustics engine.",
      },
    ],
  },
  {
    id: "code-libraries",
    title: "Application Code, WebGL2 Shaders & Open-Source Libraries",
    items: [
      {
        name: "Koerner Hall Spatial Acoustics & Fortepiano Simulation Codebase",
        license: "MIT License (Project Source)",
        source: "index.html, vite.config.ts, src/styles.css, src/main.js, src/fortepiano_stage_rig.js, src/hall_acoustics.js, src/seat_controller.js, src/seat_map_popover.js, src/fortepiano_repertoire_data.js, src/legal_modal.js",
        details:
          "Custom WebGL2 tangent sanitizer, procedural Uint8Array SDF row-glyph atlas and oak/wool/fabric normal maps, 4-bank silent-latch zero-Doppler early reflection crossfader, synthesized 2.25s Koerner Hall stereo impulse convolver (RT60 = 1.96s), Prellmechanik kinematics, pure-SVG interactive seating plan, and Vite glTF asset proxy/bundler.",
      },
      {
        name: "Three.js (three@0.161.0 & @types/three@0.161.0)",
        license: "MIT License",
        source: "https://threejs.org · Copyright © 2010–2024 three.js authors",
        details:
          "WebGL2 3D rendering engine, MeshPhysicalMaterial PBR pipeline, PMREMGenerator, GLTFLoader, RGBELoader, and BufferGeometryUtils.",
      },
      {
        name: "meshoptimizer (0.18.1) & fflate (0.6.11)",
        license: "MIT License",
        source: "Arseny Kapoulkine (meshoptimizer) · Arjun Barrett (fflate)",
        details: "glTF mesh decompression and lossless compression utilities bundled via Three.js tooling.",
      },
      {
        name: "React (19.x), React DOM (19.x) & Type Definitions",
        license: "MIT License",
        source: "Meta Platforms, Inc. and DefinitelyTyped (@types/react, @types/react-dom, @types/node)",
        details: "UI runtime and TypeScript ambient type packages declared in package.json.",
      },
      {
        name: "Vite (8.x) & @vitejs/plugin-react (6.x)",
        license: "MIT License",
        source: "Evan You and Vite contributors",
        details: "Frontend development server, static asset bundler, and build-time GLB asset fetcher.",
      },
      {
        name: "TypeScript (7.x)",
        license: "Apache License 2.0",
        source: "Microsoft Corporation",
        details: "Static type checking (`tsc --noEmit`) and Vite configuration.",
      },
      {
        name: "Google Sans & Google Sans Code Typography",
        license: "SIL Open Font License 1.1 (OFL-1.1)",
        source: "public/assets/fonts/GoogleSans-*.woff2 & GoogleSansCode-*.woff2",
        details: "UI sans-serif and tabular-numeral monospace typefaces served locally as WOFF2.",
      },
    ],
  },
  {
    id: "references",
    title: "Architectural, Acoustic & Organological References",
    items: [
      {
        name: "Koerner Hall — The Royal Conservatory of Music (Toronto, Canada)",
        license: "Architectural & Cultural Reference",
        source: "TELUS Centre for Performance and Learning · 273 Bloor St W, Toronto, ON M5S 2W2",
        details:
          "Designed by KPMB Architects (Marianne McKenna, Partner-in-Charge). Referenced for shoebox geometry (21.6 m × 40.4 m × 19.8 m), Baillie Oak Veil, tiered balconies, parterres, and 1,135-seat layout.",
      },
      {
        name: "Sound Space Vision & Aercoustics Engineering",
        license: "Acoustic Engineering Reference",
        source: "Bob Essert (Sound Space Vision) & Aercoustics Engineering",
        details:
          "Acoustic design reference for the overhead oak canopy, slotted Helmholtz stage-surround panels, undulating acoustic plaster diffusion, under-balcony soffit attenuation, and 1.96 s reverberation target.",
      },
      {
        name: "Greifenberger Institut für Musikinstrumentenkunde — Inv. HFH006",
        license: "Organological Reference",
        source: "Circle of Johann Andreas Stein (Augsburg, c. 1780)",
        details:
          "Historical fortepiano reference for compass (F1–f3, 61 keys), Viennese/South German Prellmechanik escapement geometry, overhead Keil/Püschel dampers, bichord stringing, and case marquetry.",
      },
      {
        name: "Conservatoire National Supérieur de Musique et de Danse de Paris (CNSMDP) & Schloss Kremsegg",
        license: "Historical Instrument Collections",
        source: "Paris, France & Kremsmünster, Austria",
        details:
          "Source institutions for the 18th-century Classical fortepiano performance (Alberti Op. 1/5) and multi-velocity historical fortepiano key samples; alongside c. 1790 Anton Walter (Vienna) fortepiano references.",
      },
      {
        name: "Acoustic Physics & Psychoacoustic Models",
        license: "Scientific Standards & Literature",
        source: "ISO 9613-1 · Woodworth-Schlosberg (1954) · Allen & Berkley (1979)",
        details:
          "ISO 9613-1 distance-dependent atmospheric high-frequency air absorption, Woodworth-Schlosberg spherical-head interaural time difference (ITD), 1st-order image-source early reflections, and ISO 3382 Clarity (C80), Direct-to-Reverb (D/R), and ITDG telemetry.",
      },
    ],
  },
];

export const TERMS_TEMPLATE_SECTIONS = [
  {
    heading: "1. Acceptance of Terms",
    body: "By accessing or using [Application Name / Koerner Hall Acoustic Simulation] (the \"Service\"), operated by [Organization / Operator Name] (\"we,\" \"us,\" or \"our\"), you agree to be bound by these Terms of Use. If you are using the Service on behalf of an institution or organization, you represent that you have authority to bind that entity to these Terms. If you do not agree, please discontinue use of the Service.",
  },
  {
    heading: "2. Educational & Simulation Scope",
    body: "The Service provides an interactive 3D architectural, organological, and room-acoustic simulation of Koerner Hall and a c. 1780 Stein-Schule fortepiano for educational, research, and demonstration purposes. Acoustic metrics (including C80 clarity, D/R ratio, ITDG, overhang attenuation, and simulated impulse responses), visual lighting, and seat sightlines are computational approximations and do not constitute official ticketing guarantees, seating certifications, or acoustic measurements issued by The Royal Conservatory of Music or any third-party venue operator.",
  },
  {
    heading: "3. Intellectual Property, Open-Source Software & Creative Commons Assets",
    body: "The Service incorporates original code, third-party open-source libraries (MIT and Apache 2.0 licenses), 3D mesh packs, baked lightmaps, and Creative Commons audio recordings (CC BY 4.0, CC BY-SA 3.0, and CC BY-SA 4.0) detailed in the Credits & Licenses tab. Your use, redistribution, or adaptation of any component is governed by its respective license—including attribution requirements (BY) and ShareAlike obligations (SA) for modified audio works. All architectural names, institutional names, and trademarks remain the property of their respective owners; inclusion for historical or academic reference does not imply endorsement.",
  },
  {
    heading: "4. Acceptable Use",
    body: "You agree to use the Service only for lawful purposes. You may not: (a) attempt to disrupt, overload, scrape, or hotlink static CDN endpoints in a manner that degrades availability for other users; (b) misrepresent simulated acoustic telemetry or Creative Commons recordings as your own original work without required attribution; or (c) remove or obscure copyright, license, or attribution notices.",
  },
  {
    heading: "5. Audio Levels & Visual Comfort",
    body: "The Service uses the browser Web Audio API for real-time spatial convolution and multi-velocity instrument playback. Please verify your device playback volume before initiating audio, especially when using headphones. Rapid 3D camera movement in Walk, Orbit, or Piano inspection modes may cause discomfort for users sensitive to motion; reduce drag speed or use Seated mode if needed.",
  },
  {
    heading: "6. Disclaimer of Warranties & Limitation of Liability",
    body: "THE SERVICE IS PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, [Organization / Operator Name] SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE.",
  },
  {
    heading: "7. Modifications & Governing Law",
    body: "We may update these Terms of Use from time to time by posting a revised version with an updated Effective Date. These Terms are governed by the laws of [Jurisdiction / Province, Country], without regard to conflict-of-law principles.",
  },
  {
    heading: "8. Contact Information",
    body: "Questions regarding these Terms, licensing compliance, or takedown requests may be directed to [Organization / Operator Name] at [legal@example.org] or [Mailing Address].",
  },
];

export const PRIVACY_TEMPLATE_SECTIONS = [
  {
    heading: "1. Overview & Data Controller",
    body: "This Privacy Policy explains how [Organization / Operator Name] (\"we,\" \"us,\" or \"our\") handles information when you visit or interact with [Application Name / Koerner Hall Acoustic Simulation] (the \"Service\"). Questions or privacy requests may be sent to [privacy@example.org].",
  },
  {
    heading: "2. Information Processed Locally (Zero Account / Zero Tracking Default)",
    body: "In its default configuration, the Service runs client-side in your browser using WebGL2 and the Web Audio API. It does not require user registration, does not ask for your name, email, or payment details, does not access your microphone or camera, and does not set advertising cookies or behavioral tracking beacons. Seat selections, camera poses, URL parameters (such as ?seat= or ?piece=), and audio playback states are processed transiently in browser memory.",
  },
  {
    heading: "3. Infrastructure, Hosting & CDN Requests",
    body: "When your browser loads the application, 3D geometry (.glb), or Creative Commons audio (.mp3) files from [Hosting Provider / CDN, e.g., Google Cloud / gstatic.com], standard HTTP request metadata—such as your IP address, browser user-agent, timestamp, and requested asset path—may be processed transiently in server or CDN access logs for security, reliability, and abuse prevention.",
  },
  {
    heading: "4. Optional Features & Clipboard Actions",
    body: "If you click \"Copy Attribution\" or \"Copy Template\" inside the Credits & Legal dialog, the browser writes the plain-text attribution or template block to your system clipboard solely at your explicit request; the Service never reads your clipboard contents. [If you enable third-party analytics or error telemetry in a forked deployment, describe those providers, purposes, and opt-out mechanisms here.]",
  },
  {
    heading: "5. Data Retention & Security",
    body: "Because the client application does not collect or store personal user profiles, no personal account data is retained by the client. Standard web server/CDN operational logs are retained only for [Retention Period, e.g., 30 days] in accordance with [Hosting Provider] security policies and encrypted in transit via HTTPS/TLS.",
  },
  {
    heading: "6. Your Privacy Rights",
    body: "Depending on your jurisdiction (such as Canada's PIPEDA, the EU/UK GDPR, or California's CCPA/CPRA), you may have rights to request access to, correction of, or deletion of personal data, or to object to certain processing. To exercise any applicable rights regarding server logs or inquiries sent to us, contact [privacy@example.org].",
  },
  {
    heading: "7. Children's Privacy & Policy Changes",
    body: "The Service is a general-audience cultural and educational simulation and does not knowingly collect personal information from children under 13 (or the applicable age of digital consent in your jurisdiction). We may revise this Privacy Policy template as features evolve; please check the Effective Date for the latest version.",
  },
];

export function buildPlainTextAttribution() {
  const lines = [
    "Koerner Hall — 1780 Stein-Schule Fortepiano & Spatial Acoustics",
    "Credits, Licenses & References Summary",
    "================================================================",
    "",
  ];
  for (const sec of CREDITS_AND_LICENSES_SECTIONS) {
    lines.push(sec.title.toUpperCase());
    for (const item of sec.items) {
      lines.push(`- ${item.name} [${item.license}]`);
      lines.push(`  Source: ${item.source}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

export function buildPlainTextLegalTab(tabName) {
  if (tabName === "terms") {
    const lines = [
      "TERMS OF USE TEMPLATE",
      "Effective Date: [Effective Date] | Operator: [Organization / Operator Name] | Jurisdiction: [Province/State, Country]",
      "================================================================",
      "",
    ];
    for (const sec of TERMS_TEMPLATE_SECTIONS) {
      lines.push(sec.heading);
      lines.push(sec.body);
      lines.push("");
    }
    return lines.join("\n");
  }
  if (tabName === "privacy") {
    const lines = [
      "PRIVACY POLICY TEMPLATE",
      "Effective Date: [Effective Date] | Data Controller: [Organization / Operator Name] | Contact: [privacy@example.org]",
      "================================================================",
      "",
    ];
    for (const sec of PRIVACY_TEMPLATE_SECTIONS) {
      lines.push(sec.heading);
      lines.push(sec.body);
      lines.push("");
    }
    return lines.join("\n");
  }
  return buildPlainTextAttribution();
}

export class LegalCreditsModal {
  constructor({ modalEl, triggerBtn, closeBtn, bodyEl, tabBtns, copyBtn }) {
    this.modalEl = modalEl;
    this.triggerBtn = triggerBtn;
    this.closeBtn = closeBtn;
    this.bodyEl = bodyEl;
    this.tabBtns = Array.from(tabBtns || []);
    this.copyBtn = copyBtn;

    this.isOpen = false;
    this.activeTab = "credits"; // "credits" | "terms" | "privacy"
    this._copyResetTimer = null;

    this._bindEvents();
    this._renderTab();
  }

  _bindEvents() {
    const blurOnFocus = (el) => {
      if (el) el.addEventListener("focus", () => el.blur());
    };
    blurOnFocus(this.triggerBtn);
    blurOnFocus(this.closeBtn);
    blurOnFocus(this.copyBtn);
    this.tabBtns.forEach(blurOnFocus);

    if (this.triggerBtn) {
      this.triggerBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.toggle();
      });
    }

    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.close();
      });
    }

    if (this.modalEl) {
      this.modalEl.addEventListener("pointerdown", (e) => {
        if (e.target === this.modalEl) {
          this.close();
        }
      });
    }

    this.tabBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const tab = btn.dataset.legalTab;
        if (tab) this.setTab(tab);
      });
    });

    if (this.copyBtn) {
      this.copyBtn.addEventListener("click", async (e) => {
        e.stopPropagation();
        const text = buildPlainTextLegalTab(this.activeTab);
        let copied = false;
        try {
          if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
            await navigator.clipboard.writeText(text);
            copied = true;
          }
        } catch (_) {}
        if (!copied) {
          try {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.setAttribute("readonly", "");
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            copied = document.execCommand("copy");
            document.body.removeChild(ta);
          } catch (_) {}
        }
        if (this._copyResetTimer) clearTimeout(this._copyResetTimer);
        this.copyBtn.textContent = copied ? "Copied" : "Copy Unavailable";
        this._copyResetTimer = setTimeout(() => {
          this._syncCopyLabel();
        }, 2000);
      });
    }

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        e.preventDefault();
        e.stopPropagation();
        this.close();
      }
    });
  }

  _syncCopyLabel() {
    if (!this.copyBtn) return;
    if (this.activeTab === "terms") this.copyBtn.textContent = "Copy Terms";
    else if (this.activeTab === "privacy") this.copyBtn.textContent = "Copy Privacy";
    else this.copyBtn.textContent = "Copy Attribution";
  }

  open(tab = null) {
    if (tab && ["credits", "terms", "privacy"].includes(tab)) {
      this.activeTab = tab;
    }
    this.isOpen = true;
    document.body.classList.add("legal-modal-open");
    if (this.modalEl) {
      this.modalEl.hidden = false;
    }
    if (this.triggerBtn) {
      this.triggerBtn.setAttribute("aria-expanded", "true");
    }
    this._syncTabButtons();
    this._renderTab();
  }

  close() {
    this.isOpen = false;
    document.body.classList.remove("legal-modal-open");
    if (this.modalEl) {
      this.modalEl.hidden = true;
    }
    if (this.triggerBtn) {
      this.triggerBtn.setAttribute("aria-expanded", "false");
    }
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  setTab(tabName) {
    if (!["credits", "terms", "privacy"].includes(tabName)) return;
    this.activeTab = tabName;
    this._syncTabButtons();
    this._renderTab();
    if (this.bodyEl) this.bodyEl.scrollTop = 0;
  }

  _syncTabButtons() {
    this.tabBtns.forEach((btn) => {
      const isActive = btn.dataset.legalTab === this.activeTab;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", isActive ? "true" : "false");
    });
    if (this.copyBtn) {
      this.copyBtn.hidden = false;
      this._syncCopyLabel();
    }
  }

  _renderTab() {
    if (!this.bodyEl) return;
    this.bodyEl.replaceChildren();

    if (this.activeTab === "credits") {
      this._renderCredits(this.bodyEl);
    } else if (this.activeTab === "terms") {
      this._renderLegalTemplate(this.bodyEl, {
        badge: "TERMS OF USE TEMPLATE",
        title: "Terms of Use",
        meta: "Effective Date: [Effective Date] · Operator: [Organization / Operator Name] · Jurisdiction: [Province/State, Country]",
        notice:
          "Template Notice: Replace bracketed placeholders (e.g., [Organization / Operator Name], [legal@example.org], [Jurisdiction]) with your deploying organization's details before publishing externally.",
        sections: TERMS_TEMPLATE_SECTIONS,
      });
    } else {
      this._renderLegalTemplate(this.bodyEl, {
        badge: "PRIVACY POLICY TEMPLATE",
        title: "Privacy Policy",
        meta: "Effective Date: [Effective Date] · Data Controller: [Organization / Operator Name] · Contact: [privacy@example.org]",
        notice:
          "Template Notice: Reflects this application's default client-side, zero-tracker architecture. Customize bracketed fields and disclose any analytics or server logging you add in production.",
        sections: PRIVACY_TEMPLATE_SECTIONS,
      });
    }
  }

  _renderCredits(container) {
    const intro = document.createElement("div");
    intro.className = "legal-intro-banner";
    intro.textContent =
      "Complete inventory of 3D mesh packs, 4K Cycles lightmaps, Creative Commons period fortepiano recordings, historical sample banks, open-source libraries, fonts, and architectural/organological references powering this simulation.";
    container.appendChild(intro);

    for (const section of CREDITS_AND_LICENSES_SECTIONS) {
      const secEl = document.createElement("section");
      secEl.className = "legal-section";

      const h3 = document.createElement("h3");
      h3.className = "legal-section-title";
      h3.textContent = section.title;
      secEl.appendChild(h3);

      const listEl = document.createElement("div");
      listEl.className = "credit-list";

      for (const item of section.items) {
        const card = document.createElement("article");
        card.className = "credit-card";

        const topRow = document.createElement("div");
        topRow.className = "credit-card-top";

        const nameEl = document.createElement("div");
        nameEl.className = "credit-name";
        nameEl.textContent = item.name;

        const badgeEl = document.createElement("span");
        badgeEl.className = "credit-license-badge";
        badgeEl.textContent = item.license;

        topRow.appendChild(nameEl);
        topRow.appendChild(badgeEl);

        const sourceEl = document.createElement("div");
        sourceEl.className = "credit-source";
        sourceEl.textContent = item.source;

        const detailsEl = document.createElement("p");
        detailsEl.className = "credit-details";
        detailsEl.textContent = item.details;

        card.appendChild(topRow);
        card.appendChild(sourceEl);
        card.appendChild(detailsEl);
        listEl.appendChild(card);
      }

      secEl.appendChild(listEl);
      container.appendChild(secEl);
    }
  }

  _renderLegalTemplate(container, { badge, title, meta, notice, sections }) {
    const headerBlock = document.createElement("div");
    headerBlock.className = "legal-doc-header";

    const badgeEl = document.createElement("div");
    badgeEl.className = "legal-doc-badge";
    badgeEl.textContent = badge;

    const titleEl = document.createElement("h2");
    titleEl.className = "legal-doc-title";
    titleEl.textContent = title;

    const metaEl = document.createElement("div");
    metaEl.className = "legal-doc-meta";
    metaEl.textContent = meta;

    const noticeEl = document.createElement("div");
    noticeEl.className = "legal-template-notice";
    noticeEl.textContent = notice;

    headerBlock.appendChild(badgeEl);
    headerBlock.appendChild(titleEl);
    headerBlock.appendChild(metaEl);
    headerBlock.appendChild(noticeEl);
    container.appendChild(headerBlock);

    for (const sec of sections) {
      const secEl = document.createElement("section");
      secEl.className = "legal-clause";

      const h3 = document.createElement("h3");
      h3.className = "legal-clause-heading";
      h3.textContent = sec.heading;

      const p = document.createElement("p");
      p.className = "legal-clause-body";
      p.textContent = sec.body;

      secEl.appendChild(h3);
      secEl.appendChild(p);
      container.appendChild(secEl);
    }
  }
}
