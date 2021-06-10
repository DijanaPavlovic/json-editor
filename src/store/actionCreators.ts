import { JsonData, DataUpdatePayload } from 'shared/types';
import {
  SET_JSON_DATA,
  UPDATE_JSON_DATA,
  SetJsonDataAction,
  UpdateJsonDataAction,
} from './actionTypes';

export const setJsonData = (payload: JsonData): SetJsonDataAction => ({
  type: SET_JSON_DATA,
  payload,
});

export const updateJsonData = (payload: DataUpdatePayload): UpdateJsonDataAction => ({
  type: UPDATE_JSON_DATA,
  payload,
});
