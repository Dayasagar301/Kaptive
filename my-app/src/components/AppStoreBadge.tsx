import { Button } from '@chakra-ui/react';
import { FaApple } from 'react-icons/fa';
import React from 'react';

const AppStoreBadge = () => {
  return (
    <Button leftIcon={<FaApple />} colorScheme="teal" variant="solid">
      Download on the App Store
    </Button>
  );
};

export default AppStoreBadge;
