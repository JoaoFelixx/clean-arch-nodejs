import { randomUUID } from 'crypto';

const makeId = (): string => randomUUID();

export { makeId };