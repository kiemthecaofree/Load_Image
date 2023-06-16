let TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI4ZDdiYjQ0My0yNWJlLTQwMzgtYjk0Zi01M2RiM2Y0MDY2MzIiLCJtaWQiOiJOb25lIiwiZGlkIjoiZWYyNTIxNjMtZjY5Zi00NmJkLWIwYmMtOTFkMGZhYjNiZmJiIiwicGx0Ijoid2VifHBjfHdpbmRvd3N8MTB8Y2hyb21lIiwiaXAiOiIxLjUzLjIzNS4xMCIsInhpZCI6IlVXMTYyMTQyMTg3OSIsImFwcF92ZXJzaW9uIjoiMi4wLjAiLCJjYXQiOiIxNjIxNDIxODc5IiwiYWJ0ZXN0aW5nX3RhZyI6WyI0X3Rlc3RpbmdfYSJdLCJyaWQiOiI3YWY1ZTk2MC03YjVkLTQ4N2EtODBhNC1lMWQzNTg3NDcxNjEiLCJpYXQiOjE2ODY5MDg1MjksImV4cCI6MTY4OTUwMDUyOX0.Tx0PzF0FgHO51u4MJ2ZIn0bB3FbmOiIUO-XbgIrxFCY";

let status_resetPassword = 400;
let status_get_list_film = 400;
let status_change_film = 400;
let status_delete_film = 400;

const btn_submit = document.querySelector(".btn_submit");
const token_textarea = document.querySelector(".token_textarea");
const films_title = document.querySelector("#films_title");

const getList = async () =>
  fetch("https://api.glxplay.io/viewer/viewers?profile_id=66d8920a4b&isKid=0", {
    method: "GET",
    headers: {
      headers: "application.json",
      "Content-Type": "application/json",
      "Access-Token": TOKEN,
    },
  })
    .then((res) => {
      status_get_list_film = res.status;
      return res.json();
    })
    .then((data) => {
      return data;
    });

const deleteFilm = (short_id) =>
  fetch(
    `https://api.glxplay.io/viewer/viewers/${short_id}?profile_id=3a2ab233a4&isKid=0`,
    {
      method: "DELETE",
      headers: {
        headers: "application.json",
        "Content-Type": "application/json",
        "Access-Token": TOKEN,
      },
    }
  )
    .then((res) => {
      status_delete_film = res.status;
      return res.json();
    })

const resetPassword = (old_password, new_password) =>
  fetch(
    `https://api.glxplay.io/account/update?password=${old_password}&newPassword=${new_password}&isRevoke=1&profile_id=3a2ab233a4&isKid=0`,
    {
      method: "POST",
      headers: {
        headers: "application.json",
        "Content-Type": "application/json",
        "Access-Token": TOKEN,
      },
    }
  )
    .then((res) => {
      status_resetPassword = res.status;
      return res.json();
    })

const resetFirstFilm = (short_id) =>
  fetch(
    `https://api.glxplay.io/viewer/viewers/${short_id}?profile_id=df3a96d831&isKid=0`,
    {
      method: "PUT",
      headers: {
        headers: "application.json",
        "Content-Type": "application/json",
        "Access-Token": TOKEN,
      },
      body: JSON.stringify({
        short_id: "791d4f5f0e",
        name: "Mọi người",
        is_kid: false,
        is_primary: false,
        gender: " ",
        has_pin_code: false,
        avatar_image_id: 2,
        avatar_image_url:
          "https://assets.glxplay.io/static/avatars/Avatar%20Profile-10.png",
        is_pin_code_enforced: false,
        settings: {
          browse: {
            title_language: "vi",
          },
          player: {
            subtitle_enabled: true,
            subtitle_font_size: "m",
            subtitle_language: "vi",
          },
          security: {
            pin_code_enforced: false,
          },
        },
        hash_pincode: "IPlwvwXmmqhgL0sK7+Sodw==",
        updated_at: "2023-05-18T00:38:35.3059Z",
        created_at: "2023-05-18T00:38:35.3059Z",
        pin_code: "8888",
      }),
    }
  )
    .then((res) => {
      status_change_film = res.status;
      return res.json();
    })

const notification = document.querySelector(".notification");

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

btn_submit.addEventListener("click", async () => {
  status_delete_film = 400;
  removeAllChildNodes(notification);
  films_title.textContent = `Kho phim của bạn là...`;
  value_textarea = token_textarea.value;
  if (value_textarea.trim() !== "") {
    TOKEN = token_textarea.value;
  }
  const div_message = document.createElement("div");
  div_message.className = "message";

  let listfilm = await getList();
  if (status_get_list_film === 200) {
    const p1_element = document.createElement("p");
    p1_element.textContent = "1. Lấy danh sách phim thành công";
    div_message.appendChild(p1_element);
  }
  for (let i = 1; i < listfilm.length; i++) {
    await deleteFilm(listfilm[i].short_id);
  }
  const p2_element = document.createElement("p");
  if (status_delete_film === 200) {
    p2_element.textContent = `2. Xóa một số kho phim thành công`;
  } else {
    p2_element.textContent = `2. Số kho phim còn lại là ${listfilm.length}`;
  }
  div_message.appendChild(p2_element);
  const p3_element = document.createElement("p");
  for (let i = 1; i <= 5; i++) {
    await resetPassword("000000", "000000");
    if (status_resetPassword === 400 || status_resetPassword === 429) {
      if (status_change_film === 400) {
        p3_element.textContent = `3. Đạt đủ số lần reset mật khẩu 5 lần/ngày`;
      } else {
        p3_element.textContent = `3. Lỗi hệ thống, vui lòng thử lại sau`;
      }
      break;
    }
  }
  if (status_resetPassword === 200) {
    p3_element.textContent = `3. Reset mật khẩu thành công 5 lần/ngày`;
  }
  div_message.appendChild(p3_element);
  if (listfilm.length > 0) {
    await resetFirstFilm(listfilm[0].short_id);
    const p4_element = document.createElement("p");
    if (status_change_film === 200) {
      p4_element.textContent = `4. Reset kho phim đầu tiên thành công`;
    } else {
      p4_element.textContent = `4. Reset kho phim đầu tiên thất bại`;
    }
    div_message.appendChild(p4_element);
  }

  listfilm = await getList();
  films_title.textContent = `Kho phim của bạn là ${listfilm.length}`;
  notification.appendChild(div_message);
});
