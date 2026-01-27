type ModalProps = {
  isOpen: boolean;
  imageSrc: string;
  alt: string;
  onClose: () => void;
};

export default function Modal({ isOpen, imageSrc, alt, onClose }: ModalProps) {
  return (
    <div
      className={`modal${isOpen ? ' active' : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <img src={imageSrc} alt={alt} loading="lazy" />
      </div>
    </div>
  );
}
