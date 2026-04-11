const pad2 = (value: number) => String(value).padStart(2, '0');

const getLocalDateKey = (date: Date) =>
	`${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;

export const formatMatchTime = (isoString: string): string => {
	const date = new Date(isoString);
	const now = new Date();

	const time = `${pad2(date.getHours())}:${pad2(date.getMinutes())}`;
	const todayKey = getLocalDateKey(now);

	const tomorrow = new Date(now);
	tomorrow.setDate(now.getDate() + 1);

	const targetKey = getLocalDateKey(date);

	if (targetKey === todayKey) {
		return `Today - ${time}`;
	}

	if (targetKey === getLocalDateKey(tomorrow)) {
		return `Tomorrow - ${time}`;
	}

	const day = pad2(date.getDate());
	const month = date.toLocaleDateString(undefined, { month: 'short' });

	return `${day} ${month} - ${time}`;
};
