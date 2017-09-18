import request from 'supertest-as-promised'
import express from '../../services/express'
import routes, { Todo } from '.'

const app = () => express(routes)

let todo

beforeEach(async () => {
  todo = await Todo.create({})
})

test('POST /todos 201', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ test: 'test', completed: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.test).toEqual('test')
  expect(body.completed).toEqual('test')
})

test('GET /todos 200', async () => {
  const { status, body } = await request(app())
    .get('/')
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /todos/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`/${todo.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(todo.id)
})

test('GET /todos/:id 404', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /todos/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`/${todo.id}`)
    .send({ test: 'test', completed: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(todo.id)
  expect(body.test).toEqual('test')
  expect(body.completed).toEqual('test')
})

test('PUT /todos/:id 404', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ test: 'test', completed: 'test' })
  expect(status).toBe(404)
})

test('DELETE /todos/:id 204', async () => {
  const { status } = await request(app())
    .delete(`/${todo.id}`)
  expect(status).toBe(204)
})

test('DELETE /todos/:id 404', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  expect(status).toBe(404)
})
