import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Data = ({ currencies }) => {
  return (
    <TableContainer>
      <Table
        variant="striped"
        size="lg"
        fontWeight="medium"
        colorScheme="blackAlpha">
        <TableCaption placement="top">Display Currency Rates</TableCaption>
        <Thead>
          <Tr>
            <Th>Currency</Th>
            <Th isNumeric>We Buy</Th>
            <Th isNumeric>Exchange Rate</Th>
            <Th isNumeric>We Sell</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>CAD</Td>
            <Td isNumeric>
              {parseFloat(
                (5 / 100) * parseFloat(currencies.CAD) +
                  parseFloat(currencies.CAD)
              )}
            </Td>
            <Td isNumeric>{currencies.CAD}</Td>
            <Td isNumeric>
              {parseFloat(currencies.CAD - (5 / 100) * currencies.CAD)}
            </Td>
          </Tr>
          <Tr>
            <Td>IDR</Td>
            <Td isNumeric>
              {parseFloat(
                (5 / 100) * parseFloat(currencies.IDR) +
                  parseFloat(currencies.IDR)
              )}
            </Td>
            <Td isNumeric>{currencies.IDR}</Td>
            <Td isNumeric>
              {parseFloat(currencies.IDR - (5 / 100) * currencies.IDR)}
            </Td>
          </Tr>
          <Tr>
            <Td>JPY</Td>
            <Td isNumeric>
              {parseFloat(
                (5 / 100) * parseFloat(currencies.JPY) +
                  parseFloat(currencies.JPY)
              )}
            </Td>
            <Td isNumeric>{currencies.JPY}</Td>
            <Td isNumeric>
              {parseFloat(currencies.JPY - (5 / 100) * currencies.JPY)}
            </Td>
          </Tr>
          <Tr>
            <Td>CHF</Td>
            <Td isNumeric>
              {parseFloat(
                (5 / 100) * parseFloat(currencies.CHF) +
                  parseFloat(currencies.CHF)
              )}
            </Td>
            <Td isNumeric>{currencies.CHF}</Td>
            <Td isNumeric>
              {parseFloat(currencies.CHF - (5 / 100) * currencies.CHF)}
            </Td>
          </Tr>
          <Tr>
            <Td>EUR</Td>
            <Td isNumeric>
              {parseFloat(
                (5 / 100) * parseFloat(currencies.EUR) +
                  parseFloat(currencies.EUR)
              )}
            </Td>
            <Td isNumeric>{currencies.EUR}</Td>
            <Td isNumeric>
              {parseFloat(currencies.EUR - (5 / 100) * currencies.EUR)}
            </Td>
          </Tr>
          <Tr>
            <Td>GBP</Td>
            <Td isNumeric>
              {parseFloat(
                (5 / 100) * parseFloat(currencies.GBP) +
                  parseFloat(currencies.GBP)
              )}
            </Td>
            <Td isNumeric>{currencies.GBP}</Td>
            <Td isNumeric>
              {parseFloat(currencies.GBP - (5 / 100) * currencies.GBP)}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default Data;
