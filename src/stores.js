import { writable } from 'svelte/store';

export const currentPage = writable();
export const challengeTime = writable(0);
export const challengesAnswered = writable(0);
export const finalScore = writable(0);
export const overTime = writable(0);