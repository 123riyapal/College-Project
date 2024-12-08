import React from 'react';
import './Modal.css';
import { Close } from '@mui/icons-material';

const Modal = ({ isOpen, images, imageIndex, onClose, onNext, onPrev }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}> {/* Close on click outside the modal */}
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevent close when clicking inside modal content */}
        <img src={images[imageIndex]} alt="Large view" className="modal-image" />

        <div className="modal-nav">
          <button className="modal-arrow modal-prev" onClick={onPrev}>
            &#8592; {/* Left arrow */}
          </button>
          <button className="modal-arrow modal-next" onClick={onNext}>
            &#8594; {/* Right arrow */}
          </button>
        </div>

        <Close
          className="modal-close"
          style={{
            width: "50px",
            height: "50px",
            padding: "10px",
            position: "absolute",
            zIndex: "20001",
            top: "10px",
            right: "10px",
          }}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default Modal;
