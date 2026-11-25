export const SectionHeading = ({ label, title, children }) => (
  <div className="section-heading">
    <div>
      <p className="eyebrow">
        {label}
      </p>
      <h2>{title}</h2>
    </div>
    {children ? <div className="section-heading-aside">{children}</div> : null}
  </div>
);
