```Update 2:
BÁO CÁO WEBSITE GIỚI THIỆU SẢN PHẨM
I. Tổng quan
+ Website cho phép:
+ Hiển thị sản phẩm
+ Xem chi tiết sản phẩm
+ Phân quyền User / Admin
+ Tương tác: tym, review, đánh giá sao
II. Level 1
1. Main Page (Overview)
+ Hiển thị danh sách sản phẩm
+ Refresh → shuffle sản phẩm
+ Click sản phẩm → sang trang chi tiết
+ Nút xóa → xóa sản phẩm (có confirm)
+ Nút thêm sản phẩm (dưới list) → sang trang thêm
2. Detail Page
+ Hiển thị: tiêu đề, ảnh, mô tả
+ Nút sửa → chỉnh sửa sản phẩm
3. Add New Page
+ Thêm sản phẩm mới: tiêu đề, ảnh, mô tả
III. Level 2
1. Navigation
+ Main Page → có nút sang User Page
+ User Page → có nút sang Admin Page
2. User Page
+ Xem danh sách sản phẩm
+ Xem chi tiết sản phẩm
+ Tym sản phẩm (like)
+ Đánh giá sao
+ Viết review
Xem danh sách sản phẩm đã tym
3. Admin Page
+ Thêm sản phẩm
+ Sửa sản phẩm
+ Xóa sản phẩm
4. Detail Page (cập nhật)
+ User:
+ Xem chi tiết
+ Tym, đánh giá, review
+ Admin:
+ Có thêm quyền sửa sản phẩm
5. Main Page (cập nhật)
+ Hiển thị:
+ Danh sách sản phẩm
+ Rating trung bình
+ Số lượt tym
IV. Database
+ Product: lưu thông tin sản phẩm
+ Review: lưu đánh giá
+ Rating: lưu số sao
+ Like: lưu sản phẩm đã tym
V. Công nghệ
+ Hasura (GraphQL API từ database)

```

Flow FE GỌI ĐẾN SERVER

React (muốn data)
↓
Apollo (dịch sang GraphQL + gửi request)
↓
Hasura (xử lý query, tự tạo API thêm sửa xóa)
↓
Neon (trả data)
↓
Hasura → Apollo → React

Workflow xử lí nút add
-User chọn file ảnh từ máy
-> React giữ file đó trong state, tạo preview
-> Khi add, react upload file lên cloudinary
-> Cloudinary trả về 1 link ảnh thật
-> React lấy link đó gửi lên Hasura
-> Hasura lưu link đó vào DB cùng với thông tin sản phẩm
