export function isEqualObjects(object1: object, object2: object) {
  return JSON.stringify(object1) === JSON.stringify(object2);
}
