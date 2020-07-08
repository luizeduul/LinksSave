import { apiPost, apiGet } from '../Helpers/api';

export const LINK_CREATE = 'LINK_CREATE';
export const LINK_GET = 'LINK_GET';
export const LINK_LIST = 'LINK_LIST';

export const linkCreate = (data) => {
  const isSocial = !!data.isSocial;
  const payload = apiPost('/links', { ...data, isSocial });
  return { type: LINK_CREATE, payload };
};

export const linkGet = (id) => {
  const payload = apiGet(`/links/${id}`);
  return { type: LINK_GET, payload };
}

export const linkList = (data) => {
  const payload = apiGet('/links');
  return { type: LINK_LIST, payload };
}
