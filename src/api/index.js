const URL = 'https://demo2663713.mockable.io';

export async function getRequest(params) {
  const response = await fetch(`${URL}${params}`);
  return response.json();
}
