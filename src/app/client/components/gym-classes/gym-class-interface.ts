export interface GymClassInterface {
  // name: string;
  // description: string;
  // photos: string[];
  // time: string;
  // date: string;
  id:string;
  name:string;
  description:string;
  date:string;
  time:string;
  createdAt:string;
  updatedAt:string;
  deletedAt:string|null;
  photos : {
    id:string,
    url:string
  }[];
}
