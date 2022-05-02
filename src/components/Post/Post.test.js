import { findByAltText, render, screen, waitFor, findByRole, waitForElementToBeRemoved } from "@testing-library/react";
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

const MockPost = ({ mocks, postProps }) => {
  return (
    <MockedProvider addTypename={false} mocks={mocks}>
      <Post {...postProps} />
    </MockedProvider>
  );
};

test("should mock data response", async () => {
  render(<MockPost mocks={mocks} postProps={{ id: 2 }} />);

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
