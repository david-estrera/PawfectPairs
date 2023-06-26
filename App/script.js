$(document).ready(function() {
  const dogNameInput = $('#dog-name');
  const breedInput = $('#breed');
  const ownerNameInput = $('#owner-name');
  const locationInput = $('#location');
  const editButton = $('#edit-button');

  // Function to enable editing of the profile
  function enableProfileEditing() {
    dogNameInput.removeAttr('readonly');
    breedInput.removeAttr('readonly');
    ownerNameInput.removeAttr('readonly');
    locationInput.removeAttr('readonly');
    editButton.text('Save');
    editButton.off('click');
    editButton.click(saveProfile);
  }

  // Function to save the profile changes
  function saveProfile() {
    const dogName = dogNameInput.val();
    const breed = breedInput.val();
    const ownerName = ownerNameInput.val();
    const location = locationInput.val();

    // Perform saving of the profile here

    // Disable editing and update the display
    disableProfileEditing();
  }

  // Function to disable editing of the profile
  function disableProfileEditing() {
    dogNameInput.attr('readonly', 'readonly');
    breedInput.attr('readonly', 'readonly');
    ownerNameInput.attr('readonly', 'readonly');
    locationInput.attr('readonly', 'readonly');
    editButton.text('Edit');
    editButton.off('click');
    editButton.click(enableProfileEditing);
  }

  // Initial state - Profile is not editable
  disableProfileEditing();

  const chatList = $('.chat-list');
  const chatContainer = $('#chat-container');
  const chatView = $('#chat-view');
  const chatMessages = $('#chat-messages');
  const messageInput = $('#message-input');
  const sendButton = $('#send-button');

  // Sample Chat Data
  const chats = [{
      name: 'John Doe',
      avatar: 'image/dogs/dog1.jpg',
      messages: [
        'Hey, how are you doing?',
        'Did you go for a walk today?',
        'Looking forward to our next playdate!',
      ],
    },
    {
      name: 'Isaiah',
      avatar: 'image/dogs/dog4.png',
      messages: [
        'Did you go for a walk today?',
        'Looking forward to our next playdate!',
      ],
    },
    // Add more chat data here
  ];

  // Function to display chat messages
  function displayChatMessages(messages) {
    chatMessages.empty();
    messages.forEach(function(message) {
      const chatMessage = $('<div class="chat-message"></div>');
      chatMessage.text(message);
      chatMessages.append(chatMessage);
    });
  }

  // Function to open a chat conversation
  function openChat(index) {
    const chat = chats[index];
    chatContainer.show();
    chatView.show();
    displayChatMessages(chat.messages);
  }

  // Function to handle sending a message
  function sendMessage() {
    const message = messageInput.val();
    if (message.trim() !== '') {
      const chatMessage = $('<div class="chat-message"></div>');
      chatMessage.text(message);
      chatMessages.append(chatMessage);
      messageInput.val('');
    }
  }

  // Populate chat list
  chats.forEach(function(chat, index) {
    const chatItem = $('<div class="chat-item"></div>');
    const chatHeader = $('<div class="chat-header"></div>');
    const chatAvatar = $('<img src="' + chat.avatar + '" alt="User Avatar" class="chat-avatar">');
    const chatInfo = $('<div class="chat-info"></div>');
    const chatName = $('<h4 class="chat-name">' + chat.name + '</h4>');
    const chatTimestamp = $('<p class="chat-timestamp">2 hours ago</p>');

    chatHeader.append(chatAvatar);
    chatInfo.append(chatName);
    chatInfo.append(chatTimestamp);
    chatHeader.append(chatInfo);
    chatItem.append(chatHeader);

    chatItem.click(function() {
      openChat(index);
    });

    chatList.append(chatItem);
  });

  // Send button click event
  sendButton.click(function() {
    sendMessage();
  });

  // Enter key press event
  messageInput.keypress(function(event) {
    if (event.which === 13) {
      sendMessage();
    }
  });



  // Sample Profiles
  const profiles = [{
      dogName: "Tobi",
      breed: "Poodle",
      ownerName: "Patricia",
      location: "Japan",
      image: "image/dogs/dog1.jpg",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      dogName: "Max",
      breed: "Labrador Retriever",
      ownerName: "Jane Smith",
      location: "Los Angeles",
      image: "image/dogs/dog2.png",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      dogName: "Charlie",
      breed: "French Bulldog",
      ownerName: "Mike Johnson",
      location: "Chicago",
      image: "image/dogs/dog3.png",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      dogName: "Luna",
      breed: "German Shepherd",
      ownerName: "Sarah Williams",
      location: "Miami",
      image: "image/dogs/dog4.png",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      dogName: "Cooper",
      breed: "Beagle",
      ownerName: "Emily Davis",
      location: "San Francisco",
      image: "image/dogs/dog5.png",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];

  let currentProfileIndex = 0;

  const swipeCard = $('#swipeCard');
  const swipeDogImage = $('#swipeDogImage');
  const swipeDogName = $('#swipeDogName');
  const swipeBreed = $('#swipeBreed');
  const swipeOwnerName = $('#swipeOwnerName');
  const swipeLocation = $('#swipeLocation');
  const swipeAbout = $('#swipeAbout');

  function updateSwipeCard() {
    const profile = profiles[currentProfileIndex];
    swipeDogImage.attr('src', profile.image);
    swipeDogName.text(profile.dogName);
    swipeBreed.text(profile.breed);
    swipeOwnerName.text(profile.ownerName);
    swipeLocation.text(profile.location);
    swipeAbout.text(profile.about);
    swipeCard.removeClass('swipe-left swipe-right'); // Remove animation class
  }

  function swipeLeft() {
    swipeCard.addClass('swipe-left'); // Add animation class
    setTimeout(function() {
      currentProfileIndex++;
      if (currentProfileIndex >= profiles.length) {
        currentProfileIndex = 0;
      }
      updateSwipeCard();
    }, 300);
  }

  function swipeRight() {
    swipeCard.addClass('swipe-right'); // Add animation class
    setTimeout(function() {
      currentProfileIndex++;
      if (currentProfileIndex >= profiles.length) {
        currentProfileIndex = 0;
      }
      updateSwipeCard();
    }, 300);
  }


  $('.swipe-left-btn').on('click', swipeLeft);
  $('.swipe-right-btn').on('click', swipeRight);

  // Display initial profile information on swipe card
  updateSwipeCard();


});
