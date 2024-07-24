// Config.
const api_url =
  window.location.protocol === "https:"
    ? "https://api-master.onrender.com"
    : "http://localhost:8000";

$(document).ready(() => {
  $("header nav a:nth-child(1), .arrow").click(() => {
    $("body, html").animate({ scrollTop: innerHeight + 100 });
  });

  $("header nav a:nth-child(2)").click(() => {
    $("body, html").animate({ scrollTop: 2 * innerHeight + 100 });
  });

  $("header nav a:nth-child(3)").click(() => {
    $("body, html").animate({ scrollTop: 3 * innerHeight + 100 });
  });

  $("header nav a:nth-child(4)").click(() => {
    $("body, html").animate({ scrollTop: 4 * innerHeight + 100 });
  });

  $("header nav a:nth-child(5)").click(() => {
    $("body, html").animate({ scrollTop: 5 * innerHeight + 100 });
  });

  $("header nav a:nth-child(6)").click(() => {
    $("body, html").animate({ scrollTop: 6 * innerHeight + 100 });
  });

  $(".gotop").click(() => {
    $("body, html").animate({ scrollTop: 0 });
  });

  $(window).scroll((e) => {
    if (scrollY > 60) {
      $(".gotop").css({ transform: "scale(1)" });
    } else {
      $(".gotop").css({ transform: "scale(0)" });
    }
  });
});

$("#form-subscribe").submit(async (e) => {
  e.preventDefault();
  const inp = document.getElementById("inp-email");
  const sbmt = document.getElementById("inp-submit");

  if (inp.disabled) {
    return;
  }

  inp.disabled = true;
  sbmt.disabled = true;

  const email = new FormData(e.target).get("inp-email");
  try {
    const res = await fetch(api_url + "/ats/email-subscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (res.status === 200) {
      alert("Obrigado pela sua subscrição.");
    }
  } catch (error) {
    console.log(error);
    alert("Houve um erro, tente novamente.");
  }

  inp.disabled = false;
  sbmt.disabled = false;
});
