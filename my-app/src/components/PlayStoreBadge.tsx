import { Button } from '@chakra-ui/react';
import { FaGooglePlay } from 'react-icons/fa';
import React from 'react';

const PlayStoreBadge = () => {
  return (
    <Button leftIcon={<FaGooglePlay />} colorScheme="teal" variant="solid">
      Get it on Google Play
    </Button>
  );
};

export default PlayStoreBadge;
