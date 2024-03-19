const MouseFollower = ()=> {
    window.addEventListener('mousemove', function(details){
      document.querySelector('#minicircle').style.transform = `translate(${details.clientX}px, ${details.clientY}px)`
    })
}
MouseFollower();