import workAImage from '@/images/portfolio_A_clock.png';

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
    title: 'ポモドーロタイマー',
    description: '○○の機能が入ったポモドーロタイマーです',
    url: 'http://our0kobaaaaa.xsrv.jp/works/work01/',
    imageUrl: workAImage
  }
];