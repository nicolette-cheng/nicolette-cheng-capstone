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

- Home page - overview
- About page
- Task list page - add
  - Task details modal - edit
- Rewards list page - add
  - Rewards details modal - edit
- Register
- Login

### Mockups

<!-- Provide visuals of your app's screens. You can use pictures of hand-drawn sketches, or wireframing tools like Figma. -->

### Data

<!-- Describe your data and the relationships between the data points. You can show this visually using diagrams, or write it out.  -->

### Endpoints

<!-- List endpoints that your server will implement, including HTTP methods, parameters, and example responses. -->

**---MVP---**

- GET /tasks
- POST /tasks/:id
- GET /rewards
- POST /rewards/:id

**--NICE TO HAVES---**

- PUT /tasks/:id
- DELETE /tasks/:id
- PUT /rewards/:id
- DELETE /rewards/:id

## Roadmap

<!-- Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation working back from the capstone due date.  -->

**Sprint-1**
Complete by: _Tuesday Nov 19_

- [ ] **Create client**: react project with routes and boilerplate pages
- [ ] **Create server**: express project with routing and placeholder items
- [ ] **Create notion kanban**: create tickets on notion to outline all required tasks to complete MVP

**Sprint-2**
Complete by: _Sunday Nov 24_

- [ ] create migrations
- [ ] create seeds with sample tasks and rewards (minimum 5 each)
  - [ ] tasks table
  - [ ] rewards table
- [ ] create and input content for about.json (outlining overview and problem space)
- [ ] **Feature**/home-page
  - [ ] GET/tasks
  - [ ] GET/rewards
- [ ] **Feature**/about-page
  - [ ] GET/about
- [ ] **Feature**/tasks-page
  - [ ] GET/tasks
  - [ ] POST/tasks/:id
  - [ ] _Optional: PUT/tasks/:id_
  - [ ] _Optional: DELETE/tasks/:id_
- [ ] **Feature**/rewards-page
  - [ ] GET/rewards
  - [ ] POST/rewards/:id
  - [ ] _Optional: PUT/rewards/:id_
  - [ ] _Optional: DELETE/rewards/:id_

**Sprint-3**
Complete by: _Sunday Dec 1_
- [ ] Styling all front end components

## Future Implementations

- [ ] **Feature**/register-page
  - [ ] POST/register
- [ ] **Feature**/login-page
