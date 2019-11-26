import {post, get} from '../Network';


export function getExecute(id: number) {
  return post(`exec/launch/${id}`, null);
}


export function getAllChoiceList(): Promise<any> {
  return get('cl');
}