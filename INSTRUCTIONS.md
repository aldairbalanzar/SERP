Here at Vimeo, the Search & Recommendations team is responsible for driving discovery and inspiration across our many product offerings. Every day, our APIs power millions of searches of many different entities including: clips, users, stock footage, and freelance job listings. At the center of it all is the search engine results page (SERP), which allows users to refine their results through filters, sorting, etc. Take a look at it [here](https://vimeo.com/search?q=test).

Your assignment is to build a simple SERP, with a search bar that supports a small set of queries. An example can be found [here](https://vimeo.com/480388146).

As a baseline, it should:
- Support searching for "animation", "example", and "travel" (see `data/`)
- Render the provided search results. What exactly gets rendered and how is up to you -- in the provided example, it's the total number of results, along with clip thumbnail, name, author, and view count. Some other fields provided are `description`, `language`, `user.location`, `is_featured`, and `metadata.connections.comments.total`. How might the use case (e.g. a user searching over their own videos vs global Vimeo search) affect what gets rendered?
- Be responsive (desktop, mobile, tablet)
- Support a query parameter `q` denoting the user's query
- Include a search bar which reflects the users query and allows them to submit different ones

The actual style and structure of the page is open-ended, consider the provided example.

Some additional considerations:
- How would a user navigate your page with just their keyboard? What about with a screen-reader?
- What happens if there are no results for a given query?
- What gets rendered when hovering over a clip thumbnail?

## Submission Guidelines

Please implement your solution in React, with reasonable use of libraries as needed ([styled-components](https://www.npmjs.com/package/styled-components), [moment](https://www.npmjs.com/package/moment), [lodash](https://www.npmjs.com/package/lodash), etc.). This should take about 3 hours to complete.

Some things we'll be looking for:
- Are all baseline requirements met?
- Is the code clean, idiomatic, and thoughtfully organized?
- Are there any tests?
- Is the page sensibly styled and structured?
- Is there any documentation?