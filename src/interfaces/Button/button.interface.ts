export interface IButton extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
  loading?: boolean;
}

export interface IButtonStyles {
  loading?: string;
}
