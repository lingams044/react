# Student Portal

A React-based student portal application.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/student-portal.git
cd student-portal
```

2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

### Testing

Run tests:
```bash
npm test
```

### Build

Create a production build:
```bash
npm run build
```

### Deployment

The project is configured for automatic deployment to GitHub Pages. Simply push to the `main` branch, and GitHub Actions will:
1. Install dependencies
2. Run tests
3. Build the project
4. Deploy to GitHub Pages

Your site will be available at: `https://yourusername.github.io/student-portal`

## Configuration Before Deployment

1. **Update the homepage** in [package.json](package.json):
   - Find the `"homepage"` line and replace `yourusername` with your actual GitHub username
   
2. **Create a GitHub repository**:
   - Go to [github.com/new](https://github.com/new)
   - Name it `student-portal`
   - Don't initialize with README (you already have one)

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/yourusername/student-portal.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose `gh-pages` branch as the source (created automatically by the CI/CD workflow)

## Technologies

- React 19
- React Router DOM
- React Scripts

## License

This project is open source and available under the MIT License.
"# react" 
