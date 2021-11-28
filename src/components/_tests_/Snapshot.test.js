import React from "react";
import renderer from "react-test-renderer";
import Home from "../Home";
import Profile from "../Profile";
import ProfileEdit from "../ProfileEdit";
import Accounting from "../Accounting";
import Appointment from "../Appointment";
import Reports from "../Reports";
import Lists from "../Lists";
import Documents from "../Documents";
import Header from "../Header";

test("renders Home screen correctly", () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Appointment screen correctly", () => {
  const tree = renderer.create(<Appointment />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders Profile screen correctly", () => {
  const tree = renderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders ProfileEdit screen correctly", () => {
  const tree = renderer.create(<ProfileEdit />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders Reports screen correctly", () => {
  const tree = renderer.create(<Reports />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Lists screen correctly", () => {
  const tree = renderer.create(<Lists />).toJSON();
  expect(tree).toMatchSnapshot();
});
test("renders Documents screen correctly", () => {
  const tree = renderer.create(<Documents />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders Header screen correctly", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
