import Router from 'koa-router';
import {
  list,
  write,
  read,
  remove,
  update,
  checkObjectId,
} from '@/api/posts/posts.ctrl';

const posts = new Router();
posts.get('/', list);
posts.post('/', write);
posts.get('/:id', checkObjectId, read);
posts.delete('/:id', checkObjectId, remove);
posts.patch('/:id', checkObjectId, update);

export default posts;
