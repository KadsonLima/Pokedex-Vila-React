import { Box } from "@chakra-ui/react";

export function ProgressBar({ currentValue, color }: { currentValue: number, color: string }) {
  const maxValue = 200;
  const progressPercentage = (currentValue / maxValue) * 100;

  return (
    <Box
      width="60%"
      height="7px"
      backgroundColor={"gray.200"}
      borderRadius="md"
      overflow="hidden"
    >
      <Box
        width={`${progressPercentage}%`}
        height="100%"
        backgroundColor={color}
      />
    </Box>
  );
}