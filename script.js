//your JS code here. If required.
    const rotatingLine = document.getElementById("line");

    let rotationAngle = 0;

    function rotateLine() {
      rotationAngle += 1;
      rotatingLine.style.transform = `rotate(${rotationAngle}deg)`;

      requestAnimationFrame(rotateLine);
    }

    rotateLine();