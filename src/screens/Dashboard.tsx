import { Button, HStack, Text, useToast } from "native-base";
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
        <Text fontSize="xl"> /{goal} ml</Text>
      </HStack>
      <Button colorScheme="primary" onPress={handleWater}>
        Beber água
      </Button>
    </>
  );
};
