# **Knex PostgreSQL Demo Application**

This is a sample Node.js application using Knex.js as the SQL query builder, PostgreSQL as the database, and Docker for database setup. The app provides a basic CRUD interface for a `users` table.

---

## **Features**

- PostgreSQL integration via Docker
- Environment-based configuration using `.env`
- CRUD operations on `users` table
- Knex migrations and seed support
- Express.js for handling HTTP requests

---

## **Getting Started**

Follow these instructions to set up and run the application locally.

---

### **Commands to Run in a Single Terminal**

```bash
# 1. Clone this repository:
git clone https://github.com/Yogesh01000100/knex-pg-demo.git
cd knex

# 2. Install dependencies:
npm install

# 3. Create the .env file and add the required environment variables:
touch src/config/.env

# Add the following content to .env
# DB_HOST=127.0.0.1
# DB_PORT=5432
# DB_USER=postgres
# DB_PASSWORD=password
# DB_NAME=mydb
# PORT=3009

# 4. Start the PostgreSQL database using Docker:
npm run db:start

# 5. To stop the database:
npm run db:stop

# 6. To reset the database (removes all data and volumes):
npm run db:reset

# 7. Apply database migrations to create the tables:
npm run migrate

# 8. Start the application:
npm start
