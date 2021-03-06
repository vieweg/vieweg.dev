import * as Contentful from "contentful";
import { TypeAuthorFields } from "./";

export interface TypeArticleFields {
  title: Contentful.EntryFields.Symbol;
  slug: Contentful.EntryFields.Symbol;
  body: Contentful.EntryFields.Text;
  author: Contentful.Entry<TypeAuthorFields>;
  heroImage?: Contentful.Asset;
  description?: Contentful.EntryFields.Text;
  related?: Contentful.Entry<TypeArticleFields>[];
  tags?: Contentful.EntryFields.Array<Contentful.EntryFields.Symbol>;
}

export type TypeArticle = Contentful.Entry<TypeArticleFields>;
