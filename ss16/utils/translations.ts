// Định nghĩa các ngôn ngữ hỗ trợ
export type Language = "en" | "vi";

// Định nghĩa các key translation
export interface TranslationKeys {
  // Cơ bản
  greeting: string;
  description: string;
  button: string;
  
  // Vị trí công việc
  positionName: string;
  status: string;
  active: string;
  inactive: string;
  
  // Nút bấm
  save: string;
  cancel: string;
  delete: string;
  edit: string;
  add: string;
  
  // Trạng thái
  loading: string;
}

// Đối tượng chứa tất cả bản dịch
export const translations: Record<Language, TranslationKeys> = {
  en: {
    greeting: "Hello!",
    description: "This is an example of language switching.",
    button: "Change to Vietnamese",
    
    positionName: "Position Name",
    status: "Status",
    active: "Active",
    inactive: "Inactive",
    
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    add: "Add",
    
    loading: "Loading...",
  },
  vi: {
    greeting: "Xin chào!",
    description: "Đây là ví dụ về thay đổi ngôn ngữ.",
    button: "Chuyển sang Tiếng Anh",
    
    positionName: "Tên vị trí",
    status: "Trạng thái",
    active: "Đang hoạt động",
    inactive: "Không hoạt động",
    
    save: "Lưu",
    cancel: "Hủy",
    delete: "Xóa",
    edit: "Sửa",
    add: "Thêm",
    
    loading: "Đang tải...",
  },
};

// Hàm helper để lấy bản dịch
export const getTranslation = (
  language: Language,
  key: keyof TranslationKeys
): string => {
  // Trả về bản dịch, nếu không có thì trả về key
  return translations[language][key] || key;
};
