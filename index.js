(function () {
  'use strict';
  // Declare variables for elements
  // STOP Button
  const stopButton = document.getElementById('stopButton');
  stopButton.addEventListener('click', stopButtonClick);
  stopButton.addEventListener('mouseenter', stopButtonFocusIn);
  stopButton.addEventListener('mouseleave', stopButtonFocusOut);
  // SLOW Button
  const slowButton = document.getElementById('slowButton');
  slowButton.addEventListener('click', slowButtonClick);
  slowButton.addEventListener('mouseover', slowButtonFocusIn);
  slowButton.addEventListener('mouseout', slowButtonFocusOut);
  // GO Button
  const goButton = document.getElementById('goButton');
  goButton.addEventListener('click', goButtonClick);
  goButton.addEventListener('mouseover', goButtonFocusIn);
  goButton.addEventListener('mouseout', goButtonFocusOut);

  // Define Lights
  const stopLight = document.getElementById('stopLight');
  const slowLight = document.getElementById('slowLight');
  const goLight = document.getElementById('goLight');


  // Functions to run upon element clicks
  function stopButtonClick(event) {
    stopLight.classList.toggle("stop");
    if (stopLight.classList.length == 2) {
      console.log(`${stopButton.innerHTML} bulb on`);
      slowLight.classList.remove('slow');
      goLight.classList.remove('go');
    }
    else {
      console.log(`${stopButton.innerHTML} bulb off`);
    }
  }
  function slowButtonClick(event) {
    slowLight.classList.toggle("slow");
    if (slowLight.classList.length == 2) {
      console.log(`${slowButton.innerHTML} bulb on`);
      stopLight.classList.remove('stop');
      goLight.classList.remove('go');
    }
    else {
      console.log(`${slowButton.innerHTML} bulb off`);
    }
  }
  function goButtonClick(event) {
    goLight.classList.toggle("go");
    if (goLight.classList.length == 2) {
      console.log(`${goButton.innerHTML} bulb on`);
      slowLight.classList.remove('slow');
      stopLight.classList.remove('stop');
    }
    else {
      console.log(`${goButton.innerHTML} bulb off`);
    }
  }

  // Functions to run when elements gain focus
  function stopButtonFocusIn(event) {
    console.log(`Entered ${stopButton.innerHTML} button`);
  }
  function slowButtonFocusIn(event) {
    console.log(`Entered ${slowButton.innerHTML} button`);
  }
  function goButtonFocusIn(event) {
    console.log(`Entered ${goButton.innerHTML} button`);
  }

  // Functions to run when elements lose focus
  function stopButtonFocusOut(event) {
    console.log(`Left ${stopButton.innerHTML} button`);
  }
  function slowButtonFocusOut(event) {
    console.log(`Left ${slowButton.innerHTML} button`);
  }
  function goButtonFocusOut(event) {
    console.log(`Left ${goButton.innerHTML} button`);
  }

})();
