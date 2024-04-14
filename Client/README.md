# Scrollspy with animated scroll and focus

A Pen created on CodePen.io. Original URL: [https://codepen.io/CodeBoomer/pen/dXgyPq](https://codepen.io/CodeBoomer/pen/dXgyPq).

#WIP - Building a fake landing page

Fixed Header using Bootstraps Scrollspy with animated scroll and a focus class assigned by JQuery.  A setTimeout function removes the focus class from the target element after x seconds, allowing you to apply CSS styles to focus the users attention on as desired.

Focus class only fires when a navigation link is clicked as a user is 'generally' aware of where they're scrolling. As soon as you scroll for them, that's when you need  a focus class.

The CSS :target selector isn't approriate here, as you'll see in the JS, the script I referenced from CSS Tricks essentially hijack the :target, as does any offset or animated scrolling. Thus, generally speaking, the :target selector is not good for a landing page section scroller like this one.

P.S I use a container in each section for landing pages as gives more flexibility. 