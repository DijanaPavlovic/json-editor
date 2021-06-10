export type PropertyValue =
  | string
  | boolean
  | number
  | Record<string, unknown>
  | Record<string, unknown>[];

export interface JsonElement {
  id: string | number;
  [key: string]: PropertyValue;
}

export interface JsonData {
  [id: string]: JsonElement;
}

export interface DataUpdatePayload {
  id: string;
  key: string;
  value: PropertyValue;
}
