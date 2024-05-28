import React from 'react';
import { ChakraProvider, Box, Table, Thead, Tbody, Tr, Th, Td, Heading } from '@chakra-ui/react';
import { Button } from "@chakra-ui/react";
import { BsTriangleFill } from 'react-icons/bs';

// JSON data
const data = {
  "Sheet1": [
    { "Month": "January", "OperatingActivities": 172937462.08, "InvestingActivities": 460098399.69, "FinancingActivities": 587879253.25, "NetChangeInCash": 76640853.39 },
    { "Month": "February", "OperatingActivities": 558052815.48, "InvestingActivities": 240625489.73, "FinancingActivities": 136019463.12, "NetChangeInCash": 97150953.75 },
    { "Month": "March", "OperatingActivities": 734194475.46, "InvestingActivities": 123489061.74, "FinancingActivities": 150519520.36, "NetChangeInCash": 377171608.76 },
    { "Month": "April", "OperatingActivities": 603217886.06, "InvestingActivities": 787168987.59, "FinancingActivities": 320338827.74, "NetChangeInCash": 51436824.34 },
    { "Month": "May", "OperatingActivities": 538484279.79, "InvestingActivities": 636583200.77, "FinancingActivities": 327452855.28, "NetChangeInCash": 809960171.80 },
    { "Month": "June", "OperatingActivities": 117281555.41, "InvestingActivities": 24425946.38, "FinancingActivities": 342606066.73, "NetChangeInCash": 706521972.57 },
  ]
};

// Function to calculate opening and ending cash
const calculateCashFlows = (data, initialOpeningCash) => {
  let cashFlows = [];
  let openingCash = initialOpeningCash;

  data.Sheet1.forEach((item) => {
    let endingCash = openingCash + item.NetChangeInCash;
    cashFlows.push({
      Month: item.Month,
      OperatingActivities: item.OperatingActivities,
      InvestingActivities: item.InvestingActivities,
      FinancingActivities: item.FinancingActivities,
      OpeningCash: openingCash,
      NetChangeInCash: item.NetChangeInCash,
      EndingCash: endingCash
    });
    openingCash = endingCash;
  });

  return cashFlows;
};

// Initial opening cash
const initialOpeningCash = 1000000;

// Calculated cash flows
const cashFlows = calculateCashFlows(data, initialOpeningCash);

// Main component
const Table1 = () => {
  return (
    <ChakraProvider>
      <Box p={5} style={{ marginTop: "40px"}}>
        
        <div style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
          <Heading size='xl' fontSize='20px'>Cashflow Summary</Heading>
          <div style={{display:"flex", alignItems:"center"}}>
            <Button color={"skyblue"} boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)" size="md" mr={2}>
              Decimal View
            </Button>
            <Button bg="white" size="md" mr={2}>
              Percent View
            </Button>
            <Button
            bg="white"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            size="md"
            rightIcon={<BsTriangleFill style={{ transform: 'rotate(180deg)'}}/>}
          >
            Euro
          </Button>
          </div>
        </div>
        <Table variant="striped" colorScheme="blue">
          <Thead>
            <Tr>
              <Th>Month</Th>
              <Th>Operating Activities</Th>
              <Th>Investing Activities</Th>
              <Th>Financing Activities</Th>
              <Th>Opening Cash</Th>
              <Th>Net Change in Cash</Th>
              <Th>Ending Cash</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cashFlows.map((item, index) => (
              <Tr key={index}>
                <Td>{item.Month}</Td>
                <Td>{item.OperatingActivities.toLocaleString()}</Td>
                <Td>{item.InvestingActivities.toLocaleString()}</Td>
                <Td>{item.FinancingActivities.toLocaleString()}</Td>
                <Td>{item.OpeningCash.toLocaleString()}</Td>
                <Td>{item.NetChangeInCash.toLocaleString()}</Td>
                <Td>{item.EndingCash.toLocaleString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </ChakraProvider>
  );
};

export default Table1;
