const combine = (...subjects) => ({
  observe: (observer) => {
    subjects.forEach((subject) => subject.observe(observer));
  },
});
