# Quest Platform Application

## Overview

Develop a Next.js (version 12.3.4 in TypeScript) application for a quest platform where users can view and interact with various quests. The application should efficiently fetch and display quest data across multiple components with different UI requirements and allow users to complete quests.

## Major Functionalities

### 1. Display Quest Data

#### Objectives

a. Data Fetching and Management

- Create a reusable data fetching mechanism for quests:
  - Implement functionality to return a single targeted quest.
  - Implement auto-refresh (every 60 seconds) and manual refresh functionalities.
  - Ensure proper error handling and loading states.
  - Ensure proper caching or memoization of quest data to improve performance.

b. Quest Display Components

- Implement multiple UI components to display quests in different formats:

  i. QuestTable Component (to be used in `/pages/table`):

  - Display quests in a table format.
  - Implement sorting functionality for quests (by title, date, etc.).
  - Add filtering and searching functionality by quest title.
  - Include a manual refresh button.
  - (Bonus) Implement pagination or infinite scrolling for large datasets.

  ii. FeaturedQuests Component (to be used in `/pages/featured`):

  - Display featured quest cards in a grid layout.
  - Show title, description, points, and image for each featured quest card.
  - Include a manual refresh button.
  - (Bonus) Implement a carousel for multiple featured quests.

c. Mock API for Quest Data

- Create a mock API to return all quests:
  - Implement a simulated API endpoint that returns a list of quests.
  - Include relevant quest data such as id, title, description, points, image, etc.
  - Implement proper error handling and simulate network delays for a realistic API experience.

### 2. Quest Completion

#### Objectives

a. Quest Completion UI

- Add a "Complete Quest" button for each quest:
  - Implement a button or interaction method for users to complete quests.
  - Update the quest's status in the front-end upon successful completion.

b. Quest Completion History (`/pages/history`)

- Implement a feature to track and display the user's total points and completed quests record.
- Ensure history records are updated promptly and accurately during quest completion, even with a large number of completed quests.

c. Quest Completion API

- Create a mock API endpoint to handle quest completion requests:
  - Implement a simulated API endpoint that returns all completed quest records.
  - Implement a simulated API endpoint that accepts quest completion requests.
  - Store the quest record in the in-memory data store.
  - Return appropriate success or error responses.

d. Error Handling and User Feedback

- Implement proper error handling for quest completion attempts.
- Provide clear feedback to the user on the success or failure of quest completion.
- Implement strategies to minimize user-perceived latency during quest completion.

## Requirements

- TypeScript and ES6+ code.
- Emphasis on maintainability and understandable code structure.
- Flexibility to modify the provided starter code.
- Option to use additional libraries to complete the task.

## Evaluation Criteria

- **Functionality**: The application should be fully functional and meet all objectives and requirements.
- **Reusability and Scalability**: Components should be designed for reusability, extensibility, and scalability.
- **Responsiveness**: The webpage should be responsive and mobile-friendly.
- **Code Quality**: Code should be clean, well-organized, and follow best practices.
- **UI Design (Plus, not primary)**: A user-friendly and aesthetically pleasing UI is a plus, but the primary focus is on functionality and code quality.
- **API Interaction**: Proper implementation of mock API endpoints and handling of quest data and completion requests.
