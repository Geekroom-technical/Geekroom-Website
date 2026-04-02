


"use client";

import { useEffect } from 'react';
import InteractiveBackground from '../../components/InteractiveBackground';

export default function ContactPage() {
  useEffect(() => {
    // Inject adapted light theme GetInTouch styles and script
    const id = 'contact-styles';
    if (document.getElementById(id)) return;

    // 1. Adapted SOCIAL/CONTACT INFO (user will update)
    const SOCIAL_LINKS = {
      instagram: 'https://instagram.com/YOUR_HANDLE',
      facebook:  'https://facebook.com/YOUR_PAGE', 
      twitter:   'https://x.com/YOUR_HANDLE',
      youtube:   'https://youtube.com/@YOUR_CHANNEL',
    };

    const CONTACT_INFO = {
      address: '2972 Westheimer Rd. Santa Ana, Illinois 85486',
      email:   'kenzi.lawson@example.com',
      phone:   '(123) 456-7890',
    };

    // 2. SVG ICONS (unchanged)
    const ICONS = {
      address: `<svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 21s-7-6.75-7-11a7 7 0 0114 0c0 4.25-7 11-7 11z\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\"/></svg>`,
      email:   `<svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/><path d=\"M2 7l10 7 10-7\"/></svg>`,
      phone:   `<svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.1 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 17z\"/></svg>`,
      follow:  `<svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3z\"/><path d=\"M7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3\"/></svg>`,
      instagram: `<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.333.013 7.053.072 5.197.157 3.355.673 2.014 2.014.673 3.355.157 5.197.072 7.053.013 8.333 0 8.741 0 12c0 3.259.013 3.668.072 4.948.085 1.856.601 3.698 1.942 5.039 1.341 1.341 3.183 1.857 5.039 1.942C8.333 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.856-.085 3.698-.601 5.039-1.942 1.341-1.341 1.857-3.183 1.942-5.039C23.987 15.668 24 15.259 24 12c0-3.259-.013-3.668-.072-4.948-.085-1.856-.601-3.698-1.942-5.039C20.645.673 18.803.157 16.948.072 15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z\"/></svg>`,
      facebook:  `<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.028 4.388 11.02 10.125 11.927v-8.44H7.078v-3.487h3.047V9.41c0-3.025 1.792-4.696 4.533-4.696 1.313 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.487h-2.796v8.44C19.612 23.093 24 18.1 24 12.073z\"/></svg>`,
      twitter:   `<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z\"/></svg>`,
      youtube:   `<svg viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z\"/></svg>`,
    };

    // 3. ADAPTED LIGHT THEME CSS - Tailwind + custom glassmorphism matching project
    const CSS = `
      #contact-wrapper {
        background: rgba(255,255,255,0.85);
        backdrop-filter: blur(20px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 60px 20px;
        font-family: var(--font-geist-sans), sans-serif;
        position: relative;
        z-index: 10;
      }

      #contact-card {
        background: rgba(255,255,255,0.9);
        border-radius: 24px;
        padding: 60px;
        width: 100%;
        max-width: 1000px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 60px;
        position: relative;
        overflow: hidden;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.4);
        box-shadow: 0 25px 50px -12px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.05);
      }

      #contact-card::after {
        content: '';
        position: absolute;
        bottom: -100px;
        width: 400px;
        height: 400px;
        background: radial-gradient(circle, rgba(194,65,12,0.12) 0%, rgba(15,118,110,0.08) 50%, transparent 70%);
        pointer-events: none;
      }

      /* Form col */
      #contact-form-col { display: flex; flex-direction: column; }

      #contact-form-col h1 {
        font-size: 2.8rem;
        font-weight: 800;
        background: linear-gradient(to right, #c2410c, #0f766e);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: -0.02em;
        margin: 0 0 40px;
        font-family: var(--font-geist-sans);

      .contact-field { 
        display: flex; 
        flex-direction: column; 
        gap: 8px; 
        margin-bottom: 24px; 
      }

      .contact-field label {
        font-size: 0.9rem;
        font-weight: 600;
        color: #374151;
      }

      .contact-field input,
      .contact-field textarea {
        background: white;
        border: 1px solid #e5e7eb;
        border-radius: 12px;
        color: #111827;
        font-family: inherit;
        font-size: 1rem;
        padding: 14px 18px;
        outline: none;
        transition: all 0.25s ease;
        box-shadow: 0 1px 3px rgba(0,0,0,0.05);
      }

      .contact-field input::placeholder,
      .contact-field textarea::placeholder { color: #9ca3af; }

      .contact-field input:focus,
      .contact-field textarea:focus { 
        border-color: #3b82f6;
        box-shadow: 0 0 0 3px rgba(59,130,246,0.1), 0 1px 3px rgba(0,0,0,0.05);
        transform: translateY(-1px);
      }

      .contact-field textarea { resize: none; height: 130px; }

      #contact-btn-send {
        margin-top: 12px;
        align-self: flex-start;
        background: linear-gradient(to right, #c2410c, #0f766e);
        color: white;
        border: none;
        border-radius: 50px;
        padding: 16px 44px;
        font-family: inherit;
        font-size: 1rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.25s ease;
        box-shadow: 0 10px 25px rgba(194,65,12,0.3);
      }

      #contact-btn-send:hover { 
        transform: translateY(-2px);
        box-shadow: 0 15px 35px rgba(194,65,12,0.4);
      }

      /* Info col */
      #contact-info-col {
        display: flex;
        flex-direction: column;
        gap: 32px;
        padding-top: 12px;
      }

      .contact-info-item { display: flex; align-items: flex-start; gap: 20px; }

      .contact-info-icon {
        width: 44px;
        height: 44px;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(to right, #c2410c, #2563eb);
        color: white;
        border-radius: 12px;
        margin-top: 2px;
      }

      .contact-info-icon svg { width: 22px; height: 22px; }

      .contact-info-text h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #111827;
        margin: 0 0 6px;
      }

      .contact-info-text p { 
        font-size: 0.95rem; 
        color: #6b7280; 
        margin: 0;
        line-height: 1.5;
      }

      /* Socials */
      .contact-socials { display: flex; gap: 12px; margin-top: 8px; }

      .contact-social-btn {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        border: 1px solid #e5e7eb;
        background: white;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #6b7280;
        transition: all 0.25s ease;
        text-decoration: none;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      }

      .contact-social-btn:hover {
        border-color: #3b82f6;
        background: linear-gradient(to right, #c2410c, #2563eb);
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(194,65,12,0.3);
      }

      .contact-social-btn svg { width: 18px; height: 18px; }

      /* Responsive */
      @media (max-width: 768px) {
        #contact-card { 
          grid-template-columns: 1fr; 
          gap: 48px; 
          padding: 40px 32px; 
          margin: 0 12px;
        }
        #contact-form-col h1 { font-size: 2.2rem; }
      }

      @media (max-width: 480px) {
        #contact-wrapper { padding: 40px 16px; }
        #contact-card { padding: 32px 24px; }
      }
    `;

    // Inject styles
    const style = document.createElement('style');
    style.id = id;
    style.textContent = CSS;
    document.head.appendChild(style);

    // 4. Create DOM elements and mount
    function createContactSection() {
      const wrapper = document.createElement('div');
      wrapper.id = 'contact-wrapper';

      const card = document.createElement('div');
      card.id = 'contact-card';

      // Form col
      const formCol = document.createElement('div');
      formCol.id = 'contact-form-col';

      const heading = document.createElement('h1');
      heading.textContent = 'Get In Touch';
      formCol.appendChild(heading);

      function makeField(labelText, tag, attrs = {}) {
        const wrap = document.createElement('div');
        wrap.className = 'contact-field';

        const label = document.createElement('label');
        label.textContent = labelText;
        wrap.appendChild(label);

        const input = document.createElement(tag);
        Object.entries(attrs).forEach(([k, v]) => input.setAttribute(k, v));
        wrap.appendChild(input);
        return wrap;
      }

      formCol.appendChild(makeField('Name', 'input', { type: 'text', placeholder: 'Your name', required: true }));
      formCol.appendChild(makeField('Email', 'input', { type: 'email', placeholder: 'your@email.com', required: true }));
      formCol.appendChild(makeField('Phone', 'input', { type: 'tel', placeholder: 'Phone number' }));
      formCol.appendChild(makeField('Message', 'textarea', { placeholder: 'Tell us about your inquiry...', required: true }));

      const sendBtn = document.createElement('button');
      sendBtn.id = 'contact-btn-send';
      sendBtn.textContent = 'Send Message';
      sendBtn.addEventListener('click', () => {
        const fields = card.querySelectorAll('.contact-field input, .contact-field textarea');
        const data = Array.from(fields).reduce((acc, f) => {
          acc[f.name] = f.value.trim();
          return acc;
        }, {});
        console.log('Contact form submitted:', data);
        // TODO: User - integrate with /api/contact/route.js
        alert('Message sent! (Demo - connect your API)');
      });
      formCol.appendChild(sendBtn);

      // Info col
      const infoCol = document.createElement('div');
      infoCol.id = 'contact-info-col';

      function makeInfoItem(iconKey, title, content) {
        const item = document.createElement('div');
        item.className = 'contact-info-item';

        const iconWrap = document.createElement('div');
        iconWrap.className = 'contact-info-icon';
        iconWrap.innerHTML = ICONS[iconKey];

        const textWrap = document.createElement('div');
        textWrap.className = 'contact-info-text';

        const h3 = document.createElement('h3');
        h3.textContent = title;

        const p = document.createElement('p');
        p.innerHTML = content.replace(/https?:\/\/[^\s]+/g, '<a href=\"$&\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"contact-social-btn\">$&</a>'); // Make links clickable

        textWrap.appendChild(h3);
        textWrap.appendChild(p);
        item.appendChild(iconWrap);
        item.appendChild(textWrap);
        return item;
      }

      infoCol.appendChild(makeInfoItem('address', 'Address', CONTACT_INFO.address));
      infoCol.appendChild(makeInfoItem('email', 'Email', CONTACT_INFO.email));
      infoCol.appendChild(makeInfoItem('phone', 'Phone', CONTACT_INFO.phone));

      // Follow us
      const followItem = document.createElement('div');
      followItem.className = 'contact-info-item';

      const followIcon = document.createElement('div');
      followIcon.className = 'contact-info-icon';
      followIcon.innerHTML = ICONS.follow;

      const followText = document.createElement('div');
      followText.className = 'contact-info-text';

      const followH3 = document.createElement('h3');
      followH3.textContent = 'Follow Us';

      const socialsRow = document.createElement('div');
      socialsRow.className = 'contact-socials';

      [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['twitter', 'X'], ['youtube', 'YouTube']].forEach(([key, label]) => {
        const a = document.createElement('a');
        a.className = 'contact-social-btn';
        a.href = SOCIAL_LINKS[key];
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.setAttribute('aria-label', label);
        a.innerHTML = ICONS[key];
        socialsRow.appendChild(a);
      });

      followText.appendChild(followH3);
      followText.appendChild(socialsRow);
      followItem.appendChild(followIcon);
      followItem.appendChild(followText);
      infoCol.appendChild(followItem);

      card.appendChild(formCol);
      card.appendChild(infoCol);
      wrapper.appendChild(card);

      return wrapper;
    }

    // Mount to page content
    const container = document.querySelector('[data-contact-container]');
    if (container) {
      container.appendChild(createContactSection());
    }
  }, []);

  return (
    <InteractiveBackground>
      <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto flex-grow py-24 px-6 animate-fadeIn" data-contact-container>
        {/* Hero title */}
        <div className="text-center mb-8 animate-slideInUp">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-[#c2410c] to-[#2563eb] bg-clip-text text-transparent mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to start a conversation? We'd love to hear from you.
          </p>
        </div>
        {/* Contact section will be injected here */}
      </div>
    </InteractiveBackground>
  );
}

