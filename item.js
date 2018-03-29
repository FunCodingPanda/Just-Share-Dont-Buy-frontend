// Read the item ID from the URL
let item = $.url('?item');

// When the page loads
$( document ).ready(() => {
  // Make a GET request for the item
  axios.get(`/items/${item}`)
    .then(response => {
      console.log(response);
      const item = response.data
      $('#item-title').html(item.name)
      $('#item-description').html(item.description)
      axios.get(`/users/${item.user_id}`)
        .then(response => {
          const user = response.data
          $('#user-name').html(user.name)
          $('#user-phone').html(user.phone)
          $('#user-email').html(user.email)
        })
    })
    .catch(error => {
      console.log(error);
    });
});