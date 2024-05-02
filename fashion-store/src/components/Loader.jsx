import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
const Loader = ({ color }) => {
  return (
    <div className="grid place-items-center mt-16">
      <ClipLoader color={color} loading={true} size={50} />
    </div>
  );
};

Loader.propTypes = {
  color: PropTypes.string.isRequired,
};
export default Loader;
