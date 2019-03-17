export function isEmpty(value) {
  if (isNull(value) || Object.keys(value).length === 0) {
    return true;
  }

  return false;
}

export function isNull(value) {
  if (value == null || value === undefined) {
    return true;
  }

  return false;
}
