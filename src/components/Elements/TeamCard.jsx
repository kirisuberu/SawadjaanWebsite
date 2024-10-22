import React, { useState } from "react";

const styles = {
  card: {
    position: "relative",
    margin: "1rem",
    width: "20rem",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    overflow: "hidden",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    paddingTop: "100%",
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  contentContainer: {
    padding: "1.5rem",
  },
  centeredContent: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "0.5rem",
  },
  title: {
    color: "#4B5563",
    marginBottom: "0.25rem",
  },
  location: {
    color: "#6B7280",
    fontSize: "0.875rem",
    marginBottom: "1rem",
  },
  button: {
    position: "absolute",
    bottom: "0",
    right: "0",
    padding: "0.5rem 1rem",
    color: "white",
    borderTopLeftRadius: "0.5rem",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0",
    borderBottomLeftRadius: "0",
    border: "none",
    cursor: "pointer",
    fontSize: "0.7rem",
    transition: "background-color 0.2s",
  },
  modal: {
    position: "fixed",
    inset: 0,
    zIndex: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    scale: "0.85",
    position: "relative",
    backgroundColor: "white",
    borderRadius: "0.5rem",
    maxWidth: "42rem",
    width: "100%",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  modalGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gap: "2rem",
    padding: "2rem",
  },
  modalHeader: {
    borderBottom: "1px solid #E5E7EB",
    padding: "1.5rem",
    backgroundColor: "white",
  },
  modalTitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#111827",
  },
  modalImageSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    gap: "1rem",
  },
  modalImage: {
    width: "100%",
    aspectRatio: "1/1",
    objectFit: "cover",
    borderRadius: "0.5rem",
  },
  modalInfo: {
    width: "100%",
  },
  infoSection: {
    marginBottom: "1.5rem",
  },
  sectionTitle: {
    fontSize: "1.125rem",
    fontWeight: 600,
    color: "#111827",
    marginBottom: "0.75rem",
  },
  infoLabel: {
    color: "#6B7280",
    fontSize: "0.875rem",
    marginBottom: "0.25rem",
  },
  infoValue: {
    color: "#111827",
    fontSize: "1rem",
    marginBottom: "1rem",
  },
  caption: {
    color: "#374151",
    lineHeight: 1.6,
    marginBottom: "1rem",
    textIndent: "2rem",
    textAlign: "justify",
  },
  modalFooter: {
    borderTop: "1px solid #E5E7EB",
    padding: "1rem",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  closeButton: {
    padding: "0.5rem 1rem",
    backgroundColor: "#E5E7EB",
    color: "#374151",
    borderRadius: "0.375rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
};

const TeamCard = ({ image, name, title, location, caption }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const captionArray = Array.isArray(caption) ? caption : [caption];

  // Add the missing hover handlers
  const [buttonHover, setButtonHover] = useState(false);
  const [closeButtonHover, setCloseButtonHover] = useState(false);

  const ModalContent = () => (
    <div style={styles.modal} onClick={() => setIsModalOpen(false)}>
      <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>Profile Details</h2>
        </div>

        <div
          style={{
            ...styles.modalGrid,
            gridTemplateColumns: window.innerWidth > 768 ? "1fr 2fr" : "1fr",
          }}
        >
          {/* Left Column - Image and Basic Info */}
          <div style={styles.modalImageSection}>
            <img src={image} alt={name} style={styles.modalImage} />
            <div style={styles.infoSection}>
              <h3 style={styles.sectionTitle}>Basic Information</h3>
              <div>
                <p style={styles.infoLabel}>Name</p>
                <p style={styles.infoValue}>{name}</p>

                <p style={styles.infoLabel}>Title</p>
                <p style={styles.infoValue}>{title}</p>

                <p style={styles.infoLabel}>Location</p>
                <p style={styles.infoValue}>{location}</p>
              </div>
            </div>
          </div>

          {/* Right Column - Caption/Bio */}
          <div style={styles.modalInfo}>
            <div style={styles.infoSection}>
              <h3 style={styles.sectionTitle}>About</h3>
              {captionArray.map((paragraph, index) => (
                <p key={index} style={styles.caption}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div style={styles.modalFooter}>
          <button
            style={{
              ...styles.closeButton,
              backgroundColor: closeButtonHover ? "#D1D5DB" : "#E5E7EB",
            }}
            onMouseEnter={() => setCloseButtonHover(true)}
            onMouseLeave={() => setCloseButtonHover(false)}
            onClick={() => setIsModalOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Main Card Component */}
      <div style={styles.card}>
        <div style={styles.imageContainer}>
          <img src={image} alt={name} style={styles.image} />
        </div>

        <div style={styles.contentContainer}>
          <div style={styles.centeredContent}>
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.title}>{title}</p>
            <p style={styles.location}>{location}</p>
          </div>
        </div>
        <button
          style={{
            ...styles.button,
            backgroundColor: buttonHover ? "#111" : "#333",
          }}
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          onClick={() => setIsModalOpen(true)}
        >
          View Details
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && <ModalContent />}
    </>
  );
};

export default TeamCard;
