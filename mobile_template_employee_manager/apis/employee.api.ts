import { axiosInstance } from "@/utils/axios-intance";
import { Employee } from "@/data/mockData";

export interface EmployeeSearchParams {
  keyword?: string;
  positions?: number[];
  statuses?: string[];
  page?: number;
  size?: number;
}

export const searchEmployees = async (
  params: EmployeeSearchParams = {}
): Promise<{
  content: Employee[];
  totalElements: number;
  totalPages: number;
  page: number;
}> => {
  try {
    const res = await axiosInstance.get("/employees/search-paging", {
      params: {
        keyword: params.keyword || "",
        positionIds: params.positions?.join(",") || "",
        statuses: params.statuses?.join(",") || "",
        page: params.page || 1,
        size: params.size || 10,
      },
    });

    const data = res.data?.data || res.data;

    return {
      content: data.content || [],
      totalElements: data.totalElements || 0,
      totalPages: data.totalPages || 1,
      page: data.page || 1,
    };
  } catch (error) {
    console.error("Lỗi khi tìm kiếm nhân viên:", error);
    throw error;
  }
};

export const createEmployee = async (employee: Partial<Employee>) => {
  try {
    const res = await axiosInstance.post("/employees", employee);
    console.log("Thêm mới nhân viên thành công:", res.data);
    return res.data;
  } catch (error: any) {
    console.error(
      "Lỗi khi thêm nhân viên:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const updateEmployee = async (
  id: string,
  employee: Partial<Employee>
) => {
  try {
    const res = await axiosInstance.put(`/employees/${id}`, employee);
    console.log("Cập nhật nhân viên thành công:", res.data);
    return res.data;
  } catch (error: any) {
    console.error(
      "Lỗi khi cập nhật nhân viên:",
      error.response?.data || error.message
    );
    throw error;
  }
};

export const deleteEmployee = async (id: string) => {
  try {
    const res = await axiosInstance.delete(`/employees/${id}`);
    console.log("Xóa nhân viên thành công:", res.data);
    return res.data;
  } catch (error: any) {
    console.error(
      "Lỗi khi xóa nhân viên:",
      error.response?.data || error.message
    );
    throw error;
  }
};
