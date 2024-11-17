// Sample product and auction data
const auctions = [
    { name: 'Auction Item 1', currentBid: '₹50', endTime: '2h 30m' },
    { name: 'Auction Item 2', currentBid: '₹75', endTime: '4h 10m' }
  ];
  
  const products = [
    { name: 'Product 1', price: '₹100' },
    { name: 'Product 2', price: '₹150' }
  ];
  
  // Display Auctions
  const auctionList = document.getElementById('auctionList');
  auctions.forEach((auction) => {
    const auctionCard = document.createElement('div');
    auctionCard.classList.add('auction-card');
    auctionCard.innerHTML = `
      <h4>${auction.name}</h4>
      <p>Current Bid: ${auction.currentBid}</p>
      <p>Ends in: ${auction.endTime}</p>
      <button class="bid-button">Place a Bid</button>
    `;
    auctionList.appendChild(auctionCard);
  });
  
  // Search functionality
  document.getElementById('searchButton').addEventListener('click', function () {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card) => {
      const productName = card.querySelector('h4').textContent.toLowerCase();
      if (productName.includes(searchInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  