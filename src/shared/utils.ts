import { PropertyValue } from 'shared/types';

const emailValidationRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const isEmail = (value: string): boolean => emailValidationRegex.test(value);

export const isDate = (value: string): boolean => !Number.isNaN(Date.parse(value.toString()));

export const formatDate = (value: string): string => {
  const date = new Date(value);
  return date.toISOString().split('T')[0];
};

export const formatObject = (data: PropertyValue): PropertyValue =>
  Object.entries(data).reduce(
    (acc, [id, value]) => ({
      ...acc,
      [id]: typeof value === 'string' && isDate(value) ? formatDate(value.toString()) : value,
    }),
    {},
  );
