# rspec-capybara-feature-testing slides

Run this with -

```javascript
npm install
npm start
```

The slides will be available at `http://localhost:3000`

TODO -

Onion outside in
Why test
RSpec automated demo
binding.pry
Form filling in
Working with CSS Selectors
  h1, divs, etc

Gotchas, animating
  Finding a node, then asserting text directly
  Wait for animation
  Things moving, misclicking
  Semaphores within the page
  Asserting page URLs
  Things going slower, `visible` not actually 100% visible, a child element isn't right
  Clicking things blindly, ie clicking a parent doens't nesecarlly click the correct element
    "div > a"
    <div><a href<div>
  use find() before using all()
     https://robots.thoughtbot.com/write-reliable-asynchronous-integration-tests-with-capybara
    https://robots.thoughtbot.com/testing-from-the-outsidein
