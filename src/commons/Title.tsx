interface Props {
  children?: string;
}

export function Title({ children }: Props) {
  return (
    <p className="font-medium text-center text-darkGreen text-md">
      {children ? children : ""}
    </p>
  );
}
