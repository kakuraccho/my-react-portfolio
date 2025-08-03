export interface Work {
  id: number;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
}

export const myWorks: Work[] = [
  {
    id: 1,
    title: '作品A',
    description: 'TEST',
    url: 'http://our0kobaaaaa.xsrv.jp/works/work01/',
    imageUrl: 'https://via.placeholder.com/300x200?text=Work+A'
  }
];