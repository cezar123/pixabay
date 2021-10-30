# wats1020-flickr-search
An assignment to create an asynchronous search using Javascript and the Flickr API.

This assignment asks you to accept a query from the user and use that query to
search Flickr in order to show a grid of images that were returned. You are
provided with an `index.html` file that provides a minimal interface for your
work. The page also pulls in jQuery and Bootstrap for you, so those are at your
disposal.

Utilizing principles of progressive enhancement, you must activate the form so
you may capture the input from the user and send it along to Flickr by making
a call to the Flickr API. Upon successful response from the Flickr API, you will
then display a grid of the images that have been found. Using the effect or
tool of your choice, you will then provide some way for users to view larger
versions of the images.

## Basic Requirements

To successfully complete this assignment, you must fulfill the following requirements:

* Create an event handler that will accept user input through the provided form and turn that input into a request to the [Flickr API](https://www.flickr.com/services/api/).
* Display the images returned from the Flickr API as a grid on the page (or in a suitably appealing arrangement that matches your creative ambition).
* Display the following info around the images your script finds:
    * title
    * date_taken
    * description
    * author
    * link back to the Flickr page for this image
* When users re-do the search, the previous images should be removed, and the new images should fill the same space.

## Stretch Requirements

There are many ways you can stretch this assignment:

* Make the details show up in a modal window, using the Bootstrap technique for making one modal window serve multiple buttons: [Varying Modal Content Based on Trigger Button](http://getbootstrap.com/javascript/#modals-related-target).
* Add additional visual styling to make everything look a lot prettier.
* Ditch the top navbar, since it's not really useful. Can you make a cooler search form show up on the screen?
* Use some kind of animation or special effects library to provide a cool effect when the user mouses over the grid of images.
* Provide error handling so that if somebody submits a blank term, no search is performed (and the user receives a message letting them know what went wrong).
