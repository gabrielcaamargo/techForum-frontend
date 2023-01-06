export interface ArticleType {
  name: string;
  content: string;
  id: number;
  category: 'Node' | 'React' | 'Typescript' | 'React Native' | 'Javascript' | 'Express'
}
