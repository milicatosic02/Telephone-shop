# Web App – Telephone Shop

This project was developed as part of the university course **"Scripting Languages"**.  
The assignment was to design and implement a simple **web shop application**.  
The chosen theme was a **telephone shop**, adapted for the Serbian market, so product names and labels are written in Serbian.  

The application includes two main roles:  
- **Admin side** – where administrators can manage products and user information.  
- **User side** – where customers can browse, select, and order flowers.  

---

## Architecture  

- **Authentication service** – handles user and admin login and registration.  
- **Backend service** – communicates with the database and processes requests.  
- **Frontend service** – provides the interface for both customers and administrators.  

---

## Running the Application  

1. Start the local server and database (e.g., using XAMPP).  
2. Deploy the provided database structure.  
3. From each service folder (authentication, backend, frontend), run:  
   ```bash
   npm install
   node app
