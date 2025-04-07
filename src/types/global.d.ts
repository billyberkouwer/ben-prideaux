type ProjectListItemType = {
  title: string;
  year: string;
  categories: string[];
  images: string[]
  link: string;
};

type ProjectListItemProps = ProjectListItemType & {
  isList: boolean;
};