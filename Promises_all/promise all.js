function createPost(post) {
    return new Promise((resolve) => {
      // Simulating post creation delay of 1 second
      setTimeout(() => {
        resolve(post);
      }, 1000);
    });
  }
  
  function updateLastUserActivityTime() {
    return new Promise((resolve) => {
      // Simulating last activity time update delay of 1 second
      setTimeout(() => {
        const lastActivityTime = new Date().toLocaleTimeString();
        resolve(lastActivityTime);
      }, 1000);
    });
  }
  
  function createPostAndUpdateActivity(post) {
    const postPromise = createPost(post);
    const activityPromise = updateLastUserActivityTime();
  
    Promise.all([postPromise, activityPromise]).then(([post, lastActivityTime]) => {
      console.log("Posts created:", post);
      console.log("Last activity time:", lastActivityTime);
    });
  }
  
  // Example usage:
  createPostAndUpdateActivity("this is my promise");