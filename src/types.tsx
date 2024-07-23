export type HeroCardProps = {
  name?: string;
  superpowers?: string;
  bio?: string;
  description?: string;
  thumbnail: string;
  children?: React.ReactNode;
  isSelected?: boolean;
  className?: string;
};

export type BlankCardProps = {
  children?: React.ReactNode;
  className?: string;
  isWeakness?: boolean;
};

export type HeroGridProps = {
  children?: React.ReactNode;
  className?: string;
  isEmpty?: boolean;
};
