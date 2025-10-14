import { Slot } from "expo-router";
import AuthGuard from "@/utils/auth-guard";

export default function RootLayout() {
  return (
    <AuthGuard>
      <Slot />
    </AuthGuard>
  );
}
