import { useEffect, useRef } from "react";

// Renders the Cloudflare Turnstile widget (script loaded in index.html).
function Turnstile({ onToken, resetKey }) {
  const container = useRef(null);

  useEffect(() => {
    let widgetId;

    function render() {
      if (!window.turnstile) return false;
      widgetId = window.turnstile.render(container.current, {
        sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
        theme: "dark",
        callback: (token) => onToken(token),
        "expired-callback": () => onToken(""),
        "error-callback": () => onToken(""),
      });
      return true;
    }

    // The script tag is async, so it may not have loaded yet.
    const timer = render() ? null : setInterval(() => {
      if (render()) clearInterval(timer);
    }, 200);

    return () => {
      clearInterval(timer);
      if (widgetId) window.turnstile.remove(widgetId);
    };
    // onToken is a state setter; resetKey forces a fresh challenge after a submit.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  return <div ref={container} />;
}

export default Turnstile;
