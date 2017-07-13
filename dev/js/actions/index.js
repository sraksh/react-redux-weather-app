const API_KEY = '6c707f85a343c0ad8d1a93b522b456c3';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
	return {
		type: "FETCH_WEATHER",
	};
}