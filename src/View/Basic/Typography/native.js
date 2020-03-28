import React from "react";
import { Text, Animated, TouchableOpacity } from "react-native";
import {TBool, TNode, TObject, declareValues, TFunction, TString} from "Logic/primitive_type";
import { transformColor, getTypographyVariant } from "@theme";

function getTypographyStyle({ color, variant }) {
  return { color: transformColor(color), ...getTypographyVariant(variant), fontFamily: 'noto-sans', includeFontPadding: false, letterSpacing: 0 };
}

function getTypographyLineProperty({ noWrap }) {
  return {
    numberOfLines: noWrap ? 1 : null,
    flexWrap: noWrap ? 'noWrap': 'wrap',
  };
}

const Typography = function({
  children,
  style = {},
  color = "textPrimary",
  noWrap = false,
  variant = "body1",
  animated = false,
  onClick = null,
  ...others
}) {
  function renderBody() {
    return animated ? (
      <Animated.Text
        {...others}
        allowFontScaling={false}
        {...getTypographyLineProperty({ noWrap })}
        style={[getTypographyStyle({ color, variant }), style]}
      >
        {children}
      </Animated.Text>
    ) : (
      <Text
        allowFontScaling={false}
        {...others}
        {...getTypographyLineProperty({ noWrap })}
        style={[getTypographyStyle({ color, variant }), style]}
      >
        {children}
      </Text>
    );
  }

  if (onClick) {
    return (
      <TouchableOpacity onPress={onClick}>
        {renderBody()}
      </TouchableOpacity>
    );
  } else {
    return renderBody();
  }
};

Typography.propTypes = {
  children: TNode,
  style: TObject,
  color: TString,
  noWrap: TBool,
  variant: declareValues(["h5", "h6", "subtitle1", "body1", "body2", "caption"]),
  animated: TBool,
  onClick: TFunction,
};

export default Typography;
