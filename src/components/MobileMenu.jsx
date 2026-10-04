export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  if (!menuOpen) return null;
  return (
    <nav
      id="mobile-navigation"
      className="mobile-navigation"
      aria-label="Mobile navigation"
    >
      {[
        ["projects", "Selected work"],
        ["about", "About me"],
        ["skills", "My toolkit"],
        ["experience", "Experience"],
        ["contact", "Get in touch"],
      ].map(([id, label], index) => (
        <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
          <span>0{index + 1}</span>
          {label}
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </nav>
  );
};
