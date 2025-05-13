export interface News{
  newsid: string;
  title: string;
  text: string;
  date: Date;
  btnText: string;
  url?: string;
  img?: string;
  images?:[img:string]
}
