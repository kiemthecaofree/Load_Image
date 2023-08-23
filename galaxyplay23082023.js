const films_title = document.querySelector("#films_title");
const films_group = document.querySelector(".films_group");
const btn_reset = document.querySelector(".btn_reset");
const notification = document.querySelector(".notification");
const otp_form = document.querySelector(".otp_form");
const btn_update = document.querySelector(".btn_update");
const base_url = "https://galaxyplay.kiemthecaofree.com/"
const token_textarea = document.querySelector(".token_textarea");
const getListFilm = async () => {
  return await fetch("http://localhost:9000/film").then((response) =>
    response.json()
  );
};

const resetFilm = async () => {
  return await fetch(base_url + "reset").then((response) =>
    response.json()
  );
};

const changePassword = async (otp) => {
  return await fetch(base_url + "otp/" + otp).then((response) =>
    response.json()
  );
};

const removeChildNode = (element) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
};

const filmLoad = async () => {
  const result = await getListFilm();
  if (result.status) {
    removeChildNode(films_group);
    films_title.textContent = `Kho phim của bạn là: ${result.data.length}`;
    result.data.forEach((item) => {
      const div = document.createElement("div");
      div.className = "one_film";
      const img = document.createElement("img");
      img.className = "one_film_image";
      img.src = item.avatar_image_url;
      const span = document.createElement("span");
      span.className = "one_film_name";
      span.textContent = item.name;
      div.appendChild(img);
      div.appendChild(span);
      films_group.appendChild(div);
    });
  } else {
    films_title.textContent = result.message;
    removeChildNode(films_group);
  }
};

btn_reset.addEventListener("click", async () => {
  const result = await resetFilm();
  if (result.status) {
    removeChildNode(films_group);
    if (result.type === "otp") {
      otp_form.classList.remove("hidden_class");
      btn_reset.classList.add("hidden_class");
      return;
    }
    films_title.textContent = `Kho phim của bạn là: ${result.data.length}`;
    result.data.forEach((item) => {
      const div = document.createElement("div");
      div.className = "one_film";
      const img = document.createElement("img");
      img.className = "one_film_image";
      img.src = item.avatar_image_url;
      const span = document.createElement("span");
      span.className = "one_film_name";
      span.textContent = item.name;
      div.appendChild(img);
      div.appendChild(span);
      films_group.appendChild(div);
    });
  } else {
    films_title.textContent = result.message;
    removeChildNode(films_group);
    if (result.type === "otp") {
      otp_form.classList.remove("hidden_class");
      btn_reset.classList.add("hidden_class");
    }
  }
});

btn_update.addEventListener("click", async () => {
  const code = token_textarea.value;
  const result = await changePassword(code);
  notification.textContent = result.message;
  if (result.status) {
    btn_reset.classList.remove("hidden_class");
    otp_form.classList.add("hidden_class");
  }
});

filmLoad();
