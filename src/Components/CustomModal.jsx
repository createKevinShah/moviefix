import { Modal } from "antd";
import React, { useEffect } from "react";
import CrossSvg from "../Assets/Icons/CrossSvg";
import getMovieDetails from "../Services/getMovieDetails";

const CustomModal = ({ visible = true, onCancel, movieDetails }) => {
  const { title, popularity, overview } = movieDetails;

  useEffect(() => {
    getMovieDetails();
  }, []);

  if (!visible) {
    return <></>;
  }

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      destroyOnClose
      centered
      modalRender={() => (
        <div
          className="w-full max-w-[90vw] md:max-w-full ml-3 md:ml-0 h-[400px] p-4 bg-white rounded-2xl shadow-lg"
          style={
            {
              // maxWidth: "500px",
              // maxHeight: "400px",
            }
          }
        >
          <div className="flex justify-between">
            <div />
            <button onClick={onCancel}>
              <CrossSvg className="text-grey-100 cursor-pointer" />
            </button>
          </div>
          <div>
            <p>{title}</p>
            <p>{overview}</p>
            <p>{popularity}</p>
          </div>
        </div>
      )}
    ></Modal>
  );
};

export default CustomModal;
