export default function SearchHeader({
  totalPosts,
  currentShowing,
  categoryName,
}) {
  return (
    <div className="main-title main-title__search spacing">
      <h2>
        Hiển thị <strong>{currentShowing}</strong> trên tổng số <strong>{totalPosts}</strong> bài
        viết tìm được cho danh mục <strong>{categoryName}</strong>
      </h2>
    </div>
  );
}
