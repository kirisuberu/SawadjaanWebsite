import React from "react";
import styled from "styled-components";
import { MapPin, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import mapImage from "../../assets/img/maps/ZC.png";

const MapBulacan = ({
  title = "Main Office",
  address = "Veterans Ave, Zamboanga City",
  latitude = "6.905009",
  longitude = "122.080470",
}) => {
  const handleMapRedirect = () => {
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <AnimatePresence>
      <Card
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        whileHover={{ y: -5 }}
      >
        <CardHeader>
          <Title
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </Title>
        </CardHeader>

        <ImageContainer>
          <LocationImage
            src={mapImage}
            alt={`Location preview of ${title}`}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <ExternalButton
            onClick={handleMapRedirect}
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 1)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ExternalLink size={16} />
          </ExternalButton>
        </ImageContainer>

        <CardContent>
          <AddressContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin size={20} color="#6b7280" />
            </motion.div>
            <Address>{address}</Address>
          </AddressContainer>
        </CardContent>

        <CardFooter>
          <MapButton
            onClick={handleMapRedirect}
            whileHover={{
              scale: 1.02,
              backgroundColor: "#191919",
            }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ rotate: 20 }}
              transition={{ duration: 0.2 }}
            >
              <MapPin size={16} />
            </motion.div>
            View on Google Maps
          </MapButton>
        </CardFooter>
      </Card>
    </AnimatePresence>
  );
};

export default MapBulacan;
const Card = styled(motion.div)`
  width: 100%;
  max-width: 24rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
  overflow: hidden;
`;

const CardHeader = styled.div`
  padding: 1.5rem 1.5rem 1rem 1.5rem;
`;

const Title = styled(motion.h2)`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
  color: #1a1a1a;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 12rem;
  overflow: hidden;
`;

const LocationImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ExternalButton = styled(motion.button)`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
  padding: 1rem 1.5rem;
`;

const AddressContainer = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
`;

const Address = styled.p`
  color: #4b5563;
  margin: 0;
  line-height: 1.5;
`;

const CardFooter = styled.div`
  padding: 1rem 1.5rem 1.5rem;
`;

const MapButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem 1rem;
  background-color: #191919;
  color: white;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 500;
`;
