document.querySelectorAll("[data-projeto]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var m = document.getElementById("modal-" + btn.dataset.projeto);
          if (m && m.showModal) m.showModal();
        });
      });
      document.querySelectorAll(".projeto-modal").forEach(function (m) {
        m.addEventListener("click", function (e) {
          if (e.target === m) m.close();
        });
        m.querySelector(".projeto-modal-close").addEventListener(
          "click",
          function () {
            m.close();
          },
        );
      });