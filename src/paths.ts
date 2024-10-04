export const path = {
  homePage() {
    return '/';
  },
  createTopic() {
    return `/topics/new`;
  },
  viewTopic(slug: string) {
    return `/topics/${slug}`;
  },
  createPost(slug: string) {
    return `/topics/${slug}/post/new`;
  },
  viewPost(slug: string, postId: string) {
    return `/topics/${slug}/posts/${postId}`;
  },
};
