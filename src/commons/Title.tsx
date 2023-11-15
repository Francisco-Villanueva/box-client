interface Props {
  children: string;
}

export function Title({ children }: Props) {
  return <p className="font-semibold text-darkGreen text-lg">{children}</p>;
}
