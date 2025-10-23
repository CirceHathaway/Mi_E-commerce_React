import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <p className="footer-brand">Página creada por CirceHathaway</p>

        <div className="footer-row">
          <small className="copy">© 2025 Todos los derechos reservados.</small>

          <ul className="socials" aria-label="Redes sociales">
            <li>
              <a
                href="https://www.instagram.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-link instagram"
                title="Instagram"
              >
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.75-.75a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5491122334455"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="social-link whatsapp"
                title="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.47 0 .16 5.31.16 11.88c0 2.09.55 4.1 1.6 5.9L0 24l6.4-1.66a11.78 11.78 0 0 0 5.66 1.45h.01c6.59 0 11.9-5.31 11.9-11.88 0-3.19-1.25-6.2-3.46-8.43zM12.07 21.5h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.8.99 1.02-3.7-.23-.38a9.87 9.87 0 0 1-1.53-5.15C2.17 6.43 6.5 2.12 12.06 2.12c2.63 0 5.1 1.02 6.96 2.87a9.72 9.72 0 0 1 2.89 6.89c0 5.45-4.44 9.62-9.84 9.62zm5.7-7.35c-.31-.16-1.83-.9-2.11-1-.29-.1-.49-.16-.7.16-.2.31-.8 1-.98 1.21-.18.21-.36.24-.67.08-.31-.16-1.3-.48-2.47-1.52-.91-.79-1.53-1.76-1.71-2.07-.18-.31-.02-.48.13-.64.13-.13.31-.36.47-.54.16-.19.21-.31.31-.52.1-.21.05-.39-.02-.54-.08-.16-.7-1.68-.96-2.29-.25-.6-.51-.52-.7-.52l-.6-.01c-.2 0-.52.07-.79.39-.27.31-1.04 1-1.04 2.45s1.07 2.84 1.22 3.04c.16.21 2.1 3.2 5.08 4.49.71.31 1.27.49 1.71.63.72.23 1.37.2 1.88.12.57-.08 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.21-.6-.37z"/>
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-link facebook"
                title="Facebook"
              >
                <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
                  <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 4.9 3.58 8.96 8.26 9.86v-6.98H7.77v-2.88h2.37V9.84c0-2.33 1.39-3.62 3.52-3.62.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.69-1.47 1.4v1.68h2.5l-.4 2.88h-2.1v6.98c4.68-.9 8.26-4.96 8.26-9.86z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};