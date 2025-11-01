import PropTypes from "prop-types";

const NavLinks = ({ route }) => {
  return (
    <li className="font-medium">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

NavLinks.propTypes = {
  route: PropTypes.object.isRequired,
};

export default NavLinks;
