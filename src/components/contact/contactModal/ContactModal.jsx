import './ContactModal.css';

function ContactModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay bg-neutral-800/40">
      <div className="modal">
        <button className="modal-close transition hover:text-emerald-200 duration-700" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

export default ContactModal;