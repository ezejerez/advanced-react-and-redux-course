import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme";
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it("Has a text area and two buttons", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2);
});

describe("The textarea", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "Test comment" },
    });

    wrapped.update();
  });

  it("Has a textarea that users can type in", () => {
    expect(wrapped.find("textarea").prop("value")).toEqual("Test comment");
  });

  it("When form is submitted, textarea gets emptied", () => {
    wrapped.find("form").simulate("submit");
    wrapped.update();

    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
