export interface Todo {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  due_date?: string;
  parent_id?: number;
  list_id: number;
  order_index: number;
  created_at: string;
  updated_at: string;
  // Relations
  sub_todos?: Todo[];
  tags?: Tag[];
}

export interface List {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
}

export interface Tag {
  id: number;
  name: string;
  color: string;
  created_at: string;
}

export interface CreateTodoRequest {
  title: string;
  description?: string;
  due_date?: string;
  parent_id?: number;
  list_id: number;
}

export interface UpdateTodoRequest {
  title?: string;
  description?: string;
  completed?: boolean;
  due_date?: string;
  order_index?: number;
}

export interface CreateListRequest {
  name: string;
}

export interface CreateTagRequest {
  name: string;
  color: string;
} 