import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Flex, Box } from '@chakra-ui/react';
import Footer from './components/Footer';
import Table1 from './components/Table1';
import { BarChart } from './components/BarChart';

function App() {
  return (
    <Box
      bgImage='url("https://t3.ftcdn.net/jpg/05/24/14/44/360_F_524144420_kAYcOWuld4q0ggrzc4ObD1CFMtr8ELk5.jpg")'
      bgSize="cover"
      bgPos="center"
      width="100%"
      minHeight="100vh"
      css={{
        '@media screen and (max-width: 768px)': {
          backgroundImage: 'none', // Remove background image on screens smaller than or equal to 768px (tablet and mobile)
        },
      }}
    >
      <Flex direction={{ base: 'column', md: 'row' }} height="100%">
        <Box>
          {/* Sidebar is always visible */}
          <Sidebar />
        </Box>
        <Flex direction="column" flex="1" bg="white" p={{ base: 4, md: 8 }} mt={{ base: 4, md: '60px' }}>
          <Box mb={{ base: 4, md: 8 }}>
            <Navbar />
          </Box>
          <Box flex="1" mb={{ base: 4, md: 8 }}>
            <BarChart />
          </Box>
          <Box flex="1" mb={{ base: 4, md: 8 }}>
            <Table1 />
          </Box>
          <Box mt={{ base: 4, md: 'auto' }}>
            {/* Footer is always at the bottom */}
            <Footer />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
