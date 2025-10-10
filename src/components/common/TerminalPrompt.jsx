import React, { useState, useEffect } from "react";

const TerminalPrompt = ({
  command,
  prompt = "jojo@portfolio:~$",
  animate = true,
  typingSpeed = 150,
  startDelay = 0,
  cursorBlinkSpeed = 500,
}) => {
  const [displayedText, setDisplayedText] = useState(animate ? "" : command);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!animate) {
      setDisplayedText(command);
      return undefined;
    }

    setDisplayedText("");

    let isCancelled = false;
    let typingTimeout;
    const delayTimeout = setTimeout(() => {
      let index = 0;

      const typeCharacter = () => {
        if (isCancelled) return;

        const nextIndex = index + 1;
        setDisplayedText(command.slice(0, nextIndex));
        index = nextIndex;

        if (nextIndex < command.length) {
          typingTimeout = setTimeout(typeCharacter, typingSpeed);
        }
      };

      if (command.length > 0) typeCharacter();
    }, startDelay);

    return () => {
      isCancelled = true;
      clearTimeout(delayTimeout);
      clearTimeout(typingTimeout);
    };
  }, [command, animate, typingSpeed, startDelay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, cursorBlinkSpeed);

    return () => clearInterval(cursorInterval);
  }, [cursorBlinkSpeed]);

  const shouldShowCursor = displayedText.length > 0 || !animate;

  return (
    <div className="flex items-center font-mono text-sm mb-6">
      <span className="text-[#FFC906]">{prompt}</span>
      <span className="ml-2 text-white">
        {displayedText}
        {shouldShowCursor && (
          <span
            className={`ml-1 ${
              cursorVisible ? "opacity-100" : "opacity-0"
            } text-[#FFC906]`}
          >
            _
          </span>
        )}
      </span>
    </div>
  );
};

export default TerminalPrompt;
