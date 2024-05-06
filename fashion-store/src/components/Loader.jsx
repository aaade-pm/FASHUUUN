import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from "prop-types";
import React from "react";
const Loader = ({ color }) => {
  return (
    <>
      <div className="grid place-items-center mt-16">
        <ClipLoader color={color} loading={true} size={50} />
      </div>
    </>
  );
};

Loader.propTypes = {
  color: PropTypes.string.isRequired,
};

const MemoizedLoader = React.memo(Loader);
export default MemoizedLoader;
