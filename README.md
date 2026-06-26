# React Fetch Data from Server

A simple React application that demonstrates how to fetch data from a server using the Fetch API.

## Features

- Fetch data from an API
- Display loading state
- Handle errors
- Render fetched data
- Built with React Functional Components and Hooks

## Technologies Used

- React
- JavaScript (ES6+)
- Fetch API
- CSS

## Project Structure

```
src/
│── components/
│── App.jsx
│── main.jsx
│── index.css
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repository.git
```

### 2. Navigate to the project

```bash
cd your-repository
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on:

```
http://localhost:5173
```

## How It Works

1. The component renders.
2. React's `useEffect()` runs after the first render.
3. A request is sent to the server using the Fetch API.
4. The server returns JSON data.
5. The response is converted into JavaScript objects.
6. The data is stored in React state using `useState()`.
7. React automatically re-renders the UI to display the fetched data.

## Example Fetch Request

```javascript
useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data))
    .catch((error) => console.error(error));
}, []);
```

## Learning Objectives

This project helps you understand:

- React Hooks
- useState
- useEffect
- Fetch API
- API Requests
- JSON Data
- Loading State
- Error Handling
- Component Re-rendering

## Future Improvements

- Search functionality
- Pagination
- API filtering
- Loading spinner
- Better error messages
- Responsive UI

## Author

**S Rayyan**

- GitHub: https://github.com/rayyan-2007

## License

This project is open source and available under the MIT License.
