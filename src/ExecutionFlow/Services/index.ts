import {get, post} from "../Network";

export function LaunchFlowId(id: number, params: any) {
  return post(`exec/launch/${id}`, params);
}

export function LaunchFlowIdWithStepId(id: number, stepId: number, params: any) {
  return post(`exec/launch/${id}/step/${stepId}`, params);
}

export function getFlowStepsAfterStep(flowId: number, previousStepId: number) {
  return get(`flow/${flowId}/step/${previousStepId}/steps_after`)
}

export function getFlow(id: number) {
  return get(`flow/${id}`);
}

export function executeFLowStep(params: any, flowId: number, stepId: number) {
  return post(`exec/${flowId}/step/${stepId}`, params).then(res => {
    if (!res) {
      return {success: false};
    }
    return res;
  });
}

export function getValuesChoiceList(id: string) {
  return get(`/cl/${id}`)
}

export function getAllChoiceList(): Promise<any> {
  return get("cl");
}

export function getExecuteFLowStep(flowId: number, stepId: number) {
  return get(`exec/${flowId}/step/${stepId}`).then(res => {
    if (!res) {
      return {success: false};
    }
    return res;
  });
}
