import { JsonData, DataUpdatePayload } from 'shared/types';

export const SET_JSON_DATA = 'SET_JSON_DATA';

export const UPDATE_JSON_DATA = 'UPDATE_JSON_DATA';

export interface SetJsonDataAction {
  type: typeof SET_JSON_DATA;
  payload: JsonData;
}

export interface UpdateJsonDataAction {
  type: typeof UPDATE_JSON_DATA;
  payload: DataUpdatePayload;
}

export type JsonDataAction = SetJsonDataAction | UpdateJsonDataAction;
