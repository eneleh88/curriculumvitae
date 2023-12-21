import { useState, useEffect } from 'react';
import { Switch, Tooltip } from '@chakra-ui/react';

export const RainbowSwitch = () => {
  const bodyBg = '#fbcb74';

  const [isRainbowOn, setIsRainbowOn] = useState(false);

  const toggleRainbow = () => {
    setIsRainbowOn((prev) => !prev);
  };

  useEffect(() => {
    const body = document.body;

    const rainbowEffect = () => {
      const colors = ['#ff0000', '#ff9900', '#ffff00', '#33cc33', '#3399ff', '#cc66ff'];

      let currentColorIndex = 0;

      const changeColor = () => {
        body.style.backgroundColor = colors[currentColorIndex];

        currentColorIndex = (currentColorIndex + 1) % colors.length;
      };

      const intervalId = setInterval(changeColor, 100); // Change color every 500 milliseconds

      return () => {
        clearInterval(intervalId);
        body.style.backgroundColor = bodyBg; // Reset background color when rainbow effect is turned off
      };
    };

    if (isRainbowOn) {
      return rainbowEffect();
    }
  }, [isRainbowOn]);

  return (
    <Tooltip label="Do not flip the switch!" placement="left-end" hasArrow>
        <Switch aria-label="Do not touch!" justifySelf="flex-end" colorScheme={"gray"} onChange={toggleRainbow} size={"lg"}/>
    </Tooltip>
  );
};