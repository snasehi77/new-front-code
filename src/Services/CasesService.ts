import {post, get} from '../Network';


export function getExecute(id: number) {
  return post(`exec/launch/${id}`, null);
}


export function executeFLowStep(fields: any, flowId: number, stepId: number) {
  return post(`exec/${flowId}/step/${stepId}`, {fields})
    .then(res => {
      if (!res) {
        return {success: false}
      }
      return res;
    });
}

export function getAllChoiceList(): Promise<any> {
  return get('cl');
}