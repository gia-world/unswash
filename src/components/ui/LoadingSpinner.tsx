import { GridLoader } from "react-spinners";

type Props = {
  color?: string;
};

export default function LoadingSpinner({ color = "#36d7b7" }: Props) {
  return <GridLoader color={color} />;
}
