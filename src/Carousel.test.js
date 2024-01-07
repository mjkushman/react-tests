import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon";

//Smoke test
it("renders Carousel without smoking", ()=> {
  render(<Carousel photos={TEST_IMAGES} title="images for testing"/>);
});

// Snapshot test
it("matches Carousel snapshot", ()=>{
  const { asFragment } = render(<Carousel photos={TEST_IMAGES} title="images for testing"/>);
  expect(asFragment()).toMatchSnapshot();

})

it("works when you click on the right arrow", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();

    // move backwards in the carousel
    const leftArrow = container.querySelector('.bi-arrow-left-circle')
    fireEvent.click(leftArrow)

    // expect the first image to show again, and not the first
    expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument()
    expect(container.querySelector('img[alt="testing image 2"]')).not.toBeInTheDocument()
});

it('Works when clicking the left arrow', ()=>{

  const { container } = render(<Carousel photos={TEST_IMAGES} title="images for testing" />)
  
  // expect the first image to show
  expect(container.querySelector('img[alt="testing image 1"]')).toBeInTheDocument();

  // expect the left arrow to be rendered
  expect(container.querySelector('.bi-arrow-left-circle')).toBeInTheDocument()

  // select the left arrow and click it
  const leftArrow = container.querySelector('.bi-arrow-left-circle')
  fireEvent.click(leftArrow)
  // expect image 3 to show, and not image 1
  expect(container.querySelector('img[alt="testing image 3"]')).toBeInTheDocument();
})
