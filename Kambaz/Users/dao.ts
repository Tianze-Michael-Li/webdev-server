import { v4 as uuidv4 } from "uuid";
export default function UsersDao(db) {
  const findUserByCredentials = (username, password) =>
    db.users.find(
      (user) => user.username === username && user.password === password,
    );
  const findUserByUsername = (username) =>
    db.users.find((user) => user.username === username);
  const findUserById = (userId) => db.users.find((user) => user._id === userId);
  const createUser = (user) => {
    const newUser = {
      firstName: "",
      lastName: "",
      email: "",
      role: "STUDENT",
      loginId: "",
      section: "",
      lastActivity: "",
      totalActivity: "",
      ...user,
      _id: uuidv4(),
    };
    db.users = [...db.users, newUser];
    return newUser;
  };
  const updateUser = (userId, user) => {
    db.users = db.users.map((u) =>
      u._id === userId ? { ...u, ...user, _id: userId } : u,
    );
    return findUserById(userId);
  };
  const findUsersForCourse = (courseId) =>
    db.users.filter((user) =>
      db.enrollments.some(
        (enrollment) =>
          enrollment.user === user._id && enrollment.course === courseId,
      ),
    );
  return {
    findUserByCredentials,
    findUserByUsername,
    findUserById,
    createUser,
    updateUser,
    findUsersForCourse,
  };
}
