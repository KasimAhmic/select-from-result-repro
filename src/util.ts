export function debugObject(name: string, obj: unknown) {
  const propertyNames = Object.getOwnPropertyNames(obj);
  const propertyDescriptors = Object.getOwnPropertyDescriptors(obj);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const prototype = Object.getPrototypeOf(obj);

  console.log('\n===============');

  if (obj && typeof obj === 'object') {
    console.log(name, 'hasRefetch:', Reflect.has(obj, 'refetch'));
  }

  console.log(name, 'propertyNames:', propertyNames);
  console.log(name, 'propertyDescriptors:', propertyDescriptors);
  console.log(name, 'prototype:', prototype);

  console.log('===============\n');
}
