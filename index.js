let response;
async function getSurahInfo() {
  try {
    //  add 'is-loading' class to #getSurahInfo
    document.querySelector("#getSurahInfo").classList.add("is-loading");
    response = await axios.get("https://api.alquran.cloud/v1/meta");
    
    response = response.data.data;
    document.querySelector(".api-response").innerText =
      JSON.stringify(response);
    for (let i = 0; i < response.surahs.references.length; i++) {
      let surah = document.createElement("li");
      surah.className = "box has-text-centered cell is-align-content-center is-flex-direction-row";
      surah.innerHTML = `<h1 class="title is-size-4 ibm-plex-sans-arabic-thin surah-name">${response.surahs.references[i].name}</h1>\n                        <h2 class="title is-size-5 surah-name">${response.surahs.references[i].englishName}</h2>\n                        <h2 class="title is-size-5 surah-name">${response.surahs.references[i].englishNameTranslation}</h2>\n                        <h3 class="title is-size-6 surah-name">Ayahs: ${response.surahs.references[i].numberOfAyahs}</h3>`;
      document.querySelector("#surahs").appendChild(surah);
    }
    document.querySelector("#getSurahInfo").classList.remove("is-loading");
  } catch (error) {
    document.querySelector(".api-error").innerText = error;
    document.querySelector("#getSurahInfo").classList.remove("is-loading");
    document.querySelector("#getSurahInfo").classList.remove("is-success");
    document.querySelector("#getSurahInfo").classList.add("is-danger");
    document.querySelector("#getSurahInfo").setAttribute("disabled", true);
    document.querySelector("#getSurahInfo").innerText =
      "API request failed. Please reload and try again.";
  }
}

document.querySelector("#getSurahInfo").addEventListener("click", () => {
  getSurahInfo();
});
