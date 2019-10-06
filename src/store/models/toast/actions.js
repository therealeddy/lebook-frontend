export function setToast(notify, type) {
  return {
    type: '@toast/OPEN',
    payload: { notify, type }
  };
}
