import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
  const toastStore = useSelector(state => state.toast);

  useEffect(() => {
    if (!toastStore.notify) return;

    if (toastStore.type === 'success') {
      toast.success(toastStore.notify);
    }

    if (toastStore.type === 'warn') {
      toast.warn(toastStore.notify);
    }

    if (toastStore.type === 'error') {
      toast.error(toastStore.notify);
    }
  }, [toastStore]);

  return <ToastContainer />;
}
