// Simulate placing a bid
function placeBid(itemName, currentBid) {
    const newBid = prompt(`Current bid for ${itemName} is $${currentBid}. Enter your bid:`);
    if (newBid && parseFloat(newBid) > currentBid) {
      alert(`Your bid of $${newBid} for ${itemName} has been placed!`);
    } else {
      alert('Your bid must be higher than the current bid.');
    }
  }
  