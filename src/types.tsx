export type HeroCardProps = {
  name?: string;
  superpowers?: string;
  description?: string;
  personality?: string;
  pitfalls?: string;
  imageUrl: string;
  children?: React.ReactNode;
};

export type HeroGridProps = {
  children?: React.ReactNode;
};
