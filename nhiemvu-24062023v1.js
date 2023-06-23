const server_select_div = document.querySelector("#select_server");
const website_input = document.querySelector("#website_input");
const btn_submit = document.querySelector(".btn_submit");
const txt_code = document.querySelector(".txt_code");
const btn_copy = document.querySelector(".btn_copy");
const message_container = document.querySelector(".message_container");
const alert_close = document.querySelector(".alert_close");
const alert_button_success = document.querySelector(".alert_button_success");
const alert_message = document.querySelector(".alert_message");

const domain_api = [
  {
    website: "lamngay.com",
    api_link: "https://cdn-chatgpt.com/api/mission-code",
  },
  {
    website: "lamngay.vn",
    api_link: "https://cdn-chatgpt.com/api/mission-code",
  },
];

const getCodeVIP = (api_domain, website_input_value) =>
  fetch(api_domain, {
    method: "POST",
    headers: {
      headers: "application.json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      hostname: website_input_value,
    }),
  }).then((res) => {
    return res.json();
  });

btn_submit.addEventListener("click", async () => {
  txt_code.textContent = "______";
  btn_copy.textContent = "COPY";
  const server_select_value = server_select_div.value;
  const website_input_value = website_input.value.trim();
  if (website_input_value.length === 0) {
    alert_message.textContent =
      "Bạn chưa điền website. Vui lòng nhập website và thử lại!";
    message_container.classList.remove("hidden_div");
    return;
  }
  const domain = domain_api.find(
    (element) => element.website === server_select_value
  );
  if (domain) {
    const result = await getCodeVIP(domain.api_link, website_input_value);
    if (result.success) {
      txt_code.textContent = result.data;
      website_input.value = "";
    } else {
      alert_message.textContent =
        "Có thể website bạn nhập chưa chính xác. Vui lòng thử lại!";
      message_container.classList.remove("hidden_div");
    }
  } else {
     alert_message.textContent = "Server không tìm thấy. Vui lòng thử lại!";
     message_container.classList.remove("hidden_div");
  }
});

btn_copy.addEventListener("click", () => {
  const value_copy = txt_code.textContent.trim();
  if (value_copy.length > 0) {
    navigator.clipboard.writeText(value_copy);
    btn_copy.textContent = "ĐÃ COPY";
  }
});

alert_close.addEventListener("click", () => {
  message_container.classList.add("hidden_div");
});

alert_button_success.addEventListener("click", () => {
  message_container.classList.add("hidden_div");
});
