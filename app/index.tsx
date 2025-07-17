import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to see changes to this screen.</Text>
      <Link href={'/auth/signup'}>Go to Signup</Link>
    </View>
  );
}
