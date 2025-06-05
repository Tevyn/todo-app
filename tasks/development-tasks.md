# Development Tasks: Todo List Application

## Relevant Files

This section will be updated as files are created/modified during development.

### Notes

- **TDD Approach:** Follow small red-green cycles. Write tests for ONE piece of functionality, then implement it immediately.
- **Git Commits:** After each successful implementation (green phase), commit with descriptive message.
- **UI Features:** Use Playwright to capture screenshots after implementation, review them, and ensure all expected visual elements are present and displaying correctly.
- **Testing:** Use `npm test` or `npx jest [path/to/test/file]` to run tests.

## Phase 1: Project Setup & Infrastructure

### Task 1.1: Initialize Project Structure
- [x] Set up Node.js project with npm
- [x] Configure TypeScript/JavaScript project structure  
- [x] Set up folder structure (components, pages, lib, etc.)
- [x] Initialize version control (git)
- [x] Set up testing framework (Jest/React Testing Library)

### Task 1.2: Install Core Dependencies
- [x] Install shadcn/ui components library
- [x] Install React and necessary dependencies
- [x] Set up development server
- [x] Install Playwright for UI screenshot verification

### Task 1.3: Database Choice and Setup  
- [x] Choose database solution for single-user persistence (SQLite recommended)
- [x] Install chosen database dependencies
- [x] Design database schema for todos, sub-todos, and tags
- [x] Create database connection and configuration
- [x] Set up database migrations/initialization

## Phase 2: Core Task Management (Requirements 1-6)

### Task 2.1: Todo Model and Basic CRUD
- [ ] Write tests for Todo model/interface structure
- [ ] Create Todo model/interface with title, description, due date fields
- [ ] Write tests for todo creation functionality
- [ ] Implement create new todo functionality
- [ ] Write tests for todo editing functionality  
- [ ] Implement edit todo functionality
- [ ] Write tests for todo deletion functionality
- [ ] Implement delete todo functionality
- [ ] Write tests for form validation
- [ ] Add form validation for todo creation/editing

### Task 2.2: Todo Display and Completion
- [ ] Write tests for todo list display component
- [ ] Create todo list display component using shadcn components
- [ ] Capture screenshot with Playwright, review it, and verify todo list UI displays correctly
- [ ] Write tests for todo completion toggle functionality
- [ ] Implement mark todo as complete/incomplete functionality
- [ ] Write tests for completed vs incomplete visual styling
- [ ] Add visual styling for completed vs incomplete todos
- [ ] Capture screenshot with Playwright, review it, and verify completion states display correctly

### Task 2.3: Data Persistence Layer
- [ ] Write tests for database todo CRUD operations
- [ ] Implement database operations for todo CRUD
- [ ] Write tests for database error handling
- [ ] Add error handling for database operations
- [ ] Write tests for data persistence across sessions
- [ ] Verify data persistence across browser sessions

## Phase 3: Sub-Task Functionality (Requirements 7-11)

### Task 3.1: Sub-Todo Data Structure
- [ ] Write tests for extending todo model with parent-child relationships
- [ ] Extend todo model to support parent-child relationships (one level only)
- [ ] Write tests for updated database schema with hierarchical todos
- [ ] Update database schema for hierarchical todos (one level only)
- [ ] Write tests for sub-todo creation functionality
- [ ] Implement sub-todo creation functionality

### Task 3.2: Hierarchical Display and Interaction
- [ ] Write tests for visual hierarchy display (indentation/styling)
- [ ] Create visual hierarchy display (indentation/styling)
- [ ] Capture screenshot with Playwright, review it, and verify hierarchy display shows proper indentation
- [ ] Write tests for adding sub-todos to parent todos
- [ ] Implement adding sub-todos to parent todos
- [ ] Write tests for independent completion tracking of sub-todos
- [ ] Add independent completion tracking for sub-todos

### Task 3.3: Automatic Parent Completion Logic
- [ ] Write tests for automatic parent completion when all sub-todos complete
- [ ] Implement automatic parent completion when all sub-todos are complete
- [ ] Write tests for automatic parent incompletion when sub-todo becomes incomplete
- [ ] Implement automatic parent incompletion when any sub-todo becomes incomplete
- [ ] Write tests for visual indicators of parent-child relationships
- [ ] Add visual indicators for parent-child relationships
- [ ] Capture screenshot with Playwright, review it, and verify parent-child visual indicators are clear
- [ ] Write tests for edge cases (deleting sub-todos, etc.)
- [ ] Handle edge cases (deleting sub-todos, etc.)

## Phase 4: Tagging System (Requirements 16-22)

### Task 4.1: Tag Data Model
- [ ] Write tests for tag model with color properties
- [ ] Create tag model with color properties
- [ ] Write tests for updated database schema with tags and todo-tag relationships
- [ ] Update database schema for tags and todo-tag relationships
- [ ] Write tests for many-to-many relationship between todos and tags
- [ ] Implement many-to-many relationship between todos and tags

### Task 4.2: Tag Creation and Assignment
- [ ] Write tests for tag creation interface during todo editing
- [ ] Create tag creation interface during todo editing
- [ ] Capture screenshot with Playwright, review it, and verify tag creation UI is intuitive
- [ ] Write tests for assigning multiple tags to todos
- [ ] Implement assigning multiple tags to todos
- [ ] Write tests for tag display on todo items with color coding
- [ ] Add tag display on todo items with color coding
- [ ] Capture screenshot with Playwright, review it, and verify tag display shows colors correctly

### Task 4.3: Tag Management and Filtering
- [ ] Write tests for tag filtering interface with selectable list
- [ ] Create tag filtering interface with selectable list
- [ ] Capture screenshot with Playwright, review it, and verify tag filtering UI is functional
- [ ] Write tests for filter functionality by selected tags
- [ ] Implement filter functionality by selected tags
- [ ] Write tests for automatic color assignment from predefined palette
- [ ] Add automatic color assignment from predefined palette
- [ ] Write tests for changing tag colors from available options
- [ ] Allow users to change tag colors from available options

## Phase 5: Due Date Management (Requirements 27-30)

### Task 5.1: Due Date Interface
- [ ] Write tests for due date picker in todo creation/editing
- [ ] Add due date picker to todo creation/editing
- [ ] Capture screenshot with Playwright, review it, and verify due date picker UI is accessible
- [ ] Write tests for displaying due dates in readable format
- [ ] Display due dates in readable format on todo items
- [ ] Write tests for due date validation
- [ ] Implement due date validation

### Task 5.2: Due Date Visual Indicators  
- [ ] Write tests for visual indicators for overdue todos
- [ ] Create visual indicators for overdue todos
- [ ] Write tests for highlighting approaching due dates
- [ ] Add highlighting for approaching due dates
- [ ] Capture screenshot with Playwright, review it, and verify due date visual indicators are prominent
- [ ] Write tests for sorting/prioritization by due date
- [ ] Implement sorting/prioritization by due date

### Task 5.3: Due Date Logic
- [ ] Write tests for date comparison logic for overdue detection
- [ ] Add date comparison logic for overdue detection
- [ ] Write tests for due date inheritance/handling for sub-todos
- [ ] Implement due date inheritance/handling for sub-todos
- [ ] Write tests for edge cases (timezone handling, date formatting)
- [ ] Handle edge cases (timezone handling, date formatting)

## Phase 6: Drag and Drop Reordering (Requirements 12-15)

### Task 6.1: Drag and Drop Setup
- [ ] Write tests for drag-and-drop library integration
- [ ] Install and integrate drag-and-drop library (react-beautiful-dnd recommended)
- [ ] Write tests for draggable todo components
- [ ] Create draggable todo components
- [ ] Write tests for visual feedback during drag operations
- [ ] Implement visual feedback during drag operations
- [ ] Capture screenshot with Playwright, review it, and verify drag visual feedback is clear

### Task 6.2: Reordering Logic
- [ ] Write tests for reordering within todo lists
- [ ] Implement reordering within todo lists
- [ ] Write tests for independent reordering of parent todos and sub-todos
- [ ] Support independent reordering of parent todos and sub-todos
- [ ] Write tests for persisting custom ordering in database
- [ ] Persist custom ordering in database
- [ ] Write tests to verify reordering maintains parent-child relationships
- [ ] Verify reordering maintains relationships

### Task 6.3: Drag and Drop Polish
- [ ] Write tests for smooth animations and transitions
- [ ] Add smooth animations and transitions
- [ ] Write tests for edge cases (dragging while editing, etc.)
- [ ] Handle edge cases (dragging while editing, etc.)
- [ ] Write tests for responsive drag behavior on mobile devices
- [ ] Ensure responsive behavior on mobile devices
- [ ] Capture screenshot with Playwright, review it, and verify final drag-and-drop functionality works smoothly

## Phase 7: Multiple Lists (Requirements 23-26)

### Task 7.1: List Data Structure
- [ ] Write tests for list model and database schema
- [ ] Create list model and database schema
- [ ] Write tests for list creation, naming, and renaming
- [ ] Implement list creation, naming, and renaming
- [ ] Write tests for updating todo model to belong to specific lists
- [ ] Update todo model to belong to specific lists

### Task 7.2: List Navigation and Management
- [ ] Write tests for list navigation interface
- [ ] Create list navigation interface
- [ ] Capture screenshot with Playwright, review it, and verify list navigation UI is intuitive
- [ ] Write tests for switching between lists
- [ ] Implement switching between lists
- [ ] Write tests to ensure complete separation between lists
- [ ] Ensure complete separation between lists
- [ ] Write tests for list management (create, rename, delete)
- [ ] Add list management (create, rename, delete)

### Task 7.3: List-Specific Operations
- [ ] Write tests for all todo operations to be list-scoped
- [ ] Update all todo operations to be list-scoped
- [ ] Write tests to ensure drag-and-drop works within lists only
- [ ] Ensure drag-and-drop works within lists only
- [ ] Write tests for filtering to work within current list context
- [ ] Update filtering to work within current list context
- [ ] Capture screenshot with Playwright, review it, and verify multiple lists functionality is complete

## Phase 8: Final Code Quality

### Task 8.1: Code Review and Refactoring
- [ ] Code review for best practices and patterns
- [ ] Refactor for maintainability and performance
- [ ] Update documentation and comments
- [ ] Run comprehensive test suite and ensure 100% pass rate

## Success Criteria Validation

### Functional Requirements Checklist
- [ ] All 37 functional requirements implemented and tested
- [ ] Core Task Management (Requirements 1-6)
- [ ] Sub-Task Functionality (Requirements 7-11)
- [ ] Tagging System (Requirements 16-22)
- [ ] Due Date Management (Requirements 27-30)
- [ ] Drag and Drop Reordering (Requirements 12-15)
- [ ] Multiple Lists (Requirements 23-26)
- [ ] User Interface (Requirements 31-34)
- [ ] Technical Infrastructure (Requirements 35-37)

### Quality Assurance Checklist
- [ ] Application works seamlessly across desktop, tablet, and mobile
- [ ] Data persistence works consistently with no data loss
- [ ] Drag-and-drop operations are smooth and responsive
- [ ] All user interactions are intuitive and require no learning curve
- [ ] Code quality meets standards with minimal custom components
- [ ] All tests pass with comprehensive coverage
- [ ] Visual verification through Playwright screenshots completed

## Technical Decisions to Make
1. **Database Choice**: SQLite for single-user simplicity (recommended)
2. **State Management**: React built-in state vs Redux/Zustand for complex relationships
3. **Backend Framework**: Express.js vs Next.js API routes vs standalone backend
4. **Drag-and-Drop Library**: react-beautiful-dnd (recommended) vs dnd-kit vs react-dnd
5. **Date Handling**: date-fns vs dayjs vs native Date for due date management

## Development Flow Reminders
- **One sub-task at a time**: Complete each sub-task fully before moving to the next
- **TDD Cycles**: Write tests first, implement to pass tests, then commit
- **Visual Verification**: Capture screenshots with Playwright for all UI changes
- **Git Commits**: Commit after each successful implementation with descriptive messages 