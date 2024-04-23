    const dogImageElement = document.getElementById('dog-image');
    const dogFactElement = document.getElementById('dog-fact');
    const fetchButton = document.getElementById('fetch-button');
  
    // Function to fetch a random dog image
    const fetchDogImage = () => {
      fetch('http://localhost:3000/api/pics')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        dogImageElement.src = data.message;
      })
      .catch(error => console.error('Error fetching dog image:', error));
    };
  
    // Function to fetch a random dog fact
    const fetchDogFact = () => {
      fetch('http://localhost:3000/api/facts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        dogFactElement.textContent = data[0];
      })
      .catch(error => console.error('Error fetching dog image:', error));
    };
  
    // Initial fetch of dog image and fact
    fetchDogImage();
    fetchDogFact();
  
    // Event listener for the fetch button
    fetchButton.addEventListener('click', () => {
      fetchDogImage();
      fetchDogFact();
    });

  