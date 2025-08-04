/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { FaHeart, FaReply, FaStar } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { comments as defaultComments } from "../../../../data/index";

const RecipeCommentPage = ({ recipe }) => {
  if (!recipe) return null;

  const [comments,] = useState(defaultComments);
  const [newComment, setNewComment] = useState("");
  const [loadMoreClicked, setLoadMoreClicked] = useState(false);
  const [postedComments, setPostedComments] = useState([]);

  const handlePost = () => {
    if (newComment.trim() === "") return;

    const commentObj = {
      id: Date.now(),
      name: "You",
      avatar: "/default-avatar.jpg", // 👈 use a real avatar if needed
      time: "Just now",
      comment: newComment,
      likes: 0,
      replies: [],
    };

    setPostedComments((prev) => [commentObj, ...prev]);
    setNewComment(""); // clear textarea
  };

  const visibleComments = loadMoreClicked
    ? [...postedComments, ...comments]
    : [...comments];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Comment</h2>

      {/* Render comments */}
      <div className="space-y-8">
        {visibleComments.map((c) => (
          <div key={c.id} className="border-b pb-6">
            <div className="flex gap-4 items-start">
              <img src={c.avatar} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold">{c.name}</h4>
                  <HiOutlineDotsHorizontal className="text-gray-500" />
                </div>
                <p className="text-sm text-gray-500">{c.time}</p>
                <p className="mt-2 text-gray-800">{c.comment}</p>
                <div className="flex gap-6 text-sm text-gray-600 mt-3 items-center">
                  <button className="flex items-center gap-1 hover:text-[#C46C5F]">
                    <FaReply className="text-base" /> Reply
                  </button>
                  <button className="flex items-center gap-1 hover:text-[#C46C5F]">
                    <FaHeart className="text-base" /> {c.likes}
                  </button>
                </div>

                {/* Replies */}
                {c.replies.map((r) => (
                  <div key={r.id} className="flex gap-4 mt-6">
                    <img src={r.avatar} className="w-10 h-10 rounded-full" />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{r.name}</h4>
                        <HiOutlineDotsHorizontal className="text-gray-500" />
                      </div>
                      <p className="text-sm text-gray-500">{r.time}</p>
                      <p className="mt-2 text-gray-800">{r.comment}</p>
                      <div className="flex gap-6 text-sm text-gray-600 mt-3 items-center">
                        <button className="flex items-center gap-1 hover:text-[#C46C5F]">
                          <FaReply className="text-base" /> Reply
                        </button>
                        <button className="flex items-center gap-1 hover:text-[#C46C5F]">
                          <FaHeart className="text-base" /> {r.likes}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {!loadMoreClicked && (
          <button
            onClick={() => setLoadMoreClicked(true)}
            className="border border-[#C46C5F] text-[#C46C5F] px-4 py-2 rounded hover:bg-[#C46C5F] hover:text-white transition text-sm mx-auto block"
          >
            Load more comments
          </button>
        )}
      </div>

      {/* Rating & Add Comment */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-3">
          Rate this recipe and share your opinion
        </h3>
        <div className="flex items-center mb-4 text-[#C46C5F]">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} />
          ))}
          <FaStar className="text-gray-300" />
        </div>
        <textarea
          placeholder="Type here..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border p-4 rounded-md text-sm resize-none"
          rows={4}
        ></textarea>
        <button
          onClick={handlePost}
          className="bg-[#C46C5F] text-white px-6 py-2 rounded mt-4 float-right hover:bg-[#b65d52] transition"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default RecipeCommentPage;
