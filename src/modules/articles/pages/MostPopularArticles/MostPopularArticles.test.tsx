import { render } from '@testing-library/react';
import { MostPopularArticles } from '.';
import { mockMostPopularArticlesResFixture, mockMostPopularResNoArticlesFixture } from '../../../../__tests__/__fixtures__/mostPopularArticles.fixture';
import { MostPopularArticlesRes } from '../../../../types';
import { useGetMostPopularArticles } from '../../hooks/useGetMostPopularArticles';

jest.mock('../../hooks/useGetMostPopularArticles', () => ({
  useGetMostPopularArticles: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: ({ children }: { children: React.ReactNode }) => children,
}));

describe("Most Popular Articles", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render articles list if data is available", async () => {
    
    const mockedUseGetMostPopularArticles = useGetMostPopularArticles as jest.MockedFunction<typeof useGetMostPopularArticles & { data: MostPopularArticlesRes }>;
    
    mockedUseGetMostPopularArticles.mockImplementation(() => ({
      data: mockMostPopularArticlesResFixture,
      isLoading: false,
      isSuccess: true,
      error: null,
      isError: false,
    }));
    
    const screen = render(<MostPopularArticles />);
    expect(await screen.findByTestId("articles-list")).toBeDefined();

  });

  it("should render no articles found component if data is not available", async () => {

    const mockedUseGetMostPopularArticles = useGetMostPopularArticles as jest.MockedFunction<typeof useGetMostPopularArticles & { data: MostPopularArticlesRes }>;

    mockedUseGetMostPopularArticles.mockImplementation(() => ({
      data: mockMostPopularResNoArticlesFixture,
      isLoading: false,
      isSuccess: true,
      error: null,
      isError: false,
    }));

    const screen = render(
      <MostPopularArticles />
    );
    expect(await screen.findByTestId("no-articles-found")).toBeDefined();
  })
  
});
