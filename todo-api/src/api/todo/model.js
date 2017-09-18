import mongoose, { Schema } from 'mongoose'

const todoSchema = new Schema({
  text: {
    type: String
  },
  completed: {
    type: Boolean
  }
}, {
  timestamps: true
})

todoSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      text: this.text,
      completed: this.completed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Todo', todoSchema)

export const schema = model.schema
export default model
