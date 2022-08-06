// TODO: Declare any global variables we need
let headRolls = 0
let tailRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () => {

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM
        let heads = Math.random() < 0.5
        if (heads) {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            headRolls += 1    }
            else {
                document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
                document.getElementById('message').textContent = 'You Flipped Tails!'
                tailRolls += 1 } 

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        let total = headRolls + tailRolls
        let percentHeads = 0
        let percentTails = 0
        if (total > 0) {
            percentHeads = Math.round((headRolls / total) * 100)
            percentTails = Math.round((tailRolls / total) * 100) }
        document.getElementById('heads').textContent = headRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailRolls
        document.getElementById('tails-percent').textContent = percentTails + '%' })


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
        document.getElementById('clear').addEventListener('click')
        headRolls = 0
        tailRolls = 0

        })    