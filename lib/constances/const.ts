
export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const SESSIONSTORAGE = {
  TOKEN: 'token',
  USER: 'user',
  ID: 'id',
  LOCATION: 'location'
}
export const ID = {
  create: "create"
}
export const ROLE = {
  ADMIN: { name: 'Admin', value: "admin" },
  RIDER: { name: 'Người vận chuyển', value: "rider" },
  OPERATOR: { name: 'Người vận hành', value: "operator" }
}
export const GENDER = {
  FEMALE: { value: 'female', name: "Nữ" },
  MALE: { value: 'male', name: 'Nam' }
}
export const TITLECARD = {
  CREATE: { value: 'create', title: "Thêm mới" },
  EDIT: { value: 'edit', title: 'Sửa thông tin' }
}

export const REGEX_CHECK = {
  TEL : /^(84|0[3|5|7|8|9])+([0-9]{8})\$/,
  DATE : "^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\\d{4}$",
  EMAIL : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
// export const REGEX_TEL = "^(84|0[3|5|7|8|9])+([0-9]{8})\$";
// export const REGEX_DATE = "^(0?[1-9]|[12][0-9]|3[01])[/](0?[1-9]|1[012])[/]\\d{4}$";
// export const REGEX_EMAIL = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const ERR_MSG = {
  EMAIL: "Sai định dạng email, vui lòng kiểm tra lại",
  REQUIRED: "Không được để trống!",
  MIN: "Giá trị phải lớn hơn: ",
  MAX: "Giá trị phải nhỏ hơn: ",
  MIN_LENGTH: "Độ dài phải lớn hơn: ",
  MAX_LENGTH: "Độ dài phải nhỏ hơn: ",
  P_TEL: "Vui lòng kiểm tra lại số điện thoại",
  P_DATE: "Sai định dạng thời gian, vui lòng kiểm tra lại",
  CF_PASSWORD: "Mật khẩu không trùng nhau",
};

function colorStatus(text: string, color: string) {
  return { text, color };
}


export enum TYPE_MESSAGE {
  Error = "error",
  Warning = "warning",
  Info = "info",
  Success = "success"
}

export const GroupReport = {
  ORG: {code : "org", label: "Công ty"},
  USER: {code: "user", label: "Nhân viên"},
  RIDER: {code: "rider", label: "Lái xe"}
}
export const DefaultPassWord = {
  pass : "123456"
}

