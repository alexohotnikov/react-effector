import { createStore, createEvent } from 'effector';

export const addCount = createEvent('add value');
export const removeCount = createEvent('remove value');


export const store = createStore({ value: 0 })
  .on(addCount, ({ value }) => ({ value: value + 1 }))
  .on(removeCount, ({ value }) => ({ value: value - 1 }));
