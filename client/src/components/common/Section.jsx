import PropTypes from "prop-types";

const Section = ({ children, className = "", id = "" }) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Section;
