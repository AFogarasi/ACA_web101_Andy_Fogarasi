function myFunction() {
      alert("Hello Andy Fogarasi!");
}
// Grab elements
const title = document.querySelector('.title')
const counter = document.querySelector('.counter')
const button = document.querySelector('.button')
const overlay = document.querySelector('.overlay')

// Initialize variable
let count = 0;

button.addEventListener('click', () => {
  // Increment number for each click
  counter.innerHTML = ++count
	
  
  // Change title based on number value
  if (count >= 10) {
    title.innerHTML = `Getting Clearer ???`
    overlay.style.display = 'block' 
		const x = count / 100;
    // Simple fade-in
     setTimeout(() => overlay.style.opacity = .01 + x);
  } else {
    title.innerHTML = `You are at ${count} already`	
  }
})