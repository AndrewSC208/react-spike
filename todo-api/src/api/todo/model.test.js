import { Todo } from '.'

let todo

beforeEach(async () => {
  todo = await Todo.create({ test: 'test', completed: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = todo.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(todo.id)
    expect(view.test).toBe(todo.test)
    expect(view.completed).toBe(todo.completed)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = todo.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(todo.id)
    expect(view.test).toBe(todo.test)
    expect(view.completed).toBe(todo.completed)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
