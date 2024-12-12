const API_URL = 'https://compara-e-venda-de-veiculos.onrender.com/anuncio/listar';

export const fetchVeiculos = async (token) => {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // o token será capturado do localStorage e passado na rota
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados da API');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchVeiculoById = async (id) => {
  const API_URL_BY_ID = `https://compara-e-venda-de-veiculos.onrender.com/veiculo/listar/${id}`;
  const token = 'eyJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJzcHJpbmctc2VjdXJpdHktand0Iiwic3ViIjoia2Fpa2VAZXhhbXBsZS5jb20iLCJleHAiOjQzMjQ4OTg1MzksImlhdCI6MTczMjg5ODUzOSwic2NvcGUiOiJVU0VSIn0.V1ddE-eXRhq00OiPmu_d53NGpxTaJVZKpg7n4kfu-rlW07lwrMAfHdimcu_X2biDQwgCMwylOhbqMuExtgwQV43KiCx72ZvRQWSDLXgyYjRo0SRwJ2YfI_J8rldyMVp6rtfi4P3eN1X0BeimSQBanJ8GdA5-TDTnvq8COwl-KOtNWXhICvLyAYTSXf5SgFdmpTnseUl3PTwMTW7NTGBUxWPLdM0oz-lpLHhP0y8L6OhmP7QQ3ABgpAuTLvsRoBnmEiUIM-5PH7Gm6AKHGGmZlJkf3KGFuQ4SIA3wo9I82viSXfUR8Qz9BWNKGuBuCYMxA9yRdWVNcevZ2k-8XK32Zg';
  try {
    const response = await fetch(API_URL_BY_ID, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`, // o token permanente
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Erro ao buscar os dados do veículo');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};