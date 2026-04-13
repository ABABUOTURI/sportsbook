import { writable } from 'svelte/store';

export type Toast = {
	id: number;
	message: string;
	type?: 'info' | 'success' | 'warning';
};

const toasts = writable<Toast[]>([]);
let nextId = 1;

export const showToast = (message: string, type: Toast['type'] = 'info', durationMs = 2200) => {
	const id = nextId++;
	toasts.update((list) => [...list, { id, message, type }]);
	setTimeout(() => {
		toasts.update((list) => list.filter((toast) => toast.id !== id));
	}, durationMs);
};

export { toasts };
