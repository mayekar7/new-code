// Function to handle animation for desktop
function handleAnimation() {
  // Trigger the animation with smooth ease
  gsap.to('#small', { duration: 0.5, morphSVG: '#large', ease: 'power1.out' })
  // Remove the scroll trigger to stop observing
  scrollTriggerDesktop.kill()
}

// Create a scroll trigger for desktop
const scrollTriggerDesktop = ScrollTrigger.create({
  trigger: '#small', // Element to trigger the animation
  start: 'top center', // Animation starts when the top of the trigger element reaches the center of the viewport
  onEnter: handleAnimation, // Function to call when the animation is triggered
  once: true, // Animation only plays once
})

// Function to handle animation for mobile
function handleAnimationMobile() {
  // Trigger the animation with smooth ease
  gsap.to('#smalld', { duration: 0.5, morphSVG: '#larged', ease: 'power1.out' })
  // Remove the scroll trigger to stop observing
  scrollTriggerMobile.kill()
}

// Create a scroll trigger for mobile
const scrollTriggerMobile = ScrollTrigger.create({
  trigger: '#smalld', // Element to trigger the animation
  start: 'top center', // Animation starts when the top of the trigger element reaches the center of the viewport
  onEnter: handleAnimationMobile, // Function to call when the animation is triggered
  once: true, // Animation only plays once
})

///////////yt-works///////

// Function to handle yt-works animation for desktop
function handleYTWorksAnimation() {
  // Trigger the animation with smooth ease
  gsap.to('#yt-works-before', {
    duration: 0.5,
    morphSVG: '#yt-works-after',
    ease: 'power1.out',
  })
  // Remove the scroll trigger to stop observing
  scrollTriggerDesktopYT.kill()
}

// Create a scroll trigger for yt-works desktop
const scrollTriggerDesktopYT = ScrollTrigger.create({
  trigger: '#yt-works', // Element to trigger the animation
  start: 'top top', // Animation starts when the top of the trigger element reaches the center of the viewport
  onEnter: handleYTWorksAnimation, // Function to call when the animation is triggered
  once: true,
  markers: true, // Animation only plays once
})
