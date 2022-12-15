// 1.
// then
const time = 3000;
const mySetTimeout = function (sec) {
  return new Promise(function (resolve) {
    setTimeout(resolve, sec);
  });
};
mySetTimeout(time).then(() => console.log(`wait ${time} ms`));

//async
const mySetTimeout2 = async function (sec) {
  await new Promise(function (resolve) {
    setTimeout(resolve, sec);
  });
};
mySetTimeout2(time).then(() => console.log(`wait ${time} ms`));

// 2
// then catch
const getFaceBookProfile = function (id, friendId) {
  return new Promise(function (resolve, reject) {});
};

getFaceBookProfile(1, "(profile)")
  .then((resolve) =>
    getFaceBookProfile("profile.friends[0].id", "(friendProfile)")
  )
  .then((res) =>
    getFaceBookProfile("friendProfile.friends[0].id", "(friendsFriend)")
  )
  .then((res) =>
    getFaceBookProfile("friendsFriend.friends[0].id", "(finalProfile)")
  )
  .then((res) => console.log("Finally, I have all the profiles"))
  .catch((err) => console.log("error"));

// async
const getFaceBookProfile2 = async function (id, friendId) {
  try {
    await getFaceBookProfile(1, "(profile)");
    await getFaceBookProfile("profile.friends[0].id", "(friendProfile)");
    await getFaceBookProfile("friendProfile.friends[0].id", "(friendsFriend)");
    await getFaceBookProfile("friendsFriend.friends[0].id", "(finalProfile)");
  } catch (err) {
    console.log("error");
  } finally {
    console.log("Finally, I have all the profiles");
  }
};
