const URL = 'https://demo2663713.mockable.io';

export async function getRequest<T>(params: string): Promise<T>{
  const response= await fetch(`${URL}${params}`);
  return response.json() as Promise<T>;
}
