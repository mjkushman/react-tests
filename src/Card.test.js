import { render } from "@testing-library/react";
import Card from "./Card";



// Smoke test
it("renders Card without smoking", ()=> {
  render(<Card/>);
});


// Snapshot test
it("matches Card snapshot", ()=>{
  const { asFragment } = render(<Card/>);
  expect(asFragment()).toMatchSnapshot();
});

