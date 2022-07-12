import { Box, Icon, HStack } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

type RatingPropsType = {
  size: number;
  scale: number;
  fillColor: string;
  strokeColor: string;
  rate: number;
};

type RatePropsType = {
  idx: number;
  fill: boolean;
};

const Rating = ({
  size,
  scale,
  fillColor,
  strokeColor,
  rate,
}: RatingPropsType) => {
  const buttons = [];

  const RatingIcon = ({ fill }: RatePropsType) => {
    return (
      <Icon
        as={StarIcon}
        color={fillColor}
        stroke={strokeColor}
        fillOpacity={fill ? "100%" : "0"}
      />
    );
  };

  const RatingButton = ({ idx, fill }: RatePropsType) => {
    return (
      <Box
        aria-label={`Rate ${idx}`}
        height={`${size}px`}
        width={`${size}px`}
        _focus={{ outline: 0 }}
      >
        <RatingIcon idx={idx} fill={fill} />
      </Box>
    );
  };

  for (let i = 1; i <= scale; i++) {
    buttons.push(<RatingButton key={i} idx={i} fill={i <= rate} />);
  }

  return (
    <HStack direction="row" spacing={2}>
      {buttons}
    </HStack>
  );
};

export default Rating;
