export async function fetchData(pathName) {
  try {
    const response = await fetch('../data.json');
    if (response.ok) {
      const jsonData = await response.json();
      return jsonData[pathName];
    }
    throw new Error('Network Error');
  } catch (error) {
    console.error(error);
  }
}

export const getPathName = () => {
  return window.location.pathname.replace('/', '').replace('.html', '');
};

//Load data from json file depends on the page
let data;
fetchData(getPathName()).then(response => {
  data = response;
  return data;
});
export { data };
