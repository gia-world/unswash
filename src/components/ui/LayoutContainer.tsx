import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function LayoutContainer({ children, className }: Props) {
  return (
    <div
      className={`w-full mx-auto sm:max-w-md md:max-w-lg lg:max-w-4xl ${className}`}
    >
      {children}
    </div>
  );
}
