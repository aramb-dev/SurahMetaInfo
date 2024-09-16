let response;
async function getSurahInfo() {
  try {
    response = await axios.get("http://api.alquran.cloud/v1/meta");
    response = response.data;
    document.querySelector(".api-response").innerText = JSON.stringify(response.data.surahs.references[0].name);
    document.querySelector("#response-visual").innerText = `Ayahs: ${response.data.ayahs.count}`
  } catch (error) {
    document.querySelector(".api-error").innerText = error;
  }
}

document.querySelector("#getSurahInfo").addEventListener("click", () => {
    getSurahInfo();
    document.querySelector("#response-visual").innerText = `Ayahs: ${response.data.data.ayahs.count}`
});
