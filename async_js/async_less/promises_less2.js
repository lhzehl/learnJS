function getPost(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostComments(post) {
  const { id } = post;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ post, comments: res });
      }
    );
  });
}

function getPostCreatedUser(data) {
  const {
    post: { userId },
  } = data;
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ ...data, user: res });
      }
    );
  });
}

// getPost(1)
//   .then((post) => getPostComments(post))
//   .then((data) => getPostCreatedUser(data))
//   .then((fullData) => console.log(fullData))
//   .catch((err) => console.log(err))
//   .finaly(() => console.log("finaly"));

function getPost2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostComments2(id) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

function getPostCreatedUser2(dauserIdta) {
  return new Promise((resolve, reject) => {
    myHttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve(res);
      }
    );
  });
}

Promise.all([getPost2(1), getPostComments2(1), getPostCreatedUser2(1)])
  .then(([post, comments, user]) => console.log(post, comments, user))
  .catch((err) => console.log(err));
