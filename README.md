 #  Online Book Borrowing Platform

A modern web application built with **Next.js** that allows users to browse, search, and borrow books easily. The platform includes authentication, private routes, category filtering, and a clean responsive UI.

---

##  Features

###  Layout Structure
- **Navbar**
  - Left: Logo (links to Home)
  - Center: Navigation (Home, All Books, My Profile)
  - Right: Conditional Auth UI
    - Logged out → Login button
    - Logged in → User name + Logout button

- **Footer**
  - Social media links
  - Contact Us section

---

###  Home Page
- Hero Banner with **"Find Your Next Read"**
- "Browse Now" button → redirects to All Books
- Marquee section:
  - “New Arrivals | Special Discounts | Trending Books”
- Featured Books (Top 4 from JSON/API)
- Extra Sections (custom-designed by developer)

---

###  Authentication
#### Login
- Email & Password login form
- Google Social Login
- Redirect to Home after success
- Error handling with toast/messages
- Link to Register page

#### Register
- Fields: Name, Email, Photo URL, Password
- Redirect to Login after successful registration
- Google Social Login support
- Link to Login page

---

###  All Books Page
- Search bar (search by book title)
- Book cards display:
  - Image
  - Title
  - "Details" button → Book Details page
- Category Sidebar Filter:
  - Story
  - Tech
  - Science

###  Book Details Page (Private Route)
- Only accessible for logged-in users
- Layout:
  - Left: Book cover image
  - Right: Details (Title, Author, Description, Available Quantity)
- Action:
  - "Borrow This Book" button
    - If logged out → redirect to Login
    - Shows confirmation toast

---

###  My Profile (Private Route)
- Displays user information
- Update profile feature:
  - Update Name & Image
  - Redirect to update form page

---

##   Challenges Implemented
-  Profile Update system using BetterAuth
-  Category sidebar filtering system
-  Animation/Swiper/React Spring integration (at least one npm package used)

---

##  Tech Stack
- **Next.js**
- **Tailwind CSS**
- **HeroUI**
- **BetterAuth**
- JSON Data / API Integration

---

##  JSON Data Structure

```json
{
  "id": 1,
  "title": "Book Title",
  "author": "Author Name",
  "description": "Book description...",
  "category": "Story | Tech | Science",
  "available_quantity": 5,
  "image_url": "https://example.com/image.jpg"
}

