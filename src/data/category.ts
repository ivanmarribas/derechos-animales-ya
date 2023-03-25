export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Veganismo",
    slug: "veganismo",
    color: "green",
    description: "Artículos sobre veganismo",
  },
  {
    title: "Ciencia",
    slug: "ciencia",
    color: "green",
    description: "Artículos sobre ciencia",
  },
];
