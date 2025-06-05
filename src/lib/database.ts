import Database from 'better-sqlite3';
import path from 'path';

// Create database connection
const dbPath = path.join(process.cwd(), 'data', 'todos.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('foreign_keys = ON');

// Database schema initialization
export function initializeDatabase() {
  // Lists table
  db.exec(`
    CREATE TABLE IF NOT EXISTS lists (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Todos table
  db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed BOOLEAN DEFAULT FALSE,
      due_date DATETIME,
      parent_id INTEGER,
      list_id INTEGER NOT NULL,
      order_index INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (parent_id) REFERENCES todos(id) ON DELETE CASCADE,
      FOREIGN KEY (list_id) REFERENCES lists(id) ON DELETE CASCADE
    )
  `);

  // Tags table
  db.exec(`
    CREATE TABLE IF NOT EXISTS tags (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      color TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Todo-tags junction table
  db.exec(`
    CREATE TABLE IF NOT EXISTS todo_tags (
      todo_id INTEGER,
      tag_id INTEGER,
      PRIMARY KEY (todo_id, tag_id),
      FOREIGN KEY (todo_id) REFERENCES todos(id) ON DELETE CASCADE,
      FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
    )
  `);

  // Create default list if none exists
  const defaultList = db.prepare('SELECT id FROM lists LIMIT 1').get();
  if (!defaultList) {
    db.prepare('INSERT INTO lists (name) VALUES (?)').run('My Tasks');
  }
}

// Create data directory if it doesn't exist
import fs from 'fs';
const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize database
initializeDatabase();

export default db; 