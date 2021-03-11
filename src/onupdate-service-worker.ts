export const updateServiceWorker = async () => {
  const serviceWorker = await navigator.serviceWorker.getRegistration();

  if (serviceWorker?.waiting) {
    serviceWorker.waiting.postMessage({ type: 'SKIP_WAITING' });

    serviceWorker.waiting.addEventListener('statechange', (e: any) => {
      if (e.target.state === 'activated') {
        console.log(e);
        window.location.reload();
      }
    });
  }
};
