export default class ReadablesService {
  static getPosts() {
    fetch(`/posts`, {
      method: 'GET'
    }).then((response) => {
      return response;
    });
  }
}
