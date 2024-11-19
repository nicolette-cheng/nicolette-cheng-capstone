# Project Title

wabisabi

## Overview

<!-- What is your app? Give a brief description in a couple of sentences. -->

Wabisabi is a task-management tool for diagnosed and undiagnosed neurodivergent individuals to keep track of and accomplish tasks in a way that uniquely motivates themself. The goal is to enable users to thrive in their individuality while existing in a neurotypical space.

### Problem Space

<!-- Why is your app needed? Give any background information around any pain points or other reasons. -->

Neurodivergents are motivated by interest and/or urgency. When a task doesn't personally appeal to a neurodivergent individual it can feel debilitating for them to accomplish said task even if it's a simple task by neurotypical standards.

Wabisabi is a Japanese word that describes a world view focused on celebrating the beauty of imperfection and the acceptance of impermanence. Wabisabi resonates deeply with the neurodivergent experience, to embrace neurodivergent traits that are traditionally seen as flaws such as executive dysfunction, sensory sensitivities and inattentiveness.

The connection between wabisabi and neurodivergence cultivates a mindset that values authenticity, self-compassion and the richness of diverse experiences. Rather than considering neurodivergence as something to fix, the focus is shifted to appreciate the inherent beauty of everyone's unique existence.

[Click here to learn more about wabisabi.](https://en.wikipedia.org/wiki/Wabi-sabi)

### User Profile

<!-- Who will use your app? How will they use it? Add any special considerations that your app must take into account. -->

For neurodivergent individuals:

- looking to organize and game-ify their life
- looking to create rewards that are personally fulfilling to spark interest in accomplishing tasks
- looking to implement controls that help them keep track of their priorities

### Features

As a logged in user, I want to be able to:

- create a task record and be able to assign story points, level of importance and label/categorize the task
- update a task record and its associated details
- create a reward record and be able to attach reward details, assign required # of story points to unlock, and label/categorize the reward
- update a reward record and its associated details

## Implementation

### Tech Stack

- React
- Express
- MySQL
- Client libraries:
  - react
  - react-router
  - axios
- Server libraries
  - knex
  - express

### APIs

- No external APIs will be used for the first sprint

### Sitemap

<!-- List the pages of your app with brief descriptions. You can show this visually, or write it out. -->

**_MVP_**

| Request type | Path/End point   | Page title       | Content                            |
| ------------ | ---------------- | ---------------- | ---------------------------------- |
| GET          | /home            | home             | analytics of tasks and rewards     |
| GET          | /about           | about            | about app, about founder           |
| GET          | /tasks           | tasks management | tasks list, tasks progress tracker |
| GET          | /tasks/:id       | task details     | task details                       |
| POST         | /tasks/:id/add   | add task         | page to add task details           |
| GET          | /rewards         | rewards          | rewards list, add form             |
| POST         | /rewards/:id/add | add reward       | add reward form                    |
| GET          | /rewards/:id     | rewards details  | reward details                     |
| GET          | /how             | how-to           | instruction on how app works       |

**_nice to haves_**
| Request type | path                | page title    | content                      |
| ------------ | ------------------- | ------------- | ---------------------------- |
| PUT          | /tasks/:id/edit     | update task   | page to update task details  |
| DELETE       | /tasks/:id/delete   | delete task   | modal to delete task details |
| PUT          | /rewards/:id/edit   | update reward | page to update task details  |
| DELETE       | /rewards/:id/delete | delete reward | modal to delete task details |
| POST         | /register           | register      | form to register user        |
| POST         | /login              | login         | form to login                |

### Mockups

<!-- Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma. -->

#### Home Page
![](/public/assets/ProposalMocks/homepage-mock.png)

#### About Page
![](/public/assets/ProposalMocks/aboutpage-mock.png)

#### Tasks Page
![](/public/assets/ProposalMocks/taskspage-mock.png)

#### Tasks Add Page
![](/public/assets/ProposalMocks/tasksaddpage-mock.png)

#### Rewards Page
![](/public/assets/ProposalMocks/rewardspage-mock.png)

#### Rewards Add Page
![](/public/assets/ProposalMocks/rewardsaddpage-mock.png)

_----------------more to come----------------_

### Data

<!-- Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.  -->

_----------------more to come----------------_

### Endpoints

**GET /about**

_----------------more to come----------------_

## Roadmap

<!-- Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.  -->

**Sprint-1**
Complete by: _Wednesday Nov 20_

- [ ] **Create local client**: react project with routes and boilerplate pages
- [ ] **Create local server**: express project with routing and placeholder items
- [ ] **Create notion kanban**: create tickets for notion kanban to outline all required tasks to complete MVP

**Sprint-2**
Complete by: _Sunday Nov 24_

- [ ] create migrations
- [ ] create seeds with sample tasks and rewards (minimum 5 each)
  - [ ] tasks table
  - [ ] rewards table
- [ ] create and input content for about.json (outlining overview and problem space)
- [ ] **Feature**/home
  - [ ] GET/tasks
  - [ ] GET/rewards
- [ ] **Feature**/about
  - [ ] GET/about
- [ ] **Feature**/how
  - [ ] GET/how
- [ ] **Feature**/tasks
  - [ ] GET/tasks
  - [ ] POST/tasks/:id
  - [ ] _Optional: PUT/tasks/:id_
  - [ ] _Optional: DELETE/tasks/:id_
- [ ] **Feature**/rewards
  - [ ] GET/rewards
  - [ ] POST/rewards/:id
  - [ ] _Optional: PUT/rewards/:id_
  - [ ] _Optional: DELETE/rewards/:id_

**Sprint-3**
Complete by: _Sunday Dec 1_

- [ ] Styling all front end components
- [ ] Project wide testing

## Future Implementations

- [ ] **Feature**/register-page
  - [ ] POST/register
- [ ] **Feature**/login-page
  - [ ] POST/login
