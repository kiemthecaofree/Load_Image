const zalo_link = "https://zalo.me/ducngocx8";

const image_err =
  "https://www.naingdroidapps.com/demo/cute-alert-demo/img/error.svg";
const image_success =
  "https://www.naingdroidapps.com/demo/cute-alert-demo/img/success.svg";
const note =
  "<b>Username</b> bạn có thể điền số điện thoại hoặc 1 dãy ký tự viết liền không dấu (VD: doremon123). Bạn cần ghi nhớ username này để gửi mình check đăng ký và nhận tiền thưởng nhé!";
const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let date_string = `${day}/${month}/${year}`;
const appList_Array = [
  {
    id: "ocb_omni",
    title: "OCB OMNI Mở Tài Khoản Online",
    price: "50K tiền mặt Từ App",
    hdh: "Android + IOS",
    linkDownload_first: "https://ocbomni.onelink.me/RE8p/moxlgnlc",
    linkDownload_last: "",
    video_link: "https://www.youtube.com/embed/1qpdNewtqYg",
    require:
      "Từ 18 tuổi trở lên, <span class='mau_sac'><strong>có một số lưu ý về phần nhập mã giới thiệu, các bạn xem video hướng dẫn nhé!</strong></span>",
    image_link:
      "https://play-lh.googleusercontent.com/AUZSfk4Zv0Y1QTwbPfjZkJKwWDMW7g9koW-CaxBgkkIKuVJZYZDDL8iizRKTvq-V6-o=w240-h480-rw",
    description:
      "<li>Nhấn nút tải app để tải app OCB OMNI về điện thoại.</li> <li>Thực hiện đăng ký tài khoản OCB OMNI online.</li><li>Lưu ý, phần nhập mã giới thiệu nếu bạn nhấn vào mà không thể điền mới được tính là hợp lệ (Bạn nên xem video để hiểu rõ hơn nhé).</li><li>Tiến hành định danh tài khoản, chọn số tài khoản.</li><li>Đăng nhập vào app OCB OMNI.</li><li>Chuyển tiền vào tài khoản OCB của bạn 60K sau đó chuyển ra ngân hàng khác 60K.</li><li>Bạn đã hoàn thành các bước nhận 30K rồi nha, đợi nhận 30K và xem video để nhận thêm 20K từ app nhé.</li>",
    status: true,
    isUTM: true,
    isUsername: false,
    source: "kiemthecao",
    icon: "https://kiemthecaofree.com/hot.gif",
    stop: {
      isStop: false,
      notification: {
        title: "Thông Báo Quan Trọng!",
        content: `Chương trình hiện đã kết thúc! Cảm ơn các bạn đã tham gia chương trình nhé. Hẹn mọi người ở những sự kiện sắp tới!`,
        color: "#2dd284",
        timeEnd: false,
        buttonContent: "Kênh Youtube",
        isLink: true,
      },
    },
  },
  {
    id: "vnpay",
    title: "VNPAY Mở Tài Khoản Online",
    price: "30K công + Quà 1TR Từ App",
    hdh: "Android + IOS",
    linkDownload_first:
      "https://go.isclix.com/deep_link/4665406253457732723/5633817683390722383?",
    linkDownload_last: "url=https%3A%2F%2Fvidientuvnpay.vnpay.vn%2F",
    video_link: "https://www.youtube.com/embed/wP-enRXM82c",
    require:
      "Từ 15 tuổi trở lên, chưa từng tải app. <span class='mau_sac'><strong>Sẽ có 2 mã giới thiệu bạn có thể điền: 1 Mã 20K và 1 Mã 30K nhé.</strong></span>",
    image_link:
      "https://play-lh.googleusercontent.com/o-_z132f10zwrco4NXk4sFqmGylqXBjfcwR8-wK0lO1Wk4gzRXi4IZJdhwVlEAtpyQ=w240-h480-rw",
    description:
      "<li>Điền Username và nhấn tạo link.</li> <li>Nhấn nút tải app để tải app về điện thoại.</li> <li>Thực hiện đăng ký tài khoản VNPAY online.</li><li>Nhập mã giới thiệu <span class='mau_sac'><strong>AT hoặc 0378544081</strong></span> tại mục nhập mã giới thiệu. Với mã AT bạn nhận 30K từ mình, còn với mã là số điện thoại bạn nhận 20K nha.</li><li>Tiến hành định danh tài khoản và liên kết tài khoản hoặc thẻ ngân hàng với ví VNPAY. Không chấp nhận liên kết thẻ quốc tế như VISA, Mastercard và JCB.</li><li>Bạn đã hoàn thành các bước rồi nhé, liên hệ mình nhận 30K và đợi 1-3 ngày nhận thêm quà 1TR từ app.</li>",
    status: true,
    isUTM: true,
    isUsername: true,
    source: "accesstrade",
    icon: "https://kiemthecaofree.com/hot.gif",
    stop: {
      isStop: false,
      notification: {
        title: "Thành công",
        content: "",
        color: "#2dd284",
      },
    },
  },
  {
    id: "cake_vpbank",
    title: "CAKE Mở Tài Khoản Online",
    price: "30K công + 20K APP",
    hdh: "Android + IOS",
    linkDownload_first: "https://cakevn.onelink.me/HHDV/fjo985ua",
    linkDownload_last: "",
    video_link: "https://www.youtube.com/embed/IApNBRX8viQ",
    require: "Từ 18 tuổi trở lên, chưa từng tải app",
    image_link:
      "https://play-lh.googleusercontent.com/RWPd1WdrkKP53RyHHRdmV35eOhxoCHmlujBUIizNf8Gy1pHN4_MVuYao4ncZwFp2Poc=w240-h480-rw",
    description:
      "<li>Điền Username và nhấn tạo link.</li> <li>Nhấn nút tải app để tải app về điện thoại.</li> <li>Thực hiện đăng ký tài khoản CAKE VPBANK online.</li><li>Nhập mã giới thiệu <span class='mau_sac'><strong>0378544081</strong></span> tại mục nhập mã giới thiệu.</li><li>Tiến hành định danh tài khoản online và hoàn tất đăng ký.</li><li>Đăng nhập vào ứng dụng Cake.</li><li>Bạn đã hoàn thành các bước rồi nhé, liên hệ mình nhận 30K nha.</li>",
    status: true,
    isUTM: true,
    isUsername: false,
    source: "kiemthecao",
    icon: "https://kiemthecaofree.com/hot.gif",
    stop: {
      isStop: false,
      notification: {
        title: "Thành công",
        content: "",
        color: "#2dd284",
      },
    },
  },
  {
    id: "vimomo",
    title: "Ví Momo Đăng Ký Tài Khoản",
    price: "30K công + 500K Từ APP",
    hdh: "Android + IOS",
    linkDownload_first:
      "https://referral.momo.vn/ref/MDM3ODU0NDA4MSZndGJiMjAyMg==",
    linkDownload_last: "",
    video_link: "https://www.youtube.com/embed/_POMzWoobgI",
    require: "Từ 15 tuổi trở lên",
    image_link:
      "https://play-lh.googleusercontent.com/dQbjuW6Jrwzavx7UCwvGzA_sleZe3-Km1KISpMLGVf1Be5N6hN6-tdKxE5RDQvOiGRg=w240-h480-rw",
    description:
      "<li>Nhấn nút tải app để tải app về điện thoại.</li> <li>Thực hiện đăng ký tài khoản ví Momo online.</li><li>Nhập mã giới thiệu <span class='mau_sac'><strong>0378544081</strong></span> tại mục nhập mã giới thiệu.</li><li>Nếu bạn chưa nhập mã giới thiệu, bạn vào mục ưu đãi chọn nhập mã và điền mã mời <span class='mau_sac'><strong>0378544081</strong></span> nhé</li><li>Liên kết tài khoản ngân hàng với ví Momo của bạn. Chỉ áp dụng với <span class='mau_sac'><strong>Tài khoản thẻ & tài khoản thanh toán Vietcombank, Tài khoản & thẻ MSB. Và các tài khoản ngân hàng BIDV, Vietinbank, Techcombank, Agribank, SCB, VRB, BAOVIET Bank, OceanBank, Sacombank, SHB, Saigonbank, VIETBANK, Indovina, Nam Á Bank, ACB, TPBank, Shinhan, MBB.</strong></span></li><li>Nạp vào tài khoản ví Momo 10K bằng tài khoản ngân hàng bạn vừa liên kết.</li><li>Bạn đã hoàn thành các bước rồi nhé, kiểm tra mục ưu đãi nhận gói quà 500K và liên hệ mình nhận 30K nha.</li>",
    status: true,
    isUTM: false,
    isUsername: false,
    source: "kiemthecao",
    icon: "https://kiemthecaofree.com/hot.gif",
    stop: {
      isStop: false,
      notification: {
        title: "Thành Công",
        content: "",
        color: "#2dd284",
      },
    },
  },
  {
    id: "vpbank",
    title: "VPBANK Mở Tài Khoản Online",
    price: "30K công + 20K từ APP",
    hdh: "Android + IOS",
    linkDownload_first: "https://vpo.page.link/RMnEyUehMgvX7uqj7",
    linkDownload_last: "",
    video_link: "https://www.youtube.com/embed/prREkDZcJ_c",
    require:
      "Từ 18 tuổi trở lên, <span class='mau_sac'><strong>Sau khi bạn tải app VPBANK xong hoặc trong quá trình đăng ký gặp lỗi bạn cần vào lại link tải app phía dưới để mở app và đăng ký mở tài khoản mới nhé. Cảm ơn bạn!</strong></span>",
    image_link:
      "https://play-lh.googleusercontent.com/u9fUwltudW3eSwh0RddQsiAzTpXWRtD8TS0TCC3s--NgUej28iWoCikXCrFLd89YgxHX=w240-h480-rw",
    description:
      "<li>Nhấn nút tải app để tải app về điện thoại.</li> <li>Thực hiện đăng ký tài khoản VPBANK online.</li><li>Tiến hành định danh tài khoản online.</li><li>Nhập mã giới thiệu <span class='mau_sac'><strong>0378544081</strong></span> ở bước 4.2.</li><li>Hoàn tất đăng ký mở tài khoản.</li><li>Đăng nhập vào app và dùng 1 app ngân hàng hoặc ví điện tử chuyển vào tài khoản VPBank của bạn 50K và mua thẻ cào hoặc nạp tiền điện thoại mệnh giá từ 50K.</li><li>Bạn đã hoàn thành các bước rồi nhé, chờ trong vòng 24h - 48h nhận 20K sau khi đăng ký và thực hiện giao dịch thành công nha.</li>",
    status: true,
    isUTM: true,
    isUsername: false,
    source: "kiemthecao",
    icon: "https://kiemthecaofree.com/new.gif",
    stop: {
      isStop: true,
      notification: {
        title: "Thông báo quan trọng!",
        content:
          "<b>Bên mình, tạm ngưng tặng công 30K kể từ 0h ngày 4/8/2023</b>. Chương trình đăng ký nhận 20K từ VPBank vẫn diễn ra tới hết ngày 31/8/2023. Tuy nhiên thay vì giao dịch 10K thì chương trình đã thay đổi thể lệ, bạn cần giao dịch từ 50K (Trừ chuyển, nạp tiền) để nhận 20K nhé.",
        color: "#2dd284",
        buttonContent: "Vẫn Tải App",
        isLink: true,
      },
    },
  },
  {
    id: "acbone_android",
    title: "ACB ONE Mở Tài Khoản Online",
    price: "30K công + 50K Từ App",
    hdh: "Android",
    linkDownload_first:
      "https://go.isclix.com/deep_link/4665406253457732723/6161401576065565277?",
    linkDownload_last:
      "url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dmobile.acb.com.vn%26hl%3Dvi%26gl%3DUS",
    video_link: "https://www.youtube.com/embed/BzKx-JoMJdA",
    require: "Từ 18 tuổi trở lên, chưa từng tải app",
    image_link:
      "https://play-lh.googleusercontent.com/knIdLBzE-ngS8Fhim_0FxH56vWhXaQmuLcpMdAcoFY_790hd3t4_XQAlyEWUnYJRyWFP=w240-h480-rw",
    description:
      "<li>Điền Username và nhấn tạo link.</li> <li>Nhấn nút tải app để tải app về điện thoại.</li> <li>Thực hiện đăng ký tài khoản ACB ONE online.</li><li>Tiến hành định danh tài khoản online.</li><li>Đăng nhập vào app ACB ONE.</li><li>Chuyển vào tài khoản ACB 20K sau đó chuyển ra ngân hàng khác 20K. Hoặc chuyển vào 100K và chuyển ra 100K với nội dung chuyển khoản là <span class='mau_sac'><strong>ACBONE23</strong></span> để tham gia nhận ưu đãi hoàn tiền 50.000 VND cho KH mở mới tài khoản.</li><li>Bạn đã hoàn thành các bước rồi nhé, liên hệ mình nhận 30K và đợi nhận thêm 50K từ app.</li>",
    status: true,
    isUTM: true,
    source: "accesstrade",
    isUsername: true,
    stop: {
      isStop: true,
      notification: {
        title: "Thông Báo Mới",
        content: "Chiến dịch đang tạm ngưng, bạn quay lại sau nhé! Cảm ơn bạn",
        color: "#d85261",
        timeEnd: false,
        buttonContent: "Quay lại sau",
        isLink: false,
      },
    },
  },
  {
    id: "acbone_ios",
    title: "ACB ONE Mở Tài Khoản Online",
    price: "30K công + 50K Từ App",
    hdh: "iPhone IOS",
    linkDownload_first:
      "https://go.isclix.com/deep_link/4665406253457732723/6161401576225224085?",
    linkDownload_last:
      "url=https%3A%2F%2Fapps.apple.com%2Fvn%2Fapp%2Facb-one%2Fid950141024%3Fl%3Dvi",
    video_link: "https://www.youtube.com/embed/BzKx-JoMJdA",
    require: "Từ 18 tuổi trở lên, chưa từng tải app",
    image_link:
      "https://play-lh.googleusercontent.com/knIdLBzE-ngS8Fhim_0FxH56vWhXaQmuLcpMdAcoFY_790hd3t4_XQAlyEWUnYJRyWFP=w240-h480-rw",
    description:
      "<li>Điền Username và nhấn tạo link.</li> <li>Nhấn nút tải app để tải app về điện thoại.</li> <li>Thực hiện đăng ký tài khoản ACB ONE online.</li><li>Tiến hành định danh tài khoản online.</li><li>Đăng nhập vào app ACB ONE.</li><li>Chuyển vào tài khoản ACB 20K sau đó chuyển ra ngân hàng khác 20K. Hoặc chuyển vào 100K và chuyển ra 100K với nội dung chuyển khoản là <span class='mau_sac'><strong>ACBONE23</strong></span> để tham gia nhận ưu đãi hoàn tiền 50.000 VND cho KH mở mới tài khoản.</li><li>Bạn đã hoàn thành các bước rồi nhé, liên hệ mình nhận 30K và đợi nhận thêm 50K từ app.</li>",
    status: true,
    isUTM: true,
    source: "accesstrade",
    isUsername: true,
    stop: {
      isStop: true,
      notification: {
        title: "Chú ý",
        content: "Chiến dịch đang tạm ngưng, bạn quay lại sau nhé! Cảm ơn bạn",
        color: "#d85261",
        timeEnd: false,
        buttonContent: "Quay lại sau",
        isLink: false,
      },
    },
  },
  {
    id: "mbbank",
    hdh: "Android + IOS",
    title: "MB BANK Mở Tài Khoản Online",
    price: "30K tiền công + 30K từ APP",
    require: "Từ 16 tuổi trở lên, chưa từng tải app",
    linkDownload_first:
      "https://mobilebanking.mbbank.com.vn:8443/referral/referred.html?referral_code=EFIODJCLGXBBIB7J4U99",
    linkDownload_last: "",
    video_link: "https://www.youtube.com/embed/VAkc8VttevI",
    image_link:
      "https://play-lh.googleusercontent.com/sHcbMrh5EE_RmlIk9D2wY7-KEjB9vOzgzrSkquDT4hP55SyJc0CHrNkDHcC_GN2dBxc=w240-h480-rw",
    description:
      "<li>Điền Username và nhấn tạo link.</li><li>Nhấn nút tải app để tải app về điện thoại.</li><li>Thực hiện đăng ký tài khoản MB Bank online.</li><li>Chọn số tài khoản và hoàn tất đăng ký.</li><li>Bạn đã hoàn thành các bước rồi nhé, kiểm tra xem bạn đã có 30K chưa và liên hệ mình nhận thêm 30K nhé.</li>",
    status: true,
    isUTM: false,
    isUsername: false,
    source: "none",
    icon: "https://kiemthecaofree.com/hot.gif",
    stop: {
      isStop: false,
      notification: {
        title: "Chú ý",
        content: "",
        color: "#2dd284",
      },
    },
  },
];

const listApp_HTML = document.querySelector(".listApp");
let image_small = document.querySelectorAll(".one_image_small");
const image_background = document.querySelector(".image_background");
const close_image = document.querySelector("#close_image");
const image_zoom = document.querySelector("#image_zoom");

appList_Array.forEach((app) => {
  if (app.status) {
    const oneApp = document.createElement("div");
    oneApp.classList.add("oneApp");
    oneApp.insertAdjacentHTML(
      "beforeEnd",
      `
  <div class="oneApp__top">
            <div class="oneApp__top--left">
              <img
                class="image_app"
                src=${app.image_link}
                alt="app"
              />
            </div>

            <div class="oneApp__top--right">
              <div class="oneApp__top--right__appName">
               ${app.icon ? `<img src = ${app.icon} alt ="icon"</img>` : ""}
                ${app.title}
              </div>
              <div class="oneApp__top--right__Price">
                <span><b>Tiền thưởng</b>: ${app.price}</span>
              </div>
               <div class="oneApp__top--right__Price">
                <span><b>Hệ điều hành</b>: ${app.hdh}</span>
              </div>
               <div class="oneApp__top--right__Price">
                <span><b>Yêu cầu</b>: ${app.require}</span>
              </div>
              ${
                app.isUsername
                  ? '<div class="oneApp__top--right__Username"><span><b>Điền Username:</b></span><input placeholder="VD: deptrai37" type="text" /></div>'
                  : ""
              }
              <div class="oneApp__top--right__btnCreate">
               ${
                 app.isUsername
                   ? `<button id=${app.id} class="btn-success">Tạo Link</button>`
                   : `<button id=${app.id} class="btn-download no-username"><a href="${app.linkDownload_first}" target="_blank">Tải App</a></button>`
               }
                <button class="btn-download hidden_div">
                  <a href="${
                    app.linkDownload_first + app.linkDownload_last
                  }" target="_blank">Tải App</a>
                </button>
              </div>
            </div>
          </div>

          <div class="oneApp__bottom">
            <div class="step">
              <div><b>Cách bước thực hiện:</b></div>
              <div class="detail">
                <i class="fa-sharp fa-solid fa-arrow-down"></i>
                <span class="btn_detail"><u>Xem hướng dẫn</u></span>
              </div>
            </div>

            <div class="info_app hidden_div">
              <ol>
                ${app.description}
              </ol>
               <p class = "note"><b>Lưu ý:</b></p>
               <p>${note}</p>
              <div>
                <p><b>Video hướng dẫn:</b></p>
                <iframe width="100%" height="220px" src=${
                  app.video_link
                } title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
              <p style="text-align: center">
                <b>Cuối cùng:</b> liên hệ đường link
                <a class="zalo_link" href=${zalo_link} target="_blank">Zalo</a> nhận
                thưởng nhé!
              </p>
            </div>
          </div>
        </div>`
    );

    listApp_HTML.appendChild(oneApp);
  }
});

const btn_success = document.querySelectorAll(".btn-success");
const details = document.querySelectorAll(".detail");
const inputList = document.querySelectorAll("input");
const message_container = document.querySelector(".message_container");
const alert_close = document.querySelector(".alert_close");
const alert_button_success = document.querySelector(".alert_button_success");
const alert_message = document.querySelector(".alert_message");
const alert_img = document.querySelector(".alert_img");
const alert_title = document.querySelector(".alert_title");
const message_top = document.querySelector(".message_top");
const message = document.querySelector(".message");

alert_close.addEventListener("click", () => {
  message_container.classList.add("hidden_div");
});

alert_button_success.addEventListener("click", () => {
  message_container.classList.add("hidden_div");
});

const checkApp_IS_EXIST = (id) => {
  let appSearch = false;
  appSearch = appList_Array.find((app) => app.id === id);
  return appSearch;
};

const handleImageChange = () => {
  image_small = document.querySelectorAll(".one_image_small");
  image_small.forEach((image) => {
    image.addEventListener("click", () => {
      image_background.classList.remove("hidden_div");
      image_zoom.src = image.getAttribute("src");
      message.classList.add("hidden_div");
    });
  });
  close_image.addEventListener("click", () => {
    image_background.classList.add("hidden_div");
    image_zoom.src = "#";
    message.classList.remove("hidden_div");
  });
};

btn_success.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input_value = btn.parentElement.parentElement
      .querySelector("input")
      .value.trim()
      .toLocaleLowerCase();
    if (input_value.length < 4) {
      alert_message.textContent =
        "Username cần phải có từ 4 ký tự trở lên! VD ngoc1234";
      alert_title.textContent = "Thất bại!";
      alert_img.src = image_err;
      message_top.style.backgroundColor = "#d85261";
      alert_button_success.textContent = "Tạo lại Username!!!";
      message_container.classList.remove("hidden_div");
      return;
    }
    const id = btn.id;

    const app = checkApp_IS_EXIST(id);
    if (app) {
      if (app.stop.isStop) {
        message_top.style.backgroundColor = "#d85261";
        alert_button_success.textContent = app.stop.notification.buttonContent;
        alert_title.textContent = app.stop.notification.title;
        alert_img.src = image_err;
        alert_message.textContent = app.stop.notification.content;
        message_container.classList.remove("hidden_div");
        return;
      }
      const btnDownload = btn.parentElement.querySelector(".btn-download");
      btnDownload.classList.remove("hidden_div");
      const aLinkDownload = btn.parentElement.querySelector(".btn-download a");

      if (app.source === "accesstrade") {
        aLinkDownload.href =
          app.linkDownload_first +
          `utm_source=${input_value}&` +
          app.linkDownload_last;
      } else if (app.source === "hyperlead") {
        aLinkDownload.href = aLinkDownload.href + `&aff_sub1=${input_value}`;
      }
      alert_message.textContent = "Bạn đã tạo link thành công!";
      alert_title.textContent = "Chúc mừng!";
      alert_img.src = image_success;
      message_top.style.backgroundColor = "#2dd284";
      alert_button_success.textContent = "Đóng và tải app!!!";
      message_container.classList.remove("hidden_div");
    }
  });
});

inputList.forEach((input) => {
  input.addEventListener("keypress", (e) => {
    let key = e.keyCode;
    if (key === 32 || e.code === "Space") {
      e.preventDefault();
    }
  });
});

inputList.forEach((input) => {
  input.addEventListener("input", () => {
    const btn_download =
      input.parentElement.parentElement.querySelector(".btn-download");
    btn_download.classList.add("hidden_div");
  });
});

details.forEach((detail) => {
  detail.addEventListener("click", () => {
    const btn_detail = detail.querySelector(".btn_detail");
    const info_app =
      detail.parentElement.parentElement.querySelector(".info_app");

    if (info_app.classList.contains("hidden_div")) {
      btn_detail.textContent = "Tắt hướng dẫn";
    } else {
      btn_detail.textContent = "Xem hướng dẫn";
    }
    info_app.classList.toggle("hidden_div");
  });
});

const download_no_username_list = document.querySelectorAll(".no-username");
download_no_username_list.forEach((element) => {
  element.addEventListener("click", (e) => {
    const app = checkApp_IS_EXIST(element.id);
    if (app.stop.isStop) {
      alert_message.textContent = "";
      alert_message.insertAdjacentHTML(
        "beforeEnd",
        app.stop.notification.content
      );
      if (app.stop.notification.timeEnd) {
        const date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        alert_title.textContent = `Tạm ngừng tặng 30K kể từ ngày ${day}/${month}/${year}!`;
      } else {
        alert_title.textContent = app.stop.notification.title;
      }

      if (app.stop.notification.color === "d85261") {
        alert_img.src = image_err;
      } else {
        alert_img.src = image_success;
      }
      message_top.style.backgroundColor = app.stop.notification.color;

      if (app.stop.notification.isLink) {
        alert_button_success.textContent = "";
        alert_button_success.insertAdjacentHTML(
          "beforeEnd",
          `<a href = ${app.linkDownload_first} target="_blank">${app.stop.notification.buttonContent}</a>`
        );
      } else {
        alert_button_success.textContent = app.stop.notification.buttonContent;
      }
      message_container.classList.remove("hidden_div");
      handleImageChange();
      e.preventDefault();
    }
  });
});
