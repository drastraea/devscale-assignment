# Content Management System
This is a Content Management System (CMS) built with Next.js that allows for easy management of content, including creating, viewing, editing, and deleting posts. It fetches and interacts with the backend API to perform CRUD operations.

## Features
- **Create**: Add new content (posts) to the system.
- **View**: View detailed content via the content page.
- **Edit**: Edit existing content (title, description, etc.).
- **Delete**: Remove content from the system.
- **Fetch**: Fetch content from an external API and display it in a list.

## Technologies Used
- **Next.js**: React framework for building the application.
- **React**: JavaScript library for building user interfaces.
- **TailwindCSS**: Styling for the components.
- **AppBackend**: App Demo Database
- **TipTap**: WYSIWYG Editor for content writing and update.
- **Typography**: TailwindCSS Plugin.
- **Framer Motion**: Animate the About page.
- **API Integration**: Fetching data from a backend API.

## Setup Instructions
1. **Clone the repository:**
```bash
git clone https://github.com/drastraea/devscale-assignment.git
cd devscale-assignment
```
2. **Install dependencies:**

```bash
npm install
```

3. **Run the development server:**

```bash
npm run dev
```

This will start the development server at http://localhost:3000.

API Integration:
The application fetches content data from a backend API endpoint (**appbackend**). Ensure that the API is up and running, or replace it with your own backend endpoint.

Components
1. ContentLists
This component displays a list of all content items. Each item includes a title, description, and action buttons (View, Edit, Delete).

2. Delete Functionality
The delete functionality is implemented on the client-side. The content can be removed from the list by clicking the "Delete" button, which sends a request to the backend to remove the content.

3. Edit and View
Clicking on the "Edit" button redirects the user to the edit page for that particular content, while the "View" button opens the content in a new tab.

## Contributing
Feel free to fork the repository and submit pull requests. If you have suggestions or feature requests, open an issue in the repository.