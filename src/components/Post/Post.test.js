import { findByAltText, render, screen, waitFor, findByRole, waitForElementToBeRemoved } from "@testing-library/react";
import { GraphQLError } from "graphql";
import { MockedProvider } from "@apollo/client/testing";
import Post, { POST_QUERY } from ".";

const mocks = [
  {
    request: {
      query: POST_QUERY,
      variables: {
        id: 2,
      },
    },
    result: {
      data: {
        post: { id: 1, author: "allen", description: "mock test" },
      },
    },
  },
];

const MockPost = ({ mocks, postProps = { id: 2 } }) => {
  return (
    <MockedProvider addTypename={false} mocks={mocks}>
      <Post {...postProps} />
    </MockedProvider>
  );
};

test("should mock data response", async () => {
  render(<MockPost mocks={mocks} />);

  // 第一种方法：使用 waitForElementToBeRemoved
  // await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  // expect(screen.queryByText(/loading/i)).toBeFalsy();

  // 第二种方法：使用 waitFor
  // const heading = await waitFor(() => screen.getByRole("heading"));
  // expect(heading).toBeInTheDocument();

  // 第三种方法：使用 findByxxx
  const heading = await screen.findByRole("heading");
  // const heading = await findByRole(container, "heading");
  expect(heading).toBeInTheDocument();

  screen.debug();
});

test("should mock data error occur", async () => {
  const errorMocks = { ...mocks[0] };
  errorMocks.result.errors = [new GraphQLError("Error!")];

  render(<MockPost mocks={[errorMocks]} />);

  const errorDom = await screen.findByText(/error/i);
  expect(errorDom).toBeInTheDocument();

  screen.debug();
});
