import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("Handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment",
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New comment"]);
});

it("Handles actions with unknown type", () => {
  const newState = commentsReducer([], { type: "AKJDHKAJS" });

  expect(newState).toEqual([]);
});
