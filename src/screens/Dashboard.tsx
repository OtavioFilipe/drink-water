import { Box, Button, HStack, Text, useToast } from "native-base";
import React, { useEffect, useState } from "react";

export const Dashboard: React.FC = () => {
  const [cupSize, setCupSize] = useState<number>(300);
  const [water, setWater] = useState<number>(0);
  const [goal, setGoal] = useState<number>(2000);

  const toast = useToast();

  function handleWater() {
    setWater(water + cupSize);
    toast.show({
      description: `Você bebeu ${cupSize}ml de água`,
    });
  }

  const handleChangeCupSize = (size: number) => {
    setCupSize(size);
  }

  useEffect(() => {
    if (water >= goal) {
      toast.show({
        description: "Você atingiu sua meta de água",
        placement: "top",
        colorScheme: "success",
      });
    }
  }, [water]);

  return (
    <>
      <HStack alignItems="center" justifyContent="center">
        <Text fontSize="6xl">{water}</Text>
        <Text fontSize="xl"> {'  '}/{goal} ml</Text>
      </HStack>

      <Text fontSize="sm"> {' '} copo de {cupSize} ml</Text>


      <Button mt={5} colorScheme="primary" onPress={handleWater}>
        Beber água
      </Button>

      <Box mt={10}>
        <Button.Group>
          <Button onPress={() => handleChangeCupSize(200)} colorScheme="teal">Copo americano</Button>
          <Button onPress={() => handleChangeCupSize(350)} colorScheme="teal">Xicára</Button>
          <Button onPress={() => handleChangeCupSize(500)} colorScheme="teal">Garrafa</Button>
        </Button.Group>
      </Box>
    </>
  );
};
