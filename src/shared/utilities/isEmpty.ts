function checkTypeOfObject(value: object): boolean {
  const stringifyObject = toString.call(value);

  if (stringifyObject.includes('Object')) {
    const myObj = value as object;

    if (Object.keys(myObj).length > 0) {
      return false;
    }
    return true;
  }

  if (stringifyObject.includes('Map')) {
    const myMap = value as Map<unknown, unknown>;

    if (myMap.size > 0) {
      console.log(false);
      return false;
    }
    console.log(true);
    return true;
  }

  if (stringifyObject.includes('Set')) {
    const mySet = value as Set<unknown>;

    if (mySet.size > 0) {
      console.log(false);
      return false;
    }
    console.log(true);
    return true;
  }

  return true;
}

function checkArray(value: Array<unknown>): boolean {
  if (value.length > 0) {
    return false;
  }
  return true;
}

function checkString(value: string): boolean {
  if (value.trim().length > 0) {
    return false;
  }
  return true;
}

function isNumber(value: unknown): boolean {
  if (typeof value === 'number') {
    return true;
  }
  return false;
}

function isBoolean(value: unknown): boolean {
  if (typeof value === 'boolean') {
    return true;
  }
  return false;
}

function isNullOrUndefined(value: unknown): boolean {
  if (value === undefined || value === null) {
    return true;
  }
  return false;
}

/**
 * Проверка является ли аргумент пустым
 * @param value Любой аргумент
 * @returns boolean
 *
 * @description
 * Значения 0 и другие Number, null, true, false, "",
 * undefined, [], {} возвращают true.
 */
export function isEmpty(value: unknown): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }

  if (isBoolean(value)) {
    return true;
  }

  if (isNumber(value)) {
    return true;
  }

  if (typeof value === 'string') {
    return checkString(value);
  }

  if (typeof value === 'symbol') {
    return true;
  }

  if (Array.isArray(value)) {
    return checkArray(value);
  }

  if (typeof value === 'function') {
    return false;
  }

  if (typeof value === 'object' && value !== null) {
    return checkTypeOfObject(value);
  }

  return false;
}
