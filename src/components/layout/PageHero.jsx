import React from 'react';
import TerminalPrompt from '../common/TerminalPrompt';

const PageHero = ({ command, eyebrow, title, highlight, description }) => (
  <section>
    {command && <TerminalPrompt command={command} />}
    <div className="bg-[#0f1a38] border border-[#22397120] rounded-3xl px-6 py-10 sm:px-10 shadow-lg">
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#FFC906] mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl font-bold font-mono text-white">
          {title}
          {highlight ? (
            <>
              {' '}
              <span className="text-[#CC1E4A]">{highlight}</span>
            </>
          ) : null}
        </h1>
        {description && (
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;