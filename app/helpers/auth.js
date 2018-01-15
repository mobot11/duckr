const auth = async () => {
  try {
    const user = await setTimeout(() => {
      return {
        name: 'Dylan',
        avatar:
          'https://pbs.twimg.com/profile_images/378800000605536525/891a881bde93a1fc3e289528fb859b96_400x400.jpeg',
        uid: 'dylanmoberg',
      };
    }, 2000);

    return user;
  } catch (err) {
    throw new Error(err);
  }
};

export default auth;
