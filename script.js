// Image number to select image in the carrosel
let image_number;

// Array to store reviews
let reviewsArray = [];

// Toggle visibility of the reviews container
document.getElementById('button-01').addEventListener('click', (event) => {
    let element_container_01 = document.getElementById('container01');
    element_container_01.classList.toggle('hidden');
    if (element_container_01.classList.contains('hidden')) {
      event.target.textContent = "Show reviews";
    } else {
      event.target.textContent = "Hide reviews";
    } 
});

// Function to convert a string value to a number if possible
function convertToNumber(value) {
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
        return 0;
    } else {
        return number_value;
    }
}

// Event listener for adding a review
document.getElementById('add-review-button').addEventListener('click', (event) => {
    let reviewText = document.getElementById('text').value;

    // Check if the review text is not empty
    if (reviewText.trim() !== '') {
        // Add the review to the array
        reviewsArray.push(reviewText);

        // Display the updated review list
        displayReviews();

        // Clear the textarea after adding the review
        document.getElementById('text').value = '';
    } else {
        alert('Please enter a review before submitting.');
    }
});

// Function to display reviews from the array
function displayReviews() {
    let element_list = document.getElementById('list');
    element_list.innerHTML = ''; // Clear the current list

    // Loop through the reviewsArray and display each review
    reviewsArray.forEach((review, index) => {
        let new_li = document.createElement('li');
        new_li.innerText = review;

        // Add a remove button for each review
        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', () => {
            removeReview(index);
        });

        new_li.appendChild(removeButton);
        element_list.appendChild(new_li);
    });
}

// Function to remove a review
function removeReview(index) {
    reviewsArray.splice(index, 1); // Remove the review from the array
    displayReviews(); // Update the displayed list
}

document.getElementById('add-review-button').addEventListener('click', (event) => {
  let element_user_review = document.getElementById('user-reviews');
  let new_li = document.createElement('li');
  new_li.innerText = document.getElementById('review-input').value;
  
  element_user_review.appendChild(new_li);

  document.getElementById('review-input').value = '';
});

document.getElementById('next').addEventListener('click', (event) => {
  image_number = (typeof image_number === 'number' ? image_number : 1) + 1;
  if (image_number > 3) {
    image_number = 1;
  }
  if (image_number == 1) {
    let element_food_image = document.getElementById('food-image');
    element_food_image.setAttribute("src", 'https://m.media-amazon.com/images/I/514eMlhuxUL._SY445_SX342_.jpg');
  }
  if (image_number == 2) {
    let element_food_image2 = document.getElementById('food-image');
    element_food_image2.setAttribute("src", 'https://m.media-amazon.com/images/I/41TqNpG+rXL._SY445_SX342_.jpg');
  }
  if (image_number == 3) {
    let element_food_image3 = document.getElementById('food-image');
    element_food_image3.setAttribute("src", 'https://m.media-amazon.com/images/I/61UgwBlm-bL._SX342_SY445_.jpg');
  }

});

document.getElementById('previous').addEventListener('click', (event) => {
  image_number = (typeof image_number === 'number' ? image_number : 1) + -1;
  if (image_number < 1) {
    image_number = 3;
  }
  if (image_number == 1) {
    let element_food_image4 = document.getElementById('food-image');
    element_food_image4.setAttribute("src", 'https:https://m.media-amazon.com/images/I/514eMlhuxUL._SY445_SX342_.jpg');
  }
  if (image_number == 2) {
    let element_food_image5 = document.getElementById('food-image');
    element_food_image5.setAttribute("src", 'https://m.media-amazon.com/images/I/41TqNpG+rXL._SY445_SX342_.jpg');
  }
  if (image_number == 3) {
    let element_food_image6 = document.getElementById('food-image');
    element_food_image6.setAttribute("src", 'https://m.media-amazon.com/images/I/61UgwBlm-bL._SX342_SY445_.jpg');
  }

});



