import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },

    categories: [
      "2021-03-08T00:00:00.00Z",
      "2021-03-09T00:00:00.00Z",
      "2021-03-10T00:00:00.00Z",
      "2021-03-11T00:00:00.00Z",
      "2021-03-12T00:00:00.00Z",
      "2021-03-13T00:00:00.00Z",
      "2021-03-14T00:00:00.00Z",
    ],
  },
  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};
const series = [
  {
    name: "series1",
    data: [31, 120, 10, 28, 61, 18, 109],
  },
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" px="6" maxW={1480} mx="auto">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" aling="flex-start">
          <Box p="8" pb="4" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da Semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Taxa de Abertura
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
