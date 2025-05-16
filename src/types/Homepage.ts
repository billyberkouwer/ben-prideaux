import { SanityImageAssetDocument } from "next-sanity";

export type ProjectListItemType = {
  title: string;
  date: string;
  roles: string[];
  projectImages: SanityImageAssetDocument[];
  slug: string;
};

export type ProjectListItemProps = ProjectListItemType & {
  isList: boolean;
  selectedCategory: string | null | undefined;
};