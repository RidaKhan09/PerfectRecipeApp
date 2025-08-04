const logout = async (req, res, next) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "Lax",
  });

  res.status(200).json({ message: "Logout successful", status: true });
};

module.exports = logout;
