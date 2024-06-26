const URL = 'https://demo2663713.mockable.io';

export async function getRequest<T>(params: string): Promise<T>{
  const response= await fetch(`${URL}${params}`);
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return response.json() as Promise<T>;
}
