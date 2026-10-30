import { useRef, useState } from 'react';
import { profile, socials } from '../data';
import Line from './Line';

export default function Contact() {
  const emailRef = useRef<HTMLSpanElement>(null);
  const [label, setLabel] = useState('Copy email');

  const flash = (text: string) => {
    setLabel(text);
    window.setTimeout(() => setLabel('Copy email'), 1800);
  };

  // Clipboard access can be refused, so fall back to selecting the address.
  const selectEmail = () => {
    const node = emailRef.current;
    const selection = window.getSelection();
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
    flash('Selected');
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      flash('Copied');
    } catch {
      selectEmail();
    }
  };

  return (
    <section id="contact" className="py-[clamp(56px,9vw,120px)]" aria-labelledby="contact-h">
      <h2
        id="contact-h"
        className="reveal-lines mb-[clamp(24px,4vw,48px)] font-display text-[clamp(2.4rem,8vw,7rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-balance"
      >
        <Line>Have a product that</Line>
        <Line>should feel alive?</Line>
      </h2>
      <div className="flex flex-wrap items-center gap-4" data-fade>
        <span className="mail-text" ref={emailRef}>
          {profile.email}
        </span>
        <button className="copy" type="button" onClick={copyEmail}>
          {label}
        </button>
      </div>
      <div className="socials mono mt-10 flex flex-wrap gap-x-8 gap-y-3" data-fade>
        {socials.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
