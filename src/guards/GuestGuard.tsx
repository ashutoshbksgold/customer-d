import { ReactNode } from "react";

type GuestGuardProp = {
  children: ReactNode;
};

export const GuestGuard = ({ children }: GuestGuardProp) => {
  return <>{children}</>;
};
