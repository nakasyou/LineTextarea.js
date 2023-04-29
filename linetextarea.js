  function linetextarea() {
    for (const $lineArea of document.getElementsByClassName("linetextarea-parent")) {
      // core
      const $core = $lineArea.getElementsByClassName("linetextarea-core")[0];
      // 行表示
      const $lineDisplay = document.createElement("div");
      $core.prepend($lineDisplay);
      // textarea
      const $textarea = $core.getElementsByTagName("textarea")[0];
      // 横並び
      $core.style.display = "flex";
      // スクロール
      $lineArea.style.height = "100px";
      $lineArea.style.overflowY = "scroll";
      // textarea css
      $textarea.style.borderRadius = 0;
      $textarea.style.border = "none";
      $textarea.style.overflowY = "hidden";
      $textarea.style.width = $core.offsetWidth - $lineDisplay.offsetWidth - 10 + "px";
      if (!$textarea.style.lineHeight) {
        $textarea.style.lineHeight = "1.2";
      }
      if (!$textarea.style.fontSize) {
        $textarea.style.fontSize = "16px";
      }
      // linedisplay css
      $lineDisplay.style.paddingRight = "5px";
      $lineDisplay.style.fontSize = $textarea.style.fontSize;
      $lineDisplay.style.lineHeight = $textarea.style.lineHeight;
      const inputEvent = () => {
        const lines = $textarea.value.split("\n").length;
        let lineDisplayHTML = "";
        for (let i = 0; i !== lines; i++) {
          lineDisplayHTML += i + "<br>";
        }
        $lineDisplay.innerHTML = lineDisplayHTML;
      };
      $textarea.addEventListener("input", inputEvent);
      inputEvent();
    }
  }
