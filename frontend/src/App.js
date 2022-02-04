import React from "react";
import { Routes, Route } from "react-router-dom";

// client
import ClientLayout from "./layouts/client/ClientLayout";
import ClientHomeScreen from "./screens/client/HomeScreen";
import AboutScreen from "./screens/client/AboutScreen";
import PostsScreen from "./screens/client/PostsScreen";

// admin
import AdminLayout from "./layouts/admin/AdminLayout";
import AdminHomeScreen from "./screens/admin/home/HomeScreen";
// posts
import AllPostsScreen from "./screens/admin/posts/AllPostsScreen";
import AddPostScreen from "./screens/admin/posts/AddPostScreen";
import CategoriesScreen from "./screens/admin/posts/CategoriesScreen";
import TagsScreen from "./screens/admin/posts/TagsScreen";
// media
import LibraryScreen from "./screens/admin/media/LibraryScreen";
import AddLibraryScreen from "./screens/admin/media/AddLibraryScreen";
// comments
import CommentsScreen from "./screens/admin/comments/CommentsScreen";
// users
import AllUsersScreen from "./screens/admin/users/AllUsersScreen";
import AddUserScreen from "./screens/admin/users/AddUserScreen";
import ProfileScreen from "./screens/admin/users/ProfileScreen";

const App = () => {
  return (
    <>
      <Routes>
        {/* client routes */}
        <Route path="/" element={<ClientLayout />}>
          <Route path="/" element={<ClientHomeScreen />} />
          <Route path="/posts" element={<PostsScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Route>

        {/* admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin" element={<AdminHomeScreen />} />
          {/* post */}
          <Route path="/admin/post/all-posts" element={<AllPostsScreen />} />
          <Route path="/admin/post/add-new" element={<AddPostScreen />} />
          <Route path="/admin/post/categories" element={<CategoriesScreen />} />
          <Route path="/admin/post/tags" element={<TagsScreen />} />
          {/* media */}
          <Route path="/admin/media/library" element={<LibraryScreen />} />
          <Route
            path="/admin/media/library/add-new"
            element={<AddLibraryScreen />}
          />
          {/* comments */}
          <Route path="/admin/comments" element={<CommentsScreen />} />
          {/* users */}
          <Route path="/admin/users/all-users" element={<AllUsersScreen />} />
          <Route path="/admin/users/add-new" element={<AddUserScreen />} />
          <Route path="/admin/users/profile" element={<ProfileScreen />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
