import User from '../models/Users'
import imageView from './image_view'

export default {
  render(user: User) {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      images: imageView.renderMany(user.images)
    }
  },
  renderMany(users: User[]) {
    return users.map(user => this.render(user))
  }
}