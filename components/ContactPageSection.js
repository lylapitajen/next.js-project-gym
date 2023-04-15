const ContactPageSection = ({ Icon, subheading, array }) => {
  return (
    <section className="company-info-section">
      <Icon size="4rem" />
      <div className="content">
        <h2 className="subheading">{subheading}</h2>
        <ul>
          {array.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default ContactPageSection;
