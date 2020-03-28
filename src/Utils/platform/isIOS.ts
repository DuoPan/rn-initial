import { Platform } from "react-native";

export default function isIOS(): boolean {
  return Platform.OS === "ios";
}
